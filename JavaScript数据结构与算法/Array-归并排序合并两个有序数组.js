/*
* @Author: yangyang
* @Date:   2019-08-29 10:56:48
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-29 12:15:40
*/

/*
使用归并排序合并两个有序的数组
参考文章：https://blog.csdn.net/u012194956/article/details/79388856
*/

function mergeArray(arr1,arr2){
	var ind1=0; //标记arr1的对比元素的初始索引值
	var ind2=0; //标记arr2的对比元素的初始索引值
	var arr=[]; //作为输出的新数组
	while(ind1<arr1.length && ind2<arr2.length){ //当arr1和arr2元素均未全部存入arr中，则从第一个元素开始进行比较，将较小的那个元素存入arr
		if(arr1[ind1]<=arr2[ind2]){
			arr.push(arr1.slice(ind1,ind1+1)[0]); //若arr1的对比元素小于arr2的对比元素，则将arr1的对比元素存入arr中
			ind1++;
		}else{
			arr.push(arr2.slice(ind2,ind2+1)[0]);
			ind2++;
		}
	}
	while(ind1<arr1.length){ //当arr2的元素已全部存入arr中，则直接将arr1剩余的所有元素依次存入arr
		arr.push(arr1.slice(ind1,ind1+1)[0]);
		ind1++;
	}
	while(ind2<arr2.length){ //当arr1的元素已全部存入arr中,则直接将arr2剩余的所有元素依次存入arr
		arr.push(arr2.slice(ind2,ind2+1)[0]);
		ind2++;
	}
	return arr;
}
