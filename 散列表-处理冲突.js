/*
* @Author: yangyang
* @Date:   2019-08-27 13:28:42
* @Last Modified by:   yangyang
* @Last Modified time: 2019-08-27 13:50:17
*/

/*
散列表处理冲突方法：分离链表、线性探查和双散列法
*/

//1.分离链表：分离链表为散列表的每一个位置创建一个链表（LinkedList）并将元素存储在里面，对于分离链表，我们只需要重写三个方法：
//put、get和remove，我们还需要一个新的辅助类；ValuePair类，来表示将要加入LinkedList实例的元素。
function HashTableSeparateChaining(){

    var table = [];

    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    var hashCode = function(key){
        return loseloseHashCode(key);
    };

    this.put = function(key, value){
        var position = hashCode(key);
        console.log(position + ' - ' + key);

        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };

    this.get = function(key) {
        var position = hashCode(key);

        if (table[position] !== undefined  && !table[position].isEmpty()){

            //iterate linked list to find key/value
            var current = table[position].getHead();

            do {
                if (current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            } while(current);
        }
        return undefined;
    };

    this.remove = function(key){

        var position = hashCode(key);

        if (table[position] !== undefined){

            //iterate linked list to find key/value
            var current = table[position].getHead();

            do {
                if (current.element.key === key){
                    table[position].remove(current.element);
                    if (table[position].isEmpty()){
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            } while(current);
        }

        return false;
    };

    this.print = function() {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
               console.log(table[i].toString());
            }
        }
    };
}

//2.线性探查：当想向表中某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，就尝试index+1的位置。
//如果index+1的位置也被占据了，就尝试index+2的位置，以此类推
//需要重写put、get和remove方法
function HashLinearProbing(){

    var table = [];

    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    var hashCode = function(key){
        return loseloseHashCode(key);
    };

    this.put = function(key, value){
        var position = hashCode(key);
        console.log(position + ' - ' + key);

        if (table[position] == undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while (table[index] != undefined){
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };

    this.get = function(key) {
        var position = hashCode(key);

        if (table[position] !== undefined){
            if (table[position].key === key) {
                return table[position].value;
            } else {
                var index = ++position;
                while (table[index] !== undefined && (table[index] && table[index].key !== key)){
                    index++;
                }
                if (table[index] && table[index].key === key) {
                    return table[index].value;
                }
            }
        } else { //search for possible deleted value
            var index = ++position;
            while (table[index] == undefined || index == table.length ||
                (table[index] !== undefined && table[index] && table[index].key !== key)){
                index++;
            }
            if (table[index] && table[index].key === key) {
                return table[index].value;
            }
        }
        return undefined;
    };

    this.remove = function(key){
        var position = hashCode(key);

        if (table[position] !== undefined){
            if (table[position].key === key) {
                table[position] = undefined;
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key){
                    index++;
                }
                if (table[index].key === key) {
                    table[index] = undefined;
                }
            }
        }
    };

    this.print = function() {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ' -> ' + table[i].toString());
            }
        }
    };
}



