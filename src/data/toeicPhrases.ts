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
  // Part4（説明文問題）
  {
    id: 'b1-p4',
    english: 'This is an announcement for all passengers on flight 203 to New York.',
    japanese: 'これはニューヨーク行き203便の全乗客へのアナウンスです。',
    explanation: 'Part4のアナウンス問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'アナウンス'
  },
  {
    id: 'b2-p4',
    english: 'The store will be closed for renovation from Monday to Wednesday.',
    japanese: '店舗は月曜日から水曜日まで改装のため閉店します。',
    explanation: 'Part4のお知らせ問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part4',
    category: 'お知らせ'
  },
  // Part5（短文穴埋め問題）
  {
    id: 'b1-p5',
    english: 'The company is looking for qualified candidates for the position.',
    japanese: '会社はその職位に適格な候補者を探しています。',
    explanation: 'Part5の文法問題でよく使われる表現です。lookingとforの関係に注目。',
    level: '300-500',
    part: 'Part5',
    category: '求人・採用'
  },
  {
    id: 'b2-p5',
    english: 'Please submit your application form by the end of this month.',
    japanese: '今月末までに申込書を提出してください。',
    explanation: 'Part5の文法問題でよく使われる表現です。byの使い方に注目。',
    level: '300-500',
    part: 'Part5',
    category: '締切・期限'
  },
  // Part6（長文穴埋め問題）
  {
    id: 'b1-p6',
    english: 'We are pleased to announce our new product line.',
    japanese: '新製品ラインの発表をお知らせできることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  {
    id: 'b2-p6',
    english: 'If you have any questions, please do not hesitate to contact us.',
    japanese: 'ご質問がございましたら、お気軽にお問い合わせください。',
    explanation: 'Part6のビジネスメール問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part6',
    category: 'ビジネスメール'
  },
  // Part7（読解問題）
  {
    id: 'b1-p7',
    english: 'According to the article, the company will expand its business next year.',
    japanese: '記事によると、その会社は来年事業を拡大する予定です。',
    explanation: 'Part7の読解問題でよく使われる表現です。According toの使い方に注目。',
    level: '300-500',
    part: 'Part7',
    category: 'ビジネスニュース'
  },
  {
    id: 'b2-p7',
    english: 'The customer service department is available 24 hours a day.',
    japanese: 'カスタマーサービス部門は24時間利用可能です。',
    explanation: 'Part7の読解問題でよく使われる表現です。',
    level: '300-500',
    part: 'Part7',
    category: 'サービス案内'
  },

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
  // Part5（短文穴埋め問題）
  {
    id: 'a1-p5',
    english: 'The unprecedented growth in the technology sector has led to a surge in investment opportunities.',
    japanese: 'テクノロジー部門の前例のない成長が、投資機会の急増につながっています。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。unprecedentedは「前例のない」、surgeは「急増」という意味です。',
    level: '700-900',
    part: 'Part5',
    category: '投資'
  },
  {
    id: 'a2-p5',
    english: 'Despite the economic downturn, the company managed to maintain its competitive edge.',
    japanese: '経済低迷にもかかわらず、同社は競争力を維持することができました。',
    explanation: 'Part5の文法問題でよく使われる上級レベルの表現です。downturnは「低迷」、competitive edgeは「競争力」という意味です。',
    level: '700-900',
    part: 'Part5',
    category: '経済'
  },
  // Part6（長文穴埋め問題）
  {
    id: 'a1-p6',
    english: 'We are delighted to announce the appointment of Dr. Johnson as our new Chief Research Officer.',
    japanese: 'ジョンソン博士を新しい最高研究責任者として任命したことをお知らせできることを嬉しく思います。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。appointmentは「任命」という意味です。',
    level: '700-900',
    part: 'Part6',
    category: '人事'
  },
  {
    id: 'a2-p6',
    english: 'The enclosed proposal outlines our comprehensive approach to addressing your organization\'s challenges.',
    japanese: '同封の提案書は、貴組織の課題に対処するための当社の包括的なアプローチを概説しています。',
    explanation: 'Part6のビジネスメール問題でよく使われる上級レベルの表現です。enclosedは「同封の」、outlinesは「概説する」という意味です。',
    level: '700-900',
    part: 'Part6',
    category: '提案書'
  },
  // Part7（読解問題）
  {
    id: 'a1-p7',
    english: 'The regulatory framework is designed to ensure compliance with international standards while fostering innovation.',
    japanese: '規制の枠組みは、イノベーションを促進しながら国際基準への準拠を確保するように設計されています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。regulatory frameworkは「規制の枠組み」、fosteringは「促進する」という意味です。',
    level: '700-900',
    part: 'Part7',
    category: '規制・法令'
  },
  {
    id: 'a2-p7',
    english: 'The annual report highlights the company\'s commitment to sustainable practices and corporate social responsibility.',
    japanese: '年次報告書は、持続可能な実践と企業の社会的責任に対する会社のコミットメントを強調しています。',
    explanation: 'Part7の読解問題でよく使われる上級レベルの表現です。commitmentは「コミットメント」、corporate social responsibilityは「企業の社会的責任」という意味です。',
    level: '700-900',
    part: 'Part7',
    category: '年次報告書'
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