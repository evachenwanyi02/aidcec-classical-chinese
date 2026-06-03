// ---- 文言經典篇章資料庫 ----
// 按學習階段分類 (level):
// 1: 小一至小三 | 2: 小四至小六 | 3: 中一至中三 | 4: 中四至中六

const ALL_ARTICLES = {
    // ==================== 第一學習階段（小一至小三）====================
    zhengran: {
        title: "鄭人買履",
        level: 1,
        sentences: [
            { original: "鄭人有欲買履者，先自度其足，而置之其坐。", svo: "<span class='attr'>鄭</span><span class='subj'>人</span> <span class='verb'>有</span> <span class='attr'>欲買履</span><span class='obj'>者</span>，<span class='adv'>先自</span><span class='verb'>度</span><span class='attr'>其</span><span class='obj'>足</span>，而<span class='verb'>置</span><span class='obj'>之</span><span class='adv'>其坐</span>。", svo_trans: "<ruby><span class='attr'>鄭</span><span class='subj'>人</span><rt>鄭國人</rt></ruby> <ruby><span class='verb'>有</span><rt>想</rt></ruby> <ruby><span class='attr'>欲買履</span><span class='obj'>者</span><rt>買鞋的人</rt></ruby>，<ruby><span class='adv'>先自</span><rt>先自己</rt></ruby><ruby><span class='verb'>度</span><rt>量度</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>足</span><rt>他的腳</rt></ruby>，而<ruby><span class='verb'>置</span><rt>放</rt></ruby><ruby><span class='obj'>之</span><rt>尺碼</rt></ruby><ruby><span class='adv'>其坐</span><rt>在座位上</rt></ruby>。" },
            { original: "至之市，而忘操之。", svo: "<span class='adv'>至</span><span class='verb'>之</span><span class='obj'>市</span>，而<span class='verb'>忘操</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='adv'>至</span><rt>等到</rt></ruby><ruby><span class='verb'>之</span><rt>前往</rt></ruby><ruby><span class='obj'>市</span><rt>集市</rt></ruby>，而<ruby><span class='verb'>忘操</span><rt>忘記帶</rt></ruby><ruby><span class='obj'>之</span><rt>尺碼</rt></ruby>。" },
            { original: "已得履，乃曰：「吾忘持度。」反歸取之。", svo: "<span class='adv'>已</span><span class='verb'>得</span><span class='obj'>履</span>，乃<span class='verb'>曰</span>：「<span class='subj'>吾</span><span class='verb'>忘持</span><span class='obj'>度</span>。」<span class='adv'>反歸</span><span class='verb'>取</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='adv'>已</span><rt>已經</rt></ruby><ruby><span class='verb'>得</span><rt>挑好</rt></ruby><ruby><span class='obj'>履</span><rt>鞋</rt></ruby>，乃<ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<span class='subj'>吾</span><ruby><span class='verb'>忘持</span><rt>忘帶</rt></ruby><ruby><span class='obj'>度</span><rt>尺碼</rt></ruby>。」<ruby><span class='adv'>反歸</span><rt>返回去</rt></ruby><ruby><span class='verb'>取</span><rt>拿</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。" },
            { original: "及反，市罷，遂不得履。", svo: "<span class='adv'>及</span><span class='verb'>反</span>，<span class='subj'>市</span><span class='verb'>罷</span>，<span class='adv'>遂不</span><span class='verb'>得</span><span class='obj'>履</span>。", svo_trans: "<ruby><span class='adv'>及</span><rt>等到</rt></ruby><ruby><span class='verb'>反</span><rt>返回</rt></ruby>，<ruby><span class='subj'>市</span><rt>市集</rt></ruby><ruby><span class='verb'>罷</span><rt>散了</rt></ruby>，<ruby><span class='adv'>遂不</span><rt>於是沒</rt></ruby><ruby><span class='verb'>得</span><rt>買到</rt></ruby><ruby><span class='obj'>履</span><rt>鞋</rt></ruby>。" }
        ]
    },
    lunyu: {
        title: "論語四則",
        level: 1,
        sentences: [
            { original: "子曰：「學而時習之，不亦說乎？」", svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='verb'>學</span>而<span class='adv'>時</span><span class='verb'>習</span><span class='obj'>之</span>，<span class='adv'>不亦</span><span class='verb'>說</span>乎？」", svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby>曰：「<ruby>學<rt>學習</rt></ruby>而<ruby><span class='adv'>時</span><rt>按時</rt></ruby><ruby>習<rt>溫習</rt></ruby>之，不亦<ruby>說<rt>悅</rt></ruby>乎？」" }
        ]
    },
    xueyi: {
        title: "二子學弈",
        level: 1,
        sentences: [
            { original: "弈秋，通國之善弈者也。", svo: "<span class='subj'>弈秋</span>，<span class='attr'>通國之善弈</span><span class='obj'>者</span>也。", svo_trans: "<ruby>弈秋<rt>人名</rt></ruby>，<ruby>通國之善弈<rt>全國最擅長下棋</rt></ruby>者也。" }
        ]
    },
    yubang: {
        title: "鷸蚌相爭",
        level: 1,
        sentences: [
            { original: "蚌方出曝，而鷸啄其肉，蚌合而箝其喙。", svo: "<span class='subj'>蚌</span><span class='adv'>方</span><span class='verb'>出曝</span>，而<span class='subj'>鷸</span><span class='verb'>啄</span><span class='attr'>其</span><span class='obj'>肉</span>，<span class='subj'>蚌</span><span class='verb'>合</span>而<span class='verb'>箝</span><span class='attr'>其</span><span class='obj'>喙</span>。", svo_trans: "<ruby>蚌<rt>河蚌</rt></ruby><ruby><span class='adv'>方</span><rt>剛好</rt></ruby><ruby>出曝<rt>出來曬太陽</rt></ruby>，而<ruby>鷸<rt>鷸鳥</rt></ruby>啄其肉..." }
        ]
    },
    guanju: {
        title: "國風 關雎",
        level: 1,
        sentences: [
            { original: "關關雎鳩，在河之洲。", svo: "<span class='adv'>關關</span><span class='subj'>雎鳩</span>，<span class='adv'>在</span><span class='attr'>河之</span><span class='obj'>洲</span>。", svo_trans: "<ruby><span class='adv'>關關</span><rt>鳥鳴聲</rt></ruby><ruby><span class='subj'>雎鳩</span><rt>水鳥</rt></ruby>，<ruby><span class='adv'>在</span><rt>棲息在</rt></ruby><ruby><span class='attr'>河之</span><rt>黃河的</rt></ruby><ruby><span class='obj'>洲</span><rt>沙洲</rt></ruby>。" },
            { original: "窈窕淑女，君子好逑。", svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='attr'>君子</span><span class='obj'>好逑</span>。", svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='attr'>君子</span><rt>小伙子</rt></ruby><ruby><span class='obj'>好逑</span><rt>好配偶</rt></ruby>。" },
            { original: "參差荇菜，左右流之。", svo: "<span class='attr'>參差</span><span class='subj'>荇菜</span>，<span class='adv'>左右</span><span class='verb'>流</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='attr'>參差</span><rt>長短不齊的</rt></ruby><ruby><span class='subj'>荇菜</span><rt>荇菜</rt></ruby>，<ruby><span class='adv'>左右</span><rt>在船的兩邊</rt></ruby><ruby><span class='verb'>流</span><rt>撈取</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。" },
            { original: "窈窕淑女，寤寐求之。", svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='adv'>寤寐</span><span class='verb'>求</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='adv'>寤寐</span><rt>醒來夢裡都</rt></ruby><ruby><span class='verb'>求</span><rt>追求</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby>。" },
            { original: "求之不得，寤寐思服。", svo: "<span class='verb'>求</span><span class='obj'>之</span><span class='adv'>不</span><span class='verb'>得</span>，<span class='adv'>寤寐</span><span class='verb'>思服</span>。", svo_trans: "<ruby><span class='verb'>求</span><rt>追求</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby><ruby><span class='adv'>不</span><rt>沒能</rt></ruby><ruby><span class='verb'>得</span><rt>得到</rt></ruby>，<ruby><span class='adv'>寤寐</span><rt>醒來夢裡都</rt></ruby><ruby><span class='verb'>思服</span><rt>思念</rt></ruby>。" },
            { original: "悠哉悠哉，輾轉反側。", svo: "<span class='adv'>悠哉悠哉</span>，<span class='verb'>輾轉反側</span>。", svo_trans: "<ruby><span class='adv'>悠哉悠哉</span><rt>思念悠長啊</rt></ruby>，<ruby><span class='verb'>輾轉反側</span><rt>翻來覆去睡不著</rt></ruby>。" },
            { original: "參差荇菜，左右采之。", svo: "<span class='attr'>參差</span><span class='subj'>荇菜</span>，<span class='adv'>左右</span><span class='verb'>采</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='attr'>參差</span><rt>長短不齊的</rt></ruby><ruby><span class='subj'>荇菜</span><rt>荇菜</rt></ruby>，<ruby><span class='adv'>左右</span><rt>在船的兩邊</rt></ruby><ruby><span class='verb'>采</span><rt>採摘</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。" },
            { original: "窈窕淑女，琴瑟友之。", svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='adv'>琴瑟</span><span class='verb'>友</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='adv'>琴瑟</span><rt>彈琴鼓瑟</rt></ruby><ruby><span class='verb'>友</span><rt>親近</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby>。" },
            { original: "參差荇菜，左右芼之。", svo: "<span class='attr'>參差</span><span class='subj'>荇菜</span>，<span class='adv'>左右</span><span class='verb'>芼</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='attr'>參差</span><rt>長短不齊的</rt></ruby><ruby><span class='subj'>荇菜</span><rt>荇菜</rt></ruby>，<ruby><span class='adv'>左右</span><rt>在船的兩邊</rt></ruby><ruby><span class='verb'>芼</span><rt>挑選</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。" },
            { original: "窈窕淑女，鐘鼓樂之。", svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='adv'>鐘鼓</span><span class='verb'>樂</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='adv'>鐘鼓</span><rt>敲鐘擊鼓</rt></ruby><ruby><span class='verb'>樂</span><rt>使快樂</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby>。" }
        ]
    },
    shouzhudaitu: {
        title: "守株待兔",
        level: 1,
        sentences: [
            { original: "宋人有耕田者。", svo: "<span class='attr'>宋</span><span class='subj'>人</span><span class='verb'>有</span><span class='attr'>耕田</span><span class='obj'>者</span>。", svo_trans: "<ruby><span class='attr'>宋</span><span class='subj'>人</span><rt>宋國人</rt></ruby><ruby><span class='verb'>有</span><rt>有一個</rt></ruby><ruby><span class='attr'>耕田</span><span class='obj'>者</span><rt>種田的人</rt></ruby>。" },
            { original: "田中有株，兔走觸株，折頸而死。", svo: "<span class='adv'>田中</span><span class='verb'>有</span><span class='obj'>株</span>，<span class='subj'>兔</span><span class='verb'>走觸</span><span class='obj'>株</span>，<span class='verb'>折</span><span class='obj'>頸</span>而<span class='verb'>死</span>。", svo_trans: "<ruby><span class='adv'>田中</span><rt>田裡</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>株</span><rt>樹樁</rt></ruby>，<ruby><span class='subj'>兔</span><rt>兔子</rt></ruby><ruby><span class='verb'>走觸</span><rt>跑來撞到</rt></ruby><ruby><span class='obj'>株</span><rt>樹樁</rt></ruby>，<ruby><span class='verb'>折</span><rt>折斷</rt></ruby><ruby><span class='obj'>頸</span><rt>脖子</rt></ruby>而<ruby><span class='verb'>死</span><rt>死掉</rt></ruby>。" },
            { original: "因釋其耒而守株，冀復得兔。", svo: "因<span class='verb'>釋</span><span class='attr'>其</span><span class='obj'>耒</span>而<span class='verb'>守</span><span class='obj'>株</span>，<span class='verb'>冀</span><span class='adv'>復</span><span class='verb'>得</span><span class='obj'>兔</span>。", svo_trans: "因<ruby><span class='verb'>釋</span><rt>放下</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>耒</span><rt>他的農具</rt></ruby>而<ruby><span class='verb'>守</span><rt>守著</rt></ruby><ruby><span class='obj'>株</span><rt>樹樁</rt></ruby>，<ruby><span class='verb'>冀</span><rt>希望能</rt></ruby><ruby><span class='adv'>復</span><rt>再次</rt></ruby><ruby><span class='verb'>得</span><rt>得到</rt></ruby><ruby><span class='obj'>兔</span><rt>兔子</rt></ruby>。" },
            { original: "兔不可復得，而身為宋國笑。", svo: "<span class='subj'>兔</span><span class='adv'>不可復</span><span class='verb'>得</span>，而<span class='subj'>身</span><span class='verb'>為</span><span class='obj'>宋國笑</span>。", svo_trans: "<ruby><span class='subj'>兔</span><rt>兔子</rt></ruby><ruby><span class='adv'>不可復</span><rt>不可能再</rt></ruby><ruby><span class='verb'>得</span><rt>得到</rt></ruby>，而<ruby><span class='subj'>身</span><rt>自己</rt></ruby><ruby><span class='verb'>為</span><rt>被</rt></ruby><ruby><span class='obj'>宋國笑</span><rt>宋國人恥笑</rt></ruby>。" }
        ]
    },
    yonge: {
        title: "詠鵝",
        level: 1,
        sentences: [
            { original: "鵝鵝鵝，曲項向天歌。", svo: "<span class='subj'>鵝鵝鵝</span>，<span class='verb'>曲</span><span class='obj'>項</span><span class='adv'>向天</span><span class='verb'>歌</span>。", svo_trans: "<ruby><span class='subj'>鵝鵝鵝</span><rt>鵝呀鵝</rt></ruby>，<ruby><span class='verb'>曲</span><rt>彎曲著</rt></ruby><ruby><span class='obj'>項</span><rt>脖子</rt></ruby><ruby><span class='adv'>向天</span><rt>對著天空</rt></ruby><ruby><span class='verb'>歌</span><rt>唱歌</rt></ruby>。" },
            { original: "白毛浮綠水，紅掌撥清波。", svo: "<span class='attr'>白</span><span class='subj'>毛</span><span class='verb'>浮</span><span class='attr'>綠</span><span class='obj'>水</span>，<span class='attr'>紅</span><span class='subj'>掌</span><span class='verb'>撥</span><span class='attr'>清</span><span class='obj'>波</span>。", svo_trans: "<ruby><span class='attr'>白</span><span class='subj'>毛</span><rt>白色的羽毛</rt></ruby><ruby><span class='verb'>浮</span><rt>浮在</rt></ruby><ruby><span class='attr'>綠</span><span class='obj'>水</span><rt>綠水上</rt></ruby>，<ruby><span class='attr'>紅</span><span class='subj'>掌</span><rt>紅色的腳掌</rt></ruby><ruby><span class='verb'>撥</span><rt>撥動著</rt></ruby><ruby><span class='attr'>清</span><span class='obj'>波</span><rt>清澈的水波</rt></ruby>。" }
        ]
    },
    chunxiao: {
        title: "春曉",
        level: 1,
        sentences: [
            { original: "春眠不覺曉，處處聞啼鳥。", svo: "<span class='adv'>春</span><span class='verb'>眠</span><span class='adv'>不覺</span><span class='obj'>曉</span>，<span class='adv'>處處</span><span class='verb'>聞</span><span class='attr'>啼</span><span class='obj'>鳥</span>。", svo_trans: "<ruby><span class='adv'>春</span><rt>春天</rt></ruby><ruby><span class='verb'>眠</span><rt>睡覺</rt></ruby><ruby><span class='adv'>不覺</span><rt>不知不覺</rt></ruby><ruby><span class='obj'>曉</span><rt>天亮</rt></ruby>，<ruby><span class='adv'>處處</span><rt>到處</rt></ruby><ruby><span class='verb'>聞</span><rt>聽見</rt></ruby><ruby><span class='attr'>啼</span><span class='obj'>鳥</span><rt>鳥兒啼叫</rt></ruby>。" },
            { original: "夜來風雨聲，花落知多少。", svo: "<span class='adv'>夜來</span><span class='attr'>風雨</span><span class='subj'>聲</span>，<span class='subj'>花</span><span class='verb'>落</span><span class='verb'>知</span><span class='obj'>多少</span>。", svo_trans: "<ruby><span class='adv'>夜來</span><rt>昨夜裡</rt></ruby><ruby><span class='attr'>風雨</span><span class='subj'>聲</span><rt>風雨的聲音</rt></ruby>，<ruby><span class='subj'>花</span><rt>花朵</rt></ruby><ruby><span class='verb'>落</span><rt>掉落了</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='obj'>多少</span><rt>有多少呢</rt></ruby>。" }
        ]
    },
    dengguanquelou: {
        title: "登鸛雀樓",
        level: 1,
        sentences: [
            { original: "白日依山盡，黃河入海流。", svo: "<span class='subj'>白日</span><span class='adv'>依山</span><span class='verb'>盡</span>，<span class='subj'>黃河</span><span class='adv'>入海</span><span class='verb'>流</span>。", svo_trans: "<ruby><span class='subj'>白日</span><rt>夕陽</rt></ruby><ruby><span class='adv'>依山</span><rt>依傍著群山</rt></ruby><ruby><span class='verb'>盡</span><rt>落下</rt></ruby>，<ruby><span class='subj'>黃河</span><rt>黃河水</rt></ruby><ruby><span class='adv'>入海</span><rt>向著大海</rt></ruby><ruby><span class='verb'>流</span><rt>奔流</rt></ruby>。" },
            { original: "欲窮千里目，更上一層樓。", svo: "<span class='verb'>欲窮</span><span class='attr'>千里</span><span class='obj'>目</span>，<span class='adv'>更</span><span class='verb'>上</span><span class='attr'>一層</span><span class='obj'>樓</span>。", svo_trans: "<ruby><span class='verb'>欲窮</span><rt>想要看盡</rt></ruby><ruby><span class='attr'>千里</span><span class='obj'>目</span><rt>千里的風光</rt></ruby>，<ruby><span class='adv'>更</span><rt>再</rt></ruby><ruby><span class='verb'>上</span><rt>登上一層</rt></ruby><ruby><span class='attr'>一層</span><span class='obj'>樓</span><rt>樓閣</rt></ruby>。" }
        ]
    },
    jingyesi: {
        title: "靜夜思",
        level: 1,
        sentences: [
            { original: "床前明月光，疑是地上霜。", svo: "<span class='adv'>床前</span><span class='attr'>明月</span><span class='subj'>光</span>，<span class='verb'>疑是</span><span class='attr'>地上</span><span class='obj'>霜</span>。", svo_trans: "<ruby><span class='adv'>床前</span><rt>床鋪前</rt></ruby><ruby><span class='attr'>明月</span><span class='subj'>光</span><rt>明亮的月光</rt></ruby>，<ruby><span class='verb'>疑是</span><rt>懷疑是</rt></ruby><ruby><span class='attr'>地上</span><span class='obj'>霜</span><rt>地上的白霜</rt></ruby>。" },
            { original: "舉頭望明月，低頭思故鄉。", svo: "<span class='verb'>舉頭</span><span class='verb'>望</span><span class='attr'>明</span><span class='obj'>月</span>，<span class='verb'>低頭</span><span class='verb'>思</span><span class='attr'>故</span><span class='obj'>鄉</span>。", svo_trans: "<ruby><span class='verb'>舉頭</span><rt>抬起頭</rt></ruby><ruby><span class='verb'>望</span><rt>望著</rt></ruby><ruby><span class='attr'>明</span><span class='obj'>月</span><rt>明月</rt></ruby>，<ruby><span class='verb'>低頭</span><rt>低下頭</rt></ruby><ruby><span class='verb'>思</span><rt>思念</rt></ruby><ruby><span class='attr'>故</span><span class='obj'>鄉</span><rt>故鄉</rt></ruby>。" }
        ]
    },
    youziyin: {
        title: "遊子吟",
        level: 1,
        sentences: [
            { original: "慈母手中線，遊子身上衣。", svo: "<span class='attr'>慈母手中</span><span class='subj'>線</span>，<span class='attr'>遊子身上</span><span class='obj'>衣</span>。", svo_trans: "<ruby><span class='attr'>慈母手中</span><span class='subj'>線</span><rt>慈母手中的針線</rt></ruby>，<ruby><span class='attr'>遊子身上</span><span class='obj'>衣</span><rt>遊子身上的衣服</rt></ruby>。" },
            { original: "臨行密密縫，意恐遲遲歸。", svo: "<span class='adv'>臨行</span><span class='adv'>密密</span><span class='verb'>縫</span>，<span class='subj'>意</span><span class='verb'>恐</span><span class='adv'>遲遲</span><span class='verb'>歸</span>。", svo_trans: "<ruby><span class='adv'>臨行</span><rt>臨走前</rt></ruby><ruby><span class='adv'>密密</span><rt>細密地</rt></ruby><ruby><span class='verb'>縫</span><rt>縫補</rt></ruby>，<ruby><span class='subj'>意</span><rt>心裡</rt></ruby><ruby><span class='verb'>恐</span><rt>擔心</rt></ruby><ruby><span class='adv'>遲遲</span><rt>很晚才</rt></ruby><ruby><span class='verb'>歸</span><rt>回來</rt></ruby>。" },
            { original: "誰言寸草心，報得三春暉。", svo: "<span class='subj'>誰</span><span class='verb'>言</span><span class='attr'>寸草</span><span class='obj'>心</span>，<span class='verb'>報得</span><span class='attr'>三春</span><span class='obj'>暉</span>。", svo_trans: "<ruby><span class='subj'>誰</span><rt>誰</rt></ruby><ruby><span class='verb'>言</span><rt>說</rt></ruby><ruby><span class='attr'>寸草</span><span class='obj'>心</span><rt>小草般微弱的心意</rt></ruby>，<ruby><span class='verb'>報得</span><rt>能報答得了</rt></ruby><ruby><span class='attr'>三春</span><span class='obj'>暉</span><rt>春天的陽光</rt></ruby>。" }
        ]
    },
    huixiangoushu: {
        title: "回鄉偶書",
        level: 1,
        sentences: [
            { original: "少小離家老大回，鄉音無改鬢毛衰。", svo: "<span class='adv'>少小</span><span class='verb'>離</span><span class='obj'>家</span><span class='adv'>老大</span><span class='verb'>回</span>，<span class='subj'>鄉音</span><span class='adv'>無</span><span class='verb'>改</span><span class='subj'>鬢毛</span><span class='verb'>衰</span>。", svo_trans: "<ruby><span class='adv'>少小</span><rt>小時候</rt></ruby><ruby><span class='verb'>離</span><rt>離開</rt></ruby><ruby><span class='obj'>家</span><rt>家鄉</rt></ruby><ruby><span class='adv'>老大</span><rt>年老時</rt></ruby><ruby><span class='verb'>回</span><rt>回來</rt></ruby>，<ruby><span class='subj'>鄉音</span><rt>家鄉的口音</rt></ruby><ruby><span class='adv'>無</span><rt>沒有</rt></ruby><ruby><span class='verb'>改</span><rt>改變</rt></ruby><ruby><span class='subj'>鬢毛</span><rt>兩鬢的頭髮</rt></ruby><ruby><span class='verb'>衰</span><rt>稀疏了</rt></ruby>。" },
            { original: "兒童相見不相識，笑問客從何處來。", svo: "<span class='subj'>兒童</span><span class='adv'>相</span><span class='verb'>見</span><span class='adv'>不相</span><span class='verb'>識</span>，<span class='adv'>笑</span><span class='verb'>問</span><span class='subj'>客</span><span class='adv'>從何處</span><span class='verb'>來</span>。", svo_trans: "<ruby><span class='subj'>兒童</span><rt>村裡的孩童</rt></ruby><ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='adv'>不相</span><rt>卻互不</rt></ruby><ruby><span class='verb'>識</span><rt>認識</rt></ruby>，<ruby><span class='adv'>笑</span><rt>笑著</rt></ruby><ruby><span class='verb'>問</span><rt>問</rt></ruby><ruby><span class='subj'>客</span><rt>客人</rt></ruby><ruby><span class='adv'>從何處</span><rt>從哪裡</rt></ruby><ruby><span class='verb'>來</span><rt>來</rt></ruby>。" }
        ]
    },
    fengqiaoyebo: {
        title: "楓橋夜泊",
        level: 1,
        sentences: [
            { original: "月落烏啼霜滿天，江楓漁火對愁眠。", svo: "<span class='subj'>月</span><span class='verb'>落</span><span class='subj'>烏</span><span class='verb'>啼</span><span class='subj'>霜</span><span class='verb'>滿</span><span class='obj'>天</span>，<span class='subj'>江楓漁火</span><span class='verb'>對</span><span class='obj'>愁眠</span>。", svo_trans: "<ruby><span class='subj'>月</span><rt>月亮</rt></ruby><ruby><span class='verb'>落</span><rt>落下</rt></ruby><ruby><span class='subj'>烏</span><rt>烏鴉</rt></ruby><ruby><span class='verb'>啼</span><rt>啼叫</rt></ruby><ruby><span class='subj'>霜</span><rt>寒霜</rt></ruby><ruby><span class='verb'>滿</span><rt>佈滿</rt></ruby><ruby><span class='obj'>天</span><rt>天空</rt></ruby>，<ruby><span class='subj'>江楓漁火</span><rt>江邊的楓樹與漁火</rt></ruby><ruby><span class='verb'>對</span><rt>對著</rt></ruby><ruby><span class='obj'>愁眠</span><rt>發愁而眠的人</rt></ruby>。" },
            { original: "姑蘇城外寒山寺，夜半鐘聲到客船。", svo: "<span class='attr'>姑蘇城外</span><span class='adv'>寒山寺</span>，<span class='adv'>夜半</span><span class='subj'>鐘聲</span><span class='verb'>到</span><span class='obj'>客船</span>。", svo_trans: "<ruby><span class='attr'>姑蘇城外</span><rt>姑蘇城外的</rt></ruby><ruby><span class='adv'>寒山寺</span><rt>寒山寺</rt></ruby>，<ruby><span class='adv'>夜半</span><rt>半夜的</rt></ruby><ruby><span class='subj'>鐘聲</span><rt>鐘聲</rt></ruby><ruby><span class='verb'>到</span><rt>傳到</rt></ruby><ruby><span class='obj'>客船</span><rt>客船上</rt></ruby>。" }
        ]
    },
    zaofabaidi: {
        title: "早發白帝城",
        level: 1,
        sentences: [
            { original: "朝辭白帝彩雲間，千里江陵一日還。", svo: "<span class='adv'>朝</span><span class='verb'>辭</span><span class='obj'>白帝</span><span class='adv'>彩雲間</span>，<span class='attr'>千里</span><span class='obj'>江陵</span><span class='adv'>一日</span><span class='verb'>還</span>。", svo_trans: "<ruby><span class='adv'>朝</span><rt>早晨</rt></ruby><ruby><span class='verb'>辭</span><rt>辭別</rt></ruby><ruby><span class='obj'>白帝</span><rt>白帝城</rt></ruby><ruby><span class='adv'>彩雲間</span><rt>在彩雲之間</rt></ruby>，<ruby><span class='attr'>千里</span><span class='obj'>江陵</span><rt>遠在千里的江陵</rt></ruby><ruby><span class='adv'>一日</span><rt>一天就能</rt></ruby><ruby><span class='verb'>還</span><rt>返回</rt></ruby>。" },
            { original: "兩岸猿聲啼不住，輕舟已過萬重山。", svo: "<span class='attr'>兩岸</span><span class='subj'>猿聲</span><span class='verb'>啼不住</span>，<span class='subj'>輕舟</span><span class='adv'>已</span><span class='verb'>過</span><span class='attr'>萬重</span><span class='obj'>山</span>。", svo_trans: "<ruby><span class='attr'>兩岸</span><span class='subj'>猿聲</span><rt>兩岸的猿猴叫聲</rt></ruby><ruby><span class='verb'>啼不住</span><rt>啼叫個不停</rt></ruby>，<ruby><span class='subj'>輕舟</span><rt>輕快的小舟</rt></ruby><ruby><span class='adv'>已</span><rt>已經</rt></ruby><ruby><span class='verb'>過</span><rt>穿過</rt></ruby><ruby><span class='attr'>萬重</span><span class='obj'>山</span><rt>重重疊疊的高山</rt></ruby>。" }
        ]
    },
    liangzhouchi: {
        title: "涼州詞",
        level: 1,
        sentences: [
            { original: "葡萄美酒夜光杯，欲飲琵琶馬上催。", svo: "<span class='attr'>葡萄</span><span class='subj'>美酒</span><span class='attr'>夜光</span><span class='obj'>杯</span>，<span class='verb'>欲飲</span><span class='subj'>琵琶</span><span class='adv'>馬上</span><span class='verb'>催</span>。", svo_trans: "<ruby><span class='attr'>葡萄</span><rt>葡萄釀製的</rt></ruby><ruby><span class='subj'>美酒</span><rt>美酒</rt></ruby><ruby><span class='attr'>夜光</span><span class='obj'>杯</span><rt>盛在夜光杯裡</rt></ruby>，<ruby><span class='verb'>欲飲</span><rt>正想飲用</rt></ruby><ruby><span class='subj'>琵琶</span><rt>琵琶聲</rt></ruby><ruby><span class='adv'>馬上</span><rt>在馬背上</rt></ruby><ruby><span class='verb'>催</span><rt>催促著</rt></ruby>。" },
            { original: "醉臥沙場君莫笑，古來征戰幾人回。", svo: "<span class='adv'>醉</span><span class='verb'>臥</span><span class='adv'>沙場</span><span class='subj'>君</span><span class='adv'>莫</span><span class='verb'>笑</span>，<span class='adv'>古來</span><span class='subj'>征戰</span><span class='attr'>幾</span><span class='subj'>人</span><span class='verb'>回</span>。", svo_trans: "<ruby><span class='adv'>醉</span><rt>醉倒</rt></ruby><ruby><span class='verb'>臥</span><rt>躺臥</rt></ruby><ruby><span class='adv'>沙場</span><rt>在戰場上</rt></ruby><ruby><span class='subj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>莫</span><rt>不要</rt></ruby><ruby><span class='verb'>笑</span><rt>見笑</rt></ruby>，<ruby><span class='adv'>古來</span><rt>自古以來</rt></ruby><ruby><span class='subj'>征戰</span><rt>出外打仗</rt></ruby><ruby><span class='attr'>幾</span><span class='subj'>人</span><rt>有幾個人</rt></ruby><ruby><span class='verb'>回</span><rt>能平安回來</rt></ruby>。" }
        ]
    },
    chusai: {
        title: "出塞",
        level: 1,
        sentences: [
            { original: "秦時明月漢時關，萬里長征人未還。", svo: "<span class='attr'>秦時</span><span class='subj'>明月</span><span class='attr'>漢時</span><span class='subj'>關</span>，<span class='attr'>萬里</span><span class='adv'>長征</span><span class='subj'>人</span><span class='adv'>未</span><span class='verb'>還</span>。", svo_trans: "<ruby><span class='attr'>秦時</span><rt>秦代的</rt></ruby><ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='attr'>漢時</span><rt>漢代的</rt></ruby><ruby><span class='subj'>關</span><rt>關隘</rt></ruby>，<ruby><span class='attr'>萬里</span><rt>遠赴萬里</rt></ruby><ruby><span class='adv'>長征</span><rt>長途征戰</rt></ruby><ruby><span class='subj'>人</span><rt>將士們</rt></ruby><ruby><span class='adv'>未</span><rt>還沒</rt></ruby><ruby><span class='verb'>還</span><rt>回來</rt></ruby>。" },
            { original: "但使龍城飛將在，不教胡馬度陰山。", svo: "<span class='adv'>但使</span><span class='attr'>龍城</span><span class='subj'>飛將</span><span class='verb'>在</span>，<span class='adv'>不</span><span class='verb'>教</span><span class='subj'>胡馬</span><span class='verb'>度</span><span class='obj'>陰山</span>。", svo_trans: "<ruby><span class='adv'>但使</span><rt>只要</rt></ruby><ruby><span class='attr'>龍城</span><rt>鎮守龍城的</rt></ruby><ruby><span class='subj'>飛將</span><rt>飛將軍</rt></ruby><ruby><span class='verb'>在</span><rt>還在</rt></ruby>，<ruby><span class='adv'>不</span><rt>就不</rt></ruby><ruby><span class='verb'>教</span><rt>讓</rt></ruby><ruby><span class='subj'>胡馬</span><rt>敵人的戰馬</rt></ruby><ruby><span class='verb'>度</span><rt>越過</rt></ruby><ruby><span class='obj'>陰山</span><rt>陰山</rt></ruby>。" }
        ]
    },
    jiuyuejiuri: {
        title: "九月九日憶山東兄弟",
        level: 1,
        sentences: [
            { original: "獨在異鄉為異客，每逢佳節倍思親。", svo: "<span class='adv'>獨在</span><span class='obj'>異鄉</span><span class='verb'>為</span><span class='obj'>異客</span>，<span class='adv'>每逢</span><span class='obj'>佳節</span><span class='adv'>倍</span><span class='verb'>思</span><span class='obj'>親</span>。", svo_trans: "<ruby><span class='adv'>獨在</span><rt>獨自處在</rt></ruby><ruby><span class='obj'>異鄉</span><rt>外地</rt></ruby><ruby><span class='verb'>為</span><rt>作</rt></ruby><ruby><span class='obj'>異客</span><rt>他鄉的客人</rt></ruby>，<ruby><span class='adv'>每逢</span><rt>每當遇到</rt></ruby><ruby><span class='obj'>佳節</span><rt>節日</rt></ruby><ruby><span class='adv'>倍</span><rt>加倍地</rt></ruby><ruby><span class='verb'>思</span><rt>思念</rt></ruby><ruby><span class='obj'>親</span><rt>親人</rt></ruby>。" },
            { original: "遙知兄弟登高處，遍插茱萸少一人。", svo: "<span class='verb'>遙知</span><span class='subj'>兄弟</span><span class='adv'>登高</span><span class='obj'>處</span>，<span class='adv'>遍</span><span class='verb'>插</span><span class='obj'>茱萸</span><span class='verb'>少</span><span class='obj'>一人</span>。", svo_trans: "<ruby><span class='verb'>遙知</span><rt>遠遠地想到</rt></ruby><ruby><span class='subj'>兄弟</span><rt>兄弟們</rt></ruby><ruby><span class='adv'>登高</span><rt>登高望遠的</rt></ruby><ruby><span class='obj'>處</span><rt>地方</rt></ruby>，<ruby><span class='adv'>遍</span><rt>全都</rt></ruby><ruby><span class='verb'>插</span><rt>插上了</rt></ruby><ruby><span class='obj'>茱萸</span><rt>茱萸</rt></ruby><ruby><span class='verb'>少</span><rt>卻少了</rt></ruby><ruby><span class='obj'>一人</span><rt>我一個人</rt></ruby>。" }
        ]
    },
    songyuaner: {
        title: "送元二使安西",
        level: 1,
        sentences: [
            { original: "渭城朝雨浥輕塵，客舍青青柳色新。", svo: "<span class='attr'>渭城</span><span class='subj'>朝雨</span><span class='verb'>浥</span><span class='attr'>輕</span><span class='obj'>塵</span>，<span class='subj'>客舍</span><span class='verb'>青青</span><span class='subj'>柳色</span><span class='verb'>新</span>。", svo_trans: "<ruby><span class='attr'>渭城</span><rt>渭城的</rt></ruby><ruby><span class='subj'>朝雨</span><rt>晨雨</rt></ruby><ruby><span class='verb'>浥</span><rt>濕潤了</rt></ruby><ruby><span class='attr'>輕</span><span class='obj'>塵</span><rt>輕揚的灰塵</rt></ruby>，<ruby><span class='subj'>客舍</span><rt>旅店旁邊</rt></ruby><ruby><span class='verb'>青青</span><rt>一片青翠</rt></ruby><ruby><span class='subj'>柳色</span><rt>柳樹的顏色</rt></ruby><ruby><span class='verb'>新</span><rt>煥然一新</rt></ruby>。" },
            { original: "勸君更盡一杯酒，西出陽關無故人。", svo: "<span class='verb'>勸</span><span class='obj'>君</span><span class='adv'>更</span><span class='verb'>盡</span><span class='attr'>一杯</span><span class='obj'>酒</span>，<span class='adv'>西</span><span class='verb'>出</span><span class='obj'>陽關</span><span class='verb'>無</span><span class='obj'>故人</span>。", svo_trans: "<ruby><span class='verb'>勸</span><rt>勸</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>更</span><rt>再</rt></ruby><ruby><span class='verb'>盡</span><rt>飲盡</rt></ruby><ruby><span class='attr'>一杯</span><span class='obj'>酒</span><rt>一杯酒</rt></ruby>，<ruby><span class='adv'>西</span><rt>向西</rt></ruby><ruby><span class='verb'>出</span><rt>出了</rt></ruby><ruby><span class='obj'>陽關</span><rt>陽關之後</rt></ruby><ruby><span class='verb'>無</span><rt>就沒有</rt></ruby><ruby><span class='obj'>故人</span><rt>老朋友了</rt></ruby>。" }
        ]
    },
    jueju: {
        title: "絕句(兩個黃鸝鳴翠柳)",
        level: 1,
        sentences: [
            { original: "兩個黃鸝鳴翠柳，一行白鷺上青天。", svo: "<span class='attr'>兩個</span><span class='subj'>黃鸝</span><span class='verb'>鳴</span><span class='attr'>翠</span><span class='obj'>柳</span>，<span class='attr'>一行</span><span class='subj'>白鷺</span><span class='verb'>上</span><span class='attr'>青</span><span class='obj'>天</span>。", svo_trans: "<ruby><span class='attr'>兩個</span><rt>兩隻</rt></ruby><ruby><span class='subj'>黃鸝</span><rt>黃鸝鳥</rt></ruby><ruby><span class='verb'>鳴</span><rt>鳴叫於</rt></ruby><ruby><span class='attr'>翠</span><span class='obj'>柳</span><rt>翠綠的柳樹間</rt></ruby>，<ruby><span class='attr'>一行</span><rt>一排</rt></ruby><ruby><span class='subj'>白鷺</span><rt>白鷺鷥</rt></ruby><ruby><span class='verb'>上</span><rt>飛上</rt></ruby><ruby><span class='attr'>青</span><span class='obj'>天</span><rt>蔚藍的天空</rt></ruby>。" },
            { original: "窗含西嶺千秋雪，門泊東吳萬里船。", svo: "<span class='subj'>窗</span><span class='verb'>含</span><span class='attr'>西嶺千秋</span><span class='obj'>雪</span>，<span class='subj'>門</span><span class='verb'>泊</span><span class='attr'>東吳萬里</span><span class='obj'>船</span>。", svo_trans: "<ruby><span class='subj'>窗</span><rt>窗戶</rt></ruby><ruby><span class='verb'>含</span><rt>框住了</rt></ruby><ruby><span class='attr'>西嶺千秋</span><span class='obj'>雪</span><rt>西嶺長年不化的積雪</rt></ruby>，<ruby><span class='subj'>門</span><rt>門前</rt></ruby><ruby><span class='verb'>泊</span><rt>停泊著</rt></ruby><ruby><span class='attr'>東吳萬里</span><span class='obj'>船</span><rt>從東吳遠道而來的船隻</rt></ruby>。" }
        ]
    },
    fudeguyuan: {
        title: "賦得古原草送別",
        level: 1,
        sentences: [
            { original: "離離原上草，一歲一枯榮。", svo: "<span class='attr'>離離</span><span class='attr'>原上</span><span class='subj'>草</span>，<span class='adv'>一歲</span><span class='adv'>一</span><span class='verb'>枯榮</span>。", svo_trans: "<ruby><span class='attr'>離離</span><rt>茂盛的</rt></ruby><ruby><span class='attr'>原上</span><span class='subj'>草</span><rt>草原上的草</rt></ruby>，<ruby><span class='adv'>一歲</span><rt>一年</rt></ruby><ruby><span class='adv'>一</span><rt>一次</rt></ruby><ruby><span class='verb'>枯榮</span><rt>枯萎又繁榮</rt></ruby>。" },
            { original: "野火燒不盡，春風吹又生。", svo: "<span class='subj'>野火</span><span class='verb'>燒不盡</span>，<span class='subj'>春風</span><span class='verb'>吹</span><span class='adv'>又</span><span class='verb'>生</span>。", svo_trans: "<ruby><span class='subj'>野火</span><rt>野火</rt></ruby><ruby><span class='verb'>燒不盡</span><rt>無法把它燒盡</rt></ruby>，<ruby><span class='subj'>春風</span><rt>春風</rt></ruby><ruby><span class='verb'>吹</span><rt>一吹</rt></ruby><ruby><span class='adv'>又</span><rt>又會</rt></ruby><ruby><span class='verb'>生</span><rt>生長出來</rt></ruby>。" }
        ]
    },
    minnong2: {
        title: "憫農(其二)",
        level: 1,
        sentences: [
            { original: "鋤禾日當午，汗滴禾下土。", svo: "<span class='verb'>鋤</span><span class='obj'>禾</span><span class='subj'>日</span><span class='verb'>當</span><span class='obj'>午</span>，<span class='subj'>汗</span><span class='verb'>滴</span><span class='adv'>禾下土</span>。", svo_trans: "<ruby><span class='verb'>鋤</span><rt>鋤草</rt></ruby><ruby><span class='obj'>禾</span><rt>禾苗</rt></ruby><ruby><span class='subj'>日</span><rt>太陽</rt></ruby><ruby><span class='verb'>當</span><rt>正當</rt></ruby><ruby><span class='obj'>午</span><rt>正午</rt></ruby>，<ruby><span class='subj'>汗</span><rt>汗水</rt></ruby><ruby><span class='verb'>滴</span><rt>滴落</rt></ruby><ruby><span class='adv'>禾下土</span><rt>禾苗下的泥土上</rt></ruby>。" },
            { original: "誰知盤中飧，粒粒皆辛苦。", svo: "<span class='subj'>誰</span><span class='verb'>知</span><span class='attr'>盤中</span><span class='obj'>飧</span>，<span class='subj'>粒粒</span><span class='adv'>皆</span><span class='verb'>辛苦</span>。", svo_trans: "<ruby><span class='subj'>誰</span><rt>誰</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='attr'>盤中</span><span class='obj'>飧</span><rt>盤子裡的飯食</rt></ruby>，<ruby><span class='subj'>粒粒</span><rt>每一粒</rt></ruby><ruby><span class='adv'>皆</span><rt>都是</rt></ruby><ruby><span class='verb'>辛苦</span><rt>辛苦換來的</rt></ruby>。" }
        ]
    },
    qingming: {
        title: "清明",
        level: 1,
        sentences: [
            { original: "清明時節雨紛紛，路上行人欲斷魂。", svo: "<span class='adv'>清明時節</span><span class='subj'>雨</span><span class='verb'>紛紛</span>，<span class='attr'>路上</span><span class='subj'>行人</span><span class='verb'>欲斷魂</span>。", svo_trans: "<ruby><span class='adv'>清明時節</span><rt>清明節的時候</rt></ruby><ruby><span class='subj'>雨</span><rt>春雨</rt></ruby><ruby><span class='verb'>紛紛</span><rt>不斷地下著</rt></ruby>，<ruby><span class='attr'>路上</span><span class='subj'>行人</span><rt>路上的旅人</rt></ruby><ruby><span class='verb'>欲斷魂</span><rt>神魂沮喪</rt></ruby>。" },
            { original: "借問酒家何處有，牧童遙指杏花村。", svo: "<span class='verb'>借問</span><span class='subj'>酒家</span><span class='adv'>何處</span><span class='verb'>有</span>，<span class='subj'>牧童</span><span class='adv'>遙</span><span class='verb'>指</span><span class='obj'>杏花村</span>。", svo_trans: "<ruby><span class='verb'>借問</span><rt>請問</rt></ruby><ruby><span class='subj'>酒家</span><rt>酒館</rt></ruby><ruby><span class='adv'>何處</span><rt>哪裡</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby>，<ruby><span class='subj'>牧童</span><rt>放牛的孩子</rt></ruby><ruby><span class='adv'>遙</span><rt>遠遠地</rt></ruby><ruby><span class='verb'>指</span><rt>指著</rt></ruby><ruby><span class='obj'>杏花村</span><rt>杏花村</rt></ruby>。" }
        ]
    },
    shanxing: {
        title: "山行",
        level: 1,
        sentences: [
            { original: "遠上寒山石徑斜，白雲生處有人家。", svo: "<span class='adv'>遠</span><span class='verb'>上</span><span class='attr'>寒山</span><span class='subj'>石徑</span><span class='verb'>斜</span>，<span class='attr'>白雲生</span><span class='obj'>處</span><span class='verb'>有</span><span class='obj'>人家</span>。", svo_trans: "<ruby><span class='adv'>遠</span><rt>遠遠地</rt></ruby><ruby><span class='verb'>上</span><rt>登上</rt></ruby><ruby><span class='attr'>寒山</span><span class='subj'>石徑</span><rt>秋山傾斜的石路</rt></ruby><ruby><span class='verb'>斜</span><rt>傾斜</rt></ruby>，<ruby><span class='attr'>白雲生</span><span class='obj'>處</span><rt>白雲升起的地方</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>人家</span><rt>住家</rt></ruby>。" },
            { original: "停車坐愛楓林晚，霜葉紅於二月花。", svo: "<span class='verb'>停</span><span class='obj'>車</span><span class='adv'>坐</span><span class='verb'>愛</span><span class='attr'>楓林</span><span class='obj'>晚</span>，<span class='subj'>霜葉</span><span class='verb'>紅於</span><span class='attr'>二月</span><span class='obj'>花</span>。", svo_trans: "<ruby><span class='verb'>停</span><rt>停下</rt></ruby><ruby><span class='obj'>車</span><rt>馬車</rt></ruby><ruby><span class='adv'>坐</span><rt>因為</rt></ruby><ruby><span class='verb'>愛</span><rt>喜愛</rt></ruby><ruby><span class='attr'>楓林</span><span class='obj'>晚</span><rt>傍晚的楓樹林</rt></ruby>，<ruby><span class='subj'>霜葉</span><rt>經霜的楓葉</rt></ruby><ruby><span class='verb'>紅於</span><rt>比...還紅</rt></ruby><ruby><span class='attr'>二月</span><span class='obj'>花</span><rt>春天的花朵</rt></ruby>。" }
        ]
    },
    feng: {
        title: "蜂",
        level: 1,
        sentences: [
            { original: "不論平地與山尖，無限風光盡被占。", svo: "<span class='adv'>不論</span><span class='obj'>平地與山尖</span>，<span class='attr'>無限</span><span class='subj'>風光</span><span class='adv'>盡被</span><span class='verb'>占</span>。", svo_trans: "<ruby><span class='adv'>不論</span><rt>無論是</rt></ruby><ruby><span class='obj'>平地與山尖</span><rt>平地還是山頂</rt></ruby>，<ruby><span class='attr'>無限</span><span class='subj'>風光</span><rt>無限的春色</rt></ruby><ruby><span class='adv'>盡被</span><rt>全被</rt></ruby><ruby><span class='verb'>占</span><rt>佔有</rt></ruby>。" },
            { original: "採得百花成蜜後，為誰辛苦為誰甜。", svo: "<span class='verb'>採得</span><span class='attr'>百</span><span class='obj'>花</span><span class='verb'>成</span><span class='obj'>蜜</span><span class='adv'>後</span>，<span class='adv'>為誰</span><span class='verb'>辛苦</span><span class='adv'>為誰</span><span class='verb'>甜</span>。", svo_trans: "<ruby><span class='verb'>採得</span><rt>採集了</rt></ruby><ruby><span class='attr'>百</span><span class='obj'>花</span><rt>各種花朵</rt></ruby><ruby><span class='verb'>成</span><rt>釀成</rt></ruby><ruby><span class='obj'>蜜</span><rt>蜂蜜</rt></ruby><ruby><span class='adv'>後</span><rt>之後</rt></ruby>，<ruby><span class='adv'>為誰</span><rt>是為了誰</rt></ruby><ruby><span class='verb'>辛苦</span><rt>辛苦</rt></ruby><ruby><span class='adv'>為誰</span><rt>為了誰</rt></ruby><ruby><span class='verb'>甜</span><rt>甜美</rt></ruby>。" }
        ]
    },
    jinluyi: {
        title: "金縷衣",
        level: 1,
        sentences: [
            { original: "勸君莫惜金縷衣，勸君惜取少年時。", svo: "<span class='verb'>勸</span><span class='obj'>君</span><span class='adv'>莫</span><span class='verb'>惜</span><span class='attr'>金縷</span><span class='obj'>衣</span>，<span class='verb'>勸</span><span class='obj'>君</span><span class='verb'>惜取</span><span class='attr'>少年</span><span class='obj'>時</span>。", svo_trans: "<ruby><span class='verb'>勸</span><rt>勸</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>莫</span><rt>不要</rt></ruby><ruby><span class='verb'>惜</span><rt>愛惜</rt></ruby><ruby><span class='attr'>金縷</span><span class='obj'>衣</span><rt>華貴的衣服</rt></ruby>，<ruby><span class='verb'>勸</span><rt>勸</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='verb'>惜取</span><rt>珍惜</rt></ruby><ruby><span class='attr'>少年</span><span class='obj'>時</span><rt>年輕的時光</rt></ruby>。" },
            { original: "花開堪折直須折，莫待無花空折枝。", svo: "<span class='subj'>花</span><span class='verb'>開</span><span class='adv'>堪</span><span class='verb'>折</span><span class='adv'>直須</span><span class='verb'>折</span>，<span class='adv'>莫待</span><span class='verb'>無</span><span class='obj'>花</span><span class='adv'>空</span><span class='verb'>折</span><span class='obj'>枝</span>。", svo_trans: "<ruby><span class='subj'>花</span><rt>花朵</rt></ruby><ruby><span class='verb'>開</span><rt>盛開</rt></ruby><ruby><span class='adv'>堪</span><rt>可以</rt></ruby><ruby><span class='verb'>折</span><rt>攀折時</rt></ruby><ruby><span class='adv'>直須</span><rt>就應該</rt></ruby><ruby><span class='verb'>折</span><rt>折下來</rt></ruby>，<ruby><span class='adv'>莫待</span><rt>不要等到</rt></ruby><ruby><span class='verb'>無</span><span class='obj'>花</span><rt>沒有花時</rt></ruby><ruby><span class='adv'>空</span><rt>徒勞地</rt></ruby><ruby><span class='verb'>折</span><span class='obj'>枝</span><rt>折空樹枝</rt></ruby>。" }
        ]
    },
    xiaochi: {
        title: "小池",
        level: 1,
        sentences: [
            { original: "泉眼無聲惜細流，樹陰照水愛晴柔。", svo: "<span class='subj'>泉眼</span><span class='adv'>無聲</span><span class='verb'>惜</span><span class='attr'>細</span><span class='obj'>流</span>，<span class='subj'>樹陰</span><span class='verb'>照</span><span class='obj'>水</span><span class='verb'>愛</span><span class='obj'>晴柔</span>。", svo_trans: "<ruby><span class='subj'>泉眼</span><rt>泉水口</rt></ruby><ruby><span class='adv'>無聲</span><rt>靜靜地</rt></ruby><ruby><span class='verb'>惜</span><rt>珍惜</rt></ruby><ruby><span class='attr'>細</span><span class='obj'>流</span><rt>細小的水流</rt></ruby>，<ruby><span class='subj'>樹陰</span><rt>樹蔭</rt></ruby><ruby><span class='verb'>照</span><rt>倒映在</rt></ruby><ruby><span class='obj'>水</span><rt>水中</rt></ruby><ruby><span class='verb'>愛</span><rt>喜愛</rt></ruby><ruby><span class='obj'>晴柔</span><rt>晴天柔和的風光</rt></ruby>。" },
            { original: "小荷才露尖尖角，早有蜻蜓立上頭。", svo: "<span class='attr'>小</span><span class='subj'>荷</span><span class='adv'>才</span><span class='verb'>露</span><span class='attr'>尖尖</span><span class='obj'>角</span>，<span class='adv'>早</span><span class='verb'>有</span><span class='subj'>蜻蜓</span><span class='verb'>立</span><span class='adv'>上頭</span>。", svo_trans: "<ruby><span class='attr'>小</span><span class='subj'>荷</span><rt>小小的荷葉</rt></ruby><ruby><span class='adv'>才</span><rt>剛</rt></ruby><ruby><span class='verb'>露</span><rt>露出</rt></ruby><ruby><span class='attr'>尖尖</span><span class='obj'>角</span><rt>尖尖的角</rt></ruby>，<ruby><span class='adv'>早</span><rt>早就</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='subj'>蜻蜓</span><rt>蜻蜓</rt></ruby><ruby><span class='verb'>立</span><rt>停立</rt></ruby><ruby><span class='adv'>上頭</span><rt>在上面</rt></ruby>。" }
        ]
    },
    yuanri: {
        title: "元日",
        level: 1,
        sentences: [
            { original: "爆竹聲中一歲除，春風送暖入屠蘇。", svo: "<span class='adv'>爆竹聲中</span><span class='subj'>一歲</span><span class='verb'>除</span>，<span class='subj'>春風</span><span class='verb'>送</span><span class='obj'>暖</span><span class='verb'>入</span><span class='obj'>屠蘇</span>。", svo_trans: "<ruby><span class='adv'>爆竹聲中</span><rt>在爆竹聲裡</rt></ruby><ruby><span class='subj'>一歲</span><rt>舊的一年</rt></ruby><ruby><span class='verb'>除</span><rt>過去了</rt></ruby>，<ruby><span class='subj'>春風</span><rt>春風</rt></ruby><ruby><span class='verb'>送</span><rt>送來</rt></ruby><ruby><span class='obj'>暖</span><rt>暖意</rt></ruby><ruby><span class='verb'>入</span><rt>吹入</rt></ruby><ruby><span class='obj'>屠蘇</span><rt>屠蘇酒中</rt></ruby>。" },
            { original: "千門萬戶曈曈日，總把新桃換舊符。", svo: "<span class='attr'>千門萬戶</span><span class='attr'>曈曈</span><span class='subj'>日</span>，<span class='adv'>總</span><span class='verb'>把</span><span class='attr'>新</span><span class='obj'>桃</span><span class='verb'>換</span><span class='attr'>舊</span><span class='obj'>符</span>。", svo_trans: "<ruby><span class='attr'>千門萬戶</span><rt>家家戶戶</rt></ruby><ruby><span class='attr'>曈曈</span><span class='subj'>日</span><rt>迎著初升的太陽</rt></ruby>，<ruby><span class='adv'>總</span><rt>都</rt></ruby><ruby><span class='verb'>把</span><rt>把</rt></ruby><ruby><span class='attr'>新</span><span class='obj'>桃</span><rt>新的桃符</rt></ruby><ruby><span class='verb'>換</span><rt>換下</rt></ruby><ruby><span class='attr'>舊</span><span class='obj'>符</span><rt>舊的桃符</rt></ruby>。" }
        ]
    },
    bochuanguazhou: {
        title: "泊船瓜洲",
        level: 1,
        sentences: [
            { original: "京口瓜洲一水間，鐘山只隔數重山。", svo: "<span class='subj'>京口瓜洲</span><span class='adv'>一水間</span>，<span class='subj'>鐘山</span><span class='adv'>只</span><span class='verb'>隔</span><span class='attr'>數重</span><span class='obj'>山</span>。", svo_trans: "<ruby><span class='subj'>京口瓜洲</span><rt>京口和瓜洲</rt></ruby><ruby><span class='adv'>一水間</span><rt>只隔著一條長江</rt></ruby>，<ruby><span class='subj'>鐘山</span><rt>鐘山</rt></ruby><ruby><span class='adv'>只</span><rt>也只</rt></ruby><ruby><span class='verb'>隔</span><rt>隔著</rt></ruby><ruby><span class='attr'>數重</span><span class='obj'>山</span><rt>幾重山</rt></ruby>。" },
            { original: "春風又綠江南岸，明月何時照我還。", svo: "<span class='subj'>春風</span><span class='adv'>又</span><span class='verb'>綠</span><span class='attr'>江南</span><span class='obj'>岸</span>，<span class='subj'>明月</span><span class='adv'>何時</span><span class='verb'>照</span><span class='obj'>我</span><span class='verb'>還</span>。", svo_trans: "<ruby><span class='subj'>春風</span><rt>春風</rt></ruby><ruby><span class='adv'>又</span><rt>再次</rt></ruby><ruby><span class='verb'>綠</span><rt>吹綠了</rt></ruby><ruby><span class='attr'>江南</span><span class='obj'>岸</span><rt>長江南岸</rt></ruby>，<ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='adv'>何時</span><rt>什麼時候</rt></ruby><ruby><span class='verb'>照</span><rt>才能照著</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>還</span><rt>回家呢</rt></ruby>。" }
        ]
    },
    jiangxue: {
        title: "江雪",
        level: 1,
        sentences: [
            { original: "千山鳥飛絕，萬徑人蹤滅。", svo: "<span class='attr'>千</span><span class='subj'>山</span><span class='subj'>鳥飛</span><span class='verb'>絕</span>，<span class='attr'>萬</span><span class='subj'>徑</span><span class='subj'>人蹤</span><span class='verb'>滅</span>。", svo_trans: "<ruby><span class='attr'>千</span><span class='subj'>山</span><rt>群山之中</rt></ruby><ruby><span class='subj'>鳥飛</span><rt>飛鳥的蹤影</rt></ruby><ruby><span class='verb'>絕</span><rt>斷絕了</rt></ruby>，<ruby><span class='attr'>萬</span><span class='subj'>徑</span><rt>所有的道路上</rt></ruby><ruby><span class='subj'>人蹤</span><rt>行人的足跡</rt></ruby><ruby><span class='verb'>滅</span><rt>也消失了</rt></ruby>。" },
            { original: "孤舟簑笠翁，獨釣寒江雪。", svo: "<span class='attr'>孤舟</span><span class='attr'>簑笠</span><span class='subj'>翁</span>，<span class='adv'>獨</span><span class='verb'>釣</span><span class='attr'>寒江</span><span class='obj'>雪</span>。", svo_trans: "<ruby><span class='attr'>孤舟</span><rt>孤零零的小船上</rt></ruby><ruby><span class='attr'>簑笠</span><span class='subj'>翁</span><rt>穿著簑衣戴著斗笠的老翁</rt></ruby>，<ruby><span class='adv'>獨</span><rt>獨自</rt></ruby><ruby><span class='verb'>釣</span><rt>垂釣於</rt></ruby><ruby><span class='attr'>寒江</span><rt>寒冷的江面</rt></ruby><ruby><span class='obj'>雪</span><rt>風雪之中</rt></ruby>。" }
        ]
    },
    shihuiyin: {
        title: "石灰吟",
        level: 1,
        sentences: [
            { original: "千錘萬擊出深山，烈火焚燒若等閒。", svo: "<span class='adv'>千錘萬擊</span><span class='verb'>出</span><span class='obj'>深山</span>，<span class='subj'>烈火</span><span class='verb'>焚燒若等閒</span>。", svo_trans: "<ruby><span class='adv'>千錘萬擊</span><rt>歷經千錘百鍊</rt></ruby><ruby><span class='verb'>出</span><rt>才開採出</rt></ruby><ruby><span class='obj'>深山</span><rt>深山</rt></ruby>，<ruby><span class='subj'>烈火</span><rt>熊熊烈火</rt></ruby><ruby><span class='verb'>焚燒若等閒</span><rt>焚燒也只當作是平常事</rt></ruby>。" },
            { original: "粉骨碎身渾不怕，要留清白在人間。", svo: "<span class='verb'>粉骨碎身</span><span class='adv'>渾不</span><span class='verb'>怕</span>，<span class='verb'>要留</span><span class='obj'>清白</span><span class='adv'>在人間</span>。", svo_trans: "<ruby><span class='verb'>粉骨碎身</span><rt>即使粉身碎骨</rt></ruby><ruby><span class='adv'>渾不</span><rt>也全然不</rt></ruby><ruby><span class='verb'>怕</span><rt>害怕</rt></ruby>，<ruby><span class='verb'>要留</span><rt>只為了把</rt></ruby><ruby><span class='obj'>清白</span><rt>純潔清白的節操</rt></ruby><ruby><span class='adv'>在人間</span><rt>留在這人世間</rt></ruby>。" }
        ]
    },
    mingrige: {
        title: "明日歌",
        level: 1,
        sentences: [
            { original: "明日復明日，明日何其多。", svo: "<span class='subj'>明日</span><span class='adv'>復</span><span class='subj'>明日</span>，<span class='subj'>明日</span><span class='adv'>何其</span><span class='verb'>多</span>。", svo_trans: "<ruby><span class='subj'>明日</span><rt>明天</rt></ruby><ruby><span class='adv'>復</span><rt>又接</rt></ruby><ruby><span class='subj'>明日</span><rt>明天</rt></ruby>，<ruby><span class='subj'>明日</span><rt>明天</rt></ruby><ruby><span class='adv'>何其</span><rt>多麼的</rt></ruby><ruby><span class='verb'>多</span><rt>多啊</rt></ruby>。" },
            { original: "我生待明日，萬事成蹉跎。", svo: "<span class='subj'>我生</span><span class='verb'>待</span><span class='obj'>明日</span>，<span class='subj'>萬事</span><span class='verb'>成</span><span class='obj'>蹉跎</span>。", svo_trans: "<ruby><span class='subj'>我生</span><rt>我這一生如果都</rt></ruby><ruby><span class='verb'>待</span><rt>等待</rt></ruby><ruby><span class='obj'>明日</span><rt>明天</rt></ruby>，<ruby><span class='subj'>萬事</span><rt>所有的事情</rt></ruby><ruby><span class='verb'>成</span><rt>都會變成</rt></ruby><ruby><span class='obj'>蹉跎</span><rt>白白虛度了</rt></ruby>。" }
        ]
    },
    huaji: {
        title: "畫雞",
        level: 1,
        sentences: [
            { original: "頭上紅冠不用裁，滿身雪白走將來。", svo: "<span class='adv'>頭上</span><span class='subj'>紅冠</span><span class='adv'>不用</span><span class='verb'>裁</span>，<span class='adv'>滿身雪白</span><span class='verb'>走將來</span>。", svo_trans: "<ruby><span class='adv'>頭上</span><rt>頭上的</rt></ruby><ruby><span class='subj'>紅冠</span><rt>紅冠</rt></ruby><ruby><span class='adv'>不用</span><rt>不需要</rt></ruby><ruby><span class='verb'>裁</span><rt>特別剪裁</rt></ruby>，<ruby><span class='adv'>滿身雪白</span><rt>全身雪白的羽毛</rt></ruby><ruby><span class='verb'>走將來</span><rt>昂首闊步地走過來</rt></ruby>。" },
            { original: "平生不敢輕言語，一叫千門萬戶開。", svo: "<span class='adv'>平生</span><span class='adv'>不敢輕</span><span class='verb'>言語</span>，<span class='adv'>一</span><span class='verb'>叫</span><span class='subj'>千門萬戶</span><span class='verb'>開</span>。", svo_trans: "<ruby><span class='adv'>平生</span><rt>一生中</rt></ruby><ruby><span class='adv'>不敢輕</span><rt>從不敢輕易地</rt></ruby><ruby><span class='verb'>言語</span><rt>開口說話</rt></ruby>，<ruby><span class='adv'>一</span><rt>只要一</rt></ruby><ruby><span class='verb'>叫</span><rt>啼叫</rt></ruby><ruby><span class='subj'>千門萬戶</span><rt>千家萬戶的大門</rt></ruby>就<ruby><span class='verb'>開</span><rt>打開了</rt></ruby>。" }
        ]
    },
    weixue: {
        title: "為學",
        level: 1,
        sentences: [
            { original: "天下事有難易乎？", svo: "<span class='subj'>天下事</span><span class='verb'>有</span><span class='obj'>難易</span>乎？", svo_trans: "<ruby><span class='subj'>天下事</span><rt>天下的事情</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>難易</span><rt>困難和容易的區別</rt></ruby>嗎？" },
            { original: "為之，則難者亦易矣；不為，則易者亦難矣。", svo: "<span class='verb'>為</span><span class='obj'>之</span>，<span class='adv'>則</span><span class='subj'>難者</span><span class='adv'>亦</span><span class='verb'>易</span>矣；<span class='adv'>不</span><span class='verb'>為</span>，<span class='adv'>則</span><span class='subj'>易者</span><span class='adv'>亦</span><span class='verb'>難</span>矣。", svo_trans: "只要去<ruby><span class='verb'>為</span><rt>做</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>，<ruby><span class='adv'>則</span><rt>那麼</rt></ruby><ruby><span class='subj'>難者</span><rt>困難的事</rt></ruby><ruby><span class='adv'>亦</span><rt>也</rt></ruby><ruby><span class='verb'>易</span><rt>容易了</rt></ruby>；<ruby><span class='adv'>不</span><rt>不</rt></ruby>去<ruby><span class='verb'>為</span><rt>做</rt></ruby>，<ruby><span class='adv'>則</span><rt>那麼</rt></ruby><ruby><span class='subj'>易者</span><rt>容易的事</rt></ruby><ruby><span class='adv'>亦</span><rt>也</rt></ruby><ruby><span class='verb'>難</span><rt>變難了</rt></ruby>。" }
        ]
    },
    tixilinbi: {
        title: "題西林壁",
        level: 1,
        sentences: [
            { original: "橫看成嶺側成峰，遠近高低各不同。", svo: "<span class='adv'>橫</span><span class='verb'>看</span><span class='verb'>成</span><span class='obj'>嶺</span><span class='adv'>側</span><span class='verb'>成</span><span class='obj'>峰</span>，<span class='subj'>遠近高低</span><span class='adv'>各</span><span class='adv'>不</span><span class='verb'>同</span>。", svo_trans: "<ruby><span class='adv'>橫</span><rt>從正面</rt></ruby><ruby><span class='verb'>看</span><rt>看</rt></ruby><ruby><span class='verb'>成</span><rt>是連綿的</rt></ruby><ruby><span class='obj'>嶺</span><rt>山嶺</rt></ruby>，<ruby><span class='adv'>側</span><rt>從側面看</rt></ruby><ruby><span class='verb'>成</span><rt>成了陡峭的</rt></ruby><ruby><span class='obj'>峰</span><rt>山峰</rt></ruby>，<ruby><span class='subj'>遠近高低</span><rt>無論從遠處、近處、高處還是低處看</rt></ruby><ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='adv'>不</span><rt>都不</rt></ruby><ruby><span class='verb'>同</span><rt>相同</rt></ruby>。" },
            { original: "不識廬山真面目，只緣身在此山中。", svo: "<span class='adv'>不</span><span class='verb'>識</span><span class='attr'>廬山</span><span class='obj'>真面目</span>，<span class='adv'>只緣</span><span class='subj'>身</span><span class='verb'>在</span><span class='obj'>此山中</span>。", svo_trans: "<ruby><span class='adv'>不</span><rt>不能</rt></ruby><ruby><span class='verb'>識</span><rt>認清</rt></ruby><ruby><span class='attr'>廬山</span><rt>廬山的</rt></ruby><ruby><span class='obj'>真面目</span><rt>真實面貌</rt></ruby>，<ruby><span class='adv'>只緣</span><rt>只因為</rt></ruby><ruby><span class='subj'>身</span><rt>自己</rt></ruby><ruby><span class='verb'>在</span><rt>身處在</rt></ruby><ruby><span class='obj'>此山中</span><rt>這座山之中</rt></ruby>。" }
        ]
    },
    xiaochujingcisi: {
        title: "曉出淨慈寺送林子方",
        level: 1,
        sentences: [
            { original: "畢竟西湖六月中，風光不與四時同。", svo: "<span class='adv'>畢竟</span><span class='subj'>西湖六月中</span>，<span class='subj'>風光</span><span class='adv'>不與</span><span class='obj'>四時</span><span class='verb'>同</span>。", svo_trans: "<ruby><span class='adv'>畢竟</span><rt>到底是</rt></ruby><ruby><span class='subj'>西湖六月中</span><rt>西湖六月裡</rt></ruby>，<ruby><span class='subj'>風光</span><rt>風光景色</rt></ruby><ruby><span class='adv'>不與</span><rt>不和其他</rt></ruby><ruby><span class='obj'>四時</span><rt>三個季節</rt></ruby><ruby><span class='verb'>同</span><rt>相同</rt></ruby>。" },
            { original: "接天蓮葉無窮碧，映日荷花別樣紅。", svo: "<span class='verb'>接</span><span class='obj'>天</span><span class='subj'>蓮葉</span><span class='adv'>無窮</span><span class='verb'>碧</span>，<span class='verb'>映</span><span class='obj'>日</span><span class='subj'>荷花</span><span class='adv'>別樣</span><span class='verb'>紅</span>。", svo_trans: "<ruby><span class='verb'>接</span><rt>連接</rt></ruby><ruby><span class='obj'>天</span><rt>天際的</rt></ruby><ruby><span class='subj'>蓮葉</span><rt>蓮葉</rt></ruby><ruby><span class='adv'>無窮</span><rt>無邊無際的</rt></ruby><ruby><span class='verb'>碧</span><rt>碧綠</rt></ruby>，<ruby><span class='verb'>映</span><rt>映照著</rt></ruby><ruby><span class='obj'>日</span><rt>太陽的</rt></ruby><ruby><span class='subj'>荷花</span><rt>荷花</rt></ruby><ruby><span class='adv'>別樣</span><rt>特別的</rt></ruby><ruby><span class='verb'>紅</span><rt>紅艷</rt></ruby>。" }
        ]
    },
    // ==================== 第二學習階段（小四至小六）====================
    jiangnan: {
        title: "江南",
        level: 2,
        sentences: [
            { original: "江南可採蓮，蓮葉何田田。", svo: "<span class='adv'>江南</span><span class='verb'>可採</span><span class='obj'>蓮</span>，<span class='subj'>蓮葉</span><span class='adv'>何</span><span class='verb'>田田</span>。", svo_trans: "<ruby><span class='adv'>江南</span><rt>長江以南</rt></ruby><ruby><span class='verb'>可採</span><rt>可以採摘</rt></ruby><ruby><span class='obj'>蓮</span><rt>蓮蓬</rt></ruby>，<ruby><span class='subj'>蓮葉</span><rt>蓮葉</rt></ruby><ruby><span class='adv'>何</span><rt>多麼</rt></ruby><ruby><span class='verb'>田田</span><rt>茂盛相連</rt></ruby>。" },
            { original: "魚戲蓮葉間。", svo: "<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉間</span>。", svo_trans: "<ruby><span class='subj'>魚</span><rt>魚兒</rt></ruby><ruby><span class='verb'>戲</span><rt>嬉戲</rt></ruby><ruby><span class='adv'>蓮葉間</span><rt>在蓮葉之間</rt></ruby>。" },
            { original: "魚戲蓮葉東，魚戲蓮葉西，魚戲蓮葉南，魚戲蓮葉北。", svo: "<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉東</span>，<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉西</span>，<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉南</span>，<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉北</span>。", svo_trans: "<ruby><span class='subj'>魚</span><rt>魚兒</rt></ruby><ruby><span class='verb'>戲</span><rt>嬉戲</rt></ruby><ruby><span class='adv'>蓮葉東</span><rt>蓮葉東邊</rt></ruby>，……" }
        ]
    },
    loushiming: {
        title: "陋室銘",
        level: 2,
        sentences: [
            { original: "山不在高，有仙則名。水不在深，有龍則靈。", svo: "<span class='subj'>山</span><span class='adv'>不</span><span class='verb'>在</span><span class='obj'>高</span>，<span class='verb'>有</span><span class='obj'>仙</span><span class='adv'>則</span><span class='verb'>名</span>。<span class='subj'>水</span><span class='adv'>不</span><span class='verb'>在</span><span class='obj'>深</span>，<span class='verb'>有</span><span class='obj'>龍</span><span class='adv'>則</span><span class='verb'>靈</span>。", svo_trans: "<ruby><span class='subj'>山</span><rt>山</rt></ruby><ruby><span class='adv'>不</span><rt>不在乎</rt></ruby><ruby><span class='verb'>在</span><rt>在於</rt></ruby><ruby><span class='obj'>高</span><rt>高大</rt></ruby>，<ruby><span class='verb'>有</span><rt>有了</rt></ruby><ruby><span class='obj'>仙</span><rt>神仙</rt></ruby><ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>名</span><rt>出名</rt></ruby>。水不在乎深，有了蛟龍就顯得神靈。" },
            { original: "斯是陋室，惟吾德馨。", svo: "<span class='subj'>斯</span><span class='verb'>是</span><span class='attr'>陋</span><span class='obj'>室</span>，<span class='adv'>惟</span><span class='attr'>吾</span><span class='subj'>德</span><span class='verb'>馨</span>。", svo_trans: "<ruby><span class='subj'>斯</span><rt>這</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='attr'>陋</span><span class='obj'>室</span><rt>簡陋的房子</rt></ruby>，<ruby><span class='adv'>惟</span><rt>只因為</rt></ruby><ruby><span class='attr'>吾</span><rt>我</rt></ruby><ruby><span class='subj'>德</span><rt>品德</rt></ruby><ruby><span class='verb'>馨</span><rt>高尚美好</rt></ruby>。" },
            { original: "苔痕上階綠，草色入簾青。", svo: "<span class='subj'>苔痕</span><span class='verb'>上</span><span class='obj'>階</span><span class='adv'>綠</span>，<span class='subj'>草色</span><span class='verb'>入</span><span class='obj'>簾</span><span class='adv'>青</span>。", svo_trans: "<ruby><span class='subj'>苔痕</span><rt>青苔的痕跡</rt></ruby><ruby><span class='verb'>上</span><rt>長到</rt></ruby><ruby><span class='obj'>階</span><rt>台階上</rt></ruby><ruby><span class='adv'>綠</span><rt>一片碧綠</rt></ruby>，<ruby><span class='subj'>草色</span><rt>青草的顏色</rt></ruby><ruby><span class='verb'>入</span><rt>映入</rt></ruby><ruby><span class='obj'>簾</span><rt>竹簾裡</rt></ruby><ruby><span class='adv'>青</span><rt>顯得青翠</rt></ruby>。" },
            { original: "談笑有鴻儒，往來無白丁。", svo: "<span class='adv'>談笑</span><span class='verb'>有</span><span class='attr'>鴻</span><span class='obj'>儒</span>，<span class='adv'>往來</span><span class='verb'>無</span><span class='attr'>白</span><span class='obj'>丁</span>。", svo_trans: "<ruby><span class='adv'>談笑</span><rt>在此談笑的</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>鴻</span><span class='obj'>儒</span><rt>博學的人</rt></ruby>，<ruby><span class='adv'>往來</span><rt>來往的</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='attr'>白</span><span class='obj'>丁</span><rt>平民/沒有學問的人</rt></ruby>。" },
            { original: "可以調素琴，閱金經。無絲竹之亂耳，無案牘之勞形。", svo: "<span class='verb'>可以調</span><span class='attr'>素</span><span class='obj'>琴</span>，<span class='verb'>閱</span><span class='attr'>金</span><span class='obj'>經</span>。<span class='verb'>無</span><span class='attr'>絲竹之</span><span class='obj'>亂耳</span>，<span class='verb'>無</span><span class='attr'>案牘之</span><span class='obj'>勞形</span>。", svo_trans: "這裡可以彈奏不加裝飾的古琴，閱讀佛經。沒有嘈雜的音樂擾亂雙耳，沒有官府的公文勞累身心。" },
            { original: "孔子云：「何陋之有？」", svo: "<span class='subj'>孔子</span><span class='verb'>云</span>：「<span class='adv'>何</span><span class='obj'>陋</span>之<span class='verb'>有</span>？」", svo_trans: "<ruby><span class='subj'>孔子</span><rt>孔子</rt></ruby><ruby><span class='verb'>云</span><rt>說</rt></ruby>：「<ruby><span class='adv'>何</span><rt>有什麼</rt></ruby><ruby><span class='obj'>陋</span><rt>簡陋</rt></ruby>之<ruby><span class='verb'>有</span><rt>有呢</rt></ruby>？」" }
        ]
    },
    ailianshuo: {
        title: "愛蓮說",
        level: 2,
        sentences: [
            { original: "水陸草木之花，可愛者甚蕃。", svo: "<span class='attr'>水陸草木之</span><span class='subj'>花</span>，<span class='attr'>可愛</span><span class='obj'>者</span><span class='adv'>甚</span><span class='verb'>蕃</span>。", svo_trans: "<ruby><span class='attr'>水陸草木之</span><span class='subj'>花</span><rt>水上和陸地上草木的花</rt></ruby>，<ruby><span class='attr'>可愛</span><span class='obj'>者</span><rt>值得喜愛的</rt></ruby><ruby><span class='adv'>甚</span><rt>很</rt></ruby><ruby><span class='verb'>蕃</span><rt>多</rt></ruby>。" },
            { original: "予獨愛蓮之出淤泥而不染，濯清漣而不妖。", svo: "<span class='subj'>予</span><span class='adv'>獨</span><span class='verb'>愛</span><span class='obj'>蓮</span>之<span class='verb'>出</span><span class='obj'>淤泥</span>而<span class='adv'>不</span><span class='verb'>染</span>，<span class='verb'>濯</span><span class='obj'>清漣</span>而<span class='adv'>不</span><span class='verb'>妖</span>。", svo_trans: "<ruby><span class='subj'>予</span><rt>我</rt></ruby><ruby><span class='adv'>獨</span><rt>唯獨</rt></ruby><ruby><span class='verb'>愛</span><rt>喜愛</rt></ruby><ruby><span class='obj'>蓮</span><rt>蓮花</rt></ruby>之<ruby><span class='verb'>出</span><rt>生長出</rt></ruby><ruby><span class='obj'>淤泥</span><rt>污泥</rt></ruby>而<ruby><span class='adv'>不</span><rt>不被</rt></ruby><ruby><span class='verb'>染</span><rt>污染</rt></ruby>，在清水裡洗滌過卻不顯得妖媚。" },
            { original: "中通外直，不蔓不枝，香遠益清，亭亭淨植，可遠觀而不可褻玩焉。", svo: "<span class='adv'>中</span><span class='verb'>通</span><span class='adv'>外</span><span class='verb'>直</span>，<span class='adv'>不</span><span class='verb'>蔓</span><span class='adv'>不</span><span class='verb'>枝</span>，<span class='subj'>香</span><span class='adv'>遠</span><span class='adv'>益</span><span class='verb'>清</span>，<span class='adv'>亭亭淨</span><span class='verb'>植</span>，<span class='adv'>可遠</span><span class='verb'>觀</span>而<span class='adv'>不可</span><span class='verb'>褻玩</span>焉。", svo_trans: "它中心貫通、外表筆直，不生枝蔓、不長枝節，香氣越遠越清香，筆挺潔淨地立在那裡，只可以從遠處觀賞，卻不能貼近去輕慢地玩弄啊。" },
            { original: "蓮，花之君子者也。", svo: "<span class='subj'>蓮</span>，<span class='attr'>花之君子</span><span class='obj'>者</span>也。", svo_trans: "<ruby><span class='subj'>蓮</span><rt>蓮花</rt></ruby>，是<ruby><span class='attr'>花之君子</span><span class='obj'>者</span><rt>花中的君子</rt></ruby>啊。" }
        ]
    },
    maiyouweng: {
        title: "賣油翁",
        level: 2,
        sentences: [
            { original: "陳康肅公善射，當世無雙，公亦以此自矜。", svo: "<span class='subj'>陳康肅公</span><span class='verb'>善</span><span class='obj'>射</span>，<span class='adv'>當世</span><span class='verb'>無雙</span>，<span class='subj'>公</span><span class='adv'>亦以此</span><span class='verb'>自矜</span>。", svo_trans: "<ruby><span class='subj'>陳康肅公</span><rt>陳康肅公</rt></ruby><ruby><span class='verb'>善</span><rt>擅長</rt></ruby><ruby><span class='obj'>射</span><rt>射箭</rt></ruby>，<ruby><span class='adv'>當世</span><rt>在當時</rt></ruby><ruby><span class='verb'>無雙</span><rt>沒有人能比</rt></ruby>，<ruby><span class='subj'>公</span><rt>他</rt></ruby><ruby><span class='adv'>亦以此</span><rt>也憑藉這點</rt></ruby><ruby><span class='verb'>自矜</span><rt>自我誇耀</rt></ruby>。" },
            { original: "有賣油翁釋擔而立，睨之久而不去。", svo: "<span class='verb'>有</span><span class='subj'>賣油翁</span><span class='verb'>釋</span><span class='obj'>擔</span>而<span class='verb'>立</span>，<span class='verb'>睨</span><span class='obj'>之</span><span class='adv'>久</span>而<span class='adv'>不</span><span class='verb'>去</span>。", svo_trans: "<ruby><span class='verb'>有</span><rt>有個</rt></ruby><ruby><span class='subj'>賣油翁</span><rt>賣油的老翁</rt></ruby><ruby><span class='verb'>釋</span><rt>放下</rt></ruby><ruby><span class='obj'>擔</span><rt>擔子</rt></ruby>而<ruby><span class='verb'>立</span><rt>站著</rt></ruby>，<ruby><span class='verb'>睨</span><rt>斜著眼看</rt></ruby><ruby><span class='obj'>之</span><rt>他射箭</rt></ruby><ruby><span class='adv'>久</span><rt>很久</rt></ruby>而<ruby><span class='adv'>不</span><rt>沒有</rt></ruby><ruby><span class='verb'>去</span><rt>離開</rt></ruby>。" },
            { original: "翁曰：「無他，但手熟爾。」", svo: "<span class='subj'>翁</span><span class='verb'>曰</span>：「<span class='verb'>無</span><span class='obj'>他</span>，<span class='adv'>但</span><span class='subj'>手</span><span class='verb'>熟</span>爾。」", svo_trans: "<ruby><span class='subj'>翁</span><rt>老翁</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>他</span><rt>別的奧妙</rt></ruby>，<ruby><span class='adv'>但</span><rt>只是</rt></ruby><ruby><span class='subj'>手</span><rt>手法</rt></ruby><ruby><span class='verb'>熟</span><rt>熟練</rt></ruby>罷了。」" },
            { original: "乃取一葫蘆置於地，以錢覆其口，徐以杓酌油瀝之，自錢孔入，而錢不濕。", svo: "乃<span class='verb'>取</span><span class='attr'>一</span><span class='obj'>葫蘆</span><span class='verb'>置</span><span class='adv'>於地</span>，<span class='adv'>以錢</span><span class='verb'>覆</span><span class='attr'>其</span><span class='obj'>口</span>，<span class='adv'>徐以杓</span><span class='verb'>酌</span><span class='obj'>油</span><span class='verb'>瀝</span><span class='obj'>之</span>，<span class='adv'>自錢孔</span><span class='verb'>入</span>，而<span class='subj'>錢</span><span class='adv'>不</span><span class='verb'>濕</span>。", svo_trans: "於是他拿出一個葫蘆放在地上，用一枚銅錢蓋住葫蘆口，慢慢地用勺子舀油滴入葫蘆，油從銅錢的方孔注進去，可是銅錢卻沒有被弄濕。" }
        ]
    },
    shangzhongyong: {
        title: "傷仲永",
        level: 2,
        sentences: [
            { original: "金溪民方仲永，世隸耕。", svo: "<span class='attr'>金溪民</span><span class='subj'>方仲永</span>，<span class='subj'>世</span><span class='verb'>隸</span><span class='obj'>耕</span>。", svo_trans: "<ruby><span class='attr'>金溪民</span><rt>金溪縣的平民</rt></ruby><ruby><span class='subj'>方仲永</span><rt>方仲永</rt></ruby>，<ruby><span class='subj'>世</span><rt>世代</rt></ruby><ruby><span class='verb'>隸</span><rt>屬於</rt></ruby><ruby><span class='obj'>耕</span><rt>農耕階層</rt></ruby>。" },
            { original: "仲永生五年，未嘗識書具，忽啼求之。", svo: "<span class='subj'>仲永</span><span class='verb'>生</span><span class='attr'>五</span><span class='obj'>年</span>，<span class='adv'>未嘗</span><span class='verb'>識</span><span class='obj'>書具</span>，<span class='adv'>忽</span><span class='verb'>啼求</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='subj'>仲永</span><rt>仲永</rt></ruby><ruby><span class='verb'>生</span><rt>長到</rt></ruby><ruby><span class='attr'>五</span><span class='obj'>年</span><rt>五歲</rt></ruby>，<ruby><span class='adv'>未嘗</span><rt>還不曾</rt></ruby><ruby><span class='verb'>識</span><rt>認識</rt></ruby><ruby><span class='obj'>書具</span><rt>書寫工具</rt></ruby>，<ruby><span class='adv'>忽</span><rt>忽然</rt></ruby><ruby><span class='verb'>啼求</span><rt>哭著要</rt></ruby><ruby><span class='obj'>之</span><rt>這些東西</rt></ruby>。" },
            { original: "父異焉，借旁近與之，即書詩四句，並自為其名。", svo: "<span class='subj'>父</span><span class='verb'>異</span>焉，<span class='verb'>借</span><span class='obj'>旁近</span><span class='verb'>與</span><span class='obj'>之</span>，<span class='adv'>即</span><span class='verb'>書</span><span class='attr'>詩四</span><span class='obj'>句</span>，並<span class='adv'>自</span><span class='verb'>為</span><span class='attr'>其</span><span class='obj'>名</span>。", svo_trans: "<ruby><span class='subj'>父</span><rt>父親</rt></ruby><ruby><span class='verb'>異</span><rt>感到詫異</rt></ruby>，<ruby><span class='verb'>借</span><rt>借了</rt></ruby><ruby><span class='obj'>旁近</span><rt>鄰居的</rt></ruby><ruby><span class='verb'>與</span><rt>給</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby>，他<ruby><span class='adv'>即</span><rt>立刻</rt></ruby><ruby><span class='verb'>書</span><rt>寫下</rt></ruby><ruby><span class='attr'>詩四</span><span class='obj'>句</span><rt>四句詩</rt></ruby>，並<ruby><span class='adv'>自</span><rt>自己</rt></ruby><ruby><span class='verb'>為</span><rt>題上</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>名</span><rt>他的名字</rt></ruby>。" }
        ]
    },
    // 由於代碼長度限制，第三階段和第四階段的完整篇目將在後續補充
    // 以下是篇目結構概覽，實際使用時請確保所有篇目完整
    
    // 第三階段（中一至中三）：qibu, siduan, xunjubo, guanninghuaxin, yanshi, yuefei, zhuzijiaxun, ciwuyeti 等
    // 第四階段（中四至中六）：lunren, yueyanglouji, liuguolun, niannujiao, shengshengman, qingyuan, sikuaiyu, chenzuidongfeng, yangxiu, maiganzheyan, manjingyouji, zuozhongyi, guiqulaici 等
        // ==================== 第三學習階段（中一至中三）====================
    qibu: {
        title: "七步詩",
        author: "曹植",
        level: 3,
        sentences: [
            {
                original: "煮豆燃豆萁，豆在釜中泣。",
                svo: "<span class='verb'>煮</span><span class='obj'>豆</span><span class='verb'>燃</span><span class='obj'>豆萁</span>，<span class='subj'>豆</span><span class='adv'>在釜中</span><span class='verb'>泣</span>。",
                svo_trans: "<ruby><span class='verb'>煮</span><rt>熬煮</rt></ruby><ruby><span class='obj'>豆</span><rt>豆子</rt></ruby><ruby><span class='verb'>燃</span><rt>燃燒</rt></ruby><ruby><span class='obj'>豆萁</span><rt>豆莖</rt></ruby>，<ruby><span class='subj'>豆</span><rt>豆子</rt></ruby><ruby><span class='adv'>在釜中</span><rt>在鍋裡</rt></ruby><ruby><span class='verb'>泣</span><rt>哭泣</rt></ruby>。"
            },
            {
                original: "本是同根生，相煎何太急。",
                svo: "<span class='subj'>本</span><span class='verb'>是</span><span class='attr'>同根</span><span class='obj'>生</span>，<span class='adv'>相</span><span class='verb'>煎</span><span class='adv'>何太急</span>。",
                svo_trans: "<ruby><span class='subj'>本</span><rt>本來</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='attr'>同根</span><rt>同一個根</rt></ruby><ruby><span class='obj'>生</span><rt>生長出來的</rt></ruby>，<ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>煎</span><rt>煎熬逼迫</rt></ruby><ruby><span class='adv'>何太急</span><rt>為何這麼急迫</rt></ruby>。"
            }
        ]
    },
    siduan: {
        title: "論四端",
        author: "孟子",
        level: 3,
        sentences: [
            {
                original: "人皆有惻隱之心，羞惡之心，辭讓之心，是非之心。",
                svo: "<span class='subj'>人</span><span class='adv'>皆</span><span class='verb'>有</span><span class='obj'>惻隱之心</span>，<span class='obj'>羞惡之心</span>，<span class='obj'>辭讓之心</span>，<span class='obj'>是非之心</span>。",
                svo_trans: "<ruby><span class='subj'>人</span><rt>人類</rt></ruby><ruby><span class='adv'>皆</span><rt>都</rt></ruby><ruby><span class='verb'>有</span><rt>具有</rt></ruby><ruby><span class='obj'>惻隱之心</span><rt>同情憐憫的心</rt></ruby>，<ruby><span class='obj'>羞惡之心</span><rt>羞恥厭惡的心</rt></ruby>，<ruby><span class='obj'>辭讓之心</span><rt>推辭謙讓的心</rt></ruby>，<ruby><span class='obj'>是非之心</span><rt>分辨是非的心</rt></ruby>。"
            },
            {
                original: "惻隱之心，仁之端也；羞惡之心，義之端也；",
                svo: "<span class='subj'>惻隱之心</span>，<span class='attr'>仁之</span><span class='obj'>端</span>也；<span class='subj'>羞惡之心</span>，<span class='attr'>義之</span><span class='obj'>端</span>也；",
                svo_trans: "<ruby><span class='subj'>惻隱之心</span><rt>同情憐憫的心</rt></ruby>，是<ruby><span class='attr'>仁之</span><rt>仁德的</rt></ruby><ruby><span class='obj'>端</span><rt>開端</rt></ruby>也；<ruby><span class='subj'>羞惡之心</span><rt>羞恥厭惡的心</rt></ruby>，是<ruby><span class='attr'>義之</span><rt>義行的</rt></ruby><ruby><span class='obj'>端</span><rt>開端</rt></ruby>也；"
            },
            {
                original: "辭讓之心，禮之端也；是非之心，智之端也。",
                svo: "<span class='subj'>辭讓之心</span>，<span class='attr'>禮之</span><span class='obj'>端</span>也；<span class='subj'>是非之心</span>，<span class='attr'>智之</span><span class='obj'>端</span>也。",
                svo_trans: "<ruby><span class='subj'>辭讓之心</span><rt>推辭謙讓的心</rt></ruby>，是<ruby><span class='attr'>禮之</span><rt>禮節的</rt></ruby><ruby><span class='obj'>端</span><rt>開端</rt></ruby>也；<ruby><span class='subj'>是非之心</span><rt>分辨是非的心</rt></ruby>，是<ruby><span class='attr'>智之</span><rt>智慧的</rt></ruby><ruby><span class='obj'>端</span><rt>開端</rt></ruby>也。"
            },
            {
                original: "人之有四端也，猶其有四體也。",
                svo: "<span class='subj'>人</span>之<span class='verb'>有</span><span class='obj'>四端</span>也，<span class='adv'>猶</span><span class='attr'>其</span><span class='verb'>有</span><span class='obj'>四體</span>也。",
                svo_trans: "<ruby><span class='subj'>人</span><rt>人</rt></ruby>之<ruby><span class='verb'>有</span><rt>具有</rt></ruby>這<ruby><span class='obj'>四端</span><rt>四種發端</rt></ruby>也，<ruby><span class='adv'>猶</span><rt>就好像</rt></ruby><ruby><span class='attr'>其</span><rt>他</rt></ruby><ruby><span class='verb'>有</span><rt>具有</rt></ruby><ruby><span class='obj'>四體</span><rt>四肢骨幹</rt></ruby>一樣也。"
            }
        ]
    },
    xunjubo: {
        title: "荀巨伯遠看友人疾",
        author: "劉義慶",
        level: 3,
        sentences: [
            {
                original: "荀巨伯遠看友人疾，值胡賊攻郡。",
                svo: "<span class='subj'>荀巨伯</span><span class='adv'>遠</span><span class='verb'>看</span><span class='attr'>友人</span><span class='obj'>疾</span>，<span class='verb'>值</span><span class='subj'>胡賊</span><span class='verb'>攻</span><span class='obj'>郡</span>。",
                svo_trans: "<ruby><span class='subj'>荀巨伯</span><rt>荀巨伯</rt></ruby><ruby><span class='adv'>遠</span><rt>大老遠去</rt></ruby><ruby><span class='verb'>看</span><rt>探望</rt></ruby><ruby><span class='attr'>友人</span><rt>朋友的</rt></ruby><ruby><span class='obj'>疾</span><rt>病情</rt></ruby>，<ruby><span class='verb'>值</span><rt>剛好遇到</rt></ruby><ruby><span class='subj'>胡賊</span><rt>胡人的軍隊</rt></ruby><ruby><span class='verb'>攻</span><rt>攻打</rt></ruby><ruby><span class='obj'>郡</span><rt>這座郡城</rt></ruby>。"
            },
            {
                original: "友人語巨伯曰：「吾今死矣，子可去！」",
                svo: "<span class='subj'>友人</span><span class='verb'>語</span><span class='obj'>巨伯</span><span class='verb'>曰</span>：「<span class='subj'>吾</span><span class='adv'>今</span><span class='verb'>死</span>矣，<span class='subj'>子</span><span class='adv'>可</span><span class='verb'>去</span>！」",
                svo_trans: "<ruby><span class='subj'>友人</span><rt>朋友</rt></ruby><ruby><span class='verb'>語</span><rt>告訴</rt></ruby><ruby><span class='obj'>巨伯</span><rt>荀巨伯</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>吾</span><rt>我</rt></ruby><ruby><span class='adv'>今</span><rt>今天</rt></ruby><ruby><span class='verb'>死</span><rt>死定了</rt></ruby>，<ruby><span class='subj'>子</span><rt>你</rt></ruby><ruby><span class='adv'>可</span><rt>趕快</rt></ruby><ruby><span class='verb'>去</span><rt>離開吧</rt></ruby>！」"
            },
            {
                original: "巨伯曰：「敗義以求生，豈荀巨伯所行邪？」",
                svo: "<span class='subj'>巨伯</span><span class='verb'>曰</span>：「<span class='verb'>敗</span><span class='obj'>義</span><span class='adv'>以</span><span class='verb'>求生</span>，<span class='adv'>豈</span><span class='attr'>荀巨伯所行</span><span class='obj'>邪</span>？」",
                svo_trans: "<ruby><span class='subj'>巨伯</span><rt>巨伯</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='verb'>敗</span><rt>毀壞</rt></ruby><ruby><span class='obj'>義</span><rt>道義</rt></ruby><ruby><span class='adv'>以</span><rt>來</rt></ruby><ruby><span class='verb'>求生</span><rt>苟且偷生</rt></ruby>，<ruby><span class='adv'>豈</span><rt>難道是</rt></ruby><ruby><span class='attr'>荀巨伯所行</span><span class='obj'>邪</span><rt>我荀巨伯會做的事嗎</rt></ruby>？」"
            }
        ]
    },
    guanninghuaxin: {
        title: "管寧割席",
        author: "劉義慶",
        level: 3,
        sentences: [
            {
                original: "管寧、華歆共園中鋤菜，見地有片金。",
                svo: "<span class='subj'>管寧、華歆</span><span class='adv'>共園中</span><span class='verb'>鋤</span><span class='obj'>菜</span>，<span class='verb'>見</span><span class='adv'>地</span><span class='verb'>有</span><span class='attr'>片</span><span class='obj'>金</span>。",
                svo_trans: "<ruby><span class='subj'>管寧、華歆</span><rt>管寧和華歆</rt></ruby><ruby><span class='adv'>共園中</span><rt>一起在菜園裡</rt></ruby><ruby><span class='verb'>鋤</span><rt>鋤草</rt></ruby><ruby><span class='obj'>菜</span><rt>種菜</rt></ruby>，<ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='adv'>地</span><rt>地上</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>片</span><span class='obj'>金</span><rt>一塊金子</rt></ruby>。"
            },
            {
                original: "管揮鋤與瓦石不異，華捉而擲去之。",
                svo: "<span class='subj'>管</span><span class='verb'>揮</span><span class='obj'>鋤</span><span class='adv'>與瓦石不異</span>，<span class='subj'>華</span><span class='verb'>捉</span>而<span class='verb'>擲去</span><span class='obj'>之</span>。",
                svo_trans: "<ruby><span class='subj'>管</span><rt>管寧</rt></ruby><ruby><span class='verb'>揮</span><rt>揮動</rt></ruby><ruby><span class='obj'>鋤</span><rt>鋤頭</rt></ruby><ruby><span class='adv'>與瓦石不異</span><rt>把它視同瓦片石頭一樣</rt></ruby>，<ruby><span class='subj'>華</span><rt>華歆</rt></ruby><ruby><span class='verb'>捉</span><rt>撿起來</rt></ruby>而<ruby><span class='verb'>擲去</span><rt>又扔掉</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。"
            },
            {
                original: "又嘗同席讀書，有乘軒冕過門者。",
                svo: "<span class='adv'>又嘗</span><span class='adv'>同席</span><span class='verb'>讀</span><span class='obj'>書</span>，<span class='verb'>有</span><span class='verb'>乘</span><span class='obj'>軒冕</span><span class='verb'>過</span><span class='obj'>門者</span>。",
                svo_trans: "<ruby><span class='adv'>又嘗</span><rt>又有一次</rt></ruby><ruby><span class='adv'>同席</span><rt>兩人同坐一張席子</rt></ruby><ruby><span class='verb'>讀</span><rt>讀</rt></ruby><ruby><span class='obj'>書</span><rt>書</rt></ruby>，<ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='verb'>乘</span><rt>坐著</rt></ruby><ruby><span class='obj'>軒冕</span><rt>華貴馬車的達官貴人</rt></ruby><ruby><span class='verb'>過</span><rt>經過</rt></ruby><ruby><span class='obj'>門者</span><rt>門前</rt></ruby>。"
            },
            {
                original: "寧讀如故，歆廢書出看。",
                svo: "<span class='subj'>寧</span><span class='verb'>讀</span><span class='adv'>如故</span>，<span class='subj'>歆</span><span class='verb'>廢</span><span class='obj'>書</span><span class='verb'>出看</span>。",
                svo_trans: "<ruby><span class='subj'>寧</span><rt>管寧</rt></ruby><ruby><span class='verb'>讀</span><rt>讀書</rt></ruby><ruby><span class='adv'>如故</span><rt>像原來一樣專心</rt></ruby>，<ruby><span class='subj'>歆</span><rt>華歆</rt></ruby><ruby><span class='verb'>廢</span><rt>放下</rt></ruby><ruby><span class='obj'>書</span><rt>書本</rt></ruby><ruby><span class='verb'>出看</span><rt>跑出去看</rt></ruby>。"
            },
            {
                original: "寧割席分坐，曰：「子非吾友也。」",
                svo: "<span class='subj'>寧</span><span class='verb'>割</span><span class='obj'>席</span><span class='verb'>分坐</span>，<span class='verb'>曰</span>：「<span class='subj'>子</span><span class='verb'>非</span><span class='obj'>吾友</span>也。」",
                svo_trans: "<ruby><span class='subj'>寧</span><rt>管寧</rt></ruby><ruby><span class='verb'>割</span><rt>割開</rt></ruby><ruby><span class='obj'>席</span><rt>席子</rt></ruby><ruby><span class='verb'>分坐</span><rt>分開坐</rt></ruby>，<ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>子</span><rt>你</rt></ruby><ruby><span class='verb'>非</span><rt>不再是</rt></ruby><ruby><span class='obj'>吾友</span><rt>我的朋友了</rt></ruby>。」"
            }
        ]
    },
    ciwuyeti: {
        title: "慈烏夜啼",
        author: "白居易",
        level: 3,
        sentences: [
            {
                original: "慈烏失其母，啞啞吐哀音。",
                svo: "<span class='subj'>慈烏</span><span class='verb'>失</span><span class='attr'>其</span><span class='obj'>母</span>，<span class='adv'>啞啞</span><span class='verb'>吐</span><span class='attr'>哀</span><span class='obj'>音</span>。",
                svo_trans: "<ruby><span class='subj'>慈烏</span><rt>慈烏</rt></ruby><ruby><span class='verb'>失</span><rt>失去了</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>母</span><rt>牠的母親</rt></ruby>，<ruby><span class='adv'>啞啞</span><rt>發出啞啞的聲音</rt></ruby><ruby><span class='verb'>吐</span><rt>吐露</rt></ruby><ruby><span class='attr'>哀</span><span class='obj'>音</span><rt>悲哀的鳴叫聲</rt></ruby>。"
            },
            {
                original: "晝夜不飛去，經年守故林。",
                svo: "<span class='adv'>晝夜</span><span class='adv'>不</span><span class='verb'>飛去</span>，<span class='adv'>經年</span><span class='verb'>守</span><span class='obj'>故林</span>。",
                svo_trans: "<ruby><span class='adv'>晝夜</span><rt>日日夜夜</rt></ruby><ruby><span class='adv'>不</span><rt>都不肯</rt></ruby><ruby><span class='verb'>飛去</span><rt>飛離</rt></ruby>，<ruby><span class='adv'>經年</span><rt>長年累月地</rt></ruby><ruby><span class='verb'>守</span><rt>守候著</rt></ruby><ruby><span class='obj'>故林</span><rt>舊時的樹林</rt></ruby>。"
            },
            {
                original: "聲中如告訴，未盡反哺心。",
                svo: "<span class='adv'>聲中</span><span class='verb'>如告訴</span>，<span class='adv'>未</span><span class='verb'>盡</span><span class='attr'>反哺</span><span class='obj'>心</span>。",
                svo_trans: "<ruby><span class='adv'>聲中</span><rt>叫聲之中</rt></ruby><ruby><span class='verb'>如告訴</span><rt>彷彿在訴說</rt></ruby>，<ruby><span class='adv'>未</span><rt>還沒能</rt></ruby><ruby><span class='verb'>盡</span><rt>盡到</rt></ruby><ruby><span class='attr'>反哺</span><span class='obj'>心</span><rt>奉養母親的心意</rt></ruby>。"
            }
        ]
    },
    yanshi: {
        title: "燕詩",
        author: "白居易",
        level: 3,
        sentences: [
            {
                original: "樑上有雙燕，翩翩雄與雌。",
                svo: "<span class='adv'>樑上</span><span class='verb'>有</span><span class='attr'>雙</span><span class='subj'>燕</span>，<span class='adv'>翩翩</span><span class='subj'>雄與雌</span>。",
                svo_trans: "<ruby><span class='adv'>樑上</span><rt>屋樑上</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>雙</span><span class='subj'>燕</span><rt>兩隻燕子</rt></ruby>，<ruby><span class='adv'>翩翩</span><rt>翩翩飛舞著</rt></ruby>一<ruby><span class='subj'>雄與雌</span><rt>公和一母</rt></ruby>。"
            },
            {
                original: "銜泥兩椽間，一巢生四兒。",
                svo: "<span class='verb'>銜</span><span class='obj'>泥</span><span class='adv'>兩椽間</span>，<span class='attr'>一</span><span class='subj'>巢</span><span class='verb'>生</span><span class='attr'>四</span><span class='obj'>兒</span>。",
                svo_trans: "<ruby><span class='verb'>銜</span><rt>銜著</rt></ruby><ruby><span class='obj'>泥</span><rt>泥土</rt></ruby><ruby><span class='adv'>兩椽間</span><rt>在兩根屋椽之間</rt></ruby>，<ruby><span class='attr'>一</span><span class='subj'>巢</span><rt>一個巢</rt></ruby><ruby><span class='verb'>生</span><rt>生下</rt></ruby><ruby><span class='attr'>四</span><span class='obj'>兒</span><rt>四隻小燕子</rt></ruby>。"
            },
            {
                original: "四兒日夜長，索食聲孜孜。",
                svo: "<span class='subj'>四兒</span><span class='adv'>日夜</span><span class='verb'>長</span>，<span class='verb'>索</span><span class='obj'>食</span><span class='subj'>聲</span><span class='adv'>孜孜</span>。",
                svo_trans: "<ruby><span class='subj'>四兒</span><rt>四隻小燕子</rt></ruby><ruby><span class='adv'>日夜</span><rt>日夜</rt></ruby><ruby><span class='verb'>長</span><rt>長大</rt></ruby>，<ruby><span class='verb'>索</span><rt>索求</rt></ruby><ruby><span class='obj'>食</span><rt>食物的</rt></ruby><ruby><span class='subj'>聲</span><rt>叫聲</rt></ruby><ruby><span class='adv'>孜孜</span><rt>不停不歇</rt></ruby>。"
            },
            {
                original: "青蟲不易捕，黃口無飽期。",
                svo: "<span class='subj'>青蟲</span><span class='adv'>不易</span><span class='verb'>捕</span>，<span class='subj'>黃口</span><span class='adv'>無</span><span class='obj'>飽期</span>。",
                svo_trans: "<ruby><span class='subj'>青蟲</span><rt>青色的蟲子</rt></ruby><ruby><span class='adv'>不易</span><rt>不容易</rt></ruby><ruby><span class='verb'>捕</span><rt>捕捉</rt></ruby>，<ruby><span class='subj'>黃口</span><rt>雛鳥</rt></ruby><ruby><span class='adv'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>飽期</span><rt>吃飽的時候</rt></ruby>。"
            },
            {
                original: "嘴爪雖欲弊，心力不知疲。",
                svo: "<span class='subj'>嘴爪</span><span class='adv'>雖欲</span><span class='verb'>弊</span>，<span class='subj'>心力</span><span class='adv'>不知</span><span class='verb'>疲</span>。",
                svo_trans: "<ruby><span class='subj'>嘴爪</span><rt>嘴和爪子</rt></ruby><ruby><span class='adv'>雖欲</span><rt>雖然快要</rt></ruby><ruby><span class='verb'>弊</span><rt>磨損</rt></ruby>，<ruby><span class='subj'>心力</span><rt>心和力氣</rt></ruby><ruby><span class='adv'>不知</span><rt>不知道</rt></ruby><ruby><span class='verb'>疲</span><rt>疲倦</rt></ruby>。"
            },
            {
                original: "須臾十來往，猶恐巢中饑。",
                svo: "<span class='adv'>須臾</span><span class='attr'>十來</span><span class='verb'>往</span>，<span class='adv'>猶</span><span class='verb'>恐</span><span class='adv'>巢中</span><span class='obj'>饑</span>。",
                svo_trans: "<ruby><span class='adv'>須臾</span><rt>片刻之間</rt></ruby><ruby><span class='attr'>十來</span><rt>十多次</rt></ruby><ruby><span class='verb'>往</span><rt>來回</rt></ruby>，<ruby><span class='adv'>猶</span><rt>仍然</rt></ruby><ruby><span class='verb'>恐</span><rt>擔心</rt></ruby><ruby><span class='adv'>巢中</span><rt>巢裡的</rt></ruby><ruby><span class='obj'>饑</span><rt>小燕挨餓</rt></ruby>。"
            },
            {
                original: "辛勤三十日，母瘦雛漸肥。",
                svo: "<span class='adv'>辛勤</span><span class='attr'>三十</span><span class='obj'>日</span>，<span class='subj'>母</span><span class='verb'>瘦</span><span class='subj'>雛</span><span class='adv'>漸</span><span class='verb'>肥</span>。",
                svo_trans: "<ruby><span class='adv'>辛勤</span><rt>辛勤地</rt></ruby><ruby><span class='attr'>三十</span><span class='obj'>日</span><rt>三十天</rt></ruby>，<ruby><span class='subj'>母</span><rt>母燕</rt></ruby><ruby><span class='verb'>瘦</span><rt>消瘦了</rt></ruby>，<ruby><span class='subj'>雛</span><rt>小燕子</rt></ruby><ruby><span class='adv'>漸</span><rt>漸漸</rt></ruby><ruby><span class='verb'>肥</span><rt>長胖了</rt></ruby>。"
            },
            {
                original: "喃喃教言語，一一刷毛衣。",
                svo: "<span class='adv'>喃喃</span><span class='verb'>教</span><span class='obj'>言語</span>，<span class='adv'>一一</span><span class='verb'>刷</span><span class='obj'>毛衣</span>。",
                svo_trans: "<ruby><span class='adv'>喃喃</span><rt>喃喃地</rt></ruby><ruby><span class='verb'>教</span><rt>教導</rt></ruby><ruby><span class='obj'>言語</span><rt>說話</rt></ruby>，<ruby><span class='adv'>一一</span><rt>一一地</rt></ruby><ruby><span class='verb'>刷</span><rt>梳理</rt></ruby><ruby><span class='obj'>毛衣</span><rt>羽毛</rt></ruby>。"
            },
            {
                original: "一旦羽翼成，引上庭樹枝。",
                svo: "<span class='adv'>一旦</span><span class='subj'>羽翼</span><span class='verb'>成</span>，<span class='verb'>引</span><span class='adv'>上</span><span class='attr'>庭樹</span><span class='obj'>枝</span>。",
                svo_trans: "<ruby><span class='adv'>一旦</span><rt>有一天</rt></ruby><ruby><span class='subj'>羽翼</span><rt>翅膀</rt></ruby><ruby><span class='verb'>成</span><rt>長成了</rt></ruby>，<ruby><span class='verb'>引</span><rt>帶領</rt></ruby><ruby><span class='adv'>上</span><rt>飛上</rt></ruby><ruby><span class='attr'>庭樹</span><span class='obj'>枝</span><rt>庭院的樹枝</rt></ruby>。"
            },
            {
                original: "舉翅不回顧，隨風四散飛。",
                svo: "<span class='verb'>舉</span><span class='obj'>翅</span><span class='adv'>不</span><span class='verb'>回顧</span>，<span class='adv'>隨風</span><span class='adv'>四散</span><span class='verb'>飛</span>。",
                svo_trans: "<ruby><span class='verb'>舉</span><rt>展開</rt></ruby><ruby><span class='obj'>翅</span><rt>翅膀</rt></ruby><ruby><span class='adv'>不</span><rt>不再</rt></ruby><ruby><span class='verb'>回顧</span><rt>回頭看</rt></ruby>，<ruby><span class='adv'>隨風</span><rt>乘著風</rt></ruby><ruby><span class='adv'>四散</span><rt>四散地</rt></ruby><ruby><span class='verb'>飛</span><rt>飛走了</rt></ruby>。"
            },
            {
                original: "雌雄空中鳴，聲盡呼不歸。",
                svo: "<span class='subj'>雌雄</span><span class='adv'>空中</span><span class='verb'>鳴</span>，<span class='subj'>聲</span><span class='verb'>盡</span><span class='verb'>呼</span><span class='adv'>不</span><span class='verb'>歸</span>。",
                svo_trans: "<ruby><span class='subj'>雌雄</span><rt>公燕母燕</rt></ruby><ruby><span class='adv'>空中</span><rt>在空中</rt></ruby><ruby><span class='verb'>鳴</span><rt>鳴叫</rt></ruby>，<ruby><span class='subj'>聲</span><rt>聲音</rt></ruby><ruby><span class='verb'>盡</span><rt>都喊啞了</rt></ruby><ruby><span class='verb'>呼</span><rt>呼喚</rt></ruby><ruby><span class='adv'>不</span><rt>也不</rt></ruby><ruby><span class='verb'>歸</span><rt>回來</rt></ruby>。"
            },
            {
                original: "卻入空巢裡，啁啾終夜悲。",
                svo: "<span class='adv'>卻</span><span class='verb'>入</span><span class='attr'>空</span><span class='obj'>巢</span><span class='adv'>裡</span>，<span class='adv'>啁啾</span><span class='adv'>終夜</span><span class='verb'>悲</span>。",
                svo_trans: "<ruby><span class='adv'>卻</span><rt>於是</rt></ruby><ruby><span class='verb'>入</span><rt>回到</rt></ruby><ruby><span class='attr'>空</span><span class='obj'>巢</span><span class='adv'>裡</span><rt>空巢裡</rt></ruby>，<ruby><span class='adv'>啁啾</span><rt>啾啾地</rt></ruby><ruby><span class='adv'>終夜</span><rt>整夜</rt></ruby><ruby><span class='verb'>悲</span><rt>悲哀地叫著</rt></ruby>。"
            },
            {
                original: "燕燕爾勿悲，爾當返自思。",
                svo: "<span class='subj'>燕燕</span><span class='subj'>爾</span><span class='adv'>勿</span><span class='verb'>悲</span>，<span class='subj'>爾</span><span class='adv'>當</span><span class='verb'>返自思</span>。",
                svo_trans: "<ruby><span class='subj'>燕燕</span><span class='subj'>爾</span><rt>燕子啊燕子</rt></ruby><ruby><span class='adv'>勿</span><rt>不要</rt></ruby><ruby><span class='verb'>悲</span><rt>悲傷</rt></ruby>，<ruby><span class='subj'>爾</span><rt>你們</rt></ruby><ruby><span class='adv'>當</span><rt>應該</rt></ruby><ruby><span class='verb'>返自思</span><rt>回過頭來自己想想</rt></ruby>。"
            },
            {
                original: "思爾為雛日，高飛背母時。",
                svo: "<span class='verb'>思</span><span class='subj'>爾</span><span class='verb'>為</span><span class='obj'>雛</span><span class='adv'>日</span>，<span class='adv'>高飛</span><span class='verb'>背</span><span class='obj'>母</span><span class='adv'>時</span>。",
                svo_trans: "<ruby><span class='verb'>思</span><rt>回想</rt></ruby><ruby><span class='subj'>爾</span><rt>你們</rt></ruby><ruby><span class='verb'>為</span><rt>作為</rt></ruby><ruby><span class='obj'>雛</span><rt>幼鳥的</rt></ruby><ruby><span class='adv'>日</span><rt>日子</rt></ruby>，以及<ruby><span class='adv'>高飛</span><rt>展翅高飛</rt></ruby><ruby><span class='verb'>背</span><rt>背棄</rt></ruby><ruby><span class='obj'>母</span><rt>母親的</rt></ruby><ruby><span class='adv'>時</span><rt>時候</rt></ruby>。"
            },
            {
                original: "當時父母念，今日爾應知。",
                svo: "<span class='adv'>當時</span><span class='subj'>父母</span><span class='verb'>念</span>，<span class='adv'>今日</span><span class='subj'>爾</span><span class='adv'>應</span><span class='verb'>知</span>。",
                svo_trans: "<ruby><span class='adv'>當時</span><rt>那時候</rt></ruby><ruby><span class='subj'>父母</span><rt>父母的</rt></ruby><ruby><span class='verb'>念</span><rt>掛念</rt></ruby>，<ruby><span class='adv'>今日</span><rt>到了今天</rt></ruby><ruby><span class='subj'>爾</span><rt>你們</rt></ruby><ruby><span class='adv'>應</span><rt>應該</rt></ruby><ruby><span class='verb'>知</span><rt>懂得了</rt></ruby>。"
            }
        ]
    },
    yuefei: {
        title: "岳飛之少年時代",
        author: "佚名",
        level: 3,
        sentences: [
            {
                original: "岳飛，字鵬舉，相州湯陰人也。生時，有大禽若鵠，飛鳴室上，因以為名。",
                svo: "<span class='subj'>岳飛</span>，<span class='verb'>字</span><span class='obj'>鵬舉</span>，<span class='attr'>相州湯陰</span><span class='obj'>人也</span>。<span class='adv'>生時</span>，<span class='verb'>有</span><span class='attr'>大禽若鵠</span>，<span class='verb'>飛鳴</span><span class='adv'>室上</span>，<span class='adv'>因以</span><span class='verb'>為</span><span class='obj'>名</span>。",
                svo_trans: "<ruby><span class='subj'>岳飛</span><rt>岳飛</rt></ruby>，<ruby><span class='verb'>字</span><rt>表字</rt></ruby><ruby><span class='obj'>鵬舉</span><rt>鵬舉</rt></ruby>，是<ruby><span class='attr'>相州湯陰</span><span class='obj'>人也</span><rt>相州湯陰人</rt></ruby>。<ruby><span class='adv'>生時</span><rt>出生的時候</rt></ruby>，<ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>大禽若鵠</span><rt>一隻像天鵝的大鳥</rt></ruby>，<ruby><span class='verb'>飛鳴</span><rt>飛鳴</rt></ruby><ruby><span class='adv'>室上</span><rt>在屋頂上</rt></ruby>，<ruby><span class='adv'>因以</span><rt>於是就</rt></ruby><ruby><span class='verb'>為</span><rt>作為</rt></ruby><ruby><span class='obj'>名</span><rt>他的名字</rt></ruby>。"
            },
            {
                original: "未彌月，河決內黃，水暴至，母姚氏抱飛坐巨甕中，衝濤乘流而下，及岸，得免。",
                svo: "<span class='adv'>未彌月</span>，<span class='subj'>河</span><span class='verb'>決</span><span class='obj'>內黃</span>，<span class='subj'>水</span><span class='adv'>暴</span><span class='verb'>至</span>，<span class='subj'>母姚氏</span><span class='verb'>抱</span><span class='obj'>飛</span><span class='verb'>坐</span><span class='adv'>巨甕中</span>，<span class='verb'>衝濤乘流</span>而<span class='verb'>下</span>，<span class='adv'>及岸</span>，<span class='verb'>得免</span>。",
                svo_trans: "<ruby><span class='adv'>未彌月</span><rt>還不滿一個月</rt></ruby>，<ruby><span class='subj'>河</span><rt>黃河</rt></ruby><ruby><span class='verb'>決</span><rt>決堤</rt></ruby><ruby><span class='obj'>內黃</span><rt>內黃一帶</rt></ruby>，<ruby><span class='subj'>水</span><rt>洪水</rt></ruby><ruby><span class='adv'>暴</span><rt>突然</rt></ruby><ruby><span class='verb'>至</span><rt>衝到</rt></ruby>，<ruby><span class='subj'>母姚氏</span><rt>母親姚氏</rt></ruby><ruby><span class='verb'>抱</span><rt>抱著</rt></ruby><ruby><span class='obj'>飛</span><rt>岳飛</rt></ruby><ruby><span class='verb'>坐</span><rt>坐在</rt></ruby><ruby><span class='adv'>巨甕中</span><rt>大甕中</rt></ruby>，<ruby><span class='verb'>衝濤乘流</span><rt>衝著波濤順著水流</rt></ruby>而<ruby><span class='verb'>下</span><rt>漂下</rt></ruby>，<ruby><span class='adv'>及岸</span><rt>到了岸邊</rt></ruby>，<ruby><span class='verb'>得免</span><rt>得以倖免</rt></ruby>。"
            },
            {
                original: "飛少負氣節，沈厚寡言。家貧，力學，尤好《左氏春秋》、孫吳兵法。",
                svo: "<span class='subj'>飛</span><span class='adv'>少</span><span class='verb'>負</span><span class='obj'>氣節</span>，<span class='verb'>沈厚寡言</span>。<span class='subj'>家</span><span class='verb'>貧</span>，<span class='adv'>力</span><span class='verb'>學</span>，<span class='adv'>尤</span><span class='verb'>好</span><span class='obj'>《左氏春秋》、孫吳兵法</span>。",
                svo_trans: "<ruby><span class='subj'>飛</span><rt>岳飛</rt></ruby><ruby><span class='adv'>少</span><rt>年少時</rt></ruby><ruby><span class='verb'>負</span><rt>就有</rt></ruby><ruby><span class='obj'>氣節</span><rt>氣節</rt></ruby>，<ruby><span class='verb'>沈厚寡言</span><rt>性格沉穩厚重，話不多</rt></ruby>。<ruby><span class='subj'>家</span><rt>家裡</rt></ruby><ruby><span class='verb'>貧</span><rt>貧窮</rt></ruby>，<ruby><span class='adv'>力</span><rt>努力</rt></ruby><ruby><span class='verb'>學</span><rt>學習</rt></ruby>，<ruby><span class='adv'>尤</span><rt>特別</rt></ruby><ruby><span class='verb'>好</span><rt>喜愛</rt></ruby><ruby><span class='obj'>《左氏春秋》、孫吳兵法</span><rt>《左氏春秋》和孫子、吳起的兵法</rt></ruby>。"
            },
            {
                original: "生有神力，未冠，挽弓三百斤，弩八石。",
                svo: "<span class='adv'>生</span><span class='verb'>有</span><span class='obj'>神力</span>，<span class='adv'>未冠</span>，<span class='verb'>挽</span><span class='obj'>弓三百斤</span>，<span class='verb'>弩八石</span>。",
                svo_trans: "<ruby><span class='adv'>生</span><rt>天生</rt></ruby><ruby><span class='verb'>有</span><rt>就有</rt></ruby><ruby><span class='obj'>神力</span><rt>神奇的力量</rt></ruby>，<ruby><span class='adv'>未冠</span><rt>還沒到二十歲</rt></ruby>，就能<ruby><span class='verb'>挽</span><rt>拉開</rt></ruby><ruby><span class='obj'>弓三百斤</span><rt>三百斤的弓</rt></ruby>，<ruby><span class='verb'>弩八石</span><rt>八石的弩</rt></ruby>。"
            },
            {
                original: "同射於西營，又發一矢，破其筈，再發，又中。",
                svo: "<span class='adv'>同</span><span class='verb'>射</span><span class='adv'>於西營</span>，<span class='adv'>又</span><span class='verb'>發</span><span class='attr'>一</span><span class='obj'>矢</span>，<span class='verb'>破</span><span class='attr'>其</span><span class='obj'>筈</span>，<span class='adv'>再發</span>，<span class='adv'>又</span><span class='verb'>中</span>。",
                svo_trans: "<ruby><span class='adv'>同</span><rt>一同</rt></ruby><ruby><span class='verb'>射</span><rt>射箭</rt></ruby><ruby><span class='adv'>於西營</span><rt>在西營</rt></ruby>，<ruby><span class='adv'>又</span><rt>又</rt></ruby><ruby><span class='verb'>發</span><rt>射出</rt></ruby><ruby><span class='attr'>一</span><span class='obj'>矢</span><rt>一支箭</rt></ruby>，<ruby><span class='verb'>破</span><rt>射破了</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>筈</span><rt>箭尾</rt></ruby>，<ruby><span class='adv'>再發</span><rt>再射一支</rt></ruby>，<ruby><span class='adv'>又</span><rt>又</rt></ruby><ruby><span class='verb'>中</span><rt>射中了</rt></ruby>。"
            }
        ]
    },
    zhuzijiaxun: {
        title: "朱子家訓(節錄)",
        author: "朱柏廬",
        level: 3,
        sentences: [
            {
                original: "黎明即起，灑掃庭除，要內外整潔。",
                svo: "<span class='adv'>黎明</span><span class='adv'>即</span><span class='verb'>起</span>，<span class='verb'>灑掃</span><span class='obj'>庭除</span>，<span class='verb'>要</span><span class='obj'>內外整潔</span>。",
                svo_trans: "<ruby><span class='adv'>黎明</span><rt>天剛亮</rt></ruby><ruby><span class='adv'>即</span><rt>就</rt></ruby><ruby><span class='verb'>起</span><rt>起床</rt></ruby>，<ruby><span class='verb'>灑掃</span><rt>清掃</rt></ruby><ruby><span class='obj'>庭除</span><rt>庭院台階</rt></ruby>，<ruby><span class='verb'>要</span><rt>務必</rt></ruby><ruby><span class='obj'>內外整潔</span><rt>裡裡外外整齊清潔</rt></ruby>。"
            },
            {
                original: "一粥一飯，當思來處不易；半絲半縷，恆念物力維艱。",
                svo: "<span class='attr'>一粥一飯</span>，<span class='adv'>當</span><span class='verb'>思</span><span class='obj'>來處不易</span>；<span class='attr'>半絲半縷</span>，<span class='adv'>恆</span><span class='verb'>念</span><span class='obj'>物力維艱</span>。",
                svo_trans: "<ruby><span class='attr'>一粥一飯</span><rt>一碗粥一碗飯</rt></ruby>，<ruby><span class='adv'>當</span><rt>應當</rt></ruby><ruby><span class='verb'>思</span><rt>想到</rt></ruby><ruby><span class='obj'>來處不易</span><rt>來之不易</rt></ruby>；<ruby><span class='attr'>半絲半縷</span><rt>半根絲半縷線</rt></ruby>，<ruby><span class='adv'>恆</span><rt>永遠</rt></ruby><ruby><span class='verb'>念</span><rt>記掛</rt></ruby><ruby><span class='obj'>物力維艱</span><rt>物資得來艱難</rt></ruby>。"
            },
            {
                original: "宜未雨而綢繆，毋臨渴而掘井。",
                svo: "<span class='verb'>宜</span><span class='adv'>未雨</span>而<span class='verb'>綢繆</span>，<span class='adv'>毋</span><span class='verb'>臨渴</span>而<span class='verb'>掘井</span>。",
                svo_trans: "<ruby><span class='verb'>宜</span><rt>應該</rt></ruby><ruby><span class='adv'>未雨</span><rt>沒有下雨之前</rt></ruby>而<ruby><span class='verb'>綢繆</span><rt>修補門窗</rt></ruby>，<ruby><span class='adv'>毋</span><rt>不要</rt></ruby><ruby><span class='verb'>臨渴</span><rt>等到口渴了</rt></ruby>才<ruby><span class='verb'>掘井</span><rt>才挖井</rt></ruby>。"
            },
            {
                original: "自奉必須儉約，宴客切勿流連。",
                svo: "<span class='adv'>自奉</span><span class='adv'>必須</span><span class='verb'>儉約</span>，<span class='adv'>宴客</span><span class='adv'>切勿</span><span class='verb'>流連</span>。",
                svo_trans: "<ruby><span class='adv'>自奉</span><rt>自己的生活供養</rt></ruby><ruby><span class='adv'>必須</span><rt>一定要</rt></ruby><ruby><span class='verb'>儉約</span><rt>節儉</rt></ruby>，<ruby><span class='adv'>宴客</span><rt>宴請客人</rt></ruby><ruby><span class='adv'>切勿</span><rt>千萬不要</rt></ruby><ruby><span class='verb'>流連</span><rt>耽溺流連</rt></ruby>。"
            },
            {
                original: "器具質而潔，瓦缶勝金玉；飲食約而精，園蔬勝珍饈。",
                svo: "<span class='subj'>器具</span><span class='verb'>質而潔</span>，<span class='subj'>瓦缶</span><span class='verb'>勝</span><span class='obj'>金玉</span>；<span class='subj'>飲食</span><span class='verb'>約而精</span>，<span class='subj'>園蔬</span><span class='verb'>勝</span><span class='obj'>珍饈</span>。",
                svo_trans: "<ruby><span class='subj'>器具</span><rt>用具</rt></ruby><ruby><span class='verb'>質而潔</span><rt>樸素而乾淨</rt></ruby>，<ruby><span class='subj'>瓦缶</span><rt>陶器</rt></ruby><ruby><span class='verb'>勝</span><rt>勝過</rt></ruby><ruby><span class='obj'>金玉</span><rt>金玉</rt></ruby>；<ruby><span class='subj'>飲食</span><rt>飲食</rt></ruby><ruby><span class='verb'>約而精</span><rt>簡單而精緻</rt></ruby>，<ruby><span class='subj'>園蔬</span><rt>園裡的蔬菜</rt></ruby><ruby><span class='verb'>勝</span><rt>勝過</rt></ruby><ruby><span class='obj'>珍饈</span><rt>山珍海味</rt></ruby>。"
            },
            {
                original: "勿營華屋，勿謀良田。",
                svo: "<span class='adv'>勿</span><span class='verb'>營</span><span class='obj'>華屋</span>，<span class='adv'>勿</span><span class='verb'>謀</span><span class='obj'>良田</span>。",
                svo_trans: "<ruby><span class='adv'>勿</span><rt>不要</rt></ruby><ruby><span class='verb'>營</span><rt>營造</rt></ruby><ruby><span class='obj'>華屋</span><rt>華麗的房屋</rt></ruby>，<ruby><span class='adv'>勿</span><rt>不要</rt></ruby><ruby><span class='verb'>謀</span><rt>謀求</rt></ruby><ruby><span class='obj'>良田</span><rt>肥沃的田地</rt></ruby>。"
            }
        ]
    },
        // ==================== 第四學習階段（中四至中六）====================
    lunren: {
        title: "論仁、論孝、論君子",
        author: "孔子",
        level: 4,
        sentences: [
            {
                original: "子曰：「里仁為美。擇不處仁，焉得知？」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='verb'>里</span><span class='attr'>仁</span><span class='verb'>為</span><span class='obj'>美</span>。<span class='verb'>擇</span><span class='adv'>不處</span><span class='obj'>仁</span>，<span class='adv'>焉</span><span class='verb'>得</span><span class='obj'>知</span>？」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='verb'>里</span><rt>居住的地方</rt></ruby>有<ruby><span class='attr'>仁</span><span class='verb'>為</span><span class='obj'>美</span><rt>仁風才算美好</rt></ruby>。<ruby><span class='verb'>擇</span><rt>選擇住處</rt></ruby>卻<ruby><span class='adv'>不處</span><rt>不選在有</rt></ruby><ruby><span class='obj'>仁</span><rt>仁風的地方</rt></ruby>，<ruby><span class='adv'>焉</span><rt>怎麼</rt></ruby><ruby><span class='verb'>得</span><rt>算得上</rt></ruby><ruby><span class='obj'>知</span><rt>明智呢</rt></ruby>？」"
            },
            {
                original: "子曰：「君子去仁，惡乎成名？君子無終食之間違仁，造次必於是，顛沛必於是。」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='subj'>君子</span><span class='verb'>去</span><span class='obj'>仁</span>，<span class='adv'>惡乎</span><span class='verb'>成名</span>？<span class='subj'>君子</span><span class='verb'>無</span><span class='attr'>終食之間</span><span class='verb'>違</span><span class='obj'>仁</span>，<span class='adv'>造次</span><span class='adv'>必</span><span class='verb'>於是</span>，<span class='adv'>顛沛</span><span class='adv'>必</span><span class='verb'>於是</span>。」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>君子</span><rt>君子</rt></ruby>如果<ruby><span class='verb'>去</span><rt>離開</rt></ruby><ruby><span class='obj'>仁</span><rt>仁德</rt></ruby>，<ruby><span class='adv'>惡乎</span><rt>怎麼</rt></ruby><ruby><span class='verb'>成名</span><rt>成就君子之名</rt></ruby>？<ruby><span class='subj'>君子</span><rt>君子</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='attr'>終食之間</span><rt>一頓飯的時間</rt></ruby><ruby><span class='verb'>違</span><rt>違背</rt></ruby><ruby><span class='obj'>仁</span><rt>仁德</rt></ruby>，<ruby><span class='adv'>造次</span><rt>匆忙倉促之時</rt></ruby><ruby><span class='adv'>必</span><rt>一定</rt></ruby><ruby><span class='verb'>於是</span><rt>在這裡</rt></ruby>，<ruby><span class='adv'>顛沛</span><rt>顛沛流離之際</rt></ruby><ruby><span class='adv'>必</span><rt>一定</rt></ruby><ruby><span class='verb'>於是</span><rt>在這裡</rt></ruby>。」"
            },
            {
                original: "子曰：「苟志於仁矣，無惡也。」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='adv'>苟</span><span class='verb'>志於</span><span class='obj'>仁</span>矣，<span class='verb'>無</span><span class='obj'>惡</span>也。」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='adv'>苟</span><rt>如果</rt></ruby><ruby><span class='verb'>志於</span><rt>立志於</rt></ruby><ruby><span class='obj'>仁</span><rt>仁德</rt></ruby>，就<ruby><span class='verb'>無</span><rt>不會有</rt></ruby><ruby><span class='obj'>惡</span><rt>邪惡的行為</rt></ruby>了。」"
            },
            {
                original: "子曰：「孝弟也者，其為仁之本與！」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='subj'>孝弟</span><span class='adv'>也者</span>，<span class='attr'>其為</span><span class='obj'>仁之本</span>與！」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>孝弟</span><rt>孝順父母、敬愛兄長</rt></ruby>，<ruby><span class='attr'>其為</span><span class='obj'>仁之本</span><rt>就是仁的根本</rt></ruby>啊！」"
            },
            {
                original: "子曰：「父母之年，不可不知也。一則以喜，一則以懼。」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='attr'>父母之</span><span class='obj'>年</span>，<span class='adv'>不可不</span><span class='verb'>知</span>也。<span class='adv'>一則以喜</span>，<span class='adv'>一則以懼</span>。」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='attr'>父母之</span><span class='obj'>年</span><rt>父母的年齡</rt></ruby>，<ruby><span class='adv'>不可不</span><rt>不可以不</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby>。<ruby><span class='adv'>一則以喜</span><rt>一方面為他們長壽而高興</rt></ruby>，<ruby><span class='adv'>一則以懼</span><rt>一方面為他們衰老而擔憂</rt></ruby>。」"
            },
            {
                original: "曾子曰：「慎終追遠，民德歸厚矣。」",
                svo: "<span class='subj'>曾子</span><span class='verb'>曰</span>：「<span class='verb'>慎終</span><span class='verb'>追遠</span>，<span class='subj'>民德</span><span class='verb'>歸厚</span>矣。」",
                svo_trans: "<ruby><span class='subj'>曾子</span><rt>曾子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='verb'>慎終</span><rt>謹慎地辦理喪事</rt></ruby>、<ruby><span class='verb'>追遠</span><rt>追念遠祖</rt></ruby>，<ruby><span class='subj'>民德</span><rt>人民的道德</rt></ruby><ruby><span class='verb'>歸厚</span><rt>就會歸於淳厚</rt></ruby>矣。」"
            },
            {
                original: "子曰：「君子坦蕩蕩，小人長戚戚。」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='subj'>君子</span><span class='verb'>坦蕩蕩</span>，<span class='subj'>小人</span><span class='adv'>長</span><span class='verb'>戚戚</span>。」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>君子</span><rt>君子的心胸</rt></ruby><ruby><span class='verb'>坦蕩蕩</span><rt>坦白寬廣</rt></ruby>，<ruby><span class='subj'>小人</span><rt>小人的心胸</rt></ruby><ruby><span class='adv'>長</span><rt>經常</rt></ruby><ruby><span class='verb'>戚戚</span><rt>憂愁恐懼</rt></ruby>。」"
            },
            {
                original: "子曰：「君子成人之美，不成人之惡。小人反是。」",
                svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='subj'>君子</span><span class='verb'>成</span><span class='attr'>人之</span><span class='obj'>美</span>，<span class='adv'>不</span><span class='verb'>成</span><span class='attr'>人之</span><span class='obj'>惡</span>。<span class='subj'>小人</span><span class='verb'>反是</span>。」",
                svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>君子</span><rt>君子</rt></ruby><ruby><span class='verb'>成</span><rt>成全</rt></ruby><ruby><span class='attr'>人之</span><span class='obj'>美</span><rt>別人的好事</rt></ruby>，<ruby><span class='adv'>不</span><rt>不促成</rt></ruby><ruby><span class='attr'>人之</span><span class='obj'>惡</span><rt>別人的壞事</rt></ruby>。<ruby><span class='subj'>小人</span><rt>小人</rt></ruby><ruby><span class='verb'>反是</span><rt>剛好相反</rt></ruby>。」"
            }
        ]
    },
    niannujiao: {
        title: "念奴嬌·赤壁懷古",
        author: "蘇軾",
        level: 4,
        sentences: [
            {
                original: "大江東去，浪淘盡，千古風流人物。",
                svo: "<span class='subj'>大江</span><span class='adv'>東</span><span class='verb'>去</span>，<span class='subj'>浪</span><span class='verb'>淘盡</span>，<span class='attr'>千古</span><span class='subj'>風流人物</span>。",
                svo_trans: "<ruby><span class='subj'>大江</span><rt>長江</rt></ruby><ruby><span class='adv'>東</span><rt>向東</rt></ruby><ruby><span class='verb'>去</span><rt>奔流</rt></ruby>，<ruby><span class='subj'>浪</span><rt>浪花</rt></ruby><ruby><span class='verb'>淘盡</span><rt>沖刷盡</rt></ruby>了<ruby><span class='attr'>千古</span><span class='subj'>風流人物</span><rt>千古以來的英雄豪傑</rt></ruby>。"
            },
            {
                original: "故壘西邊，人道是，三國周郎赤壁。",
                svo: "<span class='attr'>故壘</span><span class='adv'>西邊</span>，<span class='subj'>人</span><span class='verb'>道是</span>，<span class='attr'>三國</span><span class='subj'>周郎赤壁</span>。",
                svo_trans: "<ruby><span class='attr'>故壘</span><rt>舊時的營壘</rt></ruby><ruby><span class='adv'>西邊</span><rt>西邊</rt></ruby>，<ruby><span class='subj'>人</span><rt>人們</rt></ruby><ruby><span class='verb'>道是</span><rt>說這裡就是</rt></ruby>，<ruby><span class='attr'>三國</span><span class='subj'>周郎赤壁</span><rt>三國時周瑜大戰的赤壁</rt></ruby>。"
            },
            {
                original: "亂石崩雲，驚濤裂岸，捲起千堆雪。",
                svo: "<span class='subj'>亂石</span><span class='verb'>崩雲</span>，<span class='subj'>驚濤</span><span class='verb'>裂岸</span>，<span class='verb'>捲起</span><span class='attr'>千堆</span><span class='obj'>雪</span>。",
                svo_trans: "<ruby><span class='subj'>亂石</span><rt>陡峭的山石</rt></ruby><ruby><span class='verb'>崩雲</span><rt>直插雲霄</rt></ruby>，<ruby><span class='subj'>驚濤</span><rt>洶湧的波濤</rt></ruby><ruby><span class='verb'>裂岸</span><rt>拍裂江岸</rt></ruby>，<ruby><span class='verb'>捲起</span><rt>捲起</rt></ruby><ruby><span class='attr'>千堆</span><span class='obj'>雪</span><rt>千萬堆的浪花</rt></ruby>。"
            },
            {
                original: "江山如畫，一時多少豪傑。",
                svo: "<span class='subj'>江山</span><span class='verb'>如畫</span>，<span class='adv'>一時</span><span class='attr'>多少</span><span class='obj'>豪傑</span>。",
                svo_trans: "<ruby><span class='subj'>江山</span><rt>江山</rt></ruby><ruby><span class='verb'>如畫</span><rt>如詩如畫</rt></ruby>，<ruby><span class='adv'>一時</span><rt>那個時代</rt></ruby>湧現了<ruby><span class='attr'>多少</span><span class='obj'>豪傑</span><rt>多少英雄豪傑</rt></ruby>。"
            },
            {
                original: "遙想公瑾當年，小喬初嫁了，雄姿英發。",
                svo: "<span class='adv'>遙想</span><span class='subj'>公瑾當年</span>，<span class='subj'>小喬</span><span class='adv'>初</span><span class='verb'>嫁</span>了，<span class='subj'>雄姿</span><span class='verb'>英發</span>。",
                svo_trans: "<ruby><span class='adv'>遙想</span><rt>遙想</rt></ruby><ruby><span class='subj'>公瑾當年</span><rt>當年的周瑜</rt></ruby>，<ruby><span class='subj'>小喬</span><rt>小喬</rt></ruby><ruby><span class='adv'>初</span><rt>剛剛</rt></ruby><ruby><span class='verb'>嫁</span><rt>嫁給他</rt></ruby>，<ruby><span class='subj'>雄姿</span><rt>英姿</rt></ruby><ruby><span class='verb'>英發</span><rt>雄偉勃發</rt></ruby>。"
            },
            {
                original: "羽扇綸巾，談笑間，檣櫓灰飛煙滅。",
                svo: "<span class='subj'>羽扇綸巾</span>，<span class='adv'>談笑間</span>，<span class='subj'>檣櫓</span><span class='verb'>灰飛煙滅</span>。",
                svo_trans: "<ruby><span class='subj'>羽扇綸巾</span><rt>手持羽扇頭戴綸巾</rt></ruby>，<ruby><span class='adv'>談笑間</span><rt>談笑之間</rt></ruby>，<ruby><span class='subj'>檣櫓</span><rt>敵軍的戰船</rt></ruby><ruby><span class='verb'>灰飛煙滅</span><rt>灰飛煙滅</rt></ruby>。"
            },
            {
                original: "故國神遊，多情應笑我，早生華髮。",
                svo: "<span class='adv'>故國</span><span class='verb'>神遊</span>，<span class='adv'>多情</span><span class='adv'>應</span><span class='verb'>笑</span><span class='obj'>我</span>，<span class='adv'>早</span><span class='verb'>生</span><span class='obj'>華髮</span>。",
                svo_trans: "<ruby><span class='adv'>故國</span><rt>舊地</rt></ruby><ruby><span class='verb'>神遊</span><rt>神遊其中</rt></ruby>，<ruby><span class='adv'>多情</span><rt>多情善感的人</rt></ruby><ruby><span class='adv'>應</span><rt>應該</rt></ruby><ruby><span class='verb'>笑</span><rt>笑</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby>，<ruby><span class='adv'>早</span><rt>早早地</rt></ruby><ruby><span class='verb'>生</span><rt>長出了</rt></ruby><ruby><span class='obj'>華髮</span><rt>白髮</rt></ruby>。"
            },
            {
                original: "人生如夢，一尊還酹江月。",
                svo: "<span class='subj'>人生</span><span class='verb'>如夢</span>，<span class='adv'>一尊</span><span class='adv'>還</span><span class='verb'>酹</span><span class='obj'>江月</span>。",
                svo_trans: "<ruby><span class='subj'>人生</span><rt>人生</rt></ruby><ruby><span class='verb'>如夢</span><rt>如同一場夢</rt></ruby>，<ruby><span class='adv'>一尊</span><rt>端起一杯酒</rt></ruby><ruby><span class='adv'>還</span><rt>還是</rt></ruby><ruby><span class='verb'>酹</span><rt>灑祭</rt></ruby><ruby><span class='obj'>江月</span><rt>江中的明月</rt></ruby>。"
            }
        ]
    },
    shengshengman: {
        title: "聲聲慢·秋情",
        author: "李清照",
        level: 4,
        sentences: [
            {
                original: "尋尋覓覓，冷冷清清，悽悽慘慘戚戚。",
                svo: "<span class='adv'>尋尋覓覓</span>，<span class='adv'>冷冷清清</span>，<span class='adv'>悽悽慘慘戚戚</span>。",
                svo_trans: "<ruby><span class='adv'>尋尋覓覓</span><rt>尋尋覓覓</rt></ruby>，<ruby><span class='adv'>冷冷清清</span><rt>冷冷清清</rt></ruby>，<ruby><span class='adv'>悽悽慘慘戚戚</span><rt>悽悽慘慘戚戚</rt></ruby>。"
            },
            {
                original: "乍暖還寒時候，最難將息。",
                svo: "<span class='adv'>乍暖還寒</span><span class='subj'>時候</span>，<span class='adv'>最</span><span class='verb'>難將息</span>。",
                svo_trans: "<ruby><span class='adv'>乍暖還寒</span><span class='subj'>時候</span><rt>忽暖忽冷的天氣</rt></ruby>，<ruby><span class='adv'>最</span><rt>最</rt></ruby><ruby><span class='verb'>難將息</span><rt>難以調養休息</rt></ruby>。"
            },
            {
                original: "三杯兩盞淡酒，怎敵他、晚來風急！",
                svo: "<span class='attr'>三杯兩盞</span><span class='obj'>淡酒</span>，<span class='adv'>怎敵</span><span class='obj'>他</span>、<span class='adv'>晚來</span><span class='subj'>風</span><span class='adv'>急</span>！",
                svo_trans: "<ruby><span class='attr'>三杯兩盞</span><span class='obj'>淡酒</span><rt>幾杯淡酒</rt></ruby>，<ruby><span class='adv'>怎敵</span><rt>怎能抵擋</rt></ruby><ruby><span class='obj'>他</span><rt>那</rt></ruby>、<ruby><span class='adv'>晚來</span><rt>傍晚時</rt></ruby><ruby><span class='subj'>風</span><rt>秋風</rt></ruby><ruby><span class='adv'>急</span><rt>的急驟</rt></ruby>！"
            },
            {
                original: "雁過也，正傷心，卻是舊時相識。",
                svo: "<span class='subj'>雁</span><span class='verb'>過</span>也，<span class='adv'>正</span><span class='verb'>傷心</span>，<span class='adv'>卻是</span><span class='attr'>舊時</span><span class='obj'>相識</span>。",
                svo_trans: "<ruby><span class='subj'>雁</span><rt>大雁</rt></ruby><ruby><span class='verb'>過</span><rt>飛過</rt></ruby>，<ruby><span class='adv'>正</span><rt>正當</rt></ruby><ruby><span class='verb'>傷心</span><rt>傷心</rt></ruby>，<ruby><span class='adv'>卻是</span><rt>卻發現是</rt></ruby><ruby><span class='attr'>舊時</span><span class='obj'>相識</span><rt>舊時的相識</rt></ruby>。"
            },
            {
                original: "滿地黃花堆積，憔悴損，如今有誰堪摘？",
                svo: "<span class='adv'>滿地</span><span class='subj'>黃花</span><span class='verb'>堆積</span>，<span class='subj'>憔悴</span><span class='verb'>損</span>，<span class='adv'>如今</span><span class='verb'>有</span><span class='subj'>誰</span><span class='adv'>堪</span><span class='verb'>摘</span>？",
                svo_trans: "<ruby><span class='adv'>滿地</span><rt>滿地</rt></ruby><ruby><span class='subj'>黃花</span><rt>菊花</rt></ruby><ruby><span class='verb'>堆積</span><rt>堆積</rt></ruby>，<ruby><span class='subj'>憔悴</span><rt>人也憔悴</rt></ruby><ruby><span class='verb'>損</span><rt>損</rt></ruby>，<ruby><span class='adv'>如今</span><rt>到如今</rt></ruby><ruby><span class='verb'>有</span><span class='subj'>誰</span><rt>還有誰</rt></ruby><ruby><span class='adv'>堪</span><rt>可以</rt></ruby><ruby><span class='verb'>摘</span><rt>採摘</rt></ruby>？"
            },
            {
                original: "守著窗兒，獨自怎生得黑！",
                svo: "<span class='verb'>守著</span><span class='obj'>窗兒</span>，<span class='adv'>獨自</span><span class='adv'>怎生</span><span class='verb'>得黑</span>！",
                svo_trans: "<ruby><span class='verb'>守著</span><rt>守著</rt></ruby><ruby><span class='obj'>窗兒</span><rt>窗戶</rt></ruby>，<ruby><span class='adv'>獨自</span><rt>獨自一人</rt></ruby><ruby><span class='adv'>怎生</span><rt>怎麼</rt></ruby><ruby><span class='verb'>得黑</span><rt>捱到天黑</rt></ruby>！"
            },
            {
                original: "梧桐更兼細雨，到黃昏、點點滴滴。",
                svo: "<span class='subj'>梧桐</span><span class='adv'>更兼</span><span class='obj'>細雨</span>，<span class='adv'>到黃昏</span>、<span class='adv'>點點滴滴</span>。",
                svo_trans: "<ruby><span class='subj'>梧桐</span><rt>梧桐</rt></ruby><ruby><span class='adv'>更兼</span><rt>加上</rt></ruby><ruby><span class='obj'>細雨</span><rt>細雨</rt></ruby>，<ruby><span class='adv'>到黃昏</span><rt>到了黃昏</rt></ruby>、<ruby><span class='adv'>點點滴滴</span><rt>點點滴滴</rt></ruby>。"
            },
            {
                original: "這次第，怎一個、愁字了得！",
                svo: "<span class='subj'>這次第</span>，<span class='adv'>怎一個</span>、<span class='obj'>愁字</span><span class='verb'>了得</span>！",
                svo_trans: "<ruby><span class='subj'>這次第</span><rt>這光景</rt></ruby>，<ruby><span class='adv'>怎一個</span><rt>豈是一個</rt></ruby><ruby><span class='obj'>愁字</span><rt>愁字</rt></ruby><ruby><span class='verb'>了得</span><rt>了得</rt></ruby>！"
            }
        ]
    },
    qingyuanyuanxi: {
        title: "青玉案·元夕",
        author: "辛棄疾",
        level: 4,
        sentences: [
            {
                original: "東風夜放花千樹，更吹落、星如雨。",
                svo: "<span class='subj'>東風</span><span class='adv'>夜</span><span class='verb'>放</span><span class='attr'>花千</span><span class='obj'>樹</span>，<span class='adv'>更</span><span class='verb'>吹落</span>、<span class='subj'>星</span><span class='verb'>如雨</span>。",
                svo_trans: "<ruby><span class='subj'>東風</span><rt>東風</rt></ruby><ruby><span class='adv'>夜</span><rt>在夜裡</rt></ruby><ruby><span class='verb'>放</span><rt>吹開了</rt></ruby><ruby><span class='attr'>花千</span><span class='obj'>樹</span><rt>千萬棵花樹</rt></ruby>，<ruby><span class='adv'>更</span><rt>更</rt></ruby><ruby><span class='verb'>吹落</span><rt>吹落了</rt></ruby><ruby><span class='subj'>星</span><rt>星星</rt></ruby><ruby><span class='verb'>如雨</span><rt>如雨般落下</rt></ruby>。"
            },
            {
                original: "寶馬雕車香滿路。鳳簫聲動，玉壺光轉，一夜魚龍舞。",
                svo: "<span class='subj'>寶馬雕車</span><span class='verb'>香滿路</span>。<span class='subj'>鳳簫聲</span><span class='verb'>動</span>，<span class='subj'>玉壺</span><span class='verb'>光轉</span>，<span class='adv'>一夜</span><span class='subj'>魚龍</span><span class='verb'>舞</span>。",
                svo_trans: "<ruby><span class='subj'>寶馬雕車</span><rt>華麗的車馬</rt></ruby><ruby><span class='verb'>香滿路</span><rt>香氣滿路</rt></ruby>。<ruby><span class='subj'>鳳簫聲</span><rt>鳳簫聲</rt></ruby><ruby><span class='verb'>動</span><rt>吹動</rt></ruby>，<ruby><span class='subj'>玉壺</span><rt>月亮</rt></ruby><ruby><span class='verb'>光轉</span><rt>光影流轉</rt></ruby>，<ruby><span class='adv'>一夜</span><rt>整夜</rt></ruby><ruby><span class='subj'>魚龍</span><rt>魚龍燈</rt></ruby><ruby><span class='verb'>舞</span><rt>舞動</rt></ruby>。"
            },
            {
                original: "蛾兒雪柳黃金縷，笑語盈盈暗香去。",
                svo: "<span class='subj'>蛾兒雪柳黃金縷</span>，<span class='subj'>笑語</span><span class='adv'>盈盈</span><span class='subj'>暗香</span><span class='verb'>去</span>。",
                svo_trans: "<ruby><span class='subj'>蛾兒雪柳黃金縷</span><rt>女子們的華麗頭飾</rt></ruby>，<ruby><span class='subj'>笑語</span><rt>笑語</rt></ruby><ruby><span class='adv'>盈盈</span><rt>盈盈</rt></ruby>，<ruby><span class='subj'>暗香</span><rt>暗香</rt></ruby><ruby><span class='verb'>去</span><rt>飄然而去</rt></ruby>。"
            },
            {
                original: "眾裡尋他千百度，驀然回首，那人卻在，燈火闌珊處。",
                svo: "<span class='adv'>眾裡</span><span class='verb'>尋</span><span class='obj'>他</span><span class='attr'>千百</span><span class='obj'>度</span>，<span class='adv'>驀然</span><span class='verb'>回首</span>，<span class='subj'>那人</span><span class='adv'>卻在</span>，<span class='adv'>燈火闌珊</span><span class='obj'>處</span>。",
                svo_trans: "<ruby><span class='adv'>眾裡</span><rt>在人群中</rt></ruby><ruby><span class='verb'>尋</span><rt>尋找</rt></ruby><ruby><span class='obj'>他</span><rt>她</rt></ruby><ruby><span class='attr'>千百</span><span class='obj'>度</span><rt>千百次</rt></ruby>，<ruby><span class='adv'>驀然</span><rt>猛然</rt></ruby><ruby><span class='verb'>回首</span><rt>回頭</rt></ruby>，<ruby><span class='subj'>那人</span><rt>那個人</rt></ruby><ruby><span class='adv'>卻在</span><rt>卻在</rt></ruby>，<ruby><span class='adv'>燈火闌珊</span><span class='obj'>處</span><rt>燈火稀疏的地方</rt></ruby>。"
            }
        ]
    },
    sikuaiyu: {
        title: "四塊玉·閒適",
        author: "關漢卿",
        level: 4,
        sentences: [
            {
                original: "舊酒投，新醅潑，老瓦盆邊笑呵呵。",
                svo: "<span class='subj'>舊酒</span><span class='verb'>投</span>，<span class='subj'>新醅</span><span class='verb'>潑</span>，<span class='adv'>老瓦盆邊</span><span class='verb'>笑呵呵</span>。",
                svo_trans: "<ruby><span class='subj'>舊酒</span><rt>陳酒</rt></ruby><ruby><span class='verb'>投</span><rt>斟上</rt></ruby>，<ruby><span class='subj'>新醅</span><rt>新酒</rt></ruby><ruby><span class='verb'>潑</span><rt>倒上</rt></ruby>，<ruby><span class='adv'>老瓦盆邊</span><rt>在老瓦盆邊</rt></ruby><ruby><span class='verb'>笑呵呵</span><rt>笑呵呵</rt></ruby>。"
            },
            {
                original: "共山僧野叟閒吟和，他出一對雞，我出一個鵝，閒快活。",
                svo: "<span class='adv'>共</span><span class='subj'>山僧野叟</span><span class='adv'>閒</span><span class='verb'>吟和</span>，<span class='subj'>他</span><span class='verb'>出</span><span class='obj'>一對雞</span>，<span class='subj'>我</span><span class='verb'>出</span><span class='obj'>一個鵝</span>，<span class='adv'>閒快活</span>。",
                svo_trans: "<ruby><span class='adv'>共</span><rt>跟</rt></ruby><ruby><span class='subj'>山僧野叟</span><rt>山中的僧人和鄉野老翁</rt></ruby><ruby><span class='adv'>閒</span><rt>悠閒地</rt></ruby><ruby><span class='verb'>吟和</span><rt>吟詩唱和</rt></ruby>，<ruby><span class='subj'>他</span><rt>他</rt></ruby><ruby><span class='verb'>出</span><rt>拿出</rt></ruby><ruby><span class='obj'>一對雞</span><rt>一對雞</rt></ruby>，<ruby><span class='subj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>出</span><rt>拿出</rt></ruby><ruby><span class='obj'>一個鵝</span><rt>一隻鵝</rt></ruby>，<ruby><span class='adv'>閒快活</span><rt>悠閒快樂</rt></ruby>。"
            },
            {
                original: "南畝耕，東山臥，世態人情經歷多。",
                svo: "<span class='adv'>南畝</span><span class='verb'>耕</span>，<span class='adv'>東山</span><span class='verb'>臥</span>，<span class='subj'>世態人情</span><span class='verb'>經歷多</span>。",
                svo_trans: "<ruby><span class='adv'>南畝</span><rt>在南邊的田地</rt></ruby><ruby><span class='verb'>耕</span><rt>耕作</rt></ruby>，<ruby><span class='adv'>東山</span><rt>在東山</rt></ruby><ruby><span class='verb'>臥</span><rt>高臥</rt></ruby>，<ruby><span class='subj'>世態人情</span><rt>世態人情</rt></ruby><ruby><span class='verb'>經歷多</span><rt>經歷得多了</rt></ruby>。"
            },
            {
                original: "閒將往事思量過，賢的是他，愚的是我，爭甚麼！",
                svo: "<span class='adv'>閒</span><span class='verb'>將</span><span class='obj'>往事</span><span class='verb'>思量過</span>，<span class='subj'>賢的</span><span class='verb'>是他</span>，<span class='subj'>愚的</span><span class='verb'>是我</span>，<span class='adv'>爭甚麼</span>！",
                svo_trans: "<ruby><span class='adv'>閒</span><rt>閒來</rt></ruby><ruby><span class='verb'>將</span><rt>把</rt></ruby><ruby><span class='obj'>往事</span><rt>往事</rt></ruby><ruby><span class='verb'>思量過</span><rt>思量一遍</rt></ruby>，<ruby><span class='subj'>賢的</span><rt>賢明的是</rt></ruby><ruby><span class='verb'>是他</span><rt>他</rt></ruby>，<ruby><span class='subj'>愚的</span><rt>愚鈍的是</rt></ruby><ruby><span class='verb'>是我</span><rt>我</rt></ruby>，<ruby><span class='adv'>爭甚麼</span><rt>爭什麼呢</rt></ruby>！"
            }
        ]
    },
    chenzuidongfeng: {
        title: "沉醉東風·漁父詞",
        author: "白樸",
        level: 4,
        sentences: [
            {
                original: "黃蘆岸白蘋渡口，綠楊堤紅蓼灘頭。",
                svo: "<span class='attr'>黃蘆岸</span><span class='attr'>白蘋</span><span class='obj'>渡口</span>，<span class='attr'>綠楊堤</span><span class='attr'>紅蓼</span><span class='obj'>灘頭</span>。",
                svo_trans: "<ruby><span class='attr'>黃蘆岸</span><rt>黃蘆岸</rt></ruby><ruby><span class='attr'>白蘋</span><span class='obj'>渡口</span><rt>白蘋渡口</rt></ruby>，<ruby><span class='attr'>綠楊堤</span><rt>綠楊堤</rt></ruby><ruby><span class='attr'>紅蓼</span><span class='obj'>灘頭</span><rt>紅蓼灘頭</rt></ruby>。"
            },
            {
                original: "雖無刎頸交，卻有忘機友。",
                svo: "<span class='adv'>雖無</span><span class='obj'>刎頸交</span>，<span class='adv'>卻有</span><span class='obj'>忘機友</span>。",
                svo_trans: "<ruby><span class='adv'>雖無</span><rt>雖然沒有</rt></ruby><ruby><span class='obj'>刎頸交</span><rt>生死之交</rt></ruby>，<ruby><span class='adv'>卻有</span><rt>卻有</rt></ruby><ruby><span class='obj'>忘機友</span><rt>淡泊無機心的朋友</rt></ruby>。"
            },
            {
                original: "點秋江白鷺沙鷗，傲殺人間萬戶侯。",
                svo: "<span class='verb'>點</span><span class='obj'>秋江</span><span class='subj'>白鷺沙鷗</span>，<span class='verb'>傲殺</span><span class='obj'>人間萬戶侯</span>。",
                svo_trans: "<ruby><span class='verb'>點</span><rt>點綴著</rt></ruby><ruby><span class='obj'>秋江</span><rt>秋江的</rt></ruby><ruby><span class='subj'>白鷺沙鷗</span><rt>白鷺和沙鷗</rt></ruby>，<ruby><span class='verb'>傲殺</span><rt>傲視</rt></ruby><ruby><span class='obj'>人間萬戶侯</span><rt>人間的達官貴人</rt></ruby>。"
            },
            {
                original: "不識字煙波釣叟。",
                svo: "<span class='attr'>不識字</span><span class='subj'>煙波釣叟</span>。",
                svo_trans: "<ruby><span class='attr'>不識字</span><rt>不識字的</rt></ruby><ruby><span class='subj'>煙波釣叟</span><rt>煙波中的釣魚老翁</rt></ruby>。"
            }
        ]
    },
    yangxiu: {
        title: "楊修之死",
        author: "羅貫中",
        level: 4,
        sentences: [
            {
                original: "操屯兵日久，欲進，有馬超拒守；欲收兵，又恐被蜀兵恥笑，心中猶豫不決。",
                svo: "<span class='subj'>操</span><span class='verb'>屯兵</span><span class='adv'>日久</span>，<span class='verb'>欲進</span>，<span class='verb'>有</span><span class='subj'>馬超</span><span class='verb'>拒守</span>；<span class='verb'>欲收兵</span>，<span class='adv'>又</span><span class='verb'>恐</span><span class='adv'>被</span><span class='subj'>蜀兵</span><span class='verb'>恥笑</span>，<span class='subj'>心中</span><span class='adv'>猶豫不決</span>。",
                svo_trans: "<ruby><span class='subj'>操</span><rt>曹操</rt></ruby><ruby><span class='verb'>屯兵</span><rt>駐兵</rt></ruby><ruby><span class='adv'>日久</span><rt>很久了</rt></ruby>，<ruby><span class='verb'>欲進</span><rt>想要進兵</rt></ruby>，卻<ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='subj'>馬超</span><rt>馬超</rt></ruby><ruby><span class='verb'>拒守</span><rt>拒守</rt></ruby>；<ruby><span class='verb'>欲收兵</span><rt>想要退兵</rt></ruby>，<ruby><span class='adv'>又</span><rt>又</rt></ruby><ruby><span class='verb'>恐</span><rt>恐怕</rt></ruby><ruby><span class='adv'>被</span><rt>被</rt></ruby><ruby><span class='subj'>蜀兵</span><rt>蜀兵</rt></ruby><ruby><span class='verb'>恥笑</span><rt>恥笑</rt></ruby>，<ruby><span class='subj'>心中</span><rt>心中</rt></ruby><ruby><span class='adv'>猶豫不決</span><rt>猶豫不決</rt></ruby>。"
            },
            {
                original: "適庖官進雞湯。操見碗中有雞肋，因而有感於懷。",
                svo: "<span class='adv'>適</span><span class='subj'>庖官</span><span class='verb'>進</span><span class='obj'>雞湯</span>。<span class='subj'>操</span><span class='verb'>見</span><span class='adv'>碗中</span><span class='verb'>有</span><span class='obj'>雞肋</span>，<span class='adv'>因而</span><span class='verb'>有感於懷</span>。",
                svo_trans: "<ruby><span class='adv'>適</span><rt>適逢</rt></ruby><ruby><span class='subj'>庖官</span><rt>廚房官員</rt></ruby><ruby><span class='verb'>進</span><rt>送上</rt></ruby><ruby><span class='obj'>雞湯</span><rt>雞湯</rt></ruby>。<ruby><span class='subj'>操</span><rt>曹操</rt></ruby><ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='adv'>碗中</span><rt>碗中</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>雞肋</span><rt>雞肋</rt></ruby>，<ruby><span class='adv'>因而</span><rt>因而</rt></ruby><ruby><span class='verb'>有感於懷</span><rt>心中有所感觸</rt></ruby>。"
            },
            {
                original: "修曰：「雞肋者，食之無肉，棄之有味。今進不能勝，退恐人笑，在此無益，不如早歸。」",
                svo: "<span class='subj'>修</span><span class='verb'>曰</span>：「<span class='subj'>雞肋者</span>，<span class='verb'>食之</span><span class='verb'>無肉</span>，<span class='verb'>棄之</span><span class='verb'>有味</span>。<span class='adv'>今</span><span class='verb'>進不能勝</span>，<span class='verb'>退恐人笑</span>，<span class='adv'>在此無益</span>，<span class='adv'>不如</span><span class='adv'>早</span><span class='verb'>歸</span>。」",
                svo_trans: "<ruby><span class='subj'>修</span><rt>楊修</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>雞肋者</span><rt>雞肋這種東西</rt></ruby>，<ruby><span class='verb'>食之</span><rt>吃它</rt></ruby><ruby><span class='verb'>無肉</span><rt>沒有肉</rt></ruby>，<ruby><span class='verb'>棄之</span><rt>扔掉它</rt></ruby><ruby><span class='verb'>有味</span><rt>又有點味道</rt></ruby>。<ruby><span class='adv'>今</span><rt>如今</rt></ruby><ruby><span class='verb'>進不能勝</span><rt>前進不能取勝</rt></ruby>，<ruby><span class='verb'>退恐人笑</span><rt>退兵恐怕被人恥笑</rt></ruby>，<ruby><span class='adv'>在此無益</span><rt>留在這裡沒有好處</rt></ruby>，<ruby><span class='adv'>不如</span><rt>不如</rt></ruby><ruby><span class='adv'>早</span><rt>早日</rt></ruby><ruby><span class='verb'>歸</span><rt>回去</rt></ruby>。」"
            },
            {
                original: "操大怒曰：「汝怎敢造言，亂我軍心！」喝刀斧手推出斬之，將首級號令於轅門之外。",
                svo: "<span class='subj'>操</span><span class='adv'>大怒</span><span class='verb'>曰</span>：「<span class='subj'>汝</span><span class='adv'>怎敢</span><span class='verb'>造言</span>，<span class='verb'>亂</span><span class='attr'>我</span><span class='obj'>軍心</span>！」<span class='verb'>喝</span><span class='subj'>刀斧手</span><span class='verb'>推出</span><span class='verb'>斬</span><span class='obj'>之</span>，<span class='verb'>將</span><span class='obj'>首級</span><span class='verb'>號令</span><span class='adv'>於轅門之外</span>。",
                svo_trans: "<ruby><span class='subj'>操</span><rt>曹操</rt></ruby><ruby><span class='adv'>大怒</span><rt>大怒</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝</span><rt>你</rt></ruby><ruby><span class='adv'>怎敢</span><rt>怎麼敢</rt></ruby><ruby><span class='verb'>造言</span><rt>造謠</rt></ruby>，<ruby><span class='verb'>亂</span><rt>擾亂</rt></ruby><ruby><span class='attr'>我</span><span class='obj'>軍心</span><rt>我軍軍心</rt></ruby>！」<ruby><span class='verb'>喝</span><rt>喝令</rt></ruby><ruby><span class='subj'>刀斧手</span><rt>刀斧手</rt></ruby><ruby><span class='verb'>推出</span><rt>推出去</rt></ruby><ruby><span class='verb'>斬</span><rt>斬</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby>，<ruby><span class='verb'>將</span><rt>把</rt></ruby><ruby><span class='obj'>首級</span><rt>首級</rt></ruby><ruby><span class='verb'>號令</span><rt>示眾</rt></ruby><ruby><span class='adv'>於轅門之外</span><rt>在軍營轅門外</rt></ruby>。"
            }
        ]
    },
    maiganzheyan: {
        title: "賣柑者言",
        author: "劉基",
        level: 4,
        sentences: [
            {
                original: "杭有賣果者，善藏柑，涉寒暑不潰。",
                svo: "<span class='subj'>杭</span><span class='verb'>有</span><span class='attr'>賣果</span><span class='obj'>者</span>，<span class='adv'>善</span><span class='verb'>藏</span><span class='obj'>柑</span>，<span class='verb'>涉</span><span class='obj'>寒暑</span><span class='adv'>不</span><span class='verb'>潰</span>。",
                svo_trans: "<ruby><span class='subj'>杭</span><rt>杭州</rt></ruby><ruby><span class='verb'>有</span><rt>有個</rt></ruby><ruby><span class='attr'>賣果</span><span class='obj'>者</span><rt>賣水果的人</rt></ruby>，<ruby><span class='adv'>善</span><rt>善於</rt></ruby><ruby><span class='verb'>藏</span><rt>儲藏</rt></ruby><ruby><span class='obj'>柑</span><rt>柑子</rt></ruby>，<ruby><span class='verb'>涉</span><rt>經歷</rt></ruby><ruby><span class='obj'>寒暑</span><rt>寒暑</rt></ruby><ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>潰</span><rt>腐爛</rt></ruby>。"
            },
            {
                original: "出之燁然，玉質而金色。剖其中，乾若敗絮。",
                svo: "<span class='verb'>出</span><span class='obj'>之</span><span class='verb'>燁然</span>，<span class='subj'>玉質</span>而<span class='verb'>金色</span>。<span class='verb'>剖</span><span class='attr'>其</span><span class='obj'>中</span>，<span class='adv'>乾</span><span class='adv'>若</span><span class='obj'>敗絮</span>。",
                svo_trans: "<ruby><span class='verb'>出</span><rt>拿出來</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby><ruby><span class='verb'>燁然</span><rt>光澤鮮豔</rt></ruby>，<ruby><span class='subj'>玉質</span><rt>質地像玉</rt></ruby>而<ruby><span class='verb'>金色</span><rt>顏色金黃</rt></ruby>。<ruby><span class='verb'>剖</span><rt>剖開</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>中</span><rt>它的裡面</rt></ruby>，<ruby><span class='adv'>乾</span><rt>乾枯</rt></ruby><ruby><span class='adv'>若</span><rt>像</rt></ruby><ruby><span class='obj'>敗絮</span><rt>破敗的棉絮</rt></ruby>。"
            },
            {
                original: "吾業是有年矣，吾賴是以食吾軀。",
                svo: "<span class='subj'>吾</span><span class='adv'>業是</span><span class='verb'>有年矣</span>，<span class='subj'>吾</span><span class='verb'>賴是</span><span class='adv'>以</span><span class='verb'>食</span><span class='attr'>吾</span><span class='obj'>軀</span>。",
                svo_trans: "<ruby><span class='subj'>吾</span><rt>我</rt></ruby><ruby><span class='adv'>業是</span><span class='verb'>有年矣</span><rt>從事這行業多年了</rt></ruby>，<ruby><span class='subj'>吾</span><rt>我</rt></ruby><ruby><span class='verb'>賴是</span><span class='adv'>以</span><rt>靠這個來</rt></ruby><ruby><span class='verb'>食</span><rt>養活</rt></ruby><ruby><span class='attr'>吾</span><span class='obj'>軀</span><rt>我的身體</rt></ruby>。"
            },
            {
                original: "今子是之不察，而以察吾柑！",
                svo: "<span class='adv'>今</span><span class='subj'>子</span><span class='adv'>是之不察</span>，而<span class='adv'>以</span><span class='verb'>察</span><span class='attr'>吾</span><span class='obj'>柑</span>！",
                svo_trans: "<ruby><span class='adv'>今</span><rt>如今</rt></ruby><ruby><span class='subj'>子</span><rt>您</rt></ruby><ruby><span class='adv'>是之不察</span><rt>這點不去明察</rt></ruby>，卻<ruby><span class='adv'>以</span><rt>來</rt></ruby><ruby><span class='verb'>察</span><rt>挑剔</rt></ruby><ruby><span class='attr'>吾</span><span class='obj'>柑</span><rt>我的柑子</rt></ruby>！"
            }
        ]
    },
    manjingyouji: {
        title: "滿井遊記",
        author: "袁宏道",
        level: 4,
        sentences: [
            {
                original: "燕地寒，花朝節後，餘寒猶厲。",
                svo: "<span class='subj'>燕地</span><span class='verb'>寒</span>，<span class='subj'>花朝節後</span>，<span class='subj'>餘寒</span><span class='adv'>猶</span><span class='verb'>厲</span>。",
                svo_trans: "<ruby><span class='subj'>燕地</span><rt>北京一帶</rt></ruby><ruby><span class='verb'>寒</span><rt>寒冷</rt></ruby>，<ruby><span class='subj'>花朝節後</span><rt>花朝節之後</rt></ruby>，<ruby><span class='subj'>餘寒</span><rt>殘留的寒氣</rt></ruby><ruby><span class='adv'>猶</span><rt>仍然</rt></ruby><ruby><span class='verb'>厲</span><rt>猛烈</rt></ruby>。"
            },
            {
                original: "凍風時作，作則飛沙走礫。",
                svo: "<span class='subj'>凍風</span><span class='adv'>時</span><span class='verb'>作</span>，<span class='verb'>作</span><span class='adv'>則</span><span class='verb'>飛沙走礫</span>。",
                svo_trans: "<ruby><span class='subj'>凍風</span><rt>冷風</rt></ruby><ruby><span class='adv'>時</span><rt>時常</rt></ruby><ruby><span class='verb'>作</span><rt>颳起</rt></ruby>，<ruby><span class='verb'>作</span><rt>颳起時</rt></ruby><ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>飛沙走礫</span><rt>飛沙走石</rt></ruby>。"
            },
            {
                original: "高柳夾堤，土膏微潤，一望空闊，若脫籠之鵠。",
                svo: "<span class='subj'>高柳</span><span class='verb'>夾</span><span class='obj'>堤</span>，<span class='subj'>土膏</span><span class='adv'>微</span><span class='verb'>潤</span>，<span class='adv'>一望</span><span class='adv'>空闊</span>，<span class='adv'>若</span><span class='attr'>脫籠之</span><span class='obj'>鵠</span>。",
                svo_trans: "<ruby><span class='subj'>高柳</span><rt>高大的柳樹</rt></ruby><ruby><span class='verb'>夾</span><rt>夾立在</rt></ruby><ruby><span class='obj'>堤</span><rt>堤岸兩旁</rt></ruby>，<ruby><span class='subj'>土膏</span><rt>土壤</rt></ruby><ruby><span class='adv'>微</span><rt>微微</rt></ruby><ruby><span class='verb'>潤</span><rt>濕潤</rt></ruby>，<ruby><span class='adv'>一望</span><rt>放眼一望</rt></ruby><ruby><span class='adv'>空闊</span><rt>空曠遼闊</rt></ruby>，<ruby><span class='adv'>若</span><rt>如同</rt></ruby><ruby><span class='attr'>脫籠之</span><span class='obj'>鵠</span><rt>衝出籠子的天鵝</rt></ruby>。"
            },
            {
                original: "凡曝沙之鳥，呷浪之鱗，悠然自得，毛羽鱗鬣之間，皆有喜氣。",
                svo: "<span class='adv'>凡</span><span class='attr'>曝沙之</span><span class='subj'>鳥</span>，<span class='attr'>呷浪之</span><span class='subj'>鱗</span>，<span class='adv'>悠然自得</span>，<span class='adv'>毛羽鱗鬣之間</span>，<span class='adv'>皆</span><span class='verb'>有</span><span class='obj'>喜氣</span>。",
                svo_trans: "<ruby><span class='adv'>凡</span><rt>凡是</rt></ruby><ruby><span class='attr'>曝沙之</span><span class='subj'>鳥</span><rt>在沙灘上曬太陽的鳥</rt></ruby>，<ruby><span class='attr'>呷浪之</span><span class='subj'>鱗</span><rt>在浪邊戲水的魚</rt></ruby>，<ruby><span class='adv'>悠然自得</span><rt>悠然自得</rt></ruby>，<ruby><span class='adv'>毛羽鱗鬣之間</span><rt>在羽毛鱗鰭之間</rt></ruby>，<ruby><span class='adv'>皆</span><rt>都</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>喜氣</span><rt>喜悅的氣息</rt></ruby>。"
            }
        ]
    },
    zuozhongyi: {
        title: "左忠毅公軼事",
        author: "方苞",
        level: 4,
        sentences: [
            {
                original: "先君子嘗言，鄉先輩左忠毅公視學京畿。",
                svo: "<span class='subj'>先君子</span><span class='adv'>嘗</span><span class='verb'>言</span>，<span class='subj'>鄉先輩左忠毅公</span><span class='verb'>視學</span><span class='obj'>京畿</span>。",
                svo_trans: "<ruby><span class='subj'>先君子</span><rt>我已故的父親</rt></ruby><ruby><span class='adv'>嘗</span><rt>曾經</rt></ruby><ruby><span class='verb'>言</span><rt>說</rt></ruby>，<ruby><span class='subj'>鄉先輩左忠毅公</span><rt>同鄉前輩左光斗</rt></ruby><ruby><span class='verb'>視學</span><rt>視察學務</rt></ruby><ruby><span class='obj'>京畿</span><rt>京城地區</rt></ruby>。"
            },
            {
                original: "一日，風雪嚴寒，從數騎出，微行入古寺。",
                svo: "<span class='adv'>一日</span>，<span class='subj'>風雪嚴寒</span>，<span class='verb'>從</span><span class='attr'>數</span><span class='obj'>騎</span><span class='verb'>出</span>，<span class='verb'>微行</span><span class='verb'>入</span><span class='obj'>古寺</span>。",
                svo_trans: "<ruby><span class='adv'>一日</span><rt>有一天</rt></ruby>，<ruby><span class='subj'>風雪嚴寒</span><rt>風雪嚴寒</rt></ruby>，<ruby><span class='verb'>從</span><rt>帶著</rt></ruby><ruby><span class='attr'>數</span><span class='obj'>騎</span><rt>幾個騎馬的隨從</rt></ruby><ruby><span class='verb'>出</span><rt>外出</rt></ruby>，<ruby><span class='verb'>微行</span><rt>微服出行</rt></ruby><ruby><span class='verb'>入</span><rt>進入</rt></ruby><ruby><span class='obj'>古寺</span><rt>一座古寺</rt></ruby>。"
            },
            {
                original: "廡下一生伏案臥，文方成草。公閱畢，即解貂覆生，為掩戶。",
                svo: "<span class='adv'>廡下</span><span class='attr'>一</span><span class='subj'>生</span><span class='verb'>伏案</span><span class='verb'>臥</span>，<span class='subj'>文</span><span class='adv'>方</span><span class='verb'>成草</span>。<span class='subj'>公</span><span class='verb'>閱畢</span>，<span class='adv'>即</span><span class='verb'>解</span><span class='obj'>貂</span><span class='verb'>覆</span><span class='obj'>生</span>，<span class='adv'>為</span><span class='verb'>掩</span><span class='obj'>戶</span>。",
                svo_trans: "<ruby><span class='adv'>廡下</span><rt>廊下</rt></ruby><ruby><span class='attr'>一</span><span class='subj'>生</span><rt>一個書生</rt></ruby><ruby><span class='verb'>伏案</span><rt>趴在桌上</rt></ruby><ruby><span class='verb'>臥</span><rt>睡著了</rt></ruby>，<ruby><span class='subj'>文</span><rt>文章</rt></ruby><ruby><span class='adv'>方</span><rt>剛</rt></ruby><ruby><span class='verb'>成草</span><rt>寫成草稿</rt></ruby>。<ruby><span class='subj'>公</span><rt>左公</rt></ruby><ruby><span class='verb'>閱畢</span><rt>看完後</rt></ruby>，<ruby><span class='adv'>即</span><rt>就</rt></ruby><ruby><span class='verb'>解</span><rt>解下</rt></ruby><ruby><span class='obj'>貂</span><rt>貂皮大衣</rt></ruby><ruby><span class='verb'>覆</span><rt>蓋在</rt></ruby><ruby><span class='obj'>生</span><rt>書生身上</rt></ruby>，<ruby><span class='adv'>為</span><rt>替他</rt></ruby><ruby><span class='verb'>掩</span><rt>關上</rt></ruby><ruby><span class='obj'>戶</span><rt>門</rt></ruby>。"
            },
            {
                original: "史前跪抱公膝而嗚咽。公辨其聲，而目不可開，乃奮臂以指撥眥，目光如炬。",
                svo: "<span class='subj'>史</span><span class='adv'>前</span><span class='verb'>跪</span><span class='verb'>抱</span><span class='attr'>公</span><span class='obj'>膝</span>而<span class='verb'>嗚咽</span>。<span class='subj'>公</span><span class='verb'>辨</span><span class='attr'>其</span><span class='obj'>聲</span>，而<span class='subj'>目</span><span class='adv'>不可</span><span class='verb'>開</span>，乃<span class='verb'>奮臂</span><span class='adv'>以指</span><span class='verb'>撥</span><span class='obj'>眥</span>，<span class='subj'>目光</span><span class='verb'>如炬</span>。",
                svo_trans: "<ruby><span class='subj'>史</span><rt>史可法</rt></ruby><ruby><span class='adv'>前</span><rt>上前</rt></ruby><ruby><span class='verb'>跪</span><rt>跪下</rt></ruby><ruby><span class='verb'>抱</span><rt>抱住</rt></ruby><ruby><span class='attr'>公</span><span class='obj'>膝</span><rt>左公的膝蓋</rt></ruby>而<ruby><span class='verb'>嗚咽</span><rt>低聲哭泣</rt></ruby>。<ruby><span class='subj'>公</span><rt>左公</rt></ruby><ruby><span class='verb'>辨</span><rt>辨認出</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>聲</span><rt>他的聲音</rt></ruby>，但<ruby><span class='subj'>目</span><rt>眼睛</rt></ruby><ruby><span class='adv'>不可</span><rt>無法</rt></ruby><ruby><span class='verb'>開</span><rt>睜開</rt></ruby>，於是<ruby><span class='verb'>奮臂</span><rt>奮力抬起手臂</rt></ruby><ruby><span class='adv'>以指</span><rt>用手指</rt></ruby><ruby><span class='verb'>撥</span><rt>撥開</rt></ruby><ruby><span class='obj'>眥</span><rt>眼眶</rt></ruby>，<ruby><span class='subj'>目光</span><rt>目光</rt></ruby><ruby><span class='verb'>如炬</span><rt>像火炬一樣明亮</rt></ruby>。"
            }
        ]
    },
    guiqulaici: {
        title: "歸去來辭並序",
        author: "陶淵明",
        level: 4,
        sentences: [
            {
                original: "歸去來兮，田園將蕪胡不歸？",
                svo: "<span class='verb'>歸去來兮</span>，<span class='subj'>田園</span><span class='adv'>將</span><span class='verb'>蕪</span><span class='adv'>胡不</span><span class='verb'>歸</span>？",
                svo_trans: "<ruby><span class='verb'>歸去來兮</span><rt>歸去吧</rt></ruby>，<ruby><span class='subj'>田園</span><rt>田園</rt></ruby><ruby><span class='adv'>將</span><rt>快要</rt></ruby><ruby><span class='verb'>蕪</span><rt>荒蕪</rt></ruby>了，<ruby><span class='adv'>胡不</span><rt>為什麼不</rt></ruby><ruby><span class='verb'>歸</span><rt>回去</rt></ruby>？"
            },
            {
                original: "既自以心為形役，奚惆悵而獨悲？",
                svo: "<span class='adv'>既</span><span class='adv'>自以</span><span class='subj'>心</span><span class='verb'>為</span><span class='obj'>形役</span>，<span class='adv'>奚</span><span class='verb'>惆悵</span>而<span class='adv'>獨</span><span class='verb'>悲</span>？",
                svo_trans: "<ruby><span class='adv'>既</span><rt>既然</rt></ruby><ruby><span class='adv'>自以</span><rt>自己讓</rt></ruby><ruby><span class='subj'>心</span><rt>心靈</rt></ruby><ruby><span class='verb'>為</span><rt>被</rt></ruby><ruby><span class='obj'>形役</span><rt>身體驅使</rt></ruby>，<ruby><span class='adv'>奚</span><rt>為什麼</rt></ruby><ruby><span class='verb'>惆悵</span><rt>失意</rt></ruby>而<ruby><span class='adv'>獨</span><rt>獨自</rt></ruby><ruby><span class='verb'>悲</span><rt>悲傷</rt></ruby>？"
            },
            {
                original: "悟已往之不諫，知來者之可追。",
                svo: "<span class='verb'>悟</span><span class='attr'>已往之</span><span class='obj'>不諫</span>，<span class='verb'>知</span><span class='attr'>來者之</span><span class='obj'>可追</span>。",
                svo_trans: "<ruby><span class='verb'>悟</span><rt>覺悟到</rt></ruby><ruby><span class='attr'>已往之</span><span class='obj'>不諫</span><rt>過去的事已無法挽回</rt></ruby>，<ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='attr'>來者之</span><span class='obj'>可追</span><rt>未來的事還可補救</rt></ruby>。"
            },
            {
                original: "實迷途其未遠，覺今是而昨非。",
                svo: "<span class='adv'>實</span><span class='subj'>迷途</span><span class='adv'>其未遠</span>，<span class='verb'>覺</span><span class='adv'>今是</span>而<span class='adv'>昨非</span>。",
                svo_trans: "<ruby><span class='adv'>實</span><rt>確實</rt></ruby><ruby><span class='subj'>迷途</span><rt>誤入迷途</rt></ruby><ruby><span class='adv'>其未遠</span><rt>還不算太遠</rt></ruby>，<ruby><span class='verb'>覺</span><rt>覺悟到</rt></ruby><ruby><span class='adv'>今是</span><rt>今天正確</rt></ruby>而<ruby><span class='adv'>昨非</span><rt>昨天錯誤</rt></ruby>。"
            },
            {
                original: "舟遙遙以輕颺，風飄飄而吹衣。",
                svo: "<span class='subj'>舟</span><span class='adv'>遙遙</span><span class='adv'>以</span><span class='verb'>輕颺</span>，<span class='subj'>風</span><span class='adv'>飄飄</span>而<span class='verb'>吹</span><span class='obj'>衣</span>。",
                svo_trans: "<ruby><span class='subj'>舟</span><rt>小船</rt></ruby><ruby><span class='adv'>遙遙</span><rt>輕輕地</rt></ruby><ruby><span class='adv'>以</span><rt>而</rt></ruby><ruby><span class='verb'>輕颺</span><rt>飄揚前行</rt></ruby>，<ruby><span class='subj'>風</span><rt>風</rt></ruby><ruby><span class='adv'>飄飄</span><rt>飄飄地</rt></ruby>而<ruby><span class='verb'>吹</span><rt>吹動</rt></ruby><ruby><span class='obj'>衣</span><rt>我的衣裳</rt></ruby>。"
            }
        ]
    },
    yueyanglouji: {
        title: "岳陽樓記",
        author: "范仲淹",
        level: 4,
        sentences: [
            {
                original: "慶曆四年春，滕子京謫守巴陵郡。",
                svo: "<span class='adv'>慶曆四年春</span>，<span class='subj'>滕子京</span><span class='adv'>謫</span><span class='verb'>守</span><span class='obj'>巴陵郡</span>。",
                svo_trans: "<ruby><span class='adv'>慶曆四年春</span><rt>慶曆四年的春天</rt></ruby>，<ruby><span class='subj'>滕子京</span><rt>滕子京</rt></ruby><ruby><span class='adv'>謫</span><rt>被貶</rt></ruby><ruby><span class='verb'>守</span><rt>擔任</rt></ruby><ruby><span class='obj'>巴陵郡</span><rt>巴陵郡太守</rt></ruby>。"
            },
            {
                original: "越明年，政通人和，百廢具興。",
                svo: "<span class='adv'>越</span><span class='adv'>明年</span>，<span class='subj'>政</span><span class='verb'>通</span><span class='subj'>人</span><span class='verb'>和</span>，<span class='subj'>百廢</span><span class='adv'>具</span><span class='verb'>興</span>。",
                svo_trans: "<ruby><span class='adv'>越</span><rt>過了</rt></ruby><ruby><span class='adv'>明年</span><rt>第二年</rt></ruby>，<ruby><span class='subj'>政</span><rt>政事</rt></ruby><ruby><span class='verb'>通</span><rt>通暢</rt></ruby>、<ruby><span class='subj'>人</span><rt>人民</rt></ruby><ruby><span class='verb'>和</span><rt>和睦</rt></ruby>，<ruby><span class='subj'>百廢</span><rt>各種廢弛的事業</rt></ruby><ruby><span class='adv'>具</span><rt>全都</rt></ruby><ruby><span class='verb'>興</span><rt>興辦起來</rt></ruby>。"
            },
            {
                original: "乃重修岳陽樓，增其舊制。",
                svo: "<span class='adv'>乃</span><span class='adv'>重</span><span class='verb'>修</span><span class='obj'>岳陽樓</span>，<span class='verb'>增</span><span class='attr'>其</span><span class='attr'>舊</span><span class='obj'>制</span>。",
                svo_trans: "<ruby><span class='adv'>乃</span><rt>於是</rt></ruby><ruby><span class='adv'>重</span><rt>重新</rt></ruby><ruby><span class='verb'>修</span><rt>修建</rt></ruby><ruby><span class='obj'>岳陽樓</span><rt>岳陽樓</rt></ruby>，<ruby><span class='verb'>增</span><rt>擴大</rt></ruby><ruby><span class='attr'>其</span><rt>它</rt></ruby><ruby><span class='attr'>舊</span><span class='obj'>制</span><rt>原來的規模</rt></ruby>。"
            },
            {
                original: "予觀夫巴陵勝狀，在洞庭一湖。",
                svo: "<span class='subj'>予</span><span class='verb'>觀</span><span class='obj'>夫巴陵勝狀</span>，<span class='adv'>在</span><span class='obj'>洞庭一湖</span>。",
                svo_trans: "<ruby><span class='subj'>予</span><rt>我</rt></ruby><ruby><span class='verb'>觀</span><rt>觀看</rt></ruby><ruby><span class='obj'>夫巴陵勝狀</span><rt>那巴陵的美好景色</rt></ruby>，<ruby><span class='adv'>在</span><rt>在於</rt></ruby><ruby><span class='obj'>洞庭一湖</span><rt>洞庭湖</rt></ruby>。"
            },
            {
                original: "不以物喜，不以己悲。",
                svo: "<span class='adv'>不以物</span><span class='verb'>喜</span>，<span class='adv'>不以己</span><span class='verb'>悲</span>。",
                svo_trans: "<ruby><span class='adv'>不以物</span><rt>不因外物好壞</rt></ruby><ruby><span class='verb'>喜</span><rt>而喜</rt></ruby>，<ruby><span class='adv'>不以己</span><rt>不因自己得失</rt></ruby><ruby><span class='verb'>悲</span><rt>而悲</rt></ruby>。"
            },
            {
                original: "居廟堂之高，則憂其民；處江湖之遠，則憂其君。",
                svo: "<span class='verb'>居</span><span class='attr'>廟堂之</span><span class='obj'>高</span>，<span class='adv'>則</span><span class='verb'>憂</span><span class='attr'>其</span><span class='obj'>民</span>；<span class='verb'>處</span><span class='attr'>江湖之</span><span class='obj'>遠</span>，<span class='adv'>則</span><span class='verb'>憂</span><span class='attr'>其</span><span class='obj'>君</span>。",
                svo_trans: "<ruby><span class='verb'>居</span><rt>處在</rt></ruby><ruby><span class='attr'>廟堂之</span><span class='obj'>高</span><rt>高高的朝廷</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>憂</span><rt>擔憂</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>民</span><rt>百姓</rt></ruby>；<ruby><span class='verb'>處</span><rt>處在</rt></ruby><ruby><span class='attr'>江湖之</span><span class='obj'>遠</span><rt>遙遠的江湖</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>憂</span><rt>擔憂</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>君</span><rt>國君</rt></ruby>。"
            },
            {
                original: "先天下之憂而憂，後天下之樂而樂。",
                svo: "<span class='adv'>先天下之憂</span>而<span class='verb'>憂</span>，<span class='adv'>後天下之樂</span>而<span class='verb'>樂</span>。",
                svo_trans: "<ruby><span class='adv'>先天下之憂</span><rt>在天下人憂愁之前</rt></ruby>就<ruby><span class='verb'>憂</span><rt>憂愁</rt></ruby>，<ruby><span class='adv'>後天下之樂</span><rt>在天下人快樂之後</rt></ruby>才<ruby><span class='verb'>樂</span><rt>快樂</rt></ruby>。"
            }
        ]
    },
    liuguolun: {
        title: "六國論",
        author: "蘇洵",
        level: 4,
        sentences: [
            {
                original: "六國破滅，非兵不利，戰不善，弊在賂秦。",
                svo: "<span class='subj'>六國</span><span class='verb'>破滅</span>，<span class='adv'>非</span><span class='subj'>兵</span><span class='adv'>不</span><span class='verb'>利</span>，<span class='subj'>戰</span><span class='adv'>不</span><span class='verb'>善</span>，<span class='subj'>弊</span><span class='verb'>在</span><span class='obj'>賂秦</span>。",
                svo_trans: "<ruby><span class='subj'>六國</span><rt>六國</rt></ruby><ruby><span class='verb'>破滅</span><rt>滅亡</rt></ruby>，<ruby><span class='adv'>非</span><rt>不是</rt></ruby>因為<ruby><span class='subj'>兵</span><rt>兵器</rt></ruby><ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>利</span><rt>鋒利</rt></ruby>，<ruby><span class='subj'>戰</span><rt>戰爭</rt></ruby><ruby><span class='adv'>不</span><rt>打得</rt></ruby><ruby><span class='verb'>善</span><rt>不好</rt></ruby>，<ruby><span class='subj'>弊</span><rt>弊病</rt></ruby><ruby><span class='verb'>在</span><rt>在於</rt></ruby><ruby><span class='obj'>賂秦</span><rt>割地賄賂秦國</rt></ruby>。"
            },
            {
                original: "賂秦而力虧，破滅之道也。",
                svo: "<span class='verb'>賂</span><span class='obj'>秦</span>而<span class='subj'>力</span><span class='verb'>虧</span>，<span class='attr'>破滅之</span><span class='obj'>道</span>也。",
                svo_trans: "<ruby><span class='verb'>賂</span><rt>賄賂</rt></ruby><ruby><span class='obj'>秦</span><rt>秦國</rt></ruby>而導致<ruby><span class='subj'>力</span><rt>國力</rt></ruby><ruby><span class='verb'>虧</span><rt>虧損</rt></ruby>，這就是<ruby><span class='attr'>破滅之</span><span class='obj'>道</span><rt>滅亡的道理</rt></ruby>啊。"
            },
            {
                original: "不賂者以賂者喪。蓋失強援，不能獨完。",
                svo: "<span class='subj'>不賂者</span><span class='adv'>以</span><span class='subj'>賂者</span><span class='verb'>喪</span>。<span class='adv'>蓋</span><span class='verb'>失</span><span class='obj'>強援</span>，<span class='adv'>不能</span><span class='adv'>獨</span><span class='verb'>完</span>。",
                svo_trans: "<ruby><span class='subj'>不賂者</span><rt>不賄賂的國家</rt></ruby><ruby><span class='adv'>以</span><rt>因為</rt></ruby><ruby><span class='subj'>賂者</span><rt>賄賂的國家</rt></ruby><ruby><span class='verb'>喪</span><rt>而喪亡</rt></ruby>。<ruby><span class='adv'>蓋</span><rt>大概是</rt></ruby>失去了<ruby><span class='obj'>強援</rt></ruby><ruby><span class='verb'>失</span><rt>失去</rt></ruby>了<ruby><span class='obj'>強援</span><rt>強大的援助</rt></ruby>，<ruby><span class='adv'>不能</span><rt>不能</rt></ruby><ruby><span class='adv'>獨</span><rt>獨自</rt></ruby><ruby><span class='verb'>完</span><rt>保全</rt></ruby>。"
            },
            {
                original: "古人云：「以地事秦，猶抱薪救火，薪不盡，火不滅。」",
                svo: "<span class='subj'>古人</span><span class='verb'>云</span>：「<span class='adv'>以地</span><span class='verb'>事</span><span class='obj'>秦</span>，<span class='verb'>猶</span><span class='verb'>抱</span><span class='obj'>薪</span><span class='verb'>救</span><span class='obj'>火</span>，<span class='subj'>薪</span><span class='adv'>不</span><span class='verb'>盡</span>，<span class='subj'>火</span><span class='adv'>不</span><span class='verb'>滅</span>。」",
                svo_trans: "<ruby><span class='subj'>古人</span><rt>古人</rt></ruby><ruby><span class='verb'>云</span><rt>說</rt></ruby>：「<ruby><span class='adv'>以地</span><rt>拿土地</rt></ruby><ruby><span class='verb'>事</span><rt>侍奉</rt></ruby><ruby><span class='obj'>秦</span><rt>秦國</rt></ruby>，<ruby><span class='verb'>猶</span><rt>就像</rt></ruby><ruby><span class='verb'>抱</span><rt>抱著</rt></ruby><ruby><span class='obj'>薪</span><rt>柴草</rt></ruby><ruby><span class='verb'>救</span><rt>去救</rt></ruby><ruby><span class='obj'>火</span><rt>火</rt></ruby>，<ruby><span class='subj'>薪</span><rt>柴草</rt></ruby><ruby><span class='adv'>不</span><rt>沒有</rt></ruby><ruby><span class='verb'>盡</span><rt>燒完</rt></ruby>，<ruby><span class='subj'>火</span><rt>火</rt></ruby><ruby><span class='adv'>不</span><rt>不會</rt></ruby><ruby><span class='verb'>滅</span><rt>熄滅</rt></ruby>。」"
            },
            {
                original: "苟以天下之大，而從六國破亡之故事，是又在六國下矣。",
                svo: "<span class='adv'>苟</span><span class='adv'>以</span><span class='attr'>天下之</span><span class='subj'>大</span>，而<span class='verb'>從</span><span class='attr'>六國破亡之</span><span class='obj'>故事</span>，<span class='subj'>是</span><span class='adv'>又</span><span class='adv'>在</span><span class='attr'>六國</span><span class='obj'>下</span>矣。",
                svo_trans: "<ruby><span class='adv'>苟</span><rt>如果</rt></ruby><ruby><span class='adv'>以</span><rt>憑藉</rt></ruby><ruby><span class='attr'>天下之</span><span class='subj'>大</span><rt>偌大的天下</rt></ruby>，卻<ruby><span class='verb'>從</span><rt>重蹈</rt></ruby><ruby><span class='attr'>六國破亡之</span><span class='obj'>故事</span><rt>六國滅亡的舊事</rt></ruby>，<ruby><span class='subj'>是</span><rt>這</rt></ruby><ruby><span class='adv'>又</span><rt>又</rt></ruby><ruby><span class='adv'>在</span><rt>在</rt></ruby><ruby><span class='attr'>六國</span><span class='obj'>下</span><rt>六國之下</rt></ruby>了。"
            }
        ]
    },
        // ==================== 第二學習階段（小四至小六）====================
    mengmujiezi: {
        title: "孟母戒子",
        author: "劉向",
        level: 2,
        sentences: [
            {
                original: "孟子少時，誦，其母方織。",
                svo: "<span class='subj'>孟子</span><span class='adv'>少時</span>，<span class='verb'>誦</span>，<span class='attr'>其</span><span class='subj'>母</span><span class='adv'>方</span><span class='verb'>織</span>。",
                svo_trans: "<ruby><span class='subj'>孟子</span><rt>孟子</rt></ruby><ruby><span class='adv'>少時</span><rt>小時候</rt></ruby>，<ruby><span class='verb'>誦</span><rt>背誦</rt></ruby>，<ruby><span class='attr'>其</span><span class='subj'>母</span><rt>他的母親</rt></ruby><ruby><span class='adv'>方</span><rt>正在</rt></ruby><ruby><span class='verb'>織</span><rt>織布</rt></ruby>。"
            },
            {
                original: "孟子輟然中止，乃復進。",
                svo: "<span class='subj'>孟子</span><span class='adv'>輟然</span><span class='verb'>中止</span>，乃<span class='adv'>復</span><span class='verb'>進</span>。",
                svo_trans: "<ruby><span class='subj'>孟子</span><rt>孟子</rt></ruby><ruby><span class='adv'>輟然</span><rt>突然</rt></ruby><ruby><span class='verb'>中止</span><rt>停下來</rt></ruby>，<ruby><span class='adv'>復</span><rt>又</rt></ruby><ruby><span class='verb'>進</span><rt>繼續背誦</rt></ruby>。"
            },
            {
                original: "其母知其喧也，呼而問之曰：「何為中止？」",
                svo: "<span class='attr'>其</span><span class='subj'>母</span><span class='verb'>知</span><span class='attr'>其</span><span class='obj'>喧</span>也，<span class='verb'>呼</span>而<span class='verb'>問</span><span class='obj'>之</span><span class='verb'>曰</span>：「<span class='adv'>何為</span><span class='verb'>中止</span>？」",
                svo_trans: "<ruby><span class='attr'>其</span><span class='subj'>母</span><rt>他的母親</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>喧</span><rt>他因分心而忘記</rt></ruby>，<ruby><span class='verb'>呼</span><rt>喊他</rt></ruby>而<ruby><span class='verb'>問</span><rt>問</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='adv'>何為</span><rt>為什麼</rt></ruby><ruby><span class='verb'>中止</span><rt>停下來</rt></ruby>？」"
            },
            {
                original: "其母引刀裂其織，以此戒之。",
                svo: "<span class='attr'>其</span><span class='subj'>母</span><span class='verb'>引</span><span class='obj'>刀</span><span class='verb'>裂</span><span class='attr'>其</span><span class='obj'>織</span>，<span class='adv'>以此</span><span class='verb'>戒</span><span class='obj'>之</span>。",
                svo_trans: "<ruby><span class='attr'>其</span><span class='subj'>母</span><rt>他的母親</rt></ruby><ruby><span class='verb'>引</span><rt>拿起</rt></ruby><ruby><span class='obj'>刀</span><rt>刀子</rt></ruby><ruby><span class='verb'>裂</span><rt>割斷</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>織</span><rt>她織的布</rt></ruby>，<ruby><span class='adv'>以此</span><rt>用這件事</rt></ruby><ruby><span class='verb'>戒</span><rt>告誡</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby>。"
            }
        ]
    },
    zhejian: {
        title: "折箭",
        author: "佚名",
        level: 2,
        sentences: [
            {
                original: "阿豺有子二十人。阿豺謂曰：「汝等各奉吾一隻箭。」",
                svo: "<span class='subj'>阿豺</span><span class='verb'>有</span><span class='obj'>子二十人</span>。<span class='subj'>阿豺</span><span class='verb'>謂</span><span class='verb'>曰</span>：「<span class='subj'>汝等</span><span class='adv'>各</span><span class='verb'>奉</span><span class='obj'>吾一隻箭</span>。」",
                svo_trans: "<ruby><span class='subj'>阿豺</span><rt>阿豺</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>子二十人</span><rt>二十個兒子</rt></ruby>。<ruby><span class='subj'>阿豺</span><rt>阿豺</rt></ruby><ruby><span class='verb'>謂</span><rt>對他們</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝等</span><rt>你們</rt></ruby><ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='verb'>奉</span><rt>拿給</rt></ruby><ruby><span class='obj'>吾一隻箭</span><rt>我一隻箭</rt></ruby>。」"
            },
            {
                original: "折之，皆折。又曰：「汝等各奉吾一束箭。」",
                svo: "<span class='verb'>折</span><span class='obj'>之</span>，<span class='adv'>皆</span><span class='verb'>折</span>。<span class='adv'>又</span><span class='verb'>曰</span>：「<span class='subj'>汝等</span><span class='adv'>各</span><span class='verb'>奉</span><span class='obj'>吾一束箭</span>。」",
                svo_trans: "<ruby><span class='verb'>折</span><rt>折斷</rt></ruby><ruby><span class='obj'>之</span><rt>它們</rt></ruby>，<ruby><span class='adv'>皆</span><rt>全都</rt></ruby><ruby><span class='verb'>折</span><rt>折斷了</rt></ruby>。<ruby><span class='adv'>又</span><rt>又</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝等</span><rt>你們</rt></ruby><ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='verb'>奉</span><rt>拿給</rt></ruby><ruby><span class='obj'>吾一束箭</span><rt>我一束箭</rt></ruby>。」"
            },
            {
                original: "折之，不能折。",
                svo: "<span class='verb'>折</span><span class='obj'>之</span>，<span class='adv'>不能</span><span class='verb'>折</span>。",
                svo_trans: "<ruby><span class='verb'>折</span><rt>折斷</rt></ruby><ruby><span class='obj'>之</span><rt>這束箭</rt></ruby>，<ruby><span class='adv'>不能</span><rt>無法</rt></ruby><ruby><span class='verb'>折</span><rt>折斷</rt></ruby>。"
            },
            {
                original: "阿豺曰：「汝等知之乎？單者易折，眾則難摧。」",
                svo: "<span class='subj'>阿豺</span><span class='verb'>曰</span>：「<span class='subj'>汝等</span><span class='verb'>知</span><span class='obj'>之</span>乎？<span class='subj'>單者</span><span class='adv'>易</span><span class='verb'>折</span>，<span class='subj'>眾</span><span class='adv'>則</span><span class='adv'>難</span><span class='verb'>摧</span>。」",
                svo_trans: "<ruby><span class='subj'>阿豺</span><rt>阿豺</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝等</span><rt>你們</rt></ruby><ruby><span class='verb'>知</span><rt>懂得</rt></ruby><ruby><span class='obj'>之</span><rt>這個道理</rt></ruby>嗎？<ruby><span class='subj'>單者</span><rt>單獨的一根</rt></ruby><ruby><span class='adv'>易</span><rt>容易</rt></ruby><ruby><span class='verb'>折</span><rt>折斷</rt></ruby>，<ruby><span class='subj'>眾</span><rt>集合在一起</rt></ruby><ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='adv'>難</span><rt>難以</rt></ruby><ruby><span class='verb'>摧</span><rt>摧毀</rt></ruby>。」"
            }
        ]
    },

    // ==================== 第三學習階段（中一至中三）====================
    kezhi: {
        title: "客至",
        author: "杜甫",
        level: 3,
        sentences: [
            {
                original: "舍南舍北皆春水，但見群鷗日日來。",
                svo: "<span class='subj'>舍南舍北</span><span class='adv'>皆</span><span class='verb'>春水</span>，<span class='adv'>但</span><span class='verb'>見</span><span class='subj'>群鷗</span><span class='adv'>日日</span><span class='verb'>來</span>。",
                svo_trans: "<ruby><span class='subj'>舍南舍北</span><rt>草堂的南北</rt></ruby><ruby><span class='adv'>皆</span><rt>都是</rt></ruby><ruby><span class='verb'>春水</span><rt>春水</rt></ruby>，<ruby><span class='adv'>但</span><rt>只</rt></ruby><ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='subj'>群鷗</span><rt>成群的海鷗</rt></ruby><ruby><span class='adv'>日日</span><rt>每天</rt></ruby><ruby><span class='verb'>來</span><rt>飛來</rt></ruby>。"
            },
            {
                original: "花徑不曾緣客掃，蓬門今始為君開。",
                svo: "<span class='subj'>花徑</span><span class='adv'>不曾</span><span class='adv'>緣客</span><span class='verb'>掃</span>，<span class='subj'>蓬門</span><span class='adv'>今</span><span class='adv'>始</span><span class='adv'>為君</span><span class='verb'>開</span>。",
                svo_trans: "<ruby><span class='subj'>花徑</span><rt>開滿花的小路</rt></ruby><ruby><span class='adv'>不曾</span><rt>不曾</rt></ruby><ruby><span class='adv'>緣客</span><rt>因為客人</rt></ruby><ruby><span class='verb'>掃</span><rt>打掃</rt></ruby>，<ruby><span class='subj'>蓬門</span><rt>柴門</rt></ruby><ruby><span class='adv'>今</span><rt>今天</rt></ruby><ruby><span class='adv'>始</span><rt>才</rt></ruby><ruby><span class='adv'>為君</span><rt>為你</rt></ruby><ruby><span class='verb'>開</span><rt>打開</rt></ruby>。"
            },
            {
                original: "盤飧市遠無兼味，樽酒家貧只舊醅。",
                svo: "<span class='subj'>盤飧</span><span class='adv'>市遠</span><span class='adv'>無</span><span class='obj'>兼味</span>，<span class='subj'>樽酒</span><span class='adv'>家貧</span><span class='adv'>只</span><span class='verb'>舊醅</span>。",
                svo_trans: "<ruby><span class='subj'>盤飧</span><rt>盤中的菜餚</rt></ruby><ruby><span class='adv'>市遠</span><rt>離市集遠</rt></ruby><ruby><span class='adv'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>兼味</span><rt>多種美味</rt></ruby>，<ruby><span class='subj'>樽酒</span><rt>杯中的酒</rt></ruby><ruby><span class='adv'>家貧</span><rt>家境貧窮</rt></ruby><ruby><span class='adv'>只</span><rt>只有</rt></ruby><ruby><span class='verb'>舊醅</span><rt>陳舊的濁酒</rt></ruby>。"
            },
            {
                original: "肯與鄰翁相對飲，隔籬呼取盡餘杯。",
                svo: "<span class='verb'>肯與</span><span class='obj'>鄰翁</span><span class='adv'>相對</span><span class='verb'>飲</span>，<span class='adv'>隔籬</span><span class='verb'>呼取</span><span class='verb'>盡</span><span class='obj'>餘杯</span>。",
                svo_trans: "<ruby><span class='verb'>肯與</span><rt>如果肯和</rt></ruby><ruby><span class='obj'>鄰翁</span><rt>鄰居老翁</rt></ruby><ruby><span class='adv'>相對</span><rt>面對面</rt></ruby><ruby><span class='verb'>飲</span><rt>飲酒</rt></ruby>，<ruby><span class='adv'>隔籬</span><rt>隔著籬笆</rt></ruby><ruby><span class='verb'>呼取</span><rt>喊來</rt></ruby><ruby><span class='verb'>盡</span><rt>喝完</rt></ruby><ruby><span class='obj'>餘杯</span><rt>剩下的酒</rt></ruby>。"
            }
        ]
    },
    zouji: {
        title: "鄒忌諷齊王納諫",
        author: "戰國策",
        level: 3,
        sentences: [
            {
                original: "鄒忌修八尺有餘，而形貌昳麗。",
                svo: "<span class='subj'>鄒忌</span><span class='verb'>修</span><span class='attr'>八尺有餘</span>，而<span class='subj'>形貌</span><span class='verb'>昳麗</span>。",
                svo_trans: "<ruby><span class='subj'>鄒忌</span><rt>鄒忌</rt></ruby><ruby><span class='verb'>修</span><rt>身高</rt></ruby><ruby><span class='attr'>八尺有餘</span><rt>八尺多</rt></ruby>，<ruby><span class='subj'>形貌</span><rt>容貌</rt></ruby><ruby><span class='verb'>昳麗</span><rt>光艷美麗</rt></ruby>。"
            },
            {
                original: "朝服衣冠，窺鏡，謂其妻曰：「我孰與城北徐公美？」",
                svo: "<span class='adv'>朝</span><span class='verb'>服</span><span class='obj'>衣冠</span>，<span class='verb'>窺</span><span class='obj'>鏡</span>，<span class='verb'>謂</span><span class='attr'>其</span><span class='obj'>妻</span><span class='verb'>曰</span>：「<span class='subj'>我</span><span class='adv'>孰與</span><span class='obj'>城北徐公</span><span class='verb'>美</span>？」",
                svo_trans: "<ruby><span class='adv'>朝</span><rt>早晨</rt></ruby><ruby><span class='verb'>服</span><rt>穿戴</rt></ruby><ruby><span class='obj'>衣冠</span><rt>衣帽</rt></ruby>，<ruby><span class='verb'>窺</span><rt>照</rt></ruby><ruby><span class='obj'>鏡</span><rt>鏡子</rt></ruby>，<ruby><span class='verb'>謂</span><rt>對</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>妻</span><rt>他的妻子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>我</span><rt>我</rt></ruby><ruby><span class='adv'>孰與</span><rt>和……比，誰更</rt></ruby><ruby><span class='obj'>城北徐公</span><rt>城北的徐公</rt></ruby><ruby><span class='verb'>美</span><rt>美麗</rt></ruby>？」"
            },
            {
                original: "吾妻之美我者，私我也；妾之美我者，畏我也；客之美我者，欲有求於我也。",
                svo: "<span class='subj'>吾妻</span>之<span class='verb'>美</span><span class='obj'>我</span>者，<span class='verb'>私</span><span class='obj'>我</span>也；<span class='subj'>妾</span>之<span class='verb'>美</span><span class='obj'>我</span>者，<span class='verb'>畏</span><span class='obj'>我</span>也；<span class='subj'>客</span>之<span class='verb'>美</span><span class='obj'>我</span>者，<span class='verb'>欲有求</span><span class='adv'>於我</span>也。",
                svo_trans: "<ruby><span class='subj'>吾妻</span><rt>我的妻子</rt></ruby>認為我<ruby><span class='verb'>美</span><rt>美麗</rt></ruby>，是因為<ruby><span class='verb'>私</span><rt>偏愛</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby>；<ruby><span class='subj'>妾</span><rt>小妾</rt></ruby>認為我美，是因為<ruby><span class='verb'>畏</span><rt>害怕</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby>；<ruby><span class='subj'>客</span><rt>客人</rt></ruby>認為我美，是因為<ruby><span class='verb'>欲有求</span><rt>想有求於</rt></ruby><ruby><span class='adv'>於我</span><rt>我</rt></ruby>。"
            },
            {
                original: "乃下令：「群臣吏民，能面刺寡人之過者，受上賞。」",
                svo: "<span class='adv'>乃</span><span class='verb'>下令</span>：「<span class='subj'>群臣吏民</span>，<span class='adv'>能</span><span class='adv'>面</span><span class='verb'>刺</span><span class='attr'>寡人之</span><span class='obj'>過</span>者，<span class='verb'>受</span><span class='obj'>上賞</span>。」",
                svo_trans: "<ruby><span class='adv'>乃</span><rt>於是</rt></ruby><ruby><span class='verb'>下令</span><rt>下令</rt></ruby>：「<ruby><span class='subj'>群臣吏民</span><rt>所有大臣、官吏、百姓</rt></ruby>，<ruby><span class='adv'>能</span><rt>能夠</rt></ruby><ruby><span class='adv'>面</span><rt>當面</rt></ruby><ruby><span class='verb'>刺</span><rt>指責</rt></ruby><ruby><span class='attr'>寡人之</span><span class='obj'>過</span><rt>我的過錯</rt></ruby>的人，<ruby><span class='verb'>受</span><rt>接受</rt></ruby><ruby><span class='obj'>上賞</span><rt>上等獎賞</rt></ruby>。」"
            }
        ]
    },
    yugong: {
        title: "愚公移山",
        author: "列子",
        level: 3,
        sentences: [
            {
                original: "北山愚公者，年且九十，面山而居。",
                svo: "<span class='attr'>北山</span><span class='subj'>愚公</span><span class='obj'>者</span>，<span class='subj'>年</span><span class='adv'>且</span><span class='verb'>九十</span>，<span class='adv'>面山</span>而<span class='verb'>居</span>。",
                svo_trans: "<ruby><span class='attr'>北山</span><span class='subj'>愚公</span><rt>北山愚公</rt></ruby>，<ruby><span class='subj'>年</span><rt>年紀</rt></ruby><ruby><span class='adv'>且</span><rt>將近</rt></ruby><ruby><span class='verb'>九十</span><rt>九十歲</rt></ruby>，<ruby><span class='adv'>面山</span><rt>面對著山</rt></ruby>而<ruby><span class='verb'>居</span><rt>居住</rt></ruby>。"
            },
            {
                original: "懲山北之塞，出入之迂也，聚室而謀曰：「吾與汝俱平險，指通豫南，達於漢陰，可乎？」",
                svo: "<span class='verb'>懲</span><span class='attr'>山北之</span><span class='obj'>塞</span>，<span class='attr'>出入之</span><span class='obj'>迂</span>也，<span class='verb'>聚</span><span class='obj'>室</span>而<span class='verb'>謀</span><span class='verb'>曰</span>：「<span class='subj'>吾與汝</span><span class='adv'>俱</span><span class='verb'>平</span><span class='obj'>險</span>，<span class='verb'>指通</span><span class='obj'>豫南</span>，<span class='verb'>達於</span><span class='obj'>漢陰</span>，<span class='adv'>可乎</span>？」",
                svo_trans: "<ruby><span class='verb'>懲</span><rt>苦於</rt></ruby><ruby><span class='attr'>山北之</span><span class='obj'>塞</span><rt>山北的阻塞</rt></ruby>，<ruby><span class='attr'>出入之</span><span class='obj'>迂</span><rt>出入的迂迴</rt></ruby>，<ruby><span class='verb'>聚</span><rt>聚集</rt></ruby><ruby><span class='obj'>室</span><rt>全家</rt></ruby>而<ruby><span class='verb'>謀</span><rt>商量</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>吾與汝</span><rt>我和你們</rt></ruby><ruby><span class='adv'>俱</span><rt>一起</rt></ruby><ruby><span class='verb'>平</span><rt>剷平</rt></ruby><ruby><span class='obj'>險</span><rt>險阻</rt></ruby>，<ruby><span class='verb'>指通</span><rt>直通</rt></ruby><ruby><span class='obj'>豫南</span><rt>豫州南部</rt></ruby>，<ruby><span class='verb'>達於</span><rt>到達</rt></ruby><ruby><span class='obj'>漢陰</span><rt>漢水南岸</rt></ruby>，<ruby><span class='adv'>可乎</span><rt>可以嗎</rt></ruby>？」"
            },
            {
                original: "雖我之死，有子存焉。子又生孫，孫又生子；子又有子，子又有孫。子子孫孫，無窮匱也。",
                svo: "<span class='adv'>雖</span><span class='subj'>我</span>之<span class='verb'>死</span>，<span class='verb'>有</span><span class='obj'>子存</span>焉。<span class='subj'>子</span><span class='adv'>又</span><span class='verb'>生</span><span class='obj'>孫</span>，<span class='subj'>孫</span><span class='adv'>又</span><span class='verb'>生</span><span class='obj'>子</span>；<span class='subj'>子</span><span class='adv'>又</span><span class='verb'>有</span><span class='obj'>子</span>，<span class='subj'>子</span><span class='adv'>又</span><span class='verb'>有</span><span class='obj'>孫</span>。<span class='subj'>子子孫孫</span>，<span class='verb'>無窮匱</span>也。",
                svo_trans: "<ruby><span class='adv'>雖</span><rt>即使</rt></ruby><ruby><span class='subj'>我</span><rt>我</rt></ruby>死了，<ruby><span class='verb'>有</span><rt>還有</rt></ruby><ruby><span class='obj'>子存</span><rt>兒子在</rt></ruby>。<ruby><span class='subj'>子</span><rt>兒子</rt></ruby>又<ruby><span class='verb'>生</span><rt>生</rt></ruby><ruby><span class='obj'>孫</span><rt>孫子</rt></ruby>，<ruby><span class='subj'>孫</span><rt>孫子</rt></ruby>又<ruby><span class='verb'>生</span><rt>生</rt></ruby><ruby><span class='obj'>子</span><rt>兒子</rt></ruby>；<ruby><span class='subj'>子</span><rt>兒子</rt></ruby>又有<ruby><span class='obj'>子</span><rt>兒子</rt></ruby>，<ruby><span class='subj'>子</span><rt>兒子</rt></ruby>又有<ruby><span class='obj'>孫</span><rt>孫子</rt></ruby>。<ruby><span class='subj'>子子孫孫</span><rt>子子孫孫</rt></ruby>，<ruby><span class='verb'>無窮匱</span><rt>沒有窮盡</rt></ruby>。"
            }
        ]
    },
    datong: {
        title: "大同與小康",
        author: "禮記",
        level: 3,
        sentences: [
            {
                original: "大道之行也，天下為公。",
                svo: "<span class='subj'>大道之行</span>也，<span class='subj'>天下</span><span class='verb'>為</span><span class='obj'>公</span>。",
                svo_trans: "<ruby><span class='subj'>大道之行</span><rt>大道實行的時代</rt></ruby>，<ruby><span class='subj'>天下</span><rt>天下</rt></ruby><ruby><span class='verb'>為</span><rt>是</rt></ruby><ruby><span class='obj'>公</span><rt>公共的</rt></ruby>。"
            },
            {
                original: "選賢與能，講信修睦。",
                svo: "<span class='verb'>選</span><span class='obj'>賢</span><span class='verb'>與</span><span class='obj'>能</span>，<span class='verb'>講</span><span class='obj'>信</span><span class='verb'>修</span><span class='obj'>睦</span>。",
                svo_trans: "<ruby><span class='verb'>選</span><rt>選拔</rt></ruby><ruby><span class='obj'>賢</span><rt>賢德的人</rt></ruby>，<ruby><span class='verb'>與</span><rt>推舉</rt></ruby><ruby><span class='obj'>能</span><rt>能幹的人</rt></ruby>，<ruby><span class='verb'>講</span><rt>講求</rt></ruby><ruby><span class='obj'>信</span><rt>誠信</rt></ruby>，<ruby><span class='verb'>修</span><rt>培養</rt></ruby><ruby><span class='obj'>睦</span><rt>和睦</rt></ruby>。"
            },
            {
                original: "故人不獨親其親，不獨子其子。",
                svo: "<span class='adv'>故</span><span class='subj'>人</span><span class='adv'>不獨</span><span class='verb'>親</span><span class='attr'>其</span><span class='obj'>親</span>，<span class='adv'>不獨</span><span class='verb'>子</span><span class='attr'>其</span><span class='obj'>子</span>。",
                svo_trans: "<ruby><span class='adv'>故</span><rt>所以</rt></ruby><ruby><span class='subj'>人</span><rt>人們</rt></ruby><ruby><span class='adv'>不獨</span><rt>不只</rt></ruby><ruby><span class='verb'>親</span><rt>孝敬</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>親</span><rt>自己的父母</rt></ruby>，<ruby><span class='adv'>不獨</span><rt>不只</rt></ruby><ruby><span class='verb'>子</span><rt>疼愛</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>子</span><rt>自己的子女</rt></ruby>。"
            },
            {
                original: "貨惡其棄於地也，不必藏於己；力惡其不出於身也，不必為己。",
                svo: "<span class='subj'>貨</span><span class='verb'>惡</span><span class='attr'>其棄於地</span>也，<span class='adv'>不必</span><span class='verb'>藏於</span><span class='obj'>己</span>；<span class='subj'>力</span><span class='verb'>惡</span><span class='attr'>其不出於身</span>也，<span class='adv'>不必</span><span class='verb'>為</span><span class='obj'>己</span>。",
                svo_trans: "<ruby><span class='subj'>貨</span><rt>財物</rt></ruby>，<ruby><span class='verb'>惡</span><rt>厭惡</rt></ruby><ruby><span class='attr'>其棄於地</span><rt>它被丟棄在地上</rt></ruby>，<ruby><span class='adv'>不必</span><rt>不一定</rt></ruby><ruby><span class='verb'>藏於</span><rt>收藏在</rt></ruby><ruby><span class='obj'>己</span><rt>自己家裡</rt></ruby>；<ruby><span class='subj'>力</span><rt>力氣</rt></ruby>，<ruby><span class='verb'>惡</span><rt>厭惡</rt></ruby><ruby><span class='attr'>其不出於身</span><rt>它不出自自己身上</rt></ruby>，<ruby><span class='adv'>不必</span><rt>不一定</rt></ruby><ruby><span class='verb'>為</span><rt>為了</rt></ruby><ruby><span class='obj'>己</span><rt>自己</rt></ruby>。"
            }
        ]
    },
    xingxingchongxingxing: {
        title: "行行重行行",
        author: "古詩十九首",
        level: 3,
        sentences: [
            {
                original: "行行重行行，與君生別離。",
                svo: "<span class='adv'>行行</span><span class='adv'>重</span><span class='verb'>行行</span>，<span class='adv'>與</span><span class='obj'>君</span><span class='adv'>生</span><span class='verb'>別離</span>。",
                svo_trans: "<ruby><span class='adv'>行行</span><rt>走啊走</rt></ruby><ruby><span class='adv'>重</span><rt>又</rt></ruby><ruby><span class='verb'>行行</span><rt>走啊走</rt></ruby>，<ruby><span class='adv'>與</span><rt>和</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>生</span><rt>活生生地</rt></ruby><ruby><span class='verb'>別離</span><rt>分離</rt></ruby>。"
            },
            {
                original: "相去萬餘里，各在天一涯。",
                svo: "<span class='adv'>相</span><span class='verb'>去</span><span class='attr'>萬餘</span><span class='obj'>里</span>，<span class='adv'>各</span><span class='verb'>在</span><span class='attr'>天一</span><span class='obj'>涯</span>。",
                svo_trans: "<ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>去</span><rt>距離</rt></ruby><ruby><span class='attr'>萬餘</span><span class='obj'>里</span><rt>一萬多里</rt></ruby>，<ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='verb'>在</span><rt>在</rt></ruby><ruby><span class='attr'>天一</span><span class='obj'>涯</span><rt>天的一邊</rt></ruby>。"
            },
            {
                original: "道路阻且長，會面安可知？",
                svo: "<span class='subj'>道路</span><span class='verb'>阻且長</span>，<span class='subj'>會面</span><span class='adv'>安可</span><span class='verb'>知</span>？",
                svo_trans: "<ruby><span class='subj'>道路</span><rt>路途</rt></ruby><ruby><span class='verb'>阻且長</span><rt>險阻又漫長</rt></ruby>，<ruby><span class='subj'>會面</span><rt>見面</rt></ruby><ruby><span class='adv'>安可</span><rt>怎麼能</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby>？"
            },
            {
                original: "胡馬依北風，越鳥巢南枝。",
                svo: "<span class='attr'>胡</span><span class='subj'>馬</span><span class='verb'>依</span><span class='obj'>北風</span>，<span class='attr'>越</span><span class='subj'>鳥</span><span class='verb'>巢</span><span class='obj'>南枝</span>。",
                svo_trans: "<ruby><span class='attr'>胡</span><span class='subj'>馬</span><rt>北方的馬</rt></ruby><ruby><span class='verb'>依</span><rt>依戀</rt></ruby><ruby><span class='obj'>北風</span><rt>北風</rt></ruby>，<ruby><span class='attr'>越</span><span class='subj'>鳥</span><rt>南方的鳥</rt></ruby><ruby><span class='verb'>巢</span><rt>築巢</rt></ruby><ruby><span class='obj'>南枝</span><rt>南向的樹枝</rt></ruby>。"
            },
            {
                original: "相去日已遠，衣帶日已緩。",
                svo: "<span class='adv'>相</span><span class='verb'>去</span><span class='subj'>日</span><span class='adv'>已</span><span class='verb'>遠</span>，<span class='subj'>衣帶</span><span class='subj'>日</span><span class='adv'>已</span><span class='verb'>緩</span>。",
                svo_trans: "<ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>去</span><rt>分離</rt></ruby><ruby><span class='subj'>日</span><rt>日子</rt></ruby><ruby><span class='adv'>已</span><rt>已經</rt></ruby><ruby><span class='verb'>遠</span><rt>久遠</rt></ruby>，<ruby><span class='subj'>衣帶</span><rt>衣帶</rt></ruby><ruby><span class='subj'>日</span><rt>一天比一天</rt></ruby><ruby><span class='adv'>已</span><rt>顯得</rt></ruby><ruby><span class='verb'>緩</span><rt>寬鬆</rt></ruby>。"
            },
            {
                original: "棄捐勿復道，努力加餐飯。",
                svo: "<span class='verb'>棄捐</span><span class='adv'>勿復</span><span class='verb'>道</span>，<span class='verb'>努力</span><span class='verb'>加</span><span class='obj'>餐飯</span>。",
                svo_trans: "<ruby><span class='verb'>棄捐</span><rt>丟開</rt></ruby><ruby><span class='adv'>勿復</span><rt>不要再</rt></ruby><ruby><span class='verb'>道</span><rt>說</rt></ruby>，<ruby><span class='verb'>努力</span><rt>努力</rt></ruby><ruby><span class='verb'>加</span><rt>增加</rt></ruby><ruby><span class='obj'>餐飯</span><rt>飯量</rt></ruby>。"
            }
        ]
    },
    taohuayuanji: {
        title: "桃花源記",
        author: "陶淵明",
        level: 3,
        sentences: [
            {
                original: "晉太元中，武陵人捕魚為業。",
                svo: "<span class='adv'>晉太元中</span>，<span class='attr'>武陵</span><span class='subj'>人</span><span class='verb'>捕</span><span class='obj'>魚</span><span class='verb'>為</span><span class='obj'>業</span>。",
                svo_trans: "<ruby><span class='adv'>晉太元中</span><rt>東晉太元年間</rt></ruby>，<ruby><span class='attr'>武陵</span><span class='subj'>人</span><rt>武陵郡有個人</rt></ruby><ruby><span class='verb'>捕</span><rt>捕捉</rt></ruby><ruby><span class='obj'>魚</span><rt>魚</rt></ruby><ruby><span class='verb'>為</span><rt>作為</rt></ruby><ruby><span class='obj'>業</span><rt>職業</rt></ruby>。"
            },
            {
                original: "緣溪行，忘路之遠近。忽逢桃花林，夾岸數百步，中無雜樹，芳草鮮美，落英繽紛。",
                svo: "<span class='verb'>緣</span><span class='obj'>溪</span><span class='verb'>行</span>，<span class='verb'>忘</span><span class='attr'>路之</span><span class='obj'>遠近</span>。<span class='adv'>忽</span><span class='verb'>逢</span><span class='obj'>桃花林</span>，<span class='verb'>夾</span><span class='obj'>岸</span><span class='attr'>數百</span><span class='obj'>步</span>，<span class='adv'>中</span><span class='verb'>無</span><span class='attr'>雜</span><span class='obj'>樹</span>，<span class='subj'>芳草</span><span class='verb'>鮮美</span>，<span class='subj'>落英</span><span class='verb'>繽紛</span>。",
                svo_trans: "<ruby><span class='verb'>緣</span><rt>沿著</rt></ruby><ruby><span class='obj'>溪</span><rt>小溪</rt></ruby><ruby><span class='verb'>行</span><rt>走</rt></ruby>，<ruby><span class='verb'>忘</span><rt>忘記</rt></ruby><ruby><span class='attr'>路之</span><span class='obj'>遠近</span><rt>路途的遠近</rt></ruby>。<ruby><span class='adv'>忽</span><rt>忽然</rt></ruby><ruby><span class='verb'>逢</span><rt>遇到</rt></ruby><ruby><span class='obj'>桃花林</span><rt>一片桃花林</rt></ruby>，<ruby><span class='verb'>夾</span><rt>夾在</rt></ruby><ruby><span class='obj'>岸</span><rt>溪流兩岸</rt></ruby><ruby><span class='attr'>數百</span><span class='obj'>步</span><rt>長達幾百步</rt></ruby>，<ruby><span class='adv'>中</span><rt>中間</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='attr'>雜</span><span class='obj'>樹</span><rt>別的樹木</rt></ruby>，<ruby><span class='subj'>芳草</span><rt>花草</rt></ruby><ruby><span class='verb'>鮮美</span><rt>鮮嫩美麗</rt></ruby>，<ruby><span class='subj'>落英</span><rt>落花</rt></ruby><ruby><span class='verb'>繽紛</span><rt>繁多雜亂</rt></ruby>。"
            },
            {
                original: "土地平曠，屋舍儼然，有良田美池桑竹之屬。阡陌交通，雞犬相聞。",
                svo: "<span class='subj'>土地</span><span class='verb'>平曠</span>，<span class='subj'>屋舍</span><span class='verb'>儼然</span>，<span class='verb'>有</span><span class='obj'>良田美池桑竹之屬</span>。<span class='subj'>阡陌</span><span class='verb'>交通</span>，<span class='subj'>雞犬</span><span class='verb'>相聞</span>。",
                svo_trans: "<ruby><span class='subj'>土地</span><rt>土地</rt></ruby><ruby><span class='verb'>平曠</span><rt>平坦開闊</rt></ruby>，<ruby><span class='subj'>屋舍</span><rt>房屋</rt></ruby><ruby><span class='verb'>儼然</span><rt>整齊的樣子</rt></ruby>，<ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>良田美池桑竹之屬</span><rt>良田、美池、桑樹、竹子之類</rt></ruby>。<ruby><span class='subj'>阡陌</span><rt>田間小路</rt></ruby><ruby><span class='verb'>交通</span><rt>交錯相通</rt></ruby>，<ruby><span class='subj'>雞犬</span><rt>雞和狗</rt></ruby><ruby><span class='verb'>相聞</span><rt>互相聽見</rt></ruby>。"
            }
        ]
    },
    mulanshi: {
        title: "木蘭詩",
        author: "佚名",
        level: 3,
        sentences: [
            {
                original: "唧唧復唧唧，木蘭當戶織。不聞機杼聲，唯聞女嘆息。",
                svo: "<span class='adv'>唧唧復唧唧</span>，<span class='subj'>木蘭</span><span class='adv'>當戶</span><span class='verb'>織</span>。<span class='adv'>不</span><span class='verb'>聞</span><span class='attr'>機杼</span><span class='obj'>聲</span>，<span class='adv'>唯</span><span class='verb'>聞</span><span class='attr'>女</span><span class='obj'>嘆息</span>。",
                svo_trans: "<ruby><span class='adv'>唧唧復唧唧</span><rt>嘆息聲一陣又一陣</rt></ruby>，<ruby><span class='subj'>木蘭</span><rt>木蘭</rt></ruby><ruby><span class='adv'>當戶</span><rt>對著門</rt></ruby><ruby><span class='verb'>織</span><rt>織布</rt></ruby>。<ruby><span class='adv'>不</span><rt>聽不到</rt></ruby><ruby><span class='verb'>聞</span><rt>聽見</rt></ruby><ruby><span class='attr'>機杼</span><span class='obj'>聲</span><rt>織布機的聲音</rt></ruby>，<ruby><span class='adv'>唯</span><rt>只</rt></ruby><ruby><span class='verb'>聞</span><rt>聽見</rt></ruby><ruby><span class='attr'>女</span><span class='obj'>嘆息</span><rt>木蘭的嘆息</rt></ruby>。"
            },
            {
                original: "願為市鞍馬，從此替爺征。",
                svo: "<span class='verb'>願</span><span class='verb'>為</span><span class='obj'>市鞍馬</span>，<span class='adv'>從此</span><span class='verb'>替</span><span class='obj'>爺</span><span class='verb'>征</span>。",
                svo_trans: "<ruby><span class='verb'>願</span><rt>希望</rt></ruby><ruby><span class='verb'>為</span><rt>為此</rt></ruby><ruby><span class='obj'>市鞍馬</span><rt>買馬鞍和戰馬</rt></ruby>，<ruby><span class='adv'>從此</span><rt>從此</rt></ruby><ruby><span class='verb'>替</span><rt>代替</rt></ruby><ruby><span class='obj'>爺</span><rt>父親</rt></ruby><ruby><span class='verb'>征</span><rt>出征</rt></ruby>。"
            },
            {
                original: "萬里赴戎機，關山度若飛。朔氣傳金柝，寒光照鐵衣。",
                svo: "<span class='attr'>萬里</span><span class='verb'>赴</span><span class='obj'>戎機</span>，<span class='subj'>關山</span><span class='verb'>度若飛</span>。<span class='subj'>朔氣</span><span class='verb'>傳</span><span class='obj'>金柝</span>，<span class='subj'>寒光</span><span class='verb'>照</span><span class='obj'>鐵衣</span>。",
                svo_trans: "<ruby><span class='attr'>萬里</span><rt>萬里</rt></ruby><ruby><span class='verb'>赴</span><rt>奔赴</rt></ruby><ruby><span class='obj'>戎機</span><rt>戰場</rt></ruby>，<ruby><span class='subj'>關山</span><rt>關隘山川</rt></ruby><ruby><span class='verb'>度若飛</span><rt>飛越而過</rt></ruby>。<ruby><span class='subj'>朔氣</span><rt>北方的寒氣</rt></ruby><ruby><span class='verb'>傳</span><rt>傳來</rt></ruby><ruby><span class='obj'>金柝</span><rt>刁斗聲</rt></ruby>，<ruby><span class='subj'>寒光</span><rt>寒冷的月光</rt></ruby><ruby><span class='verb'>照</span><rt>照耀</rt></ruby><ruby><span class='obj'>鐵衣</span><rt>鎧甲</rt></ruby>。"
            },
            {
                original: "雄兔腳撲朔，雌兔眼迷離；雙兔傍地走，安能辨我是雄雌？",
                svo: "<span class='attr'>雄</span><span class='subj'>兔</span><span class='subj'>腳</span><span class='verb'>撲朔</span>，<span class='attr'>雌</span><span class='subj'>兔</span><span class='subj'>眼</span><span class='verb'>迷離</span>；<span class='subj'>雙兔</span><span class='adv'>傍地</span><span class='verb'>走</span>，<span class='adv'>安能</span><span class='verb'>辨</span><span class='subj'>我</span><span class='verb'>是</span><span class='obj'>雄雌</span>？",
                svo_trans: "<ruby><span class='attr'>雄</span><span class='subj'>兔</span><rt>雄兔</rt></ruby><ruby><span class='subj'>腳</span><rt>的腳</rt></ruby><ruby><span class='verb'>撲朔</span><rt>時常動彈</rt></ruby>，<ruby><span class='attr'>雌</span><span class='subj'>兔</span><rt>雌兔</rt></ruby><ruby><span class='subj'>眼</span><rt>的眼睛</rt></ruby><ruby><span class='verb'>迷離</span><rt>常常瞇著</rt></ruby>；<ruby><span class='subj'>雙兔</span><rt>兩隻兔子</rt></ruby><ruby><span class='adv'>傍地</span><rt>貼著地面</rt></ruby><ruby><span class='verb'>走</span><rt>跑</rt></ruby>，<ruby><span class='adv'>安能</span><rt>怎麼能</rt></ruby><ruby><span class='verb'>辨</span><rt>分辨</rt></ruby><ruby><span class='subj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='obj'>雄雌</span><rt>雄是雌</rt></ruby>？"
            }
        ]
    },
    songdushaofu: {
        title: "送杜少府之任蜀州",
        author: "王勃",
        level: 3,
        sentences: [
            {
                original: "城闕輔三秦，風煙望五津。",
                svo: "<span class='subj'>城闕</span><span class='verb'>輔</span><span class='attr'>三</span><span class='obj'>秦</span>，<span class='subj'>風煙</span><span class='verb'>望</span><span class='attr'>五</span><span class='obj'>津</span>。",
                svo_trans: "<ruby><span class='subj'>城闕</span><rt>長安城</rt></ruby><ruby><span class='verb'>輔</span><rt>護衛</rt></ruby><ruby><span class='attr'>三</span><span class='obj'>秦</span><rt>三秦之地</rt></ruby>，<ruby><span class='subj'>風煙</span><rt>風煙迷濛</rt></ruby><ruby><span class='verb'>望</span><rt>眺望</rt></ruby><ruby><span class='attr'>五</span><span class='obj'>津</span><rt>五津</rt></ruby>。"
            },
            {
                original: "與君離別意，同是宦遊人。",
                svo: "<span class='adv'>與</span><span class='obj'>君</span><span class='attr'>離別</span><span class='subj'>意</span>，<span class='adv'>同</span><span class='verb'>是</span><span class='attr'>宦遊</span><span class='obj'>人</span>。",
                svo_trans: "<ruby><span class='adv'>與</span><rt>與</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='attr'>離別</span><span class='subj'>意</span><rt>離別的情意</rt></ruby>，<ruby><span class='adv'>同</span><rt>同樣</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='attr'>宦遊</span><span class='obj'>人</span><rt>離鄉做官的人</rt></ruby>。"
            },
            {
                original: "海內存知己，天涯若比鄰。",
                svo: "<span class='adv'>海內</span><span class='verb'>存</span><span class='obj'>知己</span>，<span class='subj'>天涯</span><span class='verb'>若</span><span class='obj'>比鄰</span>。",
                svo_trans: "<ruby><span class='adv'>海內</span><rt>四海之內</rt></ruby><ruby><span class='verb'>存</span><rt>有</rt></ruby><ruby><span class='obj'>知己</span><rt>知心朋友</rt></ruby>，<ruby><span class='subj'>天涯</span><rt>天涯海角</rt></ruby><ruby><span class='verb'>若</span><rt>就像</rt></ruby><ruby><span class='obj'>比鄰</span><rt>鄰居</rt></ruby>。"
            },
            {
                original: "無為在歧路，兒女共沾巾。",
                svo: "<span class='adv'>無為</span><span class='adv'>在歧路</span>，<span class='subj'>兒女</span><span class='adv'>共</span><span class='verb'>沾</span><span class='obj'>巾</span>。",
                svo_trans: "<ruby><span class='adv'>無為</span><rt>不要</rt></ruby><ruby><span class='adv'>在歧路</span><rt>在岔路口</rt></ruby>，像<ruby><span class='subj'>兒女</span><rt>小兒女</rt></ruby>那樣<ruby><span class='adv'>共</span><rt>一起</rt></ruby><ruby><span class='verb'>沾</span><rt>沾濕</rt></ruby><ruby><span class='obj'>巾</span><rt>手帕</rt></ruby>。"
            }
        ]
    },
    bingju: {
        title: "兵車行",
        author: "杜甫",
        level: 3,
        sentences: [
            {
                original: "車轔轔，馬蕭蕭，行人弓箭各在腰。",
                svo: "<span class='subj'>車</span><span class='verb'>轔轔</span>，<span class='subj'>馬</span><span class='verb'>蕭蕭</span>，<span class='subj'>行人</span><span class='attr'>弓箭</span><span class='adv'>各在腰</span>。",
                svo_trans: "<ruby><span class='subj'>車</span><rt>戰車</rt></ruby><ruby><span class='verb'>轔轔</span><rt>發出轔轔聲</rt></ruby>，<ruby><span class='subj'>馬</span><rt>戰馬</rt></ruby><ruby><span class='verb'>蕭蕭</span><rt>嘶鳴蕭蕭</rt></ruby>，<ruby><span class='subj'>行人</span><rt>出征的士兵</rt></ruby><ruby><span class='attr'>弓箭</span><rt>弓箭</rt></ruby><ruby><span class='adv'>各在腰</span><rt>各自掛在腰間</rt></ruby>。"
            },
            {
                original: "爺娘妻子走相送，塵埃不見咸陽橋。",
                svo: "<span class='subj'>爺娘妻子</span><span class='verb'>走相送</span>，<span class='subj'>塵埃</span><span class='adv'>不見</span><span class='obj'>咸陽橋</span>。",
                svo_trans: "<ruby><span class='subj'>爺娘妻子</span><rt>父母妻子</rt></ruby><ruby><span class='verb'>走相送</span><rt>奔跑著送行</rt></ruby>，<ruby><span class='subj'>塵埃</span><rt>揚起的塵土</rt></ruby><ruby><span class='adv'>不見</span><rt>遮蔽了</rt></ruby><ruby><span class='obj'>咸陽橋</span><rt>咸陽橋</rt></ruby>。"
            },
            {
                original: "牽衣頓足攔道哭，哭聲直上干雲霄。",
                svo: "<span class='verb'>牽</span><span class='obj'>衣</span><span class='verb'>頓</span><span class='obj'>足</span><span class='verb'>攔道</span><span class='verb'>哭</span>，<span class='subj'>哭聲</span><span class='adv'>直上</span><span class='verb'>干</span><span class='obj'>雲霄</span>。",
                svo_trans: "<ruby><span class='verb'>牽</span><rt>拉著</rt></ruby><ruby><span class='obj'>衣</span><rt>衣服</rt></ruby><ruby><span class='verb'>頓</span><rt>跺</rt></ruby><ruby><span class='obj'>足</span><rt>腳</rt></ruby><ruby><span class='verb'>攔道</span><rt>攔在路上</rt></ruby><ruby><span class='verb'>哭</span><rt>哭泣</rt></ruby>，<ruby><span class='subj'>哭聲</span><rt>哭聲</rt></ruby><ruby><span class='adv'>直上</span><rt>直衝</rt></ruby><ruby><span class='verb'>干</span><rt>衝上</rt></ruby><ruby><span class='obj'>雲霄</span><rt>雲霄</rt></ruby>。"
            },
            {
                original: "信知生男惡，反是生女好。生女猶得嫁比鄰，生男埋沒隨百草。",
                svo: "<span class='adv'>信知</span><span class='verb'>生</span><span class='obj'>男</span><span class='verb'>惡</span>，<span class='adv'>反是</span><span class='verb'>生</span><span class='obj'>女</span><span class='verb'>好</span>。<span class='adv'>生女</span><span class='adv'>猶得</span><span class='verb'>嫁</span><span class='obj'>比鄰</span>，<span class='adv'>生男</span><span class='verb'>埋沒</span><span class='adv'>隨</span><span class='obj'>百草</span>。",
                svo_trans: "<ruby><span class='adv'>信知</span><rt>確實知道</rt></ruby><ruby><span class='verb'>生</span><rt>生</rt></ruby><ruby><span class='obj'>男</span><rt>兒子</rt></ruby><ruby><span class='verb'>惡</span><rt>不好</rt></ruby>，<ruby><span class='adv'>反是</span><rt>反而是</rt></ruby><ruby><span class='verb'>生</span><rt>生</rt></ruby><ruby><span class='obj'>女</span><rt>女兒</rt></ruby><ruby><span class='verb'>好</span><rt>好</rt></ruby>。<ruby><span class='adv'>生女</span><rt>生女兒</rt></ruby><ruby><span class='adv'>猶得</span><rt>還可以</rt></ruby><ruby><span class='verb'>嫁</span><rt>嫁給</rt></ruby><ruby><span class='obj'>比鄰</span><rt>鄰居</rt></ruby>，<ruby><span class='adv'>生男</span><rt>生兒子</rt></ruby><ruby><span class='verb'>埋沒</span><rt>埋沒</rt></ruby><ruby><span class='adv'>隨</span><rt>在</rt></ruby><ruby><span class='obj'>百草</span><rt>荒草中</rt></ruby>。"
            }
        ]
    },
    caogui: {
        title: "曹劌論戰",
        author: "左傳",
        level: 3,
        sentences: [
            {
                original: "十年春，齊師伐我。公將戰，曹劌請見。",
                svo: "<span class='adv'>十年春</span>，<span class='subj'>齊師</span><span class='verb'>伐</span><span class='obj'>我</span>。<span class='subj'>公</span><span class='adv'>將</span><span class='verb'>戰</span>，<span class='subj'>曹劌</span><span class='verb'>請見</span>。",
                svo_trans: "<ruby><span class='adv'>十年春</span><rt>魯莊公十年春天</rt></ruby>，<ruby><span class='subj'>齊師</span><rt>齊國軍隊</rt></ruby><ruby><span class='verb'>伐</span><rt>攻打</rt></ruby><ruby><span class='obj'>我</span><rt>我們魯國</rt></ruby>。<ruby><span class='subj'>公</span><rt>魯莊公</rt></ruby><ruby><span class='adv'>將</span><rt>將要</rt></ruby><ruby><span class='verb'>戰</span><rt>迎戰</rt></ruby>，<ruby><span class='subj'>曹劌</span><rt>曹劌</rt></ruby><ruby><span class='verb'>請見</span><rt>請求進見</rt></ruby>。"
            },
            {
                original: "肉食者謀之，又何間焉？",
                svo: "<span class='subj'>肉食者</span><span class='verb'>謀</span><span class='obj'>之</span>，<span class='adv'>又何</span><span class='verb'>間</span>焉？",
                svo_trans: "<ruby><span class='subj'>肉食者</span><rt>做大官的人</rt></ruby><ruby><span class='verb'>謀</span><rt>謀劃</rt></ruby><ruby><span class='obj'>之</span><rt>這件事</rt></ruby>，<ruby><span class='adv'>又何</span><rt>又何必</rt></ruby><ruby><span class='verb'>間</span><rt>參與</rt></ruby>呢？"
            },
            {
                original: "夫戰，勇氣也。一鼓作氣，再而衰，三而竭。",
                svo: "<span class='subj'>夫戰</span>，<span class='obj'>勇氣</span>也。<span class='adv'>一</span><span class='verb'>鼓</span><span class='verb'>作氣</span>，<span class='adv'>再</span>而<span class='verb'>衰</span>，<span class='adv'>三</span>而<span class='verb'>竭</span>。",
                svo_trans: "<ruby><span class='subj'>夫戰</span><rt>作戰</rt></ruby>，靠的是<ruby><span class='obj'>勇氣</span><rt>勇氣</rt></ruby>。<ruby><span class='adv'>一</span><rt>第一次</rt></ruby><ruby><span class='verb'>鼓</span><rt>擊鼓</rt></ruby><ruby><span class='verb'>作氣</span><rt>振作士氣</rt></ruby>，<ruby><span class='adv'>再</span><rt>第二次</rt></ruby>士氣就<ruby><span class='verb'>衰</span><rt>衰退</rt></ruby>，<ruby><span class='adv'>三</span><rt>第三次</rt></ruby>士氣就<ruby><span class='verb'>竭</span><rt>耗盡</rt></ruby>。"
            },
            {
                original: "吾視其轍亂，望其旗靡，故逐之。",
                svo: "<span class='subj'>吾</span><span class='verb'>視</span><span class='attr'>其</span><span class='obj'>轍亂</span>，<span class='verb'>望</span><span class='attr'>其</span><span class='obj'>旗靡</span>，<span class='adv'>故</span><span class='verb'>逐</span><span class='obj'>之</span>。",
                svo_trans: "<ruby><span class='subj'>吾</span><rt>我</rt></ruby><ruby><span class='verb'>視</span><rt>看見</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>轍亂</span><rt>他們的車轍混亂</rt></ruby>，<ruby><span class='verb'>望</span><rt>望見</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>旗靡</span><rt>他們的旗幟倒下</rt></ruby>，<ruby><span class='adv'>故</span><rt>所以</rt></ruby><ruby><span class='verb'>逐</span><rt>追擊</rt></ruby><ruby><span class='obj'>之</span><rt>他們</rt></ruby>。"
            }
        ]
    },

    // ==================== 第四學習階段（中四至中六）====================
    yuwosuoyu: {
        title: "魚我所欲也",
        author: "孟子",
        level: 4,
        sentences: [
            {
                original: "魚，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍魚而取熊掌者也。",
                svo: "<span class='subj'>魚</span>，<span class='attr'>我所</span><span class='verb'>欲</span>也；<span class='subj'>熊掌</span>，<span class='adv'>亦</span><span class='attr'>我所</span><span class='verb'>欲</span>也。<span class='subj'>二者</span><span class='adv'>不可</span><span class='verb'>得兼</span>，<span class='verb'>舍</span><span class='obj'>魚</span>而<span class='verb'>取</span><span class='obj'>熊掌</span><span class='obj'>者</span>也。",
                svo_trans: "<ruby><span class='subj'>魚</span><rt>魚</rt></ruby>，是<ruby><span class='attr'>我所</span><span class='verb'>欲</span><rt>我想要的</rt></ruby>；<ruby><span class='subj'>熊掌</span><rt>熊掌</rt></ruby>，<ruby><span class='adv'>亦</span><rt>也</rt></ruby>是<ruby><span class='attr'>我所</span><span class='verb'>欲</span><rt>我想要的</rt></ruby>。<ruby><span class='subj'>二者</span><rt>兩樣東西</rt></ruby><ruby><span class='adv'>不可</span><rt>不能</rt></ruby><ruby><span class='verb'>得兼</span><rt>同時得到</rt></ruby>，就<ruby><span class='verb'>舍</span><rt>捨棄</rt></ruby><ruby><span class='obj'>魚</span><rt>魚</rt></ruby>而<ruby><span class='verb'>取</span><rt>選取</rt></ruby><ruby><span class='obj'>熊掌</span><rt>熊掌</rt></ruby>。"
            },
            {
                original: "生，亦我所欲也；義，亦我所欲也。二者不可得兼，舍生而取義者也。",
                svo: "<span class='subj'>生</span>，<span class='adv'>亦</span><span class='attr'>我所</span><span class='verb'>欲</span>也；<span class='subj'>義</span>，<span class='adv'>亦</span><span class='attr'>我所</span><span class='verb'>欲</span>也。<span class='subj'>二者</span><span class='adv'>不可</span><span class='verb'>得兼</span>，<span class='verb'>舍</span><span class='obj'>生</span>而<span class='verb'>取</span><span class='obj'>義</span><span class='obj'>者</span>也。",
                svo_trans: "<ruby><span class='subj'>生</span><rt>生命</rt></ruby>，<ruby><span class='adv'>亦</span><rt>也</rt></ruby>是<ruby><span class='attr'>我所</span><span class='verb'>欲</span><rt>我想要的</rt></ruby>；<ruby><span class='subj'>義</span><rt>道義</rt></ruby>，<ruby><span class='adv'>亦</span><rt>也</rt></ruby>是<ruby><span class='attr'>我所</span><span class='verb'>欲</span><rt>我想要的</rt></ruby>。<ruby><span class='subj'>二者</span><rt>兩樣東西</rt></ruby><ruby><span class='adv'>不可</span><rt>不能</rt></ruby><ruby><span class='verb'>得兼</span><rt>同時得到</rt></ruby>，就<ruby><span class='verb'>舍</span><rt>捨棄</rt></ruby><ruby><span class='obj'>生</span><rt>生命</rt></ruby>而<ruby><span class='verb'>取</span><rt>選取</rt></ruby><ruby><span class='obj'>義</span><rt>道義</rt></ruby>。"
            },
            {
                original: "如使人之所欲莫甚於生，則凡可以得生者，何不用也？",
                svo: "<span class='adv'>如使</span><span class='attr'>人之</span><span class='subj'>所欲</span><span class='adv'>莫</span><span class='verb'>甚於</span><span class='obj'>生</span>，<span class='adv'>則</span><span class='adv'>凡</span><span class='attr'>可以得生</span><span class='obj'>者</span>，<span class='adv'>何不</span><span class='verb'>用</span>也？",
                svo_trans: "<ruby><span class='adv'>如使</span><rt>如果</rt></ruby><ruby><span class='attr'>人之</span><span class='subj'>所欲</span><rt>人們想要的東西</rt></ruby><ruby><span class='adv'>莫</span><rt>沒有</rt></ruby><ruby><span class='verb'>甚於</span><rt>超過</rt></ruby><ruby><span class='obj'>生</span><rt>生命</rt></ruby>，<ruby><span class='adv'>則</span><rt>那麼</rt></ruby><ruby><span class='adv'>凡</span><rt>凡是</rt></ruby><ruby><span class='attr'>可以得生</span><span class='obj'>者</span><rt>可以保全生命的手段</rt></ruby>，<ruby><span class='adv'>何不</span><rt>什麼不用</rt></ruby><ruby><span class='verb'>用</span><rt>使用</rt></ruby>呢？"
            }
        ]
    },
    xiaoyaoyou: {
        title: "逍遙遊(節錄)",
        author: "莊子",
        level: 4,
        sentences: [
            {
                original: "北冥有魚，其名為鯤。鯤之大，不知其幾千里也。",
                svo: "<span class='adv'>北冥</span><span class='verb'>有</span><span class='obj'>魚</span>，<span class='attr'>其</span><span class='subj'>名</span><span class='verb'>為</span><span class='obj'>鯤</span>。<span class='subj'>鯤</span>之<span class='subj'>大</span>，<span class='adv'>不知</span><span class='attr'>其</span><span class='attr'>幾千里</span><span class='obj'>也</span>。",
                svo_trans: "<ruby><span class='adv'>北冥</span><rt>北海</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>魚</span><rt>一條魚</rt></ruby>，<ruby><span class='attr'>其</span><span class='subj'>名</span><rt>牠的名字</rt></ruby><ruby><span class='verb'>為</span><rt>叫</rt></ruby><ruby><span class='obj'>鯤</span><rt>鯤</rt></ruby>。<ruby><span class='subj'>鯤</span><rt>鯤</rt></ruby>的<ruby><span class='subj'>大</span><rt>巨大</rt></ruby>，<ruby><span class='adv'>不知</span><rt>不知道</rt></ruby><ruby><span class='attr'>其</span><rt>牠</rt></ruby>有<ruby><span class='attr'>幾千里</span><span class='obj'>也</span><rt>幾千里</rt></ruby>。"
            },
            {
                original: "化而為鳥，其名為鵬。鵬之背，不知其幾千里也。",
                svo: "<span class='verb'>化</span>而<span class='verb'>為</span><span class='obj'>鳥</span>，<span class='attr'>其</span><span class='subj'>名</span><span class='verb'>為</span><span class='obj'>鵬</span>。<span class='subj'>鵬</span>之<span class='subj'>背</span>，<span class='adv'>不知</span><span class='attr'>其</span><span class='attr'>幾千里</span><span class='obj'>也</span>。",
                svo_trans: "<ruby><span class='verb'>化</span><rt>變化</rt></ruby>而<ruby><span class='verb'>為</span><rt>成為</rt></ruby><ruby><span class='obj'>鳥</span><rt>鳥</rt></ruby>，<ruby><span class='attr'>其</span><span class='subj'>名</span><rt>牠的名字</rt></ruby><ruby><span class='verb'>為</span><rt>叫</rt></ruby><ruby><span class='obj'>鵬</span><rt>鵬</rt></ruby>。<ruby><span class='subj'>鵬</span><rt>鵬</rt></ruby>的<ruby><span class='subj'>背</span><rt>背</rt></ruby>，<ruby><span class='adv'>不知</span><rt>不知道</rt></ruby><ruby><span class='attr'>其</span><rt>牠</rt></ruby>有<ruby><span class='attr'>幾千里</span><span class='obj'>也</span><rt>幾千里</rt></ruby>。"
            },
            {
                original: "怒而飛，其翼若垂天之雲。",
                svo: "<span class='adv'>怒</span>而<span class='verb'>飛</span>，<span class='attr'>其</span><span class='subj'>翼</span><span class='adv'>若</span><span class='attr'>垂天之</span><span class='obj'>雲</span>。",
                svo_trans: "<ruby><span class='adv'>怒</span><rt>奮力</rt></ruby>而<ruby><span class='verb'>飛</span><rt>起飛</rt></ruby>，<ruby><span class='attr'>其</span><span class='subj'>翼</span><rt>牠的翅膀</rt></ruby><ruby><span class='adv'>若</span><rt>像</rt></ruby><ruby><span class='attr'>垂天之</span><span class='obj'>雲</span><rt>天邊的雲彩</rt></ruby>。"
            }
        ]
    },
    daxue: {
        title: "大學(節錄)",
        author: "禮記",
        level: 4,
        sentences: [
            {
                original: "大學之道，在明明德，在親民，在止於至善。",
                svo: "<span class='subj'>大學之道</span>，<span class='adv'>在</span><span class='verb'>明明德</span>，<span class='adv'>在</span><span class='verb'>親民</span>，<span class='adv'>在</span><span class='verb'>止於至善</span>。",
                svo_trans: "<ruby><span class='subj'>大學之道</span><rt>大學的宗旨</rt></ruby>，<ruby><span class='adv'>在</span><rt>在於</rt></ruby><ruby><span class='verb'>明明德</span><rt>顯明光明的德性</rt></ruby>，<ruby><span class='adv'>在</span><rt>在於</rt></ruby><ruby><span class='verb'>親民</span><rt>親愛人民</rt></ruby>，<ruby><span class='adv'>在</span><rt>在於</rt></ruby><ruby><span class='verb'>止於至善</span><rt>達到至善的境界</rt></ruby>。"
            },
            {
                original: "知止而后有定，定而后能靜，靜而后能安，安而后能慮，慮而后能得。",
                svo: "<span class='verb'>知止</span>而后<span class='verb'>有</span><span class='obj'>定</span>，<span class='verb'>定</span>而后<span class='adv'>能</span><span class='verb'>靜</span>，<span class='verb'>靜</span>而后<span class='adv'>能</span><span class='verb'>安</span>，<span class='verb'>安</span>而后<span class='adv'>能</span><span class='verb'>慮</span>，<span class='verb'>慮</span>而后<span class='adv'>能</span><span class='verb'>得</span>。",
                svo_trans: "<ruby><span class='verb'>知止</span><rt>知道止於至善</rt></ruby>然後<ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>定</span><rt>定向</rt></ruby>，有定向然後<ruby><span class='adv'>能</span><rt>能夠</rt></ruby><ruby><span class='verb'>靜</span><rt>心靜</rt></ruby>，心靜然後<ruby><span class='adv'>能</span><rt>能夠</rt></ruby><ruby><span class='verb'>安</span><rt>安穩</rt></ruby>，安穩然後<ruby><span class='adv'>能</span><rt>能夠</rt></ruby><ruby><span class='verb'>慮</span><rt>思慮周詳</rt></ruby>，思慮周詳然後<ruby><span class='adv'>能</span><rt>能夠</rt></ruby><ruby><span class='verb'>得</span><rt>有所收穫</rt></ruby>。"
            },
            {
                original: "物有本末，事有終始，知所先後，則近道矣。",
                svo: "<span class='subj'>物</span><span class='verb'>有</span><span class='obj'>本末</span>，<span class='subj'>事</span><span class='verb'>有</span><span class='obj'>終始</span>，<span class='verb'>知</span><span class='obj'>所先後</span>，<span class='adv'>則</span><span class='verb'>近</span><span class='obj'>道</span>矣。",
                svo_trans: "<ruby><span class='subj'>物</span><rt>萬物</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>本末</span><rt>根本和末節</rt></ruby>，<ruby><span class='subj'>事</span><rt>事情</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>終始</span><rt>開始和結束</rt></ruby>，<ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='obj'>所先後</span><rt>事情應有的先後次序</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>近</span><rt>接近</rt></ruby><ruby><span class='obj'>道</span><rt>大學之道</rt></ruby>了。"
            }
        ]
    },
    lianpolinxiangru: {
        title: "廉頗藺相如列傳(節錄)",
        author: "司馬遷",
        level: 4,
        sentences: [
            {
                original: "廉頗者，趙之良將也。趙惠文王十六年，廉頗為趙將，伐齊，大破之，取陽晉，拜為上卿。",
                svo: "<span class='subj'>廉頗</span>者，<span class='attr'>趙之良</span><span class='obj'>將</span>也。<span class='adv'>趙惠文王十六年</span>，<span class='subj'>廉頗</span><span class='verb'>為</span><span class='obj'>趙將</span>，<span class='verb'>伐</span><span class='obj'>齊</span>，<span class='adv'>大</span><span class='verb'>破</span><span class='obj'>之</span>，<span class='verb'>取</span><span class='obj'>陽晉</span>，<span class='verb'>拜為</span><span class='obj'>上卿</span>。",
                svo_trans: "<ruby><span class='subj'>廉頗</span><rt>廉頗</rt></ruby>，是<ruby><span class='attr'>趙之良</span><span class='obj'>將</span><rt>趙國優秀的將領</rt></ruby>。<ruby><span class='adv'>趙惠文王十六年</span><rt>趙惠文王十六年</rt></ruby>，<ruby><span class='subj'>廉頗</span><rt>廉頗</rt></ruby><ruby><span class='verb'>為</span><rt>擔任</rt></ruby><ruby><span class='obj'>趙將</span><rt>趙國的大將</rt></ruby>，<ruby><span class='verb'>伐</span><rt>攻打</rt></ruby><ruby><span class='obj'>齊</span><rt>齊國</rt></ruby>，<ruby><span class='adv'>大</span><rt>大</rt></ruby><ruby><span class='verb'>破</span><rt>打敗</rt></ruby><ruby><span class='obj'>之</span><rt>他們</rt></ruby>，<ruby><span class='verb'>取</span><rt>攻取</rt></ruby><ruby><span class='obj'>陽晉</span><rt>陽晉</rt></ruby>，<ruby><span class='verb'>拜為</span><rt>被任命為</rt></ruby><ruby><span class='obj'>上卿</span><rt>上卿</rt></ruby>。"
            },
            {
                original: "相如每朝時，常稱病，不欲與廉頗爭列。已而相如出，望見廉頗，相如引車避匿。",
                svo: "<span class='subj'>相如</span><span class='adv'>每朝時</span>，<span class='adv'>常</span><span class='verb'>稱病</span>，<span class='adv'>不欲</span><span class='adv'>與</span><span class='obj'>廉頗</span><span class='verb'>爭列</span>。<span class='adv'>已而</span><span class='subj'>相如</span><span class='verb'>出</span>，<span class='verb'>望見</span><span class='obj'>廉頗</span>，<span class='subj'>相如</span><span class='verb'>引</span><span class='obj'>車</span><span class='verb'>避匿</span>。",
                svo_trans: "<ruby><span class='subj'>相如</span><rt>藺相如</rt></ruby><ruby><span class='adv'>每朝時</span><rt>每次上朝時</rt></ruby>，<ruby><span class='adv'>常</span><rt>常常</rt></ruby><ruby><span class='verb'>稱病</span><rt>聲稱生病</rt></ruby>，<ruby><span class='adv'>不欲</span><rt>不願意</rt></ruby><ruby><span class='adv'>與</span><rt>和</rt></ruby><ruby><span class='obj'>廉頗</span><rt>廉頗</rt></ruby><ruby><span class='verb'>爭列</span><rt>爭位次</rt></ruby>。<ruby><span class='adv'>已而</span><rt>不久</rt></ruby><ruby><span class='subj'>相如</span><rt>藺相如</rt></ruby><ruby><span class='verb'>出</span><rt>外出</rt></ruby>，<ruby><span class='verb'>望見</span><rt>望見</rt></ruby><ruby><span class='obj'>廉頗</span><rt>廉頗</rt></ruby>，<ruby><span class='subj'>相如</span><rt>藺相如</rt></ruby><ruby><span class='verb'>引</span><rt>調轉</rt></ruby><ruby><span class='obj'>車</span><rt>馬車</rt></ruby><ruby><span class='verb'>避匿</span><rt>躲避</rt></ruby>。"
            },
            {
                original: "吾所以為此者，以先國家之急而後私仇也。",
                svo: "<span class='subj'>吾</span><span class='adv'>所以</span><span class='verb'>為</span><span class='obj'>此</span>者，<span class='adv'>以</span><span class='verb'>先</span><span class='attr'>國家之</span><span class='obj'>急</span>而<span class='adv'>後</span><span class='obj'>私仇</span>也。",
                svo_trans: "<ruby><span class='subj'>吾</span><rt>我</rt></ruby><ruby><span class='adv'>所以</span><rt>所以</rt></ruby><ruby><span class='verb'>為</span><rt>做</rt></ruby><ruby><span class='obj'>此</span><rt>這件事</rt></ruby>，是<ruby><span class='adv'>以</span><rt>因為</rt></ruby><ruby><span class='verb'>先</span><rt>把</rt></ruby><ruby><span class='attr'>國家之</span><span class='obj'>急</span><rt>國家的急難</rt></ruby>放在前面，而<ruby><span class='adv'>後</span><rt>把</rt></ruby><ruby><span class='obj'>私仇</span><rt>私人的仇怨</rt></ruby>放在後面。"
            }
        ]
    },
    chenqingbiao: {
        title: "陳情表",
        author: "李密",
        level: 4,
        sentences: [
            {
                original: "臣密言：臣以險釁，夙遭閔凶。生孩六月，慈父見背；行年四歲，舅奪母志。",
                svo: "<span class='subj'>臣密</span><span class='verb'>言</span>：<span class='subj'>臣</span><span class='adv'>以險釁</span>，<span class='adv'>夙</span><span class='verb'>遭</span><span class='obj'>閔凶</span>。<span class='verb'>生孩</span><span class='attr'>六</span><span class='obj'>月</span>，<span class='subj'>慈父</span><span class='verb'>見背</span>；<span class='verb'>行年</span><span class='attr'>四</span><span class='obj'>歲</span>，<span class='subj'>舅</span><span class='verb'>奪</span><span class='attr'>母</span><span class='obj'>志</span>。",
                svo_trans: "<ruby><span class='subj'>臣密</span><rt>臣李密</rt></ruby><ruby><span class='verb'>言</span><rt>上言</rt></ruby>：<ruby><span class='subj'>臣</span><rt>我</rt></ruby><ruby><span class='adv'>以險釁</span><rt>因為命運坎坷</rt></ruby>，<ruby><span class='adv'>夙</span><rt>早年</rt></ruby><ruby><span class='verb'>遭</span><rt>遭遇</rt></ruby><ruby><span class='obj'>閔凶</span><rt>不幸</rt></ruby>。<ruby><span class='verb'>生孩</span><rt>生下我</rt></ruby><ruby><span class='attr'>六</span><span class='obj'>月</span><rt>六個月</rt></ruby>，<ruby><span class='subj'>慈父</span><rt>慈愛的父親</rt></ruby><ruby><span class='verb'>見背</span><rt>就去世了</rt></ruby>；<ruby><span class='verb'>行年</span><rt>年齡</rt></ruby><ruby><span class='attr'>四</span><span class='obj'>歲</span><rt>到了四歲</rt></ruby>，<ruby><span class='subj'>舅</span><rt>舅舅</rt></ruby><ruby><span class='verb'>奪</span><rt>強行改變</rt></ruby><ruby><span class='attr'>母</span><span class='obj'>志</span><rt>母親守節的志向</rt></ruby>。"
            },
            {
                original: "臣無祖母，無以至今日；祖母無臣，無以終餘年。",
                svo: "<span class='subj'>臣</span><span class='verb'>無</span><span class='obj'>祖母</span>，<span class='adv'>無以</span><span class='verb'>至</span><span class='obj'>今日</span>；<span class='subj'>祖母</span><span class='verb'>無</span><span class='obj'>臣</span>，<span class='adv'>無以</span><span class='verb'>終</span><span class='obj'>餘年</span>。",
                svo_trans: "<ruby><span class='subj'>臣</span><rt>我</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>祖母</span><rt>祖母</rt></ruby>，<ruby><span class='adv'>無以</span><rt>無法</rt></ruby><ruby><span class='verb'>至</span><rt>活到</rt></ruby><ruby><span class='obj'>今日</span><rt>今天</rt></ruby>；<ruby><span class='subj'>祖母</span><rt>祖母</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>臣</span><rt>我</rt></ruby>，<ruby><span class='adv'>無以</span><rt>無法</rt></ruby><ruby><span class='verb'>終</span><rt>度過</rt></ruby><ruby><span class='obj'>餘年</span><rt>餘生</rt></ruby>。"
            },
            {
                original: "臣之辛苦，非獨蜀之人士及二州牧伯所見明知，皇天后土，實所共鑑。",
                svo: "<span class='attr'>臣之</span><span class='subj'>辛苦</span>，<span class='adv'>非獨</span><span class='attr'>蜀之人士及二州牧伯所</span><span class='verb'>見明知</span>，<span class='subj'>皇天后土</span>，<span class='adv'>實所</span><span class='verb'>共鑑</span>。",
                svo_trans: "<ruby><span class='attr'>臣之</span><span class='subj'>辛苦</span><rt>我的辛酸苦楚</rt></ruby>，<ruby><span class='adv'>非獨</span><rt>不僅是</rt></ruby><ruby><span class='attr'>蜀之人士及二州牧伯所</span><span class='verb'>見明知</span><rt>蜀地人士和兩州官員所明瞭</rt></ruby>，<ruby><span class='subj'>皇天后土</span><rt>天地神明</rt></ruby>，<ruby><span class='adv'>實所</span><span class='verb'>共鑑</span><rt>實在都共同見證</rt></ruby>。"
            }
        ]
    },
    yinjiu: {
        title: "飲酒(其五)",
        author: "陶淵明",
        level: 4,
        sentences: [
            {
                original: "結廬在人境，而無車馬喧。",
                svo: "<span class='verb'>結</span><span class='obj'>廬</span><span class='adv'>在人境</span>，而<span class='verb'>無</span><span class='obj'>車馬喧</span>。",
                svo_trans: "<ruby><span class='verb'>結</span><rt>建造</rt></ruby><ruby><span class='obj'>廬</span><rt>茅屋</rt></ruby><ruby><span class='adv'>在人境</span><rt>在人間</rt></ruby>，卻<ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>車馬喧</span><rt>車馬的喧鬧</rt></ruby>。"
            },
            {
                original: "問君何能爾？心遠地自偏。",
                svo: "<span class='verb'>問</span><span class='obj'>君</span><span class='adv'>何能</span><span class='verb'>爾</span>？<span class='subj'>心</span><span class='verb'>遠</span><span class='subj'>地</span><span class='adv'>自</span><span class='verb'>偏</span>。",
                svo_trans: "<ruby><span class='verb'>問</span><rt>請問</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>何能</span><rt>怎麼能</rt></ruby><ruby><span class='verb'>爾</span><rt>如此</rt></ruby>？<ruby><span class='subj'>心</span><rt>心靈</rt></ruby><ruby><span class='verb'>遠</span><rt>遠離塵俗</rt></ruby>，<ruby><span class='subj'>地</span><rt>地方</rt></ruby><ruby><span class='adv'>自</span><rt>自然</rt></ruby><ruby><span class='verb'>偏</span><rt>偏僻</rt></ruby>。"
            },
            {
                original: "採菊東籬下，悠然見南山。",
                svo: "<span class='verb'>採</span><span class='obj'>菊</span><span class='adv'>東籬下</span>，<span class='adv'>悠然</span><span class='verb'>見</span><span class='obj'>南山</span>。",
                svo_trans: "<ruby><span class='verb'>採</span><rt>採摘</rt></ruby><ruby><span class='obj'>菊</span><rt>菊花</rt></ruby><ruby><span class='adv'>東籬下</span><rt>在東邊的籬笆下</rt></ruby>，<ruby><span class='adv'>悠然</span><rt>悠閒地</rt></ruby><ruby><span class='verb'>見</span><rt>望見</rt></ruby><ruby><span class='obj'>南山</span><rt>南山</rt></ruby>。"
            },
            {
                original: "山氣日夕佳，飛鳥相與還。",
                svo: "<span class='subj'>山氣</span><span class='adv'>日夕</span><span class='verb'>佳</span>，<span class='subj'>飛鳥</span><span class='adv'>相與</span><span class='verb'>還</span>。",
                svo_trans: "<ruby><span class='subj'>山氣</span><rt>山間的氣息</rt></ruby><ruby><span class='adv'>日夕</span><rt>傍晚時分</rt></ruby><ruby><span class='verb'>佳</span><rt>美好</rt></ruby>，<ruby><span class='subj'>飛鳥</span><rt>飛鳥</rt></ruby><ruby><span class='adv'>相與</span><rt>結伴</rt></ruby><ruby><span class='verb'>還</span><rt>歸巢</rt></ruby>。"
            },
            {
                original: "此中有真意，欲辨已忘言。",
                svo: "<span class='adv'>此中</span><span class='verb'>有</span><span class='obj'>真意</span>，<span class='verb'>欲辨</span><span class='adv'>已</span><span class='verb'>忘</span><span class='obj'>言</span>。",
                svo_trans: "<ruby><span class='adv'>此中</span><rt>這裡面</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>真意</span><rt>真正的意趣</rt></ruby>，<ruby><span class='verb'>欲辨</span><rt>想要辨明</rt></ruby><ruby><span class='adv'>已</span><rt>卻已經</rt></ruby><ruby><span class='verb'>忘</span><rt>忘記</rt></ruby><ruby><span class='obj'>言</span><rt>該怎麼說</rt></ruby>。"
            }
        ]
    },
    shanjuqiuming: {
        title: "山居秋暝",
        author: "王維",
        level: 4,
        sentences: [
            {
                original: "空山新雨後，天氣晚來秋。",
                svo: "<span class='adv'>空山新雨後</span>，<span class='subj'>天氣</span><span class='adv'>晚來</span><span class='verb'>秋</span>。",
                svo_trans: "<ruby><span class='adv'>空山新雨後</span><rt>空曠的群山剛下過雨</rt></ruby>，<ruby><span class='subj'>天氣</span><rt>天氣</rt></ruby><ruby><span class='adv'>晚來</span><rt>到了傍晚</rt></ruby><ruby><span class='verb'>秋</span><rt>秋意更濃</rt></ruby>。"
            },
            {
                original: "明月松間照，清泉石上流。",
                svo: "<span class='subj'>明月</span><span class='adv'>松間</span><span class='verb'>照</span>，<span class='subj'>清泉</span><span class='adv'>石上</span><span class='verb'>流</span>。",
                svo_trans: "<ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='adv'>松間</span><rt>在松樹間</rt></ruby><ruby><span class='verb'>照</span><rt>照耀</rt></ruby>，<ruby><span class='subj'>清泉</span><rt>清泉</rt></ruby><ruby><span class='adv'>石上</span><rt>在石頭上</rt></ruby><ruby><span class='verb'>流</span><rt>流淌</rt></ruby>。"
            },
            {
                original: "竹喧歸浣女，蓮動下漁舟。",
                svo: "<span class='subj'>竹</span><span class='verb'>喧</span><span class='verb'>歸</span><span class='obj'>浣女</span>，<span class='subj'>蓮</span><span class='verb'>動</span><span class='verb'>下</span><span class='obj'>漁舟</span>。",
                svo_trans: "<ruby><span class='subj'>竹</span><rt>竹林</rt></ruby><ruby><span class='verb'>喧</span><rt>喧鬧</rt></ruby><ruby><span class='verb'>歸</span><rt>是歸來的</rt></ruby><ruby><span class='obj'>浣女</span><rt>洗衣女子</rt></ruby>，<ruby><span class='subj'>蓮</span><rt>荷葉</rt></ruby><ruby><span class='verb'>動</span><rt>搖動</rt></ruby><ruby><span class='verb'>下</span><rt>是順流而下的</rt></ruby><ruby><span class='obj'>漁舟</span><rt>漁船</rt></ruby>。"
            },
            {
                original: "隨意春芳歇，王孫自可留。",
                svo: "<span class='adv'>隨意</span><span class='subj'>春芳</span><span class='verb'>歇</span>，<span class='subj'>王孫</span><span class='adv'>自可</span><span class='verb'>留</span>。",
                svo_trans: "<ruby><span class='adv'>隨意</span><rt>任憑</rt></ruby><ruby><span class='subj'>春芳</span><rt>春天的花草</rt></ruby><ruby><span class='verb'>歇</span><rt>凋謝</rt></ruby>，<ruby><span class='subj'>王孫</span><rt>隱居的人</rt></ruby><ruby><span class='adv'>自可</span><rt>自然可以</rt></ruby><ruby><span class='verb'>留</span><rt>留下來</rt></ruby>。"
            }
        ]
    },
    yueduzhuo: {
        title: "月下獨酌(其一)",
        author: "李白",
        level: 4,
        sentences: [
            {
                original: "花間一壺酒，獨酌無相親。",
                svo: "<span class='adv'>花間</span><span class='attr'>一壺</span><span class='obj'>酒</span>，<span class='adv'>獨</span><span class='verb'>酌</span><span class='adv'>無</span><span class='obj'>相親</span>。",
                svo_trans: "<ruby><span class='adv'>花間</span><rt>花叢中</rt></ruby><ruby><span class='attr'>一壺</span><span class='obj'>酒</span><rt>一壺酒</rt></ruby>，<ruby><span class='adv'>獨</span><rt>獨自</rt></ruby><ruby><span class='verb'>酌</span><rt>飲酒</rt></ruby><ruby><span class='adv'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>相親</span><rt>親近的人</rt></ruby>。"
            },
            {
                original: "舉杯邀明月，對影成三人。",
                svo: "<span class='verb'>舉</span><span class='obj'>杯</span><span class='verb'>邀</span><span class='obj'>明月</span>，<span class='adv'>對</span><span class='obj'>影</span><span class='verb'>成</span><span class='obj'>三人</span>。",
                svo_trans: "<ruby><span class='verb'>舉</span><rt>舉起</rt></ruby><ruby><span class='obj'>杯</span><rt>酒杯</rt></ruby><ruby><span class='verb'>邀</span><rt>邀請</rt></ruby><ruby><span class='obj'>明月</span><rt>明月</rt></ruby>，<ruby><span class='adv'>對</span><rt>對著</rt></ruby><ruby><span class='obj'>影</span><rt>影子</rt></ruby><ruby><span class='verb'>成</span><rt>成為</rt></ruby><ruby><span class='obj'>三人</span><rt>三個人</rt></ruby>。"
            },
            {
                original: "月既不解飲，影徒隨我身。",
                svo: "<span class='subj'>月</span><span class='adv'>既不解</span><span class='verb'>飲</span>，<span class='subj'>影</span><span class='adv'>徒</span><span class='verb'>隨</span><span class='attr'>我</span><span class='obj'>身</span>。",
                svo_trans: "<ruby><span class='subj'>月</span><rt>月亮</rt></ruby><ruby><span class='adv'>既不解</span><rt>既然不懂得</rt></ruby><ruby><span class='verb'>飲</span><rt>飲酒</rt></ruby>，<ruby><span class='subj'>影</span><rt>影子</rt></ruby><ruby><span class='adv'>徒</span><rt>只是白白地</rt></ruby><ruby><span class='verb'>隨</span><rt>跟隨</rt></ruby><ruby><span class='attr'>我</span><span class='obj'>身</span><rt>我的身體</rt></ruby>。"
            },
            {
                original: "我歌月徘徊，我舞影零亂。",
                svo: "<span class='subj'>我</span><span class='verb'>歌</span><span class='subj'>月</span><span class='verb'>徘徊</span>，<span class='subj'>我</span><span class='verb'>舞</span><span class='subj'>影</span><span class='verb'>零亂</span>。",
                svo_trans: "<ruby><span class='subj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>歌</span><rt>唱歌</rt></ruby><ruby><span class='subj'>月</span><rt>月亮</rt></ruby><ruby><span class='verb'>徘徊</span><rt>徘徊</rt></ruby>，<ruby><span class='subj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>舞</span><rt>起舞</rt></ruby><ruby><span class='subj'>影</span><rt>影子</rt></ruby><ruby><span class='verb'>零亂</span><rt>零亂</rt></ruby>。"
            },
            {
                original: "永結無情遊，相期邈雲漢。",
                svo: "<span class='adv'>永</span><span class='verb'>結</span><span class='attr'>無情</span><span class='obj'>遊</span>，<span class='adv'>相期</span><span class='adv'>邈</span><span class='obj'>雲漢</span>。",
                svo_trans: "<ruby><span class='adv'>永</span><rt>永遠</rt></ruby><ruby><span class='verb'>結</span><rt>結交</rt></ruby><ruby><span class='attr'>無情</span><span class='obj'>遊</span><rt>忘情的遊伴</rt></ruby>，<ruby><span class='adv'>相期</span><rt>相約</rt></ruby><ruby><span class='adv'>邈</span><rt>在遙遠的</rt></ruby><ruby><span class='obj'>雲漢</span><rt>天河</rt></ruby>。"
            }
        ]
    },
    yanshi: {
        title: "燕詩",
        author: "白居易",
        level: 4,
        sentences: [
            {
                original: "樑上有雙燕，翩翩雄與雌。",
                svo: "<span class='adv'>樑上</span><span class='verb'>有</span><span class='attr'>雙</span><span class='subj'>燕</span>，<span class='adv'>翩翩</span><span class='subj'>雄與雌</span>。",
                svo_trans: "<ruby><span class='adv'>樑上</span><rt>屋樑上</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>雙</span><span class='subj'>燕</span><rt>兩隻燕子</rt></ruby>，<ruby><span class='adv'>翩翩</span><rt>翩翩飛舞</rt></ruby>，<ruby><span class='subj'>雄與雌</span><rt>一雄一雌</rt></ruby>。"
            },
            {
                original: "銜泥兩椽間，一巢生四兒。",
                svo: "<span class='verb'>銜</span><span class='obj'>泥</span><span class='adv'>兩椽間</span>，<span class='attr'>一</span><span class='subj'>巢</span><span class='verb'>生</span><span class='attr'>四</span><span class='obj'>兒</span>。",
                svo_trans: "<ruby><span class='verb'>銜</span><rt>銜著</rt></ruby><ruby><span class='obj'>泥</span><rt>泥土</rt></ruby><ruby><span class='adv'>兩椽間</span><rt>在兩根屋椽之間</rt></ruby>，<ruby><span class='attr'>一</span><span class='subj'>巢</span><rt>一個巢</rt></ruby><ruby><span class='verb'>生</span><rt>生下</rt></ruby><ruby><span class='attr'>四</span><span class='obj'>兒</span><rt>四隻小燕子</rt></ruby>。"
            },
            {
                original: "四兒日夜長，索食聲孜孜。",
                svo: "<span class='subj'>四兒</span><span class='adv'>日夜</span><span class='verb'>長</span>，<span class='verb'>索</span><span class='obj'>食</span><span class='subj'>聲</span><span class='adv'>孜孜</span>。",
                svo_trans: "<ruby><span class='subj'>四兒</span><rt>四隻小燕子</rt></ruby><ruby><span class='adv'>日夜</span><rt>日夜</rt></ruby><ruby><span class='verb'>長</span><rt>長大</rt></ruby>，<ruby><span class='verb'>索</span><rt>索要</rt></ruby><ruby><span class='obj'>食</span><rt>食物</rt></ruby>的<ruby><span class='subj'>聲</span><rt>聲音</rt></ruby><ruby><span class='adv'>孜孜</span><rt>不停</rt></ruby>。"
            },
            {
                original: "當時父母念，今日爾應知。",
                svo: "<span class='adv'>當時</span><span class='subj'>父母</span><span class='verb'>念</span>，<span class='adv'>今日</span><span class='subj'>爾</span><span class='adv'>應</span><span class='verb'>知</span>。",
                svo_trans: "<ruby><span class='adv'>當時</span><rt>那時候</rt></ruby><ruby><span class='subj'>父母</span><rt>父母的</rt></ruby><ruby><span class='verb'>念</span><rt>掛念</rt></ruby>，<ruby><span class='adv'>今日</span><rt>到了今天</rt></ruby><ruby><span class='subj'>爾</span><rt>你們</rt></ruby><ruby><span class='adv'>應</span><rt>應該</rt></ruby><ruby><span class='verb'>知</span><rt>懂得</rt></ruby>。"
            }
        ]
    },
    shishuo: {
        title: "師說",
        author: "韓愈",
        level: 4,
        sentences: [
            {
                original: "古之學者必有師。師者，所以傳道受業解惑也。",
                svo: "<span class='attr'>古之</span><span class='subj'>學者</span><span class='adv'>必</span><span class='verb'>有</span><span class='obj'>師</span>。<span class='subj'>師</span><span class='obj'>者</span>，<span class='adv'>所以</span><span class='verb'>傳</span><span class='obj'>道</span><span class='verb'>受</span><span class='obj'>業</span><span class='verb'>解</span><span class='obj'>惑</span>也。",
                svo_trans: "<ruby><span class='attr'>古之</span><span class='subj'>學者</span><rt>古代的求學的人</rt></ruby><ruby><span class='adv'>必</span><rt>一定</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>師</span><rt>老師</rt></ruby>。<ruby><span class='subj'>師</span><span class='obj'>者</span><rt>老師</rt></ruby>，<ruby><span class='adv'>所以</span><rt>是用來</rt></ruby><ruby><span class='verb'>傳</span><rt>傳授</rt></ruby><ruby><span class='obj'>道</span><rt>道理</rt></ruby>、<ruby><span class='verb'>受</span><rt>教授</rt></ruby><ruby><span class='obj'>業</span><rt>學業</rt></ruby>、<ruby><span class='verb'>解</span><rt>解答</rt></ruby><ruby><span class='obj'>惑</span><rt>疑惑</rt></ruby>的。"
            },
            {
                original: "人非生而知之者，孰能無惑？",
                svo: "<span class='subj'>人</span><span class='adv'>非</span><span class='adv'>生</span>而<span class='verb'>知</span><span class='obj'>之</span>者，<span class='subj'>孰</span><span class='adv'>能</span><span class='verb'>無</span><span class='obj'>惑</span>？",
                svo_trans: "<ruby><span class='subj'>人</span><rt>人</rt></ruby><ruby><span class='adv'>非</span><rt>不是</rt></ruby><ruby><span class='adv'>生</span><rt>生下來</rt></ruby>就<ruby><span class='verb'>知</span><rt>懂得</rt></ruby><ruby><span class='obj'>之</span><rt>道理</rt></ruby>的，<ruby><span class='subj'>孰</span><rt>誰</rt></ruby><ruby><span class='adv'>能</span><rt>能夠</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>惑</span><rt>疑惑</rt></ruby>？"
            },
            {
                original: "是故弟子不必不如師，師不必賢於弟子。聞道有先後，術業有專攻，如是而已。",
                svo: "<span class='adv'>是故</span><span class='subj'>弟子</span><span class='adv'>不必</span><span class='adv'>不</span><span class='verb'>如</span><span class='obj'>師</span>，<span class='subj'>師</span><span class='adv'>不必</span><span class='verb'>賢於</span><span class='obj'>弟子</span>。<span class='subj'>聞道</span><span class='verb'>有</span><span class='obj'>先後</span>，<span class='subj'>術業</span><span class='verb'>有</span><span class='obj'>專攻</span>，<span class='adv'>如是而已</span>。",
                svo_trans: "<ruby><span class='adv'>是故</span><rt>因此</rt></ruby><ruby><span class='subj'>弟子</span><rt>學生</rt></ruby><ruby><span class='adv'>不必</span><rt>不一定</rt></ruby><ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>如</span><rt>如</rt></ruby><ruby><span class='obj'>師</span><rt>老師</rt></ruby>，<ruby><span class='subj'>師</span><rt>老師</rt></ruby><ruby><span class='adv'>不必</span><rt>不一定</rt></ruby><ruby><span class='verb'>賢於</span><rt>比……賢能</rt></ruby><ruby><span class='obj'>弟子</span><rt>學生</rt></ruby>。<ruby><span class='subj'>聞道</span><rt>懂得道理</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>先後</span><rt>先後</rt></ruby>，<ruby><span class='subj'>術業</span><rt>學術技藝</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>專攻</span><rt>專門的研究</rt></ruby>，<ruby><span class='adv'>如是而已</span><rt>如此罷了</rt></ruby>。"
            }
        ]
    },
    shide: {
        title: "始得西山宴遊記",
        author: "柳宗元",
        level: 4,
        sentences: [
            {
                original: "自余為僇人，居是州，恆惴慄。",
                svo: "<span class='adv'>自</span><span class='subj'>余</span><span class='verb'>為</span><span class='obj'>僇人</span>，<span class='verb'>居</span><span class='obj'>是州</span>，<span class='adv'>恆</span><span class='verb'>惴慄</span>。",
                svo_trans: "<ruby><span class='adv'>自</span><rt>自從</rt></ruby><ruby><span class='subj'>余</span><rt>我</rt></ruby><ruby><span class='verb'>為</span><rt>成為</rt></ruby><ruby><span class='obj'>僇人</span><rt>被貶謫的罪人</rt></ruby>，<ruby><span class='verb'>居</span><rt>居住</rt></ruby><ruby><span class='obj'>是州</span><rt>在這個州</rt></ruby>，<ruby><span class='adv'>恆</span><rt>常常</rt></ruby><ruby><span class='verb'>惴慄</span><rt>憂懼不安</rt></ruby>。"
            },
            {
                original: "其隙也，則施施而行，漫漫而遊。",
                svo: "<span class='attr'>其</span><span class='subj'>隙</span>也，<span class='adv'>則</span><span class='adv'>施施</span>而<span class='verb'>行</span>，<span class='adv'>漫漫</span>而<span class='verb'>遊</span>。",
                svo_trans: "<ruby><span class='attr'>其</span><span class='subj'>隙</span><rt>公務閒暇的時候</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='adv'>施施</span><rt>緩慢地</rt></ruby>而<ruby><span class='verb'>行</span><rt>行走</rt></ruby>，<ruby><span class='adv'>漫漫</span><rt>隨意地</rt></ruby>而<ruby><span class='verb'>遊</span><rt>遊覽</rt></ruby>。"
            },
            {
                original: "然後知是山之特立，不與培塿為類。",
                svo: "<span class='adv'>然後</span><span class='verb'>知</span><span class='subj'>是山之特立</span>，<span class='adv'>不與</span><span class='obj'>培塿</span><span class='verb'>為類</span>。",
                svo_trans: "<ruby><span class='adv'>然後</span><rt>這之後</rt></ruby><ruby><span class='verb'>知</span><rt>才知道</rt></ruby><ruby><span class='subj'>是山之特立</span><rt>這座山的獨立超群</rt></ruby>，<ruby><span class='adv'>不與</span><rt>不和</rt></ruby><ruby><span class='obj'>培塿</span><rt>小土丘</rt></ruby><ruby><span class='verb'>為類</span><rt>同類</rt></ruby>。"
            }
        ]
    },
    shuidiaogetou: {
        title: "水調歌頭並序",
        author: "蘇軾",
        level: 4,
        sentences: [
            {
                original: "明月幾時有？把酒問青天。",
                svo: "<span class='subj'>明月</span><span class='adv'>幾時</span><span class='verb'>有</span>？<span class='verb'>把</span><span class='obj'>酒</span><span class='verb'>問</span><span class='obj'>青天</span>。",
                svo_trans: "<ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='adv'>幾時</span><rt>什麼時候</rt></ruby><ruby><span class='verb'>有</span><rt>開始有</rt></ruby>？<ruby><span class='verb'>把</span><rt>端起</rt></ruby><ruby><span class='obj'>酒</span><rt>酒杯</rt></ruby><ruby><span class='verb'>問</span><rt>詢問</rt></ruby><ruby><span class='obj'>青天</span><rt>青天</rt></ruby>。"
            },
            {
                original: "但願人長久，千里共嬋娟。",
                svo: "<span class='adv'>但願</span><span class='subj'>人</span><span class='verb'>長久</span>，<span class='attr'>千里</span><span class='adv'>共</span><span class='verb'>嬋娟</span>。",
                svo_trans: "<ruby><span class='adv'>但願</span><rt>只希望</rt></ruby><ruby><span class='subj'>人</span><rt>人們</rt></ruby><ruby><span class='verb'>長久</span><rt>長久平安</rt></ruby>，<ruby><span class='attr'>千里</span><rt>相隔千里</rt></ruby><ruby><span class='adv'>共</span><rt>共同</rt></ruby><ruby><span class='verb'>嬋娟</span><rt>欣賞美好的月色</rt></ruby>。"
            }
        ]
    },
    manjianghong: {
        title: "滿江紅(怒髮衝冠)",
        author: "岳飛",
        level: 4,
        sentences: [
            {
                original: "怒髮衝冠，憑欄處、瀟瀟雨歇。",
                svo: "<span class='attr'>怒</span><span class='subj'>髮</span><span class='verb'>衝</span><span class='obj'>冠</span>，<span class='verb'>憑</span><span class='obj'>欄</span><span class='adv'>處</span>、<span class='adv'>瀟瀟</span><span class='subj'>雨</span><span class='verb'>歇</span>。",
                svo_trans: "<ruby><span class='attr'>怒</span><span class='subj'>髮</span><rt>憤怒的頭髮</rt></ruby><ruby><span class='verb'>衝</span><rt>頂起</rt></ruby><ruby><span class='obj'>冠</span><rt>帽子</rt></ruby>，<ruby><span class='verb'>憑</span><rt>靠著</rt></ruby><ruby><span class='obj'>欄</span><rt>欄杆</rt></ruby><ruby><span class='adv'>處</span><rt>的地方</rt></ruby>，<ruby><span class='adv'>瀟瀟</span><rt>急驟的</rt></ruby><ruby><span class='subj'>雨</span><rt>雨</rt></ruby><ruby><span class='verb'>歇</span><rt>停了</rt></ruby>。"
            },
            {
                original: "三十功名塵與土，八千里路雲和月。",
                svo: "<span class='attr'>三十</span><span class='subj'>功名</span><span class='verb'>塵與土</span>，<span class='attr'>八千里</span><span class='subj'>路</span><span class='verb'>雲和月</span>。",
                svo_trans: "<ruby><span class='attr'>三十</span><rt>三十年來的</rt></ruby><ruby><span class='subj'>功名</span><rt>功名</rt></ruby>如同<ruby><span class='verb'>塵與土</span><rt>塵土</rt></ruby>，<ruby><span class='attr'>八千里</span><rt>八千里的</rt></ruby><ruby><span class='subj'>路</span><rt>征戰之路</rt></ruby>伴隨著<ruby><span class='verb'>雲和月</span><rt>雲和月</rt></ruby>。"
            },
            {
                original: "莫等閒，白了少年頭，空悲切！",
                svo: "<span class='adv'>莫</span><span class='verb'>等閒</span>，<span class='verb'>白</span>了<span class='attr'>少年</span><span class='obj'>頭</span>，<span class='adv'>空</span><span class='verb'>悲切</span>！",
                svo_trans: "<ruby><span class='adv'>莫</span><rt>不要</rt></ruby><ruby><span class='verb'>等閒</span><rt>虛度光陰</rt></ruby>，<ruby><span class='verb'>白</span><rt>使變白</rt></ruby>了<ruby><span class='attr'>少年</span><span class='obj'>頭</span><rt>年輕人的頭髮</rt></ruby>，<ruby><span class='adv'>空</span><rt>白白地</rt></ruby><ruby><span class='verb'>悲切</span><rt>悲傷</rt></ruby>！"
            }
        ]
    },
    tianjingsha: {
        title: "天淨沙秋思",
        author: "馬致遠",
        level: 4,
        sentences: [
            {
                original: "枯藤老樹昏鴉，小橋流水人家，古道西風瘦馬。",
                svo: "<span class='attr'>枯</span><span class='subj'>藤</span><span class='attr'>老</span><span class='subj'>樹</span><span class='attr'>昏</span><span class='subj'>鴉</span>，<span class='attr'>小</span><span class='subj'>橋</span><span class='attr'>流</span><span class='subj'>水</span><span class='subj'>人家</span>，<span class='attr'>古</span><span class='subj'>道</span><span class='attr'>西</span><span class='subj'>風</span><span class='attr'>瘦</span><span class='subj'>馬</span>。",
                svo_trans: "<ruby><span class='attr'>枯</span><span class='subj'>藤</span><rt>枯萎的藤蔓</rt></ruby><ruby><span class='attr'>老</span><span class='subj'>樹</span><rt>蒼老的樹</rt></ruby><ruby><span class='attr'>昏</span><span class='subj'>鴉</span><rt>黃昏的烏鴉</rt></ruby>，<ruby><span class='attr'>小</span><span class='subj'>橋</span><rt>小橋</rt></ruby><ruby><span class='attr'>流</span><span class='subj'>水</span><rt>流水</rt></ruby><ruby><span class='subj'>人家</span><rt>人家</rt></ruby>，<ruby><span class='attr'>古</span><span class='subj'>道</span><rt>古道</rt></ruby><ruby><span class='attr'>西</span><span class='subj'>風</span><rt>西風</rt></ruby><ruby><span class='attr'>瘦</span><span class='subj'>馬</span><rt>瘦馬</rt></ruby>。"
            },
            {
                original: "夕陽西下，斷腸人在天涯。",
                svo: "<span class='subj'>夕陽</span><span class='adv'>西</span><span class='verb'>下</span>，<span class='attr'>斷腸</span><span class='subj'>人</span><span class='verb'>在</span><span class='obj'>天涯</span>。",
                svo_trans: "<ruby><span class='subj'>夕陽</span><rt>夕陽</rt></ruby><ruby><span class='adv'>西</span><rt>向西</rt></ruby><ruby><span class='verb'>下</span><rt>落下</rt></ruby>，<ruby><span class='attr'>斷腸</span><span class='subj'>人</span><rt>悲傷欲絕的人</rt></ruby><ruby><span class='verb'>在</span><rt>在</rt></ruby><ruby><span class='obj'>天涯</span><rt>天涯</rt></ruby>。"
            }
        ]
    }

};

// 導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALL_ARTICLES };
}