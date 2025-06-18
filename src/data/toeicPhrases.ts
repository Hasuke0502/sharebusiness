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
  // Part1（写真描写問題）
  {
    id: 'b1-p1',
    english: 'The woman is sitting at her desk.',
    japanese: '女性は自分のデスクに座っています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b2-p1',
    english: 'People are waiting in line at the reception.',
    japanese: '人々は受付で列に並んでいます。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  // Part1の問題を追加（300-500レベル）
  {
    id: 'b3-p1',
    english: 'The man is using a computer.',
    japanese: '男性はコンピューターを使用しています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b4-p1',
    english: 'They are having a meeting in the conference room.',
    japanese: '彼らは会議室でミーティングをしています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b5-p1',
    english: 'The woman is talking on the phone.',
    japanese: '女性は電話で話しています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b6-p1',
    english: 'People are boarding the train.',
    japanese: '人々は電車に乗り込んでいます。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b7-p1',
    english: 'The office is empty.',
    japanese: 'オフィスは空です。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b8-p1',
    english: 'The man is writing on the whiteboard.',
    japanese: '男性はホワイトボードに書いています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b9-p1',
    english: 'People are walking across the street.',
    japanese: '人々は道路を横断しています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b10-p1',
    english: 'The woman is reading a book.',
    japanese: '女性は本を読んでいます。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b11-p1',
    english: 'The man is carrying a briefcase.',
    japanese: '男性はブリーフケースを持っています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b12-p1',
    english: 'The woman is typing on a laptop.',
    japanese: '女性はラップトップでタイプしています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b13-p1',
    english: 'The man is standing near the window.',
    japanese: '男性は窓の近くに立っています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b14-p1',
    english: 'People are eating lunch in the cafeteria.',
    japanese: '人々はカフェテリアで昼食を食べています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'b15-p1',
    english: 'The woman is opening the door.',
    japanese: '女性はドアを開けています。',
    explanation: 'Part1の写真描写問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part1',
    category: '写真描写'
  },
  // Part1の問題を追加（500-700レベル）
  {
    id: 'i3-p1',
    english: 'The employees are collaborating on a project.',
    japanese: '従業員たちはプロジェクトで協力しています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。collaboratingは「協力する」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i4-p1',
    english: 'The manager is giving a presentation to the team.',
    japanese: 'マネージャーはチームにプレゼンテーションをしています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i5-p1',
    english: 'The office building is undergoing renovation.',
    japanese: 'オフィスビルは改装中です。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。undergoingは「経験している、受けている」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i6-p1',
    english: 'The technician is repairing the equipment.',
    japanese: '技術者は機器を修理しています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i7-p1',
    english: 'The conference attendees are networking during the break.',
    japanese: '会議の参加者は休憩時間中に交流しています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。networkingは「人脈作り」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i8-p1',
    english: 'The warehouse staff is organizing inventory.',
    japanese: '倉庫のスタッフは在庫を整理しています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i9-p1',
    english: 'The customer is completing a transaction at the counter.',
    japanese: '顧客はカウンターで取引を完了させています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i10-p1',
    english: 'The laboratory researchers are conducting an experiment.',
    japanese: '研究所の研究者たちは実験を行っています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。conductingは「行う」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i11-p1',
    english: 'The architect is reviewing the building plans.',
    japanese: '建築家は建物の設計図を確認しています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i12-p1',
    english: 'The participants are engaged in a group discussion.',
    japanese: '参加者たちはグループディスカッションに取り組んでいます。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。engagedは「熱心に取り組んでいる」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i13-p1',
    english: 'The commuters are waiting for the subway to arrive.',
    japanese: '通勤者たちは地下鉄が到着するのを待っています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。commutersは「通勤者」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i14-p1',
    english: 'The chef is preparing a meal in the kitchen.',
    japanese: 'シェフはキッチンで食事を準備しています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'i15-p1',
    english: 'The delivery person is unloading packages from the truck.',
    japanese: '配達員はトラックから荷物を降ろしています。',
    explanation: 'Part1の写真描写問題でよく使われる中級レベルの表現です。unloadingは「荷降ろしする」という意味です。',
    level: '500-700',
    part: 'Part1',
    category: '写真描写'
  },
  // Part1の問題を追加（700-900レベル）
  {
    id: 'a3-p1',
    english: 'The multinational corporation is hosting a virtual conference with participants from various global offices.',
    japanese: '多国籍企業は、世界各地のオフィスから参加者を集めたバーチャル会議を開催しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。multinationalは「多国籍の」、hostingは「主催する」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a4-p1',
    english: 'The pharmaceutical researchers are meticulously documenting the results of their clinical trials.',
    japanese: '製薬会社の研究者たちは、臨床試験の結果を細心の注意を払って記録しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。meticulouslyは「細心の注意を払って」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a5-p1',
    english: 'The urban development project features sustainable infrastructure and green spaces integrated throughout the design.',
    japanese: '都市開発プロジェクトは、持続可能なインフラストラクチャーと、デザイン全体に組み込まれた緑地を特徴としています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。sustainableは「持続可能な」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a6-p1',
    english: 'The financial analysts are scrutinizing market trends to forecast potential investment opportunities.',
    japanese: '財務アナリストたちは、潜在的な投資機会を予測するために市場動向を精査しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。scrutinizingは「精査する」、forecastは「予測する」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a7-p1',
    english: 'The logistics center utilizes automated robotic systems to efficiently manage inventory distribution.',
    japanese: '物流センターは、在庫配送を効率的に管理するために自動ロボットシステムを活用しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。utilizesは「活用する」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a8-p1',
    english: 'The architectural firm is presenting a scale model of their innovative design concept to potential clients.',
    japanese: '建築会社は、革新的なデザインコンセプトの縮尺モデルを潜在的なクライアントに提示しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。scale modelは「縮尺モデル」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a9-p1',
    english: 'The renewable energy facility harnesses solar power through an extensive array of photovoltaic panels.',
    japanese: '再生可能エネルギー施設は、広範な太陽光発電パネルを通じて太陽エネルギーを活用しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。harnessesは「活用する」、photovoltaicは「太陽光発電の」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a10-p1',
    english: 'The cybersecurity team is implementing enhanced protocols to safeguard against potential data breaches.',
    japanese: 'サイバーセキュリティチームは、潜在的なデータ侵害から保護するために強化されたプロトコルを実装しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。safeguardは「保護する」、breachesは「侵害」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a11-p1',
    english: 'The executive board is convening to deliberate on strategic initiatives for the upcoming fiscal year.',
    japanese: '取締役会は、来年度の戦略的イニシアチブについて審議するために会合しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。conveningは「会合する」、deliberateは「審議する」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a12-p1',
    english: 'The manufacturing facility has undergone extensive modernization to incorporate state-of-the-art production techniques.',
    japanese: '製造施設は、最先端の生産技術を取り入れるために広範な近代化を遂げました。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。undergoneは「経験した」、state-of-the-artは「最先端の」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a13-p1',
    english: 'The urban planners are evaluating transportation infrastructure to alleviate congestion in the metropolitan area.',
    japanese: '都市計画者たちは、大都市圏の渋滞を緩和するために交通インフラを評価しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。alleviateは「緩和する」、congestionは「渋滞」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a14-p1',
    english: 'The biotechnology laboratory is equipped with sophisticated equipment for genetic research and development.',
    japanese: 'バイオテクノロジー研究所は、遺伝子研究開発のための高度な機器を備えています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。sophisticatedは「高度な」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  {
    id: 'a15-p1',
    english: 'The digital marketing team is analyzing consumer behavior data to optimize their advertising strategy.',
    japanese: 'デジタルマーケティングチームは、広告戦略を最適化するために消費者行動データを分析しています。',
    explanation: 'Part1の写真描写問題でよく使われる上級レベルの表現です。optimizeは「最適化する」という意味です。',
    level: '700-900',
    part: 'Part1',
    category: '写真描写'
  },
  // Part2（応答問題）
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
  // Part2の問題を追加（300-500レベル）
  {
    id: 'b3-p2',
    english: 'What time does the meeting start?',
    japanese: '会議は何時に始まりますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: 'スケジュール管理'
  },
  {
    id: 'b4-p2',
    english: 'Can you help me with this problem?',
    japanese: 'この問題を手伝っていただけますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '依頼'
  },
  {
    id: 'b5-p2',
    english: 'Where is the conference room?',
    japanese: '会議室はどこですか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '場所・方向'
  },
  {
    id: 'b6-p2',
    english: 'Do you have time to talk now?',
    japanese: '今話す時間がありますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '時間・スケジュール'
  },
  {
    id: 'b7-p2',
    english: 'How do I get to the station?',
    japanese: '駅にはどうやって行きますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '場所・方向'
  },
  {
    id: 'b8-p2',
    english: 'When will the report be ready?',
    japanese: 'レポートはいつ準備できますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '期限・納期'
  },
  {
    id: 'b9-p2',
    english: 'Would you like some coffee?',
    japanese: 'コーヒーはいかがですか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '提案・オファー'
  },
  {
    id: 'b10-p2',
    english: 'How much does this cost?',
    japanese: 'これはいくらですか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '価格・支払い'
  },
  {
    id: 'b11-p2',
    english: 'Can I take a message?',
    japanese: '伝言をお預かりしましょうか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '電話対応'
  },
  {
    id: 'b12-p2',
    english: 'Do you need any help?',
    japanese: '何かお手伝いが必要ですか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '申し出'
  },
  {
    id: 'b13-p2',
    english: 'Who is in charge of this project?',
    japanese: 'このプロジェクトの担当者は誰ですか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '責任・役割'
  },
  {
    id: 'b14-p2',
    english: 'Could you repeat that please?',
    japanese: 'もう一度言っていただけますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '確認・明確化'
  },
  {
    id: 'b15-p2',
    english: 'What time does the store open?',
    japanese: 'お店は何時に開きますか？',
    explanation: 'Part2の応答問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part2',
    category: '営業時間'
  },
  // Part2の問題を追加（500-700レベル）
  {
    id: 'i1-p2',
    english: 'Would you mind if I reschedule our appointment?',
    japanese: '私たちの約束を変更してもよろしいでしょうか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。Would you mind if...は「〜してもよろしいでしょうか」という丁寧な依頼表現です。',
    level: '500-700',
    part: 'Part2',
    category: '予約・アポイントメント'
  },
  {
    id: 'i2-p2',
    english: 'How do you suggest we proceed with this project?',
    japanese: 'このプロジェクトをどのように進めるべきだと思いますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。suggestは「提案する」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'プロジェクト管理'
  },
  {
    id: 'i3-p2',
    english: 'Could you elaborate on the details of the proposal?',
    japanese: '提案の詳細について詳しく説明していただけますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。elaborateは「詳しく説明する」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'ビジネスコミュニケーション'
  },
  {
    id: 'i4-p2',
    english: 'What are the implications of this policy change?',
    japanese: 'このポリシー変更の影響はどのようなものですか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。implicationsは「影響、意味合い」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '方針・戦略'
  },
  {
    id: 'i5-p2',
    english: 'Have you considered alternative approaches to this issue?',
    japanese: 'この問題に対する代替アプローチを検討しましたか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。alternativeは「代替の」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '問題解決'
  },
  {
    id: 'i6-p2',
    english: 'What is your assessment of the current market situation?',
    japanese: '現在の市場状況についてどのように評価していますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。assessmentは「評価」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '市場分析'
  },
  {
    id: 'i7-p2',
    english: 'Could we possibly reschedule the meeting for next week?',
    japanese: '会議を来週に変更することは可能でしょうか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。Could we possiblyは丁寧な依頼表現です。',
    level: '500-700',
    part: 'Part2',
    category: 'スケジュール管理'
  },
  {
    id: 'i8-p2',
    english: 'What measures have been implemented to address this concern?',
    japanese: 'この懸念に対処するためにどのような措置が実施されましたか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。measuresは「措置」、implementedは「実施された」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '問題解決'
  },
  {
    id: 'i9-p2',
    english: 'How would you interpret these survey results?',
    japanese: 'これらの調査結果をどのように解釈しますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。interpretは「解釈する」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'データ分析'
  },
  {
    id: 'i10-p2',
    english: 'What factors contributed to the decline in sales last quarter?',
    japanese: '前四半期の売上減少にはどのような要因が寄与しましたか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。factorsは「要因」、contributedは「寄与した」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '業績分析'
  },
  {
    id: 'i11-p2',
    english: 'Do you anticipate any challenges with the implementation?',
    japanese: '実装に関して何か課題を予想していますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。anticipateは「予想する」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'プロジェクト管理'
  },
  {
    id: 'i12-p2',
    english: 'What is the timeline for completing this phase of the project?',
    japanese: 'このプロジェクトのフェーズを完了するためのタイムラインはどのようになっていますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。timelineは「タイムライン、予定表」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'プロジェクト管理'
  },
  {
    id: 'i13-p2',
    english: 'How do you propose we address the client\'s feedback?',
    japanese: 'クライアントのフィードバックにどのように対応することを提案しますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。proposeは「提案する」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '顧客対応'
  },
  {
    id: 'i14-p2',
    english: 'What adjustments should we make to our marketing strategy?',
    japanese: 'マーケティング戦略にどのような調整を加えるべきですか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。adjustmentsは「調整」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'マーケティング'
  },
  {
    id: 'i15-p2',
    english: 'Could you clarify the requirements for this position?',
    japanese: 'この職位の要件を明確にしていただけますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。clarifyは「明確にする」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: '採用・人事'
  },
  // Part2の問題を追加（700-900レベル）
  {
    id: 'a1-p2',
    english: 'To what extent will the new regulations affect our overseas operations?',
    japanese: '新しい規制は海外事業にどの程度影響しますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。To what extentは「どの程度」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '規制・法令'
  },
  {
    id: 'a2-p2',
    english: 'Would you elaborate on the implications of the market research findings?',
    japanese: '市場調査結果の意味合いについて詳しく説明していただけますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。elaborateは「詳しく説明する」、implicationsは「意味合い」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '市場調査'
  },
  {
    id: 'a3-p2',
    english: 'How might we mitigate the potential risks associated with this venture?',
    japanese: 'この事業に関連する潜在的なリスクをどのように軽減できるでしょうか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。mitigateは「軽減する」、associatedは「関連する」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: 'リスク管理'
  },
  {
    id: 'a4-p2',
    english: 'What strategic initiatives should we prioritize to maintain our competitive advantage?',
    japanese: '競争優位性を維持するために、どの戦略的イニシアチブを優先すべきでしょうか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。prioritizeは「優先する」、competitive advantageは「競争優位性」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '企業戦略'
  },
  {
    id: 'a5-p2',
    english: 'Could you delineate the key performance indicators we should be monitoring?',
    japanese: '監視すべき主要業績評価指標を明確に示していただけますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。delineateは「明確に示す」、key performance indicatorsは「主要業績評価指標」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '業績管理'
  },
  {
    id: 'a6-p2',
    english: 'What methodologies would you recommend for evaluating the efficacy of our current approach?',
    japanese: '現在のアプローチの有効性を評価するために、どのような方法論を推奨しますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。methodologiesは「方法論」、efficacyは「有効性」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '評価・分析'
  },
  {
    id: 'a7-p2',
    english: 'How can we ensure compliance with the increasingly stringent regulatory requirements?',
    japanese: '厳しさを増す規制要件への準拠をどのように確保できますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。complianceは「準拠」、stringentは「厳しい」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '規制・法令'
  },
  {
    id: 'a8-p2',
    english: 'What contingency plans have been developed to address potential supply chain disruptions?',
    japanese: '潜在的なサプライチェーンの混乱に対処するために、どのような緊急時対応計画が策定されていますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。contingency plansは「緊急時対応計画」、disruptionsは「混乱」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: 'リスク管理'
  },
  {
    id: 'a9-p2',
    english: 'To what extent has the digital transformation initiative enhanced operational efficiency?',
    japanese: 'デジタルトランスフォーメーション・イニシアチブは、業務効率をどの程度向上させましたか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。enhancedは「向上させた」、operational efficiencyは「業務効率」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: 'デジタル変革'
  },
  {
    id: 'a10-p2',
    english: 'What measures are being implemented to foster innovation within our organizational culture?',
    japanese: '組織文化内でイノベーションを促進するために、どのような措置が実施されていますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。fosterは「促進する」、organizational cultureは「組織文化」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: 'イノベーション'
  },
  {
    id: 'a11-p2',
    english: 'How might we leverage emerging technologies to enhance our competitive positioning?',
    japanese: '競争上のポジショニングを強化するために、新興技術をどのように活用できるでしょうか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。leverageは「活用する」、emerging technologiesは「新興技術」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: 'テクノロジー戦略'
  },
  {
    id: 'a12-p2',
    english: 'What strategies should we employ to mitigate the environmental impact of our operations?',
    japanese: '事業活動の環境への影響を軽減するために、どのような戦略を採用すべきですか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。employは「採用する」、environmental impactは「環境への影響」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '環境・持続可能性'
  },
  {
    id: 'a13-p2',
    english: 'Could you elaborate on the potential synergies between our recently acquired subsidiaries?',
    japanese: '最近買収した子会社間の潜在的なシナジーについて詳しく説明していただけますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。synergiesは「相乗効果」、subsidiariesは「子会社」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: 'M&A・企業統合'
  },
  {
    id: 'a14-p2',
    english: 'What metrics would most effectively gauge the success of our customer retention initiatives?',
    japanese: '顧客維持イニシアチブの成功を最も効果的に測定する指標は何でしょうか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。metricsは「指標」、gaugeは「測定する」、customer retentionは「顧客維持」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '顧客関係管理'
  },
  {
    id: 'a15-p2',
    english: 'How can we ensure that our strategic vision aligns with evolving market dynamics?',
    japanese: '戦略的ビジョンが進化する市場力学と一致することをどのように確保できますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。alignsは「一致する」、evolving market dynamicsは「進化する市場力学」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '企業戦略'
  },
  // Part3（会話問題）
  {
    id: 'b3',
    english: 'The meeting has been postponed to next Monday.',
    japanese: '会議は来週の月曜日に延期されました。',
    explanation: 'スケジュール変更を伝える際の表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'スケジュール管理'
  },
  {
    id: 'b3-p3',
    english: 'Would you like to join us for lunch?',
    japanese: '私たちと一緒に昼食をとりませんか？',
    explanation: 'Part3の会話問題でよく使われる誘いの表現です。',
    level: '300-500',
    part: 'Part3',
    category: '誘い・提案'
  },
  // Part3の問題を追加（300-500レベル）
  {
    id: 'b4-p3',
    english: 'I need to finish this report by 5 PM.',
    japanese: '5時までにこのレポートを終わらせる必要があります。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '締切・期限'
  },
  {
    id: 'b5-p3',
    english: 'Can we schedule a meeting for tomorrow?',
    japanese: '明日の会議をスケジュールできますか？',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'スケジュール管理'
  },
  {
    id: 'b6-p3',
    english: 'I\'ll send you the information by email.',
    japanese: '情報をメールで送ります。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'ビジネスコミュニケーション'
  },
  {
    id: 'b7-p3',
    english: 'Let\'s discuss this matter at the next meeting.',
    japanese: '次の会議でこの件について話し合いましょう。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '会議・ミーティング'
  },
  {
    id: 'b8-p3',
    english: 'Do you have the sales figures for last month?',
    japanese: '先月の売上数字を持っていますか？',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '業績・数字'
  },
  {
    id: 'b9-p3',
    english: 'We need to order new supplies for the office.',
    japanese: 'オフィス用の新しい備品を注文する必要があります。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'オフィス管理'
  },
  {
    id: 'b10-p3',
    english: 'The customer is asking for a refund.',
    japanese: 'お客様が返金を求めています。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '顧客対応'
  },
  {
    id: 'b11-p3',
    english: 'I\'ll be out of the office next week.',
    japanese: '来週はオフィスを不在にします。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '不在・休暇'
  },
  {
    id: 'b12-p3',
    english: 'Could you please make copies of these documents?',
    japanese: 'これらの書類のコピーを取っていただけますか？',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'オフィス業務'
  },
  {
    id: 'b13-p3',
    english: 'We should inform the client about the delay.',
    japanese: '遅延についてクライアントに知らせるべきです。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '顧客対応'
  },
  {
    id: 'b14-p3',
    english: 'I\'m calling about the job posting.',
    japanese: '求人広告について電話しています。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: '採用・人事'
  },
  {
    id: 'b15-p3',
    english: 'The printer is out of paper.',
    japanese: 'プリンターの紙がなくなっています。',
    explanation: 'Part3の会話問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part3',
    category: 'オフィス機器'
  },
  // Part3の問題を追加（500-700レベル）
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
    id: 'i3',
    english: 'We should consider the environmental impact before proceeding with the project.',
    japanese: 'プロジェクトを進める前に、環境への影響を考慮すべきです。',
    explanation: '環境配慮に関するビジネス表現です。',
    level: '500-700',
    part: 'Part3',
    category: '環境・CSR'
  },
  {
    id: 'i4-p3',
    english: 'The data indicates a significant increase in customer satisfaction.',
    japanese: 'データによると、顧客満足度が大幅に向上しています。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。indicatesは「示す」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: 'データ分析'
  },
  {
    id: 'i5-p3',
    english: 'We need to allocate additional resources to this department.',
    japanese: 'この部門に追加のリソースを割り当てる必要があります。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。allocateは「割り当てる」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: 'リソース管理'
  },
  {
    id: 'i6-p3',
    english: 'The feedback from the focus group was quite insightful.',
    japanese: 'フォーカスグループからのフィードバックは非常に洞察に富んでいました。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。insightfulは「洞察に富んだ」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '市場調査'
  },
  {
    id: 'i7-p3',
    english: 'We should revise our marketing strategy based on these findings.',
    japanese: 'これらの調査結果に基づいて、マーケティング戦略を見直すべきです。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。reviseは「見直す」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: 'マーケティング'
  },
  {
    id: 'i8-p3',
    english: 'The contract needs to be reviewed by the legal department.',
    japanese: '契約書は法務部によって確認される必要があります。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part3',
    category: '法務・契約'
  },
  {
    id: 'i9-p3',
    english: 'We\'ve identified several areas for potential cost reduction.',
    japanese: 'コスト削減の可能性がある領域をいくつか特定しました。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。identifiedは「特定した」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: 'コスト管理'
  },
  {
    id: 'i10-p3',
    english: 'The team is currently developing a prototype for the new product.',
    japanese: 'チームは現在、新製品のプロトタイプを開発しています。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。prototypeは「試作品」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '製品開発'
  },
  {
    id: 'i11-p3',
    english: 'We need to coordinate with the IT department on this matter.',
    japanese: 'この件についてIT部門と調整する必要があります。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。coordinateは「調整する」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '部門間連携'
  },
  {
    id: 'i12-p3',
    english: 'The survey results indicate a shift in consumer preferences.',
    japanese: '調査結果によると、消費者の嗜好に変化が見られます。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。shiftは「変化」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '消費者動向'
  },
  {
    id: 'i13-p3',
    english: 'We should implement a more efficient inventory management system.',
    japanese: 'より効率的な在庫管理システムを導入すべきです。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。implementは「導入する」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '在庫管理'
  },
  {
    id: 'i14-p3',
    english: 'The proposal has been approved by the executive committee.',
    japanese: '提案は経営委員会によって承認されました。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。approvedは「承認された」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '意思決定'
  },
  {
    id: 'i15-p3',
    english: 'We need to establish clear guidelines for the new procedure.',
    japanese: '新しい手順に対する明確なガイドラインを確立する必要があります。',
    explanation: 'Part3の会話問題でよく使われる中級レベルの表現です。establishは「確立する」という意味です。',
    level: '500-700',
    part: 'Part3',
    category: '業務改善'
  },
  // Part3の問題を追加（700-900レベル）
  {
    id: 'a1-p3',
    english: 'The quarterly financial report reveals a substantial increase in operating expenses.',
    japanese: '四半期財務報告書は、営業費用の大幅な増加を明らかにしています。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。revealsは「明らかにする」、substantialは「大幅な」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '財務'
  },
  {
    id: 'a2-p3',
    english: 'We need to reassess our marketing strategy in light of the changing consumer preferences.',
    japanese: '変化する消費者の嗜好を考慮して、マーケティング戦略を再評価する必要があります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。reassessは「再評価する」、in light ofは「〜を考慮して」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'マーケティング'
  },
  {
    id: 'a3-p3',
    english: 'The implementation of the new ERP system has led to significant operational efficiencies.',
    japanese: '新しいERPシステムの導入により、業務効率が大幅に向上しました。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。ERPは「統合基幹業務システム」、efficienciesは「効率性」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'IT・システム'
  },
  {
    id: 'a4-p3',
    english: 'We should conduct a comprehensive analysis of the competitive landscape before finalizing our strategy.',
    japanese: '戦略を最終決定する前に、競争環境の包括的な分析を行うべきです。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。comprehensiveは「包括的な」、competitive landscapeは「競争環境」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '戦略立案'
  },
  {
    id: 'a5-p3',
    english: 'The board has requested a detailed assessment of the potential acquisition target.',
    japanese: '取締役会は、潜在的な買収対象の詳細な評価を要求しています。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。assessmentは「評価」、acquisition targetは「買収対象」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'M&A・企業買収'
  },
  {
    id: 'a6-p3',
    english: 'We need to ensure compliance with the new regulatory framework while maintaining operational flexibility.',
    japanese: '業務の柔軟性を維持しながら、新しい規制の枠組みへの準拠を確保する必要があります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。complianceは「準拠」、regulatory frameworkは「規制の枠組み」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '規制・法令'
  },
  {
    id: 'a7-p3',
    english: 'The market volatility necessitates a more agile approach to our investment strategy.',
    japanese: '市場の変動性により、投資戦略においてより機敏なアプローチが必要となります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。volatilityは「変動性」、necessitatesは「必要とする」、agileは「機敏な」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '投資戦略'
  },
  {
    id: 'a8-p3',
    english: 'We should leverage our core competencies to differentiate ourselves in this increasingly competitive market.',
    japanese: 'この競争が激化する市場で差別化を図るために、私たちの中核能力を活用すべきです。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。leverageは「活用する」、core competenciesは「中核能力」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '競争戦略'
  },
  {
    id: 'a9-p3',
    english: 'The sustainability initiative has garnered significant support from our stakeholders.',
    japanese: '持続可能性イニシアチブは、ステークホルダーから大きな支持を集めています。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。garneredは「集めた」、stakeholdersは「利害関係者」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '持続可能性'
  },
  {
    id: 'a10-p3',
    english: 'We need to establish a robust framework for evaluating the ROI of our digital marketing campaigns.',
    japanese: 'デジタルマーケティングキャンペーンのROIを評価するための堅牢な枠組みを確立する必要があります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。robustは「堅牢な」、ROIは「投資収益率」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'デジタルマーケティング'
  },
  {
    id: 'a11-p3',
    english: 'The strategic alliance will enable us to penetrate previously inaccessible market segments.',
    japanese: '戦略的提携により、これまでアクセスできなかった市場セグメントに参入することが可能になります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。strategic allianceは「戦略的提携」、penetrateは「参入する」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '事業提携'
  },
  {
    id: 'a12-p3',
    english: 'We should implement a comprehensive talent management strategy to address the skills gap.',
    japanese: 'スキルギャップに対処するために、包括的な人材管理戦略を実施すべきです。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。talent managementは「人材管理」、skills gapは「スキルギャップ」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '人材開発'
  },
  {
    id: 'a13-p3',
    english: 'The due diligence process revealed several potential liabilities that need to be addressed.',
    japanese: 'デューデリジェンスプロセスにより、対処が必要ないくつかの潜在的な負債が明らかになりました。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。due diligenceは「詳細調査」、liabilitiesは「負債」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'M&A・企業買収'
  },
  {
    id: 'a14-p3',
    english: 'We need to develop a more nuanced understanding of the cultural factors influencing consumer behavior in these markets.',
    japanese: 'これらの市場における消費者行動に影響を与える文化的要因について、より微妙なニュアンスを理解する必要があります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。nuancedは「微妙なニュアンスのある」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '国際マーケティング'
  },
  {
    id: 'a15-p3',
    english: 'The integration of artificial intelligence into our customer service platform has significantly enhanced response efficiency.',
    japanese: '人工知能を顧客サービスプラットフォームに統合することで、応答効率が大幅に向上しました。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。integrationは「統合」、artificial intelligenceは「人工知能」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'AI・テクノロジー'
  },
  // Part4（説明文問題）- 既に他の場所に追加済み,

  // 500-700点レベル
  // Part2（応答問題）
  {
    id: 'i1-p2',
    english: 'Would you mind if I reschedule our appointment?',
    japanese: '私たちの約束を変更してもよろしいでしょうか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。Would you mind if...は「〜してもよろしいでしょうか」という丁寧な依頼表現です。',
    level: '500-700',
    part: 'Part2',
    category: '予約・アポイントメント'
  },
  {
    id: 'i2-p2',
    english: 'How do you suggest we proceed with this project?',
    japanese: 'このプロジェクトをどのように進めるべきだと思いますか？',
    explanation: 'Part2の応答問題でよく使われる中級レベルの表現です。suggestは「提案する」という意味です。',
    level: '500-700',
    part: 'Part2',
    category: 'プロジェクト管理'
  },
  // Part3（会話問題）
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
    id: 'i3',
    english: 'We should consider the environmental impact before proceeding with the project.',
    japanese: 'プロジェクトを進める前に、環境への影響を考慮すべきです。',
    explanation: '環境配慮に関するビジネス表現です。',
    level: '500-700',
    part: 'Part3',
    category: '環境・CSR'
  },
  // Part4（説明文問題）
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
    id: 'i3-p4',
    english: 'Due to unexpected circumstances, the conference has been rescheduled for next month.',
    japanese: '予期せぬ状況により、会議は来月に延期されました。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。Due toは「〜のために」という意味です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  // Part5（短文穴埋め問題）
  {
    id: 'i1-p5',
    english: 'The report highlights the importance of sustainable development in emerging markets.',
    japanese: 'そのレポートは新興市場における持続可能な開発の重要性を強調しています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。highlightsは「強調する」という意味です。',
    level: '500-700',
    part: 'Part5',
    category: '報告書'
  },
  {
    id: 'i2-p5',
    english: 'Employees are encouraged to participate in the company\'s wellness program.',
    japanese: '従業員は会社のウェルネスプログラムへの参加を奨励されています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。be encouraged toは「〜するよう奨励される」という受動態の表現です。',
    level: '500-700',
    part: 'Part5',
    category: '社内制度'
  },
  // Part6（長文穴埋め問題）
  {
    id: 'i1-p6',
    english: 'We are writing to inform you of changes to our privacy policy.',
    japanese: '当社のプライバシーポリシーの変更についてお知らせするために書いています。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i2-p6',
    english: 'Please note that this offer is valid until the end of the month.',
    japanese: 'このオファーは月末まで有効ですのでご注意ください。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。Please noteは「ご注意ください」という意味です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  // Part7（読解問題）
  {
    id: 'i1-p7',
    english: 'The survey indicates that consumer confidence has increased by 5% since last quarter.',
    japanese: '調査によると、消費者信頼感は前四半期から5%上昇しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。indicatesは「示す」という意味です。',
    level: '500-700',
    part: 'Part7',
    category: '市場調査'
  },
  {
    id: 'i2-p7',
    english: 'Despite initial concerns, the merger has proven to be beneficial for both companies.',
    japanese: '当初の懸念にもかかわらず、合併は両社にとって有益であることが証明されました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。Despiteは「〜にもかかわらず」という意味です。',
    level: '500-700',
    part: 'Part7',
    category: 'ビジネスニュース'
  },

  // 700-900点レベル
  // Part2（応答問題）
  {
    id: 'a1-p2',
    english: 'To what extent will the new regulations affect our overseas operations?',
    japanese: '新しい規制は海外事業にどの程度影響しますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。To what extentは「どの程度」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '規制・法令'
  },
  {
    id: 'a2-p2',
    english: 'Would you elaborate on the implications of the market research findings?',
    japanese: '市場調査結果の意味合いについて詳しく説明していただけますか？',
    explanation: 'Part2の応答問題でよく使われる上級レベルの表現です。elaborateは「詳しく説明する」、implicationsは「意味合い」という意味です。',
    level: '700-900',
    part: 'Part2',
    category: '市場調査'
  },
  // Part3（会話問題）
  {
    id: 'a1-p3',
    english: 'The quarterly financial report reveals a substantial increase in operating expenses.',
    japanese: '四半期財務報告書は、営業費用の大幅な増加を明らかにしています。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。revealsは「明らかにする」、substantialは「大幅な」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: '財務'
  },
  {
    id: 'a2-p3',
    english: 'We need to reassess our marketing strategy in light of the changing consumer preferences.',
    japanese: '変化する消費者の嗜好を考慮して、マーケティング戦略を再評価する必要があります。',
    explanation: 'Part3の会話問題でよく使われる上級レベルの表現です。reassessは「再評価する」、in light ofは「〜を考慮して」という意味です。',
    level: '700-900',
    part: 'Part3',
    category: 'マーケティング'
  },
  // Part4（説明文問題）
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
  },
  // Part4の追加フレーズ
  {
    id: 'b1-p4',
    english: 'This is a reminder that the company picnic will be held this Saturday.',
    japanese: '会社のピクニックが今週の土曜日に開催されることをお知らせします。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b2-p4',
    english: 'The train to Central Station will depart from platform 3 in five minutes.',
    japanese: 'セントラル駅行きの電車は5分後にプラットフォーム3から出発します。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b3-p4',
    english: 'Please turn off all electronic devices during the presentation.',
    japanese: 'プレゼンテーション中は、すべての電子機器の電源をお切りください。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b4-p4',
    english: 'The office will be closed for maintenance on Sunday.',
    japanese: '事務所は日曜日にメンテナンスのため閉鎖されます。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b5-p4',
    english: 'The next station is Downtown. Doors will open on the right.',
    japanese: '次の駅はダウンタウンです。ドアは右側が開きます。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b6-p4',
    english: 'The flight to New York has been delayed by one hour.',
    japanese: 'ニューヨーク行きの便は1時間遅れています。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b7-p4',
    english: 'All passengers should proceed to the boarding gate.',
    japanese: '全ての乗客は搭乗ゲートへお進みください。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b8-p4',
    english: 'The store will close at 8 PM today.',
    japanese: '店舗は本日午後8時に閉店します。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b9-p4',
    english: 'Please make sure you have all your belongings before leaving the train.',
    japanese: '電車を降りる前に、お持ち物をご確認ください。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b10-p4',
    english: 'The museum will open at 9 AM tomorrow.',
    japanese: '博物館は明日午前9時に開館します。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b11-p4',
    english: 'Today\'s special menu includes grilled chicken and pasta.',
    japanese: '本日の特別メニューはグリルチキンとパスタです。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b12-p4',
    english: 'The meeting will begin in five minutes in the conference room.',
    japanese: '会議は5分後に会議室で始まります。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i3-p4',
    english: 'We would like to inform you that our operating hours will be extended during the holiday season.',
    japanese: '休暇シーズン中は営業時間を延長することをお知らせします。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i4-p4',
    english: 'The quarterly results will be announced at the shareholders meeting next Thursday.',
    japanese: '四半期の業績は来週木曜日の株主総会で発表されます。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i5-p4',
    english: 'Passengers are advised to arrive at least two hours before their scheduled departure time.',
    japanese: '乗客の皆様は、予定出発時刻の少なくとも2時間前に到着されることをお勧めします。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i6-p4',
    english: 'The management is pleased to announce a 10% increase in annual bonuses this year.',
    japanese: '経営陣は、今年の年間ボーナスが10%増額されることをお知らせできることを嬉しく思います。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i7-p4',
    english: 'Due to the unexpected weather conditions, some flights may experience delays.',
    japanese: '予期せぬ天候のため、一部のフライトに遅延が発生する可能性があります。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i8-p4',
    english: 'Customers who purchase items online can now pick them up at any of our retail locations.',
    japanese: 'オンラインで商品を購入されたお客様は、当社の小売店舗で商品を受け取ることができるようになりました。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i9-p4',
    english: 'The company has implemented a flexible work schedule starting next month.',
    japanese: '会社は来月からフレックスタイム制を導入しました。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i10-p4',
    english: 'We are currently experiencing technical difficulties with our online reservation system.',
    japanese: '現在、オンライン予約システムに技術的な問題が発生しています。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i11-p4',
    english: 'The quarterly sales report indicates a significant improvement in the eastern region.',
    japanese: '四半期の売上レポートによると、東部地域で大幅な改善が見られます。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i12-p4',
    english: 'Participants are required to submit their registration forms by the end of this week.',
    japanese: '参加者は今週末までに登録フォームを提出する必要があります。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i13-p4',
    english: 'The annual employee satisfaction survey will be distributed electronically next Monday.',
    japanese: '年次従業員満足度調査は、来週月曜日に電子的に配布される予定です。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i14-p4',
    english: 'This is to inform you that the scheduled maintenance of our server will begin at midnight.',
    japanese: '予定されているサーバーのメンテナンスは深夜0時に開始されることをお知らせします。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'i15-p4',
    english: 'We are pleased to announce that our company has been awarded the industry excellence award.',
    japanese: '当社が業界優秀賞を受賞したことをお知らせできることを嬉しく思います。',
    explanation: 'Part4のアナウンス問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'a4-p4',
    english: 'Despite the economic uncertainties, our company has demonstrated remarkable resilience in the market.',
    japanese: '経済的な不確実性にもかかわらず、当社は市場で顕著な回復力を示しています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a5-p4',
    english: 'The strategic restructuring of our operations aims to enhance efficiency while maintaining our commitment to quality.',
    japanese: '当社の業務の戦略的な再構築は、品質へのコミットメントを維持しながら効率性を向上させることを目的としています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a6-p4',
    english: 'In light of recent developments, we have revised our projection for the upcoming fiscal year.',
    japanese: '最近の動向を踏まえて、来年度の予測を修正しました。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a7-p4',
    english: 'The quarterly earnings report exceeded analysts\' expectations, reflecting robust growth across all business segments.',
    japanese: '四半期決算報告書はアナリストの予想を上回り、すべての事業セグメントで力強い成長を反映しています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a8-p4',
    english: 'We are implementing stringent cost-cutting measures to offset the impact of rising raw material prices.',
    japanese: '原材料価格の上昇の影響を相殺するために、厳格なコスト削減対策を実施しています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a9-p4',
    english: 'The Board of Directors has unanimously approved the proposed acquisition of our primary competitor.',
    japanese: '取締役会は、主要な競合他社の買収提案を満場一致で承認しました。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a10-p4',
    english: 'Our comprehensive analysis of market trends indicates a significant shift towards sustainable products.',
    japanese: '市場動向の総合的な分析によると、持続可能な製品への大きなシフトが示されています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a11-p4',
    english: 'The integration of artificial intelligence into our operational processes has yielded unprecedented efficiency gains.',
    japanese: '人工知能を業務プロセスに統合することで、前例のない効率性の向上が得られました。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a12-p4',
    english: 'We are delighted to unveil our groundbreaking innovation that will revolutionize the industry.',
    japanese: '業界に革命をもたらす画期的なイノベーションを発表できることを嬉しく思います。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a13-p4',
    english: 'Despite challenging market conditions, our company has maintained a robust financial position.',
    japanese: '厳しい市場環境にもかかわらず、当社は強固な財務状況を維持しています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a14-p4',
    english: 'The implementation of our strategic initiatives has resulted in substantial improvement in operational metrics.',
    japanese: '戦略的取り組みの実施により、業務指標が大幅に改善されました。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  {
    id: 'a15-p4',
    english: 'Our commitment to environmental sustainability is reflected in our comprehensive carbon neutrality strategy.',
    japanese: '環境の持続可能性へのコミットメントは、包括的なカーボンニュートラル戦略に反映されています。',
    explanation: 'Part4のスピーチ問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part4',
    category: 'スピーチ'
  },
  // Part5（短文穴埋め問題）
  {
    id: 'i1-p5',
    english: 'The report highlights the importance of sustainable development in emerging markets.',
    japanese: 'そのレポートは新興市場における持続可能な開発の重要性を強調しています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。highlightsは「強調する」という意味です。',
    level: '500-700',
    part: 'Part5',
    category: '報告書'
  },
  {
    id: 'i2-p5',
    english: 'Employees are encouraged to participate in the company\'s wellness program.',
    japanese: '従業員は会社のウェルネスプログラムへの参加を奨励されています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。be encouraged toは「〜するよう奨励される」という受動態の表現です。',
    level: '500-700',
    part: 'Part5',
    category: '社内制度'
  },
  // Part5の追加フレーズ
  {
    id: 'b1-p5',
    english: 'The manager asked me to submit the report by Friday.',
    japanese: 'マネージャーは金曜日までにレポートを提出するよう私に依頼しました。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '業務連絡'
  },
  {
    id: 'b2-p5',
    english: 'She has been working for this company for five years.',
    japanese: '彼女はこの会社に5年間勤務しています。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '職歴'
  },
  {
    id: 'b3-p5',
    english: 'The new policy will be implemented next month.',
    japanese: '新しい方針は来月から実施されます。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '会社方針'
  },
  {
    id: 'b4-p5',
    english: 'We need to finish this project before the deadline.',
    japanese: '期限までにこのプロジェクトを完了させる必要があります。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: 'プロジェクト管理'
  },
  {
    id: 'b5-p5',
    english: 'The meeting was postponed until next Wednesday.',
    japanese: '会議は来週の水曜日まで延期されました。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: 'スケジュール'
  },
  {
    id: 'b6-p5',
    english: 'He is responsible for the sales department.',
    japanese: '彼は営業部を担当しています。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '職場'
  },
  {
    id: 'b7-p5',
    english: 'The store opens at 9 AM every day.',
    japanese: '店舗は毎日午前9時に開店します。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '営業時間'
  },
  {
    id: 'b8-p5',
    english: 'Please fill out this application form.',
    japanese: 'この申込書にご記入ください。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '指示'
  },
  {
    id: 'b9-p5',
    english: 'The train will arrive in ten minutes.',
    japanese: '電車は10分後に到着します。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '交通'
  },
  {
    id: 'b10-p5',
    english: 'All employees must attend the safety training.',
    japanese: '全従業員は安全研修に出席しなければなりません。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '社内研修'
  },
  {
    id: 'b11-p5',
    english: 'The company will hire new staff members next month.',
    japanese: '会社は来月新しいスタッフを雇用します。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '採用'
  },
  {
    id: 'b12-p5',
    english: 'Please turn off the lights when you leave the office.',
    japanese: '事務所を出るときは電気を消してください。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '指示'
  },
  {
    id: 'b13-p5',
    english: 'The conference will be held in the main hall.',
    japanese: '会議はメインホールで開催されます。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: 'イベント'
  },
  {
    id: 'b14-p5',
    english: 'You need to sign this document before submitting it.',
    japanese: '提出する前にこの書類に署名する必要があります。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '手続き'
  },
  {
    id: 'b15-p5',
    english: 'The customer requested a refund for the damaged product.',
    japanese: '顧客は損傷した製品の返金を要求しました。',
    explanation: 'Part5の文法問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part5',
    category: '顧客対応'
  },
  {
    id: 'i3-p5',
    english: 'The sales figures have exceeded our expectations for the third consecutive quarter.',
    japanese: '売上高は3四半期連続で予想を上回っています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '売上報告'
  },
  {
    id: 'i4-p5',
    english: 'Candidates for the position should submit their resumes by the end of next week.',
    japanese: 'その職位の候補者は来週末までに履歴書を提出する必要があります。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '採用'
  },
  {
    id: 'i5-p5',
    english: 'The proposal was rejected due to insufficient funding.',
    japanese: '提案は資金不足のため却下されました。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '提案'
  },
  {
    id: 'i6-p5',
    english: 'The management is considering restructuring the organization to improve efficiency.',
    japanese: '経営陣は効率を向上させるために組織の再編を検討しています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '組織再編'
  },
  {
    id: 'i7-p5',
    english: 'All department heads are required to submit their budget proposals by the end of the month.',
    japanese: '全部門長は月末までに予算案を提出することが求められています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '予算'
  },
  {
    id: 'i8-p5',
    english: 'The new marketing campaign has significantly increased brand awareness among target demographics.',
    japanese: '新しいマーケティングキャンペーンは、ターゲット層の間でブランド認知度を大幅に高めました。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: 'マーケティング'
  },
  {
    id: 'i9-p5',
    english: 'The contract will be renewed automatically unless either party provides written notice.',
    japanese: 'いずれかの当事者が書面による通知を提供しない限り、契約は自動的に更新されます。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '契約'
  },
  {
    id: 'i10-p5',
    english: 'Applicants must have at least three years of relevant experience in the field.',
    japanese: '応募者は、その分野で少なくとも3年の関連経験が必要です。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '採用'
  },
  {
    id: 'i11-p5',
    english: 'The project team has successfully completed the first phase ahead of schedule.',
    japanese: 'プロジェクトチームは予定より早く第一段階を無事に完了しました。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: 'プロジェクト'
  },
  {
    id: 'i12-p5',
    english: 'The annual conference will be held at the Grand Hotel from May 15 to 17.',
    japanese: '年次会議は5月15日から17日までグランドホテルで開催されます。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: 'イベント'
  },
  {
    id: 'i13-p5',
    english: 'Employees are encouraged to provide feedback on the proposed changes to company policy.',
    japanese: '従業員は、会社の方針の変更案についてフィードバックを提供することが奨励されています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '社内制度'
  },
  {
    id: 'i14-p5',
    english: 'Due to increased demand, we are expanding our production capacity.',
    japanese: '需要の増加により、生産能力を拡大しています。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '生産'
  },
  {
    id: 'i15-p5',
    english: 'The company has invested substantially in research and development over the past year.',
    japanese: '同社は昨年、研究開発に多額の投資を行いました。',
    explanation: 'Part5の文法問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part5',
    category: '研究開発'
  },
  {
    id: 'a3-p5',
    english: 'The acquisition was finalized after extensive negotiations between the stakeholders.',
    japanese: '買収は利害関係者間の広範な交渉の後に完了しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: 'M&A'
  },
  {
    id: 'a4-p5',
    english: 'The efficiency of the manufacturing process has been significantly improved through automation.',
    japanese: '製造工程の効率は自動化によって大幅に向上しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '製造'
  },
  {
    id: 'a5-p5',
    english: 'The board unanimously approved the CEO\'s innovative strategic plan.',
    japanese: '取締役会はCEOの革新的な戦略計画を満場一致で承認しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '経営戦略'
  },
  {
    id: 'a6-p5',
    english: 'The company\'s initiative to diversify its portfolio has been instrumental in mitigating market risks.',
    japanese: '同社のポートフォリオを多様化する取り組みは、市場リスクを軽減する上で重要な役割を果たしています。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '投資戦略'
  },
  {
    id: 'a7-p5',
    english: 'The implementation of blockchain technology has revolutionized our transaction processing capabilities.',
    japanese: 'ブロックチェーン技術の導入により、取引処理能力が革命的に向上しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: 'テクノロジー'
  },
  {
    id: 'a8-p5',
    english: 'The quarterly earnings far surpassed analysts\' expectations, causing a notable surge in stock price.',
    japanese: '四半期決算はアナリストの予想を大幅に上回り、株価の著しい急騰を引き起こしました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '財務'
  },
  {
    id: 'a9-p5',
    english: 'In accordance with regulatory requirements, all financial institutions must submit comprehensive compliance reports annually.',
    japanese: '規制要件に従い、すべての金融機関は毎年包括的なコンプライアンス報告書を提出する必要があります。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '規制'
  },
  {
    id: 'a10-p5',
    english: 'The multinational corporation has established strategic partnerships to facilitate expansion into emerging markets.',
    japanese: '多国籍企業は、新興市場への拡大を促進するために戦略的パートナーシップを確立しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '国際展開'
  },
  {
    id: 'a11-p5',
    english: 'Despite the challenging economic climate, the company has maintained consistent profitability through operational excellence.',
    japanese: '厳しい経済環境にもかかわらず、同社は業務の卓越性を通じて一貫した収益性を維持しています。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '経営実績'
  },
  {
    id: 'a12-p5',
    english: 'The CEO emphasized the importance of fostering a culture of innovation throughout the organization.',
    japanese: 'CEOは組織全体で革新の文化を育むことの重要性を強調しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '企業文化'
  },
  {
    id: 'a13-p5',
    english: 'The comprehensive audit revealed several areas where compliance procedures could be enhanced.',
    japanese: '包括的な監査により、コンプライアンス手続きを強化できる複数の分野が明らかになりました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '監査'
  },
  {
    id: 'a14-p5',
    english: 'The company\'s sustainability initiatives have garnered significant recognition from environmental advocacy groups.',
    japanese: '同社の持続可能性への取り組みは、環境擁護団体から大きな評価を得ています。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '環境'
  },
  {
    id: 'a15-p5',
    english: 'The rapid technological advancement necessitates continuous adaptation of our business strategies.',
    japanese: '急速な技術進歩により、ビジネス戦略の継続的な適応が必要になります。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: 'ビジネス戦略'
  },
  {
    id: 'a16-p5',
    english: 'The merger between the two industry leaders is expected to create substantial synergies.',
    japanese: '業界大手2社の合併により、大きなシナジー効果が生まれると期待されています。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: 'M&A'
  },
  {
    id: 'a17-p5',
    english: 'The stakeholders unanimously endorsed the proposed restructuring plan for the organization.',
    japanese: '利害関係者は組織の再編案を満場一致で承認しました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part5',
    category: '組織再編'
  },
  // Part6（長文穴埋め問題）
  {
    id: 'i1-p6',
    english: 'We are writing to inform you of changes to our privacy policy.',
    japanese: '当社のプライバシーポリシーの変更についてお知らせするために書いています。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i2-p6',
    english: 'Please note that this offer is valid until the end of the month.',
    japanese: 'このオファーは月末まで有効ですのでご注意ください。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。Please noteは「ご注意ください」という意味です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  // Part6の追加フレーズ
  {
    id: 'b1-p6',
    english: 'Thank you for your inquiry about our products.',
    japanese: '当社の製品についてのお問い合わせありがとうございます。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b2-p6',
    english: 'We look forward to your response.',
    japanese: 'ご返答をお待ちしております。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b3-p6',
    english: 'Please find attached the information you requested.',
    japanese: 'ご要望のあった情報を添付しております。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b4-p6',
    english: 'I apologize for the delay in our response.',
    japanese: '返信が遅れたことをお詫び申し上げます。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b5-p6',
    english: 'We are pleased to announce our new service.',
    japanese: '新しいサービスを発表できることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b6-p6',
    english: 'Please let me know if you have any questions.',
    japanese: 'ご質問がございましたら、お知らせください。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b7-p6',
    english: 'We will contact you as soon as possible.',
    japanese: '可能な限り早くご連絡いたします。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b8-p6',
    english: 'We appreciate your business with us.',
    japanese: 'お取引いただきありがとうございます。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b9-p6',
    english: 'Please confirm receipt of this email.',
    japanese: 'このメールを受け取ったことをご確認ください。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b10-p6',
    english: 'I am writing in response to your inquiry.',
    japanese: 'お問い合わせに対する返信を差し上げます。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b11-p6',
    english: 'Please see the attached document for details.',
    japanese: '詳細については、添付の文書をご覧ください。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b12-p6',
    english: 'Thank you for your prompt response.',
    japanese: '迅速なご返信をありがとうございます。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b13-p6',
    english: 'We look forward to hearing from you soon.',
    japanese: '近いうちにご連絡いただけることを楽しみにしております。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b14-p6',
    english: 'Please complete the form by Friday.',
    japanese: '金曜日までにフォームを記入してください。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b15-p6',
    english: 'If you need any assistance, please let us know.',
    japanese: 'ご不明な点がございましたら、お知らせください。',
    explanation: 'Part6のビジネスメール問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i3-p6',
    english: 'We would like to schedule a meeting to discuss the details of our proposal.',
    japanese: '当社の提案の詳細について話し合うための会議を設定したいと思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i4-p6',
    english: 'In response to your request, we have extended the deadline to April 15.',
    japanese: 'ご要望にお応えして、期限を4月15日まで延長しました。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i5-p6',
    english: 'We regret to inform you that your application has not been successful.',
    japanese: '誠に残念ながら、あなたの申請は成功しなかったことをお知らせします。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i6-p6',
    english: 'Please be informed that our office will be relocating to a new address effective July 1st.',
    japanese: '当社のオフィスは7月1日より新住所に移転することをお知らせいたします。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i7-p6',
    english: 'We are pleased to announce that our company has been awarded the industry excellence certificate.',
    japanese: '当社が業界優秀賞を受賞したことをお知らせできることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i8-p6',
    english: 'Due to unforeseen circumstances, we regret to inform you that the event has been postponed.',
    japanese: '予期せぬ事情により、イベントが延期されたことをお知らせいたします。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i9-p6',
    english: 'We are currently experiencing technical difficulties with our online payment system.',
    japanese: '現在、オンライン決済システムに技術的な問題が発生しています。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i10-p6',
    english: 'In response to your inquiry regarding our product specifications, I have attached the detailed information.',
    japanese: '当社製品の仕様に関するお問い合わせに対し、詳細情報を添付いたしました。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i11-p6',
    english: 'We kindly request your feedback on the proposed changes to our service agreement.',
    japanese: 'サービス契約の変更案についてのご意見をお願いいたします。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i12-p6',
    english: 'This email serves as a reminder that the quarterly sales reports are due by the end of this week.',
    japanese: 'このメールは、四半期の販売報告書が今週末までに提出されることを思い出させる目的です。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i13-p6',
    english: 'Our company will be implementing a new employee training program starting next month.',
    japanese: '当社は来月から新しい従業員研修プログラムを実施します。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i14-p6',
    english: 'We would like to take this opportunity to express our appreciation for your ongoing support.',
    japanese: 'この機会に、皆様の継続的なサポートに感謝の意を表したいと思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'i15-p6',
    english: 'Please be advised that there has been a change in our company\'s privacy policy.',
    japanese: '当社のプライバシーポリシーに変更があったことをお知らせいたします。',
    explanation: 'Part6のビジネスメール問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a3-p6',
    english: 'We are pleased to extend an invitation to you for our annual industry conference.',
    japanese: '年次業界カンファレンスへのご招待状をお送りできることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a4-p6',
    english: 'I am writing to express our sincere gratitude for your continued support.',
    japanese: '日頃のご支援に心より感謝の意を表するためにお手紙を差し上げます。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a5-p6',
    english: 'The attached document outlines our comprehensive approach to addressing the concerns raised in your previous correspondence.',
    japanese: '添付の文書は、以前のご連絡で提起された懸念に対処するための当社の包括的なアプローチを概説しています。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a6-p6',
    english: 'We would like to formally acknowledge receipt of your proposal dated June 15th and express our interest in exploring potential collaboration opportunities.',
    japanese: '6月15日付けのご提案を正式に受領し、潜在的な協力の機会を模索することに関心があることを表明したいと思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a7-p6',
    english: 'In light of the recent market developments, we are revising our strategic approach to better position ourselves within the competitive landscape.',
    japanese: '最近の市場動向を踏まえ、競争環境の中で自社の位置付けをより良くするために戦略的アプローチを見直しています。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a8-p6',
    english: 'The quarterly financial statements, which have been meticulously prepared by our accounting department, are now available for your review.',
    japanese: '会計部門によって入念に作成された四半期決算報告書が、現在ご確認いただけます。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a9-p6',
    english: 'We are pleased to inform you that the Board of Directors has unanimously approved the proposed expansion project, contingent upon securing adequate financing.',
    japanese: '取締役会が十分な資金調達を条件として、提案された拡張プロジェクトを満場一致で承認したことをお知らせできることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a10-p6',
    english: 'Following an extensive evaluation process, we have identified several areas where operational efficiencies could be substantially improved.',
    japanese: '広範な評価プロセスを経て、業務効率が大幅に改善される可能性のある領域をいくつか特定しました。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a11-p6',
    english: 'We would like to extend our sincere appreciation for your invaluable contributions to the successful completion of the project ahead of schedule.',
    japanese: 'プロジェクトの予定よりも早い完了に対するあなたの貴重な貢献に心から感謝の意を表したいと思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a12-p6',
    english: 'In accordance with regulatory requirements, we are implementing enhanced security protocols to safeguard sensitive customer information.',
    japanese: '規制要件に従って、機密性の高い顧客情報を保護するために強化されたセキュリティプロトコルを実装しています。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a13-p6',
    english: 'The comprehensive market analysis provided by our research team suggests a significant opportunity for market penetration in the emerging economies.',
    japanese: '当社の研究チームが提供した包括的な市場分析は、新興経済圏での市場浸透に大きな機会があることを示唆しています。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a14-p6',
    english: 'We are currently in the process of reassessing our global supply chain strategy to mitigate potential disruptions caused by geopolitical uncertainties.',
    japanese: '現在、地政学的不確実性によって引き起こされる潜在的な混乱を軽減するために、グローバルサプライチェーン戦略を再評価しているところです。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'a15-p6',
    english: 'The enclosed prospectus delineates the strategic vision and projected financial performance of our organization for the upcoming fiscal year.',
    japanese: '同封の目論見書には、来年度の当組織の戦略的ビジョンと予測財務実績が記載されています。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  // Part7（読解問題）
  {
    id: 'i1-p7',
    english: 'The survey indicates that consumer confidence has increased by 5% since last quarter.',
    japanese: '調査によると、消費者信頼感は前四半期から5%上昇しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。indicatesは「示す」という意味です。',
    level: '500-700',
    part: 'Part7',
    category: '市場調査'
  },
  {
    id: 'i2-p7',
    english: 'Despite initial concerns, the merger has proven to be beneficial for both companies.',
    japanese: '当初の懸念にもかかわらず、合併は両社にとって有益であることが証明されました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。Despiteは「〜にもかかわらず」という意味です。',
    level: '500-700',
    part: 'Part7',
    category: 'ビジネスニュース'
  },
  // Part7の追加フレーズ
  {
    id: 'b1-p7',
    english: 'The company will hold its annual meeting on May 15.',
    japanese: '会社は5月15日に年次総会を開催します。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '会社通知'
  },
  {
    id: 'b2-p7',
    english: 'According to the report, sales increased by 10% last year.',
    japanese: 'レポートによると、売上高は昨年10%増加しました。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '報告書'
  },
  {
    id: 'b3-p7',
    english: 'The restaurant is open from 11 AM to 10 PM daily.',
    japanese: 'レストランは毎日午前11時から午後10時まで営業しています。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '営業情報'
  },
  {
    id: 'b4-p7',
    english: 'Please contact our customer service for more information.',
    japanese: '詳細については、カスタマーサービスにお問い合わせください。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '顧客サービス'
  },
  {
    id: 'b5-p7',
    english: 'The museum will be closed for renovation until March 1.',
    japanese: '美術館は3月1日まで改装のため閉館します。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '施設情報'
  },
  {
    id: 'b6-p7',
    english: 'The office hours are from 9 AM to 5 PM, Monday through Friday.',
    japanese: 'オフィスの営業時間は月曜から金曜の午前9時から午後5時までです。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '営業情報'
  },
  {
    id: 'b7-p7',
    english: 'Tickets for the concert are available at the box office.',
    japanese: 'コンサートのチケットはチケット売り場で購入できます。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: 'イベント'
  },
  {
    id: 'b8-p7',
    english: 'All employees must attend the safety training next week.',
    japanese: '全従業員は来週の安全研修に参加する必要があります。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '社内通知'
  },
  {
    id: 'b9-p7',
    english: 'The new product will be available in stores starting next month.',
    japanese: '新製品は来月から店頭で販売されます。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '製品情報'
  },
  {
    id: 'b10-p7',
    english: 'Please fill out the application form and submit it by Friday.',
    japanese: '申込書に記入して金曜日までに提出してください。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '指示'
  },
  {
    id: 'b11-p7',
    english: 'The meeting has been rescheduled for Tuesday at 2 PM.',
    japanese: '会議は火曜日の午後2時に変更されました。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: 'スケジュール'
  },
  {
    id: 'b12-p7',
    english: 'All visitors must sign in at the reception desk.',
    japanese: '全ての訪問者は受付で署名する必要があります。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '規則'
  },
  {
    id: 'b13-p7',
    english: 'The library will be open until 9 PM during exam week.',
    japanese: '試験期間中、図書館は午後9時まで開館しています。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '施設情報'
  },
  {
    id: 'b14-p7',
    english: 'We are looking for volunteers to help with the charity event.',
    japanese: 'チャリティイベントを手伝うボランティアを探しています。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '募集'
  },
  {
    id: 'b18-p7',
    english: 'The deadline for submitting the report is next Monday.',
    japanese: 'レポート提出の締め切りは来週の月曜日です。',
    explanation: 'Part7の読解問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part7',
    category: '期限'
  },
  {
    id: 'i3-p7',
    english: 'The article discusses the potential impact of artificial intelligence on the job market.',
    japanese: 'この記事は人工知能が労働市場に与える潜在的な影響について論じています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: 'テクノロジー'
  },
  {
    id: 'i4-p7',
    english: 'According to the research, remote work has led to increased productivity for many companies.',
    japanese: '研究によると、リモートワークは多くの企業の生産性向上につながっています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '働き方'
  },
  {
    id: 'i5-p7',
    english: 'The environmental impact assessment report recommends several measures to reduce carbon emissions.',
    japanese: '環境影響評価報告書は、炭素排出量を削減するためのいくつかの対策を推奨しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '環境'
  },
  {
    id: 'i6-p7',
    english: 'The company has implemented a new customer relationship management system to improve service quality.',
    japanese: '同社はサービス品質を向上させるために、新しい顧客関係管理システムを導入しました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '顧客サービス'
  },
  {
    id: 'i7-p7',
    english: 'According to the annual report, the company\'s revenue grew by 12% compared to the previous fiscal year.',
    japanese: '年次報告書によると、同社の収益は前会計年度と比較して12%成長しました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '財務'
  },
  {
    id: 'i8-p7',
    english: 'The new marketing strategy focuses on engaging with customers through social media platforms.',
    japanese: '新しいマーケティング戦略は、ソーシャルメディアプラットフォームを通じて顧客と関わることに重点を置いています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: 'マーケティング'
  },
  {
    id: 'i9-p7',
    english: 'The human resources department has announced changes to the employee benefits package.',
    japanese: '人事部門は従業員福利厚生パッケージの変更を発表しました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '人事'
  },
  {
    id: 'i10-p7',
    english: 'The industry conference will feature keynote speakers from leading technology companies.',
    japanese: '業界カンファレンスでは、主要テクノロジー企業からの基調講演者が登場します。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: 'イベント'
  },
  {
    id: 'i11-p7',
    english: 'The survey results indicate growing consumer interest in sustainable products.',
    japanese: '調査結果は、持続可能な製品に対する消費者の関心の高まりを示しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '市場調査'
  },
  {
    id: 'i12-p7',
    english: 'The company is currently negotiating with potential partners to expand its distribution network.',
    japanese: '同社は現在、流通ネットワークを拡大するために潜在的なパートナーと交渉しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: 'ビジネス戦略'
  },
  {
    id: 'i13-p7',
    english: 'The project timeline has been adjusted to accommodate additional stakeholder feedback.',
    japanese: '追加の利害関係者からのフィードバックに対応するため、プロジェクトのタイムラインが調整されました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: 'プロジェクト管理'
  },
  {
    id: 'i14-p7',
    english: 'The regulatory change will require companies to update their compliance procedures.',
    japanese: '規制の変更により、企業はコンプライアンス手順を更新する必要があります。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '法規制'
  },
  {
    id: 'i15-p7',
    english: 'The economic outlook report predicts moderate growth in the coming year despite ongoing challenges.',
    japanese: '経済見通しレポートは、継続的な課題にもかかわらず、来年には緩やかな成長が見込まれると予測しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。',
    level: '500-700',
    part: 'Part7',
    category: '経済'
  },
  {
    id: 'a3-p7',
    english: 'The comprehensive analysis of market trends reveals shifts in consumer behavior across multiple demographics.',
    japanese: '市場動向の包括的な分析は、複数の人口統計にわたる消費者行動の変化を明らかにしています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '市場分析'
  },
  {
    id: 'a4-p7',
    english: 'The implementation of the new healthcare policy has elicited mixed responses from industry stakeholders.',
    japanese: '新しい医療政策の実施は、業界関係者からさまざまな反応を引き起こしています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '医療政策'
  },
  {
    id: 'a5-p7',
    english: 'The financial statement reveals a substantial increase in operating costs attributed to global supply chain disruptions.',
    japanese: '財務諸表は、グローバルサプライチェーンの混乱に起因する営業コストの大幅な増加を明らかにしています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '財務'
  },
  {
    id: 'a6-p7',
    english: 'The CEO\'s strategic vision encompasses diversification into emerging markets while maintaining a robust presence in established sectors.',
    japanese: 'CEOの戦略的ビジョンは、既存のセクターでの強固なプレゼンスを維持しながら、新興市場への多角化を包含しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '経営戦略'
  },
  {
    id: 'a7-p7',
    english: 'The multinational corporation has implemented a comprehensive sustainability framework aimed at reducing its environmental footprint across global operations.',
    japanese: '多国籍企業は、グローバル業務全体で環境負荷を軽減することを目的とした包括的な持続可能性フレームワークを実施しました。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '環境'
  },
  {
    id: 'a8-p7',
    english: 'The regulatory authority has issued a directive mandating enhanced transparency in financial reporting for all publicly traded companies.',
    japanese: '規制当局は、すべての上場企業に対して財務報告の透明性向上を義務付ける指令を発行しました。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '法規制'
  },
  {
    id: 'a9-p7',
    english: 'A comprehensive analysis of consumer behavior patterns indicates a significant shift toward digital platforms for retail purchases.',
    japanese: '消費者行動パターンの包括的な分析は、小売購入のためにデジタルプラットフォームへの大きなシフトを示しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '消費者動向'
  },
  {
    id: 'a10-p7',
    english: 'The acquisition presents synergistic opportunities for market expansion while simultaneously addressing competitive challenges in the industry.',
    japanese: '買収は、業界の競争上の課題に同時に対処しながら、市場拡大のためのシナジー効果のある機会を提供します。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: 'M&A'
  },
  {
    id: 'a11-p7',
    english: 'The research publication elucidates the correlation between organizational culture and employee productivity in multinational environments.',
    japanese: 'この研究出版物は、多国籍環境における組織文化と従業員の生産性の間の相関関係を解明しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '組織研究'
  },
  {
    id: 'a12-p7',
    english: 'Despite economic headwinds, the quarterly earnings report demonstrates remarkable resilience, attributed primarily to strategic cost management initiatives.',
    japanese: '経済的な逆風にもかかわらず、四半期の収益報告書は、主に戦略的なコスト管理イニシアチブによって、顕著な回復力を示しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '財務'
  },
  {
    id: 'a13-p7',
    english: 'The technological innovation has revolutionized operational efficiency, garnering accolades from industry analysts for its transformative impact.',
    japanese: '技術革新は業務効率を革命的に変え、その変革的な影響で業界アナリストからの賞賛を獲得しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '技術革新'
  },
  {
    id: 'a14-p7',
    english: 'The comprehensive market analysis delineates emerging trends that are expected to fundamentally alter consumer engagement strategies.',
    japanese: '包括的な市場分析は、消費者エンゲージメント戦略を根本的に変えると予想される新たなトレンドを描き出しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '市場分析'
  },
  {
    id: 'a15-p7',
    english: 'The annual stakeholder meeting addressed concerns regarding corporate governance and long-term strategic initiatives in an increasingly competitive landscape.',
    japanese: '年次の利害関係者会議では、ますます競争が激化する環境におけるコーポレートガバナンスと長期的な戦略的イニシアチブに関する懸念に対処しました。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: 'コーポレートガバナンス'
  },
  {
    id: 'a16-p7',
    english: 'The pharmaceutical company has announced a breakthrough in drug development, with clinical trials demonstrating unprecedented efficacy in treating the condition.',
    japanese: '製薬会社は薬の開発における画期的な進歩を発表し、臨床試験ではその状態の治療において前例のない効果を示しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '医薬品'
  },
  {
    id: 'a17-p7',
    english: 'The economic policy reform aims to stimulate growth while mitigating potential inflationary pressures through calibrated fiscal interventions.',
    japanese: '経済政策改革は、調整された財政介入を通じてインフレの可能性を軽減しながら、成長を刺激することを目指しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。',
    level: '700-900',
    part: 'Part7',
    category: '経済政策'
  },
  {
    id: 'b13-p4',
    english: 'This is a reminder that the company picnic will be held this Saturday.',
    japanese: '会社のピクニックが今週の土曜日に開催されることをお知らせします。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b14-p4',
    english: 'The train to Central Station will depart from platform 3 in five minutes.',
    japanese: 'セントラル駅行きの電車は5分後にプラットフォーム3から出発します。',
    explanation: 'Part4のアナウンス問題でよく使われる基本的な表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b13-p5',
    english: 'The company is looking for qualified candidates for the position.',
    japanese: '会社はその職位に適格な候補者を探しています。',
    explanation: 'Part5の文法問題でよく使われる表現です。lookingとforの関係に注目。',
    level: '300-500',
    part: 'Part5',
    category: '求人・採用'
  },
  {
    id: 'b14-p5',
    english: 'Please submit your application form by the end of this month.',
    japanese: '今月末までに申込書を提出してください。',
    explanation: 'Part5の文法問題でよく使われる表現です。byの使い方に注目。',
    level: '300-500',
    part: 'Part5',
    category: '締切・期限'
  },
  {
    id: 'b15-p6',
    english: 'We are pleased to announce our new product line.',
    japanese: '新製品ラインの発表をお知らせできることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b16-p6',
    english: 'If you have any questions, please do not hesitate to contact us.',
    japanese: 'ご質問がございましたら、お気軽にお問い合わせください。',
    explanation: 'Part6のビジネスメール問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b17-p7',
    english: 'According to the article, the company will expand its business next year.',
    japanese: '記事によると、その会社は来年事業を拡大する予定です。',
    explanation: 'Part7の読解問題でよく使われる表現です。According toの使い方に注目。',
    level: '300-500',
    part: 'Part7',
    category: 'ビジネスニュース'
  },
  {
    id: 'b16-p7',
    english: 'The customer service department is available 24 hours a day.',
    japanese: 'カスタマーサービス部門は24時間利用可能です。',
    explanation: 'Part7の読解問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part7',
    category: 'サービス案内'
  },
  {
    id: 'i16-p7',
    english: 'The survey indicates that consumer confidence has increased by 5% since last quarter.',
    japanese: '調査によると、消費者信頼感は前四半期から5%上昇しています。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。indicatesは「示す」という意味です。',
    level: '500-700',
    part: 'Part7',
    category: '市場調査'
  },
  {
    id: 'i17-p7',
    english: 'Despite initial concerns, the merger has proven to be beneficial for both companies.',
    japanese: '当初の懸念にもかかわらず、合併は両社にとって有益であることが証明されました。',
    explanation: 'Part7の読解問題でよく使われる中級レベルの表現です。Despiteは「〜にもかかわらず」という意味です。',
    level: '500-700',
    part: 'Part7',
    category: 'ビジネスニュース'
  }
];

// メモ化のためのキャッシュ
const phrasesCache = {
  byLevel: {} as Record<ToeicLevel, Phrase[]>,
  byPart: {} as Record<ToeicPart, Phrase[]>,
  byLevelAndPart: {} as Record<string, Phrase[]>
};

// キャッシュをリセットする関数
export const resetPhrasesCache = () => {
  phrasesCache.byLevel = {};
  phrasesCache.byPart = {};
  phrasesCache.byLevelAndPart = {};
};

export const getPhrasesByLevel = (level: ToeicLevel): Phrase[] => {
  // キャッシュにあればそれを返す
  if (phrasesCache.byLevel[level]) {
    return phrasesCache.byLevel[level];
  }
  
  const phrases = TOEIC_PHRASES.filter(phrase => phrase.level === level);
  phrasesCache.byLevel[level] = phrases;
  return phrases;
};

export const getPhrasesByPart = (part: ToeicPart): Phrase[] => {
  // キャッシュにあればそれを返す
  if (phrasesCache.byPart[part]) {
    return phrasesCache.byPart[part];
  }
  
  const phrases = TOEIC_PHRASES.filter(phrase => phrase.part === part);
  phrasesCache.byPart[part] = phrases;
  return phrases;
};

export const getPhrasesByLevelAndPart = (level: ToeicLevel, part: ToeicPart): Phrase[] => {
  // キャッシュキーを生成
  const cacheKey = `${level}-${part}`;
  
  // キャッシュにあればそれを返す
  if (phrasesCache.byLevelAndPart[cacheKey]) {
    return phrasesCache.byLevelAndPart[cacheKey];
  }
  
  // 直接フィルタリングして新しい配列を返す
  const phrases = TOEIC_PHRASES.filter(phrase => 
    phrase.level === level && phrase.part === part
  );
  
  // キャッシュに保存
  phrasesCache.byLevelAndPart[cacheKey] = phrases;
  
  return phrases;
}; 