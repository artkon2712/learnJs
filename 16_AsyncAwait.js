// Lesson 8
const wait = (time) => {
    return new Promise(resolve => {
        setTimeout(()=>resolve(),time)
    })
}

// wait(2000).then(()=> console.log('2sec'))


const url = 'https://jsonplaceholder.typicode.com/todos'


// function fetchTodos(){
//     console.log('Fetch started')
//     return wait(2000).then(()=>{
//         return fetch(url)
//     }).then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.error(e))
async function fetchAsyncTodos(){
    try{
        await wait(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
     catch(e){
        console.error(e)
    } finally{
        console.log('end')
    }
}
   

fetchAsyncTodos()


