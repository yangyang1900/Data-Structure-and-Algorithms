/*
��Ŀ��
�����һ������������һ�ö��������ú���������ľ���
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/*
˼·�������Ŀ��Ҫ�޸�ԭ������
��ǰ������������ÿ���ڵ㣬����������Ľڵ����ӽڵ㣬�ͽ������������ӽڵ�
*/
function mirror(root) {
    //�������µĽ�����ֱ��ִ�У�û�з���ֵ
    if(!root) {
        return;
    }
    if(!root.left && !root.right) {
        return;
    }
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    if(root.left) {
        mirror(root.left);
    }
    if(root.right) {
        mirror(root.right);
    }
}



/*
����Ƿ����µ�һ������û���޸�ԭ������
*/
function mirrorTree(root) {
    //�ݹ���ֹ����
    if(root === null) {
        return null
    } 
    
    let newRoot = new TreeNode(root.val);
    
    newRoot.left = mirrorTree(root.right);
    newRoot.right = mirrorTree(root.left);
    return newRoot;
}
