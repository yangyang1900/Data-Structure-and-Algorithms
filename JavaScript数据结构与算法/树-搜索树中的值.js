/*
* @Author: yangyang
* @Date:   2019-08-31 10:33:04
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-31 15:31:38
*/

/*
1.搜索最小值和最大值
2.搜索一个特定的值
3.移除一个节点

附注一个注意点：
为什么添加return，是为了退出上一轮 `searchNode`，以免产生调用栈，如果不加 `return` 那在结束之后是是会层层回退到第一次调用，返回其结果。
*/

//1.搜索最小值和最大值（根据二叉搜索树特点，最小值是最左侧节点，最大值是最右侧节点）
min(){
	return this.minNode(this.root);
}

minNode(node){
	let current = node;
	while(current != null && current.left != null){
		current = current.left;
	}
	return current;
}

max(){
	return this.maxNode(this.root)
}
maxNode(node){
	let current = node;
	while(current != null && current.right != null){
		current = current.right;
	}
	return current;
}

//2.搜索特定值
search(key){
	return this.serachNode(this.root,key);
}
searchNode(node,key){
	if(node == null){
		return false;
	}
	if(key < node.key){
		return searchNode(node.left,key);	//退出上一轮 `searchNode`，以免产生调用栈，如果不加 `return` 那在结束之后是是会层层回退到第一次调用，返回其结果。
	}else if(key > node.key){
		return searchNode(node.right,key);
	}else{
		return true;
	}
}

//3.移除一个节点
var removeNode = function(node, key){ 
  if (node === null){     
    return null;   
  } 
  if (key < node.key){     
    node.left = removeNode(node.left, key); 
    return node; 
  } else if (key > node.key){    
    node.right = removeNode(node.right, key);     
    return node; 
  } else { //键等于node.key 
    //第一种情况——一个叶节点     
    if (node.left === null && node.right === null){      
      node = null;  //但是仅仅赋一个null值是不够的，还需要处理指针。   
      return node;  //在这里，这个节点没有任何子节点，但是它有一个父节点，需要通过返回null来将对应的父节点指针赋予null值       
    } 
    //第二种情况——一个只有一个子节点的节点     
    if (node.left === null){        
      node = node.right; //如果这个节点没有左侧子节点，也就是说它有一个右侧子节点。
      return node;  //因此我们把对它的引用改为对它右侧子节点的引用，并返回更新后的节点。
    } else if (node.right === null){        
      node = node.left;        
      return node;      
    } 
    //第三种情况——一个有两个子节点的节点 
    /*
	要移除有两个子节点的节点，需要执行四个步骤。
	(1)当找到了需要移除的节点后，需要找到它右边子树中最小的节点（它的继承者）；
	(2)然后，用它右侧子树中最小节点的键去更新这个节点的值。通过这一步，改变了这个节点的键，也就是说它被移除了；
	(3)但是，这样在树中就有两个拥有相同键的节点了，这是不行的。要继续把右侧子树中的最小节点移除，毕竟它已经被移至要移除的节点的位置了；
	(4)最后，向它的父节点返回更新后节点的引用。
    */    
    var aux = findMinNode(node.right);      
    node.key = aux.key;      
    node.right = removeNode(node.right, aux.key);      
    return node;    
  } 
};

//完整代码
function BinarySearchTree() {

    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.insert = function(key){

        var newNode = new Node(key);

        //special case - first element
        if (root === null){
            root = newNode;
        } else {
            insertNode(root,newNode);
        }
    };

    var insertNode = function(node, newNode){
        if (newNode.key < node.key){
            if (node.left === null){
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null){
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.getRoot = function(){
        return root;
    };

    this.search = function(key){

        return searchNode(root, key);
    };

    var searchNode = function(node, key){

        if (node === null){
            return false;
        }

        if (key < node.key){
            return searchNode(node.left, key);

        } else if (key > node.key){
            return searchNode(node.right, key);

        } else { //element is equal to node.item
            return true;
        }
    };

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    this.min = function() {
        return minNode(root);
    };

    var minNode = function (node) {
        if (node){
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key;
        }
        return null;
    };

    this.max = function() {
        return maxNode(root);
    };

    var maxNode = function (node) {
        if (node){
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }
        return null;
    };

    this.remove = function(element){
        root = removeNode(root, element);
    };

    var findMinNode = function(node){
        while (node && node.left !== null) {
            node = node.left;
        }

        return node;
    };

    var removeNode = function(node, element){

        if (node === null){
            return null;
        }

        if (element < node.key){
            node.left = removeNode(node.left, element);
            return node;

        } else if (element > node.key){
            node.right = removeNode(node.right, element);
            return node;

        } else { //element is equal to node.item

            //handle 3 special conditions
            //1 - a leaf node
            //2 - a node with only 1 child
            //3 - a node with 2 children

            //case 1
            if (node.left === null && node.right === null){
                node = null;
                return node;
            }

            //case 2
            if (node.left === null){
                node = node.right;
                return node;

            } else if (node.right === null){
                node = node.left;
                return node;
            }

            //case 3
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };
}
