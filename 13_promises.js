console.log('request data...')

// setTimeout(() => {
//     console.log('prepare data')
//     const backData = {
//         name: 'artem',
//         age: 33
//     }


//     setTimeout(()=>{
//         backData.modified = true
//         console.log('Data received ', backData)
//     },2000)
// },2000)


// const dataServ = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('prepare data')
//         const backData = {
//             name: 'artem',
//              age: 33
//         }
//         resolve(backData)
//     },2000)
// })

// dataServ.then((data) => {
//         return dataServ2 = new Promise((resolve,reject) =>{
//                 setTimeout(()=>{
//                     data.modified = true
//                     resolve(data)
//                 },2000)
//         })
// })
//     .then(clidata => {
//         console.log('data:', clidata)
//         clidata.fromPro = true
//         return clidata
//     })
//     .then(data => {
//     console.log('new data:', data)
//     })
//     .catch(err => console.error('error', err))
//     .finally(()=>{
//         console.log('Final')
//      }

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(()=>resolve(),ms)
    })
}

// sleep(2000).then(()=> console.log('otrabotalo'))

Promise.all([sleep(2000), sleep(5000)])
    .then(()=>{
        console.log('all promises')
    })

Promise.race([sleep(2000), sleep(5000)])
    .then(()=>{
        console.log('race promises')
    })