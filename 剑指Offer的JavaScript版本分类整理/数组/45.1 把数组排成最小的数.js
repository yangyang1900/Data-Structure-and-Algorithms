/**
��Ŀ��
����һ�����������飬����������������ƴ�������ų�һ��������ӡ��ƴ�Ӵ���������������С��һ��
*/


/*
˼·һ
ȫ���У�Ȼ��Ƚϴ�С��ͬʱע���������
*/


/*
˼·����
����m��n��������ƴ�ӷ�ʽ��mn��nm�����mn<nm����ôn�϶�����m��ǰ�档
���������򣬲����ǰ�������Ĺ�������Ȼ����ƴ�Ӽ���
����ASCII���ж�
*/
function printMinNumber(arr) {
    //�������������Լ�дһ������Ҳ�У�ֻ����������ֵ�ȴ�С������ƴ���ַ����ȴ�С
    arr.sort(compare);
    return arr.join('');
}

function compare(m,n) {
    let str1 = m.toString(10),
        str2 = n.toString(10);
    return str1+str2 > str2+str1;
}

console.log(printMinNumber([3,32,321]));