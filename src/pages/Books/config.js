const bookTypes = [
    { key: 'novel', title: '经典小说' },
    { key: 'love', title: '言情小说' },
    { key: 'history', title: '社科历史'},
    { key: 'science', title: '科幻' },
    { key: 'computer', title: '计算机'},
    { key: 'office', title: '办公'},
];
const bookData = [
    {
        key: 'novel',
        list: [
           
            {
                name: '我是你爸爸',
                owner: '王朔',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/father.jpg',
                score: 8.4,
                content: '',
                comment: '',
            },
            {
                name: '活着',
                owner: '余华',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/life.jpg',
                score: 9.4,
                content: '',
                comment: '',
            },
            {
                name: '活法',
                owner: '稻盛和夫',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/live.jpg',
                score: 8.1,
                content: '',
                comment: ''
            },
           
            {
                name: '局外人',
                owner: '[法] 阿尔贝·加缪',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/outdoor.jpg',
                score: 9.0,
                content: '《局外人》是加缪小说的成名作和代表作之一，堪称20世纪整个西方文坛最具有划时代意义最著名小说之一，“局外人”也由此成为整个西方文学-哲学中最经典的人物形象和最重要的关键词之一',
                comment: ''
            },
           
            {
                name: '钢铁是怎样练成的',
                owner: '奥斯特洛夫斯基',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/gt.jpg',
                score: 7.6,
                content: '',
                comment: ''
            },
             {
                 name: '平凡的世界',
                 owner: '路遥',
                 url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/world.jpg',
                 score: 9.0,
                 content: '《平凡的世界(套装共3册)》是一部现实主义小说，也是小说化的家族史。作家高度浓缩了中国西北农村的历史变迁过程，作品达到了思想性与艺术性的高度统一，特别是主人公面对困境艰苦奋斗的精神，对今天的大学生朋友仍有启迪。这是一部全景式地表现中国当代城乡社会生活的长篇小说。《平凡的 世界(套装共3册)》共三部。作者在近十年问广阔背景上，通过复杂的矛盾纠葛，刻画了社会各阶层众多普通人的形象。劳动与爱情，挫折与追求，痛苦与欢乐，日常生活与巨大社会冲突，纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。',
                 comment: ''
             },
        ]
    },
    {
        key: 'love',
        list: [
         {
             name: '黄金时代',
             owner: '王小波',
             url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/gold.jpg',
             score: 8.7,
             content: '',
             comment: ''
         },
         {
             name: '围城',
             owner: '钱钟书',
             url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/wc.jpg',
             score: 9.0,
             conent: '',
             comment: ''
         },
         {
             name: '怦然心动',
             owner: '文德琳·范·德拉安南',
             url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/fleep.jpg',
             score: 9.0,
             content: '布莱斯全家搬到小镇，邻家女孩朱莉前来帮忙。她对他一见钟情，心愿是获得他的吻。两人是同班同学，她一直想方设法接近他，但是他避之不及。她喜欢爬在高高的梧桐树上看风景。但因为施工，树要被砍掉，她誓死捍卫，希望他能与她并肩作战，但是他退缩了。她的事迹上了报纸， 外公对她颇有好感， 令他十分困惑。 她凭借鸡下蛋的项目获得了科技展第一名， 成了全场焦点， 令他黯然失色。 ',
             comment: ''
         },
          {
              name: '情人',
              owner: '玛格丽特.杜拉斯',
              url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/lover.jpeg',
              score: 9.0,
              content: '杜拉斯代表作之一，自传性质的小说，获一九八四年法国龚古尔文学奖。全书以法国殖民者在越南的生活为背景，描写贫穷的法国女孩与富有的中国少爷之间深沉而无望的爱情。',
              comment: ''
          },
            {
                name: '小王子',
                owner: '[法] 安东尼·德·圣-埃克苏佩里',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/prince.jpg',
                score: 9.0,
                content: '小王子是一个超凡脱俗的仙童，他住在一颗只比他大一丁点儿的小行星上。陪伴他的是一朵他非常喜爱的小玫瑰花。但玫瑰花的虚荣心伤害了小王子对她的感情。小王子告别小行星，开始了遨游太空的旅行。他先后访问了六个行星，各种见闻使他陷入忧伤，他感到大人们荒唐可笑、太不正常。只有在其中一个点灯人的星球上，小王子才找到一个可以作为朋友的人。但点灯人的天地又十分狭小，除了点灯人他自己，不能容下第二个人。在地理学家的指点下，孤单的小王子来到人类居住的地球。小王子发现人类缺乏想象力， 只知像鹦鹉那样重复别人讲过的话。 小王子这时越来越思念自己星球上的那枝小玫瑰。 后来， 小王子遇到一只小狐狸， 小王子用耐心征服了小狐狸， 与它结成了亲密的朋友。 小狐狸把自己心中的秘密—— 肉眼看不见事务的本质， 只有用心灵才能洞察一切—— 作为礼物， 送给小王子。 用这个秘密， 小王子在撒哈拉大沙漠与遇险的飞行员一 ',
                comment: ''
            },
              {
                  name: '简爱',
                  owner: '[英] 夏洛蒂·勃朗特',
                  url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/jane.jpg',
                  score: 8.6,
                  content: '简•爱自幼父母双亡，投靠冷酷的舅母，但舅母无情地抛弃了她。她在一所慈善学校做了六年的学生和两年的教师。十八岁时，简•爱受聘到桑菲尔德府学当家庭教师，认识了主人罗切斯特。两人都被对方独特的气质和丰富的感情所吸引，于是不顾身份和地位的巨大差距深深相爱了。正当他们举行婚礼时，有人证明罗切斯特的前妻还活着。简•爱知道他们不可能有平等的婚姻，于是选择了离开。后来，简•爱意外遇见了她的表兄妹们，并从叔叔那里继承了一笔遗产。但她无法抵御对罗切斯特的刻骨思念，于是便回到了已经失去了财富、身体也遭到火灾严重摧残的罗切斯特身边，毅然跟他结婚。在爱的沐浴下，罗切斯特找回了幸福和健康。',
                  comment: ''
              },
        ]
    },  
   
    {
        key: 'history',
        id: 4,
        list: [{
                name: '唐史',
                owner: '蔡东藩',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/tang.jpg',
                score: 9.0,
                content: '',
                comment: ''
            },
            {
                name: '明朝那些事',
                owner: '当年明月',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/ming.jpg',
                score: 9.0,
                content: '',
                comment: ''
            },
            {
                name: '大秦帝国',
                owner: '孙皓晖',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/dqin.jpg',
                score: 9.0,
                content: '',
                comment: ''
            },
        ]
    },
    {
        key: 'science',
        list: [{
                name: '银河帝国',
                owner: '艾萨克.阿西莫夫',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/yinhe.png',
                score: 9.0,
                content: '',
                comment: ''
            },
            {
                name: '三体',
                owner: '刘慈欣',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/santi.jpg',
                score: 9.0,
                content: '',
                comment: ''
            },
            {
                name: '时间简史',
                owner: '史蒂芬.霍金',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/time.png',
                score: 9.0,
                content: '',
                comment: ''
            },
        ]
    },
    {
        key: 'computer',
        list: [{
                name: '剑指offer',
                owner: '左**',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/offer.jpg',
                score: 9.0,
                content: 'emm，拿来充数',
                comment: ''
            },
           
        ]
    },
    
    {
        key: 'office',
        list: [{
                name: 'PPT高手之路',
                owner: '李栋',
                url: 'https://blog1991.oss-cn-shanghai.aliyuncs.com/book/ppt.png',
                score: 9.0,
                content: '',
                comment: ''
            },
           
        ]
    },
   
];
export {bookTypes, bookData}