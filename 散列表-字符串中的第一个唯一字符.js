/*
* @Author: yangyang
* @Date:   2019-08-28 13:38:34
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 15:09:00
*/

/*

leetcode 387题 字符串这第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
 
注意事项：您可以假定该字符串只包含小写字母。

*/

//第一种方法：Map
//解题思路：第一遍遍历，存进map，重复的把value置为-1；第二遍遍历，找出第一个value不为-1的i
var first = function(s){
	let m = new Map();
	for(let i=0;i<s.length;i++){
		if(m.has(s[i])){
			m.set(s[i],-1);
		}else{
			m.set(s[i],i);
		}
	}

	for(let i=0;i<s.length;i++){
		let v = m.get(s[i])
		if(v!=-1){
			return i;
		}
	}

	return -1;
}

//第二种方法：indexOf和lastIndexOf实现
var firstUniqChar = function(s){
	for(let v of v){
		if(s.indexOf(v) === s.lastIndexOf(v)){
			return s.indexOf(v);
		}
	}
	return -1;
}

//第三种方法：HashTable/散列表/哈希表
/*
哈希函数：把我们所关心的类型转换成所对应索引的函数
本题中，我们可以把所关心的内容abc...z转化成数组中的一个索引，存储在数组中，这样就可以以O(1)的复杂度进行查询等操作
如本题中a对应0，b对应1，c对应2，...，z对应25等等
*/
var firstUniqChar = function(s){

	var res = Array(26).fill(0);

	for(let i=0;i<s.length;i++){
		res[s[i].charCodeAt() - 97]++;	//我们此时res是一个包含26个元素的数组，且初始都为0，如果s中包含l这个字母，我们在
										//l在res数组中对应的位置+1，以此类推，这就是一种hash函数，把字符串中字母与数组中元素对应起来
	}

	//firstUniqChar("leetcode")，返回此时res
	//console.log(res) [0, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]

	for (let j = 0; j < s.length; j++) {	//我们再一次循环，分别查看s中每一个字母元素在数组中对应的值，如果为1就返回此时s中索引
        if (res[s[j].charCodeAt() - 97] === 1) {
            return j
        }
    }

	return -1

}
