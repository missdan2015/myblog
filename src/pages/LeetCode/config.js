const articleList = [
    {
        key: 'array',
        tag: '数组',
        list: [
            {
                num: 1, 
                name: '两数之和', 
                title: '给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍', 
                answer: `function(){let a = 1; \n\nconsole.log(a)}`
            },
            {
                num: 189,
                name: '旋转数组',
                title: '给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。',
                answer: ''
            },
            {
                num: 27,
                name: '移除元素',
                title: '给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。不要使用额外的数组空间， 你必须仅使用 O(1) 额外空间并 原地 修改输入数组。 ',
                answer: ''
            },
            {
                num: 136,
                name: '只出现一次的数字',
                title: '给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。',
                answer: '',
                star: '好题'
            },
            {
                num: 35,
                name: '搜索插入位置',
                title: '给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。',
                answer: '',
                star: '经典基础题'
            }
        ]
    },
    {
        key: 'string',
        tag: '字符串',
        list: [
            {
                num: 541,
                name: '反转字符串 II',
                title: '给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。',
                answer: '',
            },
             {
                 num: 20,
                 name: '有效的括号',
                 title: '给定一个只包括 "("，")"，"{"，"}"，"["，"]" 的字符串，判断字符串是否有效。',
                 answer: '',
                 star: '经典基础题'
             },
              {
                  num: 606,
                  name: '根据二叉树创建字符串',
                  title: '你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。',
                  answer: '',
                  star:'树'
              },
               {
                   num: 686,
                   name: '重复叠加字符串匹配',
                   title: '给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。举个例子，A = "abcd"，B = "cdabcdab"。',
                   answer: '',
               },
               {
                   num: 24,
                   name: '无重复字符的最长子串(3)',
                   title: '给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。',
                   answer: '',
               }
        ]
       
    }    
];
const tags = [
    {id:1, name: '数组', key: 'array'},
    {id:2, name: '字符串', key: 'string'},
];
export {articleList, tags};
