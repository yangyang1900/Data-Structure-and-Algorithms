/*
* @Author: yangyang
* @Date:   2019-08-22 21:13:34
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 21:24:01
*/

/*
双向链表
双向链表和一般链表的区分在于，在一般链表中，一个节点只要链向下一个节点的链接，
而在双向链表中，链接是双向的：一个链向下一个元素，另一个链向前一个元素。

双向链表供应了两种迭代列表的要领：从头至尾，或许从尾到头。我们能够接见一个特定节点的下一个或前一个元素。
*/

// 建立双向链表DoublyLinkedList类
/*
能够看到，双向链表在Node类里有prev属性（一个新指针），
在DoublyLinkedList类里也有用来保留对列表末了一项的援用的tail属性。
*/
function DoublyLinkedList () {
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

//链表里方法
// 向链表尾部增加一个新的项
this.append = function (element) {
	var node = new Node(element);
	var currentNode = tail;

	// 推断是不是为空链表
	if (currentNode === null) {
	  // 空链表
	  head = node;
	  tail = node;
	} else {
	  currentNode.next = node;
	  node.prev = currentNode;
	  tail = node; 
	}

	length++;
};

// 向链表特定位置插进去一个新的项
this.insert = function (position, element) {
	if (position < 0 && position > length) {
	  // 越界
	  return false;
	} else {
	  var node = new Node(element);
	  var index = 0;
	  var currentNode = head;
	  var previousNode;

	  if (position === 0) {
	    if (!head) {
	      head = node;
	      tail = node;
	    } else {
	      node.next = currentNode;
	      currentNode.prev = node;
	      head = node;
	    }
	  } else if (position === length) {
	    this.append(element);
	  } else {
	    while (index < position) {
	      index++;
	      previousNode = currentNode;
	      currentNode = currentNode.next; 
	    }

	    previousNode.next = node;
	    node.next = currentNode;

	    node.prev = previousNode;
	    currentNode.prev = node;
	  }

	  length++;

	  return true;
	}
};

// 从链表的特定位置移除一项
this.removeAt = function (position) {
	if (position < 0 && position >= length || length === 0) {
	  // 越界
	  return false;
	} else {
	  var currentNode = head;
	  var index = 0;
	  var previousNode;

	  if (position === 0) {
	    // 移除第一项
	    if (length === 1) {
	      head = null;
	      tail = null;
	    } else {
	      head = currentNode.next;
	      head.prev = null;
	    }
	  } else if (position === length - 1) {
	    // 移除末了一项
	    if (length === 1) {
	      head = null;
	      tail = null;
	    } else {
	      currentNode = tail;
	      tail = currentNode.prev;
	      tail.next = null;
	    }
	  } else {
	    while (index < position) {
	      index++;
	      previousNode = currentNode;
	      currentNode = currentNode.next;
	    }
	    previousNode.next = currentNode.next;
	    previousNode = currentNode.next.prev;
	  }

	  length--;

	  return true;
	}
};

// 从链表中移除指定项
this.remove = function (element) {
	var index = this.indexOf(element);
	return this.removeAt(index);
};

// 返回元素在链表的索引，假如链表中没有该元素则返回-1
this.indexOf = function (element) {
	var currentNode = head;
	var index = 0;

	while (currentNode) {
	  if (currentNode.element === element) {
	    return index;
	  }

	  index++;
	  currentNode = currentNode.next;
	}

	return -1;
};

// 假如链表中不包括任何元素，返回true，假如链表长度大于0，返回false
this.isEmpty = function () {
	return length == 0;
};

// 返回链表包括的元素个数，与数组的length属性相似
this.size = function () {
	return length;
};

// 猎取链表头部元素
this.getHead = function () {
	return head.element;
};

// 因为链表运用了Node类，就须要重写继续自JavaScript对象默许的toString()要领，让其只输出元素的值
this.toString = function () {
	var currentNode = head;
	var string = '';

	while (currentNode) {
	  
	  string += ',' + currentNode.element;
	  currentNode = currentNode.next;
	}

	return string.slice(1);    
};

this.print = function () {
	console.log(this.toString());
};

