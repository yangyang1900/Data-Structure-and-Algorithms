/*
* @Author: yangyang
* @Date:   2019-08-21 21:07:50
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-21 21:53:13
*/

/*
问题描述：
从左到右有A、B、C三根柱子，其中A柱子上面有从小叠到大的n个圆盘，现要求将A柱子上的圆盘移到C柱子上去，期间只有一个原则：一次只能移到一个盘子且大盘子不能在小盘子上面，求移动的步骤和移动的次数

原理：运用递归，可以将步骤抽象为：
(1): 先将A柱的n-1个移动到B柱
(2): 再将A柱的最后一个移动到C柱
(3): 最后再将B柱的n-1个移动到C柱【此时问题就缩小到n-1个规模】
*/

var times = 0;
function hanoi(n, src, aux, dist) {
    if (n > 0) {
        hanoi(n - 1, src, dist, aux); //递归，把A(src)塔上编号1~n-1的圆盘移到B(aux)上，以C(dist)为辅助塔
        console.log("第" + (++times) + "次移动：" + n + "号盘从" + src + "移到" + dist); //把A塔上编号为n的圆盘移到C上
        hanoi(n - 1, aux, src, dist); //递归，把B塔上编号1~n-1的圆盘移到C上，以A为辅助塔
    }
}

hanoi(3, 'A', 'B', 'C');
//运行结果
第1次移动：1号盘从A移到C
第2次移动：2号盘从A移到B
第3次移动：1号盘从C移到B
第4次移动：3号盘从A移到C
第5次移动：1号盘从B移到A
第6次移动：2号盘从B移到C
第7次移动：1号盘从A移到C


