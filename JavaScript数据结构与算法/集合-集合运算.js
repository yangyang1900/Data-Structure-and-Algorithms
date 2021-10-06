/*
* @Author: yangyang
* @Date:   2019-08-26 10:31:29
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-26 20:36:12
*/

/*
集合运算：并集、交集、差集、子集
*/

//1.并集 两个集合的集合，因为Set不会重复元素，所以直接循环添加就可以
//第一种方法：利用定义的values()和add()方法，转成数组之后就可以用forEach方法
union(otherSet){
	let unionSet = new Set()
	this.values().forEach(value => unionSet.add(value));
	otherSet.values().forEach(value => unionSet.add(value));
	return unionSet;
}
//第二种方法：直接使用ES6 Set类内置的方法实现并集(ECMAScript6也为Set集合添加了forEach()方法)
const union(setA,setB){
	const unionAb = new Set();
	setA.forEach(value => unionAb.add(value))
	setB.forEach(value => unionAb.add(value))
	return unionAb；
}
//第三种方法：使用扩展运算符...
//整个过程包含三个步骤：（1）将集合转化为数组；（2）执行需要的运算；（3）将结果转化回集合
new Set([...setA,...setB])

//2.交集
//第一种方法
intersection(otherSet){
	let intersectionSet = new Set();

	const values = this.values();

	for(let i=0;i < values.length; i++){
		if(otherSet.has(values[i])){
			intersectionSet.add(values[i]);
		}
	}

	return intersectionSet;
}
//第二种方法
const intersection = (setA,setB){
	const intersectionSet = new Set()

	setA.forEach(value =>{
		if(setB.has(value)){
			intersectionSet.add(value);
		}
	});
	return intersectionSet;
}
//第三种方法
new Set([...setA].filter(x => setB.has(x)))

//3.差集
//第一种方法
difference(otherSet){

	const differenceSet = new Set()
	let values = this.values()

	values.forEach(value =>{
		if(!otherSet.has(values)){
			differenceSet.add(value)
		}
	})

	return differenceSet;
}
//第二种方法
const differenceSet = (setA,setB){
	const differenceSet = new Set();
	setA.forEach(value =>{
		if(!setB.has(value)){
			differenceSet.add(value);
		}
	});
	return differenceSet;
}
//第三种方法
new Set([...setA].filter(x = !setB.has(x)))

//4.子集
isSubsetOf(otherSet){

	if(this.size() > otherSet.size()){
		return false;
	}

	let isSubset = true;
	this.values().every(value =>{
		if(!otherSet.has(value)){
			isSubset = false;
			return false;
		}
		return true;
	});
	return isSubset;
}