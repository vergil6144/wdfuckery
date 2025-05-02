localStorage.setItem('name','mario') //key, value
console.log("help")
let name = localStorage.getItem('name')
console.log(name)
localStorage.setItem('name','star')
name = localStorage.getItem('name')
console.log(name)
// localStorage.removeItem('name')
// console.log(name)
// name will still print 
// name = localStorage.getItem('name')
// console.log(name)
localStorage.clear()
name = localStorage.getItem('name')
console.log(name)
//now we get null because we update name before logging it 

const todos = [ 
    {text: 'play mariokart', author: 'shaun'}, 
    {text: 'buy some milk', author: 'mario'}, 
    {text: 'buy some bread', author: 'luigi'} 
];

localStorage.setItem('bakwas',JSON.stringify(todos))
const dos = localStorage.getItem('bakwas')
console.log(JSON.parse(dos))