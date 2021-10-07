/*
��Ŀ��
ʵ��һ��clone����������һ����������
�ڸ��������У�ÿ���ڵ������һ��nextָ��ָ����һ���ڵ㣬
����һ��siblingָ��ָ�������е���һ�ڵ����null��
*/
function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}


/**
��ָoffer�Ľⷨ
��һ������ԭʼ�����ÿ���ڵ�N������Ӧ��N�������ǽ�N��������N�ĺ���
�ڶ������ø��Ƴ����Ľڵ��random��������ͬ
����������ֳ�2������������ԭʼ����ż��λ���Ǹ�������
*/
function clone(head) {
    if(!head){
       return null;
    }
    cloneNodes(head);
    connectRandomNodes(head);
    return splitNodesList(head);
}
//��һ�� ���Ƶ�������
function cloneNodes(head) {
    let pHead = head;
    while(pHead !== null) {
        let cloneHead = new RandomListNode(pHead.label);
        //���븴�ƽڵ㣬��ָ����һ���ڵ�
        cloneHead.next = pHead.next;
        //��һ���ڵ㣬ָ���ƵĽڵ�
        pHead.next = cloneHead;
        //�ı䵱ǰ�ڵ�Ϊ��ԭʼ�����е���һ���ڵ㡣
        pHead = cloneHead.next;
    }
}

//�ڶ��� ����random�ڵ�
function connectRandomNodes(head) {
    let pHead = head;
    while(pHead !== null) {
        let cloneNode = pHead.next;
        if(pHead.random) {
            //�޸�random�ĵط�����Ϊ���ƽڵ����ԭʼ�ڵ��next��
            cloneNode.random = pHead.random.next;
        }
        pHead = cloneNode.next;
    }
}

//������ ��������������Ƶ�����
//����λ���ϵĽڵ����ԭʼ����ż��λ���ϵĽڵ���ɸ��Ƴ���������
function splitNodesList(head) {
    let node = head,
        cloneHead = null,
        cloneNode = null;
    if(node !== null) {
        //��ȡ��������
        cloneHead = node.next;
        cloneNode = node.next;
        //��ȡԭʼ����
        node.next = cloneNode.next;
        node = node.next;
    }
    
    while(node !== null) {
        //���������nextָ��
        cloneNode.next = node.next;
        //��һ��ѭ��
        cloneNode = cloneNode.next;
        //ԭʼ�����nextָ��
        node.next = cloneNode.next;
        //��һ��ѭ��
        node = node.next;
    }
    return cloneHead; 
}

/*
ţ������A��Ĵ��롣��ʵ�����Ǵ�ģ���Ϊrandomָ��ԭ�ȵ�����ڵ�
�����Ǹ��ƺ������Ľڵ�
*/
/*
function clone(head) {
    let newHead = {};
    if(JSON.stringify(head) !== '{}') {
        newHead = new RandomListNode(head.label);
        if(head.next !== null) {
            newHead.next = clone(head.next);
        }
        if(head.random !== null) {
            newHead.random = head.random;
        }
    }
    return newHead;
}
*/

/**
�����ⷨ���ȹ���nextָ��ĵ�����Ȼ���ڱ���ԭ������ָ���λ��
���Ӷ�O(n^2)�����ز��Ե�ʱ�������ѭ������
*/
/*
function cloneSingleList(head) {
    let newHead = new RandomListNode(head.label);
    if(head.next !== null) {
        newHead.next = cloneSingleList(head.next);
    }
    return newHead;
}

function clone(head) {
    let newHead= cloneSingleList(head);
    let tempHead1 = head;
    let tempHead4 = head;
    let tempHead2 = newHead;
    let tempHead3 = newHead;
    let index = -1;
    while(head !== null) {
        let index = 0;
        if(head.random !== null) {
            while(tempHead1 !== null) {
                if(tempHead1 === head.random) {
                    break;
                }
                ++index;
                tempHead1 = tempHead1.next;
            }
            for(let i=0; i<index; ++i) {
                tempHead3 = tempHead3.next;
            }
            tempHead2.random = tempHead3;
            tempHead1 = tempHead4;                
        }
        head = head.next;
        tempHead2 = tempHead2.next;
    }
    return newHead;
}
*/
/**
ͨ��ʹ��O(n)�ĸ����ռ�Ĺ�ϣ����Դ�ڵ�͸��ƽڵ�����(λ��)��Ϣ<N, N'>�����ϣ��
Ȼ�������randomָ���ָ���ǣ��Ϳ�����O(1)��ʱ���ڸ���N->S���ҵ�N'->S'
*/



let node1 = new RandomListNode(1);
let node2 = new RandomListNode(2);
let node3 = new RandomListNode(3);
node1.next = node2;
node1.random = node3;
node2.next = node3;
//node3.random = node1;
console.log(clone(node1));
console.log(Clone(node1));