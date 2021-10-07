/*
��Ŀ��
��������ͷ��㣬��ת����
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/*
˼·��
�������ڵ��˽ڵ�i�������õ�i+1�Ľڵ㱣����nextNode���У���ֹ������Ȼ��i�ڵ��nextָ��i-1�ڵ㣬���i-1�ڵ㱣����pre���С�
Ȼ����preΪ��ǰ�ڵ�i����һ���ڵ���nextNode

Ҳ����nextNode = pHead.next;
pHead.next = pre;
pre = pHead;
pHead = nextNode;
���pHead�ڵ�Ϊnull����ʾ���������ɣ�������һ��pre������ת���ͷ���
*/
function reverseList(head) {
    let pHead = head;
    //��ʼ��
    let pre = null;//������һ���ڵ㣬֮��ڵ��ָ��
    let nextNode = null;//������һ���ڵ㣬������
    while(pHead) {
        nextNode = pHead.next; 
        pHead.next = pre;
        pre = pHead;
        pHead = nextNode;
    }
    return pre;
}