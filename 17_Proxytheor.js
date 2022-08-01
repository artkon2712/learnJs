//objects

const person = {
    name:'Artem',
    age:21,
    job: 'frtontend'
}

const objProxy= new Proxy(person, {
    get(target,  prop){

        return target[prop]

    },
    set(target, prop, value){
        if (prop in target){
            target[prop] = value
        }else {
            throw new Error(`No ${prop} field`)
        }
    },
    has(traget, prop){
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop){
        console.log('Deleted')
        delete target[prop]
    }
})


// Functions

const log = text => `log ${text}`


const fp = new Proxy (log,{
    apply(target, thisArg, argArray){
        console.log('Call func')
        return target.apply(thisArg, argArray).toUpperCase()
    }
})


//classes

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}


const PersonProxy = new Proxy (Person, {
    construct(target, args){
        console.log('In proxy construct')
        return new target(...args)
    }
})

const p = new PersonProxy('max', 40)