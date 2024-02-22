// Write your code here!


// non permanent way of removing html
let main = document.getElementById('main')
// # is for ids, . is for classes
main = document.querySelector('#main')
main.remove()


for(let i = 0; i < 10; i++)
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'YourName is the champion'


//getElementsByTagName and getElementsByClassName will remove
const body = document.getElementsByTagName('body')[0]
//document.body.append(newHeader)
body.append(newHeader)
