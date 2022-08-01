// function greet (name) {
//     console.log(`hi i'm ${name}`)
// }
// greet('tema')


// const greet2 = function(name){
//     console.log("hi i'm second hi "+name)
// }
// greet2('Kek')
// console.log(typeof greet2 )
// console.dir(greet)

// anon func
// let counter = 0
// const iterval = setInterval(function(){
//     if (counter === 5) {
//         clearInterval(iterval) // clearTimeout
//     }else{
//         console.log(++counter)
//     }
// }, 1000)


// Стрелочные функции

const arrow = (name) => {
    console.log(name)
}
const arrow1 = name => console.log(name)

const pow2 = (num, n) => num ** n

// console.log(pow2(3,3))

// Parametri po ymolchaniyu

const sum = (a = 13, b = 10) => a + b

console.log(sum())

function sumAll (...all) {
    let result = 0
    for (let num of all){
        result += num
    }
    console.log(result) 
}
sumAll(1,100,200,300)


// zamikanie

function createMember (name) {
    return function(lastName){
        console.log(name + lastName)
    }
}
const addLastName = createMember('Artem ')

console.log(addLastName('Konovalov'))
console.log(addLastName('Deev'))


