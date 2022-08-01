function hello(){
    console.log('Hello', this)
}


const person = {
    name: 'Artem',
    age: 21,
    sayHello: hello,
    hello3: hello.bind(window),
    logInfo: function (job){
        console.group(`${this.name} info.`)
        console.log(`name: ${this.name}  .Age: ${this.age} `)
        console.log(`Work as ${job}`)
        console.groupEnd()
    }
}

const Sasha = {
    name: 'Alexandra',
    age: 21
}

// const f123 = person.logInfo.bind(Sasha, 'manager')
// f123()
// person.logInfo.call(Sasha, 'Manager')
// person.logInfo.apply(Sasha, ['Manager'], )

const arr1 = [1, 2, 3, 5, 6]

// function ymn(arr, x){
//     return arr.map(function (i){
//         return i * x
//     })
// }
// console.log(ymn(arr1, 3))


Array.prototype.multBy = function(n){
    return this.map(i => i*n)
}
console.log(arr1.multBy(10))