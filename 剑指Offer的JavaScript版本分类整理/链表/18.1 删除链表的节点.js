/**
��Ŀ��
��O(1)ʱ����ɾ������Ľڵ�
*/

function Node(val) {
    this.val = val;
    this.next = null;
}


/*˳����ң����Ӷ�O(n)*/
function deleteNode(head, node) {
    let next = null,
        pre = null;
    while(head !== node) {
        pre = head;
        head = head.next;
    }
    
    
    next = head.next;
    
    if(pre === null) {
        head.next = null;
    } else {
        pre.next = next;
    }
}

/*O(1)���Ӷȣ���Ϊ�Ѿ�֪���˽ڵ㣬����ֱ���õ�ǰ�ڵ�ָ�����¸��ڵ㣬���൱��ɾ���˸ýڵ�(���Ǵ˽ڵ�)*/
function deleteNode(head, node) {
    //Ҫɾ���Ľڵ㲻��β�ڵ�
    let next = null;
    if(node.next !== null) {
        //ֱ�Ӹ���
        next = node.next;
        node.val = next.val;
        node.next = next;
    }
    //������ֻ��һ���ڵ㣬ɾ��ͷ���(Ҳ��β�ڵ�)
    else if(head === node) {
        node = null;
        head = null;
    }
    //�������ж���ڵ㣬ɾ��β�ڵ㣨node��β�ڵ������£�Ҫ�ø��ڵ�ָ��null��ֱ�Ӹı�nodeΪnullû�ã�
    else {
        let pre = null;
        while(head !== node) {
            pre = head;
            head = head.next;
        }
        pre = null;
        head = null;
        /*
        while(head.next !== node) {
            head = head.next;
        }
        head.next = null;
        node = null;
        */
    }
}