/*
��Ŀ��
һֻ����һ�ο�������1��̨�ף�Ҳ��������2��̨��
Ҫ��
��������һ��n��̨���ܹ��ж���������
*/

//˼·������һ��쳲��������У�f(n) = f(n-1) + f(n-2)����Ϊ��һ����Ծ������1������ʱ������Ŀ����f(n-1)��Ҳ������2��,��ʱ������Ŀ��f(n-2)�������ͬ��
function fib(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    return fib(n - 1) + fib(n - 2);
}

function jumpFloor(n)
{
    // write code here
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    let pre = 1,
        current = 2,
        temp = 0,
        i = 3;
    while(i <= n) {
        temp = pre;
        pre = current;
        current = temp + current;
        ++i;
    }
    return current;
}


//��̬��̨�ף�ÿ������1~n������ѧ����f(n) = 2^(n-1)