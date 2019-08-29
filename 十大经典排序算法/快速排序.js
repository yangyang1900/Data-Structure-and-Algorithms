/*
* @Author: yangyang
* @Date:   2019-08-25 09:01:32
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-29 13:23:09
*/

/*
先考虑数组的快速排序，而且有借助新的数组或者不借助新的数组的方式，我们都列举出来
参考文章：
https://juejin.im/post/5966f57051882568b20dc3e1
https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/6.quickSort.md
https://www.jianshu.com/p/f5b157a974b0
https://juejin.im/post/5966f57051882568b20dc3e1#heading-8
*/

//方法一：借助新的数组，这种比较好理解
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};

//方法二：不借助新数组
function quickSort(arr, left, right) {
    /*
     * len为数组的长度;
     * left为需要数组中参与排序的起始点；right为数组中参与排序的终止点;
     * left如果有传数字那么就为left，没有传参则为0；
     * right如果有传参那么就为right，没有传参则为len-1;
     * 有传参可能会部分排序可能不会排序，没传参默认排序整个数组;
     * partitionIndex为分组界限;
     */
    var len = arr.length,
        partitionIndex,
        left = typeof left !== 'number' ? 0 : left,
        right = typeof right !== 'number' ? len - 1 : right;

    // 如果需要排序的起始索引小于终止索引则执行排序;递归的终止条件；
    if (left < right) {

        // partition的返回值作为partitionIndex来分隔数组；
        // 索引partitionIndex左边的元素均小于arr[partitionIndex]；
        // 右边的元素均大于arr[partitionIndex]；
        partitionIndex = partition(arr, left, right);

// 数组中小于arr[partitionIndex]的部分(索引left到partitionIndex-1)再次使用quickSort排序；
        quickSort(arr, left, partitionIndex - 1);

// 数组中大于arr[partitionIndex]的部分(索引partitionIndex+1到right)再次使用quickSort排序；
        quickSort(arr, partitionIndex + 1, right);
    }
    // 递归执行直到不满足left<right;返回本身；
    return arr;
}

function partition(arr, left, right) {
    /*
     * 这部分是具体实现排序的部分；
     * 将left赋值给pivot，作为参照物，因为left在最左边，只需要从左到右比较一遍即可判断整个数组；
     * index索引是arr中待交换位置；
     */
    var pivot = left,
        index = pivot + 1;
    // for循环从参照物arr[pivot]下一个元素arr[pivot+1]开始一直比较到子数组结束arr[right]；
    for (var i = index; i <= right; i++) {

  // 循环中如果有任何小于参照物的，就将他交换到index的位置，然后index向右移动到下一个位置；
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    /*
     * 因为每次都是交换完后index移动到下一个位置，所以在循环结束时，index仍为待交换的位置；
     * 此时索引pivot+1到index-1的元素都小于参照物arr[pivot]；
     */

    // 交换pivot和index-1索引的值之后index-1索引左边全都是小于arr[index-1]的元素；
    swap(arr, pivot, index - 1);

    // 返回index-1作为拆分子数组的分界线；
    return index - 1;
}
/*
 * 普通的交换，将a[i]和a[j]的数值交换；
 */
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
