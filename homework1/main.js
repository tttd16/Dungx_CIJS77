// Câu 1
let arr = [4, 5,6,8,4,7,8,9]
let coutNum = (arr, a) => {
    let count = 0;
    for(let i=0; i< arr.length; i++) {
        if(arr[i] == a) {
            count++;
        }
    }
    console.log('số'+' '+a+' '+'xuất hiện trong mảng số lần'+' '+count)
}
coutNum(arr, 4)

let diffNumArr= arr.reduce(function(arrNew, number) {
    if (arrNew.indexOf(number) === -1) {
        arrNew.push(number)
      }
      return arrNew
}, [])
console.log(diffNumArr)
let amountNum = diffNumArr.length
console.log('số phần tử khác nhau trong mảng'+' ' +amountNum)


// Câu 2
// cách 1
// let maxNum = (a) => {
//     if(a<= 0) {
//         console.log('sai')
//     } else {
//         let max = 0;
//         do{
//            let i = a % 10;
//             if(i > max) {
//                 max = i;
//                 return i
//             }
//         } while (a /= 10)
//     }
// }
// console.log(maxNum(1258))

//cách 2
// function maxNum(n) {
//      let arr = n.toString().split("").sort(function(a,b) {return b - a})
//      return arr[0]
// }
// console.log(maxNum(26349))


