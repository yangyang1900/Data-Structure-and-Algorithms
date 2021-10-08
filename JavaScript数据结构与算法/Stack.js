/*
* @Author: yangyang
* @Date:   2019-08-21 16:38:54
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-10-08 23:22:55
*/

/*
	栈数据结构
	https://juejin.cn/post/6844903846666338318
*/

//我们将利用数组来表示栈
class stackArray {
  constructor() {
		this.items = [];
	}

	push(element) {
			this.items.push(element);
	}

	pop() {
			return this.items.pop();
	}

	peek() {
			return this.items[this.items.length - 1];
	}

	isEmpty() {
			return this.items.length === 0;
	}

	size() {
			return this.items.length;
	}

	clear() {
			this.items = [];
	}

	toArray() {
			return this.items;
	}

	toString() {
			return this.items.toString();
	}
}

//将利用对象来创建一个栈

class Stack{

	constructor(){
		this.count = 0;		//count属性来帮助我们记录栈的大小，也能帮助我们从数据结构中添加和删除元素
		this.items = []
	}

	push(element){
		this.items.push(element)
		this.count++
	}
	size(){
		return this.count
	}
	isEmpty(){
		return this.count === 0;
	}
	pop(){
		if(this.isEmpty()){
			return undefined
		}
		const result = this.items[this.count]  //取出pop掉的值
		delete this.items[this.count]
		return result						//返回删掉的值
	}
	peek(){
		if(this.isEmpty()){
			return undefined
		}
		return this.items[this.count - 1]
	}
	clear(){
		this.items = {}
		this.count = 0
	}
	//toString方法
	toString(){
		if(this.isEmpty){
			return ''
		}
		let objString = `${this.items[0]}`		//类似sum=sum+arr[i]，需要个初始值sum
		for(let i = 1;i < this.count;i++){
			objString = `${objString},${this.items[i]}`; //类似sum = sum +arr[i]
		}
	}
}
