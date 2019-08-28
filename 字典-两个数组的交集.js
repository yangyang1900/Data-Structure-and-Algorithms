/*
* @Author: yangyang
* @Date:   2019-08-28 09:31:07
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 15:50:05
*/

/*
leetcode 350 两个数组的交集Ⅱ

给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
*/

//第一种方法：暴力循环
/*
时间复杂度O(n^2)

遍历第一个数组，然后在第二个数组查找是否有当前元素。

如果有，把当前元素push进返回值。然后把第二个数组里该下标元素删除。

优化一下，可以遍历length短的那个数组，在length长的数组里查找。
*/

var intersect = function(nums1,nums2){

	let res = [];

	if (nums1.length < nums2.length) [nums1,nums2] = [nums2,nums1];

	for(let i=0;i<nums1.length;i++){
		let key = nums2.indexOf(nums1[i])
		if(key !== -1) res.push(nums2.splice(key,1))
	}

	return res;
}

//第二种方法：哈希表
/*
时间复杂度O(n)

先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。

然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。

如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。

如果value值等于1，则删除该元素。
*/

var intersect = function(nums1,nums2){

	let hash = new Map();
	let res = [];

	for(let i=0;i<nums1.length;i++){ //遍历第一个数组
		if(hash.has(nums1[i])){	//如果字典/映射中有对应的值，key为数组值，value为出现次数
			hash.set(nums1[i],hash.get(nums1[i])+1)
		}else{
			hash.set(nums1[i],1)
		}
	}

	for(let i=0;i<nums2.length;i++){ //遍历第二个数组，如果有元素在字典/映射hash中，加入数组res，
										//同时针对次数value大于1的要减1，因为题目要求元素在两个数组中出现的次数一致。
										//对于等于1的，就删除该元素，因为我们是先添加到数组res中再判断次数value。
		let temp = nums2[i];
		let hasKey = has.get(temp)	//获取字典/映射中元素出现的次数hasKey
		if(hash.has(temp)){
			res.push(temp);
			if(hasKey>1){
				has.set(temp,hasKey-1);
			}else{
				hash.delete(temp)
			}
			
		}
		return res;
	}
}

//第三种方法：双指针
/*
两个数组排序
设定两个为0的指针，比较两个指针的元素是否相等
如果相等，元素push到返回值里，两个指针同时往前
如果不相等，元素小的指针往前
如果相等，那肯定比较过的元素就没用了，两个指针++

如果不相等，那把元素小的数组指针++。

因为大元素可能在小元素数组里存在，但是小元素在大元素所在数组肯定不存在。因为已经排过序了。
*/

var intersect = function(nums1,nums2){

	let p1=0;
	let p2=0;
	let res=[];

	nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)

    while(p1<nums1.length && p2<nums2.length){
    	if(nums1[p1] == nums2[p2]){
    		res.push(nums[p1])
    		p1++
    		p2++
    	}else if(nums1[p1]<nums2[p2]){
    		p1++
    	}else{
    		p2++
    	}
    }
    return res;
}





