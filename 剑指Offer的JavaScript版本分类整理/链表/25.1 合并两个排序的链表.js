/*
��Ŀ��
����������������������ϲ�����������ʹ�������еĽڵ���Ȼ�ǵ�������ġ�
*/

function ListNode(val) {
    this.val = val;
    this.next = next;
}

function mergeList(head1, head2) {
    if(head1 === null) {
        return head2;
    } else if(head2 === null) {
        return head1;
    }
    let resultHead = new ListNode();
    //һ���ڵ�ͬ���ݹ���ȥ
    if(head1.val < head2.val) {
        resultHead.val = head1.val;
        resultHead.next = mergeList(head1.next, head2);
    } else {
        resultHead.val = head2.val;
        resultHead.next = mergeList(head1, head2.next);
    }
    
    return resultHead;
}