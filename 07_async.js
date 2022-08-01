// const timeout = setTimeout(()=>{
//     console.log('Hi')
// }, 2500)
// const delay = (callback, wait = 1000) =>{
//     setTimeout(callback, wait)
// }

// delay(()=>{
//     console.log('After5 sec')
// }, 5000)

const delay = (wait = 1000) =>{
    const promis = new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('Polomavsya, try again')
        }, wait)
    })
    return promis
}
// delay(2500)
//     .then(()=>{
//         console.log('Hi 1')
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('finally'))

const getData = () => new Promise(resolve => resolve([
    1,2,3,4,5
]))

// getData().then(data => console.log(data))

async function asyncEx () {
    try{
        await delay(3000)
        const data = await getData()
        console.log('data',data)
    } catch (e){
        console.log(e)
    }
}
asyncEx()