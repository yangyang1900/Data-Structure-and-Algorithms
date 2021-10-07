/**
��Ŀ��
����һ���ַ�������ӡ�����ַ�����������
*/


/**
˼·��
1�����ַ�����Ϊ������һ�������ַ����ĵ�һ���ַ�����һ�������ǵ�һ���ַ��Ժ�������ַ�
2���õ�һ���ַ�����������ַ��������
*/
function permutation(str) {
    if(!str) {
        return str;
    }
    let result = [];
    let arr = str.split("");
    permutationCore(arr, 0, result);
    return [...new Set(result)].sort();
}

function permutationCore(arr, index, result) {
    if(index === arr.length) {
        result.push(arr.join(''));
    } else {
        for(let i= index, len = arr.length; i<len; ++i) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            permutationCore(arr, index + 1, result);
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    }
}


/**
˼·�������ݷ�
���ϵ�ȥ�ַ�������������һ���ַ�����ƴ���ַ��������ַ������鱻�ÿ�ʱ���Ͱѽ����ӽ���������Ȼ�������һ�㡣
*/
function Permutation1(str)
{
    let res=[],pStr="";
    if(str.length<=0) return res;
    arr=str.split("");//���ַ���ת��Ϊ�ַ�����
    res=permutate1(arr,pStr,res);
    return res;
}
function permutate1(arr,pStr,res){
    if(arr.length === 0){
        return res.push(pStr);
    }else{
        let isRepeated=new Set();
        for(let i=0;i<arr.length;i++){
            if(!isRepeated.has(arr[i])){//������ͬ���ַ�����
                let char=arr.splice(i,1)[0];
                pStr+=char;
                permutate1(arr,pStr,res);
                arr.splice(i,0,char);//�ָ��ַ���������
                pStr=pStr.slice(0,pStr.length-1);//����
                isRepeated.add(char);
            }
        }
    }
    return res;
}



console.log(permutation('abc'));
console.log(Permutation1('abc'));