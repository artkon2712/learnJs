// Wrapper

const withDefValue = (target, defValue = 0) => {
    return new Proxy(target,{
        get:(obj, prop) =>(prop in obj ? obj[prop] : defValue)
    })
}

const position = withDefValue({
    x: 24,
    y: 33
},0)

console.log(position)

// Hidden properties

const withHiddenProps = (target,prefix='_') => {
    return new Proxy(target,{
        has : (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys : obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get : (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
    })
}

const data = withHiddenProps({
    name:'Artem',
    age:25,
    _uid: '333'
})



// OPtimization


const userData = [
    {id:1, name: 'artem', job: 'Frontend', age:21},
    {id:2, name: 'Sasha', job: 'Manager', age:20},
    {id:3, name: 'Kirill', job: 'Student', age:18},
    {id:4, name: 'Danila', job: 'Soldier', age:22}
]


const IndexedArray = new Proxy(Array, {
    construct (target, [args]){
        const index = {}
        args.forEach(item => (index[item.id]= item))
        return new Proxy (new target(...args),{
            get(arr, prop){
                switch (prop){
                    case 'push': return item =>{
                        index[item.id] = item
                        arr[prop].call(arr,item)
                    }
                    case 'findById': return id => index[id]
                        
                    default: return arr[prop]
                }
            }
        })
    }

})


const users = new IndexedArray([
    {id:1, name: 'artem', job: 'Frontend', age:21},
    {id:2, name: 'Sasha', job: 'Manager', age:20},
    {id:3, name: 'Kirill', job: 'Student', age:18},
    {id:4, name: 'Danila', job: 'Soldier', age:22}
])