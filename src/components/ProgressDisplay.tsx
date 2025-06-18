'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { ToeicLevel, ToeicPart, getPhrasesByLevelAndPart, resetPhrasesCache } from '@/data/toeicPhrases';
import { getLevelPartProgress, getOverallProgress, getAllPhrasesProgress } from '@/utils/progressStorage';

interface ProgressDisplayProps {
  initialLevel?: ToeicLevel;
  initialPart?: ToeicPart;
}

export default function ProgressDisplay({ initialLevel, initialPart }: ProgressDisplayProps) {
  const [level, setLevel] = useState<ToeicLevel>(initialLevel || '300-500');
  const [part, setPart] = useState<ToeicPart>(initialPart || 'Part1');
  const [isLoading, setIsLoading] = useState(false);
  const [overallProgress, setOverallProgress] = useState(0);
  const [allPhrasesProgress, setAllPhrasesProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // 進捗データをメモ化
  const progress = useMemo(() => {
    if (!isVisible) return { total: 0, mastered: 0, phrases: [] };
    return getLevelPartProgress(getPhrasesByLevelAndPart(level, part));
  }, [level, part, isVisible]);
  
  // 進捗状況を更新する関数
  const updateProgress = useCallback(() => {
    setAllPhrasesProgress(getAllPhrasesProgress());
    setOverallProgress(getOverallProgress());
  }, []);
  
  // レベル・パートが変更されたときの処理
  const handleLevelChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = e.target.value as ToeicLevel;
    setIsLoading(true);
    
    // キャッシュをリセット
    resetPhrasesCache();
    
    // 非同期で状態を更新することでUIのブロックを防止
    setTimeout(() => {
      setLevel(newLevel);
      setIsLoading(false);
    }, 10);
  }, []);
  
  const handlePartChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPart = e.target.value as ToeicPart;
    setIsLoading(true);
    
    // キャッシュをリセット
    resetPhrasesCache();
    
    // 非同期で状態を更新することでUIのブロックを防止
    setTimeout(() => {
      setPart(newPart);
      setIsLoading(false);
    }, 10);
  }, []);
  
  // 詳細表示の切り替え
  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => {
      // 表示する場合はキャッシュをリセット
      if (!prev) resetPhrasesCache();
      return !prev;
    });
  }, []);
  
  // コンポーネントがマウントされたら進捗を更新
  useEffect(() => {
    // 初期表示時にキャッシュをリセット
    resetPhrasesCache();
    updateProgress();
    
    // ローカルストレージの変更を監視
    const handleStorageChange = () => {
      updateProgress();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [updateProgress]);

  // フレーズ表示部分をメモ化
  const phrasesDisplay = useMemo(() => {
    if (isLoading) {
      return <div className="text-center py-4">読み込み中...</div>;
    }
    
    if (!progress.phrases || progress.phrases.length === 0) {
      return <div className="text-center py-4">このレベル・パートのフレーズはありません</div>;
    }
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {progress.phrases.map(({ phrase, mastered }) => (
          <div 
            key={phrase.id}
            className={`p-3 rounded text-sm border ${
              mastered 
                ? 'bg-green-500 text-white border-green-600' 
                : 'bg-white border-gray-200 text-gray-700'
            }`}
            title={`${phrase.english}\n${phrase.japanese}`}
          >
            <div className="truncate">
              {phrase.english}
            </div>
            {mastered && (
              <div className="text-xs mt-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                習得済み
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }, [isLoading, progress.phrases]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">今までの成果</h2>
        <button
          onClick={toggleVisibility}
          className="text-blue-600 hover:underline flex items-center"
        >
          {isVisible ? '閉じる ▲' : '詳細を表示 ▼'}
        </button>
      </div>
      
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${allPhrasesProgress}%` }}
          ></div>
        </div>
        <div className="text-right mt-1 text-sm text-gray-600">
          全体進捗: {allPhrasesProgress}% (全レベル・全パート)
        </div>
      </div>
      
      {isVisible && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                TOEICスコアレベル
              </label>
              <select
                value={level}
                onChange={handleLevelChange}
                className="w-full p-2 border rounded"
                disabled={isLoading}
              >
                <option value="300-500">300-500点</option>
                <option value="500-700">500-700点</option>
                <option value="700-900">700-900点</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                パート
              </label>
              <select
                value={part}
                onChange={handlePartChange}
                className="w-full p-2 border rounded"
                disabled={isLoading}
              >
                <option value="Part1">Part1</option>
                <option value="Part2">Part2</option>
                <option value="Part3">Part3</option>
                <option value="Part4">Part4</option>
                <option value="Part5">Part5</option>
                <option value="Part6">Part6</option>
                <option value="Part7">Part7</option>
              </select>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">
              {level}点レベル・{part}の進捗: {progress.mastered}/{progress.total}フレーズ習得
            </h3>
            {phrasesDisplay}
          </div>
        </div>
      )}
    </div>
  );
} 