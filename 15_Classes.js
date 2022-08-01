// const animal = {
//     name: 'Animal',
//     age: 10,
//     hasTail: true
// }

// class Animal {

//     static type = 'ANIMAL'

//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice(){
//         console.log(`i'm animal`)
//     }
// }
// // const animal = new Animal({
// //     name: 'Zebra',
// //     age: 7,
// //     hasTail: true
// // })

// class Cat extends Animal{
//     static type = 'CAT'

//     constructor(options){
//         super(options)
//         this.color = options.color
//     }

//     voice (){
//         super.voice()
//         console.log('I am cat')
//     }

//     get realInfo(){
//         return this.age * 7
//     }

//     set realInfo(newAge){
//         this.age = newAge
//     }
// }
// const cat = new Cat({
//     name:'cat',
//     age: 5, 
//     hasTail:true, 
//     color: 'black'
// })


class Component {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }
    show(){
        this.$el.style.display = 'block'
    }
}
class Box extends Component {
    constructor(options){
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color

    }
}

const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color:'red'
})
const box2 = new Box ({
    selector: '.box2',
    size: 250,
    color:'lightblue'
})

class Circle extends Box{
    constructor(options){
        super(options)

        this.$el.style.borderRadius = '50%'
       
        
    }
}
const cir1 = new Circle({
    selector: '.cir1',
    size:100,
    color: 'green'
})