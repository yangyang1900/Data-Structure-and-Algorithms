/*
* @Author: yangyang
* @Date:   2019-08-22 18:20:00
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 19:30:27
*/

/*
循环队列问题
就是循环队列。循环队列的一个例子就是击鼓传花游戏（Hot Potato）。在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
某一时刻传花停止， 这个时候花在谁手里，谁就退出圆圈结束游戏。重复这个过程，直到只剩一个孩子（胜者）。

思路：
实现一个模拟的击鼓传花游戏，要用到Queue类（行{1}）。
我们会得到一份名单，把里面的名字全都加入队列（行{2}）。
给定一个数字，然后迭代队列。从队列开头移除一项，再将其添加到队列末尾（行{3}），模拟击鼓传花（如果把花传给了旁边的人，被淘汰的威胁立刻就解除了）。
一旦传递次数达到给定的数字，拿着花的那个人就被淘汰了（从队列中移除——行{4}）。
最后只剩下一个人的时候，这个人就是胜者（行{5}。

*/

//enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
//dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。

function hotPotato(nameList,num){

	//新建一个队列
	var queue = new Queue();	//{1}

	for(let item of nameList){
		queue.enqueue((item));	//{2}
	}

	var eliminated = '';

	while(queue.size>1){
		for(var i=1;i<num;i++){
			//从队列开头移除一项，再将其添加到队列末尾（这样就让一个普通的队列变成了循环队列）
			//我们并不是真的创建一个循环的队列，而是将普通的队列赋予操作【不断更换开头和结尾】，让她有类似循环队列的操作
      		queue.enqueue(queue.dequeue()); // {3}
		}
		eliminated = queue.dequeue(); //{4}
		console.log(eliminated+'在击鼓传花游戏中被淘汰。')
	}
	return queue.dequeue();	//{5}
}

//测试代码
var names = ['John','Jack','Camila','Ingrid','Carl']; 
var winner = hotPotato(names, 7);
console.log('胜利者：' + winner);

