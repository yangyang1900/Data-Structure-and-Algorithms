/*
��Ŀ��
����һ�Ŷ�������һ����������ӡ���������нڵ�ֵ�ĺ�Ϊ��������������·����
�����ĸ��ڵ㿪ʼ����һֱ��Ҷ�ڵ��������Ľڵ��γ�һ��·����
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/*
�Ӹ��ڵ㵽Ҷ�Ӳ���һ��·����ǰ���������һ��ջ����·���ڵ�ֵ�������ǰ�ۼ�ֵ����Ŀ��ֵ�������result��
ע��ǳ���������������
*/
function findPath(root, num) {
    if(root === null) {
        return [];
    }
    let path = [],
        result = [],
        currentSum = 0;
    findPathCore(root, num, path, currentSum, result);
    return result;
}

function findPathCore(root, num, path, currentSum, result) {
    currentSum += root.val;
    path.push(root.val);
    
    //�ж��Ƿ�ΪҶ�ӽڵ㣬��ΪҶ�ӽ�㣬��·���͵��������ֵ�������
    if(root.left === null && root.right === null && num === currentSum) {
        //result.push(path);����ǳ������path��ֵ���
        //ʹ��result.push([...path]);Ҳ��
        result.push([]);
        let temp = result[result.length - 1];
        for(let i=0,len=path.length; i<len; ++i) {
            temp.push(path[i]);
        }
    }
    
    if(root.left !== null) {
        findPathCore(root.left, num, path, currentSum, result);
    }
    if(root.right !== null) {
        findPathCore(root.right, num, path, currentSum, result);
    }
    path.pop();
}

let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1)
let left1 = new TreeNode(4)
let right1 = new TreeNode(5)
let left2 = new TreeNode(6)
let right2 = new TreeNode(7)
root.left = left;
root.right = right;
left.left = left1;
left.right = right1;
right.left = left2;
right.right = right2;
console.log(findPath(root, 11));
console.log(findPath(null, 11));