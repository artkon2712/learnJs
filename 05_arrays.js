
// // console.log(cars)

// cars.push('Porsche')

// cars.unshift('Lada')

// // cars.shift()
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(cars)

// console.log(firstCar)
// console.log(lastCar)

// console.log(cars.reverse())


// Zadacha1
// const text = 'Привет, я учу ЖаваСкрипт'
// const reversed = text.split('').reverse().join('')
// console.log(reversed)





// const person = people.find(person => person.budget === 4000)
// console.log(person)
// let findedPerson
// for (const person of people){
//     // console.log(person)
//     if (person.budget === 3000){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)





// console.log(people)
// const index = people.findIndex(function (person){
//     return person.budget === 1500
// })
// const person = people.find(function (person){
//     return person.budget === 4000
// })
// console.log(people[index])
// console.log(person)
// const index = cars.indexOf('BMW')
// console.log(cars[index])


// console.log(cars.includes('Ford')) 
// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// 
// const koren = sq2 => Math.sqrt(sq2)
// .map(koren)
// console.log(squareNum)
// console.log(upperCaseCars)
const cars = ['Mazda', 'BMW', 'Audi', 'Ford']
const num = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name : 'Artem', budget : 3000},
    {name : 'Timur', budget : 1500},
    {name : 'Vladimir', budget : 4000}
]
// const pow2 = sq => sq ** 2
// const squareNum = num.map(pow2)
// const filteredNum = squareNum.filter(num => num > 20)
// console.log(squareNum);
// console.log(filteredNum)

const budgetSum = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    },0)
console.log(budgetSum)



