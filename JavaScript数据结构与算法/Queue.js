/*
* @Author: yangyang
* @Date:   2019-08-22 15:43:34
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-10-08 23:29:00
*/

/*
队列实现
https://juejin.cn/post/6844903858888507405#heading-8
*/

//ES6 基于对象实现
class Queue{

	constructor(){
		this.count = 0;
		this.lowestCount = 0;	//此外，由于我们将要从队列前端移除元素，同样需要一个变量来帮助我们追踪第一个元素。因此，声明一个lowestCount变量
		this.items = {}
	}

	enqueue(element){ //队列尾部添加一个（或多个）新的项
		this.items[this.count] = element;
		this.count++;
	}

	dequeue(){	//移除队列首项
		if(this.isEmpty()){
			return undefined
		}
		const result = this.items[this.lowestCount];	//记录移除项具体值
		delete this.items[this.lowestCount];	//删除第一项
		this.lowestCount++;		//记录现在的第一项的索引位置
		return result;
	}

	peek(){	//查看队列头元素
		if(isEmpty()){
			return undefined;
		}
		return this.items[this.lowestCount]
	}

	isEmpty(){	//检查队列是否为空并获取它的长度
		return this.count - this.lowestCount === 0;
	}

	clear(){
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	toString(){
		if(this.isEmpty()){
			return ''
		}
		let objString = `${items[this.lowestCount]}`;
		for(let i = this.lowestCount+1;i<this.count;i++){
			objString = `${objString},${this.items[i]}`;
		}
		return objString;
	}
}