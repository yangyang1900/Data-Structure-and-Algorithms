/*
* @Author: yangyang
* @Date:   2019-08-26 09:30:01
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-26 10:30:40
*/

/*
集合（set）JavaScript实现

我们使用对象而不是数组来表示集合
*/

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