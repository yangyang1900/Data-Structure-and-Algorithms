/*
* @Author: yangyang
* @Date:   2019-08-28 09:04:25
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 09:27:50
*/

/*
leetcode 349 两个数组的交集

给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
说明:

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
*/

//也可以...尝试交集运算
let intersection = function(nums1, nums2) {
    let intersectionSet = new Set();
    
    nums1.forEach(item =>{
        if(nums2.indexOf(item) != -1){
            intersectionSet.add(item)
        }
    })
    
    return Array.from(intersectionSet); //[...instersectionSet]也可以
    
};