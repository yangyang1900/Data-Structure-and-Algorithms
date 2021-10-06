/*
* @Author: yangyang
* @Date:   2019-08-22 07:58:40
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 11:41:31
*/

/*
公式运算，主要涉及排列组合

leetcode 17题 电话号码的字母组合 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

思路：
1.字符串变成数组（split），还要进行映射（2对应abc，3对应def等等）
2.按照映射组合运算（两个可能比较好想象，例如输入23，但是如果我们输入234呢）
3.多个的话，前面两个组合完，两个组合的结果想象成一个新的一项，然后再与后面进行组合，看下面实例
[[abc],[def],[ghi],...]			//所以[abc]是arr[0]，[def]我arr[1],...
[[ad,ae,af,bd,be,bf,cd,ce,cf],[ghi],...]	//把新组合的数组放入大数组arr，是arr.splice(0,2,result)，result是arr[0],arr[1]上次排列组合的结果
4.如果arr.length>1就继续上面操作（两两排列组合和splice）
5.else，返回合并结果result

*/

function letterCombinations(digits){

	let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'] //用于映射1-9的输入(0就是空，1就是1，2是abc，以此类推)
	let num = digits.split('')	//把输入的数字转成数组（例如1234转成[1,2,3,4])

	let code = []	//保存映射后的内容，如23映射后=>['abc','def']

	num.forEach(item =>{

		if(map[item]){	//如果输入的值对应map存在匹配项
			code.push(map[item])	//进行映射，然后填入code
		}

	})
    
    let comb = (arr) =>{	//声明一个方法，给他一个数组，就可以进行合并
			
        let tmp = []	//临时变量，存储前两项合并的结果，还要把这个结果放入到arr（code）中
			
		//遍历前两项（两层循环）
		for(let i=0;i<arr[0].length;i++){
			for(let j=0;j<arr[1].length;j++){
				tmp.push(`${arr[0][i]}${arr[1][j]}`)
			}
		}

		//splice替换掉code前两项
		arr.splice(0,2,tmp)

		//递归
		if(arr.length>1){
			comb(arr)
		}else{
			return tmp
		}

		return arr[0]	//数组最后就一个元素，返回数组第一个元素的内容
	}
	//code调用comb函数
	return comb(code)

}

letterCombinations("23")