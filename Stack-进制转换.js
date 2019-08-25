/*
* @Author: yangyang
* @Date:   2019-08-21 19:37:51
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 21:42:13
*/

//从十进制到二进制(不断除以二，除到的结果作为下一次number，除的余数作为rem放入栈中，最后取出所有栈中元素连接成字符串)

function decimalToBinary(decNumber){
	const remStack new Stack();		//栈存放余数，栈顶到栈底的数就是要的二进制顺序
	let number = decNumber;		//我们需要不断得到的结果，作为下一次的除数
	let rem;		//作为除到的余数，不断放入栈中
	let binaryString = '';		//我们需要拼接出栈的元素，这个作为初始值

	while(number>0){
		rem = Math.floor(number % 2);
		remStack.push(rem);
		number = Math.floor(number / 2);
	}

	while(!remStack.isEmpty()){
		binaryString += remStack.pop().toString();
	}
}


//从十进制到二进制/八进制/十六进制
//(我们需要注意一个地方，十六进制时候，我们需要对十六进制中10，11，12，13，14和15进行转化，所以需要digits)
function baseConverter(decNumber,base){
	const remStack = new Stack();
	const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let number = decNumber;
	let rem;
	let baseString = '';

	if(!(base >= 2 && base <=36)){
		return '';
	}

	while(number){
		rem = Math.floor(decNumber % base);
  		remStack.push(rem);
  		decNumber = Math.floor(decNumber / base);
	}

	while (!remStack.isEmpty()){
	  baseString += digits[remStack.pop()]; //针对栈中的10，12，13，14和15与十六进制的ABCDEF进行转换，也不影响二进制和八进制
	 }

	 return baseString;
}
