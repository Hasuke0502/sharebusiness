'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Phrase, ToeicLevel, ToeicPart, getPhrasesByLevelAndPart } from '@/data/toeicPhrases';
import { updatePhraseProgress, isPhrasesMastered, forceInvalidateCache } from '@/utils/progressStorage';

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
  showFeedback: boolean;
  isCorrect: boolean;
  feedbackMessage: string;
  usedPhraseIds: string[];
  audioInitialized: boolean;
}

interface TypingGameProps {
  level: ToeicLevel;
  part: ToeicPart;
  onGameEnd: (score: number, wpm: number, accuracy: number) => void;
  skipMasteredPhrases: boolean;
  onProgressUpdate?: () => void;
}

const QUESTIONS_TO_COMPLETE = 15;
const WPM_UPDATE_INTERVAL = 1000;

export default function TypingGame({ level, part, onGameEnd, skipMasteredPhrases, onProgressUpdate }: TypingGameProps) {
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
    showFeedback: false,
    isCorrect: false,
    feedbackMessage: '',
    usedPhraseIds: [],
    audioInitialized: false,
  });
  const [totalPhrases, setTotalPhrases] = useState<number>(0);
  const [availablePhrases, setAvailablePhrases] = useState<Phrase[]>([]);
  const [initialLoadComplete, setInitialLoadComplete] = useState<boolean>(false);

  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // 利用可能なフレーズを取得（マスター済みのフレーズをフィルタリング）
  const getAvailablePhrases = useCallback((level: ToeicLevel, part: ToeicPart) => {
    const allPhrases = getPhrasesByLevelAndPart(level, part);
    
    if (!skipMasteredPhrases) {
      return allPhrases;
    }
    
    const nonMasteredPhrases = allPhrases.filter(phrase => !isPhrasesMastered(phrase.id));
    return nonMasteredPhrases.length > 0 ? nonMasteredPhrases : allPhrases;
  }, [skipMasteredPhrases]);

  // レベルとパートが変更された、またはスキップ設定が変更されたときに利用可能なフレーズを更新
  useEffect(() => {
    const phrases = getPhrasesByLevelAndPart(level, part);
    setTotalPhrases(phrases.length);
    
    const availablePhrasesArray = getAvailablePhrases(level, part);
    setAvailablePhrases(availablePhrasesArray);
  }, [level, part, skipMasteredPhrases, getAvailablePhrases]);

  // AudioContextの初期化
  const initAudioContext = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || ((window as unknown) as {webkitAudioContext: typeof AudioContext}).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
        
        // iOS SafariでのAudioContext対応
        if (audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        
        setGameState(prev => ({ ...prev, audioInitialized: true }));
      }
    } catch (error) {
      console.error('AudioContext初期化エラー:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesisRef.current = window.speechSynthesis;
      
      // ユーザーインタラクションイベントでAudioContextを初期化
      const userInteractionEvents = ['click', 'touchstart', 'keydown', 'touchend'];
      const handleUserInteraction = () => {
        initAudioContext();
        userInteractionEvents.forEach(event => 
          document.removeEventListener(event, handleUserInteraction)
        );
      };
      
      userInteractionEvents.forEach(event => 
        document.addEventListener(event, handleUserInteraction)
      );

      // 初回のモバイル対応として、ロード時に初期化を試みる
      setTimeout(initAudioContext, 500);
    }
    
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
      
      const events = ['click', 'touchstart', 'keydown', 'touchend'];
      events.forEach(event => document.removeEventListener(event, () => {}));
    };
  }, [initAudioContext]);

  const playSound = useCallback((isCorrect: boolean) => {
    try {
      if (!audioContextRef.current) {
        initAudioContext();
        // まだ初期化できない場合は音を鳴らせない
        if (!audioContextRef.current) return;
      }

      // iOS SafariでのAudioContext対応
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      
      const audioCtx = audioContextRef.current;
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      if (isCorrect) {
        // 正解音
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
        oscillator.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.1); // E6
        oscillator.frequency.setValueAtTime(1760, audioCtx.currentTime + 0.2); // A6
        
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
      } else {
        // 不正解音
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
        oscillator.frequency.setValueAtTime(415.3, audioCtx.currentTime + 0.1); // G#4/Ab4
        
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.4);
      }
    } catch (error) {
      console.error('効果音再生エラー:', error);
    }
  }, [initAudioContext]);

  // フォールバックとしての音声ファイル再生（Web Audio APIが使えない環境用）
  const playSoundFallback = useCallback((isCorrect: boolean) => {
    try {
      const sound = new Audio();
      sound.src = isCorrect ? '/audio/correct.mp3' : '/audio/incorrect.mp3';
      sound.play().catch(e => console.error('音声再生エラー:', e));
    } catch (error) {
      console.error('音声再生フォールバックエラー:', error);
    }
  }, []);

  // 効果音を再生する関数
  const playEffect = useCallback((isCorrect: boolean) => {
    try {
      // Web Audio APIを試す
      playSound(isCorrect);
    } catch (error) {
      console.error('効果音エラー、フォールバックを使用します:', error);
      // フォールバックとして音声ファイル再生を試みる
      playSoundFallback(isCorrect);
    }
  }, [playSound, playSoundFallback]);

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

  // リスト内からランダムに問題を取得（クリア済みの問題は選ばない）
  const getRandomPhrase = useCallback((usedIds: string[]) => {
    // 利用可能なフレーズが0の場合は全フレーズを使用する
    if (availablePhrases.length === 0) {
      return null;
    }

    // 使用済みでない利用可能なフレーズを取得
    const availableUnusedPhrases = availablePhrases.filter(phrase => !usedIds.includes(phrase.id));

    if (availableUnusedPhrases.length === 0) {
      // すべての問題が使用済みの場合、全問題から再度ランダムに選択
      const randomPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
      return randomPhrase;
    }

    const randomPhrase = availableUnusedPhrases[Math.floor(Math.random() * availableUnusedPhrases.length)];
    return randomPhrase;
  }, [availablePhrases]);

  const startGame = useCallback(() => {
    // 利用可能なフレーズが無い場合は全問題を表示
    if (availablePhrases.length === 0) {
      const allPhrases = getPhrasesByLevelAndPart(level, part);
      setAvailablePhrases(allPhrases);
      
      setGameState(prev => ({
        ...prev,
        showFeedback: true,
        isCorrect: true,
        feedbackMessage: 'すべての問題をクリア済みです。全ての問題を表示します。',
      }));
      
      setTimeout(() => {
        const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
        if (randomPhrase) {
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
            showFeedback: false,
            usedPhraseIds: [randomPhrase.id],
          }));
          
          setTimeout(() => {
            playPhrase();
            initAudioContext();
          }, 500);
        }
      }, 1500);
      
      return;
    }

    const randomPhrase = getRandomPhrase([]);
    if (!randomPhrase) return;

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
      showFeedback: false,
      isCorrect: false,
      feedbackMessage: '',
      usedPhraseIds: [randomPhrase.id],
    }));

    setTimeout(() => {
      playPhrase();
      // ゲーム開始時にAudioContextを初期化
      initAudioContext();
    }, 500);
  }, [getRandomPhrase, playPhrase, initAudioContext, level, part, availablePhrases.length]);

  // 初期ロード時とavailablePhrases更新時にゲーム開始
  useEffect(() => {
    if (!initialLoadComplete && availablePhrases.length > 0) {
      startGame();
      setInitialLoadComplete(true);
    }
  }, [availablePhrases, initialLoadComplete, startGame]);

  // skippedMasteredPhrases設定が変更されたらゲームをリセット
  useEffect(() => {
    if (initialLoadComplete) {
      startGame();
    }
  }, [skipMasteredPhrases, initialLoadComplete, startGame]);

  useEffect(() => {
    if (gameState.currentPhrase && gameState.questionsCompleted > 0 && !gameState.isGameOver) {
      setTimeout(() => {
        playPhrase();
      }, 500);
    }
  }, [gameState.currentPhrase, gameState.questionsCompleted, gameState.isGameOver, playPhrase]);

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
    if (gameState.isGameOver) return;

    const input = e.target.value;
    setGameState(prev => ({
      ...prev,
      userInput: input,
      showFeedback: false,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !gameState.isGameOver) {
      e.preventDefault();
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (gameState.isGameOver || !gameState.currentPhrase) return;

    const input = gameState.userInput;
    const currentPhrase = gameState.currentPhrase.english;
    let newCorrectKeystrokes = gameState.correctKeystrokes;
    const newTotalKeystrokes = gameState.totalKeystrokes + input.length;

    const isCorrect = input.trim().toLowerCase() === currentPhrase.trim().toLowerCase();
    
    // 効果音を再生
    playEffect(isCorrect);
    
    // 進捗を保存
    if (gameState.currentPhrase) {
      updatePhraseProgress(gameState.currentPhrase.id, isCorrect);
      forceInvalidateCache();
      
      // カスタムイベントをディスパッチして進捗更新を通知
      const event = new Event('progressUpdated');
      window.dispatchEvent(event);
      
      // 親コンポーネントに通知
      if (isCorrect && onProgressUpdate) {
        onProgressUpdate();
      }
    }
    
    if (isCorrect) {
      newCorrectKeystrokes += input.length;
      const newQuestionsCompleted = gameState.questionsCompleted + 1;
      
      // 正解した場合、スキップ設定がオンの場合は利用可能なフレーズを更新
      // 無限ループを防ぐために、即時のsetAvailablePhrasesを避ける
      let updatedAvailablePhrases: Phrase[] | null = null;
      if (skipMasteredPhrases) {
        // 正解した問題をフィルタリングするために利用可能なフレーズを取得
        updatedAvailablePhrases = getAvailablePhrases(level, part);
      }
      
      // ゲーム終了条件の確認
      if (newQuestionsCompleted >= Math.min(availablePhrases.length, QUESTIONS_TO_COMPLETE)) {
        setGameState(prev => ({
          ...prev,
          isGameOver: true,
          score: prev.score + 100,
          correctKeystrokes: newCorrectKeystrokes,
          totalKeystrokes: newTotalKeystrokes,
          accuracy: Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100),
          questionsCompleted: newQuestionsCompleted,
          showFeedback: true,
          isCorrect: true,
          feedbackMessage: '正解です！ゲームクリアおめでとうございます！',
        }));
        onGameEnd(
          gameState.score + 100,
          gameState.wpm,
          Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100)
        );
        
        // ゲーム終了後に利用可能なフレーズを更新（必要な場合）
        if (updatedAvailablePhrases) {
          setTimeout(() => {
            setAvailablePhrases(updatedAvailablePhrases);
          }, 0);
        }
      } else {
        // 現在のゲーム状態の更新
        const nextPhrase = getRandomPhrase([...gameState.usedPhraseIds, gameState.currentPhrase.id]);
        if (!nextPhrase) return;
        
        setGameState(prev => ({
          ...prev,
          currentPhrase: nextPhrase,
          userInput: '',
          score: prev.score + 100,
          correctKeystrokes: newCorrectKeystrokes,
          totalKeystrokes: newTotalKeystrokes,
          accuracy: Math.round((newCorrectKeystrokes / newTotalKeystrokes) * 100),
          questionsCompleted: newQuestionsCompleted,
          showFeedback: true,
          isCorrect: true,
          feedbackMessage: '正解です！次の問題に進みます。',
          usedPhraseIds: [...prev.usedPhraseIds, nextPhrase.id],
        }));

        // ゲーム継続時、タイマーで利用可能なフレーズを更新（必要な場合）
        if (updatedAvailablePhrases) {
          setTimeout(() => {
            setAvailablePhrases(updatedAvailablePhrases);
          }, 0);
        }

        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
      }
    } else {
      setGameState(prev => ({
        ...prev,
        showFeedback: true,
        isCorrect: false,
        feedbackMessage: `不正解です。正しくは「${currentPhrase}」です。`,
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
          {part}（{totalPhrases}問中{skipMasteredPhrases ? availablePhrases.length : totalPhrases}問が利用可能）
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

      {gameState.showFeedback && (
        <div className={`mb-4 p-3 rounded-lg text-center ${
          gameState.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {gameState.feedbackMessage}
        </div>
      )}

      <div className="mb-6">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={gameState.userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={gameState.isGameOver}
            className="w-full p-2 border rounded-lg font-mono text-lg"
            placeholder="ここにタイプしてください..."
            autoFocus
          />
          <button
            onClick={checkAnswer}
            disabled={gameState.isGameOver}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            回答する
          </button>
        </div>
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