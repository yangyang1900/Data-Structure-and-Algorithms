/*
* @Author: yangyang
* @Date:   2019-08-29 10:29:30
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-29 10:50:37
*/

/*
给一个数组，去一个已经排好序的数组中寻找这个数的位置（通过快速查找，二分查找）
参考文章:https://www.cnblogs.com/pssp/p/6130883.html
*/

//第一种方法：二分查找
function binarySearch(target,arr,start,end){

	var start = start || 0;
	var end = end || arr.length-1;

	var mid = parseInt(start + (end-start)/2);

	if(target == arr[mid]){
		return mid
	}else if(target>arr[mid]){
		return binarySearch(target,arr,mid+1,end)
	}else{
		return binarySearch(target,arr,start,mid-1)
	}
	return -1;
}

//第二种方法：先将arr转换成字符串，然后使用字符串的indexOf
function indexOf(arr, item) {
  return arr.join("").indexOf(item);
}

//第三种方法：直接使用数组的indexOf
function indexOf(arr, item) {
  return arr.indexOf(item);
}

//第四种方法:使用for循环
function indexOf(arr, item) {
  for(let [i,x] of arr.entries()){
    if(x===item)return i;
  }
  return -1;
}

//第五种方法：使用findIndex方法
function indexOf(arr, item) {
  return arr.findIndex(value=>value===item);
}

