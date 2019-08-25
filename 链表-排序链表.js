/*
* @Author: yangyang
* @Date:   2019-08-22 23:04:57
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-25 14:10:50
*/

/*

leetcode 148 排序链表 https://leetcode-cn.com/problems/sort-list/

在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5

冒泡排序、选择性排序、插入排序：O(n2)
堆排序、归并排序、快速排序：O(nln)

本篇使用快速排序，注意数组快速排序和链表快速排序的差别

*/

//声明链表的节点
class Node{
	constructor(value){
		this.val = value
		this.next = undefined
	}
}

//声明链表的数据结构
class NodeList{
	constructor(arr){
		//声明链表的头部节点
		let head = new Node(arr.shift())
		let next = head

		//遍历传入的arr，放入链表中
		arr.forEach(item =>{
			next.next = new Node(item)
			next = next.next
		})
		return head

	}
}

//交换两个节点的值
let swap = (p,q) =>{
	let val = p.val
	p.val = q.val
	q.val = val
}

//寻找基准元素的节点
let partion = (begin,end) =>{
	
	let val = begin.val   //起初的基准元素
	let p = begin		//初始化的p指针
	let q = begin.next	//初始化的q指针

	while(q !== end){
		if(q.val < val){
			p = p.next	//因为p指针左侧都是小于基准点，所以当发现q.val小于基准点val的值时，是此时p指针.next与q指针交换
			swap(p,q)	//为什么要p=p.next，因为要给把发现小于val的q值换过来，所以申请了一个位置p的下一个位置p.next
		}
		q = q.next //q交换后，继续检查下一个元素q.next
	}
	//让基准元素跑到中间去（当我们检查第一遍之后，能保证p指针左侧及p指针小于基准值，p到q指针及q指针区间，大于基准值，此时我们就可以变换基准值的位置了）
	swap(p,begin)

	//返回基准元素p
	return p
}

//排序过程
let sort = (begin,end) =>{

	if(begin != end){
		let part = partion(begin,end)	//寻找基准点，基准点左侧是一部分，右侧是一部分
		sort(begin,part)	//递归
		sort(part.next,end)	//递归
	}
}