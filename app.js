// lesson 14

const url = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// xhr.open('GET', url)
// xhr.responseType= 'json'

// xhr.onload =() => {
//     console.log(xhr.response)
// }

// xhr.send()


//  function sendRequest(url){
//     return new Promise(resolve =>{
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET',url)
//         xhr.responseType = 'json'
//         resolve(xhr)
//     }).then(data => {
//         data.onload = () =>{
//             console.log(data.response)
//         }
//         data.send()
//     })
// } 
// sendRequest(url)
 function sendRequest(method, url, body = null){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType= 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () =>{
            if (xhr.status >= 400){
                reject(xhr.response)
            }else {
                resolve(xhr.response)
            }
        }
        xhr.send(JSON.stringify(body))
    })
 }

 body = {name:'Artem', age:13}
sendRequest('POST',url,body)
    .then((data) => console.log(data))