/*
* @Author: yangyang
* @Date:   2019-08-22 19:31:27
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 20:36:38
*/

/*

双端队列：是一种有序我们同时从前端和后端添加和移除元素的特殊队列

回文是正反都能读通的单词、词组、数或一系列字符的序列，例如madman或racecar

有不同的算法可以检查一个词组或字符串是否为回文。最简单的方式是将字符串反向排列并检查它和原字符串是否相同。如果两者相同，那么它就是一个回文。
我们也可以用栈来完成，但是利用数据结构来解决这个问题的最简单方法是使用双端队列。

参考文章：
https://www.cnblogs.com/justbecoder/p/11383570.html
https://segmentfault.com/a/1190000020096845#articleHeader13

*/

//1.使用反转排列字符串与原字符串进行比较
function palindromeChecker (str) {
  // 检测是否是合法字符串
  if (str === undefined || str === null || (str !== null && str.length === 0)) {
    return false
  }
  return str.split('').reverse().join('') === str
}

let str = 'aba'
console.log(palindromeChecker(str)) // true

//2.使用数据结构-栈实现回文检查器
function palindromeChecker(str){
	// 检测是否是合法字符串
    if (str === undefined || str === null || (str !== null && str.length === 0)) {
      return false
    }

    let stack = new Stack()

    //把字符串str内容push到stack
    for(let i=0;i<str.length;i++){
    	stack.push(str[i])
    }

    let reverseStr = ''
    //stack栈中内容通过pop到reverseStr中
    while(!stack.isEmpty()){
    	reverseStr += stack.pop()
    }

    return str === reverseStr;
}

//3.使用双端队列实现回文检查
function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }
  
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');

  let firstChar;
  let lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
};