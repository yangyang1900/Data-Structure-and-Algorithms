/*
* @Author: yangyang
* @Date:   2019-08-30 10:09:58
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-31 11:23:21
*/

/*
树数据结构的实现
参考文章：
《JavaScript数据结构与算法》
https://www.imooc.com/learn/888
https://www.cnblogs.com/xiaohuochai/p/8184989.html
*/

function BinarySearchTree(){

	var Node = function(key){ //声明一个Node类来表示树中的每个节点
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null; //根元素

	this.insert = function(key){ 
	  var newNode = new Node(key); //创建用来表示新节点的Node类实例，也就是创建一个键/节点
	  if (root === null){ //我们要插入的节点是树的第一个节点，如果是，就将根节点指向新节点  
	    root = newNode;   
	  } else {     
	    insertNode(root,newNode); //将节点加载非根节点的其他位置。这种情况下，需要一个私有的辅助函数 
	  } 
	};

	//如果树非空，需要找到插入新节点的位置。因此，在调用insertNode方法时要通过参数传入树的根节点和要插入的节点
	var insertNode = function(node, newNode){ 
	  
	  /*
		如果新节点的键小于当前节点的键（现在，当前节点就是根节点），那么需要检查当前节点的左侧子节点。
		如果它没有左侧子节点，就在那里插入新的节点。
		如果有左侧子节点，需要通过递归调用insertNode方法继续找到树的下一层。
		在这里，下次将要比较的节点将会是当前节点的左侧子节点
	  */
	  if (newNode.key < node.key){     
	    if (node.left === null){        
	      node.left = newNode;      
	    } else {       
	      insertNode(node.left, newNode);     
	    }   
	  } 
	  /*
		如果节点的键比当前节点的键大，同时当前节点没有右侧子节点，就在那里插入新的节点。
		如果有右侧子节点，同样需要递归调用insertNode方法，但是要用来和新节点比较的节点将会是右侧子节点
	  */
	  else {     
	    if (node.right === null){        
	      node.right = newNode;      
	    } else {      
	      insertNode(node.right, newNode);     
	    }   
	  }

	};

	// 节点的中序排序
    this.inOrderTraverse = function(node, callback) {
        if (node.left !== null) {
            this.infix(node.left, callback);
        }
        callback(node.key);
        if (node.right !== null) {
            this.infix(node.right, callback);
        }
    }

    //先序排序
    this.preOrderTraverseNode = function(node, callback) {

    	callback(node.key);
        if (node.left !== null) {
            this.infix(node.left, callback);
        }
        if (node.right !== null) {
            this.infix(node.right, callback);
        }

    }

    //后序排序
    this.postOrderTraverseNode = function(node, callback) {

        if (node.left !== null) {
            this.infix(node.left, callback);
        }
        if (node.right !== null) {
            this.infix(node.right, callback);
        }
        callback(node.key);

    }

}

// 输出函数|中序排序的回调函数
var dump=function(node){
	console.log(node);
}

