/*
��Ŀ��
��һ�������ʼ�����ɸ�Ԫ�ذᵽ�����ĩβ�����ǳ�֮Ϊ�������ת��
Ҫ��
����һ�����������������һ����ת�������ת�������СԪ�ء�
*/

//��������ת�͵��������ԣ�ֱ�ӱ��������Ӷ�O(n)
function findMin(arr) {
    let min = arr[0];
    for(let i=1, len =arr.length; i<len; ++i) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//���ǵ��������ԣ���ת֮�����ֽ�Ծ,���Ӷ�Ҳ��O(n),��������һ�ξ���
function findMin(arr) {
    for(let i=1, len=arr.length; i<len; ++i) {
        if(arr[i] - arr[i - 1] < 0) {
            return arr[i];
        }
    }
}

//���ǵ�������ת���ԣ�ʹ�ö��ֲ��ң���Ϊ��������ע�����������������Ƿǵݼ�
//ţ�����ϲ���AC
function findMin(arr) {
    let start = 0,
        end = arr.length - 1;
    while(end - start != 1) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[start]) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return arr[end];
}
console.log(findMin([1,1,1,0,1]));