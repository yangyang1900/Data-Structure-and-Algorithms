/*
��Ŀ��
ʵ��һ������������һ��������������������Ʊ�ʾ��1�ĸ�����
���磺
��9��ʾ�ɶ�������1001����2λ��1��
*/

/*����λ���㣬ֱ�Ӳ���������*/
function numberOfOne(n) {
    let count = 0,
        //ͨ�����ƱȽϵ�ֵ��������Ϊ����������ѭ��
        flag = 1;
    while(flag !== 0) {
        if(n & flag) {
            ++count;
        }
        flag = flag << 1;
    }
    return count;
}


/*��һ��������ȥ1֮���ٺ�ԭ����������λ�����㣬�õ��Ľ���൱�ڰ������Ķ����Ʊ�ʾ�����ұߵ�1���0*/
function numberOfOne(n) {
    let count = 0;
    while(n !== 0) {
        ++count;
        //�����е�1ת��0������Ҳ�ͱ��0
        n = (n - 1) & n;
    }
    return count;
}



console.log(numberOfOne(-9));