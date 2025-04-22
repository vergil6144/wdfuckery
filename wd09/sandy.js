// const scores = [10, 30, 15, 25, 65, 60, 50, 5];
// const filtered = scores.filter(function thing(score){
//     return score>20
// });
// console.log(filtered)

// const sales = scores.map(function thing(price){
//     return price/2
// })
// console.log(sales)
// const products = [ 
//     {name: 'gold star', price: 20}, 
//     {name: 'mushroom', price: 40}, 
//     {name: 'green shells', price: 30}, 
//     {name: 'banana skin', price: 10}, 
//     {name: 'red shells', price: 50} 
// ];
// const halfprices = products.map(function thing(object){
//     if(object.price > 30){
//         return {name: object.name, price: object.price/2}
//     } else{
//         return object
//     }
// })

// console.log(halfprices)
// console.log(products)

// const over30 = scores.reduce(function thing(acc, curr){
//     console.log(curr)
//     if(curr>30){
//         acc++
//     } 
//     return acc
// }, 0) //initial value of acc
// console.log(over30)

// const scores2 = [ 
//     {player: 'mario', score: 50}, 
//     {player: 'yoshi', score: 30}, 
//     {player: 'mario', score: 70}, 
//     {player: 'crystal', score: 60} 
// ];

// const marioscores = scores2.reduce(function thing(acc, cur){
//     if(cur.player === 'mario'){
//         acc += cur.score
//     }
//     return(acc)
// },0)
// console.log(marioscores)
// const firsto50 = scores.find(function thing(score){
//     if(score>50){
//         return true;//adds the current value to the list and stops iterating
//     }
// })
// console.log(firsto50)

// const scorest = [ 
//     {player: 'mario', score: 50}, 
//     {player: 'yoshi', score: 30}, 
//     {player: 'mario', score: 70}, 
//     {player: 'crystal', score: 60} 
// ];

// const scores3 = scorest.sort(function thing(a,b){
//     // if a should come first, return a positive, if b then -1 and no reordering 0
//     if(a.score>b.score){
//         return 1 //let order be
//     } else if (a.score === b.score){
//         return 0
//     } else{
//         return -1 //reverse order
//     }
// });

// const scores4 = scorest.sort(function thing(a,b){
//     return a.score-b.score // if b is bigger, this will be -ve and order will be switched; else it will remain the same
//     // b-a would reverse it
// })

// console.log(scores3)
// console.log(scores4)

// const products1 = [ 
//     {name: 'gold star', price: 30}, 
//     {name: 'green shell', price: 10}, 
//     {name: 'red shell', price: 40}, 
//     {name: 'banana skin', price: 5}, 
//     {name: 'mushroom', price: 50} 
// ];

// const products2 = products1.filter(function thing(product){
//     return product.price>20
// })

// const products3 = products2.map(function name(product){
//     return `the ${product.name} is ${product.price/2} pounds`
// })

// console.log(products3)

// console.log(products2)
// console.log(1)
// //method chaining
// const promos = products.filter(product => product.price>20).map(product => `the ${product.name} is ${product.price/2} pounds`)
// console.log(promos)

const list = document.querySelector('.list')
const search = document.querySelector('.search input')
const gentemp = todo=>{
    const html = `            
    <li class = "list-item">
        <span>${todo}</span>
        <i class="fa-regular fa-trash-can del" style="color: #fcfcfc;"></i>
    </li>`
    list.innerHTML += html
}

const add = document.querySelector('.add');
add.addEventListener('submit', e =>{
    e.preventDefault() // dont refresdh the page
    const toadd = add.add.value.trim() //value from the form with name add, trim removes the whitespace

    console.log(toadd)

    // check if what the user has entered has any acutal length
    if(toadd.length > 0){
        gentemp(toadd)
        add.reset();
        //resets input field inside form
    }

})

list.addEventListener('click', e =>{
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
})

const filterdos = (term) =>{
    const ar = Array.from(list.children)
    ar.filter((todo)=> {//array elements are being called todos
        return !todo.textContent.includes(term)
    }).forEach(todo =>{
        todo.classList.add('hide')
    })

    ar.filter((todo)=> {
        return todo.textContent.includes(term)
    }).forEach(todo =>{
        todo.classList.remove('hide')//so that if a user removes some of what they typed in to match another list item, we add it back
    })

};

search.addEventListener('keyup', e=>{
    const term = search.value.trim() //search is assigned to the input field itself
    console.log(term)
    filterdos(term)
})