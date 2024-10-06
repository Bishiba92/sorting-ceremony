var questions = [
    {
        question: "挑戦に直面したとき、最初の本能は何ですか？",
        options: [
            { text: "正面から立ち向かう！", house: "グリフィンドール", weight: 3 },
            { text: "戦略的なアプローチを計画する。", house: "レイブンクロー", weight: 3 },
            { text: "克服するまで一生懸命働く。", house: "ハッフルパフ", weight: 3 },
            { text: "挑戦を自分の有利に変える方法を見つける。", house: "スリザリン", weight: 3 },
            { text: "避けて、自動的に解決することを願う。", house: "ハッフルパフ", weight: 3 },
            { text: "他の誰かのリードに従う。", house: "スリザリン", weight: 3 },
        ]
    },
    {
        question: "友達において最も大切にしていることは何ですか？",
        options: [
            { text: "忠誠", house: "ハッフルパフ", weight: 3 },
            { text: "勇気", house: "グリフィンドール", weight: 3 },
            { text: "知性", house: "レイブンクロー", weight: 3 },
            { text: "野心", house: "スリザリン", weight: 3 },
            { text: "信頼性", house: "ハッフルパフ", weight: 3 },
            { text: "騙されやすさ", house: "スリザリン", weight: 3 },
            { text: "良いユーモアのセンス", house: "レイブンクロー", weight: 3 },
        ]
    },
    {
        question: "学びに対するアプローチはどれですか？",
        options: [
            { text: "知識は力だ。", house: "レイブンクロー", weight: 3 },
            { text: "やって学ぶ。", house: "グリフィンドール", weight: 3 },
            { text: "練習すれば完璧になる。", house: "ハッフルパフ", weight: 3 },
            { text: "前進するために学ぶべきことを学ぶ。", house: "スリザリン", weight: 3 },
            { text: "必要なことだけを学ぶ。", house: "ハッフルパフ", weight: 3 },
            { text: "他人の失敗から学ぶことを好む。", house: "スリザリン", weight: 3 }
        ]
    },
    {
        question: "誰かがあなたに害を与えた場合、どのように反応しますか？",
        options: [
            { text: "許して前に進む。", house: "ハッフルパフ", weight: 3 },
            { text: "再び同じことをされないようにする方法を見つける。", house: "スリザリン", weight: 3 },
            { text: "直接対決する。", house: "グリフィンドール", weight: 3 },
            { text: "学びの経験として活用する。", house: "レイブンクロー", weight: 3 },
            { text: "避けて自分の人生を続ける。", house: "ハッフルパフ", weight: 3 },
            { text: "気にしていないふりをして、陰で嫌味を言う。", house: "スリザリン", weight: 3 }
        ]
    },
    {
        question: "ストレスにどう対処しますか？",
        options: [
            { text: "少し自分を落ち着かせる時間を取る。", house: "ハッフルパフ", weight: 3 },
            { text: "すぐに問題に取り組む。", house: "グリフィンドール", weight: 3 },
            { text: "論理的に考えて解決する。", house: "レイブンクロー", weight: 3 },
            { text: "成功のためのモチベーションに変える。", house: "スリザリン", weight: 3 },
            { text: "先延ばしにして消えることを望む。", house: "ハッフルパフ", weight: 3 },
            { text: "誰かに解決してもらえるように探す。", house: "ハッフルパフ", weight: 3 }
        ]
    },
    {
        question: "地面に財布を見つけた場合、どうしますか？",
        options: [
            { text: "すぐに当局に届ける。", house: "ハッフルパフ", weight: 3 },
            { text: "自分で持ち主を見つけようと中を確認する。", house: "グリフィンドール", weight: 3 },
            { text: "現金を取って残りはそのままにする。", house: "スリザリン", weight: 3 },
            { text: "そのままにして、持ち主が戻ってくることを期待する。", house: "ハッフルパフ", weight: 3 },
            { text: "最善の行動を分析して判断する。", house: "レイブンクロー", weight: 3 },
            { text: "誰かが探すまで自分で持っておく。", house: "スリザリン", weight: 3 }
        ]
    },
    {
        question: "自由な時間をどのように過ごしますか？",
        options: [
            { text: "本を読む。", house: "レイブンクロー", weight: 3 },
            { text: "新しいことを学ぶ。", house: "レイブンクロー", weight: 3 },
            { text: "ゲームをする。", house: "グリフィンドール", weight: 3 },
            { text: "友達と過ごす。", house: "ハッフルパフ", weight: 3 },
            { text: "新しいスリリングなアクティビティを試す。", house: "グリフィンドール", weight: 3 },
            { text: "個人的なプロジェクトに取り組む。", house: "スリザリン", weight: 3 },
            { text: "何もせずリラックスする。", house: "ハッフルパフ", weight: 3 },
            { text: "有益なことに時間を使う。", house: "スリザリン", weight: 3 }
        ]
    },
    {
        question: "あなたの最大の欠点は何ですか？",
        options: [
            { text: "他人を信じすぎることがある。", house: "ハッフルパフ", weight: 3 },
            { text: "衝動的で考えずに行動してしまうことがある。", house: "グリフィンドール", weight: 3 },
            { text: "分析しすぎて優柔不断になることがある。", house: "レイブンクロー", weight: 3 },
            { text: "自分の目的を達成するために人を操ることがある。", house: "スリザリン", weight: 3 },
            { text: "対立を避ける傾向がある。", house: "ハッフルパフ", weight: 3 },
            { text: "自分の目標に集中しすぎることがある。", house: "スリザリン", weight: 3 },
            { text: "他人を嘲笑うことに喜びを感じることがある。", house: "スリザリン", weight: 3 },
            { text: "自分に欠点があるとは思わない。", house: "スリザリン", weight: 3 }
        ]
    },
    {
        question: "グループ作業にどのようにアプローチしますか？",
        options: [
            { text: "率先してグループをリードする。", house: "グリフィンドール", weight: 3 },
            { text: "率先してほとんどの仕事を他の人に任せる。", house: "スリザリン", weight: 3 },
            { text: "全員が含まれて価値を感じられるようにする。", house: "ハッフルパフ", weight: 3 },
            { text: "自分の役割を最善を尽くして遂行することに集中する。", house: "レイブンクロー", weight: 3 },
            { text: "グループが最も効率的な計画に従うようにする。", house: "スリザリン", weight: 3 },
            { text: "バックグラウンドで指示に従う。", house: "ハッフルパフ", weight: 3 },
            { text: "自分の能力を示す機会として活用する。", house: "スリザリン", weight: 3 },
            { text: "自分の努力の欠如が目立たないことを願う。", house: "ハッフルパフ", weight: 3 }
        ]
    },
    {
        question: "物事がうまくいかないとき、どのように反応しますか？",
        options: [
            { text: "冷静にして解決策を見つけようとする。", house: "レイブンクロー", weight: 3 },
            { text: "フラストレーションを感じつつも再挑戦する。", house: "グリフィンドール", weight: 3 },
            { text: "受け入れて前に進む。", house: "ハッフルパフ", weight: 3 },
            { text: "誰かに責任を押し付ける。", house: "スリザリン", weight: 3 },
            { text: "成功への別の道を探す。", house: "スリザリン", weight: 3 },
            { text: "気にしていないふりをする。", house: "ハッフルパフ", weight: 3 },
            { text: "物事がうまくいかないなら、まだ努力していない証拠だ。", house: "スリザリン", weight: 3 }
        ]
    },
    {
        question: "友達が学校でテストを不正した場合、その行為についてあなたの立場は？",
        options: [
            { text: "すぐに先生に報告する。", house: "グリフィンドール", weight: 3 },
            { text: "友達に自首するように促す。", house: "ハッフルパフ", weight: 3 },
            { text: "友達が見つからないように助ける。", house: "スリザリン", weight: 3 },
            { text: "関わらない、それは自分の問題ではない。", house: "レイブンクロー", weight: 3 }
        ]
    },
    {
        question: "教室での学習のために許されざる呪文クルーシオを動物に使用することについての意見は？",
        options: [
            { text: "いかなる状況でも絶対に許されない。", house: "ハッフルパフ", weight: 3 },
            { text: "他に学ぶ方法がない場合のみ。", house: "レイブンクロー", weight: 3 },
            { text: "より大きな目的にかなうなら構わない。", house: "スリザリン", weight: 3 },
            { text: "教授に挑戦して拒否する。", house: "グリフィンドール", weight: 3 }
        ]
    },
    {
        question: "授業中にトイレに行く必要がある場合、どのように申し出ますか？",
        options: [
            { text: "手を挙げて丁寧に頼む。", house: "ハッフルパフ", weight: 3 },
            { text: "何も言わずに立ち上がって行く。", house: "グリフィンドール", weight: 3 },
            { text: "教師が気を取られている間にこっそり出る。", house: "スリザリン", weight: 3 },
            { text: "講義の適切な中断のタイミングで頼む。", house: "レイブンクロー", weight: 3 }
        ]
    },
    {
        question: "先に進むチャンスがあるが、それによって数人が傷つくかもしれない状況がある場合、どうしますか？",
        options: [
            { text: "何も考えずにその機会を取る。", house: "スリザリン", weight: 3 },
            { text: "利益と結果を比較検討する。", house: "レイブンクロー", weight: 3 },
            { text: "他の人を傷つけるなら拒否する。", house: "ハッフルパフ", weight: 3 },
            { text: "自分にとって重要なものである場合のみ進む。", house: "グリフィンドール", weight: 3 }
        ]
    },
    {
        question: "ホグワーツ特急であなたの好きな食べ物が禁止されているが、今まで毎年食べてきた場合、どう対処しますか？",
        options: [
            { text: "禁止にもかかわらずこっそり持ち込む。", house: "スリザリン", weight: 3 },
            { text: "スタッフに文句を言い、説明を求める。", house: "グリフィンドール", weight: 3 },
            { text: "許可されている代替の食べ物を探す。", house: "レイブンクロー", weight: 3 },
            { text: "それを受け入れて好きな食べ物を諦める。", house: "ハッフルパフ", weight: 3 }
        ]
    }
];