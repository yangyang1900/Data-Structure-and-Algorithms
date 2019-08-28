/*
* @Author: yangyang
* @Date:   2019-08-28 13:38:34
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 14:01:09
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