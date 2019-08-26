/*
* @Author: yangyang
* @Date:   2019-08-26 10:31:29
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-26 12:04:49
*/

/*
集合运算：并集、交集、差集、子集
*/

//1.并集（ES2015/ES6版本写法） 两个集合的集合，因为Set不会重复元素，所以直接循环添加就可以
union(otherSet){
	let unionSet = new Set()
	this.values().forEach(value => unionSet.add(value));
	otherSet.values().forEach(value => unionSet.add(value));
	return unionSet;
}

//2.交集
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

//3.差集
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