'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Phrase, ToeicLevel, ToeicPart, getPhrasesByLevelAndPart } from '@/data/toeicPhrases';

interface GameState {
  currentPhrase: Phrase | null;
  userInput: string;
  score: number;
  wpm: number;
  accuracy: number;
  isGameOver: boolean;
  showJapanese: boolean;
  startTime: number | null;
  totalKeystrokes: number;
  correctKeystrokes: number;
  questionsCompleted: number;
  isPlaying: boolean;
}

interface TypingGameProps {
  level: ToeicLevel;
  part: ToeicPart;
  onGameEnd: (score: number, wpm: number, accuracy: number) => void;
}

const QUESTIONS_TO_COMPLETE = 5;
const WPM_UPDATE_INTERVAL = 1000;

export default function TypingGame({ level, part, onGameEnd }: TypingGameProps) {
  const [gameState, setGameState] = useState<GameState>({
    currentPhrase: null,
    userInput: '',
    score: 0,
    wpm: 0,
    accuracy: 100,
    isGameOver: false,
    showJapanese: true,
    startTime: null,
    totalKeystrokes: 0,
    correctKeystrokes: 0,
    questionsCompleted: 0,
    isPlaying: false,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesisRef.current = window.speechSynthesis;
    }
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
    };
  }, []);

  const playPhrase = useCallback(() => {
    if (!gameState.currentPhrase || !speechSynthesisRef.current) return;

    const utterance = new SpeechSynthesisUtterance(gameState.currentPhrase.english);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // 少しゆっくりめに
    speechSynthesisRef.current.cancel(); // 前の音声をキャンセル
    speechSynthesisRef.current.speak(utterance);
    setGameState(prev => ({ ...prev, isPlaying: true }));

    utterance.onend = () => {
      setGameState(prev => ({ ...prev, isPlaying: false }));
    };
  }, [gameState.currentPhrase]);

  const startGame = useCallback(() => {
    const phrases = getPhrasesByLevelAndPart(level, part);
    if (phrases.length === 0) return;

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setGameState(prev => ({
      ...prev,
      currentPhrase: randomPhrase,
      userInput: '',
      score: 0,
      wpm: 0,
      accuracy: 100,
      isGameOver: false,
      startTime: Date.now(),
      totalKeystrokes: 0,
      correctKeystrokes: 0,
      questionsCompleted: 0,
      isPlaying: false,
    }));
  }, [level, part]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (!gameState.startTime || gameState.isGameOver) return;

    const wpmTimer = setInterval(() => {
      if (gameState.startTime) {
        const elapsedMinutes = (Date.now() - gameState.startTime) / 60000;
        const wordsTyped = gameState.correctKeystrokes / 5;
        const currentWpm = Math.round(wordsTyped / elapsedMinutes);
        
        setGameState(prev => ({
          ...prev,
          wpm: currentWpm,
        }));
      }
    }, WPM_UPDATE_INTERVAL);

    return () => clearInterval(wpmTimer);
  }, [gameState.startTime, gameState.isGameOver, gameState.correctKeystrokes]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameState.isGameOver || !gameState.currentPhrase) return;

    const input = e.target.value;
    const currentPhrase = gameState.currentPhrase.english;
    let newCorrectKeystrokes = gameState.correctKeystrokes;
    let newTotalKeystrokes = gameState.totalKeystrokes;

    // 入力の正確性をチェック
    for (let i = 0; i < input.length; i++) {
      if (i < currentPhrase.length && input[i] === currentPhrase[i]) {
        newCorrectKeystrokes++;
      }
      newTotalKeystrokes++;
    }

    // フレーズが完了した場合
    if (input === currentPhrase) {
      const newQuestionsCompleted = gameState.questionsCompleted + 1;
      
      if (newQuestionsCompleted >= QUESTIONS_TO_COMPLETE) {
        // ゲームクリア
        setGameState(prev => ({
          ...prev,
          isGameOver: true,
          score: prev.score + 100,
          correctKeystrokes: newCorrectKeystrokes,
          totalKeystrokes: newTotalKeystrokes,
          accuracy: Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100),
          questionsCompleted: newQuestionsCompleted,
        }));
        onGameEnd(
          gameState.score + 100,
          gameState.wpm,
          Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100)
        );
      } else {
        // 次の問題へ
        const phrases = getPhrasesByLevelAndPart(level, part);
        const nextPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        
        setGameState(prev => ({
          ...prev,
          currentPhrase: nextPhrase,
          userInput: '',
          score: prev.score + 100,
          correctKeystrokes: newCorrectKeystrokes,
          totalKeystrokes: newTotalKeystrokes,
          accuracy: Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100),
          questionsCompleted: newQuestionsCompleted,
        }));
      }
    } else {
      setGameState(prev => ({
        ...prev,
        userInput: input,
        correctKeystrokes: newCorrectKeystrokes,
        totalKeystrokes: newTotalKeystrokes,
        accuracy: Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100),
      }));
    }
  };

  const toggleJapanese = () => {
    setGameState(prev => ({
      ...prev,
      showJapanese: !prev.showJapanese,
    }));
  };

  if (!gameState.currentPhrase) {
    return (
      <div className="text-center p-4">
        <p className="text-gray-600">フレーズが見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          残り問題数: {QUESTIONS_TO_COMPLETE - gameState.questionsCompleted}問
        </div>
        <div className="flex gap-4">
          <div className="text-sm">
            WPM: {gameState.wpm}
          </div>
          <div className="text-sm">
            正確率: {gameState.accuracy}%
          </div>
          <div className="text-sm">
            スコア: {gameState.score}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={playPhrase}
            disabled={gameState.isPlaying}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              gameState.isPlaying
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            {gameState.isPlaying ? '再生中...' : 'Repeat'}
          </button>
        </div>
        {gameState.showJapanese && (
          <div className="text-gray-600 mb-2 text-center">
            {gameState.currentPhrase.japanese}
          </div>
        )}
        <div className="text-sm text-gray-500 text-center">
          {gameState.currentPhrase.explanation}
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={gameState.userInput}
          onChange={handleInputChange}
          disabled={gameState.isGameOver}
          className="w-full p-2 border rounded-lg font-mono text-lg"
          placeholder="ここにタイプしてください..."
          autoFocus
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={toggleJapanese}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {gameState.showJapanese ? '日本語を隠す' : '日本語を表示'}
        </button>
        {gameState.isGameOver && (
          <button
            onClick={startGame}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            もう一度挑戦
          </button>
        )}
      </div>
    </div>
  );
} 