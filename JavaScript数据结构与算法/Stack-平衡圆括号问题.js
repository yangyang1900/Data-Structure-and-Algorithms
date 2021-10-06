/*
* @Author: yangyang
* @Date:   2019-08-21 20:20:02
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-21 20:39:58
*/

/*
题目描述：
从左向右查找时，第一个遇到的右括号，一定与它左侧最近的左括号匹配。同样，最后一个右括号，一定与第一个左括号相匹配。很像入栈出栈操作

思路如下：
将括号分类，一类是左括号、一类是右括号
左括号看作是入栈信号，右括号是出栈信号
遇见左括号入栈，遇到右括号将左括号出栈，复杂度为O(n)

附注：也可以使用正则表达式进行解决，可以参考：https://www.jinjingxuan.com/2018/11/06/%E9%9D%A2%E8%AF%95-%E6%8B%AC%E5%8F%B7%E5%8C%B9%E9%85%8D/

var expression = "{{}}{}{}";
let info = expression.split("")
info
["{", "{", "}", "}", "{", "}", "{", "}"]
*/

function isBalanced(exp){
	let info = exp.split("")
	let stack = []

	for(let i=0;i < info.length;i++){
		let el = info[i]

		if(el == "{"){
			stack.push("{");
		}else if(el == "}"){
			if(stack.length === 0){
				return false
			}
			stack.pop()
		}
	}

	return stack.length === 0;
}