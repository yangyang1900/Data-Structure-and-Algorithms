/*
* @Author: yangyang
* @Date:   2019-08-25 23:08:37
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-26 09:22:38
*/

/*
环形链表

leetcode 141题 环形链表

给定一个链表，判断链表中是否有环

为了表示给定链表中的环，我们使用整数pos来表示链表尾连接到链表中的位置（索引从0开始）。如果pos是-1，则在该链表中没有环

示例1：
输入： head = p3,2,0,-4],pos=1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点

思路（有两种情况说明是环形链表）：
1.快指针遇到了慢指针
2.快指针到慢指针后面了
附注：快指针每次走两步，慢指针每次走一步

*/

//1.构造链表结构
class Node {
	constructor(value){
		this.val = value
		this.next = undefined
	}
}

class NodeList {
	constructor(arr){
		//声明链表的头部节点
		let head = new Node(arr.shift())
		let next = head

		arr.forEach(item => {
			next.next = new Node(item)
			next = next.next
		})
	}
}

//2.判断是不是环形链表
function isCircle(head){

	//慢指针
	let slow = head
	//快指针
	let fast = head.next

	while(true){
		if(!fast || !fast.next){ //如果是单节点链表或者fast.next为undefined，也就是两个节点链表且不是环状，返回false
			return false
		}else if(fast === slow || fast.next === slow){
			return true
		} else{
			slow = slow.next
			fast = fast.next.next
		}
	}

}

//测试代码
let head  = new  NodeList([6,1,2,5,7,9])
head.next.next.next.next.next.next = head.next //设置环状
isCircle(head)



