/*
* @Author: yangyang
* @Date:   2019-08-22 20:59:07
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 21:11:48
*/

/*
单向链表和双向链表

参考文章：
http://ddrv.cn/a/392288/

*/

//单向链表 SinglyLinkedList
/*
SinglyLinkedList须要一个辅佐类Node。Node类示意要到场链表的项。
它包括一个element属性，即要增加到链表的值，以及一个next属性，即指向链表中下一个节点项的指针。
*/
function SinglyLinkedList () {
  function Node (element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;
  
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

//链表里方法（为了方便查看，放在了外面）
// 向链表尾部增加一个新的项
this.append = function (element) {
	var node = new Node(element);
	var currentNode = head;

	// 推断是不是为空链表
	if (currentNode === null) {
	  // 空链表
	  head = node;
	} else {
	  // 从head最先一向找到末了一个node
	  while (currentNode.next) {
	    // 背面另有node
	    currentNode = currentNode.next;
	  }
	  currentNode.next = node;
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
	    node.next = currentNode;
	    head = node;
	  } else {
	    while (index < position) {
	      index++;
	      previousNode = currentNode;
	      currentNode = currentNode.next; 
	    }

	    previousNode.next = node;
	    node.next = currentNode;
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
	    head = currentNode.next;
	  } else {
	    while (index < position) {
	      index++;
	      previousNode = currentNode;
	      currentNode = currentNode.next;
	    }
	    previousNode.next = currentNode.next;
	  }

	  length--;

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
	    head = currentNode.next;
	  } else {
	    while (index < position) {
	      index++;
	      previousNode = currentNode;
	      currentNode = currentNode.next;
	    }
	    previousNode.next = currentNode.next;
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

