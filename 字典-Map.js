/*
* @Author: yangyang
* @Date:   2019-08-27 08:48:15
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-27 09:28:05
*/

/*
JavaScript实现字典Map
*/

function Dictionary(){

	var items = {};

	this.has = function(key){
		return key in items
	}

	this.set = function(key,value){
		items[key] = value;
	}

	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}

	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}

	this.values = function(){
		var values = {};

		for(var k in items){
			if(this.has(k)){
				values.push(items[k]);
			}
		}
		return values;
	}

	this.clear = function(){
		items = {};
	}

	this.size = function(){
		return Object.keys(items).length;
	}

	this.keys = function(){
		return Object.keys(items);
	}
}