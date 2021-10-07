function FirstNotRepeatingChar(str){
    let helper = '';
    for(let i=0,len=str.length;i<len-1;i++){
        if(str.indexOf(str[i],i+1) === -1 && helper.indexOf(str[i]) === -1){
            return i;
        }
        helper += str[i];
    }
    return -1;
}

//ʹ�ø����������ÿ���ַ��Ĵ���������map���ܸ��á�
//��ΪJS����ASCII�ļ�����������ֻ������String.charCodeAt(index)������ȡ�ַ�����ĳ���ַ���Unicode����
//��������O(n)��ʱ�临�Ӷ�
function firstNotRepeatingChar(str) {
    //���ö���ķ�ʽ
    let helperMap = {};
    for(let i=0,len=str.length;i<len;i++){
        if(helperMap[str[i]]){
            helperMap[str[i]] = helperMap[str[i]] + 1;
        } else {
            helperMap[str[i]] = 1;
        }
    }

    //����map�ķ�ʽ
    let helpMap = new Map();
    for(let i=0,len=str.length;i<len;i++){
        if(helpMap.has(str[i])){
            helpMap.set(str[i], helpMap.get(str[i])+1);
        } else {
            helpMap.set(str[i], 1);
        }
    }

    //����ASCII�����򵥹�ϣ��
    let hashMap = new Array(256);
    for(let i=0,len=str.length;i<len;i++){
        let ascii = str.charCodeAt(i);
        if(hashMap[ascii]){
            hashMap[ascii] += 1;
        } else {
            hashMap[ascii] = 1;
        }
    }

    //ʵ���ж�
    for(let i=0,len=str.length;i<len;i++){
        if(hashMap[str.charCodeAt(i)] === 1){
            return i;
        }
    }
    return -1;
}

console.log(firstNotRepeatingChar('google'));