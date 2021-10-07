/*
��Ŀ��
����ĳ��������ǰ���������������Ľ�������ؽ��ö�������
Ҫ��
���������ǰ���������������Ľ���ж������ظ������֡�
���磬����ǰ���������{1,2,4,7,3,5,6,8}�������������{4,7,2,1,5,3,8,6}�����ؽ���������������������ͷ�ڵ�
*/

//�������ڵ�Ķ���
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function reBuildBinaryTree(preOrder, inOrder) {
    if(inOrder.length === 0) {
        return null;
    }
    
    let root = preOrder[0];
    let head = new Node(root);
    //������������Ҹ��ڵ�
    //let index = inOrder.indexOf(root);
    //����ķ��������ҵ�-1�����Ի���Ҫ����if(index === -1) return new Error("invalid input");
    let index = 0;
    while(inOrder[index] !== root) {
        ++index;
    }
    
    head.left = reBuildBinaryTree(preOrder.slice(1, index + 1), inOrder.slice(0, index));
    head.right = reBuildBinaryTree(preOrder.slice(index + 1), inOrder.slice(index + 1));
    
    return head;
}