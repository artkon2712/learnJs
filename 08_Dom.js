// alert('1')

const elem = document.getElementById('hi')
// const elem2 = document.getElementsByClassName('h2-class')
const elem2 = document.querySelector('h2')
// const elem2 = document.getElementsByTagName('h2')
// const elem3 = elem2.nextElementSibling

const h2List = document.querySelectorAll('h2')
const elem3 = h2List[1]



elem2.style.color='green'
elem2.style.fontSize = '50px'

function addStyles (objId){
    objId.style.color = 'red'
    objId.style.textAlign = 'center'
    objId.style.backgroundColor = 'black'
    objId.style.fontSize = '50px'
}

setTimeout(() => {
    addStyles(elem)
},2000)


elem.ondblclick = () => {
    elem.style.backgroundColor= 'brown'
}

elem2.addEventListener('click', () => {
    if (elem2.style.color === 'green'){
        elem2.style.color= 'black'
        elem2.style.backgroundColor = 'lightblue'
    } else {
        elem2.style.color= 'green'
        elem2.style.backgroundColor = 'white'
    }
})

setTimeout(() => {
    addStyles(elem3)
},2500)
const aLink = elem3.querySelector('a')
aLink.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click here ', event.target.getAttribute('href'))
    
})