/*
* @Author: yangyang
* @Date:   2019-08-21 16:38:54
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-21 16:51:49
*/

/*
	栈数据结构
*/

//我们基于ES5 将利用数组来表示栈
function Stack() {
  //我们需要一种数据结构来保存栈里的元素，可以选择数组
  var items = [];
  this.push = function(element){//添加一个（或几个）新元素到栈顶
    items.push(element);
  };
  this.pop = function(){//移除栈顶的元素，同时返回被移除元素
    return items.pop();
  };
  this.peek = function(){//返回栈顶的元素，但并不对栈做任何修改
    return items[items.length-1];
  };
  this.isEmpty = function(){//如果栈内没有任何元素就返回true，否则返回false
    return items.length == 0;
  };
  this.size = function(){//返回栈里的元素个数
    return items.length;
  };
  this.clear = function(){//移除栈里的所有元素
    items = [];
  };
  this.print = function(){//打印
    console.log(items.toString());
  };
  this.toString = function(){
    return items.toString();
  };
}

//基于ES6 将利用对象来创建一个栈

class Stack{

	constructor(){
		this.count = 0;		//count属性来帮助我们记录栈的大小，也能帮助我们从数据结构中添加和删除元素
		this.items = {}
	}

	push(element){
		this.items.push(element)
		this.count++
	}

	size
}
