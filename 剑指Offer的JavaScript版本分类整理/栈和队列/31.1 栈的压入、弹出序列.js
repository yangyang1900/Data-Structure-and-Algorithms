/*
��Ŀ��
���������������У���һ�����б�ʾջ��ѹ��˳�����жϵڶ��������Ƿ�Ϊ��ջ�ĵ���˳��
����ѹ����������־�����ͬ��

���磺
����{1,2,3,4,5}��ĳջ��ѹջ���У�����{4,5,3,2,1}�Ǹ�ѹջ���ж�Ӧ��һ���������У�
��{4,3,5,1,2}�Ͳ������Ǹ�ѹջ���еĵ�������
*/


/*
˼·��
�����һ�����������ָպ���ջ�����֣���ôֱ�ӵ����������һ�����������ֲ���ջ����
���ѹջ�����л�û����ջ������ѹ�븨��ջ��ֱ������һ����Ҫ����������ѹ��ջ��Ϊֹ��
����������ֶ�ѹ��ջ����Ȼû���ҵ���һ�����������֣���ô�����в�������һ���������С�
*/
function isPopOrder(pushV, popV) {
    let helpStack = [];
    
    while(pushV.length !== 0 || popV.length !== 0) {
        if(helpStack[helpStack.length - 1] === popV[0]) {
            helpStack.pop();
            popV.shift();
        } else {
            let index = pushV.indexOf(popV[0]);
            if(index !== -1) {
                for(let i=0; i<=index; ++i) {
                    helpStack.push(pushV.shift());
                }
                helpStack.pop();
                popV.shift();
            } else {
                break;
            }
        }       
    }
    return popV.length === 0 ? true : false;
}

console.log(isPopOrder([1,2,3,4,5],[4,5,3,2,1]))