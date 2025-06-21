// src/app/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import TypingGame from '@/components/TypingGame';
import ProgressDisplay from '@/components/ProgressDisplay';
import { ToeicLevel, ToeicPart } from '@/data/toeicPhrases';
import { forceInvalidateCache } from '@/utils/progressStorage';

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<ToeicLevel>('300-500');
  const [selectedPart, setSelectedPart] = useState<ToeicPart>('Part2');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [skipMasteredPhrases, setSkipMasteredPhrases] = useState(false);
  const [gameResults, setGameResults] = useState<{
    score: number;
    wpm: number;
    accuracy: number;
  } | null>(null);
  // 進捗更新のためのカウンター
  const [progressUpdateCounter, setProgressUpdateCounter] = useState(0);

  // TypingGameで問題が正解されたときに呼び出される関数
  const handleProgressUpdate = useCallback(() => {
    forceInvalidateCache();
    setProgressUpdateCounter(prev => prev + 1); // 進捗更新をトリガー
  }, []);

  // ローカルストレージからチェックボックスの状態を復元
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedSkipMastered = localStorage.getItem('toeic-typing-skip-mastered');
        if (savedSkipMastered !== null) {
          setSkipMasteredPhrases(JSON.parse(savedSkipMastered));
        }
      } catch (e) {
        console.error('チェックボックス状態の読み込みエラー:', e);
      }
    }
  }, []);

  // チェックボックスの状態を保存
  const handleToggleSkipMastered = () => {
    const newState = !skipMasteredPhrases;
    setSkipMasteredPhrases(newState);
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('toeic-typing-skip-mastered', JSON.stringify(newState));
      } catch (e) {
        console.error('チェックボックス状態の保存エラー:', e);
      }
    }
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
    setGameResults(null);
  };

  const handleGameEnd = (score: number, wpm: number, accuracy: number) => {
    setGameResults({ score, wpm, accuracy });
    handleProgressUpdate(); // ゲーム終了時にも進捗を更新
  };

  if (isGameStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setIsGameStarted(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ← 戻る
              </button>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  {selectedLevel}点レベル | {selectedPart}
                </div>
              </div>
            </div>

            {gameResults && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">ゲーム結果</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">スコア</div>
                    <div className="text-xl font-bold">{gameResults.score}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">WPM</div>
                    <div className="text-xl font-bold">{gameResults.wpm}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">正確率</div>
                    <div className="text-xl font-bold">{gameResults.accuracy}%</div>
                  </div>
                </div>
              </div>
            )}

            <TypingGame
              level={selectedLevel}
              part={selectedPart}
              onGameEnd={handleGameEnd}
              skipMasteredPhrases={skipMasteredPhrases}
              onProgressUpdate={handleProgressUpdate}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          TOEICタイピングマスター
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <ProgressDisplay 
            initialLevel={selectedLevel}
            initialPart={selectedPart}
            progressUpdateCounter={progressUpdateCounter}
          />
          
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">TOEICスコアレベルを選択</h2>
            <div className="grid grid-cols-3 gap-4">
              {(['300-500', '500-700', '700-900'] as ToeicLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    selectedLevel === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {level}点
                </button>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">学習するパートを選択</h2>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={skipMasteredPhrases}
                  onChange={handleToggleSkipMastered}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">クリアした問題はスキップ</span>
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {(['Part1', 'Part2', 'Part3', 'Part4', 'Part5', 'Part6', 'Part7'] as ToeicPart[]).map((part) => (
                <button
                  key={part}
                  onClick={() => setSelectedPart(part)}
                  className={`p-3 rounded-lg text-center transition-colors ${
                    selectedPart === part
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </section>

          <div className="text-center pt-4">
            <button
              onClick={handleStartGame}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              タイピング練習を開始
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}