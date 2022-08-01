const person = Object.create(
    {
        calculateAge(){
            console.log(new Date().getFullYear() - this.birthDay)
        }
},
{
    name: {
        value: 'Artem',
        enumerable: true,
        writable: false,
        configurable:false
    },
    birthDay: {
        value: 2000,
        enumerable: false,
        writable: true,
        configurable: true
    },
    age:{
        get(){
            return new Date().getFullYear() - this.birthDay
        },
        set(value){
            document.body.style.background = 'red'
            console.log('set', value)
            
        }
    }
})

person.name = 'Max'

// person.birthDay = 2003

delete person.name



console.log(person)
for (let key in person){
    if(person.hasOwnProperty(key)){
        console.log(key)

    }
    
}