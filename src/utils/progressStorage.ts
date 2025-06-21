import { ToeicLevel, ToeicPart, Phrase } from '@/data/toeicPhrases';

// ユーザーの進捗状況を表すインターフェース
export interface PhraseProgress {
  id: string;        // フレーズID
  masteredAt?: Date; // マスター（一度も間違えずに正解）した日時
  attempts: number;  // 挑戦回数
  successes: number; // 正解回数
}

// 全進捗データ
export interface UserProgress {
  phrases: Record<string, PhraseProgress>;
  lastPlayed?: Date;
  totalAttempts: number;
  totalSuccesses: number;
}

// ローカルストレージのキー
const STORAGE_KEY = 'toeic-typing-progress';

// キャッシュ
const progressCache = {
  userProgress: null as UserProgress | null,
  levelPartProgress: {} as Record<string, {
    total: number;
    mastered: number;
    phrases: Array<{ phrase: Phrase; mastered: boolean }>;
  }>,
  lastUpdated: 0,
  overallProgress: null as number | null,
  allPhrasesProgress: null as number | null,
};

// キャッシュの有効期限（ミリ秒）
const CACHE_TTL = 0; // キャッシュを無効化

// キャッシュが有効かどうか
const isCacheValid = () => {
  return progressCache.userProgress !== null && 
         (Date.now() - progressCache.lastUpdated) < CACHE_TTL;
};

// キャッシュをクリア
const clearCache = () => {
  progressCache.levelPartProgress = {};
  progressCache.overallProgress = null;
  progressCache.allPhrasesProgress = null;
};

// キャッシュを強制的にクリア（進捗更新時に呼び出す）
export const forceInvalidateCache = () => {
  progressCache.lastUpdated = 0;
  clearCache();
};

// 初期進捗データを生成
const getInitialProgress = (): UserProgress => ({
  phrases: {},
  totalAttempts: 0,
  totalSuccesses: 0
});

// 進捗データの読み込み
export const loadUserProgress = (): UserProgress => {
  if (typeof window === 'undefined') {
    return getInitialProgress();
  }
  
  // キャッシュが有効ならキャッシュを返す
  if (isCacheValid() && progressCache.userProgress) {
    return progressCache.userProgress;
  }
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      const initialProgress = getInitialProgress();
      progressCache.userProgress = initialProgress;
      progressCache.lastUpdated = Date.now();
      clearCache();
      return initialProgress;
    }
    
    const progress: UserProgress = JSON.parse(data);
    
    // 日付文字列をDateオブジェクトに変換
    if (progress.lastPlayed) {
      progress.lastPlayed = new Date(progress.lastPlayed);
    }
    
    Object.values(progress.phrases).forEach(phrase => {
      if (phrase.masteredAt) {
        phrase.masteredAt = new Date(phrase.masteredAt);
      }
    });
    
    // キャッシュを更新
    progressCache.userProgress = progress;
    progressCache.lastUpdated = Date.now();
    clearCache();
    
    return progress;
  } catch (error) {
    console.error('進捗データの読み込みエラー:', error);
    const initialProgress = getInitialProgress();
    progressCache.userProgress = initialProgress;
    progressCache.lastUpdated = Date.now();
    clearCache();
    return initialProgress;
  }
};

// 進捗データの保存
export const saveUserProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    
    // キャッシュを更新
    progressCache.userProgress = progress;
    progressCache.lastUpdated = Date.now();
    clearCache();
  } catch (error) {
    console.error('進捗データの保存エラー:', error);
  }
};

// フレーズの進捗を更新
export const updatePhraseProgress = (
  phraseId: string, 
  isCorrect: boolean
): UserProgress => {
  const progress = loadUserProgress();
  
  // フレーズの進捗を取得または作成
  const phraseProgress = progress.phrases[phraseId] || {
    id: phraseId,
    attempts: 0,
    successes: 0
  };
  
  // 挑戦回数を増やす
  phraseProgress.attempts += 1;
  progress.totalAttempts += 1;
  
  if (isCorrect) {
    // 正解回数を増やす
    phraseProgress.successes += 1;
    progress.totalSuccesses += 1;
    
    // まだマスターしておらず、一度も間違えずに正解した場合
    if (!phraseProgress.masteredAt && phraseProgress.attempts === 1) {
      phraseProgress.masteredAt = new Date();
    }
  }
  
  // 更新した進捗を保存
  progress.phrases[phraseId] = phraseProgress;
  progress.lastPlayed = new Date();
  saveUserProgress(progress);
  
  return progress;
};

// レベルとパートに基づいてマスターしたフレーズの数を取得
export const getMasteredCount = (level: ToeicLevel, part: ToeicPart): number => {
  const progress = loadUserProgress();
  
  return Object.values(progress.phrases).filter(phrase => {
    return phrase.masteredAt && phrase.id.includes(`${level}-${part}`);
  }).length;
};

// フレーズがマスターされているかを確認
export const isPhrasesMastered = (phraseId: string): boolean => {
  const progress = loadUserProgress();
  return !!progress.phrases[phraseId]?.masteredAt;
};

// レベルとパート別の進捗を取得（キャッシュ対応）
export const getLevelPartProgress = (phrases: Phrase[]): {
  total: number;
  mastered: number;
  phrases: Array<{ phrase: Phrase; mastered: boolean }>;
} => {
  // フレーズがない場合は空のオブジェクトを返す
  if (!phrases || phrases.length === 0) {
    return { total: 0, mastered: 0, phrases: [] };
  }
  
  // キャッシュキーを生成（最初のフレーズのレベルとパートを使用）
  const firstPhrase = phrases[0];
  const cacheKey = `${firstPhrase.level}-${firstPhrase.part}`;
  
  // キャッシュが有効ならキャッシュを返す
  if (isCacheValid() && progressCache.levelPartProgress[cacheKey]) {
    return progressCache.levelPartProgress[cacheKey];
  }
  
  const progress = loadUserProgress();
  
  const result = phrases.map(phrase => ({
    phrase,
    mastered: !!progress.phrases[phrase.id]?.masteredAt
  }));
  
  const progressData = {
    total: phrases.length,
    mastered: result.filter(item => item.mastered).length,
    phrases: result
  };
  
  // キャッシュを更新
  progressCache.levelPartProgress[cacheKey] = progressData;
  
  return progressData;
};

// 全体の進捗率を取得（キャッシュ対応）
export const getOverallProgress = (): number => {
  // キャッシュが有効ならキャッシュを返す
  if (isCacheValid() && progressCache.overallProgress !== null) {
    return progressCache.overallProgress;
  }
  
  const progress = loadUserProgress();
  const masteredPhrases = Object.values(progress.phrases).filter(p => p.masteredAt).length;
  
  // 15問中何問をマスターしたかで計算
  const totalPhrases = 15;
  const overallProgress = Math.round((masteredPhrases / totalPhrases) * 100);
  
  // キャッシュを更新
  progressCache.overallProgress = overallProgress;
  
  return overallProgress;
};

// 全てのレベルと全てのパートに対する進捗率を取得（キャッシュ対応）
export const getAllPhrasesProgress = (): number => {
  // キャッシュが有効ならキャッシュを返す
  if (isCacheValid() && progressCache.allPhrasesProgress !== null) {
    return progressCache.allPhrasesProgress;
  }
  
  const progress = loadUserProgress();
  const masteredPhrases = Object.values(progress.phrases).filter(p => p.masteredAt).length;
  
  // 全てのレベル（3）× 全てのパート（7）× 各15問 = 315問
  const totalPhrases = 3 * 7 * 15;
  const allPhrasesProgress = Math.round((masteredPhrases / totalPhrases) * 100);
  
  // キャッシュを更新
  progressCache.allPhrasesProgress = allPhrasesProgress;
  
  return allPhrasesProgress;
}; 