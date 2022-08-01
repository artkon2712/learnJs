// const name = 'Tema'
// console.log (typeof name)
// const age = 22
// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age} ${age === 21 ? ' год.':' лет.'}`

// console.log(output)


// const name = 'Темочка'
// console.log( name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ка'))
// console.log(name.toLowerCase().startsWith('тем'))
// console.log(name.repeat(3))
// const str = '     Password      '
// console.log(str.trim())
// console.log(str.trimRight())

function logPerson (s, name , age) {
    if (age < 0){
        age = 'Not born'
    }
    return `${s[0]} ${name} ${s[1]}${age}${s[2]}`
}
const personName='Artem'
const personAge=26
const personAge2=-10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}.`
const output1 = logPerson`Имя: ${personName}, Возраст: ${personAge2}.`
console.log(output)
console.log(output1)