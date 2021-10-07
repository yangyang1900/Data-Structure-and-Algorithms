/**
��Ŀ��
����һ�ö��������������ö���������ת����һ�������˫������
Ҫ���ܴ����κ��µĽڵ㣬ֻ�ܵ������нڵ�ָ���ָ��
*/
function BinaryTreeNode(val) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
������������������Ľ����������Ľ��
˼·��
���ڵ㡢�����������������ڰ�����������ת��������˫������֮���ٺ͸��ڵ�����������
���ö�����Ҳ��ת����������˫�����������Եݹ��˼·
*/
function Convert(root)
{
    if(root === null) {
        return null;
    }
    
    let arr = [];
    inOrder(root, arr);
    let len = arr.length;
    for(let i=1; i<len; ++i) {
        arr[i].left = arr[ i - 1];
        arr[i].right = arr[i + 1];
    }
    arr[0].left = null;
    arr[0].right = arr[1];
    arr[len - 1].right = null;
    return arr[0];
}

//������������������鵱�У�Ȼ��Ϳ����޸�left��right��ֵ��
function inOrder(node, arr){
    if(node !== null) {
        inOrder(node.left, arr);
        arr.push(node);
        inOrder(node.right, arr);
    }
}