// Câu 1



// Câu 2
// cách 1
// let n = (a) => {
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
// console.log(n(1258))

//cách 2
// function maxNum(n) {
//      let arr = n.toString().split("").sort(function(a,b) {return b - a})
//      return arr[0]
// }
// console.log(maxNum(26349))

