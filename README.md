##### 第一部分：《JavaScript数据结构与算法》书


常见数据结构：
Stack（栈）、Queue（队列）、LinkedList（链表）、Set（集合）、Hash Table（哈希表/散列表）、Tree（树）、Trie（字典树）、Graph（图）

##### 1.Stack（栈）
- Stack实现
- Stack-进制转换问题
- Stack-平衡圆括号问题
- Stack-汉诺塔问题
- Stack-棒球比赛问题


##### 2.Array（数组）
- 查找数组中某个数的位置
- 使用归并排序合并两个有序数组
- 电话号码的组合问题（公式运算，主要涉及排列组合）
- 卡牌问题（归类运算）
- 种花问题（筛选运算/过滤运算）
- 格雷编码问题（二进制运算）


##### 3.Queue（队列）
- Queue实现
- Queue-deque实现（双端队列）
- Queue-击鼓传花游戏问题（循环队列）
- Queue-回文检查器问题（双端队列）


##### 4.LinkedList（链表）
- 单向链表和双向链表实现
- 循环链表实现
- 链表排序问题
- 环形链表问题


##### 5.Set（集合）
- Set实现
- 集合运算（并、交、差、子集，ES5和ES6以及扩展运算符实现）
- 唯一的摩尔斯密码词问题
- 两个数组的交集Ⅰ问题

##### 6.Map（字典/映射）
- Map实现
- 两个数组的交集Ⅱ问题


##### 7.HashTable（散列表/哈希表）
- HasbTable实现
- 散列表处理冲突
- 字符串中的第一个唯一字符问题


##### 8.递归
- 计算一个数的阶乘
- 斐波那契数列
- 复原IP地址问题


##### 9.Tree（树）
- 二叉树和二叉搜索树
- 树的遍历（中序遍历、先序遍历和后序遍历）
- 搜索树中的值
- 自平衡树（AVL树和红黑树）


##### 10.堆（Heap）
- 二叉堆
- 堆排序（Heapsort）


##### 11.排序和搜索算法
- 冒泡排序
- 选择排序
- 插入排序
- 归并排序
- 快速排序
- 计数排序
- 桶排序
- 基数排序
- 顺序搜索
- 二分搜索
- 内插搜索


##### 12.算法设计与技巧
- 分而治之（二分搜索）
- 动态规划（最少硬币找零问题、背包问题、最长公共子序列问题、矩阵链相乘问题）
- 贪心算法（最少硬币找零问题、分数背包问题）
- 回溯算法（迷宫老鼠问题、数独解题器）
- 分支限界法


---



**十大经典排序算法**

- 插入排序
- 希尔排序
- 选择排序
- 冒泡排序
- 归并排序
- 快速排序
- 堆排序
- 基数排序


![十大排序算法时间复杂度和空间复杂度以及稳定性](https://github.com/hustcc/JS-Sorting-Algorithm/raw/master/res/sort.png) 



**关于时间复杂度**：

1. 平方阶 (O(n2)) 排序 各类简单排序：插入排序、选择排序和冒泡排序。
2. 线性对数阶 (O(nlog2n)) 排序：快速排序、堆排序和归并排序；
3. O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。 希尔排序
4. 线性阶 (O(n)) 排序 基数排序，此外还有桶、箱排序。



**关于稳定性**：

稳定的排序算法：冒泡排序、插入排序、归并排序和基数排序。

不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序。


---



##### 第二部分：《剑指Offer》分类整理：

参考地址：

https://juejin.cn/post/6844903875904815111#comment

https://xin-tan.com/algorithm/#%E3%80%8A%E5%89%91%E6%8C%87-Offer%E3%80%8B-JavaScript-%E7%89%88%E8%AE%B2%E8%A7%A3

https://github.com/DavidChen93/-offer-JS-

https://github.com/luxiangqiang/JianZhi-Offer_JavaScript

https://shenlvmeng.github.io/blog/2017/07/27/interview-algorithm-md/

https://juejin.cn/post/6844903921496899592#comment

https://github.com/14glwu/FEInterviewBox/tree/master/%E5%89%91%E6%8C%87offer

https://www.cnblogs.com/wuguanglin/p/code-interview.html



JS刷题经验：https://www.nowcoder.com/discuss/72658




##### 1.字符串
- 替换空格
- 字符串的全排列
- 翻转单词顺序
- 实现atoi


##### 2.查找
- 旋转数组最小的数字
- 数字在排序数组中出现的次数


##### 3.链表
- 从尾到头打印链表
- 快速删除链表节点
- 链表倒数第k节点
- 反转链表
- 合并两个有序链表
- 复杂链表的复制
- 两个链表中的第一个公共节点


##### 4.数组
- 二维数组中的查找
- 数组顺序调整
- 把数组排成最小的数
- 数组值的逆序对


##### 5.栈和队列
- 用两个栈实现队列
- 包含min函数的栈
- 栈的压入弹出序列


##### 6.递归和循环
- 青蛙跳台阶
- 数值的整次方
- 打印从1到最大的n位数
- 顺时针打印矩阵
- 数组中出现次数超过一半的数字
- 最小的k个数
- 和为s的连续正数序列
- n个骰子的点数
- 扑克牌的顺子
- 圆圈中最后剩下的数字


##### 7.树
- 重建二叉树
- 判断是否子树
- 二叉树的镜像
- 二叉搜索树的后序遍历序列
- 二叉树中和为某一值的路径
- 二叉树层序遍历
- 二叉树转双向链表
- 判断是否是平衡二叉树


##### 8.位运算
- 二进制中1的个数
- 二进制中1的个数进阶版
- 数组中只出现一次的数字


##### 9.哈希表
- 丑数
- 第一次只出现一次的字符


##### 10.堆
- 最小的k个数


---



本仓库主要结合书籍、视频和网络文章进行资料整合和学习，记录自己学习数据结构与算法的过程。

参考书籍：
《我的第一本算法书》及配套APP、《学习JavaScript数据结构与算法》、《算法图解》、《数据结构与算法图解》

参考视频：
bobo老师的《玩转算法系列——数据结构精讲》、《算法与数据结构》、快乐动起来老师的《JavaScript数据结构与算法》，请支持老师正版。

参考文章（不断更新）：
<https://www.cnblogs.com/xiaohuochai/tag/javascript%E6%80%BB%E7%BB%93/> 
<https://github.com/biaodigit/JavaScriptAlgorithms> 
<https://segmentfault.com/a/1190000020011987> 

剑指Offer的JavaScript分类整理：
<https://xin-tan.com/passages/2019-06-23-algorithm-offer/#%E4%BB%8B%E7%BB%8D> 

bobo老师课程JavaScript版本：
<https://github.com/biaodigit/Play-with-Data-Structures> 

十大经典排序算法：
<https://github.com/hustcc/JS-Sorting-Algorithm> 



坚持坚持坚持！！！