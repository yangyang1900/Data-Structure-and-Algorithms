/**
��Ŀ��
����n���������ҳ�������С��k����
*/

/**
˼·һ��������Ȼ�����ҳ���С�ġ������п�������ܴ󣬻ᳬʱ
*/

/**
˼·�������ó���ΪK�����飬����k��Ŀǰ��С������Ȼ��ÿ���ҵ���������ֵ�͵�ǰֵ���Ƚ�
*/
function getLeastNums(array, k) {
    let len = array.length;
    if(k > len) {
        return false;
    }
    let arr = array.slice(0, k),
        maxIndex = findMaxIndex(arr),
        max = arr[maxIndex];
    for(let i=k; i<len; ++i) {
        if(array[i] < max) {
            arr[maxIndex] = array[i];
            maxIndex = findMaxIndex(arr);
            max = arr[maxIndex];
            
        }
    }
    return arr.sort((a, b) => a - b);
}
function findMaxIndex(arr) {
    let max = arr[0],
        index = 0;
    for(let i=1,len=arr.length; i<len; ++i) {
        if(max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(getLeastNums([4,5,1,6,2,7,3,8], 4));