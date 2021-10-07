/*
��Ŀ��
����һ�����󣬰��մ��������˳�����δ�ӡ��ÿһ������
*/

function printMatrix(matrix) {
    let rows = matrix.length,
        cols = matrix[0].length;
    if(rows === 0 || cols === 0) {
        return new Error("����");
    }
    let start = 0,
        result = [];
    //�����жϻ��ܲ��ܼ�����ӡ
    while(start*2 < rows && start*2 < cols) {
        printCore(matrix, rows, cols, start, result);
        ++start;
    }
    return result.join(",");
}

function printCore(matrix, rows, cols, start, result) {
    let endCol = cols - start - 1,
        endRow = rows - start - 1;
        
    //��������һ�У�������
    for(let i=start; i<=endCol; ++i) {
        result.push(matrix[start][i]);
    }
    
    //����ұߵ�һ�У����ϵ���
    if(endRow > start) {
        for(let i=start+1; i<=endRow; ++i) {
            result.push(matrix[i][endCol]);
        }
    }
    
    //�����һ�У��������󣬱��뱣֤�ж�����к���
    if(start < endCol && start < endRow) {
        for(let i=endCol-1; i>=start; --i) {
            result.push(matrix[endRow][i]);
        }
    }
    
    //��ߵ�һ�У��������ϣ����뱣֤������к���
    if(endRow - start > 1 && endCol - start > 0) {
        for(let i=endRow-1; i>start; --i) {
            result.push(matrix[i][start]);
        }
    }
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(printMatrix(matrix));