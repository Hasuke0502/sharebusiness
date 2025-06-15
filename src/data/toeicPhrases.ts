export type ToeicLevel = '300-500' | '500-700' | '700-900';
export type ToeicPart = 'Part1' | 'Part2' | 'Part3' | 'Part4' | 'Part5' | 'Part6' | 'Part7';

export interface Phrase {
  id: string;
  english: string;
  japanese: string;
  explanation: string;
  level: ToeicLevel;
  part: ToeicPart;
  category: string;
}

export const TOEIC_PHRASES: Phrase[] = [
  // 300-500点レベル
  {
    id: 'b1',
    english: 'I would like to make a reservation.',
    japanese: '予約を取りたいのですが。',
    explanation: 'レストランやホテルでの予約時に使用する基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '予約・アポイントメント'
  },
  {
    id: 'b2',
    english: 'Could you please send me the report by email?',
    japanese: 'レポートをメールで送っていただけますか？',
    explanation: 'ビジネスシーンでよく使われる依頼表現です。',
    level: '300-500',
    part: 'Part2',
    category: 'ビジネスコミュニケーション'
  },
  {
    id: 'b3',
    english: 'The meeting has been postponed to next Monday.',
    japanese: '会議は来週の月曜日に延期されました。',
    explanation: 'スケジュール変更を伝える際の表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'スケジュール管理'
  },

  // 500-700点レベル
  {
    id: 'i1',
    english: 'We need to streamline our production process to meet the deadline.',
    japanese: '締め切りに間に合わせるために、生産プロセスを効率化する必要があります。',
    explanation: 'ビジネスプロセスの改善に関する表現です。',
    level: '500-700',
    part: 'Part3',
    category: 'ビジネスプロセス'
  },
  {
    id: 'i2',
    english: 'The implementation of the new software system has significantly improved our efficiency.',
    japanese: '新しいソフトウェアシステムの導入により、効率が大幅に向上しました。',
    explanation: 'システム導入の効果を説明する表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'IT・システム'
  },
  {
    id: 'i3',
    english: 'We should consider the environmental impact before proceeding with the project.',
    japanese: 'プロジェクトを進める前に、環境への影響を考慮すべきです。',
    explanation: '環境配慮に関するビジネス表現です。',
    level: '500-700',
    part: 'Part3',
    category: '環境・CSR'
  },

  // 700-900点レベル
  {
    id: 'a1',
    english: 'The company\'s strategic initiative to diversify its portfolio has yielded substantial returns.',
    japanese: 'ポートフォリオの多様化という会社の戦略的取り組みが、相当なリターンを生み出しました。',
    explanation: '企業戦略とその成果を説明する高度な表現です。',
    level: '700-900',
    part: 'Part4',
    category: '企業戦略'
  },
  {
    id: 'a2',
    english: 'The implementation of blockchain technology has revolutionized our supply chain management.',
    japanese: 'ブロックチェーン技術の導入により、サプライチェーン管理が革新的に変化しました。',
    explanation: '最新技術の導入とその影響を説明する表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'テクノロジー'
  },
  {
    id: 'a3',
    english: 'The merger and acquisition strategy has been carefully orchestrated to maximize shareholder value.',
    japanese: 'M&A戦略は、株主価値を最大化するために慎重に計画されています。',
    explanation: 'M&Aに関する専門的な表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'M&A・企業買収'
  }
];

export const getPhrasesByLevel = (level: ToeicLevel): Phrase[] => {
  return TOEIC_PHRASES.filter(phrase => phrase.level === level);
};

export const getPhrasesByPart = (part: ToeicPart): Phrase[] => {
  return TOEIC_PHRASES.filter(phrase => phrase.part === part);
};

export const getPhrasesByLevelAndPart = (level: ToeicLevel, part: ToeicPart): Phrase[] => {
  return TOEIC_PHRASES.filter(phrase => phrase.level === level && phrase.part === part);
}; 