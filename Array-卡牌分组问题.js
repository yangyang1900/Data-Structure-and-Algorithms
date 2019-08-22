/*
* @Author: yangyang
* @Date:   2019-08-22 11:02:59
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 15:41:16
*/

/*
leetcode 914 卡牌分组 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。
 
示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

这是归类问题，主要要思考最大公约数如何求解

最大公约数求解（辗转相除法）
function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return gcd(b, a % b);
}
console.log(gcd(28, 12));
4

思路：
1.排序
2.归类/分组

*/

function hasGroupsSizeX(deck){

	//辗转相除法求最大公约数
	let gcd = (a,b) => {
		if(a%b ===0){
			return b
		}
		return gcd(b,a%b)
	}

	//排序
	const arr = deck.sort((a,b) => a-b)

	const obj = {}
  	arr.forEach(item => {
    	obj[item] ? obj[item]++ : (obj[item] = 1)
  	})
  
  	const lens = Object.values(obj)
  	let l = lens[0]
  	
  	for (let k of lens) {
    	l = gcd(l, k)
  	}
  
  	return !(l <= 1)

}

hasGroupsSizeX([1,2,3,4,4,3,2,1])
