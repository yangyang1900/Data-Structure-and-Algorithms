/**
 * @param {string} digits
 * @return {string[]}
 */
function toString(items){
  
  let objString = `${items[0]}`

  var arr = Object.keys(items)

  console.log(arr.length)

  for(let i=1;i<arr.length;i++){
    objString = `${objString},${items[i]}`
  }
  
  console.log(objString)
}

toString({0:'0',1:'1',2:'2',3:'3'})