/**
��Ŀ��
����һ���������飬ʵ��һ�����������������������ֵ�˳��ʹ����������λ�������ǰ�벿�֣�����ż��λ������ĺ�벿��
*/

//���Ըı����鱾��ǰ��˳��������(�����ȶ�)
function moveOddBeforeEven(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    
    let head = 0,
        len = arr.length,
        tail = len - 1,
        headFlag = true,
        tailFlag = true;
    
    while(head < tail) {
        headFlag = isOdd(arr[head]);
        tailFlag = isOdd(arr[tail]);
        if(headFlag && tailFlag) {
            ++head;
        } else if(!headFlag && tailFlag) {
            [arr[head], arr[tail]] = [arr[tail], arr[head]];
            ++head;
            --tail;
        } else if(headFlag && !tailFlag) {
            ++head;
            --tail;
        } else {
            --tail;
        }
    }
    return arr;
}

//������ж��������ѣ��ı��������������ʵ�ֱ�����򷽷�
function isOdd(num) {
    return num % 2;
}


//������˳�򣬱�����⣬�����ռ�O(2n)
function moveOddBeforeEven(arr) {
    let oddArr = [];
    let evenArr = [];
    for(let i=0,len=arr.length; i<len; ++i) {
        if(arr[i] % 2) {
            oddArr.push(arr[i]);
        } else {
            evenArr.push(arr[i]);
        }
    }
    return oddArr.concat(evenArr);
}

console.log(moveOddBeforeEven([1,2,3,4,5,6,7,8,9,10]))