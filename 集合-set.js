/*
* @Author: yangyang
* @Date:   2019-08-26 09:30:01
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-26 16:45:13
*/

/*
集合（set）JavaScript实现

我们使用对象而不是数组来表示集合
*/

//1.ES5实现集合Set
class Set{

	constructor(){
		this.items = {}
	}

	has(element){
		return element in items;
	}

	add(element){
		if(!this.has(element)){
			this.items[element] = element;
			return true
		}
		return false
	}

	delete(element){
		if(this.has(element)){
			delete this.items[element]
			return true
		}
		return false
	}

	clear(){
		this.items = {}
	}

	size(){
		return Object.keys(this.items).length;
	}

	values(){	//返回一个包含集合中所有值（元素）的数组
		return Object.values(this.items)
	}

}

//2.ES6实现，ECMAScript2015新增了Set类作为JavaScript API的一部分

const set = new Set()
set.add(1)	//add方法
set.add(2)

set.delete(1)	//delete方法

set.has(1)	//have方法

set.values()	//返回的是Iterator，而不是值构成的数组，可以用for of遍历

set.size	//返回2，size是Set的一个属性

