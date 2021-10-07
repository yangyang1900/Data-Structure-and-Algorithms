/*
��Ŀ��
���ǰ�ֻ��������2��3��5��������������
Ҫ��
��С������˳��ĵ�1500������
*/

//����һ������
function isUgly(num) {
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    
    return num === 1 ? true : false;
}

function getUglyNumber(index) {
    if(index <= 0) {
        return 0;
    }
    
    let num = 0,
        uglyFound = 0;
    while(uglyFound < index) {
        ++num;
        if(isUgly(num)) {
            ++uglyFound;
        }
    }
    return num;
}


//���������ռ任ʱ�䣬����֮ǰ�ĳ�����Ȼ��ֱ����2��3��5���ڽ����������
function getUglyNumber(index) {
    if(index == 0){
        return 0;
    }
    var uglyArr = [1],
        two = 0,
        three = 0,
        five = 0;
    for(var i=1;i<index;i++){
        uglyArr[i] = Math.min(uglyArr[two]*2,uglyArr[three]*3,uglyArr[five]*5);
        if(uglyArr[i]==uglyArr[two]*2){
            two++;
        }
        if(uglyArr[i]==uglyArr[three]*3){
            three++;
        }
        if(uglyArr[i]==uglyArr[five]*5){
            five++;
        }
    }
    return uglyArr[index-1];
}

console.log(getUglyNumber(1500));