/**
��Ŀ��
����һ����������������е�����k���ڵ㡣
Ҫ��
Ϊ�˷��ϴ�����˵�ϰ�ߣ������1��ʼ�������������β�ڵ��ǵ�����һ���ڵ㡣
���磺
һ��������6���ڵ㣬��ͷ�ڵ㿪ʼ�����ǵ�ֵ������1��2��3��4��5��6.�������ĵ����������ڵ���ֵΪ4�Ľڵ㡣
*/


/*
ͨ��˼·��
��������һ��ָ����������ܽ�������ʱ�򣬿��Գ���������ָ���������������Ǵ�ͷ�ڵ������
����������һ��ָ��������ٶȿ�һЩ������һ�������������м�ڵ�ʱ���������������������������ɲ���
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

//������������
function kNodeInList(head, k) {
    if(head === null || k === 0) {
        return null;
    }
    
    let len = 0;
    let tempNode = head;
    while(tempNode) {
        tempNode = tempNode.next;
        ++len;
    }
    
    if(k > len) {
        return null;
    }
    
    let index = len - k + 1;
    result = head;
    for(let i=1; i< index; ++i) {
        result = result.next;
    }
    return result;
}

//ֻ����һ������������ָ�룬����֮��ľ������k-1
//βָ������k-1��������k��������ָ��һ���ߡ���βָ��ﵽ����β�ڵ�ʱ��ͷָ���λ�þ��ǵ�����k��
function kNodeInList(head, k) {
    if(head === null || k === 0) {
        return null;
    }
    
    let pHead = tail;
    let pTail = tail;
    for(let i=0; i<k-1; ++i) {
        if(pTail.next) {
            pTail = pTail.next;
        } else {
            return null;
        }       
    }
    
    while(pTail.next) {
        pTail = pTail.next;
        pHead = pHead.next;
    }
    return pHead;
}