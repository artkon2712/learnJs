// function* strGen (){
//     yield 'h'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGen()
// console.log(str)

// function* numGen(n = 10){
//     for(let i = 0; i<n; i++ ) {
//         yield i
//     }
// }
// const num = numGen(7)
// console.log(num)


// const iterator ={
//     [Symbol.iterator] (n = 10){
//         let i = 0

//         return {
//             next(){
//                 if (i < n){
//                     return {
//                         value: ++i, done: false
//                     }
//                 }else {
//                     return{
//                         value: undefined, done:true
//                     }
//                 }
//             }
//         }
//     }
// }

function* iter (n = 5){
    for(let i = 0; i<n; i++){
        yield i
    }
}


for (let k of iter()){
    console.log(k)
}




