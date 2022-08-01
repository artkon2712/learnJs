// function createCalcFunction(n) {
//     return function (){
//         console.log(1000*n)
//     }
// }

// const calc = createCalcFunction(3)
// calc()


function createIncrementor (n){
    return function (c){
        return n + c
    }
}

const addToTen = createIncrementor(10)
const addToTwenty = createIncrementor(20)
addToTen (5)
console.log(addToTen(5))
console.log(addToTen(10))
console.log(addToTwenty(1))


function gay (prozv){
    return function (name){
        return name + ' ' + prozv
    }
}

const callPidor = gay('pidor')

console.log(callPidor('Artem'))

callUeba = gay('ueba')

console.log(callUeba('Daniil'))

function urlGenerator (domenName){
    return function (urlName){
        return `https://${urlName}.${domenName}`
    }
}

const addCom = urlGenerator('com')
console.log(addCom('pornhub'))
const addRu = urlGenerator('ru')
console.log(addRu('tutu'))



function logPerson(){
    console.log(`Person: ${this.name}, age: ${this.age}, job: ${this.job}`)
}
const person1 = {name:'Michael', age: 33, job: 'Worker'}
const person2 = {name:'Maria', age: 24, job: 'Designer'}

function bind (persLog, func){
   return function(...args){
        func.apply(persLog, args)
   }
}
console.log(bind(person1, logPerson)())


