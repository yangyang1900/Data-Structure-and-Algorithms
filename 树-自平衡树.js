/*
* @Author: yangyang
* @Date:   2019-08-31 10:34:06
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-31 15:40:05
*/

/*
自平衡树：
1.AVL树
2.红黑树
*/

//1.AVL树
function AVLTree() {

    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.getRoot = function(){
        return root;
    };

    var heightNode = function(node) {
        if (node === null) {
            return -1;
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
        }
    };

    var rotationLL = function(node) {
        var tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;

        return tmp;
    };

    var rotationRR = function(node) {
        var tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;

        return tmp;
    };

    var rotationLR = function(node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
    };

    var rotationRL = function(node) {
        node.right = rotationLL(node.right);
        return rotationRR(node);
    };

    var insertNode = function(node, element) {

        if (node === null) {
            node = new Node(element);

        } else if (element < node.key) {

            node.left = insertNode(node.left, element);

            if (node.left !== null) {

                if ((heightNode(node.left) - heightNode(node.right)) > 1){
                    if (element < node.left.key){
                        node = rotationLL(node);
                    } else {
                        node = rotationLR(node);
                    }
                }
            }
        } else if (element > node.key) {

            node.right = insertNode(node.right, element);

            if (node.right !== null) {

                if ((heightNode(node.right) - heightNode(node.left)) > 1){

                    if (element > node.right.key){
                        node = rotationRR(node);
                    } else {
                        node = rotationRL(node);
                    }
                }
            }
        }

        return node;
    };

    this.insert = function(element) {
        root = insertNode(root, element);
    };

    var parentNode;
    var nodeToBeDeleted;

    var removeNode = function(node, element) {
        if (node === null) {
            return null;
        }
        parentNode = node;

        if (element < node.key) {
            node.left = removeNode(node.left, element);
        } else {
            nodeToBeDeleted = node;
            node.right = removeNode(node.right, element);
        }

        if (node === parentNode) { //remove node
            if (nodeToBeDeleted !== null && element === nodeToBeDeleted.key) {
                if (nodeToBeDeleted === parentNode) {
                    node = node.left;
                } else {
                    var tmp = nodeToBeDeleted.key;
                    nodeToBeDeleted.key = parentNode.key;
                    parentNode.key = tmp;
                    node = node.right;
                }
            }
        } else { //do balancing

            if (node.left === undefined) node.left = null;
            if (node.right === undefined) node.right = null;

            if ((heightNode(node.left) - heightNode(node.right)) === 2) {
                if (element < node.left.key) {
                    node = rotationLR(node);
                } else {
                    node = rotationLL(node);
                }
            }

            if ((heightNode(node.right) - heightNode(node.left)) === 2) {
                if (element > node.right.key) {
                    node = rotationRL(node);
                } else {
                    node = rotationRR(node);
                }
            }
        }

        return node;
    };

    this.remove = function(element) {
        parentNode = null;
        nodeToBeDeleted = null;
        root = removeNode(root, element);
    };
}

//2.红黑树
function RedBlackTree() {

    var Colors = {
        RED: 0,
        BLACK: 1
    };

    var Node = function (key, color) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.color = color;

        this.flipColor = function(){
            if (this.color === Colors.RED) {
                this.color = Colors.BLACK;
            } else {
                this.color = Colors.RED;
            }
        };
    };

    var root = null;

    this.getRoot = function () {
        return root;
    };

    var isRed = function(node){
        if (!node){
            return false;
        }
        return node.color === Colors.RED;
    };

    var flipColors = function(node){
        node.left.flipColor();
        node.right.flipColor();
    };

    var rotateLeft = function(node){
        var temp = node.right;
        if (temp !== null) {
            node.right = temp.left;
            temp.left = node;
            temp.color = node.color;
            node.color = Colors.RED;
        }
        return temp;
    };

    var rotateRight = function (node) {
        var temp = node.left;
        if (temp !== null) {
            node.left = temp.right;
            temp.right = node;
            temp.color = node.color;
            node.color = Colors.RED;
        }
        return temp;
    };

    var insertNode = function(node, element) {

        if (node === null) {
            return new Node(element, Colors.RED);
        }

        var newRoot = node;

        if (element < node.key) {

            node.left = insertNode(node.left, element);

        } else if (element > node.key) {

            node.right = insertNode(node.right, element);

        } else {
            node.key = element;
        }

        if (isRed(node.right) && !isRed(node.left)) {
            newRoot = rotateLeft(node);
        }

        if (isRed(node.left) && isRed(node.left.left)) {
            newRoot = rotateRight(node);
        }
        if (isRed(node.left) && isRed(node.right)) {
            flipColors(node);
        }

        return newRoot;
    };

    this.insert = function(element) {
        root = insertNode(root, element);
        root.color = Colors.BLACK;
    };
}

