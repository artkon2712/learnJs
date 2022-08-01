const obj = new Object({
    name:'Artem',
    age:21,
    greet: function(){
        console.log('Greet')
    }
})


Object.prototype.sayHello = function(){
    console.log('Hello')
}

const artem = Object.create(obj)
artem.name='tema'

const check = new String('str')
// все есть объект
