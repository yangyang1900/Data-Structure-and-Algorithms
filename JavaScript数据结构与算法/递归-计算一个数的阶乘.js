/*
* @Author: yangyang
* @Date:   2019-08-28 16:06:09
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 16:24:41
*/

/*

我们从如何计算一个数的阶乘来学习递归

n!=nx(n-1)x(n-2)...x1

*/

function factorial(n){

	if(n === 1 || n === 0){	//基线条件
		return 1
	}
	return n * factorial(n-1); //递归调用
}