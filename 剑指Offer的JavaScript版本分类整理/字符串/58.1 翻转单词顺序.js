//����һ��
function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}


//������
function reverseSentence(str) {
  let [res, word] = ["", ""];
  for (let i = 0, len = str.length; i < len; i++) {
    let c = str[i];
    if (c !== " ") {
      word += c;
    } else {
      res = " " + word + res;
      word = "";
    }
  }
  return word + res;
}