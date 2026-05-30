// ---- 原有數據庫與邏輯 ----
    const ALL_ARTICLES = {
        zhengran: {
            title: "鄭人買履",
            sentences: [
                { original: "鄭人有欲買履者，先自度其足，而置之其坐。", svo: "<span class='attr'>鄭</span><span class='subj'>人</span> <span class='verb'>有</span> <span class='attr'>欲買履</span><span class='obj'>者</span>，<span class='adv'>先自</span><span class='verb'>度</span><span class='attr'>其</span><span class='obj'>足</span>，而<span class='verb'>置</span><span class='obj'>之</span><span class='adv'>其坐</span>。", svo_trans: "<ruby><span class='attr'>鄭</span><span class='subj'>人</span><rt>鄭國人</rt></ruby> <ruby><span class='verb'>有</span><rt>想</rt></ruby> <ruby><span class='attr'>欲買履</span><span class='obj'>者</span><rt>買鞋的人</rt></ruby>，<ruby><span class='adv'>先自</span><rt>先自己</rt></ruby><ruby><span class='verb'>度</span><rt>量度</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>足</span><rt>他的腳</rt></ruby>，而<ruby><span class='verb'>置</span><rt>放</rt></ruby><ruby><span class='obj'>之</span><rt>尺碼</rt></ruby><ruby><span class='adv'>其坐</span><rt>在座位上</rt></ruby>。" },
                { original: "至之市，而忘操之。", svo: "<span class='adv'>至</span><span class='verb'>之</span><span class='obj'>市</span>，而<span class='verb'>忘操</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='adv'>至</span><rt>等到</rt></ruby><ruby><span class='verb'>之</span><rt>前往</rt></ruby><ruby><span class='obj'>市</span><rt>集市</rt></ruby>，而<ruby><span class='verb'>忘操</span><rt>忘記帶</rt></ruby><ruby><span class='obj'>之</span><rt>尺碼</rt></ruby>。" },
                { original: "已得履，乃曰：「吾忘持度。」反歸取之。", svo: "<span class='adv'>已</span><span class='verb'>得</span><span class='obj'>履</span>，乃<span class='verb'>曰</span>：「<span class='subj'>吾</span><span class='verb'>忘持</span><span class='obj'>度</span>。」<span class='adv'>反歸</span><span class='verb'>取</span><span class='obj'>之</span>。", svo_trans: "<ruby><span class='adv'>已</span><rt>已經</rt></ruby><ruby><span class='verb'>得</span><rt>挑好</rt></ruby><ruby><span class='obj'>履</span><rt>鞋</rt></ruby>，乃<ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<span class='subj'>吾</span><ruby><span class='verb'>忘持</span><rt>忘帶</rt></ruby><ruby><span class='obj'>度</span><rt>尺碼</rt></ruby>。」<ruby><span class='adv'>反歸</span><rt>返回去</rt></ruby><ruby><span class='verb'>取</span><rt>拿</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。" },
                { original: "及反，市罷，遂不得履。", svo: "<span class='adv'>及</span><span class='verb'>反</span>，<span class='subj'>市</span><span class='verb'>罷</span>，<span class='adv'>遂不</span><span class='verb'>得</span><span class='obj'>履</span>。", svo_trans: "<ruby><span class='adv'>及</span><rt>等到</rt></ruby><ruby><span class='verb'>反</span><rt>返回</rt></ruby>，<ruby><span class='subj'>市</span><rt>市集</rt></ruby><ruby><span class='verb'>罷</span><rt>散了</rt></ruby>，<ruby><span class='adv'>遂不</span><rt>於是沒</rt></ruby><ruby><span class='verb'>得</span><rt>買到</rt></ruby><ruby><span class='obj'>履</span><rt>鞋</rt></ruby>。" }
            ]
        },
        lunyu: { title: "論語四則", sentences: [ { original: "子曰：「學而時習之，不亦說乎？」", svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='verb'>學</span>而<span class='adv'>時</span><span class='verb'>習</span><span class='obj'>之</span>，<span class='adv'>不亦</span><span class='verb'>說</span>乎？」", svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby>曰：「<ruby>學<rt>學習</rt></ruby>而<ruby><span class='adv'>時</span><rt>按時</rt></ruby><ruby>習<rt>溫習</rt></ruby>之，不亦<ruby>說<rt>悅</rt></ruby>乎？」" } ] },
        xueyi: { title: "二子學弈", sentences: [ { original: "弈秋，通國之善弈者也。", svo: "<span class='subj'>弈秋</span>，<span class='attr'>通國之善弈</span><span class='obj'>者</span>也。", svo_trans: "<ruby>弈秋<rt>人名</rt></ruby>，<ruby>通國之善弈<rt>全國最擅長下棋</rt></ruby>者也。" } ] },
        yubang: { title: "鷸蚌相爭", sentences: [ { original: "蚌方出曝，而鷸啄其肉，蚌合而箝其喙。", svo: "<span class='subj'>蚌</span><span class='adv'>方</span><span class='verb'>出曝</span>，而<span class='subj'>鷸</span><span class='verb'>啄</span><span class='attr'>其</span><span class='obj'>肉</span>，<span class='subj'>蚌</span><span class='verb'>合</span>而<span class='verb'>箝</span><span class='attr'>其</span><span class='obj'>喙</span>。", svo_trans: "<ruby>蚌<rt>河蚌</rt></ruby><ruby><span class='adv'>方</span><rt>剛好</rt></ruby><ruby>出曝<rt>出來曬太陽</rt></ruby>，而<ruby>鷸<rt>鷸鳥</rt></ruby>啄其肉..." } ] },
        guanju: { 
            title: "國風 關雎", 
            sentences: [ 
                { 
                    original: "關關雎鳩，在河之洲。", 
                    svo: "<span class='adv'>關關</span><span class='subj'>雎鳩</span>，<span class='adv'>在</span><span class='attr'>河之</span><span class='obj'>洲</span>。", 
                    svo_trans: "<ruby><span class='adv'>關關</span><rt>鳥鳴聲</rt></ruby><ruby><span class='subj'>雎鳩</span><rt>水鳥</rt></ruby>，<ruby><span class='adv'>在</span><rt>棲息在</rt></ruby><ruby><span class='attr'>河之</span><rt>黃河的</rt></ruby><ruby><span class='obj'>洲</span><rt>沙洲</rt></ruby>。" 
                },
                {
                    original: "窈窕淑女，君子好逑。",
                    svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='attr'>君子</span><span class='obj'>好逑</span>。",
                    svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='attr'>君子</span><rt>小伙子</rt></ruby><ruby><span class='obj'>好逑</span><rt>好配偶</rt></ruby>。"
                },
                {
                    original: "參差荇菜，左右流之。",
                    svo: "<span class='attr'>參差</span><span class='subj'>荇菜</span>，<span class='adv'>左右</span><span class='verb'>流</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>參差</span><rt>長短不齊的</rt></ruby><ruby><span class='subj'>荇菜</span><rt>荇菜</rt></ruby>，<ruby><span class='adv'>左右</span><rt>在船的兩邊</rt></ruby><ruby><span class='verb'>流</span><rt>撈取</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。"
                },
                {
                    original: "窈窕淑女，寤寐求之。",
                    svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='adv'>寤寐</span><span class='verb'>求</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='adv'>寤寐</span><rt>醒來夢裡都</rt></ruby><ruby><span class='verb'>求</span><rt>追求</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby>。"
                },
                {
                    original: "求之不得，寤寐思服。",
                    svo: "<span class='verb'>求</span><span class='obj'>之</span><span class='adv'>不</span><span class='verb'>得</span>，<span class='adv'>寤寐</span><span class='verb'>思服</span>。",
                    svo_trans: "<ruby><span class='verb'>求</span><rt>追求</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby><ruby><span class='adv'>不</span><rt>沒能</rt></ruby><ruby><span class='verb'>得</span><rt>得到</rt></ruby>，<ruby><span class='adv'>寤寐</span><rt>醒來夢裡都</rt></ruby><ruby><span class='verb'>思服</span><rt>思念</rt></ruby>。"
                },
                {
                    original: "悠哉悠哉，輾轉反側。",
                    svo: "<span class='adv'>悠哉悠哉</span>，<span class='verb'>輾轉反側</span>。",
                    svo_trans: "<ruby><span class='adv'>悠哉悠哉</span><rt>思念悠長啊</rt></ruby>，<ruby><span class='verb'>輾轉反側</span><rt>翻來覆去睡不著</rt></ruby>。"
                },
                {
                    original: "參差荇菜，左右采之。",
                    svo: "<span class='attr'>參差</span><span class='subj'>荇菜</span>，<span class='adv'>左右</span><span class='verb'>采</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>參差</span><rt>長短不齊的</rt></ruby><ruby><span class='subj'>荇菜</span><rt>荇菜</rt></ruby>，<ruby><span class='adv'>左右</span><rt>在船的兩邊</rt></ruby><ruby><span class='verb'>采</span><rt>採摘</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。"
                },
                {
                    original: "窈窕淑女，琴瑟友之。",
                    svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='adv'>琴瑟</span><span class='verb'>友</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='adv'>琴瑟</span><rt>彈琴鼓瑟</rt></ruby><ruby><span class='verb'>友</span><rt>親近</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby>。"
                },
                {
                    original: "參差荇菜，左右芼之。",
                    svo: "<span class='attr'>參差</span><span class='subj'>荇菜</span>，<span class='adv'>左右</span><span class='verb'>芼</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>參差</span><rt>長短不齊的</rt></ruby><ruby><span class='subj'>荇菜</span><rt>荇菜</rt></ruby>，<ruby><span class='adv'>左右</span><rt>在船的兩邊</rt></ruby><ruby><span class='verb'>芼</span><rt>挑選</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。"
                },
                {
                    original: "窈窕淑女，鐘鼓樂之。",
                    svo: "<span class='attr'>窈窕</span><span class='subj'>淑女</span>，<span class='adv'>鐘鼓</span><span class='verb'>樂</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>窈窕</span><rt>美麗賢淑的</rt></ruby><ruby><span class='subj'>淑女</span><rt>好姑娘</rt></ruby>，<ruby><span class='adv'>鐘鼓</span><rt>敲鐘擊鼓</rt></ruby><ruby><span class='verb'>樂</span><rt>使快樂</rt></ruby><ruby><span class='obj'>之</span><rt>她</rt></ruby>。"
                }
            ] 
        },
        shouzhudaitu: {
            title: "守株待兔",
            sentences: [
                {
                    original: "宋人有耕田者。",
                    svo: "<span class='attr'>宋</span><span class='subj'>人</span><span class='verb'>有</span><span class='attr'>耕田</span><span class='obj'>者</span>。",
                    svo_trans: "<ruby><span class='attr'>宋</span><span class='subj'>人</span><rt>宋國人</rt></ruby><ruby><span class='verb'>有</span><rt>有一個</rt></ruby><ruby><span class='attr'>耕田</span><span class='obj'>者</span><rt>種田的人</rt></ruby>。"
                },
                {
                    original: "田中有株，兔走觸株，折頸而死。",
                    svo: "<span class='adv'>田中</span><span class='verb'>有</span><span class='obj'>株</span>，<span class='subj'>兔</span><span class='verb'>走觸</span><span class='obj'>株</span>，<span class='verb'>折</span><span class='obj'>頸</span>而<span class='verb'>死</span>。",
                    svo_trans: "<ruby><span class='adv'>田中</span><rt>田裡</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>株</span><rt>樹樁</rt></ruby>，<ruby><span class='subj'>兔</span><rt>兔子</rt></ruby><ruby><span class='verb'>走觸</span><rt>跑來撞到</rt></ruby><ruby><span class='obj'>株</span><rt>樹樁</rt></ruby>，<ruby><span class='verb'>折</span><rt>折斷</rt></ruby><ruby><span class='obj'>頸</span><rt>脖子</rt></ruby>而<ruby><span class='verb'>死</span><rt>死掉</rt></ruby>。"
                },
                {
                    original: "因釋其耒而守株，冀復得兔。",
                    svo: "因<span class='verb'>釋</span><span class='attr'>其</span><span class='obj'>耒</span>而<span class='verb'>守</span><span class='obj'>株</span>，<span class='verb'>冀</span><span class='adv'>復</span><span class='verb'>得</span><span class='obj'>兔</span>。",
                    svo_trans: "因<ruby><span class='verb'>釋</span><rt>放下</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>耒</span><rt>他的農具</rt></ruby>而<ruby><span class='verb'>守</span><rt>守著</rt></ruby><ruby><span class='obj'>株</span><rt>樹樁</rt></ruby>，<ruby><span class='verb'>冀</span><rt>希望能</rt></ruby><ruby><span class='adv'>復</span><rt>再次</rt></ruby><ruby><span class='verb'>得</span><rt>得到</rt></ruby><ruby><span class='obj'>兔</span><rt>兔子</rt></ruby>。"
                },
                {
                    original: "兔不可復得，而身為宋國笑。",
                    svo: "<span class='subj'>兔</span><span class='adv'>不可復</span><span class='verb'>得</span>，而<span class='subj'>身</span><span class='verb'>為</span><span class='obj'>宋國笑</span>。",
                    svo_trans: "<ruby><span class='subj'>兔</span><rt>兔子</rt></ruby><ruby><span class='adv'>不可復</span><rt>不可能再</rt></ruby><ruby><span class='verb'>得</span><rt>得到</rt></ruby>，而<ruby><span class='subj'>身</span><rt>自己</rt></ruby><ruby><span class='verb'>為</span><rt>被</rt></ruby><ruby><span class='obj'>宋國笑</span><rt>宋國人恥笑</rt></ruby>。"
                }
            ]
        },
        jiangnan: {
            title: "江南",
            sentences: [
                {
                    original: "江南可採蓮，蓮葉何田田。",
                    svo: "<span class='adv'>江南</span><span class='verb'>可採</span><span class='obj'>蓮</span>，<span class='subj'>蓮葉</span><span class='adv'>何</span><span class='verb'>田田</span>。",
                    svo_trans: "<ruby><span class='adv'>江南</span><rt>長江以南</rt></ruby><ruby><span class='verb'>可採</span><rt>可以採摘</rt></ruby><ruby><span class='obj'>蓮</span><rt>蓮蓬</rt></ruby>，<ruby><span class='subj'>蓮葉</span><rt>蓮葉</rt></ruby><ruby><span class='adv'>何</span><rt>多麼</rt></ruby><ruby><span class='verb'>田田</span><rt>茂盛相連</rt></ruby>。"
                },
                {
                    original: "魚戲蓮葉間。",
                    svo: "<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉間</span>。",
                    svo_trans: "<ruby><span class='subj'>魚</span><rt>魚兒</rt></ruby><ruby><span class='verb'>戲</span><rt>嬉戲</rt></ruby><ruby><span class='adv'>蓮葉間</span><rt>在蓮葉之間</rt></ruby>。"
                },
                {
                    original: "魚戲蓮葉東，魚戲蓮葉西，魚戲蓮葉南，魚戲蓮葉北。",
                    svo: "<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉東</span>，<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉西</span>，<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉南</span>，<span class='subj'>魚</span><span class='verb'>戲</span><span class='adv'>蓮葉北</span>。",
                    svo_trans: "<ruby><span class='subj'>魚</span><rt>魚兒</rt></ruby><ruby><span class='verb'>戲</span><rt>游玩於</rt></ruby><ruby><span class='adv'>蓮葉東</span><rt>蓮葉東邊</rt></ruby>..."
                }
            ]
        },
        qibu: {
            title: "七步詩",
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
        yonge: {
            title: "詠鵝",
            sentences: [
                {
                    original: "鵝鵝鵝，曲項向天歌。",
                    svo: "<span class='subj'>鵝鵝鵝</span>，<span class='verb'>曲</span><span class='obj'>項</span><span class='adv'>向天</span><span class='verb'>歌</span>。",
                    svo_trans: "<ruby><span class='subj'>鵝鵝鵝</span><rt>鵝呀鵝</rt></ruby>，<ruby><span class='verb'>曲</span><rt>彎曲著</rt></ruby><ruby><span class='obj'>項</span><rt>脖子</rt></ruby><ruby><span class='adv'>向天</span><rt>對著天空</rt></ruby><ruby><span class='verb'>歌</span><rt>唱歌</rt></ruby>。"
                },
                {
                    original: "白毛浮綠水，紅掌撥清波。",
                    svo: "<span class='attr'>白</span><span class='subj'>毛</span><span class='verb'>浮</span><span class='attr'>綠</span><span class='obj'>水</span>，<span class='attr'>紅</span><span class='subj'>掌</span><span class='verb'>撥</span><span class='attr'>清</span><span class='obj'>波</span>。",
                    svo_trans: "<ruby><span class='attr'>白</span><span class='subj'>毛</span><rt>白色的羽毛</rt></ruby><ruby><span class='verb'>浮</span><rt>浮在</rt></ruby><ruby><span class='attr'>綠</span><span class='obj'>水</span><rt>綠水上</rt></ruby>，<ruby><span class='attr'>紅</span><span class='subj'>掌</span><rt>紅色的腳掌</rt></ruby><ruby><span class='verb'>撥</span><rt>撥動著</rt></ruby><ruby><span class='attr'>清</span><span class='obj'>波</span><rt>清澈的水波</rt></ruby>。"
                }
            ]
        },
        chunxiao: {
            title: "春曉",
            sentences: [
                {
                    original: "春眠不覺曉，處處聞啼鳥。",
                    svo: "<span class='adv'>春</span><span class='verb'>眠</span><span class='adv'>不覺</span><span class='obj'>曉</span>，<span class='adv'>處處</span><span class='verb'>聞</span><span class='attr'>啼</span><span class='obj'>鳥</span>。",
                    svo_trans: "<ruby><span class='adv'>春</span><rt>春天</rt></ruby><ruby><span class='verb'>眠</span><rt>睡覺</rt></ruby><ruby><span class='adv'>不覺</span><rt>不知不覺</rt></ruby><ruby><span class='obj'>曉</span><rt>天亮</rt></ruby>，<ruby><span class='adv'>處處</span><rt>到處</rt></ruby><ruby><span class='verb'>聞</span><rt>聽見</rt></ruby><ruby><span class='attr'>啼</span><span class='obj'>鳥</span><rt>鳥兒啼叫</rt></ruby>。"
                },
                {
                    original: "夜來風雨聲，花落知多少。",
                    svo: "<span class='adv'>夜來</span><span class='attr'>風雨</span><span class='subj'>聲</span>，<span class='subj'>花</span><span class='verb'>落</span><span class='verb'>知</span><span class='obj'>多少</span>。",
                    svo_trans: "<ruby><span class='adv'>夜來</span><rt>昨夜裡</rt></ruby><ruby><span class='attr'>風雨</span><span class='subj'>聲</span><rt>風雨的聲音</rt></ruby>，<ruby><span class='subj'>花</span><rt>花朵</rt></ruby><ruby><span class='verb'>落</span><rt>掉落了</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='obj'>多少</span><rt>有多少呢</rt></ruby>。"
                }
            ]
        },
        dengguanquelou: {
            title: "登鹳鵲樓", // 這裡依照導航表的文字
            sentences: [
                {
                    original: "白日依山盡，黃河入海流。",
                    svo: "<span class='subj'>白日</span><span class='adv'>依山</span><span class='verb'>盡</span>，<span class='subj'>黃河</span><span class='adv'>入海</span><span class='verb'>流</span>。",
                    svo_trans: "<ruby><span class='subj'>白日</span><rt>夕陽</rt></ruby><ruby><span class='adv'>依山</span><rt>依傍著群山</rt></ruby><ruby><span class='verb'>盡</span><rt>落下</rt></ruby>，<ruby><span class='subj'>黃河</span><rt>黃河水</rt></ruby><ruby><span class='adv'>入海</span><rt>向著大海</rt></ruby><ruby><span class='verb'>流</span><rt>奔流</rt></ruby>。"
                },
                {
                    original: "欲窮千里目，更上一層樓。",
                    svo: "<span class='verb'>欲窮</span><span class='attr'>千里</span><span class='obj'>目</span>，<span class='adv'>更</span><span class='verb'>上</span><span class='attr'>一層</span><span class='obj'>樓</span>。",
                    svo_trans: "<ruby><span class='verb'>欲窮</span><rt>想要看盡</rt></ruby><ruby><span class='attr'>千里</span><span class='obj'>目</span><rt>千里的風光</rt></ruby>，<ruby><span class='adv'>更</span><rt>再</rt></ruby><ruby><span class='verb'>上</span><rt>登上一層</rt></ruby><ruby><span class='attr'>一層</span><span class='obj'>樓</span><rt>樓閣</rt></ruby>。"
                }
            ]
        },
        jingyesi: {
            title: "靜夜思",
            sentences: [
                {
                    original: "床前明月光，疑是地上霜。",
                    svo: "<span class='adv'>床前</span><span class='attr'>明月</span><span class='subj'>光</span>，<span class='verb'>疑是</span><span class='attr'>地上</span><span class='obj'>霜</span>。",
                    svo_trans: "<ruby><span class='adv'>床前</span><rt>床鋪前</rt></ruby><ruby><span class='attr'>明月</span><span class='subj'>光</span><rt>明亮的月光</rt></ruby>，<ruby><span class='verb'>疑是</span><rt>懷疑是</rt></ruby><ruby><span class='attr'>地上</span><span class='obj'>霜</span><rt>地上的白霜</rt></ruby>。"
                },
                {
                    original: "舉頭望明月，低頭思故鄉。",
                    svo: "<span class='verb'>舉頭</span><span class='verb'>望</span><span class='attr'>明</span><span class='obj'>月</span>，<span class='verb'>低頭</span><span class='verb'>思</span><span class='attr'>故</span><span class='obj'>鄉</span>。",
                    svo_trans: "<ruby><span class='verb'>舉頭</span><rt>抬起頭</rt></ruby><ruby><span class='verb'>望</span><rt>望著</rt></ruby><ruby><span class='attr'>明</span><span class='obj'>月</span><rt>明月</rt></ruby>，<ruby><span class='verb'>低頭</span><rt>低下頭</rt></ruby><ruby><span class='verb'>思</span><rt>思念</rt></ruby><ruby><span class='attr'>故</span><span class='obj'>鄉</span><rt>故鄉</rt></ruby>。"
                }
            ]
        },
        youziyin: {
            title: "遊子吟",
            sentences: [
                {
                    original: "慈母手中線，遊子身上衣。",
                    svo: "<span class='attr'>慈母手中</span><span class='subj'>線</span>，<span class='attr'>遊子身上</span><span class='obj'>衣</span>。",
                    svo_trans: "<ruby><span class='attr'>慈母手中</span><span class='subj'>線</span><rt>慈母手中的針線</rt></ruby>，<ruby><span class='attr'>遊子身上</span><span class='obj'>衣</span><rt>遊子身上的衣服</rt></ruby>。"
                },
                {
                    original: "臨行密密縫，意恐遲遲歸。",
                    svo: "<span class='adv'>臨行</span><span class='adv'>密密</span><span class='verb'>縫</span>，<span class='subj'>意</span><span class='verb'>恐</span><span class='adv'>遲遲</span><span class='verb'>歸</span>。",
                    svo_trans: "<ruby><span class='adv'>臨行</span><rt>臨走前</rt></ruby><ruby><span class='adv'>密密</span><rt>細密地</rt></ruby><ruby><span class='verb'>縫</span><rt>縫補</rt></ruby>，<ruby><span class='subj'>意</span><rt>心裡</rt></ruby><ruby><span class='verb'>恐</span><rt>擔心</rt></ruby><ruby><span class='adv'>遲遲</span><rt>很晚才</rt></ruby><ruby><span class='verb'>歸</span><rt>回來</rt></ruby>。"
                },
                {
                    original: "誰言寸草心，報得三春暉。",
                    svo: "<span class='subj'>誰</span><span class='verb'>言</span><span class='attr'>寸草</span><span class='obj'>心</span>，<span class='verb'>報得</span><span class='attr'>三春</span><span class='obj'>暉</span>。",
                    svo_trans: "<ruby><span class='subj'>誰</span><rt>誰</rt></ruby><ruby><span class='verb'>言</span><rt>說</rt></ruby><ruby><span class='attr'>寸草</span><span class='obj'>心</span><rt>小草般微弱的心意</rt></ruby>，<ruby><span class='verb'>報得</span><rt>能報答得了</rt></ruby><ruby><span class='attr'>三春</span><span class='obj'>暉</span><rt>春天的陽光</rt></ruby>。"
                }
            ]
        },
        huixiangoushu: {
            title: "回鄉偶書",
            sentences: [
                {
                    original: "少小離家老大回，鄉音無改鬢毛衰。",
                    svo: "<span class='adv'>少小</span><span class='verb'>離</span><span class='obj'>家</span><span class='adv'>老大</span><span class='verb'>回</span>，<span class='subj'>鄉音</span><span class='adv'>無</span><span class='verb'>改</span><span class='subj'>鬢毛</span><span class='verb'>衰</span>。",
                    svo_trans: "<ruby><span class='adv'>少小</span><rt>小時候</rt></ruby><ruby><span class='verb'>離</span><rt>離開</rt></ruby><ruby><span class='obj'>家</span><rt>家鄉</rt></ruby><ruby><span class='adv'>老大</span><rt>年老時</rt></ruby><ruby><span class='verb'>回</span><rt>回來</rt></ruby>，<ruby><span class='subj'>鄉音</span><rt>家鄉的口音</rt></ruby><ruby><span class='adv'>無</span><rt>沒有</rt></ruby><ruby><span class='verb'>改</span><rt>改變</rt></ruby><ruby><span class='subj'>鬢毛</span><rt>兩鬢的頭髮</rt></ruby><ruby><span class='verb'>衰</span><rt>稀疏了</rt></ruby>。"
                },
                {
                    original: "兒童相見不相識，笑問客從何處來。",
                    svo: "<span class='subj'>兒童</span><span class='adv'>相</span><span class='verb'>見</span><span class='adv'>不相</span><span class='verb'>識</span>，<span class='adv'>笑</span><span class='verb'>問</span><span class='subj'>客</span><span class='adv'>從何處</span><span class='verb'>來</span>。",
                    svo_trans: "<ruby><span class='subj'>兒童</span><rt>村裡的孩童</rt></ruby><ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='adv'>不相</span><rt>卻互不</rt></ruby><ruby><span class='verb'>識</span><rt>認識</rt></ruby>，<ruby><span class='adv'>笑</span><rt>笑著</rt></ruby><ruby><span class='verb'>問</span><rt>問</rt></ruby><ruby><span class='subj'>客</span><rt>客人</rt></ruby><ruby><span class='adv'>從何處</span><rt>從哪裡</rt></ruby><ruby><span class='verb'>來</span><rt>來</rt></ruby>。"
                }
            ]
        },
        fengqiaoyebo: {
            title: "楓橋夜泊",
            sentences: [
                {
                    original: "月落烏啼霜滿天，江楓漁火對愁眠。",
                    svo: "<span class='subj'>月</span><span class='verb'>落</span><span class='subj'>烏</span><span class='verb'>啼</span><span class='subj'>霜</span><span class='verb'>滿</span><span class='obj'>天</span>，<span class='subj'>江楓漁火</span><span class='verb'>對</span><span class='obj'>愁眠</span>。",
                    svo_trans: "<ruby><span class='subj'>月</span><rt>月亮</rt></ruby><ruby><span class='verb'>落</span><rt>落下</rt></ruby><ruby><span class='subj'>烏</span><rt>烏鴉</rt></ruby><ruby><span class='verb'>啼</span><rt>啼叫</rt></ruby><ruby><span class='subj'>霜</span><rt>寒霜</rt></ruby><ruby><span class='verb'>滿</span><rt>佈滿</rt></ruby><ruby><span class='obj'>天</span><rt>天空</rt></ruby>，<ruby><span class='subj'>江楓漁火</span><rt>江邊的楓樹與漁火</rt></ruby><ruby><span class='verb'>對</span><rt>對著</rt></ruby><ruby><span class='obj'>愁眠</span><rt>發愁而眠的人</rt></ruby>。"
                },
                {
                    original: "姑蘇城外寒山寺，夜半鐘聲到客船。",
                    svo: "<span class='attr'>姑蘇城外</span><span class='adv'>寒山寺</span>，<span class='adv'>夜半</span><span class='subj'>鐘聲</span><span class='verb'>到</span><span class='obj'>客船</span>。",
                    svo_trans: "<ruby><span class='attr'>姑蘇城外</span><rt>姑蘇城外的</rt></ruby><ruby><span class='adv'>寒山寺</span><rt>寒山寺</rt></ruby>，<ruby><span class='adv'>夜半</span><rt>半夜的</rt></ruby><ruby><span class='subj'>鐘聲</span><rt>鐘聲</rt></ruby><ruby><span class='verb'>到</span><rt>傳到</rt></ruby><ruby><span class='obj'>客船</span><rt>客船上</rt></ruby>。"
                }
            ]
        },
        zaofabaidi: {
            title: "早發白帝城",
            sentences: [
                {
                    original: "朝辭白帝彩雲間，千里江陵一日還。",
                    svo: "<span class='adv'>朝</span><span class='verb'>辭</span><span class='obj'>白帝</span><span class='adv'>彩雲間</span>，<span class='attr'>千里</span><span class='obj'>江陵</span><span class='adv'>一日</span><span class='verb'>還</span>。",
                    svo_trans: "<ruby><span class='adv'>朝</span><rt>早晨</rt></ruby><ruby><span class='verb'>辭</span><rt>辭別</rt></ruby><ruby><span class='obj'>白帝</span><rt>白帝城</rt></ruby><ruby><span class='adv'>彩雲間</span><rt>在彩雲之間</rt></ruby>，<ruby><span class='attr'>千里</span><span class='obj'>江陵</span><rt>遠在千里的江陵</rt></ruby><ruby><span class='adv'>一日</span><rt>一天就能</rt></ruby><ruby><span class='verb'>還</span><rt>返回</rt></ruby>。"
                },
                {
                    original: "兩岸猿聲啼不住，輕舟已過萬重山。",
                    svo: "<span class='attr'>兩岸</span><span class='subj'>猿聲</span><span class='verb'>啼不住</span>，<span class='subj'>輕舟</span><span class='adv'>已</span><span class='verb'>過</span><span class='attr'>萬重</span><span class='obj'>山</span>。",
                    svo_trans: "<ruby><span class='attr'>兩岸</span><span class='subj'>猿聲</span><rt>兩岸的猿猴叫聲</rt></ruby><ruby><span class='verb'>啼不住</span><rt>啼叫個不停</rt></ruby>，<ruby><span class='subj'>輕舟</span><rt>輕快的小舟</rt></ruby><ruby><span class='adv'>已</span><rt>已經</rt></ruby><ruby><span class='verb'>過</span><rt>穿過</rt></ruby><ruby><span class='attr'>萬重</span><span class='obj'>山</span><rt>重重疊疊的高山</rt></ruby>。"
                }
            ]
        },
        liangzhouchi: {
            title: "涼州詞",
            sentences: [
                {
                    original: "葡萄美酒夜光杯，欲飲琵琶馬上催。",
                    svo: "<span class='attr'>葡萄</span><span class='subj'>美酒</span><span class='attr'>夜光</span><span class='obj'>杯</span>，<span class='verb'>欲飲</span><span class='subj'>琵琶</span><span class='adv'>馬上</span><span class='verb'>催</span>。",
                    svo_trans: "<ruby><span class='attr'>葡萄</span><rt>葡萄釀製的</rt></ruby><ruby><span class='subj'>美酒</span><rt>美酒</rt></ruby><ruby><span class='attr'>夜光</span><span class='obj'>杯</span><rt>盛在夜光杯裡</rt></ruby>，<ruby><span class='verb'>欲飲</span><rt>正想飲用</rt></ruby><ruby><span class='subj'>琵琶</span><rt>琵琶聲</rt></ruby><ruby><span class='adv'>馬上</span><rt>在馬背上</rt></ruby><ruby><span class='verb'>催</span><rt>催促著</rt></ruby>。"
                },
                {
                    original: "醉臥沙場君莫笑，古來征戰幾人回。",
                    svo: "<span class='adv'>醉</span><span class='verb'>臥</span><span class='adv'>沙場</span><span class='subj'>君</span><span class='adv'>莫</span><span class='verb'>笑</span>，<span class='adv'>古來</span><span class='subj'>征戰</span><span class='attr'>幾</span><span class='subj'>人</span><span class='verb'>回</span>。",
                    svo_trans: "<ruby><span class='adv'>醉</span><rt>醉倒</rt></ruby><ruby><span class='verb'>臥</span><rt>躺臥</rt></ruby><ruby><span class='adv'>沙場</span><rt>在戰場上</rt></ruby><ruby><span class='subj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>莫</span><rt>不要</rt></ruby><ruby><span class='verb'>笑</span><rt>見笑</rt></ruby>，<ruby><span class='adv'>古來</span><rt>自古以來</rt></ruby><ruby><span class='subj'>征戰</span><rt>出外打仗</rt></ruby><ruby><span class='attr'>幾</span><span class='subj'>人</span><rt>有幾個人</rt></ruby><ruby><span class='verb'>回</span><rt>能平安回來</rt></ruby>。"
                }
            ]
        },
        chusai: {
            title: "出塞",
            sentences: [
                {
                    original: "秦時明月漢時關，萬里長征人未還。",
                    svo: "<span class='attr'>秦時</span><span class='subj'>明月</span><span class='attr'>漢時</span><span class='subj'>關</span>，<span class='attr'>萬里</span><span class='adv'>長征</span><span class='subj'>人</span><span class='adv'>未</span><span class='verb'>還</span>。",
                    svo_trans: "<ruby><span class='attr'>秦時</span><rt>秦代的</rt></ruby><ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='attr'>漢時</span><rt>漢代的</rt></ruby><ruby><span class='subj'>關</span><rt>關隘</rt></ruby>，<ruby><span class='attr'>萬里</span><rt>遠赴萬里</rt></ruby><ruby><span class='adv'>長征</span><rt>長途征戰</rt></ruby><ruby><span class='subj'>人</span><rt>將士們</rt></ruby><ruby><span class='adv'>未</span><rt>還沒</rt></ruby><ruby><span class='verb'>還</span><rt>回來</rt></ruby>。"
                },
                {
                    original: "但使龍城飛將在，不教胡馬度陰山。",
                    svo: "<span class='adv'>但使</span><span class='attr'>龍城</span><span class='subj'>飛將</span><span class='verb'>在</span>，<span class='adv'>不</span><span class='verb'>教</span><span class='subj'>胡馬</span><span class='verb'>度</span><span class='obj'>陰山</span>。",
                    svo_trans: "<ruby><span class='adv'>但使</span><rt>只要</rt></ruby><ruby><span class='attr'>龍城</span><rt>鎮守龍城的</rt></ruby><ruby><span class='subj'>飛將</span><rt>飛將軍</rt></ruby><ruby><span class='verb'>在</span><rt>還在</rt></ruby>，<ruby><span class='adv'>不</span><rt>就不</rt></ruby><ruby><span class='verb'>教</span><rt>讓</rt></ruby><ruby><span class='subj'>胡馬</span><rt>敵人的戰馬</rt></ruby><ruby><span class='verb'>度</span><rt>越過</rt></ruby><ruby><span class='obj'>陰山</span><rt>陰山</rt></ruby>。"
                }
            ]
        },
        jiuyuejiuri: {
            title: "九月九日憶山東兄弟",
            sentences: [
                {
                    original: "獨在異鄉為異客，每逢佳節倍思親。",
                    svo: "<span class='adv'>獨在</span><span class='obj'>異鄉</span><span class='verb'>為</span><span class='obj'>異客</span>，<span class='adv'>每逢</span><span class='obj'>佳節</span><span class='adv'>倍</span><span class='verb'>思</span><span class='obj'>親</span>。",
                    svo_trans: "<ruby><span class='adv'>獨在</span><rt>獨自處在</rt></ruby><ruby><span class='obj'>異鄉</span><rt>外地</rt></ruby><ruby><span class='verb'>為</span><rt>作</rt></ruby><ruby><span class='obj'>異客</span><rt>他鄉的客人</rt></ruby>，<ruby><span class='adv'>每逢</span><rt>每當遇到</rt></ruby><ruby><span class='obj'>佳節</span><rt>節日</rt></ruby><ruby><span class='adv'>倍</span><rt>加倍地</rt></ruby><ruby><span class='verb'>思</span><rt>思念</rt></ruby><ruby><span class='obj'>親</span><rt>親人</rt></ruby>。"
                },
                {
                    original: "遙知兄弟登高處，遍插茱萸少一人。",
                    svo: "<span class='verb'>遙知</span><span class='subj'>兄弟</span><span class='adv'>登高</span><span class='obj'>處</span>，<span class='adv'>遍</span><span class='verb'>插</span><span class='obj'>茱萸</span><span class='verb'>少</span><span class='obj'>一人</span>。",
                    svo_trans: "<ruby><span class='verb'>遙知</span><rt>遠遠地想到</rt></ruby><ruby><span class='subj'>兄弟</span><rt>兄弟們</rt></ruby><ruby><span class='adv'>登高</span><rt>登高望遠的</rt></ruby><ruby><span class='obj'>處</span><rt>地方</rt></ruby>，<ruby><span class='adv'>遍</span><rt>全都</rt></ruby><ruby><span class='verb'>插</span><rt>插上了</rt></ruby><ruby><span class='obj'>茱萸</span><rt>茱萸</rt></ruby><ruby><span class='verb'>少</span><rt>卻少了</rt></ruby><ruby><span class='obj'>一人</span><rt>我一個人</rt></ruby>。"
                }
            ]
        },
        songyuaner: {
            title: "送元二使安西",
            sentences: [
                {
                    original: "渭城朝雨浥輕塵，客舍青青柳色新。",
                    svo: "<span class='attr'>渭城</span><span class='subj'>朝雨</span><span class='verb'>浥</span><span class='attr'>輕</span><span class='obj'>塵</span>，<span class='subj'>客舍</span><span class='verb'>青青</span><span class='subj'>柳色</span><span class='verb'>新</span>。",
                    svo_trans: "<ruby><span class='attr'>渭城</span><rt>渭城的</rt></ruby><ruby><span class='subj'>朝雨</span><rt>晨雨</rt></ruby><ruby><span class='verb'>浥</span><rt>濕潤了</rt></ruby><ruby><span class='attr'>輕</span><span class='obj'>塵</span><rt>輕揚的灰塵</rt></ruby>，<ruby><span class='subj'>客舍</span><rt>旅店旁邊</rt></ruby><ruby><span class='verb'>青青</span><rt>一片青翠</rt></ruby><ruby><span class='subj'>柳色</span><rt>柳樹的顏色</rt></ruby><ruby><span class='verb'>新</span><rt>煥然一新</rt></ruby>。"
                },
                {
                    original: "勸君更盡一杯酒，西出陽關無故人。",
                    svo: "<span class='verb'>勸</span><span class='obj'>君</span><span class='adv'>更</span><span class='verb'>盡</span><span class='attr'>一杯</span><span class='obj'>酒</span>，<span class='adv'>西</span><span class='verb'>出</span><span class='obj'>陽關</span><span class='verb'>無</span><span class='obj'>故人</span>。",
                    svo_trans: "<ruby><span class='verb'>勸</span><rt>勸</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>更</span><rt>再</rt></ruby><ruby><span class='verb'>盡</span><rt>飲盡</rt></ruby><ruby><span class='attr'>一杯</span><span class='obj'>酒</span><rt>一杯酒</rt></ruby>，<ruby><span class='adv'>西</span><rt>向西</rt></ruby><ruby><span class='verb'>出</span><rt>出了</rt></ruby><ruby><span class='obj'>陽關</span><rt>陽關之後</rt></ruby><ruby><span class='verb'>無</span><rt>就沒有</rt></ruby><ruby><span class='obj'>故人</span><rt>老朋友了</rt></ruby>。"
                }
            ]
        },
        jueju: {
            title: "絕句(兩個黃鸝鳴翠柳)",
            sentences: [
                {
                    original: "兩個黃鸝鳴翠柳，一行白鷺上青天。",
                    svo: "<span class='attr'>兩個</span><span class='subj'>黃鸝</span><span class='verb'>鳴</span><span class='attr'>翠</span><span class='obj'>柳</span>，<span class='attr'>一行</span><span class='subj'>白鷺</span><span class='verb'>上</span><span class='attr'>青</span><span class='obj'>天</span>。",
                    svo_trans: "<ruby><span class='attr'>兩個</span><rt>兩隻</rt></ruby><ruby><span class='subj'>黃鸝</span><rt>黃鸝鳥</rt></ruby><ruby><span class='verb'>鳴</span><rt>鳴叫於</rt></ruby><ruby><span class='attr'>翠</span><span class='obj'>柳</span><rt>翠綠的柳樹間</rt></ruby>，<ruby><span class='attr'>一行</span><rt>一排</rt></ruby><ruby><span class='subj'>白鷺</span><rt>白鷺鷥</rt></ruby><ruby><span class='verb'>上</span><rt>飛上</rt></ruby><ruby><span class='attr'>青</span><span class='obj'>天</span><rt>蔚藍的天空</rt></ruby>。"
                },
                {
                    original: "窗含西嶺千秋雪，門泊東吳萬里船。",
                    svo: "<span class='subj'>窗</span><span class='verb'>含</span><span class='attr'>西嶺千秋</span><span class='obj'>雪</span>，<span class='subj'>門</span><span class='verb'>泊</span><span class='attr'>東吳萬里</span><span class='obj'>船</span>。",
                    svo_trans: "<ruby><span class='subj'>窗</span><rt>窗戶</rt></ruby><ruby><span class='verb'>含</span><rt>框住了</rt></ruby><ruby><span class='attr'>西嶺千秋</span><span class='obj'>雪</span><rt>西嶺長年不化的積雪</rt></ruby>，<ruby><span class='subj'>門</span><rt>門前</rt></ruby><ruby><span class='verb'>泊</span><rt>停泊著</rt></ruby><ruby><span class='attr'>東吳萬里</span><span class='obj'>船</span><rt>從東吳遠道而來的船隻</rt></ruby>。"
                }
            ]
        },
        fudeguyuan: {
            title: "賦得古原草送別",
            sentences: [
                {
                    original: "離離原上草，一歲一枯榮。",
                    svo: "<span class='attr'>離離</span><span class='attr'>原上</span><span class='subj'>草</span>，<span class='adv'>一歲</span><span class='adv'>一</span><span class='verb'>枯榮</span>。",
                    svo_trans: "<ruby><span class='attr'>離離</span><rt>茂盛的</rt></ruby><ruby><span class='attr'>原上</span><span class='subj'>草</span><rt>草原上的草</rt></ruby>，<ruby><span class='adv'>一歲</span><rt>一年</rt></ruby><ruby><span class='adv'>一</span><rt>一次</rt></ruby><ruby><span class='verb'>枯榮</span><rt>枯萎又繁榮</rt></ruby>。"
                },
                {
                    original: "野火燒不盡，春風吹又生。",
                    svo: "<span class='subj'>野火</span><span class='verb'>燒不盡</span>，<span class='subj'>春風</span><span class='verb'>吹</span><span class='adv'>又</span><span class='verb'>生</span>。",
                    svo_trans: "<ruby><span class='subj'>野火</span><rt>野火</rt></ruby><ruby><span class='verb'>燒不盡</span><rt>無法把它燒盡</rt></ruby>，<ruby><span class='subj'>春風</span><rt>春風</rt></ruby><ruby><span class='verb'>吹</span><rt>一吹</rt></ruby><ruby><span class='adv'>又</span><rt>又會</rt></ruby><ruby><span class='verb'>生</span><rt>生長出來</rt></ruby>。"
                }
            ]
        },
        minnong2: {
            title: "憫農(其二)",
            sentences: [
                {
                    original: "鋤禾日當午，汗滴禾下土。",
                    svo: "<span class='verb'>鋤</span><span class='obj'>禾</span><span class='subj'>日</span><span class='verb'>當</span><span class='obj'>午</span>，<span class='subj'>汗</span><span class='verb'>滴</span><span class='adv'>禾下土</span>。",
                    svo_trans: "<ruby><span class='verb'>鋤</span><rt>鋤草</rt></ruby><ruby><span class='obj'>禾</span><rt>禾苗</rt></ruby><ruby><span class='subj'>日</span><rt>太陽</rt></ruby><ruby><span class='verb'>當</span><rt>正當</rt></ruby><ruby><span class='obj'>午</span><rt>正午</rt></ruby>，<ruby><span class='subj'>汗</span><rt>汗水</rt></ruby><ruby><span class='verb'>滴</span><rt>滴落</rt></ruby><ruby><span class='adv'>禾下土</span><rt>禾苗下的泥土上</rt></ruby>。"
                },
                {
                    original: "誰知盤中飧，粒粒皆辛苦。",
                    svo: "<span class='subj'>誰</span><span class='verb'>知</span><span class='attr'>盤中</span><span class='obj'>飧</span>，<span class='subj'>粒粒</span><span class='adv'>皆</span><span class='verb'>辛苦</span>。",
                    svo_trans: "<ruby><span class='subj'>誰</span><rt>誰</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='attr'>盤中</span><span class='obj'>飧</span><rt>盤子裡的飯食</rt></ruby>，<ruby><span class='subj'>粒粒</span><rt>每一粒</rt></ruby><ruby><span class='adv'>皆</span><rt>都是</rt></ruby><ruby><span class='verb'>辛苦</span><rt>辛苦換來的</rt></ruby>。"
                }
            ]
        },
        qingming: {
            title: "清明",
            sentences: [
                {
                    original: "清明時節雨紛紛，路上行人欲斷魂。",
                    svo: "<span class='adv'>清明時節</span><span class='subj'>雨</span><span class='verb'>紛紛</span>，<span class='attr'>路上</span><span class='subj'>行人</span><span class='verb'>欲斷魂</span>。",
                    svo_trans: "<ruby><span class='adv'>清明時節</span><rt>清明節的時候</rt></ruby><ruby><span class='subj'>雨</span><rt>春雨</rt></ruby><ruby><span class='verb'>紛紛</span><rt>不斷地下著</rt></ruby>，<ruby><span class='attr'>路上</span><span class='subj'>行人</span><rt>路上的旅人</rt></ruby><ruby><span class='verb'>欲斷魂</span><rt>神魂沮喪</rt></ruby>。"
                },
                {
                    original: "借問酒家何處有，牧童遙指杏花村。",
                    svo: "<span class='verb'>借問</span><span class='subj'>酒家</span><span class='adv'>何處</span><span class='verb'>有</span>，<span class='subj'>牧童</span><span class='adv'>遙</span><span class='verb'>指</span><span class='obj'>杏花村</span>。",
                    svo_trans: "<ruby><span class='verb'>借問</span><rt>請問</rt></ruby><ruby><span class='subj'>酒家</span><rt>酒館</rt></ruby><ruby><span class='adv'>何處</span><rt>哪裡</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby>，<ruby><span class='subj'>牧童</span><rt>放牛的孩子</rt></ruby><ruby><span class='adv'>遙</span><rt>遠遠地</rt></ruby><ruby><span class='verb'>指</span><rt>指著</rt></ruby><ruby><span class='obj'>杏花村</span><rt>杏花村</rt></ruby>。"
                }
            ]
        },
        shanxing: {
            title: "山行",
            sentences: [
                {
                    original: "遠上寒山石徑斜，白雲生處有人家。",
                    svo: "<span class='adv'>遠</span><span class='verb'>上</span><span class='attr'>寒山</span><span class='subj'>石徑</span><span class='verb'>斜</span>，<span class='attr'>白雲生</span><span class='obj'>處</span><span class='verb'>有</span><span class='obj'>人家</span>。",
                    svo_trans: "<ruby><span class='adv'>遠</span><rt>遠遠地</rt></ruby><ruby><span class='verb'>上</span><rt>登上</rt></ruby><ruby><span class='attr'>寒山</span><span class='subj'>石徑</span><rt>秋山傾斜的石路</rt></ruby><ruby><span class='verb'>斜</span><rt>傾斜</rt></ruby>，<ruby><span class='attr'>白雲生</span><span class='obj'>處</span><rt>白雲升起的地方</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>人家</span><rt>住家</rt></ruby>。"
                },
                {
                    original: "停車坐愛楓林晚，霜葉紅於二月花。",
                    svo: "<span class='verb'>停</span><span class='obj'>車</span><span class='adv'>坐</span><span class='verb'>愛</span><span class='attr'>楓林</span><span class='obj'>晚</span>，<span class='subj'>霜葉</span><span class='verb'>紅於</span><span class='attr'>二月</span><span class='obj'>花</span>。",
                    svo_trans: "<ruby><span class='verb'>停</span><rt>停下</rt></ruby><ruby><span class='obj'>車</span><rt>馬車</rt></ruby><ruby><span class='adv'>坐</span><rt>因為</rt></ruby><ruby><span class='verb'>愛</span><rt>喜愛</rt></ruby><ruby><span class='attr'>楓林</span><span class='obj'>晚</span><rt>傍晚的楓樹林</rt></ruby>，<ruby><span class='subj'>霜葉</span><rt>經霜的楓葉</rt></ruby><ruby><span class='verb'>紅於</span><rt>比...還紅</rt></ruby><ruby><span class='attr'>二月</span><span class='obj'>花</span><rt>春天的花朵</rt></ruby>。"
                }
            ]
        },
        feng: {
            title: "蜂",
            sentences: [
                {
                    original: "不論平地與山尖，無限風光盡被占。",
                    svo: "<span class='adv'>不論</span><span class='obj'>平地與山尖</span>，<span class='attr'>無限</span><span class='subj'>風光</span><span class='adv'>盡被</span><span class='verb'>占</span>。",
                    svo_trans: "<ruby><span class='adv'>不論</span><rt>無論是</rt></ruby><ruby><span class='obj'>平地與山尖</span><rt>平地還是山頂</rt></ruby>，<ruby><span class='attr'>無限</span><span class='subj'>風光</span><rt>無限的春色</rt></ruby><ruby><span class='adv'>盡被</span><rt>全被</rt></ruby><ruby><span class='verb'>占</span><rt>佔有</rt></ruby>。"
                },
                {
                    original: "採得百花成蜜後，為誰辛苦為誰甜。",
                    svo: "<span class='verb'>採得</span><span class='attr'>百</span><span class='obj'>花</span><span class='verb'>成</span><span class='obj'>蜜</span><span class='adv'>後</span>，<span class='adv'>為誰</span><span class='verb'>辛苦</span><span class='adv'>為誰</span><span class='verb'>甜</span>。",
                    svo_trans: "<ruby><span class='verb'>採得</span><rt>採集了</rt></ruby><ruby><span class='attr'>百</span><span class='obj'>花</span><rt>各種花朵</rt></ruby><ruby><span class='verb'>成</span><rt>釀成</rt></ruby><ruby><span class='obj'>蜜</span><rt>蜂蜜</rt></ruby><ruby><span class='adv'>後</span><rt>之後</rt></ruby>，<ruby><span class='adv'>為誰</span><rt>是為了誰</rt></ruby><ruby><span class='verb'>辛苦</span><rt>辛苦</rt></ruby><ruby><span class='adv'>為誰</span><rt>為了誰</rt></ruby><ruby><span class='verb'>甜</span><rt>甜美</rt></ruby>。"
                }
            ]
        },
        jinluyi: {
            title: "金縷衣",
            sentences: [
                {
                    original: "勸君莫惜金縷衣，勸君惜取少年時。",
                    svo: "<span class='verb'>勸</span><span class='obj'>君</span><span class='adv'>莫</span><span class='verb'>惜</span><span class='attr'>金縷</span><span class='obj'>衣</span>，<span class='verb'>勸</span><span class='obj'>君</span><span class='verb'>惜取</span><span class='attr'>少年</span><span class='obj'>時</span>。",
                    svo_trans: "<ruby><span class='verb'>勸</span><rt>勸</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>莫</span><rt>不要</rt></ruby><ruby><span class='verb'>惜</span><rt>愛惜</rt></ruby><ruby><span class='attr'>金縷</span><span class='obj'>衣</span><rt>華貴的衣服</rt></ruby>，<ruby><span class='verb'>勸</span><rt>勸</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='verb'>惜取</span><rt>珍惜</rt></ruby><ruby><span class='attr'>少年</span><span class='obj'>時</span><rt>年輕的時光</rt></ruby>。"
                },
                {
                    original: "花開堪折直須折，莫待無花空折枝。",
                    svo: "<span class='subj'>花</span><span class='verb'>開</span><span class='adv'>堪</span><span class='verb'>折</span><span class='adv'>直須</span><span class='verb'>折</span>，<span class='adv'>莫待</span><span class='verb'>無</span><span class='obj'>花</span><span class='adv'>空</span><span class='verb'>折</span><span class='obj'>枝</span>。",
                    svo_trans: "<ruby><span class='subj'>花</span><rt>花朵</rt></ruby><ruby><span class='verb'>開</span><rt>盛開</rt></ruby><ruby><span class='adv'>堪</span><rt>可以</rt></ruby><ruby><span class='verb'>折</span><rt>攀折時</rt></ruby><ruby><span class='adv'>直須</span><rt>就應該</rt></ruby><ruby><span class='verb'>折</span><rt>折下來</rt></ruby>，<ruby><span class='adv'>莫待</span><rt>不要等到</rt></ruby><ruby><span class='verb'>無</span><span class='obj'>花</span><rt>沒有花時</rt></ruby><ruby><span class='adv'>空</span><rt>徒勞地</rt></ruby><ruby><span class='verb'>折</span><span class='obj'>枝</span><rt>折空樹枝</rt></ruby>。"
                }
            ]
        },
        xiaochi: {
            title: "小池",
            sentences: [
                {
                    original: "泉眼無聲惜細流，樹陰照水愛晴柔。",
                    svo: "<span class='subj'>泉眼</span><span class='adv'>無聲</span><span class='verb'>惜</span><span class='attr'>細</span><span class='obj'>流</span>，<span class='subj'>樹陰</span><span class='verb'>照</span><span class='obj'>水</span><span class='verb'>愛</span><span class='obj'>晴柔</span>。",
                    svo_trans: "<ruby><span class='subj'>泉眼</span><rt>泉水口</rt></ruby><ruby><span class='adv'>無聲</span><rt>靜靜地</rt></ruby><ruby><span class='verb'>惜</span><rt>珍惜</rt></ruby><ruby><span class='attr'>細</span><span class='obj'>流</span><rt>細小的水流</rt></ruby>，<ruby><span class='subj'>樹陰</span><rt>樹蔭</rt></ruby><ruby><span class='verb'>照</span><rt>倒映在</rt></ruby><ruby><span class='obj'>水</span><rt>水中</rt></ruby><ruby><span class='verb'>愛</span><rt>喜愛</rt></ruby><ruby><span class='obj'>晴柔</span><rt>晴天柔和的風光</rt></ruby>。"
                },
                {
                    original: "小荷才露尖尖角，早有蜻蜓立上頭。",
                    svo: "<span class='attr'>小</span><span class='subj'>荷</span><span class='adv'>才</span><span class='verb'>露</span><span class='attr'>尖尖</span><span class='obj'>角</span>，<span class='adv'>早</span><span class='verb'>有</span><span class='subj'>蜻蜓</span><span class='verb'>立</span><span class='adv'>上頭</span>。",
                    svo_trans: "<ruby><span class='attr'>小</span><span class='subj'>荷</span><rt>小小的荷葉</rt></ruby><ruby><span class='adv'>才</span><rt>剛</rt></ruby><ruby><span class='verb'>露</span><rt>露出</rt></ruby><ruby><span class='attr'>尖尖</span><span class='obj'>角</span><rt>尖尖的角</rt></ruby>，<ruby><span class='adv'>早</span><rt>早就</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='subj'>蜻蜓</span><rt>蜻蜓</rt></ruby><ruby><span class='verb'>立</span><rt>停立</rt></ruby><ruby><span class='adv'>上頭</span><rt>在上面</rt></ruby>。"
                }
            ]
        },
        yuanri: {
            title: "元日",
            sentences: [
                {
                    original: "爆竹聲中一歲除，春風送暖入屠蘇。",
                    svo: "<span class='adv'>爆竹聲中</span><span class='subj'>一歲</span><span class='verb'>除</span>，<span class='subj'>春風</span><span class='verb'>送</span><span class='obj'>暖</span><span class='verb'>入</span><span class='obj'>屠蘇</span>。",
                    svo_trans: "<ruby><span class='adv'>爆竹聲中</span><rt>在爆竹聲裡</rt></ruby><ruby><span class='subj'>一歲</span><rt>舊的一年</rt></ruby><ruby><span class='verb'>除</span><rt>過去了</rt></ruby>，<ruby><span class='subj'>春風</span><rt>春風</rt></ruby><ruby><span class='verb'>送</span><rt>送來</rt></ruby><ruby><span class='obj'>暖</span><rt>暖意</rt></ruby><ruby><span class='verb'>入</span><rt>吹入</rt></ruby><ruby><span class='obj'>屠蘇</span><rt>屠蘇酒中</rt></ruby>。"
                },
                {
                    original: "千門萬戶曈曈日，總把新桃換舊符。",
                    svo: "<span class='attr'>千門萬戶</span><span class='attr'>曈曈</span><span class='subj'>日</span>，<span class='adv'>總</span><span class='verb'>把</span><span class='attr'>新</span><span class='obj'>桃</span><span class='verb'>換</span><span class='attr'>舊</span><span class='obj'>符</span>。",
                    svo_trans: "<ruby><span class='attr'>千門萬戶</span><rt>家家戶戶</rt></ruby><ruby><span class='attr'>曈曈</span><span class='subj'>日</span><rt>迎著初升的太陽</rt></ruby>，<ruby><span class='adv'>總</span><rt>都</rt></ruby><ruby><span class='verb'>把</span><rt>把</rt></ruby><ruby><span class='attr'>新</span><span class='obj'>桃</span><rt>新的桃符</rt></ruby><ruby><span class='verb'>換</span><rt>換下</rt></ruby><ruby><span class='attr'>舊</span><span class='obj'>符</span><rt>舊的桃符</rt></ruby>。"
                }
            ]
        },
        bochuanguazhou: {
            title: "泊船瓜洲",
            sentences: [
                {
                    original: "京口瓜洲一水間，鐘山只隔數重山。",
                    svo: "<span class='subj'>京口瓜洲</span><span class='adv'>一水間</span>，<span class='subj'>鐘山</span><span class='adv'>只</span><span class='verb'>隔</span><span class='attr'>數重</span><span class='obj'>山</span>。",
                    svo_trans: "<ruby><span class='subj'>京口瓜洲</span><rt>京口和瓜洲</rt></ruby><ruby><span class='adv'>一水間</span><rt>只隔著一條長江</rt></ruby>，<ruby><span class='subj'>鐘山</span><rt>鐘山</rt></ruby><ruby><span class='adv'>只</span><rt>也只</rt></ruby><ruby><span class='verb'>隔</span><rt>隔著</rt></ruby><ruby><span class='attr'>數重</span><span class='obj'>山</span><rt>幾重山</rt></ruby>。"
                },
                {
                    original: "春風又綠江南岸，明月何時照我還。",
                    svo: "<span class='subj'>春風</span><span class='adv'>又</span><span class='verb'>綠</span><span class='attr'>江南</span><span class='obj'>岸</span>，<span class='subj'>明月</span><span class='adv'>何時</span><span class='verb'>照</span><span class='obj'>我</span><span class='verb'>還</span>。",
                    svo_trans: "<ruby><span class='subj'>春風</span><rt>春風</rt></ruby><ruby><span class='adv'>又</span><rt>再次</rt></ruby><ruby><span class='verb'>綠</span><rt>吹綠了</rt></ruby><ruby><span class='attr'>江南</span><span class='obj'>岸</span><rt>長江南岸</rt></ruby>，<ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='adv'>何時</span><rt>什麼時候</rt></ruby><ruby><span class='verb'>照</span><rt>才能照著</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>還</span><rt>回家呢</rt></ruby>。"
                }
            ]
        },
        loushiming: {
            title: "陋室銘",
            sentences: [
                {
                    original: "山不在高，有仙則名。水不在深，有龍則靈。",
                    svo: "<span class='subj'>山</span><span class='adv'>不</span><span class='verb'>在</span><span class='obj'>高</span>，<span class='verb'>有</span><span class='obj'>仙</span><span class='adv'>則</span><span class='verb'>名</span>。<span class='subj'>水</span><span class='adv'>不</span><span class='verb'>在</span><span class='obj'>深</span>，<span class='verb'>有</span><span class='obj'>龍</span><span class='adv'>則</span><span class='verb'>靈</span>。",
                    svo_trans: "<ruby><span class='subj'>山</span><rt>山</rt></ruby><ruby><span class='adv'>不</span><rt>不在乎</rt></ruby><ruby><span class='verb'>在</span><rt>在於</rt></ruby><ruby><span class='obj'>高</span><rt>高大</rt></ruby>，<ruby><span class='verb'>有</span><rt>有了</rt></ruby><ruby><span class='obj'>仙</span><rt>神仙</rt></ruby><ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>名</span><rt>出名</rt></ruby>。水不在乎深，有了蛟龍就顯得神靈。"
                },
                {
                    original: "斯是陋室，惟吾德馨。",
                    svo: "<span class='subj'>斯</span><span class='verb'>是</span><span class='attr'>陋</span><span class='obj'>室</span>，<span class='adv'>惟</span><span class='attr'>吾</span><span class='subj'>德</span><span class='verb'>馨</span>。",
                    svo_trans: "<ruby><span class='subj'>斯</span><rt>這</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='attr'>陋</span><span class='obj'>室</span><rt>簡陋的房子</rt></ruby>，<ruby><span class='adv'>惟</span><rt>只因為</rt></ruby><ruby><span class='attr'>吾</span><rt>我</rt></ruby><ruby><span class='subj'>德</span><rt>品德</rt></ruby><ruby><span class='verb'>馨</span><rt>高尚美好</rt></ruby>。"
                },
                {
                    original: "苔痕上階綠，草色入簾青。",
                    svo: "<span class='subj'>苔痕</span><span class='verb'>上</span><span class='obj'>階</span><span class='adv'>綠</span>，<span class='subj'>草色</span><span class='verb'>入</span><span class='obj'>簾</span><span class='adv'>青</span>。",
                    svo_trans: "<ruby><span class='subj'>苔痕</span><rt>青苔的痕跡</rt></ruby><ruby><span class='verb'>上</span><rt>長到</rt></ruby><ruby><span class='obj'>階</span><rt>台階上</rt></ruby><ruby><span class='adv'>綠</span><rt>一片碧綠</rt></ruby>，<ruby><span class='subj'>草色</span><rt>青草的顏色</rt></ruby><ruby><span class='verb'>入</span><rt>映入</rt></ruby><ruby><span class='obj'>簾</span><rt>竹簾裡</rt></ruby><ruby><span class='adv'>青</span><rt>顯得青翠</rt></ruby>。"
                },
                {
                    original: "談笑有鴻儒，往來無白丁。",
                    svo: "<span class='adv'>談笑</span><span class='verb'>有</span><span class='attr'>鴻</span><span class='obj'>儒</span>，<span class='adv'>往來</span><span class='verb'>無</span><span class='attr'>白</span><span class='obj'>丁</span>。",
                    svo_trans: "<ruby><span class='adv'>談笑</span><rt>在此談笑的</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>鴻</span><span class='obj'>儒</span><rt>博學的人</rt></ruby>，<ruby><span class='adv'>往來</span><rt>來往的</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='attr'>白</span><span class='obj'>丁</span><rt>平民/沒有學問的人</rt></ruby>。"
                },
                {
                    original: "可以調素琴，閱金經。無絲竹之亂耳，無案牘之勞形。",
                    svo: "<span class='verb'>可以調</span><span class='attr'>素</span><span class='obj'>琴</span>，<span class='verb'>閱</span><span class='attr'>金</span><span class='obj'>經</span>。<span class='verb'>無</span><span class='attr'>絲竹之</span><span class='obj'>亂耳</span>，<span class='verb'>無</span><span class='attr'>案牘之</span><span class='obj'>勞形</span>。",
                    svo_trans: "這裡可以彈奏不加裝飾的古琴，閱讀佛經。沒有嘈雜的音樂擾亂雙耳，沒有官府的公文勞累身心。"
                },
                {
                    original: "孔子云：「何陋之有？」",
                    svo: "<span class='subj'>孔子</span><span class='verb'>云</span>：「<span class='adv'>何</span><span class='obj'>陋</span>之<span class='verb'>有</span>？」",
                    svo_trans: "<ruby><span class='subj'>孔子</span><rt>孔子</rt></ruby><ruby><span class='verb'>云</span><rt>說</rt></ruby>：「<ruby><span class='adv'>何</span><rt>有什麼</rt></ruby><ruby><span class='obj'>陋</span><rt>簡陋</rt></ruby>之<ruby><span class='verb'>有</span><rt>有呢</rt></ruby>？」"
                }
            ]
        },
        ailianshuo: {
            title: "愛蓮說",
            sentences: [
                {
                    original: "水陸草木之花，可愛者甚蕃。",
                    svo: "<span class='attr'>水陸草木之</span><span class='subj'>花</span>，<span class='attr'>可愛</span><span class='obj'>者</span><span class='adv'>甚</span><span class='verb'>蕃</span>。",
                    svo_trans: "<ruby><span class='attr'>水陸草木之</span><span class='subj'>花</span><rt>水上和陸地上草木的花</rt></ruby>，<ruby><span class='attr'>可愛</span><span class='obj'>者</span><rt>值得喜愛的</rt></ruby><ruby><span class='adv'>甚</span><rt>很</rt></ruby><ruby><span class='verb'>蕃</span><rt>多</rt></ruby>。"
                },
                {
                    original: "予獨愛蓮之出淤泥而不染，濯清漣而不妖。",
                    svo: "<span class='subj'>予</span><span class='adv'>獨</span><span class='verb'>愛</span><span class='obj'>蓮</span>之<span class='verb'>出</span><span class='obj'>淤泥</span>而<span class='adv'>不</span><span class='verb'>染</span>，<span class='verb'>濯</span><span class='obj'>清漣</span>而<span class='adv'>不</span><span class='verb'>妖</span>。",
                    svo_trans: "<ruby><span class='subj'>予</span><rt>我</rt></ruby><ruby><span class='adv'>獨</span><rt>唯獨</rt></ruby><ruby><span class='verb'>愛</span><rt>喜愛</rt></ruby><ruby><span class='obj'>蓮</span><rt>蓮花</rt></ruby>之<ruby><span class='verb'>出</span><rt>生長出</rt></ruby><ruby><span class='obj'>淤泥</span><rt>污泥</rt></ruby>而<ruby><span class='adv'>不</span><rt>不被</rt></ruby><ruby><span class='verb'>染</span><rt>污染</rt></ruby>，在清水裡洗滌過卻不顯得妖媚。"
                },
                {
                    original: "中通外直，不蔓不枝，香遠益清，亭亭淨植，可遠觀而不可褻玩焉。",
                    svo: "<span class='adv'>中</span><span class='verb'>通</span><span class='adv'>外</span><span class='verb'>直</span>，<span class='adv'>不</span><span class='verb'>蔓</span><span class='adv'>不</span><span class='verb'>枝</span>，<span class='subj'>香</span><span class='adv'>遠</span><span class='adv'>益</span><span class='verb'>清</span>，<span class='adv'>亭亭淨</span><span class='verb'>植</span>，<span class='adv'>可遠</span><span class='verb'>觀</span>而<span class='adv'>不可</span><span class='verb'>褻玩</span>焉。",
                    svo_trans: "它中心貫通、外表筆直，不生枝蔓、不長枝節，香氣越遠越清香，筆挺潔淨地立在那裡，只可以從遠處觀賞，卻不能貼近去輕慢地玩弄啊。"
                },
                {
                    original: "蓮，花之君子者也。",
                    svo: "<span class='subj'>蓮</span>，<span class='attr'>花之君子</span><span class='obj'>者</span>也。",
                    svo_trans: "<ruby><span class='subj'>蓮</span><rt>蓮花</rt></ruby>，是<ruby><span class='attr'>花之君子</span><span class='obj'>者</span><rt>花中的君子</rt></ruby>啊。"
                }
            ]
        },
        maiyouweng: {
            title: "賣油翁",
            sentences: [
                {
                    original: "陳康肅公善射，當世無雙，公亦以此自矜。",
                    svo: "<span class='subj'>陳康肅公</span><span class='verb'>善</span><span class='obj'>射</span>，<span class='adv'>當世</span><span class='verb'>無雙</span>，<span class='subj'>公</span><span class='adv'>亦以此</span><span class='verb'>自矜</span>。",
                    svo_trans: "<ruby><span class='subj'>陳康肅公</span><rt>陳康肅公</rt></ruby><ruby><span class='verb'>善</span><rt>擅長</rt></ruby><ruby><span class='obj'>射</span><rt>射箭</rt></ruby>，<ruby><span class='adv'>當世</span><rt>在當時</rt></ruby><ruby><span class='verb'>無雙</span><rt>沒有人能比</rt></ruby>，<ruby><span class='subj'>公</span><rt>他</rt></ruby><ruby><span class='adv'>亦以此</span><rt>也憑藉這點</rt></ruby><ruby><span class='verb'>自矜</span><rt>自我誇耀</rt></ruby>。"
                },
                {
                    original: "有賣油翁釋擔而立，睨之久而不去。",
                    svo: "<span class='verb'>有</span><span class='subj'>賣油翁</span><span class='verb'>釋</span><span class='obj'>擔</span>而<span class='verb'>立</span>，<span class='verb'>睨</span><span class='obj'>之</span><span class='adv'>久</span>而<span class='adv'>不</span><span class='verb'>去</span>。",
                    svo_trans: "<ruby><span class='verb'>有</span><rt>有個</rt></ruby><ruby><span class='subj'>賣油翁</span><rt>賣油的老翁</rt></ruby><ruby><span class='verb'>釋</span><rt>放下</rt></ruby><ruby><span class='obj'>擔</span><rt>擔子</rt></ruby>而<ruby><span class='verb'>立</span><rt>站著</rt></ruby>，<ruby><span class='verb'>睨</span><rt>斜著眼看</rt></ruby><ruby><span class='obj'>之</span><rt>他射箭</rt></ruby><ruby><span class='adv'>久</span><rt>很久</rt></ruby>而<ruby><span class='adv'>不</span><rt>沒有</rt></ruby><ruby><span class='verb'>去</span><rt>離開</rt></ruby>。"
                },
                {
                    original: "翁曰：「無他，但手熟爾。」",
                    svo: "<span class='subj'>翁</span><span class='verb'>曰</span>：「<span class='verb'>無</span><span class='obj'>他</span>，<span class='adv'>但</span><span class='subj'>手</span><span class='verb'>熟</span>爾。」",
                    svo_trans: "<ruby><span class='subj'>翁</span><rt>老翁</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>他</span><rt>別的奧妙</rt></ruby>，<ruby><span class='adv'>但</span><rt>只是</rt></ruby><ruby><span class='subj'>手</span><rt>手法</rt></ruby><ruby><span class='verb'>熟</span><rt>熟練</rt></ruby>罷了。」"
                },
                {
                    original: "乃取一葫蘆置於地，以錢覆其口，徐以杓酌油瀝之，自錢孔入，而錢不濕。",
                    svo: "乃<span class='verb'>取</span><span class='attr'>一</span><span class='obj'>葫蘆</span><span class='verb'>置</span><span class='adv'>於地</span>，<span class='adv'>以錢</span><span class='verb'>覆</span><span class='attr'>其</span><span class='obj'>口</span>，<span class='adv'>徐以杓</span><span class='verb'>酌</span><span class='obj'>油</span><span class='verb'>瀝</span><span class='obj'>之</span>，<span class='adv'>自錢孔</span><span class='verb'>入</span>，而<span class='subj'>錢</span><span class='adv'>不</span><span class='verb'>濕</span>。",
                    svo_trans: "於是他拿出一個葫蘆放在地上，用一枚銅錢蓋住葫蘆口，慢慢地用勺子舀油滴入葫蘆，油從銅錢的方孔注進去，可是銅錢卻沒有被弄濕。"
                }
            ]
        },
        siduan: {
            title: "論四端",
            sentences: [
                {
                    original: "人皆有惻隱之心，羞惡之心，辭讓之心，是非之心。",
                    svo: "<span class='subj'>人</span><span class='adv'>皆</span><span class='verb'>有</span><span class='obj'>惻隱之心</span>，<span class='obj'>羞惡之心</span>，<span class='obj'>辭讓之心</span>，<span class='obj'>是非之心</span>。",
                    svo_trans: "<ruby><span class='subj'>人</span><rt>人類</rt></ruby><ruby><span class='adv'>皆</span><rt>都</rt></ruby><ruby><span class='verb'>開有</span><rt>具有</rt></ruby><ruby><span class='obj'>惻隱之心</span><rt>同情憐憫的心</rt></ruby>，<ruby><span class='obj'>羞惡之心</span><rt>羞恥厭惡的心</rt></ruby>，<ruby><span class='obj'>辭讓之心</span><rt>推辭謙讓的心</rt></ruby>，以及<ruby><span class='obj'>是非之心</span><rt>分辨是非的心</rt></ruby>。"
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
        shihuiyin: {
            title: "石灰吟",
            sentences: [
                {
                    original: "千錘萬擊出深山，烈火焚燒若等閒。",
                    svo: "<span class='adv'>千錘萬擊</span><span class='verb'>出</span><span class='obj'>深山</span>，<span class='subj'>烈火</span><span class='verb'>焚燒若等閒</span>。",
                    svo_trans: "<ruby><span class='adv'>千錘萬擊</span><rt>歷經千錘百鍊</rt></ruby><ruby><span class='verb'>出</span><rt>才開採出</rt></ruby><ruby><span class='obj'>深山</span><rt>深山</rt></ruby>，<ruby><span class='subj'>烈火</span><rt>熊熊烈火</rt></ruby><ruby><span class='verb'>焚燒若等閒</span><rt>焚燒也只當作是平常事</rt></ruby>。"
                },
                {
                    original: "粉骨碎身渾不怕，要留清白在人間。",
                    svo: "<span class='verb'>粉骨碎身</span><span class='adv'>渾不</span><span class='verb'>怕</span>，<span class='verb'>要留</span><span class='obj'>清白</span><span class='adv'>在人間</span>。",
                    svo_trans: "<ruby><span class='verb'>粉骨碎身</span><rt>即使粉身碎骨</rt></ruby><ruby><span class='adv'>渾不</span><rt>也全然不</rt></ruby><ruby><span class='verb'>怕</span><rt>害怕</rt></ruby>，<ruby><span class='verb'>要留</span><rt>只為了把</rt></ruby><ruby><span class='obj'>清白</span><rt>純潔清白的節操</rt></ruby><ruby><span class='adv'>在人間</span><rt>留在這人世間</rt></ruby>。"
                }
            ]
        },
        mingrige: {
            title: "明日歌",
            sentences: [
                {
                    original: "明日復明日，明日何其多。",
                    svo: "<span class='subj'>明日</span><span class='adv'>復</span><span class='subj'>明日</span>，<span class='subj'>明日</span><span class='adv'>何其</span><span class='verb'>多</span>。",
                    svo_trans: "<ruby><span class='subj'>明日</span><rt>明天</rt></ruby><ruby><span class='adv'>復</span><rt>又接</rt></ruby><ruby><span class='subj'>明日</span><rt>明天</rt></ruby>，<ruby><span class='subj'>明日</span><rt>明天</rt></ruby><ruby><span class='adv'>何其</span><rt>多麼的</rt></ruby><ruby><span class='verb'>多</span><rt>多啊</rt></ruby>。"
                },
                {
                    original: "我生待明日，萬事成蹉跎。",
                    svo: "<span class='subj'>我生</span><span class='verb'>待</span><span class='obj'>明日</span>，<span class='subj'>萬事</span><span class='verb'>成</span><span class='obj'>蹉跎</span>。",
                    svo_trans: "<ruby><span class='subj'>我生</span><rt>我這一生如果都</rt></ruby><ruby><span class='verb'>待</span><rt>等待</rt></ruby><ruby><span class='obj'>明日</span><rt>明天</rt></ruby>，<ruby><span class='subj'>萬事</span><rt>所有的事情</rt></ruby><ruby><span class='verb'>成</span><rt>都會變成</rt></ruby><ruby><span class='obj'>蹉跎</span><rt>白白虛度了</rt></ruby>。"
                }
            ]
        },
        mulanshi: {
            title: "木蘭詩",
            sentences: [
                {
                    original: "唧唧復唧唧，木蘭當戶織。不聞機杼聲，唯聞女嘆息。",
                    svo: "<span class='adv'>唧唧復唧唧</span>，<span class='subj'>木蘭</span><span class='adv'>當戶</span><span class='verb'>織</span>。<span class='adv'>不</span><span class='verb'>聞</span><span class='attr'>機杼</span><span class='obj'>聲</span>，<span class='adv'>唯</span><span class='verb'>聞</span><span class='attr'>女</span><span class='obj'>嘆息</span>。",
                    svo_trans: "<ruby><span class='adv'>唧唧復唧唧</span><rt>嘆息聲響了又響</rt></ruby>，<ruby><span class='subj'>木蘭</span><rt>木蘭</rt></ruby><ruby><span class='adv'>當戶</span><rt>對著門</rt></ruby><ruby><span class='verb'>織</span><rt>織布</rt></ruby>。<ruby><span class='adv'>不</span><rt>聽不到</rt></ruby><ruby><span class='verb'>聞</span><rt>聽見</rt></ruby><ruby><span class='attr'>機杼</span><span class='obj'>聲</span><rt>織布機的聲音</rt></ruby>，<ruby><span class='adv'>唯</span><rt>只</rt></ruby><ruby><span class='verb'>聞</span><rt>聽見</rt></ruby><ruby><span class='attr'>女</span><span class='obj'>嘆息</span><rt>女孩的嘆息聲</rt></ruby>。"
                },
                {
                    original: "雄兔腳撲朔，雌兔眼迷離；雙兔傍地走，安能辨我是雄雌？",
                    svo: "<span class='attr'>雄</span><span class='subj'>兔</span><span class='subj'>腳</span><span class='verb'>撲朔</span>，<span class='attr'>雌</span><span class='subj'>兔</span><span class='subj'>眼</span><span class='verb'>迷離</span>；<span class='subj'>雙兔</span><span class='adv'>傍地</span><span class='verb'>走</span>，<span class='adv'>安能</span><span class='verb'>辨</span><span class='subj'>我</span><span class='verb'>是</span><span class='obj'>雄雌</span>？",
                    svo_trans: "<ruby><span class='attr'>雄</span><span class='subj'>兔</span><rt>公兔的</rt></ruby><ruby><span class='subj'>腳</span><rt>腳</rt></ruby><ruby><span class='verb'>撲朔</span><rt>時常動彈</rt></ruby>，<ruby><span class='attr'>雌</span><span class='subj'>兔</span><rt>母兔的</rt></ruby><ruby><span class='subj'>眼</span><rt>眼睛</rt></ruby><ruby><span class='verb'>迷離</span><rt>常常瞇著</rt></ruby>；<ruby><span class='subj'>雙兔</span><rt>兩隻兔子</rt></ruby><ruby><span class='adv'>傍地</span><rt>貼著地面</rt></ruby><ruby><span class='verb'>走</span><rt>奔跑時</rt></ruby>，<ruby><span class='adv'>安能</span><rt>怎麼能</rt></ruby><ruby><span class='verb'>辨</span><rt>分辨出</rt></ruby><ruby><span class='subj'>我</span><rt>我</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='obj'>雄雌</span><rt>公還是母呢</rt></ruby>？"
                }
            ]
        },
        yueyanglouji: {
            title: "岳陽樓記",
            sentences: [
                {
                    original: "不以物喜，不以己悲。",
                    svo: "<span class='adv'>不以物</span><span class='verb'>喜</span>，<span class='adv'>不以己</span><span class='verb'>悲</span>。",
                    svo_trans: "<ruby><span class='adv'>不以物</span><rt>不因為外物的好壞</rt></ruby><ruby><span class='verb'>喜</span><rt>而高興</rt></ruby>，<ruby><span class='adv'>不以己</span><rt>不因為自己的得失</rt></ruby><ruby><span class='verb'>悲</span><rt>而悲傷</rt></ruby>。"
                },
                {
                    original: "居廟堂之高，則憂其民；處江湖之遠，則憂其君。",
                    svo: "<span class='verb'>居</span><span class='attr'>廟堂之</span><span class='obj'>高</span>，<span class='adv'>則</span><span class='verb'>憂</span><span class='attr'>其</span><span class='obj'>民</span>；<span class='verb'>處</span><span class='attr'>江湖之</span><span class='obj'>遠</span>，<span class='adv'>則</span><span class='verb'>憂</span><span class='attr'>其</span><span class='obj'>君</span>。",
                    svo_trans: "<ruby><span class='verb'>居</span><rt>身處在</rt></ruby><ruby><span class='attr'>廟堂之</span><span class='obj'>高</span><rt>高高的朝廷上</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>憂</span><rt>擔憂</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>民</span><rt>他的百姓</rt></ruby>；<ruby><span class='verb'>處</span><rt>退處在</rt></ruby><ruby><span class='attr'>江湖之</span><span class='obj'>遠</span><rt>偏遠的江湖間</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='verb'>憂</span><rt>擔憂</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>君</span><rt>他的國君</rt></ruby>。"
                },
                {
                    original: "先天下之憂而憂，後天下之樂而樂。",
                    svo: "<span class='adv'>先天下之憂</span>而<span class='verb'>憂</span>，<span class='adv'>後天下之樂</span>而<span class='verb'>樂</span>。",
                    svo_trans: "<ruby><span class='adv'>先天下之憂</span><rt>在天下人擔憂之前</rt></ruby>而<ruby><span class='verb'>憂</span><rt>擔憂</rt></ruby>，<ruby><span class='adv'>後天下之樂</span><rt>在天下人享樂之後</rt></ruby>而<ruby><span class='verb'>樂</span><rt>享樂</rt></ruby>。"
                }
            ]
        },
        chushibiao: {
            title: "出師表",
            sentences: [
                {
                    original: "先帝創業未半而中道崩殂。",
                    svo: "<span class='subj'>先帝</span><span class='verb'>創業</span><span class='adv'>未半</span>而<span class='adv'>中道</span><span class='verb'>崩殂</span>。",
                    svo_trans: "<ruby><span class='subj'>先帝</span><rt>先帝劉備</rt></ruby><ruby><span class='verb'>創業</span><rt>開創大業</rt></ruby><ruby><span class='adv'>未半</span><rt>還未完成一半</rt></ruby>而<ruby><span class='adv'>中道</span><rt>中途</rt></ruby><ruby><span class='verb'>崩殂</span><rt>就逝世了</rt></ruby>。"
                },
                {
                    original: "今天下三分，益州疲弊，此誠危急存亡之秋也。",
                    svo: "<span class='adv'>今</span><span class='subj'>天下</span><span class='verb'>三分</span>，<span class='subj'>益州</span><span class='verb'>疲弊</span>，<span class='subj'>此</span><span class='adv'>誠</span><span class='verb'>危急存亡之秋</span>也。",
                    svo_trans: "<ruby><span class='adv'>今</span><rt>現在</rt></ruby><ruby><span class='subj'>天下</span><rt>天下</rt></ruby><ruby><span class='verb'>三分</span><rt>分裂成三部分</rt></ruby>，<ruby><span class='subj'>益州</span><rt>我們蜀漢</rt></ruby><ruby><span class='verb'>疲弊</span><rt>人力物力缺乏</rt></ruby>，<ruby><span class='subj'>此</span><rt>這</rt></ruby><ruby><span class='adv'>誠</span><rt>實在是</rt></ruby><ruby><span class='verb'>危急存亡之秋</span><rt>危急存亡的關鍵時刻</rt></ruby>啊。"
                },
                {
                    original: "親賢臣，遠小人，此先漢所以興隆也。",
                    svo: "<span class='verb'>親</span><span class='obj'>賢臣</span>，<span class='verb'>遠</span><span class='obj'>小人</span>，<span class='subj'>此</span><span class='subj'>先漢</span><span class='adv'>所以</span><span class='verb'>興隆</span>也。",
                    svo_trans: "<ruby><span class='verb'>親</span><rt>親近</rt></ruby><ruby><span class='obj'>賢臣</span><rt>賢德的臣子</rt></ruby>，<ruby><span class='verb'>遠</span><rt>疏遠</rt></ruby><ruby><span class='obj'>小人</span><rt>品行不端的人</rt></ruby>，<ruby><span class='subj'>此</span><rt>這</rt></ruby>是<ruby><span class='subj'>先漢</span><rt>西漢</rt></ruby><ruby><span class='adv'>所以</span><rt>之所以</rt></ruby><ruby><span class='verb'>興隆</span><rt>興旺隆盛的原因</rt></ruby>啊。"
                }
            ]
        },
        taohuayuanji: {
            title: "桃花源記",
            sentences: [
                {
                    original: "晉太元中，武陵人捕魚為業。",
                    svo: "<span class='adv'>晉太元中</span>，<span class='attr'>武陵</span><span class='subj'>人</span><span class='verb'>捕</span><span class='obj'>魚</span><span class='verb'>為</span><span class='obj'>業</span>。",
                    svo_trans: "<ruby><span class='adv'>晉太元中</span><rt>東晉太元年間</rt></ruby>，<ruby><span class='attr'>武陵</span><span class='subj'>人</span><rt>有個武陵人</rt></ruby><ruby><span class='verb'>捕</span><rt>捕捉</rt></ruby><ruby><span class='obj'>魚</span><rt>魚類</rt></ruby><ruby><span class='verb'>為</span><rt>作為</rt></ruby><ruby><span class='obj'>業</span><rt>職業</rt></ruby>。"
                },
                {
                    original: "忽逢桃花林，夾岸數百步，中無雜樹，芳草鮮美，落英繽紛。",
                    svo: "<span class='adv'>忽</span><span class='verb'>逢</span><span class='attr'>桃花</span><span class='obj'>林</span>，<span class='verb'>夾</span><span class='obj'>岸</span><span class='attr'>數百</span><span class='obj'>步</span>，<span class='adv'>中</span><span class='verb'>無</span><span class='attr'>雜</span><span class='obj'>樹</span>，<span class='subj'>芳草</span><span class='verb'>鮮美</span>，<span class='subj'>落英</span><span class='verb'>繽紛</span>。",
                    svo_trans: "<ruby><span class='adv'>忽</span><rt>忽然</rt></ruby><ruby><span class='verb'>逢</span><rt>遇到</rt></ruby><ruby><span class='attr'>桃花</span><span class='obj'>林</span><rt>一片桃花林</rt></ruby>，<ruby><span class='verb'>夾</span><rt>生長在</rt></ruby><ruby><span class='obj'>岸</span><rt>兩岸</rt></ruby><ruby><span class='attr'>數百</span><span class='obj'>步</span><rt>長達幾百步</rt></ruby>，<ruby><span class='adv'>中</span><rt>中間</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='attr'>雜</span><span class='obj'>樹</span><rt>別的樹木</rt></ruby>，<ruby><span class='subj'>芳草</span><rt>香草</rt></ruby><ruby><span class='verb'>鮮美</span><rt>鮮豔美麗</rt></ruby>，<ruby><span class='subj'>落英</span><rt>落花</rt></ruby><ruby><span class='verb'>繽紛</span><rt>繁多而紛亂</rt></ruby>。"
                }
            ]
        },
        shangzhongyong: {
            title: "傷仲永",
            sentences: [
                {
                    original: "金溪民方仲永，世隸耕。",
                    svo: "<span class='attr'>金溪民</span><span class='subj'>方仲永</span>，<span class='subj'>世</span><span class='verb'>隸</span><span class='obj'>耕</span>。",
                    svo_trans: "<ruby><span class='attr'>金溪民</span><rt>金溪縣的平民</rt></ruby><ruby><span class='subj'>方仲永</span><rt>方仲永</rt></ruby>，<ruby><span class='subj'>世</span><rt>世代</rt></ruby><ruby><span class='verb'>隸</span><rt>屬於</rt></ruby><ruby><span class='obj'>耕</span><rt>農耕階層</rt></ruby>。"
                },
                {
                    original: "仲永生五年，未嘗識書具，忽啼求之。",
                    svo: "<span class='subj'>仲永</span><span class='verb'>生</span><span class='attr'>五</span><span class='obj'>年</span>，<span class='adv'>未嘗</span><span class='verb'>識</span><span class='obj'>書具</span>，<span class='adv'>忽</span><span class='verb'>啼求</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='subj'>仲永</span><rt>仲永</rt></ruby><ruby><span class='verb'>生</span><rt>長到</rt></ruby><ruby><span class='attr'>五</span><span class='obj'>年</span><rt>五歲</rt></ruby>，<ruby><span class='adv'>未嘗</span><rt>還不曾</rt></ruby><ruby><span class='verb'>識</span><rt>認識</rt></ruby><ruby><span class='obj'>書具</span><rt>書寫工具</rt></ruby>，<ruby><span class='adv'>忽</span><rt>忽然</rt></ruby><ruby><span class='verb'>啼求</span><rt>哭著要</rt></ruby><ruby><span class='obj'>之</span><rt>這些東西</rt></ruby>。"
                },
                {
                    original: "父異焉，借旁近與之，即書詩四句，並自為其名。",
                    svo: "<span class='subj'>父</span><span class='verb'>異</span>焉，<span class='verb'>借</span><span class='obj'>旁近</span><span class='verb'>與</span><span class='obj'>之</span>，<span class='adv'>即</span><span class='verb'>書</span><span class='attr'>詩四</span><span class='obj'>句</span>，並<span class='adv'>自</span><span class='verb'>為</span><span class='attr'>其</span><span class='obj'>名</span>。",
                    svo_trans: "<ruby><span class='subj'>父</span><rt>父親</rt></ruby><ruby><span class='verb'>異</span><rt>感到詫異</rt></ruby>，<ruby><span class='verb'>借</span><rt>借了</rt></ruby><ruby><span class='obj'>旁近</span><rt>鄰居的</rt></ruby><ruby><span class='verb'>與</span><rt>給</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby>，他<ruby><span class='adv'>即</span><rt>立刻</rt></ruby><ruby><span class='verb'>書</span><rt>寫下</rt></ruby><ruby><span class='attr'>詩四</span><span class='obj'>句</span><rt>四句詩</rt></ruby>，並<ruby><span class='adv'>自</span><rt>自己</rt></ruby><ruby><span class='verb'>為</span><rt>題上</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>名</span><rt>他的名字</rt></ruby>。"
                }
            ]
        },
        mengmujiezi: {
            title: "孟母戒子",
            sentences: [
                {
                    original: "孟子少時，誦，其母方織。",
                    svo: "<span class='subj'>孟子</span><span class='adv'>少時</span>，<span class='verb'>誦</span>，<span class='attr'>其</span><span class='subj'>母</span><span class='adv'>方</span><span class='verb'>織</span>。",
                    svo_trans: "<ruby><span class='subj'>孟子</span><rt>孟子</rt></ruby><ruby><span class='adv'>少時</span><rt>小時候</rt></ruby>，<ruby><span class='verb'>誦</span><rt>背誦詩書</rt></ruby>，<ruby><span class='attr'>其</span><span class='subj'>母</span><rt>他的母親</rt></ruby><ruby><span class='adv'>方</span><rt>正在</rt></ruby><ruby><span class='verb'>織</span><rt>織布</rt></ruby>。"
                },
                {
                    original: "孟子輟然中止，乃復進。",
                    svo: "<span class='subj'>孟子</span><span class='adv'>輟然</span><span class='verb'>中止</span>，乃<span class='adv'>復</span><span class='verb'>進</span>。",
                    svo_trans: "<ruby><span class='subj'>孟子</span><rt>孟子</rt></ruby><ruby><span class='adv'>輟然</span><rt>突然</rt></ruby><ruby><span class='verb'>中止</span><rt>停了下來</rt></ruby>，乃<ruby><span class='adv'>復</span><rt>又繼續</rt></ruby><ruby><span class='verb'>進</span><rt>背誦下去</rt></ruby>。"
                },
                {
                    original: "其母知其喧也，呼而問之曰：「何為中止？」",
                    svo: "<span class='attr'>其</span><span class='subj'>母</span><span class='verb'>知</span><span class='attr'>其</span><span class='obj'>喧</span>也，<span class='verb'>呼</span>而<span class='verb'>問</span><span class='obj'>之</span><span class='verb'>曰</span>：「<span class='adv'>何為</span><span class='verb'>中止</span>？」",
                    svo_trans: "<ruby><span class='attr'>其</span><span class='subj'>母</span><rt>他的母親</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>喧</span><rt>他因為分心而遺忘</rt></ruby>，<ruby><span class='verb'>呼</span><rt>叫他</rt></ruby>而<ruby><span class='verb'>問</span><rt>問</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='adv'>何為</span><rt>為什麼</rt></ruby><ruby><span class='verb'>中止</span><rt>中斷了</rt></ruby>？」"
                },
                {
                    original: "其母引刀裂其織，以此戒之。",
                    svo: "<span class='attr'>其</span><span class='subj'>母</span><span class='verb'>引</span><span class='obj'>刀</span><span class='verb'>裂</span><span class='attr'>其</span><span class='obj'>織</span>，<span class='adv'>以此</span><span class='verb'>戒</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='attr'>其</span><span class='subj'>母</span><rt>他的母親</rt></ruby><ruby><span class='verb'>引</span><rt>拿起</rt></ruby><ruby><span class='obj'>刀</span><rt>刀子</rt></ruby><ruby><span class='verb'>裂</span><rt>割斷了</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>織</span><rt>她織的布</rt></ruby>，<ruby><span class='adv'>以此</span><rt>用這件事</rt></ruby><ruby><span class='verb'>戒</span><rt>告誡</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby>。"
                }
            ]
        },
        zhejian: {
            title: "折箭",
            sentences: [
                {
                    original: "阿豺有子二十人。阿豺謂曰：「汝等各奉吾一隻箭。」",
                    svo: "<span class='subj'>阿豺</span><span class='verb'>有</span><span class='obj'>子二十人</span>。<span class='subj'>阿豺</span><span class='verb'>謂</span><span class='verb'>曰</span>：「<span class='subj'>汝等</span><span class='adv'>各</span><span class='verb'>奉</span><span class='obj'>吾一隻箭</span>。」",
                    svo_trans: "<ruby><span class='subj'>阿豺</span><rt>國王阿豺</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>子二十人</span><rt>二十個兒子</rt></ruby>。<ruby><span class='subj'>阿豺</span><rt>阿豺</rt></ruby><ruby><span class='verb'>謂</span><rt>對他們</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝等</span><rt>你們</rt></ruby><ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='verb'>奉</span><rt>拿給</rt></ruby><ruby><span class='obj'>吾一隻箭</span><rt>我一隻箭</rt></ruby>。」"
                },
                {
                    original: "折之，皆折。又曰：「汝等各奉吾一束箭。」",
                    svo: "<span class='verb'>折</span><span class='obj'>之</span>，<span class='adv'>皆</span><span class='verb'>折</span>。<span class='adv'>又</span><span class='verb'>曰</span>：「<span class='subj'>汝等</span><span class='adv'>各</span><span class='verb'>奉</span><span class='obj'>吾一束箭</span>。」",
                    svo_trans: "<ruby><span class='verb'>折</span><rt>折斷</rt></ruby><ruby><span class='obj'>之</span><rt>它們</rt></ruby>，<ruby><span class='adv'>皆</span><rt>全都被</rt></ruby><ruby><span class='verb'>折</span><rt>折斷了</rt></ruby>。<ruby><span class='adv'>又</span><rt>又</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝等</span><rt>你們</rt></ruby><ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='verb'>奉</span><rt>拿給</rt></ruby><ruby><span class='obj'>吾一束箭</span><rt>我一束箭</rt></ruby>。」"
                },
                {
                    original: "折之，不能折。",
                    svo: "<span class='verb'>折</span><span class='obj'>之</span>，<span class='adv'>不能</span><span class='verb'>折</span>。",
                    svo_trans: "<ruby><span class='verb'>折</span><rt>折斷</rt></ruby><ruby><span class='obj'>之</span><rt>這束箭</rt></ruby>，<ruby><span class='adv'>不能</span><rt>卻無法</rt></ruby><ruby><span class='verb'>折</span><rt>折斷</rt></ruby>。"
                },
                {
                    original: "阿豺曰：「汝等知之乎？單者易折，眾則難摧。」",
                    svo: "<span class='subj'>阿豺</span><span class='verb'>曰</span>：「<span class='subj'>汝等</span><span class='verb'>知</span><span class='obj'>之</span>乎？<span class='subj'>單者</span><span class='adv'>易</span><span class='verb'>折</span>，<span class='subj'>眾</span><span class='adv'>則</span><span class='adv'>難</span><span class='verb'>摧</span>。」",
                    svo_trans: "<ruby><span class='subj'>阿豺</span><rt>阿豺</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>汝等</span><rt>你們</rt></ruby><ruby><span class='verb'>知</span><rt>懂得</rt></ruby><ruby><span class='obj'>之</span><rt>這個道理</rt></ruby>乎？<ruby><span class='subj'>單者</span><rt>單獨的一根</rt></ruby><ruby><span class='adv'>易</span><rt>容易</rt></ruby><ruby><span class='verb'>折</span><rt>被折斷</rt></ruby>，<ruby><span class='subj'>眾</span><rt>集合在一起</rt></ruby><ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='adv'>難</span><rt>難以</rt></ruby><ruby><span class='verb'>摧</span><rt>摧毀</rt></ruby>。」"
                }
            ]
        },
        yongxue: {
            title: "詠雪",
            sentences: [
                {
                    original: "謝太傅寒雪日內集，與兒女講論文義。",
                    svo: "<span class='subj'>謝太傅</span><span class='adv'>寒雪日</span><span class='verb'>內集</span>，<span class='adv'>與</span><span class='obj'>兒女</span><span class='verb'>講論</span><span class='obj'>文義</span>。",
                    svo_trans: "<ruby><span class='subj'>謝太傅</span><rt>謝安</rt></ruby><ruby><span class='adv'>寒雪日</span><rt>在一個寒冷的雪天</rt></ruby><ruby><span class='verb'>內集</span><rt>把家人聚集在一起</rt></ruby>，<ruby><span class='adv'>與</span><rt>和</rt></ruby><ruby><span class='obj'>兒女</span><rt>子姪晚輩</rt></ruby><ruby><span class='verb'>講論</span><rt>講解討論</rt></ruby><ruby><span class='obj'>文義</span><rt>文章的義理</rt></ruby>。"
                },
                {
                    original: "俄而雪驟，公欣然曰：「白雪紛紛何所似？」",
                    svo: "<span class='adv'>俄而</span><span class='subj'>雪</span><span class='verb'>驟</span>，<span class='subj'>公</span><span class='adv'>欣然</span><span class='verb'>曰</span>：「<span class='subj'>白雪</span><span class='adv'>紛紛</span><span class='verb'>何所似</span>？」",
                    svo_trans: "<ruby><span class='adv'>俄而</span><rt>不久</rt></ruby><ruby><span class='subj'>雪</span><rt>雪</rt></ruby><ruby><span class='verb'>驟</span><rt>下得急了</rt></ruby>，<ruby><span class='subj'>公</span><rt>謝安</rt></ruby><ruby><span class='adv'>欣然</span><rt>高興地</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>白雪</span><rt>白雪</rt></ruby><ruby><span class='adv'>紛紛</span><rt>紛紛揚揚的</rt></ruby><ruby><span class='verb'>何所似</span><rt>像什麼呢</rt></ruby>？」"
                },
                {
                    original: "兄子胡兒曰：「撒鹽空中差可擬。」",
                    svo: "<span class='attr'>兄子</span><span class='subj'>胡兒</span><span class='verb'>曰</span>：「<span class='verb'>撒</span><span class='obj'>鹽</span><span class='adv'>空中</span><span class='adv'>差</span><span class='verb'>可擬</span>。」",
                    svo_trans: "<ruby><span class='attr'>兄子</span><span class='subj'>胡兒</span><rt>姪子謝朗</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='verb'>撒</span><rt>把</rt></ruby><ruby><span class='obj'>鹽</span><rt>鹽</rt></ruby><ruby><span class='adv'>空中</span><rt>撒在空中</rt></ruby><ruby><span class='adv'>差</span><rt>大約</rt></ruby><ruby><span class='verb'>可擬</span><rt>可以相比</rt></ruby>。」"
                },
                {
                    original: "兄女曰：「未若柳絮因風起。」公大笑樂。",
                    svo: "<span class='attr'>兄</span><span class='subj'>女</span><span class='verb'>曰</span>：「<span class='adv'>未若</span><span class='subj'>柳絮</span><span class='adv'>因風</span><span class='verb'>起</span>。」<span class='subj'>公</span><span class='adv'>大</span><span class='verb'>笑樂</span>。",
                    svo_trans: "<ruby><span class='attr'>兄</span><span class='subj'>女</span><rt>姪女謝道韞</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='adv'>未若</span><rt>不如說是</rt></ruby><ruby><span class='subj'>柳絮</span><rt>柳絮</rt></ruby><ruby><span class='adv'>因風</span><rt>乘著風</rt></ruby><ruby><span class='verb'>起</span><rt>飛起</rt></ruby>。」<ruby><span class='subj'>公</span><rt>謝安</rt></ruby><ruby><span class='adv'>大</span><rt>大笑著</rt></ruby><ruby><span class='verb'>笑樂</span><rt>感到十分歡樂</rt></ruby>。"
                }
            ]
        },
        tiaotiaoqianniuxing: {
            title: "迢迢牽牛星",
            sentences: [
                {
                    original: "迢迢牽牛星，皎皎河漢女。",
                    svo: "<span class='attr'>迢迢</span><span class='subj'>牽牛星</span>，<span class='attr'>皎皎</span><span class='subj'>河漢女</span>。",
                    svo_trans: "<ruby><span class='attr'>迢迢</span><rt>遙遠的</rt></ruby><ruby><span class='subj'>牽牛星</span><rt>牽牛星</rt></ruby>，<ruby><span class='attr'>皎皎</span><rt>明亮的</rt></ruby><ruby><span class='subj'>河漢女</span><rt>織女星</rt></ruby>。"
                },
                {
                    original: "纖纖擢素手，札札弄機杼。",
                    svo: "<span class='adv'>纖纖</span><span class='verb'>擢</span><span class='attr'>素</span><span class='obj'>手</span>，<span class='adv'>札札</span><span class='verb'>弄</span><span class='obj'>機杼</span>。",
                    svo_trans: "<ruby><span class='adv'>纖纖</span><rt>輕盈細長地</rt></ruby><ruby><span class='verb'>擢</span><rt>舉起</rt></ruby><ruby><span class='attr'>素</span><span class='obj'>手</span><rt>白皙的雙手</rt></ruby>，<ruby><span class='adv'>札札</span><rt>發出札札的聲音</rt></ruby><ruby><span class='verb'>弄</span><rt>擺弄著</rt></ruby><ruby><span class='obj'>機杼</span><rt>織布機</rt></ruby>。"
                },
                {
                    original: "終日不成章，泣涕零如雨。",
                    svo: "<span class='adv'>終日</span><span class='adv'>不</span><span class='verb'>成</span><span class='obj'>章</span>，<span class='subj'>泣涕</span><span class='verb'>零</span><span class='adv'>如雨</span>。",
                    svo_trans: "<ruby><span class='adv'>終日</span><rt>一整天</rt></ruby><ruby><span class='adv'>不</span><rt>也無法</rt></ruby><ruby><span class='verb'>成</span><rt>織成</rt></ruby><ruby><span class='obj'>章</span><rt>布匹</rt></ruby>，<ruby><span class='subj'>泣涕</span><rt>眼淚</rt></ruby><ruby><span class='verb'>零</span><rt>落下</rt></ruby><ruby><span class='adv'>如雨</span><rt>如同下雨般</rt></ruby>。"
                },
                {
                    original: "河漢清且淺，相去復幾許？",
                    svo: "<span class='subj'>河漢</span><span class='verb'>清且淺</span>，<span class='adv'>相</span><span class='verb'>去</span><span class='adv'>復幾許</span>？",
                    svo_trans: "<ruby><span class='subj'>河漢</span><rt>銀河</rt></ruby><ruby><span class='verb'>清且淺</span><rt>又清澈又淺</rt></ruby>，<ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>去</span><rt>距離</rt></ruby><ruby><span class='adv'>復幾許</span><rt>又能有多遠呢</rt></ruby>？"
                },
                {
                    original: "盈盈一水間，脈脈不得語。",
                    svo: "<span class='adv'>盈盈</span><span class='attr'>一水</span><span class='obj'>間</span>，<span class='adv'>脈脈</span><span class='adv'>不得</span><span class='verb'>語</span>。",
                    svo_trans: "<ruby><span class='adv'>盈盈</span><rt>清澈的</rt></ruby><ruby><span class='attr'>一水</span><span class='obj'>間</span><rt>一水之隔</rt></ruby>，<ruby><span class='adv'>脈脈</span><rt>只能含情脈脈地相視</rt></ruby><ruby><span class='adv'>不得</span><rt>卻不能</rt></ruby><ruby><span class='verb'>語</span><rt>說話</rt></ruby>。"
                }
            ]
        },
        xingxingchongxingxing: {
            title: "行行重行行",
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
                    svo_trans: "<ruby><span class='subj'>道路</span><rt>路途</rt></ruby><ruby><span class='verb'>阻且長</span><rt>艱險又漫長</rt></ruby>，<ruby><span class='subj'>會面</span><rt>相會的日子</rt></ruby><ruby><span class='adv'>安可</span><rt>怎麼能</rt></ruby><ruby><span class='verb'>知</span><rt>知道呢</rt></ruby>？"
                },
                {
                    original: "胡馬依北風，越鳥巢南枝。",
                    svo: "<span class='attr'>胡</span><span class='subj'>馬</span><span class='verb'>依</span><span class='obj'>北風</span>，<span class='attr'>越</span><span class='subj'>鳥</span><span class='verb'>巢</span><span class='obj'>南枝</span>。",
                    svo_trans: "<ruby><span class='attr'>胡</span><span class='subj'>馬</span><rt>北方的馬</rt></ruby><ruby><span class='verb'>依</span><rt>依戀著</rt></ruby><ruby><span class='obj'>北風</span><rt>北風吹來的地方</rt></ruby>，<ruby><span class='attr'>越</span><span class='subj'>鳥</span><rt>南方的鳥</rt></ruby><ruby><span class='verb'>巢</span><rt>築巢於</rt></ruby><ruby><span class='obj'>南枝</span><rt>向南的樹枝</rt></ruby>。"
                },
                {
                    original: "相去日已遠，衣帶日已緩。",
                    svo: "<span class='adv'>相</span><span class='verb'>去</span><span class='subj'>日</span><span class='adv'>已</span><span class='verb'>遠</span>，<span class='subj'>衣帶</span><span class='subj'>日</span><span class='adv'>已</span><span class='verb'>緩</span>。",
                    svo_trans: "<ruby><span class='adv'>相</span><rt>互相</rt></ruby><ruby><span class='verb'>去</span><rt>分離</rt></ruby><ruby><span class='subj'>日</span><rt>日子</rt></ruby><ruby><span class='adv'>已</span><rt>已經</rt></ruby><ruby><span class='verb'>遠</span><rt>很久</rt></ruby>，<ruby><span class='subj'>衣帶</span><rt>衣服的帶子</rt></ruby><ruby><span class='subj'>日</span><rt>一天比一天</rt></ruby><ruby><span class='adv'>已</span><rt>顯得</rt></ruby><ruby><span class='verb'>緩</span><rt>寬鬆</rt></ruby>。"
                }
            ]
        },
        yinjiu: {
            title: "飲酒(其五)",
            sentences: [
                {
                    original: "結廬在人境，而無車馬喧。",
                    svo: "<span class='verb'>結</span><span class='obj'>廬</span><span class='adv'>在人境</span>，而<span class='verb'>無</span><span class='subj'>車馬</span><span class='obj'>喧</span>。",
                    svo_trans: "<ruby><span class='verb'>結</span><rt>建造</rt></ruby><ruby><span class='obj'>廬</span><rt>茅屋</rt></ruby><ruby><span class='adv'>在人境</span><rt>在人群居住的地方</rt></ruby>，而<ruby><span class='verb'>無</span><rt>卻沒有</rt></ruby><ruby><span class='subj'>車馬</span><rt>車馬的</rt></ruby><ruby><span class='obj'>喧</span><rt>喧鬧聲</rt></ruby>。"
                },
                {
                    original: "問君何能爾？心遠地自偏。",
                    svo: "<span class='verb'>問</span><span class='obj'>君</span><span class='adv'>何能</span><span class='verb'>爾</span>？<span class='subj'>心</span><span class='verb'>遠</span><span class='subj'>地</span><span class='adv'>自</span><span class='verb'>偏</span>。",
                    svo_trans: "<ruby><span class='verb'>問</span><rt>請問</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='adv'>何能</span><rt>怎麼能</rt></ruby><ruby><span class='verb'>爾</span><rt>這樣</rt></ruby>？<ruby><span class='subj'>心</span><rt>心靈</rt></ruby><ruby><span class='verb'>遠</span><rt>遠離塵俗</rt></ruby><ruby><span class='subj'>地</span><rt>居住的地方</rt></ruby><ruby><span class='adv'>自</span><rt>自然</rt></ruby><ruby><span class='verb'>偏</span><rt>偏僻清靜</rt></ruby>。"
                },
                {
                    original: "採菊東籬下，悠然見南山。",
                    svo: "<span class='verb'>採</span><span class='obj'>菊</span><span class='adv'>東籬下</span>，<span class='adv'>悠然</span><span class='verb'>見</span><span class='obj'>南山</span>。",
                    svo_trans: "<ruby><span class='verb'>採</span><rt>採摘</rt></ruby><ruby><span class='obj'>菊</span><rt>菊花</rt></ruby><ruby><span class='adv'>東籬下</span><rt>在東邊的籬笆下</rt></ruby>，<ruby><span class='adv'>悠然</span><rt>悠閒自在地</rt></ruby><ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='obj'>南山</span><rt>南方的山</rt></ruby>。"
                },
                {
                    original: "山氣日夕佳，飛鳥相與還。",
                    svo: "<span class='subj'>山氣</span><span class='adv'>日夕</span><span class='verb'>佳</span>，<span class='subj'>飛鳥</span><span class='adv'>相與</span><span class='verb'>還</span>。",
                    svo_trans: "<ruby><span class='subj'>山氣</span><rt>山中的霧氣</rt></ruby><ruby><span class='adv'>日夕</span><rt>在傍晚時</rt></ruby><ruby><span class='verb'>佳</span><rt>景色很美</rt></ruby>，<ruby><span class='subj'>飛鳥</span><rt>飛鳥</rt></ruby><ruby><span class='adv'>相與</span><rt>成群結隊地</rt></ruby><ruby><span class='verb'>還</span><rt>歸巢</rt></ruby>。"
                },
                {
                    original: "此中有真意，欲辨已忘言。",
                    svo: "<span class='adv'>此中</span><span class='verb'>有</span><span class='obj'>真意</span>，<span class='verb'>欲辨</span><span class='adv'>已</span><span class='verb'>忘</span><span class='obj'>言</span>。",
                    svo_trans: "<ruby><span class='adv'>此中</span><rt>這裡面</rt></ruby><ruby><span class='verb'>有</span><rt>蘊含著</rt></ruby><ruby><span class='obj'>真意</span><rt>人生的真諦</rt></ruby>，<ruby><span class='verb'>欲辨</span><rt>想要分辨說明</rt></ruby><ruby><span class='adv'>已</span><rt>卻已經</rt></ruby><ruby><span class='verb'>忘</span><rt>忘記了</rt></ruby><ruby><span class='obj'>言</span><rt>該怎麼用言語表達</rt></ruby>。"
                }
            ]
        },
        xunjubo: {
            title: "荀巨伯遠看友人疾",
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
            title: "管寧華歆共園中鋤菜",
            sentences: [
                {
                    original: "管寧、華歆共園中鋤菜，見地有片金。",
                    svo: "<span class='subj'>管寧、華歆</span><span class='adv'>共園中</span><span class='verb'>鋤</span><span class='obj'>菜</span>，<span class='verb'>見</span><span class='adv'>地</span><span class='verb'>有</span><span class='attr'>片</span><span class='obj'>金</span>。",
                    svo_trans: "<ruby><span class='subj'>管寧、華歆</span><rt>管寧和華歆</rt></ruby><ruby><span class='adv'>共園中</span><rt>一起在菜園裡</rt></ruby><ruby><span class='verb'>鋤</span><rt>鋤草種</rt></ruby><ruby><span class='obj'>菜</span><rt>菜</rt></ruby>，<ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='adv'>地</span><rt>地上</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>片</span><span class='obj'>金</span><rt>一塊金子</rt></ruby>。"
                },
                {
                    original: "管揮鋤與瓦石不異，華捉而擲去之。",
                    svo: "<span class='subj'>管</span><span class='verb'>揮</span><span class='obj'>鋤</span><span class='adv'>與瓦石不異</span>，<span class='subj'>華</span><span class='verb'>捉</span>而<span class='verb'>擲去</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='subj'>管</span><rt>管寧</rt></ruby><ruby><span class='verb'>揮</span><rt>揮動</rt></ruby><ruby><span class='obj'>鋤</span><rt>鋤頭</rt></ruby><ruby><span class='adv'>與瓦石不異</span><rt>把它視同瓦片石頭一樣</rt></ruby>，<ruby><span class='subj'>華</span><rt>華歆</rt></ruby><ruby><span class='verb'>捉</span><rt>撿起來看</rt></ruby>而<ruby><span class='verb'>擲去</span><rt>又扔掉</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>。"
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
        zouji: {
            title: "鄒忌諷齊王納諫",
            sentences: [
                {
                    original: "鄒忌修八尺有餘，而形貌昳麗。",
                    svo: "<span class='subj'>鄒忌</span><span class='verb'>修</span><span class='attr'>八尺有餘</span>，而<span class='subj'>形貌</span><span class='verb'>昳麗</span>。",
                    svo_trans: "<ruby><span class='subj'>鄒忌</span><rt>鄒忌</rt></ruby><ruby><span class='verb'>修</span><rt>身高</rt></ruby><ruby><span class='attr'>八尺有餘</span><rt>八尺多</rt></ruby>，而<ruby><span class='subj'>形貌</span><rt>容貌</rt></ruby><ruby><span class='verb'>昳麗</span><rt>光艷美麗</rt></ruby>。"
                },
                {
                    original: "吾妻之美我者，私我也；妾之美我者，畏我也。",
                    svo: "<span class='attr'>吾妻之</span><span class='verb'>美</span><span class='obj'>我者</span>，<span class='verb'>私</span><span class='obj'>我</span>也；<span class='attr'>妾之</span><span class='verb'>美</span><span class='obj'>我者</span>，<span class='verb'>畏</span><span class='obj'>我</span>也。",
                    svo_trans: "<ruby><span class='attr'>吾妻之</span><rt>我的妻子</rt></ruby><ruby><span class='verb'>美</span><rt>認為...美</rt></ruby><ruby><span class='obj'>我者</span><rt>我的人</rt></ruby>，是因為<ruby><span class='verb'>私</span><rt>偏愛</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby>；<ruby><span class='attr'>妾之</span><rt>我的小妾</rt></ruby><ruby><span class='verb'>美</span><rt>認為...美</rt></ruby><ruby><span class='obj'>我者</span><rt>我的人</rt></ruby>，是因為<ruby><span class='verb'>畏</span><rt>害怕</rt></ruby><ruby><span class='obj'>我</span><rt>我</rt></ruby>。"
                },
                {
                    original: "客之美我者，欲有求於我也。",
                    svo: "<span class='attr'>客之</span><span class='verb'>美</span><span class='obj'>我者</span>，<span class='verb'>欲有求</span><span class='adv'>於我</span>也。",
                    svo_trans: "<ruby><span class='attr'>客之</span><rt>客人</rt></ruby><ruby><span class='verb'>美</span><rt>認為...美</rt></ruby><ruby><span class='obj'>我者</span><rt>我的人</rt></ruby>，是因為<ruby><span class='verb'>欲有求</span><rt>想要有求</rt></ruby><ruby><span class='adv'>於我</span><rt>於我</rt></ruby>。"
                }
            ]
        },
        yugong: {
            title: "愚公移山",
            sentences: [
                {
                    original: "北山愚公者，年且九十，面山而居。",
                    svo: "<span class='attr'>北山</span><span class='subj'>愚公</span><span class='obj'>者</span>，<span class='subj'>年</span><span class='adv'>且</span><span class='verb'>九十</span>，<span class='adv'>面山</span>而<span class='verb'>居</span>。",
                    svo_trans: "<ruby><span class='attr'>北山</span><rt>北山的</rt></ruby><ruby><span class='subj'>愚公</span><rt>愚公</rt></ruby><ruby><span class='obj'>者</span><rt>這個人</rt></ruby>，<ruby><span class='subj'>年</span><rt>年紀</rt></ruby><ruby><span class='adv'>且</span><rt>將近</rt></ruby><ruby><span class='verb'>九十</span><rt>九十歲了</rt></ruby>，<ruby><span class='adv'>面山</span><rt>面對著山</rt></ruby>而<ruby><span class='verb'>居</span><rt>居住</rt></ruby>。"
                },
                {
                    original: "汝心之固，固不可徹，曾不若孀妻弱子。",
                    svo: "<span class='attr'>汝</span><span class='subj'>心之</span><span class='verb'>固</span>，<span class='adv'>固不可</span><span class='verb'>徹</span>，<span class='adv'>曾不</span><span class='verb'>若</span><span class='attr'>孀妻弱</span><span class='obj'>子</span>。",
                    svo_trans: "<ruby><span class='attr'>汝</span><rt>你</rt></ruby><ruby><span class='subj'>心之</span><rt>思想的</rt></ruby><ruby><span class='verb'>固</span><rt>頑固</rt></ruby>，<ruby><span class='adv'>固不可</span><rt>頑固到不能</rt></ruby><ruby><span class='verb'>徹</span><rt>通達改變</rt></ruby>，<ruby><span class='adv'>曾不</span><rt>簡直不</rt></ruby><ruby><span class='verb'>若</span><rt>如</rt></ruby><ruby><span class='attr'>孀妻弱</span><span class='obj'>子</span><rt>寡婦和弱小的孩子</rt></ruby>。"
                },
                {
                    original: "子子孫孫無窮匱也，而山不加增，何苦而不平？",
                    svo: "<span class='subj'>子子孫孫</span><span class='verb'>無窮匱</span>也，而<span class='subj'>山</span><span class='adv'>不</span><span class='verb'>加增</span>，<span class='adv'>何苦</span>而<span class='adv'>不</span><span class='verb'>平</span>？",
                    svo_trans: "<ruby><span class='subj'>子子孫孫</span><rt>子子孫孫</rt></ruby><ruby><span class='verb'>無窮匱</span><rt>沒有窮盡</rt></ruby>，而<ruby><span class='subj'>山</span><rt>山</rt></ruby><ruby><span class='adv'>不</span><rt>不會</rt></ruby><ruby><span class='verb'>加增</span><rt>增高</rt></ruby>，<ruby><span class='adv'>何苦</span><rt>愁什麼</rt></ruby><ruby><span class='adv'>不</span><rt>不能</rt></ruby><ruby><span class='verb'>平</span><rt>剷平呢</rt></ruby>？"
                }
            ]
        },
        caogui: {
            title: "曹劌論戰",
            sentences: [
                {
                    original: "十年春，齊師伐我。公將戰，曹劌請見。",
                    svo: "<span class='adv'>十年春</span>，<span class='subj'>齊師</span><span class='verb'>伐</span><span class='obj'>我</span>。<span class='subj'>公</span><span class='adv'>將</span><span class='verb'>戰</span>，<span class='subj'>曹劌</span><span class='verb'>請見</span>。",
                    svo_trans: "<ruby><span class='adv'>十年春</span><rt>魯莊公十年春天</rt></ruby>，<ruby><span class='subj'>齊師</span><rt>齊國軍隊</rt></ruby><ruby><span class='verb'>伐</span><rt>攻打</rt></ruby><ruby><span class='obj'>我</span><rt>我們魯國</rt></ruby>。<ruby><span class='subj'>公</span><rt>莊公</rt></ruby><ruby><span class='adv'>將</span><rt>準備</rt></ruby><ruby><span class='verb'>戰</span><rt>迎戰</rt></ruby>，<ruby><span class='subj'>曹劌</span><rt>曹劌</rt></ruby><ruby><span class='verb'>請見</span><rt>請求進見</rt></ruby>。"
                },
                {
                    original: "肉食者謀之，又何間焉？",
                    svo: "<span class='subj'>肉食者</span><span class='verb'>謀</span><span class='obj'>之</span>，<span class='adv'>又何</span><span class='verb'>間</span>焉？",
                    svo_trans: "<ruby><span class='subj'>肉食者</span><rt>做大官享受肉食的人</rt></ruby><ruby><span class='verb'>謀</span><rt>會謀劃</rt></ruby><ruby><span class='obj'>之</span><rt>這件事</rt></ruby>，<ruby><span class='adv'>又何</span><rt>你又何必</rt></ruby><ruby><span class='verb'>間</span><rt>參與其間</rt></ruby>呢？"
                },
                {
                    original: "夫戰，勇氣也。一鼓作氣，再而衰，三而竭。",
                    svo: "<span class='subj'>夫戰</span>，<span class='obj'>勇氣</span>也。<span class='adv'>一</span><span class='verb'>鼓</span><span class='verb'>作氣</span>，<span class='adv'>再</span>而<span class='verb'>衰</span>，<span class='adv'>三</span>而<span class='verb'>竭</span>。",
                    svo_trans: "<ruby><span class='subj'>夫戰</span><rt>打仗</rt></ruby>，靠的是<ruby><span class='obj'>勇氣</span><rt>勇氣</rt></ruby>。<ruby><span class='adv'>一</span><rt>第一次</rt></ruby><ruby><span class='verb'>鼓</span><rt>擊鼓</rt></ruby>能<ruby><span class='verb'>作氣</span><rt>振作士氣</rt></ruby>，<ruby><span class='adv'>再</span><rt>第二次擊鼓</rt></ruby>士氣就<ruby><span class='verb'>衰</span><rt>衰弱</rt></ruby>了，<ruby><span class='adv'>三</span><rt>第三次擊鼓</rt></ruby>士氣就<ruby><span class='verb'>竭</span><rt>耗盡</rt></ruby>了。"
                }
            ]
        },
        yuwosuoyu: {
            title: "魚我所欲也",
            sentences: [
                {
                    original: "魚，我所欲也；熊掌，亦我所欲也。",
                    svo: "<span class='subj'>魚</span>，<span class='attr'>我所</span><span class='verb'>欲</span>也；<span class='subj'>熊掌</span>，<span class='adv'>亦</span><span class='attr'>我所</span><span class='verb'>欲</span>也。",
                    svo_trans: "<ruby><span class='subj'>魚</span><rt>魚</rt></ruby>，是<ruby><span class='attr'>我所</span><rt>我所</rt></ruby><ruby><span class='verb'>欲</span><rt>想要的</rt></ruby>；<ruby><span class='subj'>熊掌</span><rt>熊掌</rt></ruby>，<ruby><span class='adv'>亦</span><rt>也是</rt></ruby><ruby><span class='attr'>我所</span><rt>我所</rt></ruby><ruby><span class='verb'>欲</span><rt>想要的</rt></ruby>。"
                },
                {
                    original: "二者不可得兼，舍魚而取熊掌者也。",
                    svo: "<span class='subj'>二者</span><span class='adv'>不可</span><span class='verb'>得兼</span>，<span class='verb'>舍</span><span class='obj'>魚</span>而<span class='verb'>取</span><span class='obj'>熊掌</span><span class='obj'>者</span>也。",
                    svo_trans: "如果<ruby><span class='subj'>二者</span><rt>這兩樣東西</rt></ruby><ruby><span class='adv'>不可</span><rt>不能</rt></ruby><ruby><span class='verb'>得兼</span><rt>同時得到</rt></ruby>，我會<ruby><span class='verb'>舍</span><rt>捨棄</rt></ruby><ruby><span class='obj'>魚</span><rt>魚</rt></ruby>而<ruby><span class='verb'>取</span><rt>選取</rt></ruby><ruby><span class='obj'>熊掌</span><rt>熊掌</rt></ruby>。"
                },
                {
                    original: "生，亦我所欲也；義，亦我所欲也。二者不可得兼，舍生而取義者也。",
                    svo: "<span class='subj'>生</span>，<span class='adv'>亦</span><span class='attr'>我所</span><span class='verb'>欲</span>也；<span class='subj'>義</span>，<span class='adv'>亦</span><span class='attr'>我所</span><span class='verb'>欲</span>也。<span class='subj'>二者</span><span class='adv'>不可</span><span class='verb'>得兼</span>，<span class='verb'>舍</span><span class='obj'>生</span>而<span class='verb'>取</span><span class='obj'>義</span><span class='obj'>者</span>也。",
                    svo_trans: "<ruby><span class='subj'>生</span><rt>生命</rt></ruby>，<ruby><span class='adv'>亦</span><rt>也是</rt></ruby><ruby><span class='attr'>我所</span><rt>我所</rt></ruby><ruby><span class='verb'>欲</span><rt>想要的</rt></ruby>；<ruby><span class='subj'>義</span><rt>大義</rt></ruby>，<ruby><span class='adv'>亦</span><rt>也是</rt></ruby><ruby><span class='attr'>我所</span><rt>我所</rt></ruby><ruby><span class='verb'>欲</span><rt>想要的</rt></ruby>。如果<ruby><span class='subj'>二者</span><rt>這兩樣</rt></ruby><ruby><span class='adv'>不可</span><rt>不能</rt></ruby><ruby><span class='verb'>得兼</span><rt>同時得到</rt></ruby>，我會<ruby><span class='verb'>舍</span><rt>捨棄</rt></ruby><ruby><span class='obj'>生</span><rt>生命</rt></ruby>而<ruby><span class='verb'>取</span><rt>選取</rt></ruby><ruby><span class='obj'>義</span><rt>大義</rt></ruby>。"
                }
            ]
        },
        datong: {
            title: "大同與小康",
            sentences: [
                {
                    original: "大道之行也，天下為公。",
                    svo: "<span class='subj'>大道之行</span>也，<span class='subj'>天下</span><span class='verb'>為</span><span class='obj'>公</span>。",
                    svo_trans: "<ruby><span class='subj'>大道之行</span><rt>大道實行的時代</rt></ruby>也，<ruby><span class='subj'>天下</span><rt>天下</rt></ruby><ruby><span class='verb'>為</span><rt>是</rt></ruby><ruby><span class='obj'>公</span><rt>天下人所共有的</rt></ruby>。"
                },
                {
                    original: "選賢與能，講信修睦。",
                    svo: "<span class='verb'>選</span><span class='obj'>賢</span><span class='verb'>與</span><span class='obj'>能</span>，<span class='verb'>講</span><span class='obj'>信</span><span class='verb'>修</span><span class='obj'>睦</span>。",
                    svo_trans: "<ruby><span class='verb'>選</span><rt>選拔</rt></ruby><ruby><span class='obj'>賢</span><rt>道德高尚的人</rt></ruby><ruby><span class='verb'>與</span><rt>推舉</rt></ruby><ruby><span class='obj'>能</span><rt>有才幹的人</rt></ruby>，<ruby><span class='verb'>講</span><rt>講求</rt></ruby><ruby><span class='obj'>信</span><rt>誠信</rt></ruby><ruby><span class='verb'>修</span><rt>培養</rt></ruby><ruby><span class='obj'>睦</span><rt>和睦</rt></ruby>。"
                },
                {
                    original: "故人不獨親其親，不獨子其子。",
                    svo: "<span class='adv'>故</span><span class='subj'>人</span><span class='adv'>不獨</span><span class='verb'>親</span><span class='attr'>其</span><span class='obj'>親</span>，<span class='adv'>不獨</span><span class='verb'>子</span><span class='attr'>其</span><span class='obj'>子</span>。",
                    svo_trans: "<ruby><span class='adv'>故</span><rt>所以</rt></ruby><ruby><span class='subj'>人</span><rt>人們</rt></ruby><ruby><span class='adv'>不獨</span><rt>不只</rt></ruby><ruby><span class='verb'>親</span><rt>敬愛</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>親</span><rt>自己的父母</rt></ruby>，<ruby><span class='adv'>不獨</span><rt>不只</rt></ruby><ruby><span class='verb'>子</span><rt>慈愛</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>子</span><rt>自己的子女</rt></ruby>。"
                }
            ]
        },
        quanxue: {
            title: "勸學(節錄)",
            sentences: [
                {
                    original: "君子曰：學不可以已。",
                    svo: "<span class='subj'>君子</span><span class='verb'>曰</span>：<span class='subj'>學</span><span class='adv'>不可以</span><span class='verb'>已</span>。",
                    svo_trans: "<ruby><span class='subj'>君子</span><rt>有學問道德的人</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：<ruby><span class='subj'>學</span><rt>學習</rt></ruby><ruby><span class='adv'>不可以</span><rt>不能夠</rt></ruby><ruby><span class='verb'>已</span><rt>停止</rt></ruby>。"
                },
                {
                    original: "青，取之於藍，而青於藍。",
                    svo: "<span class='subj'>青</span>，<span class='verb'>取</span><span class='obj'>之</span><span class='adv'>於藍</span>，而<span class='verb'>青</span><span class='adv'>於藍</span>。",
                    svo_trans: "<ruby><span class='subj'>青</span><rt>靛青色</rt></ruby>，<ruby><span class='verb'>取</span><rt>提煉</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby><ruby><span class='adv'>於藍</span><rt>從蓼藍草中</rt></ruby>，而<ruby><span class='verb'>青</span><rt>顏色卻比</rt></ruby><ruby><span class='adv'>於藍</span><rt>蓼藍草更深</rt></ruby>。"
                },
                {
                    original: "冰，水為之，而寒於水。",
                    svo: "<span class='subj'>冰</span>，<span class='subj'>水</span><span class='verb'>為</span><span class='obj'>之</span>，而<span class='verb'>寒</span><span class='adv'>於水</span>。",
                    svo_trans: "<ruby><span class='subj'>冰</span><rt>冰</rt></ruby>，是<ruby><span class='subj'>水</span><rt>水</rt></ruby><ruby><span class='verb'>為</span><rt>凝結成</rt></ruby><ruby><span class='obj'>之</span><rt>它的</rt></ruby>，而<ruby><span class='verb'>寒</span><rt>卻比</rt></ruby><ruby><span class='adv'>於水</span><rt>水還要寒冷</rt></ruby>。"
                }
            ]
        },
        shishuo: {
            title: "師說",
            sentences: [
                {
                    original: "古之學者必有師。",
                    svo: "<span class='attr'>古之</span><span class='subj'>學者</span><span class='adv'>必</span><span class='verb'>有</span><span class='obj'>師</span>。",
                    svo_trans: "<ruby><span class='attr'>古之</span><rt>古代求學的</rt></ruby><ruby><span class='subj'>學者</span><rt>人</rt></ruby><ruby><span class='adv'>必</span><rt>一定</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>師</span><rt>老師</rt></ruby>。"
                },
                {
                    original: "師者，所以傳道受業解惑也。",
                    svo: "<span class='subj'>師</span><span class='obj'>者</span>，<span class='adv'>所以</span><span class='verb'>傳</span><span class='obj'>道</span><span class='verb'>受</span><span class='obj'>業</span><span class='verb'>解</span><span class='obj'>惑</span>也。",
                    svo_trans: "<ruby><span class='subj'>師</span><rt>老師</rt></ruby><ruby><span class='obj'>者</span><rt>這個人</rt></ruby>，是<ruby><span class='adv'>所以</span><rt>用來</rt></ruby><ruby><span class='verb'>傳</span><rt>傳授</rt></ruby><ruby><span class='obj'>道</span><rt>道理</rt></ruby>、<ruby><span class='verb'>受</span><rt>教授</rt></ruby><ruby><span class='obj'>業</span><rt>學業</rt></ruby>、<ruby><span class='verb'>解</span><rt>解答</rt></ruby><ruby><span class='obj'>惑</span><rt>疑惑的</rt></ruby>啊。"
                },
                {
                    original: "人非生而知之者，孰能無惑？",
                    svo: "<span class='subj'>人</span><span class='verb'>非</span><span class='adv'>生</span>而<span class='verb'>知</span><span class='obj'>之者</span>，<span class='subj'>孰</span><span class='adv'>能</span><span class='verb'>無</span><span class='obj'>惑</span>？",
                    svo_trans: "<ruby><span class='subj'>人</span><rt>人</rt></ruby><ruby><span class='verb'>非</span><rt>不是</rt></ruby><ruby><span class='adv'>生</span><rt>生下來</rt></ruby>就<ruby><span class='verb'>知</span><rt>懂得</rt></ruby><ruby><span class='obj'>之者</span><rt>道理的人</rt></ruby>，<ruby><span class='subj'>孰</span><rt>誰</rt></ruby><ruby><span class='adv'>能</span><rt>能</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>惑</span><rt>疑惑呢</rt></ruby>？"
                }
            ]
        },
        jiangxue: {
            title: "江雪",
            sentences: [
                {
                    original: "千山鳥飛絕，萬徑人蹤滅。",
                    svo: "<span class='attr'>千</span><span class='subj'>山</span><span class='subj'>鳥飛</span><span class='verb'>絕</span>，<span class='attr'>萬</span><span class='subj'>徑</span><span class='subj'>人蹤</span><span class='verb'>滅</span>。",
                    svo_trans: "<ruby><span class='attr'>千</span><span class='subj'>山</span><rt>群山之中</rt></ruby><ruby><span class='subj'>鳥飛</span><rt>飛鳥的蹤影</rt></ruby><ruby><span class='verb'>絕</span><rt>斷絕了</rt></ruby>，<ruby><span class='attr'>萬</span><span class='subj'>徑</span><rt>所有的道路上</rt></ruby><ruby><span class='subj'>人蹤</span><rt>行人的足跡</rt></ruby><ruby><span class='verb'>滅</span><rt>也消失了</rt></ruby>。"
                },
                {
                    original: "孤舟簑笠翁，獨釣寒江雪。",
                    svo: "<span class='attr'>孤舟</span><span class='attr'>簑笠</span><span class='subj'>翁</span>，<span class='adv'>獨</span><span class='verb'>釣</span><span class='attr'>寒江</span><span class='obj'>雪</span>。",
                    svo_trans: "<ruby><span class='attr'>孤舟</span><rt>孤零零的小船上</rt></ruby><ruby><span class='attr'>簑笠</span><span class='subj'>翁</span><rt>穿著簑衣戴著斗笠的老翁</rt></ruby>，<ruby><span class='adv'>獨</span><rt>獨自</rt></ruby><ruby><span class='verb'>釣</span><rt>垂釣於</rt></ruby><ruby><span class='attr'>寒江</span><rt>寒冷的江面</rt></ruby><ruby><span class='obj'>雪</span><rt>風雪之中</rt></ruby>。"
                }
            ]
        },
        songdushaofu: {
            title: "送杜少府之任蜀州",
            sentences: [
                {
                    original: "城闕輔三秦，風煙望五津。",
                    svo: "<span class='subj'>城闕</span><span class='verb'>輔</span><span class='attr'>三</span><span class='obj'>秦</span>，<span class='subj'>風煙</span><span class='verb'>望</span><span class='attr'>五</span><span class='obj'>津</span>。",
                    svo_trans: "<ruby><span class='subj'>城闕</span><rt>長安城</rt></ruby><ruby><span class='verb'>輔</span><rt>被護衛著</rt></ruby><ruby><span class='attr'>三</span><span class='obj'>秦</span><rt>三秦大地</rt></ruby>，透過<ruby><span class='subj'>風煙</span><rt>迷濛的風煙</rt></ruby><ruby><span class='verb'>望</span><rt>遙望著</rt></ruby><ruby><span class='attr'>五</span><span class='obj'>津</span><rt>蜀州的五大渡口</rt></ruby>。"
                },
                {
                    original: "與君離別意，同是宦遊人。",
                    svo: "<span class='adv'>與</span><span class='obj'>君</span><span class='attr'>離別</span><span class='subj'>意</span>，<span class='adv'>同</span><span class='verb'>是</span><span class='attr'>宦遊</span><span class='obj'>人</span>。",
                    svo_trans: "<ruby><span class='adv'>與</span><rt>和</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby>有著相同的<ruby><span class='attr'>離別</span><span class='subj'>意</span><rt>離別之情</rt></ruby>，因為我們<ruby><span class='adv'>同</span><rt>同樣</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='attr'>宦遊</span><span class='obj'>人</span><rt>離鄉作官的人</rt></ruby>。"
                },
                {
                    original: "海內存知己，天涯若比鄰。",
                    svo: "<span class='adv'>海內</span><span class='verb'>存</span><span class='obj'>知己</span>，<span class='subj'>天涯</span><span class='verb'>若</span><span class='obj'>比鄰</span>。",
                    svo_trans: "只要<ruby><span class='adv'>海內</span><rt>四海之內</rt></ruby><ruby><span class='verb'>存</span><rt>存在</rt></ruby><ruby><span class='obj'>知己</span><rt>知心朋友</rt></ruby>，即使遠在<ruby><span class='subj'>天涯</span><rt>天涯海角</rt></ruby>也<ruby><span class='verb'>若</span><rt>如同</rt></ruby><ruby><span class='obj'>比鄰</span><rt>近鄰一樣</rt></ruby>。"
                },
                {
                    original: "無為在歧路，兒女共沾巾。",
                    svo: "<span class='adv'>無為</span><span class='adv'>在歧路</span>，<span class='subj'>兒女</span><span class='adv'>共</span><span class='verb'>沾</span><span class='obj'>巾</span>。",
                    svo_trans: "<ruby><span class='adv'>無為</span><rt>不要</rt></ruby><ruby><span class='adv'>在歧路</span><rt>在岔路口分別時</rt></ruby>，像<ruby><span class='subj'>兒女</span><rt>小兒女那樣</rt></ruby><ruby><span class='adv'>共</span><rt>一起</rt></ruby><ruby><span class='verb'>沾</span><rt>淚濕</rt></ruby><ruby><span class='obj'>巾</span><rt>手帕</rt></ruby>。"
                }
            ]
        },
        shanjuqiuming: {
            title: "山居秋暝",
            sentences: [
                {
                    original: "空山新雨後，天氣晚來秋。",
                    svo: "<span class='adv'>空山新雨後</span>，<span class='subj'>天氣</span><span class='adv'>晚來</span><span class='verb'>秋</span>。",
                    svo_trans: "<ruby><span class='adv'>空山新雨後</span><rt>空曠的群山剛下過一場秋雨</rt></ruby>，<ruby><span class='subj'>天氣</span><rt>天氣</rt></ruby><ruby><span class='adv'>晚來</span><rt>到了傍晚</rt></ruby><ruby><span class='verb'>秋</span><rt>更顯得秋意濃厚</rt></ruby>。"
                },
                {
                    original: "明月松間照，清泉石上流。",
                    svo: "<span class='subj'>明月</span><span class='adv'>松間</span><span class='verb'>照</span>，<span class='subj'>清泉</span><span class='adv'>石上</span><span class='verb'>流</span>。",
                    svo_trans: "<ruby><span class='subj'>明月</span><rt>皎潔的明月</rt></ruby><ruby><span class='adv'>松間</span><rt>從松樹間</rt></ruby><ruby><span class='verb'>照</span><rt>照耀下來</rt></ruby>，<ruby><span class='subj'>清泉</span><rt>清澈的泉水</rt></ruby><ruby><span class='adv'>石上</span><rt>在石頭上</rt></ruby><ruby><span class='verb'>流</span><rt>淙淙流淌</rt></ruby>。"
                },
                {
                    original: "竹喧歸浣女，蓮動下漁舟。",
                    svo: "<span class='subj'>竹</span><span class='verb'>喧</span><span class='verb'>歸</span><span class='obj'>浣女</span>，<span class='subj'>蓮</span><span class='verb'>動</span><span class='verb'>下</span><span class='obj'>漁舟</span>。",
                    svo_trans: "<ruby><span class='subj'>竹</span><rt>竹林裡</rt></ruby><ruby><span class='verb'>喧</span><rt>傳來喧鬧聲</rt></ruby><ruby><span class='verb'>歸</span><rt>是歸來的</rt></ruby><ruby><span class='obj'>浣女</span><rt>洗衣女子</rt></ruby>，<ruby><span class='subj'>蓮</span><rt>蓮葉</rt></ruby><ruby><span class='verb'>動</span><rt>搖動</rt></ruby><ruby><span class='verb'>下</span><rt>是順流而下的</rt></ruby><ruby><span class='obj'>漁舟</span><rt>漁船</rt></ruby>。"
                },
                {
                    original: "隨意春芳歇，王孫自可留。",
                    svo: "<span class='adv'>隨意</span><span class='subj'>春芳</span><span class='verb'>歇</span>，<span class='subj'>王孫</span><span class='adv'>自可</span><span class='verb'>留</span>。",
                    svo_trans: "<ruby><span class='adv'>隨意</span><rt>任憑</rt></ruby><ruby><span class='subj'>春芳</span><rt>春天的花草</rt></ruby><ruby><span class='verb'>歇</span><rt>凋零</rt></ruby>，<ruby><span class='subj'>王孫</span><rt>貴族公子（指詩人自己）</rt></ruby><ruby><span class='adv'>自可</span><rt>自然可以</rt></ruby><ruby><span class='verb'>留</span><rt>留在這裡</rt></ruby>。"
                }
            ]
        },
        yueduzhuo: {
            title: "月下獨酌(其一)",
            sentences: [
                {
                    original: "花間一壺酒，獨酌無相親。",
                    svo: "<span class='adv'>花間</span><span class='attr'>一壺</span><span class='obj'>酒</span>，<span class='adv'>獨</span><span class='verb'>酌</span><span class='verb'>無</span><span class='obj'>相親</span>。",
                    svo_trans: "<ruby><span class='adv'>花間</span><rt>花叢中</rt></ruby><ruby><span class='attr'>一壺</span><span class='obj'>酒</span><rt>擺著一壺美酒</rt></ruby>，<ruby><span class='adv'>獨</span><rt>獨自</rt></ruby><ruby><span class='verb'>酌</span><rt>飲酒</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>相親</span><rt>親近的人作伴</rt></ruby>。"
                },
                {
                    original: "舉杯邀明月，對影成三人。",
                    svo: "<span class='verb'>舉</span><span class='obj'>杯</span><span class='verb'>邀</span><span class='obj'>明月</span>，<span class='verb'>對</span><span class='obj'>影</span><span class='verb'>成</span><span class='obj'>三人</span>。",
                    svo_trans: "<ruby><span class='verb'>舉</span><rt>舉起</rt></ruby><ruby><span class='obj'>杯</span><rt>酒杯</rt></ruby><ruby><span class='verb'>邀</span><rt>邀請</rt></ruby><ruby><span class='obj'>明月</span><rt>明月</rt></ruby>，<ruby><span class='verb'>對</span><rt>對著</rt></ruby><ruby><span class='obj'>影</span><rt>自己的影子</rt></ruby><ruby><span class='verb'>成</span><rt>結成了</rt></ruby><ruby><span class='obj'>三人</span><rt>三個人</rt></ruby>。"
                },
                {
                    original: "月既不解飲，影徒隨我身。",
                    svo: "<span class='subj'>月</span><span class='adv'>既不解</span><span class='verb'>飲</span>，<span class='subj'>影</span><span class='adv'>徒</span><span class='verb'>隨</span><span class='attr'>我</span><span class='obj'>身</span>。",
                    svo_trans: "<ruby><span class='subj'>月</span><rt>月亮</rt></ruby><ruby><span class='adv'>既不解</span><rt>既然不懂得</rt></ruby><ruby><span class='verb'>飲</span><rt>飲酒</rt></ruby>，<ruby><span class='subj'>影</span><rt>影子</rt></ruby><ruby><span class='adv'>徒</span><rt>也只是徒然地</rt></ruby><ruby><span class='verb'>隨</span><rt>跟隨</rt></ruby><ruby><span class='attr'>我</span><span class='obj'>身</span><rt>我的身體</rt></ruby>。"
                }
            ]
        },
        ciwuyeti: {
            title: "慈烏夜啼",
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
        yumeiren: {
            title: "虞美人(春花秋月何時了)",
            sentences: [
                {
                    original: "春花秋月何時了？往事知多少。",
                    svo: "<span class='subj'>春花秋月</span><span class='adv'>何時</span><span class='verb'>了</span>？<span class='subj'>往事</span><span class='verb'>知</span><span class='obj'>多少</span>。",
                    svo_trans: "<ruby><span class='subj'>春花秋月</span><rt>春天的花秋天的月</rt></ruby><ruby><span class='adv'>何時</span><rt>什麼時候</rt></ruby><ruby><span class='verb'>了</span><rt>才了結呢</rt></ruby>？<ruby><span class='subj'>往事</span><rt>故國的往事</rt></ruby><ruby><span class='verb'>知</span><rt>又知道</rt></ruby><ruby><span class='obj'>多少</span><rt>有多少呢</rt></ruby>。"
                },
                {
                    original: "小樓昨夜又東風，故國不堪回首月明中。",
                    svo: "<span class='adv'>小樓昨夜</span><span class='adv'>又</span><span class='verb'>東風</span>，<span class='subj'>故國</span><span class='adv'>不堪回首</span><span class='adv'>月明中</span>。",
                    svo_trans: "<ruby><span class='adv'>小樓昨夜</span><rt>昨夜小樓上</rt></ruby><ruby><span class='adv'>又</span><rt>又吹來了</rt></ruby><ruby><span class='verb'>東風</span><rt>春風</rt></ruby>，<ruby><span class='subj'>故國</span><rt>故國的江山</rt></ruby><ruby><span class='adv'>不堪回首</span><rt>真不忍心回想</rt></ruby><ruby><span class='adv'>月明中</span><rt>在這明月光之中</rt></ruby>。"
                },
                {
                    original: "問君能有幾多愁？恰似一江春水向東流。",
                    svo: "<span class='verb'>問</span><span class='obj'>君</span><span class='verb'>能有</span><span class='attr'>幾多</span><span class='obj'>愁</span>？<span class='adv'>恰似</span><span class='attr'>一江</span><span class='subj'>春水</span><span class='adv'>向東</span><span class='verb'>流</span>。",
                    svo_trans: "<ruby><span class='verb'>問</span><rt>請問</rt></ruby><ruby><span class='obj'>君</span><rt>你</rt></ruby><ruby><span class='verb'>能有</span><rt>能有</rt></ruby><ruby><span class='attr'>幾多</span><span class='obj'>愁</span><rt>多少的愁苦</rt></ruby>？<ruby><span class='adv'>恰似</span><rt>就好像</rt></ruby><ruby><span class='attr'>一江</span><span class='subj'>春水</span><rt>滿江的春水</rt></ruby><ruby><span class='adv'>向東</span><rt>向東</rt></ruby><ruby><span class='verb'>流</span><rt>奔流不息</rt></ruby>。"
                }
            ]
        },
        lunjunzi: {
            title: "論君子",
            sentences: [
                {
                    original: "子曰：「君子坦蕩蕩，小人長戚戚。」",
                    svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='subj'>君子</span><span class='verb'>坦蕩蕩</span>，<span class='subj'>小人</span><span class='adv'>長</span><span class='verb'>戚戚</span>。」",
                    svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>君子</span><rt>君子的心胸</rt></ruby><ruby><span class='verb'>坦蕩蕩</span><rt>坦白寬廣</rt></ruby>，<ruby><span class='subj'>小人</span><rt>小人的心胸</rt></ruby><ruby><span class='adv'>長</span><rt>經常</rt></ruby><ruby><span class='verb'>戚戚</span><rt>憂愁恐懼</rt></ruby>。」"
                },
                {
                    original: "子曰：「君子成人之美，不成人之惡。小人反是。」",
                    svo: "<span class='subj'>子</span><span class='verb'>曰</span>：「<span class='subj'>君子</span><span class='verb'>成</span><span class='attr'>人之</span><span class='obj'>美</span>，<span class='adv'>不成</span><span class='attr'>人之</span><span class='obj'>惡</span>。<span class='subj'>小人</span><span class='verb'>反是</span>。」",
                    svo_trans: "<ruby><span class='subj'>子</span><rt>孔子</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：「<ruby><span class='subj'>君子</span><rt>君子</rt></ruby><ruby><span class='verb'>成</span><rt>成全</rt></ruby><ruby><span class='attr'>人之</span><span class='obj'>美</span><rt>別人的好事</rt></ruby>，<ruby><span class='adv'>不成</span><rt>不促成</rt></ruby><ruby><span class='attr'>人之</span><span class='obj'>惡</span><rt>別人的壞事</rt></ruby>。<ruby><span class='subj'>小人</span><rt>小人</rt></ruby><ruby><span class='verb'>反是</span><rt>剛好相反</rt></ruby>。」"
                }
            ]
        },
        tixilinbi: {
            title: "題西林壁",
            sentences: [
                {
                    original: "橫看成嶺側成峰，遠近高低各不同。",
                    svo: "<span class='adv'>橫</span><span class='verb'>看</span><span class='verb'>成</span><span class='obj'>嶺</span><span class='adv'>側</span><span class='verb'>成</span><span class='obj'>峰</span>，<span class='subj'>遠近高低</span><span class='adv'>各</span><span class='adv'>不</span><span class='verb'>同</span>。",
                    svo_trans: "<ruby><span class='adv'>橫</span><rt>從正面</rt></ruby><ruby><span class='verb'>看</span><rt>看</rt></ruby><ruby><span class='verb'>成</span><rt>是連綿的</rt></ruby><ruby><span class='obj'>嶺</span><rt>山嶺</rt></ruby>，<ruby><span class='adv'>側</span><rt>從側面看</rt></ruby><ruby><span class='verb'>成</span><rt>成了陡峭的</rt></ruby><ruby><span class='obj'>峰</span><rt>山峰</rt></ruby>，<ruby><span class='subj'>遠近高低</span><rt>無論從遠處、近處、高處還是低處看</rt></ruby><ruby><span class='adv'>各</span><rt>各自</rt></ruby><ruby><span class='adv'>不</span><rt>都不</rt></ruby><ruby><span class='verb'>同</span><rt>相同</rt></ruby>。"
                },
                {
                    original: "不識廬山真面目，只緣身在此山中。",
                    svo: "<span class='adv'>不</span><span class='verb'>識</span><span class='attr'>廬山</span><span class='obj'>真面目</span>，<span class='adv'>只緣</span><span class='subj'>身</span><span class='verb'>在</span><span class='obj'>此山中</span>。",
                    svo_trans: "<ruby><span class='adv'>不</span><rt>不能</rt></ruby><ruby><span class='verb'>識</span><rt>認清</rt></ruby><ruby><span class='attr'>廬山</span><rt>廬山的</rt></ruby><ruby><span class='obj'>真面目</span><rt>真實面貌</rt></ruby>，<ruby><span class='adv'>只緣</span><rt>只因為</rt></ruby><ruby><span class='subj'>身</span><rt>自己</rt></ruby><ruby><span class='verb'>在</span><rt>身處在</rt></ruby><ruby><span class='obj'>此山中</span><rt>這座山之中</rt></ruby>。"
                }
            ]
        },
        xiaochujingcisi: {
            title: "曉出淨慈寺送林子方",
            sentences: [
                {
                    original: "畢竟西湖六月中，風光不與四時同。",
                    svo: "<span class='adv'>畢竟</span><span class='subj'>西湖六月中</span>，<span class='subj'>風光</span><span class='adv'>不與</span><span class='obj'>四時</span><span class='verb'>同</span>。",
                    svo_trans: "<ruby><span class='adv'>畢竟</span><rt>到底是</rt></ruby><ruby><span class='subj'>西湖六月中</span><rt>西湖六月裡</rt></ruby>，<ruby><span class='subj'>風光</span><rt>風光景色</rt></ruby><ruby><span class='adv'>不與</span><rt>不和其他</rt></ruby><ruby><span class='obj'>四時</span><rt>三個季節</rt></ruby><ruby><span class='verb'>同</span><rt>相同</rt></ruby>。"
                },
                {
                    original: "接天蓮葉無窮碧，映日荷花別樣紅。",
                    svo: "<span class='verb'>接</span><span class='obj'>天</span><span class='subj'>蓮葉</span><span class='adv'>無窮</span><span class='verb'>碧</span>，<span class='verb'>映</span><span class='obj'>日</span><span class='subj'>荷花</span><span class='adv'>別樣</span><span class='verb'>紅</span>。",
                    svo_trans: "<ruby><span class='verb'>接</span><rt>連接</rt></ruby><ruby><span class='obj'>天</span><rt>天際的</rt></ruby><ruby><span class='subj'>蓮葉</span><rt>蓮葉</rt></ruby><ruby><span class='adv'>無窮</span><rt>無邊無際的</rt></ruby><ruby><span class='verb'>碧</span><rt>碧綠</rt></ruby>，<ruby><span class='verb'>映</span><rt>映照著</rt></ruby><ruby><span class='obj'>日</span><rt>太陽的</rt></ruby><ruby><span class='subj'>荷花</span><rt>荷花</rt></ruby><ruby><span class='adv'>別樣</span><rt>特別的</rt></ruby><ruby><span class='verb'>紅</span><rt>紅艷</rt></ruby>。"
                }
            ]
        },
        tianjingsha: {
            title: "天淨沙秋思",
            sentences: [
                {
                    original: "枯藤老樹昏鴉，小橋流水人家，古道西風瘦馬。",
                    svo: "<span class='attr'>枯</span><span class='subj'>藤</span><span class='attr'>老</span><span class='subj'>樹</span><span class='attr'>昏</span><span class='subj'>鴉</span>，<span class='attr'>小</span><span class='subj'>橋</span><span class='attr'>流</span><span class='subj'>水</span><span class='subj'>人家</span>，<span class='attr'>古</span><span class='subj'>道</span><span class='attr'>西</span><span class='subj'>風</span><span class='attr'>瘦</span><span class='subj'>馬</span>。",
                    svo_trans: "<ruby><span class='attr'>枯</span><span class='subj'>藤</span><rt>枯萎的藤蔓</rt></ruby><ruby><span class='attr'>老</span><span class='subj'>樹</span><rt>蒼老的樹木</rt></ruby><ruby><span class='attr'>昏</span><span class='subj'>鴉</span><rt>黃昏歸巢的烏鴉</rt></ruby>，<ruby><span class='attr'>小</span><span class='subj'>橋</span><rt>小橋</rt></ruby><ruby><span class='attr'>流</span><span class='subj'>水</span><rt>潺潺的流水</rt></ruby><ruby><span class='subj'>人家</span><rt>幾戶人家</rt></ruby>，<ruby><span class='attr'>古</span><span class='subj'>道</span><rt>荒涼的古道</rt></ruby><ruby><span class='attr'>西</span><span class='subj'>風</span><rt>蕭瑟的秋風</rt></ruby><ruby><span class='attr'>瘦</span><span class='subj'>馬</span><rt>疲憊的瘦馬</rt></ruby>。"
                },
                {
                    original: "夕陽西下，斷腸人在天涯。",
                    svo: "<span class='subj'>夕陽</span><span class='adv'>西</span><span class='verb'>下</span>，<span class='attr'>斷腸</span><span class='subj'>人</span><span class='verb'>在</span><span class='obj'>天涯</span>。",
                    svo_trans: "<ruby><span class='subj'>夕陽</span><rt>夕陽</rt></ruby><ruby><span class='adv'>西</span><rt>向西</rt></ruby><ruby><span class='verb'>下</span><rt>落下</rt></ruby>，<ruby><span class='attr'>斷腸</span><span class='subj'>人</span><rt>傷透心的旅人</rt></ruby><ruby><span class='verb'>在</span><rt>漂泊在</rt></ruby><ruby><span class='obj'>天涯</span><rt>遙遠的天涯</rt></ruby>。"
                }
            ]
        },
        huaji: {
            title: "畫雞",
            sentences: [
                {
                    original: "頭上紅冠不用裁，滿身雪白走將來。",
                    svo: "<span class='adv'>頭上</span><span class='subj'>紅冠</span><span class='adv'>不用</span><span class='verb'>裁</span>，<span class='adv'>滿身雪白</span><span class='verb'>走將來</span>。",
                    svo_trans: "<ruby><span class='adv'>頭上</span><rt>頭上的</rt></ruby><ruby><span class='subj'>紅冠</span><rt>紅冠</rt></ruby><ruby><span class='adv'>不用</span><rt>不需要</rt></ruby><ruby><span class='verb'>裁</span><rt>特別剪裁</rt></ruby>，<ruby><span class='adv'>滿身雪白</span><rt>全身雪白的羽毛</rt></ruby><ruby><span class='verb'>走將來</span><rt>昂首闊步地走過來</rt></ruby>。"
                },
                {
                    original: "平生不敢輕言語，一叫千門萬戶開。",
                    svo: "<span class='adv'>平生</span><span class='adv'>不敢輕</span><span class='verb'>言語</span>，<span class='adv'>一</span><span class='verb'>叫</span><span class='subj'>千門萬戶</span><span class='verb'>開</span>。",
                    svo_trans: "<ruby><span class='adv'>平生</span><rt>一生中</rt></ruby><ruby><span class='adv'>不敢輕</span><rt>從不敢輕易地</rt></ruby><ruby><span class='verb'>言語</span><rt>開口說話</rt></ruby>，<ruby><span class='adv'>一</span><rt>只要一</rt></ruby><ruby><span class='verb'>叫</span><rt>啼叫</rt></ruby><ruby><span class='subj'>千門萬戶</span><rt>千家萬戶的大門</rt></ruby>就<ruby><span class='verb'>開</span><rt>打開了</rt></ruby>。"
                }
            ]
        },
        weixue: {
            title: "為學",
            sentences: [
                {
                    original: "天下事有難易乎？",
                    svo: "<span class='subj'>天下事</span><span class='verb'>有</span><span class='obj'>難易</span>乎？",
                    svo_trans: "<ruby><span class='subj'>天下事</span><rt>天下的事情</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>難易</span><rt>困難和容易的區別</rt></ruby>嗎？"
                },
                {
                    original: "為之，則難者亦易矣；不為，則易者亦難矣。",
                    svo: "<span class='verb'>為</span><span class='obj'>之</span>，<span class='adv'>則</span><span class='subj'>難者</span><span class='adv'>亦</span><span class='verb'>易</span>矣；<span class='adv'>不</span><span class='verb'>為</span>，<span class='adv'>則</span><span class='subj'>易者</span><span class='adv'>亦</span><span class='verb'>難</span>矣。",
                    svo_trans: "只要去<ruby><span class='verb'>為</span><rt>做</rt></ruby><ruby><span class='obj'>之</span><rt>它</rt></ruby>，<ruby><span class='adv'>則</span><rt>那麼</rt></ruby><ruby><span class='subj'>難者</span><rt>困難的事</rt></ruby><ruby><span class='adv'>亦</span><rt>也</rt></ruby><ruby><span class='verb'>易</span><rt>容易了</rt></ruby>；<ruby><span class='adv'>不</span><rt>不</rt></ruby>去<ruby><span class='verb'>為</span><rt>做</rt></ruby>，<ruby><span class='adv'>則</span><rt>那麼</rt></ruby><ruby><span class='subj'>易者</span><rt>容易的事</rt></ruby><ruby><span class='adv'>亦</span><rt>也</rt></ruby><ruby><span class='verb'>難</span><rt>變難了</rt></ruby>。"
                }
            ]
        },
        shuidiaogetou: {
            title: "水調歌頭並序",
            sentences: [
                {
                    original: "明月幾時有？把酒問青天。",
                    svo: "<span class='subj'>明月</span><span class='adv'>幾時</span><span class='verb'>有</span>？<span class='verb'>把</span><span class='obj'>酒</span><span class='verb'>問</span><span class='obj'>青天</span>。",
                    svo_trans: "<ruby><span class='subj'>明月</span><rt>明月</rt></ruby><ruby><span class='adv'>幾時</span><rt>什麼時候</rt></ruby><ruby><span class='verb'>有</span><rt>開始有的呢</rt></ruby>？我<ruby><span class='verb'>把</span><rt>端起</rt></ruby><ruby><span class='obj'>酒</span><rt>酒杯</rt></ruby><ruby><span class='verb'>問</span><rt>詢問</rt></ruby><ruby><span class='obj'>青天</span><rt>青天</rt></ruby>。"
                },
                {
                    original: "不知天上宮闕，今夕是何年。",
                    svo: "<span class='adv'>不</span><span class='verb'>知</span><span class='attr'>天上</span><span class='obj'>宮闕</span>，<span class='subj'>今夕</span><span class='verb'>是</span><span class='obj'>何年</span>。",
                    svo_trans: "<ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='attr'>天上</span><rt>天上的</rt></ruby><ruby><span class='obj'>宮闕</span><rt>宮殿</rt></ruby>，<ruby><span class='subj'>今夕</span><rt>今天晚上</rt></ruby><ruby><span class='verb'>是</span><rt>是</rt></ruby><ruby><span class='obj'>何年</span><rt>哪一年</rt></ruby>。"
                },
                {
                    original: "人有悲歡離合，月有陰晴圓缺，此事古難全。",
                    svo: "<span class='subj'>人</span><span class='verb'>有</span><span class='obj'>悲歡離合</span>，<span class='subj'>月</span><span class='verb'>有</span><span class='obj'>陰晴圓缺</span>，<span class='subj'>此事</span><span class='adv'>古</span><span class='adv'>難</span><span class='verb'>全</span>。",
                    svo_trans: "<ruby><span class='subj'>人</span><rt>人</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>悲歡離合</span><rt>悲歡離合</rt></ruby>，<ruby><span class='subj'>月</span><rt>月亮</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='obj'>陰晴圓缺</span><rt>陰晴圓缺</rt></ruby>，<ruby><span class='subj'>此事</span><rt>這種事</rt></ruby><ruby><span class='adv'>古</span><rt>自古以來</rt></ruby><ruby><span class='adv'>難</span><rt>難以</rt></ruby><ruby><span class='verb'>全</span><rt>十全十美</rt></ruby>。"
                },
                {
                    original: "但願人長久，千里共嬋娟。",
                    svo: "<span class='adv'>但願</span><span class='subj'>人</span><span class='verb'>長久</span>，<span class='attr'>千里</span><span class='adv'>共</span><span class='verb'>嬋娟</span>。",
                    svo_trans: "<ruby><span class='adv'>但願</span><rt>只希望</rt></ruby><ruby><span class='subj'>人</span><rt>彼此</rt></ruby><ruby><span class='verb'>長久</span><rt>平安長壽</rt></ruby>，相隔<ruby><span class='attr'>千里</span><rt>千里</rt></ruby>也能<ruby><span class='adv'>共</span><rt>共享</rt></ruby><ruby><span class='verb'>嬋娟</span><rt>美好的月光</rt></ruby>。"
                }
            ]
        },
        manjianghong: {
            title: "滿江紅(怒髮衝冠)",
            sentences: [
                {
                    original: "怒髮衝冠，憑欄處、瀟瀟雨歇。",
                    svo: "<span class='attr'>怒</span><span class='subj'>髮</span><span class='verb'>衝</span><span class='obj'>冠</span>，<span class='verb'>憑</span><span class='obj'>欄</span><span class='adv'>處</span>、<span class='adv'>瀟瀟</span><span class='subj'>雨</span><span class='verb'>歇</span>。",
                    svo_trans: "<ruby><span class='attr'>怒</span><span class='subj'>髮</span><rt>憤怒的頭髮</rt></ruby><ruby><span class='verb'>衝</span><rt>向上頂起</rt></ruby><ruby><span class='obj'>冠</span><rt>帽子</rt></ruby>，<ruby><span class='verb'>憑</span><rt>靠著</rt></ruby><ruby><span class='obj'>欄</span><rt>欄杆</rt></ruby><ruby><span class='adv'>處</span><rt>的地方</rt></ruby>、<ruby><span class='adv'>瀟瀟</span><rt>急驟的</rt></ruby><ruby><span class='subj'>雨</span><rt>陣雨</rt></ruby><ruby><span class='verb'>歇</span><rt>剛停</rt></ruby>。"
                },
                {
                    original: "三十功名塵與土，八千里路雲和月。",
                    svo: "<span class='attr'>三十</span><span class='subj'>功名</span><span class='verb'>塵與土</span>，<span class='attr'>八千里</span><span class='subj'>路</span><span class='verb'>雲和月</span>。",
                    svo_trans: "<ruby><span class='attr'>三十</span><rt>三十年來的</rt></ruby><ruby><span class='subj'>功名</span><rt>功名</rt></ruby>如同<ruby><span class='verb'>塵與土</span><rt>塵土般微不足道</rt></ruby>，<ruby><span class='attr'>八千里</span><rt>八千里</rt></ruby><ruby><span class='subj'>路</span><rt>征戰的路途</rt></ruby>伴隨著<ruby><span class='verb'>雲和月</span><rt>披星戴月</rt></ruby>。"
                },
                {
                    original: "莫等閒，白了少年頭，空悲切！",
                    svo: "<span class='adv'>莫</span><span class='verb'>等閒</span>，<span class='verb'>白</span>了<span class='attr'>少年</span><span class='obj'>頭</span>，<span class='adv'>空</span><span class='verb'>悲切</span>！",
                    svo_trans: "<ruby><span class='adv'>莫</span><rt>不要</rt></ruby><ruby><span class='verb'>等閒</span><rt>隨便虛度光陰</rt></ruby>，<ruby><span class='verb'>白</span><rt>使變白</rt></ruby>了<ruby><span class='attr'>少年</span><rt>年輕人的</rt></ruby><ruby><span class='obj'>頭</span><rt>頭髮</rt></ruby>，<ruby><span class='adv'>空</span><rt>白白地</rt></ruby><ruby><span class='verb'>悲切</span><rt>悲傷哀嘆</rt></ruby>！"
                }
            ]
        },
        liuguolun: {
            title: "六國論",
            sentences: [
                {
                    original: "六國破滅，非兵不利，戰不善，弊在賂秦。",
                    svo: "<span class='subj'>六國</span><span class='verb'>破滅</span>，<span class='adv'>非</span><span class='subj'>兵</span><span class='adv'>不</span><span class='verb'>利</span>，<span class='subj'>戰</span><span class='adv'>不</span><span class='verb'>善</span>，<span class='subj'>弊</span><span class='verb'>在</span><span class='obj'>賂秦</span>。",
                    svo_trans: "<ruby><span class='subj'>六國</span><rt>六國</rt></ruby><ruby><span class='verb'>破滅</span><rt>滅亡</rt></ruby>，<ruby><span class='adv'>非</span><rt>不是</rt></ruby>因為<ruby><span class='subj'>兵</span><rt>兵器</rt></ruby><ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>利</span><rt>鋒利</rt></ruby>，<ruby><span class='subj'>戰</span><rt>仗</rt></ruby><ruby><span class='adv'>不</span><rt>打得不</rt></ruby><ruby><span class='verb'>善</span><rt>好</rt></ruby>，<ruby><span class='subj'>弊</span><rt>弊病</rt></ruby><ruby><span class='verb'>在</span><rt>在於</rt></ruby><ruby><span class='obj'>賂秦</span><rt>割地賄賂秦國</rt></ruby>。"
                },
                {
                    original: "古人云：「以地事秦，猶抱薪救火，薪不盡，火不滅。」",
                    svo: "<span class='subj'>古人</span><span class='verb'>云</span>：「<span class='adv'>以地</span><span class='verb'>事</span><span class='obj'>秦</span>，<span class='verb'>猶</span><span class='verb'>抱</span><span class='obj'>薪</span><span class='verb'>救</span><span class='obj'>火</span>，<span class='subj'>薪</span><span class='adv'>不</span><span class='verb'>盡</span>，<span class='subj'>火</span><span class='adv'>不</span><span class='verb'>滅</span>。」",
                    svo_trans: "<ruby><span class='subj'>古人</span><rt>古人</rt></ruby><ruby><span class='verb'>云</span><rt>說</rt></ruby>：「<ruby><span class='adv'>以地</span><rt>拿土地</rt></ruby><ruby><span class='verb'>事</span><rt>侍奉</rt></ruby><ruby><span class='obj'>秦</span><rt>秦國</rt></ruby>，<ruby><span class='verb'>猶</span><rt>就像</rt></ruby><ruby><span class='verb'>抱</span><rt>抱著</rt></ruby><ruby><span class='obj'>薪</span><rt>柴草</rt></ruby><ruby><span class='verb'>救</span><rt>去救</rt></ruby><ruby><span class='obj'>火</span><rt>火</rt></ruby>，<ruby><span class='subj'>薪</span><rt>柴草</rt></ruby><ruby><span class='adv'>不</span><rt>沒</rt></ruby><ruby><span class='verb'>盡</span><rt>燒完</rt></ruby>，<ruby><span class='subj'>火</span><rt>火勢</rt></ruby><ruby><span class='adv'>不</span><rt>就不會</rt></ruby><ruby><span class='verb'>滅</span><rt>熄滅</rt></ruby>。」"
                }
            ]
        },
        xiguanshuo: {
            title: "習慣說",
            sentences: [
                {
                    original: "蓉少時，讀書養晦堂之西偏一室。",
                    svo: "<span class='subj'>蓉</span><span class='adv'>少時</span>，<span class='verb'>讀書</span><span class='attr'>養晦堂之西偏</span><span class='obj'>一室</span>。",
                    svo_trans: "<ruby><span class='subj'>蓉</span><rt>劉蓉我</rt></ruby><ruby><span class='adv'>少時</span><rt>小時候</rt></ruby>，<ruby><span class='verb'>讀書</span><rt>在...讀書</rt></ruby><ruby><span class='attr'>養晦堂之西偏</span><rt>養晦堂西邊的</rt></ruby><ruby><span class='obj'>一室</span><rt>一間屋子裡</rt></ruby>。"
                },
                {
                    original: "室有窪徑尺，浸淫日廣。",
                    svo: "<span class='subj'>室</span><span class='verb'>有</span><span class='obj'>窪徑尺</span>，<span class='adv'>浸淫</span><span class='subj'>日</span><span class='verb'>廣</span>。",
                    svo_trans: "<ruby><span class='subj'>室</span><rt>屋內地</rt></ruby><ruby><span class='verb'>有</span><rt>有個</rt></ruby><ruby><span class='obj'>窪徑尺</span><rt>直徑約一尺的低窪</rt></ruby>，<ruby><span class='adv'>浸淫</span><rt>漸漸地</rt></ruby><ruby><span class='subj'>日</span><rt>一天比一天</rt></ruby><ruby><span class='verb'>廣</span><rt>擴大</rt></ruby>。"
                },
                {
                    original: "故君子之學，貴乎慎始。",
                    svo: "<span class='adv'>故</span><span class='attr'>君子之</span><span class='subj'>學</span>，<span class='verb'>貴</span><span class='adv'>乎</span><span class='obj'>慎始</span>。",
                    svo_trans: "<ruby><span class='adv'>故</span><rt>所以</rt></ruby><ruby><span class='attr'>君子之</span><rt>君子的</rt></ruby><ruby><span class='subj'>學</span><rt>求學</rt></ruby>，<ruby><span class='verb'>貴</span><rt>最看重的</rt></ruby><ruby><span class='adv'>乎</span><rt>在於</rt></ruby><ruby><span class='obj'>慎始</span><rt>謹慎開始</rt></ruby>。"
                }
            ]
        },
        maobuque: {
            title: "貓捕雀",
            sentences: [
                {
                    original: "窗外有棗林，雛雀初飛，動止調嗈。",
                    svo: "<span class='adv'>窗外</span><span class='verb'>有</span><span class='obj'>棗林</span>，<span class='subj'>雛雀</span><span class='adv'>初</span><span class='verb'>飛</span>，<span class='subj'>動止</span><span class='verb'>調嗈</span>。",
                    svo_trans: "<ruby><span class='adv'>窗外</span><rt>窗外</rt></ruby><ruby><span class='verb'>有</span><rt>有一片</rt></ruby><ruby><span class='obj'>棗林</span><rt>棗樹林</rt></ruby>，<ruby><span class='subj'>雛雀</span><rt>小麻雀</rt></ruby><ruby><span class='adv'>初</span><rt>剛開始</rt></ruby><ruby><span class='verb'>飛</span><rt>學飛</rt></ruby>，<ruby><span class='subj'>動止</span><rt>一舉一動</rt></ruby><ruby><span class='verb'>調嗈</span><rt>發出和諧的鳴叫</rt></ruby>。"
                },
                {
                    original: "一貓緣突而上，欲肆其攫。",
                    svo: "<span class='attr'>一</span><span class='subj'>貓</span><span class='verb'>緣</span><span class='obj'>突</span>而<span class='verb'>上</span>，<span class='verb'>欲肆</span><span class='attr'>其</span><span class='obj'>攫</span>。",
                    svo_trans: "<ruby><span class='attr'>一</span><span class='subj'>貓</span><rt>一隻貓</rt></ruby><ruby><span class='verb'>緣</span><rt>沿著</rt></ruby><ruby><span class='obj'>突</span><rt>煙囪</rt></ruby>而<ruby><span class='verb'>上</span><rt>爬上去</rt></ruby>，<ruby><span class='verb'>欲肆</span><rt>想要大肆</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>攫</span><rt>撲捉小雀</rt></ruby>。"
                }
            ]
        },
        chenqingbiao: {
            title: "陳情表",
            sentences: [
                {
                    original: "臣密言：臣以險釁，夙遭閔凶。",
                    svo: "<span class='subj'>臣密</span><span class='verb'>言</span>：<span class='subj'>臣</span><span class='adv'>以險釁</span>，<span class='adv'>夙</span><span class='verb'>遭</span><span class='obj'>閔凶</span>。",
                    svo_trans: "<ruby><span class='subj'>臣密</span><rt>臣李密</rt></ruby><ruby><span class='verb'>言</span><rt>上言</rt></ruby>：<ruby><span class='subj'>臣</span><rt>我</rt></ruby><ruby><span class='adv'>以險釁</span><rt>因為命運坎坷</rt></ruby>，<ruby><span class='adv'>夙</span><rt>早年就</rt></ruby><ruby><span class='verb'>遭</span><rt>遭遇</rt></ruby><ruby><span class='obj'>閔凶</span><rt>不幸</rt></ruby>。"
                },
                {
                    original: "生孩六月，慈父見背；行年四歲，舅奪母志。",
                    svo: "<span class='verb'>生孩</span><span class='attr'>六</span><span class='obj'>月</span>，<span class='subj'>慈父</span><span class='verb'>見背</span>；<span class='subj'>行年</span><span class='verb'>四歲</span>，<span class='subj'>舅</span><span class='verb'>奪</span><span class='attr'>母</span><span class='obj'>志</span>。",
                    svo_trans: "<ruby><span class='verb'>生孩</span><rt>生下來</rt></ruby>才<ruby><span class='attr'>六</span><span class='obj'>月</span><rt>六個月</rt></ruby>，<ruby><span class='subj'>慈父</span><rt>慈父</rt></ruby>就<ruby><span class='verb'>見背</span><rt>棄我而去了</rt></ruby>；<ruby><span class='subj'>行年</span><rt>年紀</rt></ruby><ruby><span class='verb'>四歲</span><rt>到了四歲</rt></ruby>，<ruby><span class='subj'>舅</span><rt>舅舅</rt></ruby><ruby><span class='verb'>奪</span><rt>強行改變了</rt></ruby><ruby><span class='attr'>母</span><span class='obj'>志</span><rt>母親守節的志向</rt></ruby>。"
                },
                {
                    original: "臣無祖母，無以至今日；祖母無臣，無以終餘年。",
                    svo: "<span class='subj'>臣</span><span class='verb'>無</span><span class='obj'>祖母</span>，<span class='adv'>無以</span><span class='verb'>至</span><span class='obj'>今日</span>；<span class='subj'>祖母</span><span class='verb'>無</span><span class='obj'>臣</span>，<span class='adv'>無以</span><span class='verb'>終</span><span class='obj'>餘年</span>。",
                    svo_trans: "<ruby><span class='subj'>臣</span><rt>我</rt></ruby><ruby><span class='verb'>無</span><rt>如果沒有</rt></ruby><ruby><span class='obj'>祖母</span><rt>祖母</rt></ruby>，<ruby><span class='adv'>無以</span><rt>就無法</rt></ruby><ruby><span class='verb'>至</span><rt>活到</rt></ruby><ruby><span class='obj'>今日</span><rt>今天</rt></ruby>；<ruby><span class='subj'>祖母</span><rt>祖母</rt></ruby><ruby><span class='verb'>無</span><rt>如果沒有</rt></ruby><ruby><span class='obj'>臣</span><rt>我</rt></ruby>，<ruby><span class='adv'>無以</span><rt>也無法</rt></ruby><ruby><span class='verb'>終</span><rt>安度</rt></ruby><ruby><span class='obj'>餘年</span><rt>晚年</rt></ruby>。"
                }
            ]
        },
        shide: {
            title: "始得西山宴遊記",
            sentences: [
                {
                    original: "自余為僇人，居是州，恆惴慄。",
                    svo: "<span class='adv'>自</span><span class='subj'>余</span><span class='verb'>為</span><span class='obj'>僇人</span>，<span class='verb'>居</span><span class='obj'>是州</span>，<span class='adv'>恆</span><span class='verb'>惴慄</span>。",
                    svo_trans: "<ruby><span class='adv'>自</span><rt>自從</rt></ruby><ruby><span class='subj'>余</span><rt>我</rt></ruby><ruby><span class='verb'>為</span><rt>成為</rt></ruby><ruby><span class='obj'>僇人</span><rt>被貶謫的罪人</rt></ruby>，<ruby><span class='verb'>居</span><rt>居住在</rt></ruby><ruby><span class='obj'>是州</span><rt>這個州</rt></ruby>，<ruby><span class='adv'>恆</span><rt>經常</rt></ruby><ruby><span class='verb'>惴慄</span><rt>憂懼不安</rt></ruby>。"
                },
                {
                    original: "其隙也，則施施而行，漫漫而遊。",
                    svo: "<span class='attr'>其</span><span class='subj'>隙</span>也，<span class='adv'>則</span><span class='adv'>施施</span>而<span class='verb'>行</span>，<span class='adv'>漫漫</span>而<span class='verb'>遊</span>。",
                    svo_trans: "<ruby><span class='attr'>其</span><span class='subj'>隙</span><rt>公餘閒暇之時</rt></ruby>，<ruby><span class='adv'>則</span><rt>就</rt></ruby><ruby><span class='adv'>施施</span><rt>緩步地</rt></ruby>而<ruby><span class='verb'>行</span><rt>行走</rt></ruby>，<ruby><span class='adv'>漫漫</span><rt>無拘無束地</rt></ruby>而<ruby><span class='verb'>遊</span><rt>遊覽</rt></ruby>。"
                },
                {
                    original: "然後知是山之特立，不與培塿為類。",
                    svo: "<span class='adv'>然後</span><span class='verb'>知</span><span class='subj'>是山之</span><span class='verb'>特立</span>，<span class='adv'>不與</span><span class='obj'>培塿</span><span class='verb'>為類</span>。",
                    svo_trans: "<ruby><span class='adv'>然後</span><rt>這之後</rt></ruby><ruby><span class='verb'>知</span><rt>才知道</rt></ruby><ruby><span class='subj'>是山之</span><rt>這座山的</rt></ruby><ruby><span class='verb'>特立</span><rt>奇特挺立</rt></ruby>，<ruby><span class='adv'>不與</span><rt>不和</rt></ruby><ruby><span class='obj'>培塿</span><rt>小土丘</rt></ruby><ruby><span class='verb'>為類</span><rt>為同一類</rt></ruby>。"
                }
            ]
        },
        kezhi: {
            title: "客至",
            sentences: [
                {
                    original: "舍南舍北皆春水，但見群鷗日日來。",
                    svo: "<span class='subj'>舍南舍北</span><span class='adv'>皆</span><span class='verb'>春水</span>，<span class='adv'>但</span><span class='verb'>見</span><span class='subj'>群鷗</span><span class='adv'>日日</span><span class='verb'>來</span>。",
                    svo_trans: "<ruby><span class='subj'>舍南舍北</span><rt>草堂的南邊與北邊</rt></ruby><ruby><span class='adv'>皆</span><rt>全是</rt></ruby><ruby><span class='verb'>春水</span><rt>春天的江水</rt></ruby>，<ruby><span class='adv'>但</span><rt>只</rt></ruby><ruby><span class='verb'>見</span><rt>看見</rt></ruby><ruby><span class='subj'>群鷗</span><rt>成群的鷗鳥</rt></ruby><ruby><span class='adv'>日日</span><rt>每天</rt></ruby><ruby><span class='verb'>來</span><rt>飛來</rt></ruby>。"
                },
                {
                    original: "花徑不曾緣客掃，蓬門今始為君開。",
                    svo: "<span class='subj'>花徑</span><span class='adv'>不曾</span><span class='adv'>緣客</span><span class='verb'>掃</span>，<span class='subj'>蓬門</span><span class='adv'>今</span><span class='adv'>始</span><span class='adv'>為君</span><span class='verb'>開</span>。",
                    svo_trans: "<ruby><span class='subj'>花徑</span><rt>長滿落花的小路</rt></ruby><ruby><span class='adv'>不曾</span><rt>還不曾</rt></ruby><ruby><span class='adv'>緣客</span><rt>因為有客人來而</rt></ruby><ruby><span class='verb'>掃</span><rt>打掃</rt></ruby>，<ruby><span class='subj'>蓬門</span><rt>簡陋的柴門</rt></ruby><ruby><span class='adv'>今</span><rt>今天</rt></ruby><ruby><span class='adv'>始</span><rt>才</rt></ruby><ruby><span class='adv'>為君</span><rt>為了你</rt></ruby><ruby><span class='verb'>開</span><rt>打開</rt></ruby>。"
                },
                {
                    original: "肯與鄰翁相對飲，隔籬呼取盡餘杯。",
                    svo: "<span class='verb'>肯與</span><span class='obj'>鄰翁</span><span class='adv'>相對</span><span class='verb'>飲</span>，<span class='adv'>隔籬</span><span class='verb'>呼取</span><span class='verb'>盡</span><span class='attr'>餘</span><span class='obj'>杯</span>。",
                    svo_trans: "<ruby><span class='verb'>肯與</span><rt>你是否願意和</rt></ruby><ruby><span class='obj'>鄰翁</span><rt>鄰居老翁</rt></ruby><ruby><span class='adv'>相對</span><rt>相對著</rt></ruby><ruby><span class='verb'>飲</span><rt>共飲呢</rt></ruby>？（如果願意）我就<ruby><span class='adv'>隔籬</span><rt>隔著籬笆</rt></ruby><ruby><span class='verb'>呼取</span><rt>把他喊來</rt></ruby>一起<ruby><span class='verb'>盡</span><rt>喝盡</rt></ruby><ruby><span class='attr'>餘</span><span class='obj'>杯</span><rt>剩下的酒</rt></ruby>。"
                }
            ]
        },
        denglou: {
            title: "登樓",
            sentences: [
                {
                    original: "花近高樓傷客心，萬方多難此登臨。",
                    svo: "<span class='subj'>花</span><span class='verb'>近</span><span class='obj'>高樓</span><span class='verb'>傷</span><span class='attr'>客</span><span class='obj'>心</span>，<span class='adv'>萬方多難</span><span class='adv'>此</span><span class='verb'>登臨</span>。",
                    svo_trans: "<ruby><span class='subj'>花</span><rt>繁花</rt></ruby><ruby><span class='verb'>近</span><rt>靠近</rt></ruby><ruby><span class='obj'>高樓</span><rt>高樓（卻讓）</rt></ruby><ruby><span class='verb'>傷</span><rt>感傷</rt></ruby><ruby><span class='attr'>客</span><span class='obj'>心</span><rt>我這作客他鄉的心</rt></ruby>，<ruby><span class='adv'>萬方多難</span><rt>國家到處都是災難</rt></ruby>我<ruby><span class='adv'>此</span><rt>在此時</rt></ruby><ruby><span class='verb'>登臨</span><rt>登上高樓</rt></ruby>。"
                },
                {
                    original: "錦江春色來天地，玉壘浮雲變古今。",
                    svo: "<span class='attr'>錦江</span><span class='subj'>春色</span><span class='verb'>來</span><span class='obj'>天地</span>，<span class='attr'>玉壘</span><span class='subj'>浮雲</span><span class='verb'>變</span><span class='obj'>古今</span>。",
                    svo_trans: "<ruby><span class='attr'>錦江</span><rt>錦江的</rt></ruby><ruby><span class='subj'>春色</span><rt>春色</rt></ruby><ruby><span class='verb'>來</span><rt>鋪天蓋地而來</rt></ruby><ruby><span class='obj'>天地</span><rt>充滿天地之間</rt></ruby>，<ruby><span class='attr'>玉壘</span><rt>玉壘山的</rt></ruby><ruby><span class='subj'>浮雲</span><rt>浮雲</rt></ruby><ruby><span class='verb'>變</span><rt>變幻莫測如同</rt></ruby><ruby><span class='obj'>古今</span><rt>古今世事</rt></ruby>。"
                }
            ]
        },
        yanshi: {
            title: "燕詩",
            sentences: [
                {
                    original: "樑上有雙燕，翩翩雄與雌。",
                    svo: "<span class='adv'>樑上</span><span class='verb'>有</span><span class='attr'>雙</span><span class='subj'>燕</span>，<span class='adv'>翩翩</span><span class='subj'>雄與雌</span>。",
                    svo_trans: "<ruby><span class='adv'>樑上</span><rt>屋樑上</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>雙</span><span class='subj'>燕</span><rt>兩隻燕子</rt></ruby>，<ruby><span class='adv'>翩翩</span><rt>翩翩飛舞著</rt></ruby>一<ruby><span class='subj'>雄與雌</span><rt>公和一母</rt></ruby>。"
                },
                {
                    original: "四兒日夜長，索食聲孜孜。",
                    svo: "<span class='subj'>四兒</span><span class='adv'>日夜</span><span class='verb'>長</span>，<span class='verb'>索</span><span class='obj'>食</span><span class='subj'>聲</span><span class='adv'>孜孜</span>。",
                    svo_trans: "<ruby><span class='subj'>四兒</span><rt>四隻小燕子</rt></ruby><ruby><span class='adv'>日夜</span><rt>日夜</rt></ruby><ruby><span class='verb'>長</span><rt>長大</rt></ruby>，<ruby><span class='verb'>索</span><rt>索求</rt></ruby><ruby><span class='obj'>食</span><rt>食物的</rt></ruby><ruby><span class='subj'>聲</span><rt>叫聲</rt></ruby><ruby><span class='adv'>孜孜</span><rt>不停不歇</rt></ruby>。"
                },
                {
                    original: "思爾為雛日，高飛背母時。",
                    svo: "<span class='verb'>思</span><span class='subj'>爾</span><span class='verb'>為</span><span class='obj'>雛</span><span class='adv'>日</span>，<span class='adv'>高飛</span><span class='verb'>背</span><span class='obj'>母</span><span class='adv'>時</span>。",
                    svo_trans: "請<ruby><span class='verb'>思</span><rt>回想</rt></ruby><ruby><span class='subj'>爾</span><rt>你們</rt></ruby><ruby><span class='verb'>為</span><rt>作為</rt></ruby><ruby><span class='obj'>雛</span><rt>幼鳥的</rt></ruby><ruby><span class='adv'>日</span><rt>日子</rt></ruby>，以及<ruby><span class='adv'>高飛</span><rt>展翅高飛</rt></ruby><ruby><span class='verb'>背</span><rt>背棄</rt></ruby><ruby><span class='obj'>母</span><rt>母親的</rt></ruby><ruby><span class='adv'>時</span><rt>時候</rt></ruby>。"
                },
                {
                    original: "當時父母念，今日爾應知。",
                    svo: "<span class='adv'>當時</span><span class='subj'>父母</span><span class='verb'>念</span>，<span class='adv'>今日</span><span class='subj'>爾</span><span class='adv'>應</span><span class='verb'>知</span>。",
                    svo_trans: "<ruby><span class='adv'>當時</span><rt>那時候</rt></ruby><ruby><span class='subj'>父母</span><rt>父母的</rt></ruby><ruby><span class='verb'>念</span><rt>掛念</rt></ruby>，<ruby><span class='adv'>今日</span><rt>到了今天</rt></ruby><ruby><span class='subj'>爾</span><rt>你們</rt></ruby><ruby><span class='adv'>應</span><rt>應該</rt></ruby><ruby><span class='verb'>知</span><rt>懂得了</rt></ruby>。"
                }
            ]
        },
        wuliuxiansheng: {
            title: "五柳先生傳",
            sentences: [
                {
                    original: "先生不知何許人也，亦不詳其姓字。",
                    svo: "<span class='subj'>先生</span><span class='adv'>不知</span><span class='attr'>何許</span><span class='obj'>人</span>也，<span class='adv'>亦不</span><span class='verb'>詳</span><span class='attr'>其</span><span class='obj'>姓字</span>。",
                    svo_trans: "<ruby><span class='subj'>先生</span><rt>這位先生</rt></ruby><ruby><span class='adv'>不知</span><rt>不知道</rt></ruby>是<ruby><span class='attr'>何許</span><rt>什麼地方</rt></ruby><ruby><span class='obj'>人</span><rt>的人</rt></ruby>也，<ruby><span class='adv'>亦不</span><rt>也不</rt></ruby><ruby><span class='verb'>詳</span><rt>清楚</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>姓字</span><rt>他的姓名和表字</rt></ruby>。"
                },
                {
                    original: "宅邊有五柳樹，因以為號焉。",
                    svo: "<span class='adv'>宅邊</span><span class='verb'>有</span><span class='attr'>五柳</span><span class='obj'>樹</span>，<span class='adv'>因以</span><span class='verb'>為</span><span class='obj'>號</span>焉。",
                    svo_trans: "<ruby><span class='adv'>宅邊</span><rt>住宅旁邊</rt></ruby><ruby><span class='verb'>有</span><rt>有</rt></ruby><ruby><span class='attr'>五柳</span><span class='obj'>樹</span><rt>五棵柳樹</rt></ruby>，就<ruby><span class='adv'>因以</span><rt>以此</rt></ruby><ruby><span class='verb'>為</span><rt>作為</rt></ruby><ruby><span class='obj'>號</span><rt>別號</rt></ruby>焉。"
                },
                {
                    original: "閒靜少言，不慕榮利。",
                    svo: "<span class='verb'>閒靜</span><span class='verb'>少言</span>，<span class='adv'>不</span><span class='verb'>慕</span><span class='obj'>榮利</span>。",
                    svo_trans: "他性格<ruby><span class='verb'>閒靜</span><rt>安閒沉靜</rt></ruby>、<ruby><span class='verb'>少言</span><rt>很少說話</rt></ruby>，<ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>慕</span><rt>羡慕</rt></ruby><ruby><span class='obj'>榮利</span><rt>榮華名利</rt></ruby>。"
                },
                {
                    original: "好讀書，不求甚解；每有會意，便欣然忘食。",
                    svo: "<span class='verb'>好</span><span class='verb'>讀書</span>，<span class='adv'>不</span><span class='verb'>求</span><span class='obj'>甚解</span>；<span class='adv'>每</span><span class='verb'>有</span><span class='obj'>會意</span>，<span class='adv'>便</span><span class='adv'>欣然</span><span class='verb'>忘</span><span class='obj'>食</span>。",
                    svo_trans: "他<ruby><span class='verb'>好</span><rt>喜歡</rt></ruby><ruby><span class='verb'>讀書</span><rt>讀書</rt></ruby>，卻<ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>求</span><rt>尋求</rt></ruby><ruby><span class='obj'>甚解</span><rt>過度深奧的理解</rt></ruby>；<ruby><span class='adv'>每</span><rt>每當</rt></ruby>對書中內容<span class='verb'>有</span><ruby><span class='obj'>會意</span><rt>領會心意</rt></ruby>之處，<ruby><span class='adv'>便</span><rt>就</rt></ruby><ruby><span class='adv'>欣然</span><rt>高興地</rt></ruby><ruby><span class='verb'>忘</span><rt>忘記</rt></ruby><ruby><span class='obj'>食</span><rt>吃飯</rt></ruby>。"
                },
                {
                    original: "性嗜酒，家貧不能常得。",
                    svo: "<span class='subj'>性</span><span class='verb'>嗜</span><span class='obj'>酒</span>，<span class='subj'>家</span><span class='verb'>貧</span><span class='adv'>不能</span><span class='adv'>常</span><span class='verb'>得</span>。",
                    svo_trans: "他的<ruby><span class='subj'>性</span><rt>天性</rt></ruby><ruby><span class='verb'>嗜</span><rt>愛好</rt></ruby><ruby><span class='obj'>酒</span><rt>喝酒</rt></ruby>，可是<ruby><span class='subj'>家</span><rt>家裡</rt></ruby><ruby><span class='verb'>貧</span><rt>貧窮</rt></ruby>而<ruby><span class='adv'>不能</span><rt>不能</rt></ruby><ruby><span class='adv'>常</span><rt>經常</rt></ruby><ruby><span class='verb'>得</span><rt>得到酒喝</rt></ruby>。"
                },
                {
                    original: "親舊知其如此，或置酒而招之。",
                    svo: "<span class='subj'>親舊</span><span class='verb'>知</span><span class='obj'>其如此</span>，<span class='subj'>或</span><span class='verb'>置</span><span class='obj'>酒</span>而<span class='verb'>招</span><span class='obj'>之</span>。",
                    svo_trans: "<ruby><span class='subj'>親舊</span><rt>親戚朋友</rt></ruby><ruby><span class='verb'>知</span><rt>知道</rt></ruby><ruby><span class='obj'>其如此</span><rt>他這個樣子</rt></ruby>，<ruby><span class='subj'>或</span><rt>有的人</rt></ruby>就會<ruby><span class='verb'>置</span><rt>準備</rt></ruby><ruby><span class='obj'>酒</span><rt>酒席</rt></ruby>而<ruby><span class='verb'>招</span><rt>前來邀請</rt></ruby><ruby><span class='obj'>之</span><rt>他</rt></ruby>。"
                },
                {
                    original: "造飲輒盡，期在必醉。",
                    svo: "<span class='verb'>造飲</span><span class='adv'>輒</span><span class='verb'>盡</span>，<span class='subj'>期</span><span class='adv'>在</span><span class='adv'>必</span><span class='verb'>醉</span>。",
                    svo_trans: "他只要<ruby><span class='verb'>造飲</span><rt>去到喝酒的地方</rt></ruby><ruby><span class='adv'>輒</span><rt>就</rt></ruby>會把酒喝<ruby><span class='verb'>盡</span><rt>乾</rt></ruby>，心裡的<ruby><span class='subj'>期</span><rt>期盼</rt></ruby>只<ruby><span class='adv'>在</span><rt>在於</rt></ruby><ruby><span class='adv'>必</span><rt>一定</rt></ruby>要喝<ruby><span class='verb'>醉</span><rt>醉</rt></ruby>。"
                },
                {
                    original: "既醉而退，曾不吝情去留。",
                    svo: "<span class='adv'>既</span><span class='verb'>醉</span>而<span class='verb'>退</span>，<span class='adv'>曾不</span><span class='verb'>吝情</span><span class='obj'>去留</span>。",
                    svo_trans: "<ruby><span class='adv'>既</span><rt>已經</rt></ruby>喝<ruby><span class='verb'>醉</span><rt>醉</rt></ruby>了之後就<ruby><span class='verb'>退</span><rt>告辭離去</rt></ruby>，<ruby><span class='adv'>曾不</span><rt>從來不</rt></ruby>會<ruby><span class='verb'>吝情</span><rt>捨不得</rt></ruby>在主家或考慮<ruby><span class='obj'>去留</span><rt>離去還是留下</rt></ruby>。"
                },
                {
                    original: "環堵蕭然，不蔽風日。",
                    svo: "<span class='subj'>環堵</span><span class='verb'>蕭然</span>，<span class='adv'>不</span><span class='verb'>蔽</span><span class='obj'>風日</span>。",
                    svo_trans: "他住的房屋簡陋得<ruby><span class='subj'>環堵</span><rt>四壁</rt></ruby><ruby><span class='verb'>蕭然</span><rt>空空如也</rt></ruby>，<ruby><span class='adv'>不</span><rt>不能夠</rt></ruby><ruby><span class='verb'>蔽</span><rt>遮擋</rt></ruby><ruby><span class='obj'>風日</span><rt>寒風與烈日</rt></ruby>。"
                },
                {
                    original: "短褐穿結，簞瓢屢空，晏如也。",
                    svo: "<span class='subj'>短褐</span><span class='verb'>穿結</span>，<span class='subj'>簞瓢</span><span class='adv'>屢</span><span class='verb'>空</span>，<span class='verb'>晏如</span>也。",
                    svo_trans: "他穿著的<ruby><span class='subj'>短褐</span><rt>粗布短衣</rt></ruby><ruby><span class='verb'>穿結</span><rt>破爛且打著補丁</rt></ruby>，飲食的<ruby><span class='subj'>簞瓢</span><rt>竹簞與瓢子</rt></ruby><ruby><span class='adv'>屢</span><rt>經常</rt></ruby>是<ruby><span class='verb'>空</span><rt>空空的</rt></ruby>，但他依然顯得<ruby><span class='verb'>晏如</span><rt>安然自得</rt></ruby>也。"
                },
                {
                    original: "常著文章自娛，頗示己志。",
                    svo: "<span class='adv'>常</span><span class='verb'>著</span><span class='obj'>文章</span><span class='adv'>自</span><span class='verb'>娛</span>，<span class='adv'>頗</span><span class='verb'>示</span><span class='attr'>己</span><span class='obj'>志</span>。",
                    svo_trans: "他<ruby><span class='adv'>常</span><rt>經常</rt></ruby><ruby><span class='verb'>著</span><rt>寫作</rt></ruby><ruby><span class='obj'>文章</span><rt>文章</rt></ruby>來讓<ruby><span class='adv'>自</span><rt>自己</rt></ruby><ruby><span class='verb'>娛</span><rt>娛樂</rt></ruby>，在字裡行間<ruby><span class='adv'>頗</span><rt>很是</rt></ruby>能夠<ruby><span class='verb'>示</span><rt>展現</rt></ruby>出<ruby><span class='attr'>己</span><span class='obj'>志</span><rt>自己的志向</rt></ruby>。"
                },
                {
                    original: "忘懷得失，以此自終。",
                    svo: "<span class='verb'>忘懷</span><span class='obj'>得失</span>，<span class='adv'>以此</span><span class='adv'>自</span><span class='verb'>終</span>。",
                    svo_trans: "他<ruby><span class='verb'>忘懷</span><rt>不把……放在心上</rt></ruby>世俗的<ruby><span class='obj'>得失</span><rt>得到與失去</rt></ruby>，想<ruby><span class='adv'>以此</span><rt>憑著這種態度</rt></ruby>讓自己度過<ruby><span class='adv'>自</span><span class='verb'>終</span><rt>自己的一生</rt></ruby>。"
                },
                {
                    original: "贊曰：黔婁之妻有言：「不戚戚於貧賤，不汲汲於富貴。」",
                    svo: "<span class='subj'>贊</span><span class='verb'>曰</span>：<span class='attr'>黔婁之</span><span class='subj'>妻</span><span class='verb'>有</span><span class='obj'>言</span>：「<span class='adv'>不</span><span class='verb'>戚戚</span><span class='adv'>於貧賤</span>，<span class='adv'>不</span><span class='verb'>汲汲</span><span class='adv'>於富貴</span>。」",
                    svo_trans: "<ruby><span class='subj'>贊</span><rt>歷史評論</rt></ruby><ruby><span class='verb'>曰</span><rt>說</rt></ruby>：<ruby><span class='attr'>黔婁之</span><span class='subj'>妻</span><rt>黔婁的妻子</rt></ruby><ruby><span class='verb'>有</span><rt>有過</rt></ruby>一席<ruby><span class='obj'>言</span><rt>話</rt></ruby>：「<ruby><span class='adv'>不</span><rt>不為</rt></ruby><ruby><span class='verb'>戚戚</span><rt>憂愁</rt></ruby><ruby><span class='adv'>於貧賤</span><rt>在貧賤之中</rt></ruby>，<ruby><span class='adv'>不</span><rt>不</rt></ruby><ruby><span class='verb'>汲汲</span><rt>狂熱追求</rt></ruby><ruby><span class='adv'>於富貴</span><rt>名利富貴</rt></ruby>。」"
                },
                {
                    original: "其言茲若人之儔乎？",
                    svo: "<span class='attr'>其</span><span class='subj'>言</span><span class='adv'>茲</span><span class='verb'>若</span><span class='attr'>人之</span><span class='obj'>儔</span>乎？",
                    svo_trans: "看來<ruby><span class='attr'>其</span><span class='subj'>言</span><rt>她的這些話</rt></ruby>，<ruby><span class='adv'>茲</span><rt>這</rt></ruby>大概就是說的<ruby><span class='verb'>若</span><rt>像</rt></ruby>五柳先<ruby><span class='attr'>人之</span><span class='obj'>儔</span><rt>生這一類人</rt></ruby>乎？"
                },
                {
                    original: "銜觴賦詩，以樂其志，無懷氏之民歟？葛天氏之民歟？",
                    svo: "<span class='verb'>銜</span><span class='obj'>觴</span><span class='verb'>賦</span><span class='obj'>詩</span>，以<span class='verb'>樂</span><span class='attr'>其</span><span class='obj'>志</span>，<span class='attr'>無懷氏之</span><span class='subj'>民</span>歟？<span class='attr'>葛天氏之</span><span class='subj'>民</span>歟？",
                    svo_trans: "一邊<ruby><span class='verb'>銜</span><rt>喝著</rt></ruby><ruby><span class='obj'>開觴</span><rt>酒杯中的酒</rt></ruby>一邊<ruby><span class='verb'>賦</span><rt>作著</rt></ruby><ruby><span class='obj'>詩</span><rt>詩句</rt></ruby>，以此來使<ruby><span class='verb'>樂</span><rt>快樂</rt></ruby><ruby><span class='attr'>其</span><span class='obj'>志</span><rt>他自己的志向</rt></ruby>，他莫非是<ruby><span class='attr'>無懷氏之</span><span class='subj'>民</span><rt>上古無懷氏時代的百姓</rt></ruby>歟？或是<ruby><span class='attr'>葛天氏之</span><span class='subj'>民</span><rt>上古葛天氏時代的百姓</rt></ruby>歟？"
                }
            ]
        },
        chengtianshi: {
            title: "記承天寺夜遊",
            sentences: [
                {
                    original: "元豐六年十月十二日夜，解衣欲睡，月色入戶，欣然起行。",
                    svo: "<span class='adv'>元豐六年十月十二日夜</span>，<span class='verb'>解</span><span class='obj'>衣</span><span class='adv'>欲</span><span class='verb'>睡</span>，<span class='subj'>月色</span><span class='verb'>入</span><span class='obj'>戶</span>，<span class='adv'>欣然</span><span class='verb'>起行</span>。",
                    svo_trans: "在<ruby><span class='adv'>元豐六年十月十二日夜</span><rt>元豐六年十月十二日的夜晚</rt></ruby>，我剛<ruby><span class='verb'>解</span><rt>寬解</rt></ruby>開<ruby><span class='obj'>衣</span><rt>衣服</rt></ruby><ruby><span class='adv'>欲</span><rt>想要</rt></ruby>去<ruby><span class='verb'>睡</span><rt>睡覺</rt></ruby>，忽然看到<ruby><span class='subj'>月色</span><rt>月光</rt></ruby><ruby><span class='verb'>入</span><rt>照進</rt></ruby>了<ruby><span class='obj'>戶</span><rt>門戶</rt></ruby>，於是高興地<ruby><span class='adv'>欣然</span><rt>高興地</rt></ruby><ruby><span class='verb'>起行</span><rt>起身漫步</rt></ruby>。"
                },
                {
                    original: "念無與為樂者，遂至承天寺尋張懷民。",
                    svo: "<span class='verb'>念</span><span class='adv'>無</span><span class='verb'>與</span><span class='verb'>為樂</span><span class='obj'>者</span>，<span class='adv'>遂</span><span class='verb'>至</span><span class='obj'>承天寺</span><span class='verb'>尋</span><span class='obj'>張懷民</span>。",
                    svo_trans: "我<ruby><span class='verb'>念</span><rt>想到</rt></ruby>身邊<ruby><span class='adv'>無</span><rt>沒有</rt></ruby>可以<ruby><span class='verb'>與</span><rt>一同</rt></ruby><ruby><span class='verb'>為樂</span><span class='obj'>者</span><rt>尋求快樂的同伴</rt></ruby>，<ruby><span class='adv'>遂</span><rt>於是</rt></ruby><ruby><span class='verb'>至</span><rt>前往</rt></ruby><ruby><span class='obj'>承天寺</span><rt>承天寺</rt></ruby>去<ruby><span class='verb'>尋</span><rt>尋找</rt></ruby><ruby><span class='obj'>張懷民</span><rt>張懷民</rt></ruby>。"
                },
                {
                    original: "懷民亦未寢，相與步於中庭。",
                    svo: "<span class='subj'>懷民</span><span class='adv'>亦</span><span class='adv'>未</span><span class='verb'>寢</span>，<span class='adv'>相與</span><span class='verb'>步</span><span class='adv'>於中庭</span>。",
                    svo_trans: "此時<ruby><span class='subj'>懷民</span><rt>張懷民</rt></ruby>也<ruby><span class='adv'>亦</span><rt>也</rt></ruby><ruby><span class='adv'>未</span><rt>還沒有</rt></ruby><ruby><span class='verb'>寢</span><rt>就寢睡覺</rt></ruby>，我們便<ruby><span class='adv'>相與</span><rt>一同</rt></ruby><ruby><span class='verb'>步</span><rt>散步</rt></ruby><ruby><span class='adv'>於中庭</span><rt>在寺廟的庭院中</rt></ruby>。"
                },
                {
                    original: "庭下如積水空明，水中藻、荇交橫，蓋竹柏影也。",
                    svo: "<span class='subj'>庭下</span><span class='verb'>如</span><span class='attr'>積水</span><span class='obj'>空明</span>，<span class='adv'>水中</span><span class='subj'>藻、荇</span><span class='verb'>交橫</span>，<span class='adv'>蓋</span><span class='attr'>竹柏</span><span class='obj'>影</span>也。",
                    svo_trans: "<ruby><span class='subj'>庭下</span><rt>月光照在庭院地上</rt></ruby><ruby><span class='verb'>如</span><rt>好像</rt></ruby><ruby><span class='attr'>積水</span><span class='obj'>空明</span><rt>積水般清澈透明</rt></ruby>，彷彿<ruby><span class='adv'>水中</span><rt>清澈的水中</rt></ruby>還有<ruby><span class='subj'>藻、荇</span><rt>水藻和荇菜</rt></ruby>在<ruby><span class='verb'>交橫</span><rt>縱橫交錯</rt></ruby>，<ruby><span class='adv'>蓋</span><rt>原來是</rt></ruby><ruby><span class='attr'>竹柏</span><span class='obj'>影</span><rt>竹子和柏樹的影子</rt></ruby>也。"
                },
                {
                    original: "何夜無月？何處無竹柏？但少閒人如吾兩人者耳。",
                    svo: "<span class='attr'>何</span><span class='subj'>夜</span><span class='verb'>無</span><span class='obj'>月</span>？<span class='attr'>何</span><span class='subj'>處</span><span class='verb'>無</span><span class='obj'>竹柏</span>？<span class='adv'>但</span><span class='verb'>少</span><span class='attr'>閒人如吾兩人</span><span class='obj'>者</span>耳。",
                    svo_trans: "<ruby><span class='attr'>何</span><span class='subj'>夜</span><rt>哪一個夜晚</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>月</span><rt>月亮</rt></ruby>？<ruby><span class='attr'>何</span><span class='subj'>處</span><rt>哪一個地方</rt></ruby><ruby><span class='verb'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>竹柏</span><rt>竹子與柏樹</rt></ruby>？<ruby><span class='adv'>開但</span><rt>只是</rt></ruby><ruby><span class='verb'>少</span><rt>缺少</rt></ruby><ruby><span class='attr'>閒人如吾兩人</span><span class='obj'>者</span><rt>像我們兩個這樣的閒人</rt></ruby>耳。"
                }
            ]
        },
        shanjuiqiuming: {
            title: "山居秋暝",
            sentences: [
                {
                    original: "空山新雨後，天氣晚來秋。",
                    svo: "<span class='adv'>空山</span><span class='adv'>新雨</span>後，<span class='subj'>天氣</span><span class='adv'>晚來</span><span class='verb'>秋</span>。",
                    svo_trans: "<ruby><span class='adv'>空山</span><rt>空曠的群山之中</rt></ruby>在一場<ruby><span class='adv'>新雨</span><rt>初雨</rt></ruby>過後，傍晚的<ruby><span class='subj'>天氣</span><rt>氣候</rt></ruby><ruby><span class='adv'>晚來</span><rt>到了晚上</rt></ruby>更顯露出陣陣<ruby><span class='verb'>秋</span><rt>秋意</rt></ruby>。"
                },
                {
                    original: "明月松間照，清泉石上流。",
                    svo: "<span class='subj'>明月</span><span class='adv'>松間</span><span class='verb'>照</span>，<span class='subj'>清泉</span><span class='adv'>石上</span><span class='verb'>流</span>。",
                    svo_trans: "皎潔的<ruby><span class='subj'>明月</span><rt>明月</rt></ruby>在<ruby><span class='adv'>松間</span><rt>松林樹隙間</rt></ruby><ruby><span class='verb'>照</span><rt>掩映照射</rt></ruby>，清澈的<ruby><span class='subj'>清泉</span><rt>泉水</rt></ruby>在<ruby><span class='adv'>石上</span><rt>山石之上</rt></ruby><ruby><span class='verb'>流</span><rt>淙淙流淌</rt></ruby>。"
                },
                {
                    original: "竹喧歸浣女，蓮動下漁舟。",
                    svo: "<span class='subj'>竹</span><span class='verb'>喧</span><span class='verb'>歸</span><span class='obj'>浣女</span>，<span class='subj'>蓮</span><span class='verb'>動</span><span class='verb'>下</span><span class='obj'>漁舟</span>。",
                    svo_trans: "<ruby><span class='subj'>竹</span><rt>竹林裡</rt></ruby>傳來一陣<ruby><span class='verb'>喧</span><rt>喧鬧聲</rt></ruby>，是<ruby><span class='verb'>歸</span><rt>洗完衣服回來的</rt></ruby><ruby><span class='obj'>浣女</span><rt>洗衣姑娘們</rt></ruby>；水面上的<ruby><span class='subj'>蓮</span><rt>荷葉</rt></ruby>紛紛<ruby><span class='verb'>動</span><rt>搖動</rt></ruby>，那是順流而<ruby><span class='verb'>下</span><rt>划下來的</rt></ruby><ruby><span class='obj'>漁舟</span><rt>捕魚船</rt></ruby>。"
                },
                {
                    original: "隨意春芳歇，王孫自可留。",
                    svo: "<span class='adv'>隨意</span><span class='subj'>春芳</span><span class='verb'>歇</span>，<span class='subj'>王孫</span><span class='adv'>自</span><span class='verb'>可留</span>。",
                    svo_trans: "<ruby><span class='adv'>隨意</span><rt>任憑</rt></ruby>那熱鬧的<ruby><span class='subj'>春芳</span><rt>春季花草</rt></ruby>自然地<ruby><span class='verb'>歇</span><rt>凋謝消逝</rt></ruby>，山中的<ruby><span class='subj'>王孫</span><rt>隱居遊子</rt></ruby><ruby><span class='adv'>自</span><rt>自然</rt></ruby>心滿意足地<ruby><span class='verb'>可留</span><rt>可以留下來</rt></ruby>了。"
                }
            ]
        },
        nanxiangzi: {
            title: "南鄉子·登京口北固亭有懷",
            sentences: [
                {
                    original: "何處望神州？滿眼風光北固樓。",
                    svo: "<span class='adv'>何處</span><span class='verb'>望</span><span class='obj'>神州</span>？<span class='attr'>滿眼</span><span class='subj'>風光</span><span class='adv'>北固樓</span>。",
                    svo_trans: "向<ruby><span class='adv'>何處</span><rt>哪裡</rt></ruby>去眺<ruby><span class='verb'>望</span><rt>眺望</rt></ruby><ruby><span class='obj'>神州</span><rt>神州大地</rt></ruby>？滿眼都是<ruby><span class='attr'>滿眼</span><span class='subj'>風光</span><rt>大好風光</rt></ruby>聚在<ruby><span class='adv'>北固樓</span><rt>北固樓</rt></ruby>。"
                },
                {
                    original: "千古興亡多少事？悠悠。不盡長江滾滾流。",
                    svo: "<span class='adv'>千古</span><span class='subj'>興亡</span><span class='attr'>多少</span><span class='obj'>事</span>？<span class='verb'>悠悠</span>。<span class='attr'>不盡</span><span class='subj'>長江</span><span class='adv'>滾滾</span><span class='verb'>流</span>。",
                    svo_trans: "<ruby><span class='adv'>千古</span><rt>千百年來</rt></ruby>政權的<ruby><span class='subj'>興亡</span><rt>興盛與衰亡</rt></ruby>到底有多少<ruby><span class='attr'>多少</span><span class='obj'>事</span><rt>往事</rt></ruby>？思緒<ruby><span class='verb'>悠悠</span><rt>無窮無盡</rt></ruby>。就像這<ruby><span class='attr'>不盡</span><rt>無窮無盡的</rt></ruby><ruby><span class='subj'>長江</span><rt>長江水</rt></ruby>正<ruby><span class='adv'>滾滾</span><rt>滾滾不斷地</rt></ruby>向東<ruby><span class='verb'>流</span><rt>奔流</rt></ruby>。"
                },
                {
                    original: "年少萬兜鍪，坐斷東南戰未休。",
                    svo: "<span class='subj'>年少</span><span class='attr'>萬</span><span class='obj'>兜鍪</span>，<span class='verb'>坐斷</span><span class='obj'>東南</span><span class='subj'>戰</span><span class='adv'>未</span><span class='verb'>休</span>。",
                    svo_trans: "年輕時統率<ruby><span class='subj'>年少</span><rt>年輕</rt></ruby>的<ruby><span class='attr'>萬</span><rt>成千上萬名</rt></ruby><ruby><span class='obj'>兜鍪</span><rt>戰士</rt></ruby>，強勢<ruby><span class='verb'>坐斷</span><rt>割據</rt></ruby>了整個<ruby><span class='obj'>東南</span><rt>東南地區</rt></ruby>，連年<ruby><span class='subj'>戰</span><rt>戰爭</rt></ruby>從<ruby><span class='adv'>未</span><rt>不曾</rt></ruby>停<ruby><span class='verb'>休</span><rt>息</rt></ruby>。"
                },
                {
                    original: "天下英雄誰敵手？曹劉。生子當如孫仲謀。",
                    svo: "<span class='attr'>天下</span><span class='subj'>英雄</span><span class='subj'>誰</span><span class='verb'>敵手</span>？<span class='subj'>曹劉</span>。<span class='verb'>生</span><span class='obj'>子</span><span class='adv'>當如</span><span class='obj'>孫仲謀</span>。",
                    svo_trans: "<ruby><span class='attr'>天下</span><span class='subj'>英雄</span><rt>天下的英雄</rt></ruby>中誰是<ruby><span class='subj'>誰</span><rt>誰的</rt></ruby><ruby><span class='verb'>敵手</span><rt>對手</rt></ruby>？只有<ruby><span class='subj'>曹劉</span><rt>曹操與劉備</rt></ruby>。難怪讓人感嘆<ruby><span class='verb'>生</span><rt>生</rt></ruby>下<ruby><span class='obj'>子</span><rt>兒子</rt></ruby>應<ruby><span class='adv'>當如</span><rt>當像</rt></ruby><ruby><span class='obj'>孫仲謀</span><rt>孫權</rt></ruby>一樣。"
                }
            ]
        },
        zuiwengtingji: {
            title: "醉翁亭記",
            sentences: [
                {
                    original: "環滁皆山也。",
                    svo: "<span class='adv'>環</span><span class='subj'>滁</span><span class='adv'>皆</span><span class='verb'>山</span>也。",
                    svo_trans: "<ruby><span class='adv'>環</span><rt>環繞</rt></ruby><ruby><span class='subj'>滁</span><rt>滁州</rt></ruby>的四周<ruby><span class='adv'>皆</span><rt>全</rt></ruby>部都是<ruby><span class='verb'>山</span><rt>山</rt></ruby>也。"
                },
                {
                    original: "其西南諸峰，林壑尤美。",
                    svo: "<span class='attr'>其</span><span class='attr'>西南</span><span class='attr'>諸</span><span class='subj'>峰</span>，<span class='subj'>林</span><span class='subj'>壑</span><span class='adv'>尤</span><span class='verb'>美</span>。",
                    svo_trans: "<ruby><span class='attr'>其</span><rt>那</rt></ruby>裡<ruby><span class='attr'>西南</span><rt>西南</rt></ruby>方向的<ruby><span class='attr'>諸</span><rt>各</rt></ruby>座<ruby><span class='subj'>峰</span><rt>山峰</rt></ruby>，樹<ruby><span class='subj'>林</span><rt>林</rt></ruby>和溝<ruby><span class='subj'>壑</span><rt>谷</rt></ruby><ruby><span class='adv'>尤</span><rt>特別</rt></ruby>優<ruby><span class='verb'>美</span><rt>美</rt></ruby>。"
                },
                {
                    original: "望之蔚然深秀者，琅琊也。",
                    svo: "<span class='verb'>望</span><span class='obj'>之</span><span class='verb'>蔚然</span><span class='verb'>深</span><span class='verb'>秀</span><span class='obj'>者</span>，<span class='subj'>琅琊</span>也。",
                    svo_trans: "遠遠眺<ruby><span class='verb'>望</span><rt>望</rt></ruby>見<ruby><span class='obj'>之</span><rt>它</rt></ruby>，那草木<ruby><span class='verb'>蔚然</span><rt>茂盛</rt></ruby>、幽<ruby><span class='verb'>深</span><rt>深</rt></ruby>且秀<ruby><span class='verb'>秀</span><rt>麗</rt></ruby>的景致<ruby><span class='obj'>者</span><rt>的</rt></ruby>，是<ruby><span class='subj'>琅琊</span><rt>琅琊山</rt></ruby>也。"
                },
                {
                    original: "山行六七里，漸聞水聲潺潺。",
                    svo: "<span class='adv'>山</span><span class='verb'>行</span><span class='adv'>六七里</span>，<span class='adv'>漸</span><span class='verb'>聞</span><span class='subj'>水聲</span><span class='verb'>潺潺</span>。",
                    svo_trans: "沿著<ruby><span class='adv'>山</span><rt>山</rt></ruby>路前<ruby><span class='verb'>行</span><rt>行</rt></ruby><ruby><span class='adv'>六七里</span><rt>六七里</rt></ruby>，<ruby><span class='adv'>漸</span><rt>漸漸</rt></ruby>地聽<ruby><span class='verb'>聞</span><rt>聞</rt></ruby>到流<ruby><span class='subj'>水聲</span><rt>水聲</rt></ruby>正<ruby><span class='verb'>潺潺</span><rt>潺潺</rt></ruby>作響。"
                },
                {
                    original: "峰回路轉，有亭翼然臨於泉上者，醉翁亭也。",
                    svo: "<span class='subj'>峰</span><span class='verb'>回</span><span class='subj'>路</span><span class='verb'>轉</span>，<span class='verb'>有</span><span class='subj'>亭</span><span class='adv'>翼然</span><span class='verb'>臨</span><span class='adv'>於</span><span class='adv'>泉</span><span class='adv'>上</span><span class='obj'>者</span>，<span class='subj'>醉翁亭</span>也。",
                    svo_trans: "山<ruby><span class='subj'>峰</span><rt>巒</rt></ruby>迂<ruby><span class='verb'>回</span><rt>曲</rt></ruby>、山<ruby><span class='subj'>路</span><rt>徑</rt></ruby>蜿<ruby><span class='verb'>轉</span><rt>旋</rt></ruby>，那裡設<ruby><span class='verb'>有</span><rt>具</rt></ruby>一座建造得<ruby><span class='subj'>亭</span><rt>亭子</rt></ruby>四角像鳥兒<ruby><span class='adv'>翼然</span><rt>展翅一樣</rt></ruby>高高俯<ruby><span class='verb'>臨</span><rt>瞰</rt></ruby><ruby><span class='adv'>於</span><rt>在</rt></ruby>清<ruby><span class='adv'>泉</span><rt>泉水</rt></ruby>之<ruby><span class='adv'>上</span><rt>上</rt></ruby>的建築<ruby><span class='obj'>者</span><rt>物</rt></ruby>，就是<ruby><span class='subj'>醉翁亭</span><rt>醉翁亭</rt></ruby>也。"
                }
            ]
        },
        yueyanglouji: {
            title: "岳陽樓記",
            sentences: [
                {
                    original: "慶曆四年春，滕子京謫守巴陵郡。",
                    svo: "<span class='adv'>慶曆四年春</span>，<span class='subj'>滕子京</span><span class='adv'>謫</span><span class='verb'>守</span><span class='obj'>巴陵郡</span>。",
                    svo_trans: "在<ruby><span class='adv'>慶曆四年春</span><rt>慶曆四年春天</rt></ruby>，<ruby><span class='subj'>滕子京</span><rt>滕子京</rt></ruby>被降職<ruby><span class='adv'>謫</span><rt>貶</rt></ruby>官來太<ruby><span class='verb'>守</span><rt>守</rt></ruby><ruby><span class='obj'>巴陵郡</span><rt>巴陵郡</rt></ruby>。"
                },
                {
                    original: "越明年，政通人和，百廢具興。",
                    svo: "<span class='adv'>越</span><span class='adv'>明年</span>，<span class='subj'>政</span><span class='verb'>通</span><span class='subj'>人</span><span class='verb'>和</span>，<span class='subj'>百廢</span><span class='adv'>具</span><span class='verb'>興</span>。",
                    svo_trans: "<ruby><span class='adv'>越</span><rt>過</rt></ruby>了<ruby><span class='adv'>明年</span><rt>第二年</rt></ruby>，政<ruby><span class='subj'>政</span><rt>政務</rt></ruby>順<ruby><span class='verb'>通</span><rt>通</rt></ruby>、人<ruby><span class='subj'>人</span><rt>人心</rt></ruby>和<ruby><span class='verb'>和</span><rt>和</rt></ruby>樂，各項<ruby><span class='subj'>百廢</span><rt>荒廢的事業</rt></ruby>都<ruby><span class='adv'>具</span><rt>全</rt></ruby>部復<ruby><span class='verb'>興</span><rt>興</rt></ruby>辦起來了。"
                },
                {
                    original: "乃重修岳陽樓，增其舊制。",
                    svo: "<span class='adv'>乃</span><span class='adv'>重</span><span class='verb'>修</span><span class='obj'>岳陽樓</span>，<span class='verb'>增</span><span class='attr'>其</span><span class='attr'>舊</span><span class='obj'>制</span>。",
                    svo_trans: "<ruby><span class='adv'>乃</span><rt>於是</rt></ruby>重<ruby><span class='adv'>重</span><rt>重新</rt></ruby>修<ruby><span class='verb'>修</span><rt>建造</rt></ruby><ruby><span class='obj'>岳陽樓</span><rt>岳陽樓</rt></ruby>，擴<ruby><span class='verb'>增</span><rt>大</rt></ruby><ruby><span class='attr'>其</span><rt>它</rt></ruby>原先<ruby><span class='attr'>舊</span><rt>舊有</rt></ruby>的規<ruby><span class='obj'>制</span><rt>模</rt></ruby>。"
                }
            ]
        },
        qianzhilu: {
            title: "黔之驢",
            sentences: [
                {
                    original: "黔無驢，有好事者船載以入。",
                    svo: "<span class='subj'>黔</span><span class='adv'>無</span><span class='obj'>驢</span>，<span class='verb'>有</span><span class='attr'>好事</span><span class='obj'>者</span><span class='adv'>船</span><span class='verb'>載</span>以<span class='verb'>入</span>。",
                    svo_trans: "<ruby><span class='subj'>黔</span><rt>貴州</rt></ruby>地方並<ruby><span class='adv'>無</span><rt>沒有</rt></ruby><ruby><span class='obj'>驢</span><rt>驢</rt></ruby>，但<ruby><span class='verb'>有</span><rt>有</rt></ruby>個喜歡<ruby><span class='attr'>好事</span><span class='obj'>者</span><rt>多事的人</rt></ruby>，用<ruby><span class='adv'>船</span><rt>船</rt></ruby>隻馱<ruby><span class='verb'>載</span><rt>運</rt></ruby>著牠並以之運<ruby><span class='verb'>入</span><rt>入</rt></ruby>境內。"
                },
                {
                    original: "至則無可用，放之山下。",
                    svo: "<span class='verb'>至</span><span class='adv'>則</span><span class='adv'>無</span><span class='verb'>可用</span>，<span class='verb'>放</span><span class='obj'>之</span><span class='adv'>山下</span>。",
                    svo_trans: "運<ruby><span class='verb'>至</span><rt>到</rt></ruby>目的地之後<ruby><span class='adv'>則</span><rt>卻</rt></ruby>發現牠並<ruby><span class='adv'>無</span><rt>沒有</rt></ruby>甚麼地方<ruby><span class='verb'>可用</span><rt>可以派上用場</rt></ruby>，於是放<ruby><span class='verb'>放</span><rt>置</rt></ruby>任<ruby><span class='obj'>之</span><rt>牠</rt></ruby>在<ruby><span class='adv'>山下</span><rt>山腳下</rt></ruby>。"
                }
            ]
        },
        xiangjixuanzhi: {
            title: "項脊軒志",
            sentences: [
                {
                    original: "項脊軒，舊南閣子也。",
                    svo: "<span class='subj'>項脊軒</span>，<span class='attr'>舊</span><span class='attr'>南</span><span class='obj'>閣子</span>也。",
                    svo_trans: "<ruby><span class='subj'>項脊軒</span><rt>項脊軒</rt></ruby>，是原先<ruby><span class='attr'>舊</span><rt>舊</rt></ruby>的<ruby><span class='attr'>南</span><rt>南邊</rt></ruby>小屋<ruby><span class='obj'>閣子</span><rt>閣子</rt></ruby>也。"
                },
                {
                    original: "室僅方丈，可容一人居。",
                    svo: "<span class='subj'>室</span><span class='adv'>僅</span><span class='verb'>方丈</span>，<span class='adv'>可</span><span class='verb'>容</span><span class='subj'>一人</span><span class='verb'>居</span>。",
                    svo_trans: "這間書<ruby><span class='subj'>室</span><rt>室</rt></ruby>面幅<ruby><span class='adv'>僅</span><rt>僅僅</rt></ruby>有一丈<ruby><span class='verb'>方丈</span><rt>見方</rt></ruby>，只<ruby><span class='adv'>可</span><rt>可以</rt></ruby>包<ruby><span class='verb'>容</span><rt>容納</rt></ruby><ruby><span class='subj'>一人</span><rt>一個人</rt></ruby>在裡面親自居<ruby><span class='verb'>居</span><rt>住</rt></ruby>留。"
                },
                {
                    original: "百年老屋，塵泥滲漉，雨澤下注。",
                    svo: "<span class='attr'>百年</span><span class='subj'>老屋</span>，<span class='subj'>塵泥</span><span class='verb'>滲漉</span>，<span class='subj'>雨澤</span><span class='adv'>下</span><span class='verb'>注</span>。",
                    svo_trans: "這是一座歷經<ruby><span class='attr'>百年</span><rt>百年</rt></ruby>的<ruby><span class='subj'>老屋</span><rt>老屋</rt></ruby>，牆上的<ruby><span class='subj'>塵泥</span><rt>塵土泥沙</rt></ruby>不斷向下漏<ruby><span class='verb'>滲漉</span><rt>滲漏</rt></ruby>，天空的<ruby><span class='subj'>雨澤</span><rt>雨水</rt></ruby>也朝<ruby><span class='adv'>下</span><rt>下</rt></ruby>直<ruby><span class='verb'>注</span><rt>灌</rt></ruby>進來。"
                }
            ]
        },
        jiangchengzi: {
            title: "江城子·密州出獵",
            sentences: [
                {
                    original: "老夫聊發少年狂，左牽黃，右擎蒼。",
                    svo: "<span class='subj'>老夫</span><span class='adv'>聊</span><span class='verb'>發</span><span class='attr'>少年</span><span class='obj'>狂</span>，<span class='adv'>左</span><span class='verb'>牽</span><span class='obj'>黃</span>，<span class='adv'>右</span><span class='verb'>擎</span><span class='obj'>蒼</span>。",
                    svo_trans: "<ruby><span class='subj'>老夫</span><rt>我</rt></ruby>且姑<ruby><span class='adv'>聊</span><rt>且</rt></ruby>抒<ruby><span class='verb'>發</span><rt>發</rt></ruby>一下少年人一般的<ruby><span class='attr'>少年</span><rt>少年</rt></ruby><ruby><span class='obj'>狂</span><rt>狂勁</rt></ruby>，我的<ruby><span class='adv'>左</span><rt>左手</rt></ruby>那邊牽<ruby><span class='verb'>牽</span><rt>牽</rt></ruby>著一隻獵<ruby><span class='obj'>黃</span><rt>犬</rt></ruby>，我的<ruby><span class='adv'>右</span><rt>右手</rt></ruby>那邊高托<ruby><span class='verb'>擎</span><rt>舉</rt></ruby>著一隻蒼<ruby><span class='obj'>蒼</span><rt>鷹</rt></ruby>。"
                },
                {
                    original: "錦帽貂裘，千騎卷平岡。",
                    svo: "<span class='subj'>錦</span><span class='subj'>帽</span><span class='subj'>貂</span><span class='subj'>裘</span>，<span class='subj'>千騎</span><span class='verb'>卷</span><span class='obj'>平岡</span>。",
                    svo_trans: "頭戴織<ruby><span class='subj'>錦</span><rt>錦</rt></ruby>的衣<ruby><span class='subj'>帽</span><rt>帽</rt></ruby>、身穿貂<ruby><span class='subj'>貂</span><rt>貂</rt></ruby>皮的皮<ruby><span class='subj'>裘</span><rt>襖</rt></ruby>，率領著<ruby><span class='subj'>千騎</span><rt>眾多隨從騎兵</rt></ruby>狂風般掃<ruby><span class='verb'>卷</span><rt>卷</rt></ruby>過那座平坦的<ruby><span class='obj'>平岡</span><rt>山岡</rt></ruby>。"
                }
            ]
        },
        pozhenzi: {
            title: "破陣子·為陳同甫賦壯詞以寄之",
            sentences: [
                {
                    original: "醉裡挑燈看劍，夢回吹角連營。",
                    svo: "<span class='adv'>醉裡</span><span class='verb'>挑</span><span class='obj'>燈</span><span class='verb'>看</span><span class='obj'>劍</span>，<span class='adv'>夢回</span><span class='verb'>吹</span><span class='subj'>角</span><span class='adv'>連營</span>。",
                    svo_trans: "在<ruby><span class='adv'>醉裡</span><rt>醉夢中</rt></ruby><ruby><span class='verb'>挑</span><rt>撥高</rt></ruby>油<ruby><span class='obj'>燈</span><rt>燈心</rt></ruby>細細端<ruby><span class='verb'>看</span><rt>看</rt></ruby>寶<ruby><span class='obj'>劍</span><rt>劍</rt></ruby>，從<ruby><span class='adv'>夢回</span><rt>夢中醒來</rt></ruby>時正聽見<ruby><span class='verb'>吹</span><rt>奏起</rt></ruby>號<ruby><span class='subj'>角</span><rt>角聲</rt></ruby>迴盪在<ruby><span class='adv'>連營</span><rt>各個軍營</rt></ruby>。"
                },
                {
                    original: "八百里分麾下炙，五十弦翻塞外聲。",
                    svo: "<span class='subj'>八百里</span><span class='verb'>分</span><span class='adv'>麾下</span><span class='obj'>炙</span>，<span class='subj'>五十弦</span><span class='verb'>翻</span><span class='obj'>塞外聲</span>。",
                    svo_trans: "把烤熟的<ruby><span class='subj'>八百里</span><rt>牛</rt></ruby>肉均<ruby><span class='verb'>分</span><rt>分</rt></ruby>給<ruby><span class='adv'>麾下</span><rt>部下</rt></ruby>享用這美味的烤肉<ruby><span class='obj'>炙</span><rt>炙</rt></ruby>，讓各種弦樂器<ruby><span class='subj'>五十弦</span><rt>瑟</rt></ruby>演奏<ruby><span class='verb'>翻</span><rt>奏</rt></ruby>起雄壯的<ruby><span class='obj'>塞外聲</span><rt>邊塞樂曲</rt></ruby>。"
                }
            ]
        }
    };