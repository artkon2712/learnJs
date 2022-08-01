const url = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null){
    const headers = {
        'Content-Type':'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response =>{
        return response.json()
    })
 }

const body = {name:'Artem', age:13}
// sendRequest('GET',url).then(data => console.log(data))

sendRequest('POST', url,body)
 .then(data=> console.log(data))