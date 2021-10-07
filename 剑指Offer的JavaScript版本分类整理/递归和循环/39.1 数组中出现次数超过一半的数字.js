/**
��Ŀ��
��������һ�����ֳ��ִ����������鳤�ȵ�һ�룬���ҳ��������
*/

/**
˼·һ������ö��
������Ȼ���ҳ��м��ֵ�����Ӷ�O(nlogn)
*/


/**
˼·��������O(n)�Ŀռ䣬��ȡʱ�临�Ӷ�O(n)
*/
function moreThanHalfNum(arr) {
    let help = {};
    for(let i=0,len=arr.length; i<len; ++i) {
        let temp = arr[i];
        if(help[temp]) {
            help[temp] += 1;
        } else {
            help[temp] = 1;
        }
    }
    let mid = Math.floor(arr.length / 2);
    for(let item in help) {
        //����һ��
        if(help[item] > mid) {
            return help[item];
        }
    }
    return 0;
}

/**
˼·����
���������������ԣ���������ֵ��һ���������е����֣���һ���Ǵ�����
���������Ϊ��0�����Ե�ǰֵΪ�µĻ�׼����countΪ1.
*/
function MoreThanHalfNum(arr) {
    if(arr.length <= 0) {
        return 0;
    }
    let result = arr[0],
        count = 1;
    for(let i=1, len=arr.length; i<len; ++i) {
        if(arr[i] === result) {
            ++count;
        } else {
            --count;
        }
        if(count === 0 && i!==len-1) {
            result = arr[i];
            count = 1;
        }
    }
    if(count === 0) {
        return 0;
    } else {
        return result;
    }
}
console.log(MoreThanHalfNum([1,2,3,2,2,2,5,4,2]));