/*
* @Author: yangyang
* @Date:   2019-08-22 21:40:48
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 21:50:25
*/

/*
	顾名思义，循环链表的尾部指向它自己的头部。循环链表可以有单向循环链表，也可以有双向循环链表。
*/

function CircularLinkedList () {
  function Node (element) {
    this.element = element;
    this.next = null;
    this.prev = null;        // 新增
  }

  var length = 0;
  var head = null;
  var tail = null;          // 新增

  //链表里方法
  this.append = function (element) {};
  this.insert = function (position, element) {};
  this.removeAt = function (position) {};
  this.remove = function (element) {};
  this.indexOf = function (element) {};
  this.isEmpty = function () {};
  this.size = function () {};
  this.getHead = function () {};
  this.toString = function () {};
  this.print = function () {};

}

this.append (element) {
	let node = new LinkedList.Node(element);

	if (this.head === null) this.head = node;
	else {
	 let current = this.getElementAt(this.length - 1);
	 current.next = node;
	}

	node.next = this.head; // 将新添加的元素的next指向head
	this.length++;
}

this.insert (position, element) {
	// position不能超出边界值
	if (position < 0 || position > this.length) return false;

	let node = new LinkedList.Node(element);

	if (position === 0) {
	 node.next = this.head;
	 let current = this.getElementAt(this.length - 1);
	 current.next = node;
	 this.head = node;
	}
	else {
	 let previous = this.getElementAt(position - 1);
	 node.next = previous.next;
	 previous.next = node;
	}

	this.length++;
	return true;
}

this.removeAt (position) {
	if (position < 0 || position >= this.length) return null;

	let current = this.head;

	if (position === 0) this.head = current.next;
	else {
	 let previous = this.getElementAt(position - 1);
	 current = previous.next;
	 previous.next = current.next;
	}
	this.length--;

	if (this.length > 1) {
	 let last = this.getElementAt(this.length - 1);
	 last.next = this.head;
	}


	return current.element;
}

this.toString () {
	let current = this.head;
	let s = '';

	for (let i = 0; i < this.length; i++) {
	 let next = current.next;
	 next = next ? next.element : 'null';
	 s += `[element: ${current.element}, next: ${next}] `;
	 current = current.next;
	}

	return s;
}