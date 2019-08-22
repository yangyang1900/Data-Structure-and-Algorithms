/*
* @Author: yangyang
* @Date:   2019-08-21 23:48:48
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 10:04:08
*/

/*
leetcode 682题 棒球比赛（https://leetcode-cn.com/problems/baseball-game/）

你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

示例 1:

输入: ["5","2","C","D","+"]
输出: 30
解释: 
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到2分。总和是：7。
操作1：第2轮的数据无效。总和是：5。
第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
第4轮：你可以得到5 + 10 = 15分。总数是：30。

可以看作是对前一个或两个的操作，可以想象成一个栈中不断的push和pop，所以适合栈来处理

*/

function baseballGame(arr){

	let result = []		//用数组来实现堆栈结构，pop，push
	//上一个数据
	let pre1
	//上上一个数据（+号要处理前两个数据）
	let pre2
	let pre

	arr.forEach(item =>{
		switch (item){
			case 'C':
				if(result.length){
					result.pop()
				}
				break
			case 'D':
				if(result.length){
					pre1 = result[result.length-1]		//pre1 = result.pop()
					result.push(pre1*2)
				}
				break
			case '+':
				if(result.length>=2){
					pre1 = result[result.length-1]
					pre2 = result[result.length-2]
					pre = pre1+pre2
					result.push(pre)
				}
				break
			default: 	//数字情况做默认处理，我们还要注意输入的是字符串，我们利用+号特性，转成数字（+'1'=1）
				result.push(+item)
		}
	})
	return result.reduce((total,num) => {return total+num})
}

baseballGame(["5","2","C","D","+"])

