/*
* @Author: yangyang
* @Date:   2019-08-28 18:37:13
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 21:18:53
*/

/*

leetcode 93 复原IP地址

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

*/

var restoreIpAddresses = function(str){

	//保存所有符合条件的IP地址
	let r = []
	// 分四步递归处理ip分段(cur是上一次处理结果，sub是剩余字符串，待处理字符串)
	let search = (cur, sub) => {
	// 非法输入过滤，LeetCode测试用例(111111111111111111111111111111111111111111111111111111111111)
	if (sub.length > 12) {
	  return
	}
	// 边界条件（===4表示4个部分都挑完了，而且4部分拼接起来和初始的str相等，就表示划分成功）
	if (cur.length === 4 && cur.join('') === str) {
	  r.push(cur.join('.'))	//按照.拼接成IP地址形式
	} else {
	  // 正常的处理过程
	  for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {//Math.min(3,sub.length)是指，我取length如果sub比较长就取小的3
	  																	//如果sub比较小就取3，就是3和sub.length取其中的小值，为什么是3，因为IP
	  																	//地址一段中最长是3，所以不论剩余字符串多长，我最多取前三位
	    tmp = sub.substr(0, i + 1)	//tmp是临时子串，可能是2、25、255这样
	    if (tmp - 256 < 0) {	//<255说明这个可以作为IP地址，通过
	      // 转换下数据类型，如 01为1（LeetCode测试用例）
	      search(cur.concat([tmp * 1]), sub.substr(i + 1))	//合并通过的临时子串作为下一个的cur，待处理子串是sub的i+1
	    }
	  }
	}
	}
	search([], str)
	return r
}