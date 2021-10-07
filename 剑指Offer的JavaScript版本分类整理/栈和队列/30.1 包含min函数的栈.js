/*
��Ŀ��
����ջ�����ݽṹ�����ڸ�������ʵ��һ���ܹ��õ�ջ����СԪ�ص�min������
Ҫ��
�ڸ�ջ�У�����min��push��pop��ʱ�临�Ӷȶ���O(1)��
*/

//��һ�������ռ䣬����ÿ������ʱ����Сֵ�����ͬʱ���浯����������ռ��ջ����СֵҲ�ᵯ��
function createStack(){
    let dataStack = [],
        minStack = [];
    
    const pop = function() {
        minStack.pop();
        return dataStack.pop();
    }
    
    const push = function(value) {
        dataStack.push(value);
        const len = minStack.length;
        if(len === 0 || minStack[len - 1] > value) {
            minStack.push(value);
        } else {
            minStack.push(minStack[len - 1]);
        }
    }
    
    const min = function() {
        return minStack[minStack.length - 1];
    }
    
    return {
        pop,
        min,
        push,
    }
}

let stack = createStack();
stack.push(5)
stack.push()