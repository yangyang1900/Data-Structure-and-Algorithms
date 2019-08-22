/*
* @Author: yangyang
* @Date:   2019-08-22 19:35:25
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-22 19:52:00
*/

/*

双端队列：deque，或称doubl-ended queue，是一种有序我们同时从前端和后端添加和移除元素的特殊队列

主要是是添加方法addFront()和之前不一样，其他和队列和栈操作类似

参考文章：
https://www.cnblogs.com/justbecoder/p/11383570.html
https://segmentfault.com/a/1190000020096845#articleHeader8


*/

class Deque {
  constructor () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  //addFront() 从头部插入
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  //addBack() 从尾部插入
  addBack (element) {
    this.items[this.count] = element
    this.count++
  }

  //removeFront() 队首移除元素
  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  //removeBack() 队尾移除元素
  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.count -1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }

  //isEmpty() 判断是否为空
  isEmpty () {
    return this.count === this.lowestCount
  }

  //size() 返回队列的长度
  size () {
    return this.count - this.lowestCount
  }

  //clear() 清空队列
  clear () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  //peekFront() 获取队首元素
  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  //peekBack() 获取队尾元素
  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  //toString() 展示字符串形式
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
}