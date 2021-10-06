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
    return objString
	}
}

var stack1 = new Stack()
stack1.push('1')
stack1.push('2')
stack1.push('3')
console.log(stack1)
let stackString = stack1.toString()
console.log(stackString)
stack1.size()
stack1.isEmpty()