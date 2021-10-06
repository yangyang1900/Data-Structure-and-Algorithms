/*
* @Author: yangyang
* @Date:   2019-08-28 16:25:24
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-28 16:30:37
*/

/*
它是一个由0、1、1、2、3、5、8、13、21、34等数组成的序列。
数2由1+1得到，数3由1+2得到，数5由2+3得到，以此类推。
*/

function fibonacci(n){
	if(n<1) return 0;
	if(n<=2) return 1;
	return fibonacci(n-1) + fibonacci(n-2);
}