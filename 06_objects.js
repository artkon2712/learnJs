
// person.age++
// person.lang.push('de')
// delete person['key_4']


// console.log(person.age)
// console.log(person['kids'])
// console.log(person['complex key'])
// console.log(person)

// const name = person.name
// const age = person.age
// const lang = person.lang
// const {name, age: personAge = 10, lang} = person

// console.log(name, personAge , lang)


    // 'complex key' : 'complex value',
    // ['key_' + (1 + 3)]: 'Computed key', // key_4



// for (let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log(`${key} is ${typeof person[key]}: ${person[key]}`)
//     }
//     // console.log('key: ', key)
//     // console.log('Value: ', person[key])
   
// }
// console.log(person)
// const keys = Object.keys(person)
// Object.keys(person).forEach((key) =>  console.log(`${key} is ${typeof person[key]}: ${person[key]}`))

// Context
const person = {
    name : 'Artem',
    age : 21, 
    kids : false,
    lang : ['ru','en','fr'],
    greet(){
        console.log('hello')
    },
    info(){
        console.info('Информация о человек по имени: ', this.name)
    }
}

const logger = {
    keys(){
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues (){
        Object.keys(this).forEach(key => {
            console.log(`Key: ${key}. Value: ${this[key]}`)
        });
    }
}
// const bound = logger.keys.bind(person)
// bound()
logger.keysAndValues.call(person)