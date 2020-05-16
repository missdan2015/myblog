
const catalogue = [
    {key: 'love', name:'青春爱情'},
    {key: 'fear', name:'惊悚悬疑'},
    {key: 'science', name:'科幻/魔幻'},
    {key: 'joke', name:'喜剧/搞笑'},
    {key: 'animation', name:'动画系列'},
    {key: 'animal', name:'动物系列'},
    {key: 'war', name:'战争/爱情'},
    {key: 'job', name:'职场/励志'},
]
const data = [
    {
        title: '青春爱情',
        id: 0,
        key: 'love',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [
            {
                name: '那些年，我们一起追过的女孩-2011',
                id: 1,
                score: 8.1,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/girl.png',
                detail: '柯景腾（柯震东 饰）和他的一群好友，爱耍帅却老是情场失意的老曹（敖犬 饰），停止不了勃起所以叫勃起的勃起（鄢胜宇 饰），想用搞笑致胜却总是失败的该边（蔡昌 宪 饰），胖界的夺爱高手阿和（赦绍文 饰），从国中到高中，一直是不离不弃的死党。他们都对班花沈佳宜（陈妍希 饰）有着一种纠结的感情。一方面，他们瞧不起这种只会用功读书的女生，另一方面他们又为她的美好气质倾倒。因为学习成绩较差，柯景腾被老师安排坐在沈佳宜前面。因为他的一次英雄救美，她开始用强制的方式帮他补习功课。此事令其他兄弟羡慕嫉妒恨，但是大家都未说破。毕业后，柯景腾和沈佳宜在各自大学保持恋人般的联系',
                comment: '台湾著名作家九把刀经典之作，谁的青春不曾遗憾过，错过，受伤过',
                star: 5,
                actor: '柯震东, 陈妍希'
            },
             {
                 name: '泰坦尼克号-1997',
                 id: 2,
                 score: '9.4',
                 imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/ship.png',
                 detail: '1912年4月10日，号称 “世界工业史上的奇迹”的豪华客轮泰坦尼克号开始了自己的处女航，从英国的南安普顿出发驶往美国纽约。富家少女罗丝（凯特•温丝莱特）与母亲及未婚夫卡尔坐上了头等舱；另一边，放荡不羁的少年画家杰克（莱昂纳多·迪卡普里奥）也在码头的一场赌博中赢得了下等舱的船票。罗丝厌倦了上流社会虚伪的生活， 不愿嫁给卡尔， 打算投海自尽， 被杰克救起。 很快， 美丽活泼的罗丝与英俊开朗的杰克相爱， 杰克带罗丝参加下等舱的舞会、 为她画像， 二人的感情逐渐升温。 ',
                 comment: '经典经典经典，重要的事情说三遍',
                 star: 5,
                 actor: '莱昂纳多·迪卡普里奥, 凯特·温丝莱特',
                 },
              {
                  name: '爱在黎明破晓时-1995',
                  id: 3,
                  score: 8.8,
                  imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/morning.png',
                  detail: '美国青年杰西（伊桑·霍克 Ethan Hawke 饰）在火车上偶遇了法国女学生塞琳娜（朱莉·德尔佩 Julie Delpy 饰），两人在火车上交谈甚欢。当火车到达维也纳时，杰西盛情邀请塞琳娜一起在维也纳游览一番，即使杰西翌日便要坐飞机离开。与杰西一见钟情的塞琳娜接受了杰西的邀请。他们一边游览城市， 一边谈论着彼此的过去， 彼此对生活的感想， 两人了解越加深刻。 ',
                  comment: '一见钟情没毛病了',
                  star: 4,
                   actor: ''
              },
               {
                    name: '革命之路-2008',
                    id: 4,
                    score: 8.1,
                    imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/change.png',
                    detail: '当他们第一次见面，他是高谈阔论的有志青年，她是向往成为名演员的未来之星。而如今，婚后的他们变了。他变成了在公司做不喜欢工作的无聊上班族，她成了不入流的糟糕演员。在一次演出后，丈夫弗兰克（莱奥纳多•迪卡布莱里奥饰）与妻子爱波（凯特•温斯莱特饰）大动肝火，两人多年的积怨终于爆发。莫非婚姻真的躲不过七年之痒？',
                    comment: '有些人选择无视婚后的平淡和空虚，有些人选择包容和理解，有些人选择革命之路，努力招呼恋爱时的甜蜜',
                    star: 3,
                    actor: '莱昂纳多·迪卡普里奥, 凯特·温丝莱特 '
               },
                {
                    name: '闻香识女人',
                    id: 5,
                    score: 9.1,
                    imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/woman.png',
                    detail: '查理（克里斯•奥唐纳饰）是一个普通的中学生，他因为见证着一件恶作剧但又不想出卖朋友，于是面临着一道艰难的选择题—— 要么坦白， 要么被学校勒退。 而史法兰（ 阿尔• 帕西诺 Al Pacino 饰） 是一个退伍军官， 因为意外失明， 人生从顶点的辉煌滑落谷底。 ',
                    comment: '你敢于守护正直，我就会保护你；老头子上帝视角啊，这种掌控一切的感觉真好',
                    star: 4,
                    actor: ''
                },
                 {
                     name: '傲慢与偏见-2005',
                     id: 6,
                     score: 8.6,
                     imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/pride.png',
                     detail: '伊丽莎白·班纳特(凯拉·奈特丽 饰)出身于小地主家庭，有四个姐妹，母亲班纳特太太整天操心着为女儿物色称心如意的丈夫。新来的邻居宾格来先生和他的朋友达西（马修·麦克菲迪恩 饰）打破了她们一家人单调的乡村生活。宾格来和伊丽莎白的姐姐简·班纳特互生情愫；达西对善良聪明的伊丽莎白产生了好感，而伊丽莎白却对达西不可一世的傲慢心存偏见，不接受他的感情。',
                     comment: '门当户对固然重要，但并不是无懈可击',
                     star: 3,
                     actor: ''
                 },
                  
                  {
                        name: '云中漫步-1995',
                        id: 7,
                        score: 7.8,
                        imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/cloud.png',
                        detail: '二战结束后，思乡心切的大批美军士兵踏上旧金山港即投进久候的亲人的怀抱，但保罗•萨顿（基努•里维斯）久等仍不见其妻子的踪影，夕阳西沉时，他拖着孤单落寞的身躯走回家中，发现妻子早已改变，她的眼里只剩金钱不再有他。眼看家中已毫无温情， 保罗也无心留恋， 只是他再次外出离家是为工作。 在火车上， 保罗结识美丽的姑娘维多利亚• 阿拉贡（ Aitana Sánchez - Gijón）， 因为投缘 ',
                        comment: '没想到挺温暖浪漫的；男主回家发现自己的妻子变的不太好，竟然离开了，太秀了，换我们这没这么酷的。果然，真爱在前方。',
                        star: 3,
                        actor: ''
                  },
                   {
                       name: '了不起的盖茨比',
                       id: 8,
                       score: 7.9,
                       imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/gcb.png',
                       detail: '1922年的春天，作家尼克(托比•马奎尔 Tobey Maguire 饰)满怀希望离开家乡，随淘金热潮来到纽约这个新兴的城市，虽然这里爵士乐流行，股票飞涨，但是贫富两极分化，人们沉沦在纸醉金迷中。尼克为了追寻美国梦，放弃写作而进入证券市场，并搬入纽约附近的海湾居住，成为了神秘富豪盖茨比（莱昂纳多•迪卡普里奥 Leonardo DiCaprio 饰）的邻居。而海湾的对岸住着尼克的表妹黛西（凯瑞•穆里根 Carey Mulligan 饰）和她的贵族丈夫汤姆（乔尔•埃哲顿 Joel Edgerton 饰），尼克不仅被邀请去赴宴，之后汤姆还带着他去找情妇寻欢，尼克渐渐迷失在这个充满魅力，以及富豪编制的假象、爱与谎言的世界中。',
                       comment: '爱一个人很难，久等一个人更难',
                       star: 3,
                       actor: '莱昂纳多·迪卡普里奥'
                   },
                  
        ]
    },
    {
        title: '惊悚悬疑',
        id: 0,
        key: 'fear',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [{
                name: '七宗罪-1995',
                id: 1,
                score: 8.8,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/seven.png',
                detail: '“暴食”、“贪婪”、“懒惰”、“嫉妒”、“骄傲”、“淫欲”、“愤怒”，这是天主教教义所指的人性七宗罪。城市中发生的连坏杀人案，死者恰好都是犯有这些教义的人。凶手故弄玄虚的作案手法，令资深冷静的警员沙摩塞（摩根•弗里曼 Morgan Freeman 饰）和血气方刚的新扎警员米尔斯（布拉德•皮特 Brad Pitt 饰）都陷入了破案的谜团中。',
                comment: ' 这是一部有浓厚宗教色彩的片子，结局太出彩，忍不住回看',
                star: 5,
                actor: '布拉德·皮特'
            },
            {
                name: '肖申克的救赎',
                id: 2,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '迷雾',
                id: 3,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '万能钥匙',
                id: 4,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '恐怖游轮',
                id: 5,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '死神来了',
                id: 6,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '天使与魔鬼-2009',
                id: 8,
                score: 7.3,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/angel.png',
                detail: '本片根据美国畅销作家丹•布朗的同名小说改编。欧洲核子中心的科学家维多利亚•维特勒（阿耶莱特•祖瑞尔 Ayelet Zurer 饰）与父亲在高速粒子对撞机实验中收集到了反物质，却发现父亲遇害，尸体胸口被烙“光照派”符号，高爆炸性的反物质被偷走，出现在正待选新教皇的罗马梵蒂冈，威胁天主教廷及整个罗马的安危。于此同时，四位主要教皇候选人的红衣主教神秘失踪。',
                comment: '奔着梵蒂冈来的',
                star: 4,
                actor: '汤姆·汉克斯'
            },
            {
                name: '闪灵',
                id: 9,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '孤儿怨-2009',
                id: 10,
                score: 8.2,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/ophan.png',
                detail: '意外流产让满心期待宝宝降生的约翰（Peter Sarsgaard 饰）和凯特（Vera Farmiga 维拉•法米加 饰）深受打击，凯特精神几近崩溃，而他们的婚姻也岌岌可危。为了挽救濒临破败婚姻，这对夫妇前往孤儿院希望收养一个孩子。在这里，他们见到了有些特立独行的小女孩伊斯特（Isabelle Fuhrman 伊莎贝尔•福尔曼 饰）。小女孩所散发出的独特气质吸引了约翰夫妇，最终伊斯特成为他们家庭中的一员。',
                comment: '挺恐怖的，想看第二遍又不太敢看了',
                star: 4,
                actor: ''
            },
            {
                name: '看不见的客人',
                id: 11,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            }, {
                name: '海市甚楼',
                id: 12,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            },
            {
                name: '伊甸湖',
                id: 13,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor: ''
            }, 
            {
                name: '异次元杀阵',
                id: 14,
                score: 7.9,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/cube.png',
                detail: '警司昆廷（莫里斯•迪恩•温特Maurice Dean Wint 饰）、监狱专家兼传感器专家伦尼斯（维尼•罗宾逊 Wayne Robson 饰）、医生霍洛韦（尼基•瓜达尼 Nicky Guadagni 饰）、建筑师沃思（戴维•休利特 David Hewlett）、数学系的大学生利文（尼科勒•德搏尔 Nicole de Boer 饰）和身患孤独症的学者卡赞（安德鲁•米勒 Andrew Miller 饰），六个素不相识的人，一觉醒来后发现一同身处于由一个个形状相同的立方体组成的结构复杂的高度精密迷宫中！他们唯一的出路只有逃离这座迷宫， 然而， 一个个立方体尽管外貌相同， 然而里面的机关却各不一样， 复杂异常。 ',
                comment: '网友觉得第一部和第三部是最经典的；一部隐喻性极强的电影。空间、人性、政治、环境~~',
                star: 5,
                actor: ''
            }
        ]
    },
    {
        title: '科幻/魔幻',
        id: 0,
        key: 'science',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [{
                name: '盗梦空间-2010',
                id: 1,
                score: 9.3,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/dream.png',
                detail: '道姆·柯布（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）与同事阿瑟（约瑟夫·戈登-莱维特 Joseph Gordon-Levitt 饰）和纳什（卢卡斯·哈斯 Lukas Haas 饰）在一次针对日本能源大亨齐藤（渡边谦 饰）的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔（希里安·墨菲 Cillian Murphy 饰）的深层潜意识中种下放弃家族公司、自立门户的想法。',
                comment: '卡梅隆负责革新电影技术，诺兰负责革新电影结构，小李子主演，真是爱豆们的福音啊',
                star: 5, 
                actor: '莱昂纳多'
            },
            {
                name: '星际穿越-2014',
                id: 2,
                score: 5,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/cross.png',
                detail: '近未来的地球黄沙遍野，小麦、秋葵等基础农作物相继因枯萎病灭绝，人类不再像从前那样仰望星空，放纵想象力和灵感的迸发，而是每日在沙尘暴的肆虐下倒数着所剩不多的光景。在家务农的前NASA宇航员库珀（马修·麦康纳 Matthew McConaughey 饰）接连在女儿墨菲（麦肯吉·弗依 Mackenzie Foy 饰）的书房发现奇怪的重力场现象，随即得知在某个未知区域内前NASA成员仍秘密进行一个拯救人类的计划。多年以前土星附近出现神秘虫洞，NASA借机将数名宇航员派遣到遥远的星系寻找适合居住的星球',
                comment: '导演诺兰，震撼指数max，和盗梦空间一样令人惊叹，看不懂，烧脑。',
                star: 4, 
                actor: '马修·麦康纳， 安妮·海瑟薇'
            },
            {
                name: '复仇者联盟',
                id: 3,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '银河护卫队-2014',
                id: 4,
                score: 8.4,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/space.png',
                detail: '彼得·奎尔（克里斯·帕拉特 Chris Pratt 饰）是一名从小被劫持到外太空的地球人，在义父勇度（迈克尔·鲁克 Michael Rooker 饰）的培养下成了一个终极混混，自称“星爵”。一次行动中他偷了一块神秘球体，便成为了赏金猎人火箭浣熊（布莱德利·库珀 B radl ey Cooper 配音）、树人格鲁特（范·迪塞尔 Vin Diesel 配音）的绑架目标，而神秘的卡魔拉（佐伊·索尔达娜 Zoe Saldana 饰）也对神秘球体势在必得。',
                comment: '男主开场音乐如雷贯耳，记忆犹新，',
                star: 4, actor: ''
            },
            {
                name: '指环王',
                id: 6,
                score: 9.0,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/king22.png',
                detail: '比尔博•巴金斯是100多岁的哈比人，住在故乡夏尔，生性喜欢冒险，在年轻时的一次探险经历中，他从怪物咕噜手中得到了至尊魔戒，这枚戒指是黑暗魔君索伦打造的至尊魔戒，拥有奴役世界的邪恶力量，能够统领其他几枚力量之戒，在3000年前的人类联盟和半兽人大军的战役中，联盟取得了胜利 ，并得到了至尊魔戒，数千年的辗转后，魔戒落到咕噜手中，被比尔博碰巧得到。',
                comment: '甘道夫；人生永远也不会结束，死亡只是另一种人生',
                star: 5, 
                actor: ''
            },
            {
                name: '阿凡达',
                id: 7,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '权力的游戏',
                id: 8,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
             {
                 name: '加勒比海盗-2003',
                 id: 9,
                 score: 8.7,
                 imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/sea.png',
                 detail: '故事发生在17世纪，传说中海盗最为活跃的加勒比海。风趣迷人的杰克·斯伯洛（约翰尼·德普 Johnny Depp 饰），是活跃在加勒比海上的海盗，拥有属于自己的“黑珍珠”号海盗船。对他来说，最惬意的生活就是驾驶着“黑珍珠”号在加勒比海上游荡，自由自在的打劫过往船只。但不幸的是，他的仇敌，老谋深算的巴尔巴罗萨船长(杰弗里·拉什 Geoffrey Rush 饰)偷走了他的“黑珍珠”号。巴伯萨是一个无恶不作的坏蛋，他抢劫了杰克的"黑珍珠号"后，更加猖狂，在加勒比海上横行霸道，一时成为整个加勒比海的霸主',
                 comment: '好看，我仿佛对深海有恐惧了',
                 star: 4, actor: ''
             },
              {
                  name: '哈利波特',
                  id: 10,
                  score: 5,
                  imgUrl: '',
                  detail: '1111111',
                  comment: '',
                star: 4, actor: ''
              },
               {
                   name: '亚特兰蒂斯',
                   id: 11,
                   score: 5,
                   imgUrl: '',
                   detail: '1111111',
                   comment: '',
                star: 4, actor: ''
               },
               {
                   name: '火星救援-2015',
                   id: 12,
                   score: 8.4,
                   imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/fire.png',
                   detail: '载人航天宇宙飞船阿瑞斯3号成功抵达火星，谁知一场破坏力极其巨大的风暴向宇航员们袭来，阿瑞斯3号被迫中断任务，紧急返航。撤离途中，宇航员马克·沃特尼（马特·达蒙 Matt Damon 饰）被飞船上吹落的零件击中，由于生还希望渺茫，队友们只得匆匆返航，并向世人宣告他已牺牲的事实。出乎意料的是，马克以极低的概率活了下来。他躲进驻火星的航天基地疗伤。下一次火星任务要等到四年后，而基地内的补给仅够他维持31天。短暂的绝望后，马克决定利用有限的食物，在这颗空无一人的星球上种植作物，寻找一线生机。',
                   comment: '论土豆的365种吃法？',
                   star: 4, 
                   actor: '马特·达蒙 '
               },
               {
                   name: '流浪地球',
                   id: 13,
                   score: 5,
                   imgUrl: '',
                   detail: '1111111',
                   comment: '',
                star: 4, actor: ''
               },
               {
                   name: '少年派的奇幻漂流',
                   id: 14,
                   score: 5,
                   imgUrl: '',
                   detail: '1111111',
                   comment: '',
                star: 4, actor: ''
               }
        ]
    },
    {
        title: '喜剧/搞笑',
        id: 0,
        key: 'joke',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [{
                name: '人在囧途',
                id: 1,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '夏洛特烦恼-2015',
                id: 2,
                score: 7.6,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/xlt.png',
                detail: '　在学生时代的初恋秋雅（王智 饰）的婚礼上，毕业后吃软饭靠老婆养的夏洛（沈腾 饰）假充大款，出尽其丑，中间还被老婆马冬梅（马丽 饰）戳穿暴捶。混乱之中，夏洛意外穿越时空，回到了1997年的学生时代的课堂里。他懵懵懂懂，以为是场真实感极强的梦，于是痛揍王老师，强吻秋雅，还尝试跳楼让自己醒来',
                comment: '',
                star: 3, 
                actor: '沈腾，马丽'
            },
            {
                name: '三傻大闹宝莱坞',
                id: 3,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '小鬼当家-1990',
                id: 4,
                score: 8.3,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/kid.png',
                detail: '一年一度的圣诞节又到了。全家忙着外出欢度圣诞假期，不料忙中出错，将家里最小的成员——8岁的凯文（麦考利•卡尔金 Macaulay Culkin　饰）留在了家里。爸爸妈妈急坏了，可此时他们已经身在外地，一时亦无可奈何。倒是凯文乐坏了，难得一个人在家，凯文将家里布置成了“游乐场”。两个刚出狱的窃贼将目光瞄向了凯文家。 当他们鬼鬼祟祟的踏入凯文家时， 凯文凭借自己的醒目和家里的“ 游乐场机关”， 和两个笨贼玩起了“ 游戏”， 笑料百出。 ',
                comment: '小朋友特别可爱，百看不厌',
                star: 4, actor: ''
            },
           
            {
                name: '大话西游-1995',
                id: 5,
                score: 9.2,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/wukong.png',
                detail: '至尊宝被月光宝盒带回到五百年前，遇见紫霞仙子，被对方打上烙印成为对方的人，并发觉自己已变成孙悟空。紫霞与青霞（ 朱茵 饰） 本是如来佛祖座前日月神灯的灯芯（ 白天是紫霞， 晚上是青霞）， 二人虽然同一肉身却仇恨颇深， 因此紫霞立下誓言， 谁能拔出她手中的紫青宝剑， 谁就是她的意中人。 ',
                comment: '星爷经典之作，联合玉女朱茵，片尾曲《一生所爱》备受大家青睐。发现身边越来越多的人彼此相爱却不能选择在一起。。',
                star: 4, 
                actor: '周星驰，朱茵'
            }
        ]
    },
    {
        title: '动画系列',
        id: 0,
        key: 'animation',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [
            
            {
                name: '疯狂动物城-2016',
                id: 1,
                score: 9.2,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/fog.png',
                detail: '故事发生在一个所有哺乳类动物和谐共存的美好世界中，兔子朱迪（金妮弗·古德温 Ginnifer Goodwin 配音）从小就梦想着能够成为一名惩恶扬善的刑警，凭借着智慧和努力，朱迪成功的从警校中毕业进入了疯狂动物城警察局，殊不知这里是大型肉食类动物的领地，作为第一只，也是唯一的小型食草类动物，朱迪会遇到怎样的故事呢？',
                comment: '这是一部伟大的电影，几乎可以和08 - 10 年的皮克斯作品（《 机器人总动员》、《 飞屋环游记》、《 玩具总动员3》） 旗鼓相当， 在立意上甚至还要高出一星半点。 ',
                star: 3, 
                actor: ''
            },
            {
                name: '寻梦环游记-2017',
                id: 2,
                score: 9.1,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/song.png',
                detail: '热爱音乐的米格尔（安东尼·冈萨雷兹 Anthony Gonzalez 配音）不幸地出生在一个视音乐为洪水猛兽的大家庭之中，一家人只盼着米格尔快快长大，好继承家里传承了数代的制鞋产业。一年一度的亡灵节即将来临，每逢这一天，去世的亲人们的魂魄便可凭借着摆在祭坛上的照片返回现世和生者团圆。在一场意外中， 米格尔竟然穿越到了亡灵国度之中， 在太阳升起之前， 他必须得到一位亲人的祝福， 否则就将会永远地留在这个世界里。 ',
                comment: '以这种色彩表达对已故亲人的思念，供奉的遗像是牵引家人回家的通道，驻留的记忆是保持亡灵存续的神力，热闹的音乐是唤醒思念启封的药引',
                star: 4, actor: ''
            },
            {
                name: '龙猫-2018',
                id: 3,
                score: 9.2,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/cat.png',
                detail: '　小月的母亲生病住院了，父亲带着她与四岁的妹妹小梅到乡间的居住。她们对那里的环境都感到十分新奇，也发现了很多有趣的事情。她们遇到了很多小精灵，她们来到属于她们的环境中，看到了她们世界中很多的奇怪事物，更与一只大大胖胖的龙猫成为了朋友。龙猫与小精灵们利用他们的神奇力量，为小月与妹妹带来了很多神奇的景观，令她们大开眼界。',
                comment: '',
                star: 3, 
                actor: ''
            },
            {
                name: '你的名字-2016',
                id: 4,
                score: '8.4',
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/urname.png',
                detail: '在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶（上白石萌音 配音）。校园和家庭的原因本就让她充满烦恼，而近一段时间发生的奇怪事件，又让三叶摸不清头脑。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。那里有陌生的同学和朋友，有亲切的前辈和繁华的街道，一切都是如此诱人而真实。另一方面，住在东京的高中男孩立花泷（神木隆之介 配音）则总在梦里来到陌生的小山村，以女孩子的身份过着全新的生活。',
                comment: '',
                star: '', actor: ''
            },
            {
                name: '千与千寻-2001',
                id: 5,
                score: 9.4,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/qian.png',
                detail: '千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。千寻仓皇逃出， 一个叫小白的人救了他， 喂了她阻止身体消 失的药， 并且告诉她怎样去找锅炉爷爷以及汤婆婆， 而且必须获得一份工作才能不被魔法变成别的东西 ',
                comment: '不努力工作会变成猪',
                star: 3, actor: ''
            },
            {
                name: '大鱼海棠-2016',
                id: 6,
                score: 6.8,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/fish.png',
                detail: '四十五亿年前，这个星球上，只有一片汪洋大海，和一群古老的大鱼。在与人类世界平行的空间里，生活着一个规规矩矩、遵守秩序的族群，他们为神工作，掌管世界万物运行规律，也掌管人类的灵魂。他们的天空与人类世界的大海相连。他们既不是神，也不是人，他们是“其他人”。',
                comment: '只能说画面还不错，不过年纪大了欣赏不来玛丽苏的剧情',
                star: '', actor: ''
            },
            {
                name: '机器人总动员-2008',
                id: 7,
                score: 9.3,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/robot.png',
                detail: '公元2805年，人类文明高度发展，却因污染和生活垃圾大量增加使得地球不再适于人类居住。地球人被迫乘坐飞船离开故乡，进行一次漫长无边的宇宙之旅。临行前他们委托Buynlarge的公司对地球垃圾进行清理，该公司开发了名为WALL·E（Waste Allocation Loa d Lifters – Earth 地球废品分装员）的机器人担当此重任。',
                comment: '这个还没看，听说很赞',
                star: '', actor: ''
            },
             {
                 name: '超能陆战队-2014',
                 id: 8,
                 score: 8.7,
                 imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/dabai.png',
                 detail: '未来世界的超级都市旧京山（San Fransokyo），热爱发明创造的天才少年小宏，在哥哥泰迪的鼓励下参加了罗伯特·卡拉汉教授主持的理工学院机器人专业的入学大赛。他凭借神奇的微型磁力机器人赢得观众、参赛者以及考官的一致好评，谁知突如其来的灾难却将小宏的梦想和人生毁于一旦。大火烧毁了展示会场，而哥哥为了救出受困的卡拉汉教授命丧火场。身心饱受创伤的小宏闭门不出，哥哥生前留下的治疗型机器人大白则成为安慰他的唯一伙伴。原以为微型机器人也毁于火灾，谁知小宏和大白竟意外发现有人在某座废弃工厂内大批量地生产他的发明。',
                 comment: '萌',
                 star: 3, 
                 actor: ''
             },
              {
                  name: '冰雪奇缘-2013',
                  id: 9,
                  score: 8.4,
                  imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/ice.png',
                  detail: '在四面环海、风景如画的阿伦黛尔王国，生活着两位可爱美丽的小公主，艾莎和安娜。艾莎天生具有制造冰雪的能力，随着年龄的增长，她的能力越来越强，甚至险些夺走妹妹的生命。为此国王紧闭宫门，也中断了两姐妹的联系。悲哀的海难过后，艾莎（伊迪娜·门泽尔 Idina Menzel 配音 ）终于到了加冕的年龄，各国王公齐来祝贺。艾莎战战兢兢，唯恐被人识破隐藏了多年的秘密。然而当听说安娜（克里斯汀·贝尔 Kristen Bell 配音）将要和初次见面的南埃尔斯王子汉斯（圣蒂诺·方塔纳 Santino Fontana 配音）结婚时，依然情绪失控露出了马脚。在此之后她逃到山中，构建了属于自己的冰雪王国，而阿伦黛尔也陷入可怕的寒冷之中。',
                  comment: '迪士尼总能在俗套和惊喜中迎刃有余',
                  star: 3, actor: ''
              },
              {
                  name: '白蛇缘起-2019',
                  id: 10,
                  score: 7.9,
                  imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/snake.png',
                  detail: '幽暗洞中，白蛇（张喆 配音）苦苦修炼却不得其法，小青见此情景，将发髻上的碧玉簪子取下，令白蛇攥在手中。那一刻，五百年前的记忆瞬间苏醒。五百年前，晚唐君主昏聩庸碌，掌握邪术的国师只手遮天，命令天下百姓捕蛇修法。为了拯救族群，白蛇冒险行刺，结果却遭遇挫败，还失去了记忆。当她再度醒来，发现自己被一个专门捕蛇的村落所救下，而那个胆小却善良的青年许宣',
                  comment: '故事原型是国内家喻户晓的白娘子，许仙了；拍成动画，这波国风满分',
                  star: 3, 
                  actor: ''
              }, 
              {
                  name: '爱宠大机密-2016',
                  id: 11,
                  score: 7.7,
                  imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/dogs.png',
                  detail: '位于纽约的一栋红色公寓中，狗狗麦克（路易·C·K Louis C.K. 配音）陪伴它的主人凯蒂（艾丽·坎伯尔 Ellie Kemper 配音）过着平凡而幸福的生活。它不明白主人为什么每天早出晚归，总希望凯蒂能时时刻刻陪伴着它。这天傍晚，主人带回了一条身形庞大的狗狗杜老大（艾瑞克·斯通斯崔特 Eric Stonestreet 配音），顿时让麦克感觉如天塌了一般。它想办法撵走杜老大，而对方也用以牙还牙，你争我斗的过程中，两个小家伙遭到抓狗队的围捕。在此期间，它们邂逅了兔子小白（凯文·哈特 Kevin Hart 配音）率领的堕落宠帮，经历了史无前例的大冒险。另一方面，麦克的暗恋者啾啾则号召伙伴们，要将善良可亲的朋友救回来',
                  comment: '嘤嘤嘤、萌一脸血！',
                  star: 3,
                  actor: '',
            }, {
                name: '神偷奶爸-2010',
                id: 12,
                score: 8.6,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/milkpapa.png',
                detail: '超级坏蛋格鲁（史蒂夫·卡瑞尔 Steve Carell 配音）在听说埃及金字塔被盗的新闻后不满市面上新贼辈出，决定在纳法利欧博士（拉塞尔·布兰德 Russell Brand 配音）的帮助下建造火箭升空盗取月亮。在向坏蛋银行贷款的过程中，格鲁盗取的收缩射线枪被新贼维克托（杰森·席格尔 Jason Segel 配音）抢走。为了夺回收缩射线枪，格鲁决定领养三位孤儿——玛戈（米兰达·卡斯格拉夫 Miranda Cosgrove 配音）、伊迪丝（达娜·盖伊 Dana Gaier 配音）和阿格蕾丝（埃尔希·费舍 Elsie Fisher 配音），利用她们进入维克托的城堡兜售饼干的机会实施偷盗，计划成功后再偷偷处理掉三个小孩。',
                comment: '反正小黄人是火了',
                star: 3, actor: ''
              },
              {
                name: '哪吒-2019',
                id: 13,
                score: 8.5,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/nezha.png',
                detail: '天地灵气孕育出一颗能量巨大的混元珠，元始天尊将混元珠提炼成灵珠和魔丸，灵珠投胎为人，助周伐纣时可堪大用；而魔丸则会诞出魔王，为祸人间。元始天尊启动了天劫咒语，3年后天雷将会降临，摧毁魔丸。太乙受命将灵珠托生于陈塘关李靖家的儿子哪吒身上。然而阴差阳错，灵珠和魔丸竟然被掉包。',
                comment: '和白蛇缘起共同证明了国产动漫的未来之日可待',
                star: 3, actor: ''
              },
        ]
    },
    {
        title: '动物系列',
        id: 0,
        key: 'animal',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [
            {
                name: '侏罗纪公园',
                id: 2,
                score: 5,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/dina.png',
                detail: '哈蒙德（理查德•阿滕伯勒 Richard Attenborough 饰）立志要建立一个非同寻常的公园：恐龙将是这个公园的主角。他把众多科学家收归旗下，利用琥珀里面困住的远古蚊子体内的血液，提取出恐龙的基因信息，利用这些信息培育繁殖恐龙。结果如愿以偿，他把怒布拉岛建立成了一个恐龙公园，坚信可以从中赚取大钱。然而，科学家们则忧心忡忡。',
                comment: '有恐龙啦',
                star: 3, 
                actor: ''
            },
            {
                name: '忠犬八公',
                id: 3,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '一条狗的使命',
                id: 4,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '虎兄虎弟',
                id: 5,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '猩球崛起-2011',
                id: 6,
                score: 8.1,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/monkey.png',
                detail: '借助灵长类学家卡洛琳（芙蕾达·平托 Freida Pinto 饰）的帮助，威尔发现凯撒的智力极大地提高。不过，人类的社会始终无法接受拥有极高智力的凯撒，凯撒被送往了猩猩看护所。看护所的残酷对待，使得凯撒利用智慧进行抗争，最终救走了同时被囚禁的其他猩猩，而且对它们都使用了Cure。一群高智商的猩猩与人类对立的战争就此拉开',
                comment: '因为猩猩真的好聪明，太喜欢凯撒的心理活动了，接着2和3看，领会凯撒成为领袖的心路历程',
                star: 4,
                actor: '詹姆斯·弗兰科'
            },
            {
                name: '多哥',
                id: 7,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            }
        ]
    },
    {
        title: '战争/爱情',
        id: 0,
        key: 'war',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [{
                name: '勇敢的心-1995',
                id: 1,
                score: 8.9,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/heart1.png',
                detail: '威廉•华莱士童年时，其父、苏格兰民族英雄马索•华莱士在与英军的斗争中牺牲，他开始接受父亲好友的指导，学习苏格兰文化和武术。青年华莱士（梅尔•吉布森）学成回到故乡，向美丽的少女梅伦求婚，不想梅伦被英军抢去且遭杀害。在广大村民“英雄之后”的呼声中，华莱士率众揭竿起义，并与苏格兰贵族罗伯结成联盟，但不久他发现，苏格兰贵族考虑的只是自身的利益。',
                comment: 'Freedom！',
                star: 5, 
                actor: ''
            },
            {
                name: '美丽人生',
                id: 2,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '斯巴达300勇士',
                id: 3,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '美国往事',
                id: 4,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '圣女贞德',
                id: 5,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: ''
            },
            {
                name: '天国王朝-2005',
                id: 6,
                score: 8.5,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/tianguo.png',
                detail: '《天国王朝》大部分角色基于历史人物而改编，哥伦比亚大学的Hamid Dabashi教授为该片的首席学术顾问。十二世纪的法国， 青年铁匠贝里昂（ 奥兰多· 布鲁姆 Orlando Bloom 饰） 无意间知道自己是十字军将领戈弗雷（ 连姆· 尼森 Liam Neeson 饰） 失散多 年的私生子。 为了寻找救赎， 贝里昂跟随父亲前往耶路撒冷。 骁勇善战加上品格高尚， 贝里昂几经征战成为赫赫有名的武士， 不但深受国王赏识， 美丽的公主西贝拉（ 伊娃· 格林 Eva Green 饰） 也对他芳心暗许。 而他也深深地被当地陌生而奇特的文化吸引， 然而随着战役增加， 带来无尽的杀戮和掠夺， 贝里昂终于领会父亲训言中和平的真义与生命的真爱 ',
                comment: '奔着耶路撒冷和十字军来的',
                star: 3, actor: ''
            },
            {
                name: '辛德勒的名单-1993',
                id: 7,
                score: 9.5,
                imgUrl: '',
                detail: '1939年，波兰在纳粹德国的统治下，党卫军对犹太人进行了隔离统治。德国商人奥斯卡·辛德勒（连姆·尼森 Liam Neeson 饰）来到德军统治下的克拉科夫，开设了一间搪瓷厂，生产军需用品。凭着出众的社交能力和大量的金钱，辛德勒和德军建立了良好的关系，他的工厂雇用犹太人工作，大发战争财。',
                comment: '关于犹太人集中营的影片太多了，每一个都很经典，叙事的角度不同，而这部是一个德国纳粹人人性逐步被唤醒的过程',
                star: 4, 
                actor: '连姆·尼森'
            },
            {
                name: '特洛伊-2004',
                id: 8,
                score: 7.5,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/tly.png',
                detail: '在浪漫壮观、引人遐思的古希腊，奥林匹亚众神与人类之间的爱恨传奇至今为人津津乐道，而在这其中，荷马史诗《伊里亚特》所记录的特洛伊之战更是后世剧作家与观者反复演绎的经典作品。当特洛伊王子帕里斯（奥兰多·布鲁姆 Orlando Bloom 饰）受希腊斯巴达国王之邀赴宴之际，却迷恋上了国王的妻子海伦（黛安·克鲁格 Diane Kruger 饰），对方倾国倾城的容貌让他不能自已，遂将海伦带回自己的国家',
                comment: '古希腊神话，发生在特洛伊，一个因为女人而引发的战争',
                star: 3, actor: ''
            }, {
                name: '亚瑟王-2004',
                id: 9,
                score: 6.8,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/yase.png',
                detail: '亚瑟（克里夫·欧文 Clive Owen 饰）与家人在战乱中失散，被人收养担任杂役工，但魔法师却预言他会成为神圣的英国君主，而亚瑟更是拔出了“石中剑”印证了自己的将来。当他看到国家的混乱现状，发誓要让整个大不列颠群岛脱离罗马人的残暴统治。于是他下定决心要建立一个全新的，充满和平宁静气氛的家园。亚瑟的骁勇善战和超凡的气魄令一些非常优秀的骑士为之折服，纷纷加入他的队伍，组织成著名的“圆桌骑士”。这些英勇的战士在亚瑟的带领下一路势如破竹，取得了令人骄傲的战绩。',
                comment: '圆桌骑士',
                star: 3, actor: ''
            }, 
            {
                name: '钢琴家-2002',
                id: 11,
                score: 9.2,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/piano.png',
                detail: '史标曼（艾德里安•布洛迪 Adrien Brody 饰）是波兰一家电台的钢琴师。二战即将爆发之时，他们全家被迫被赶进华沙的犹太区。在战争的颠沛流离中，家人和亲戚最终被纳粹杀害，而标曼本人也受尽种种羞辱和折磨，他侥幸得到一位朋友的帮助，暂时有了藏身之处。战争愈加猛烈，朋友不得不抛下 他回老家寻得安全的住所养育儿女。此时史标曼恶病缠身，却还要在搜捕中逃亡。',
                comment: '波兰斯基以一个观察者的角度展现了波兰的二战场景，看似冷静却又是最可惧的',
                star: 3, actor: ''
            },
        ]
    },
    {
        title: '职场/励志',
        id: 0,
        key: 'job',
        description: '1111111111111',
        vedioUrl: '',
        movieList: [{
                name: '阿甘正传-1994',
                id: 1,
                score: 9.5,
                imgUrl: '',
                detail: '阿甘（汤姆·汉克斯 饰）于二战结束后不久出生在美国南方阿拉巴马州一个闭塞的小镇，他先天弱智，智商只有75，然而他的妈妈是一个性格坚强的女性，她常常鼓励阿甘“傻人有傻福”，要他自强不息。阿甘像普通孩子一样上学， 并且认识了一生的朋友和至爱珍妮（ 罗宾· 莱特· 潘 饰）， 在珍妮和妈妈的爱护下， 阿甘凭着上帝赐予的“ 飞毛腿” 开始了一生不停的奔跑。阿甘成为橄榄球巨星、 越战英雄、 乒乓球外交使者、 亿万富翁， 但是， 他始终忘不了珍妮， 几次匆匆的相聚和离别， 更是加深了阿甘的思念。 ',
                comment: '若是每个人都能像阿甘这样“一直跑”秉持这样的信念 蠢人做蠢事，即使是最平凡的人生也能过得很精彩。',
                star: 4,
                actor: '汤姆·汉克斯',
            },
            {
                name: '当幸福来敲门-2006',
                id: 2,
                score: 9.1,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/door.png',
                detail: '克里斯•加纳（威尔·史密斯 Will Smith 饰）用尽全部积蓄买下了高科技治疗仪，到处向医院推销，可是价格高昂，接受的人不多。就算他多努力都无法提供一个良好的生活环境给妻儿，妻子（桑迪·牛顿 Thandie Newton 饰）最终选择离开家。从此他带着儿子克里斯托夫（贾登·史密斯 Jaden Smith 饰）相依为命。克里斯好不容易争取回来一个股票投资公司实习的机会，就算没有报酬，成功机会只有百分之五，他仍努力奋斗，儿子是他的力量。他看尽白眼，与儿子躲在地铁站里的公共厕所里，住在教堂的收容所里…… 他坚信，幸福明天就会来临',
                comment: '有点俗套的励志片，不过我想说的是在这个幸福被肤浅化的时代，很多人走遍天涯海角遍经无数风月换过几百种人生状态去寻找自己的幸福， 但是，找来找去，当幸福来敲门，却总是躲着不见。',
                actor: '威尔·史密斯',
                star: 4,
            },
            {
                name: '穿普拉达的女王-2006',
                id: 3,
                score: 8.1,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/king.png',
                detail: '初涉社会的安德丽娅•桑切丝（安妮•海瑟薇饰）来到了著名时尚杂志《RUNWAY》面试，以聪明得到了主编米兰达•普雷斯丽（梅利尔•斯特里普）的特许，让她担任自己的第二助理。开始的时候安德丽娅感到十分委屈，就算自己多努力工作也无法得到赞赏，经一位老前辈的指点便重新改造自己。工作越来越顺，甚至取代了第一助理在米兰达心中的地位，决定带着这个聪明的女孩前往法国。可安德丽的改变让她失去了男友及朋友的爱，令她非常矛盾。',
                comment: '非常喜欢的女明星啦，事业成功就算成功了么？对于女性，幸福的终点站到底是事业还是家庭',
                actor: '安妮·海瑟薇',
                star: 4,
            },
            {
                name: '海蒂和爷爷',
                id: 4,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4,
                actor:'',
            },
            {
                name: '小鞋子',
                id: 5,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: '',
            },
           
            {
                name: '荒野猎人',
                id: 8,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: '',
            },
            {
                name: '摔跤吧，爸爸',
                id: 9,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: '',
            },
            {
                name: '神秘巨星',
                id: 10,
                score: 5,
                imgUrl: '',
                detail: '1111111',
                comment: '',
                star: 4, actor: '',
            },
            {
                name: '飓风营救-2008',
                id: 11,
                score: 8.3,
                imgUrl: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/movie/help.png',
                detail: '特工布莱恩(利亚姆·尼森 饰)深爱着女儿凯姆(麦琪·格雷斯饰)，却由于工作的原因难以给予她日常的父爱，失望的妻子带着女儿改嫁他人。退休后，见识过太多黑暗势力的布莱恩生怕女儿受到伤害，费尽心力的守护她却也因此带给凯姆种种束缚，引发了父女间的矛盾。17 岁生日后， 凯姆执意和朋友前往巴黎旅行， 无奈的布莱恩只好答应， 不成想灾难正等着年轻的凯姆。 在电话里亲耳听到女儿被绑架后， 布莱恩强忍内心的痛苦只身踏上了营救女儿的征程， 而他只有96个小时 。',
                comment: '物以稀少为贵，女以未开苞为幸， 伟大的父爱',
                star: 4,
                actor: '连姆尼森',

            }
        ]
    },

];
export {catalogue, data}