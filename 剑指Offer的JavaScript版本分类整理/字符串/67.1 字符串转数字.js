/*
��Ŀ��
�����ַ�����ת�����֣�������parseInt������Ҫ�ж�+ - �Լ���Ч�ַ������
*/

function parse(str) {
    let result = 0,
        flag = 1,
        index = 0,
        len = str.length;
    if(len === 0) {
        return 0;
    }
        
        
    if(str[0] === '-') {
        flag = -1;
        index = 1;
    } else if(str[0] === "+") {
        index = 1;
    }
    
    for(let len = str.length; index < len; ++index) {
        if(str[index] >= '0' && str[index] <= '9'){
            result = result * 10 + (str[index] - '0');
        } else {
            //�����û����Ч���־ͷ���0����ô����Ϳ���ֱ�ӷ���0
            break;
        }
    }
    
    return flag * result;
}

console.log(typeof parse('-10a10'), parse('-10a10'))