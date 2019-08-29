/*
* @Author: yangyang
* @Date:   2019-08-25 14:14:22
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-29 13:37:28
*/

/*

找到数组最小的元素，将它和数组红第一个元素交换位置，接下来，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置，
往复如此，直到将整个数组排序。基本点就是不断地选择剩余元素之中的最小者。

参考文章：https://segmentfault.com/a/1190000006208245

*/

function select(array){
    var len=array.length;
    for(var i=0;i<len-1;i++){  //这里之所以是len-1，是因为到最后两个元素，交换位置，整个数组就已经排好序了。
        var minnum=array[i];
        for(var j=i+1;j<len;j++){ // j=i+1是把与自己比较的情况给省略掉
            if(array[j]<minnum){
              var c;
              c=minnum;
              minnum=array[j];    //交换两个值
              array[j]=c;
            }
        }
        array[i]=minnum;      
    }
    return array;

}