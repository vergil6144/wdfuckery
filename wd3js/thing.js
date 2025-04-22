// const form = document.querySelector(".form");
// const feedback = document.querySelector('.feedback');
// const inp = document.querySelector('.inpsub')
// // const un = document.querySelector('#un')
// const pattern = /^[a-zA-Z0-9]{6,}$/ // regular expression


// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     //prevents the default action of the event, in this case the default action of the event e is refreshing the page
//     const username = form.username.value;
//     if(pattern.test(username)){
//         feedback.textContent = "works for me lol"
//         feedback.style.color = 'green';
//         //inp.style.border = '2px solid green'
//         console.log(form.username)

//     } else{
//         feedback.textContent = "no no no you've done it all wrong"
//         feedback.style.color = 'crimson';
//         //inp.style.border = '2px solid crimson'
//     }

//     // form.username matches the id

// });

// form.username.addEventListener('keyup', function(e){
//     console.log(e.key)
//     //console.log(e.target.value, form.username.value)
//     if(pattern.test(e.target.value)){
//         inp.style.border = '2px solid green'
//         // form.username.setAttribute('class', 'success')
//     } else{
//         inp.style.border = '2px solid crimson'
//     }
// })

// regex is contained between two /
// /[a-zA-Z]{6,}/ - means it can contain a-z, A-Z and be atleast 6 characters long
// ^ and $ mean that if the requirements are not met by the username itself and only a section of it, it should come out false
// let result = pattern.test(username)
// console.log(result)

let score = 0;


const correctanswers = ['A','A','A','A'];
const form = document.querySelector('.quizform')
const percent = document.querySelector('.percent')
const result = document.querySelector('.result')
const q = document.querySelector('.q')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const useranswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    useranswers.forEach(function thing(answer,index){
        if (answer === correctanswers[index]){
            score+=25
        } else{
            score +=0
        }
    })
    scrollTo(0,0) //x and y coordinates
    console.log(score)
    percent.textContent+= score + '%'
    console.log(result.style.display)
    console.log(result.style)
    result.style.display = 'block'
    console.log(q.style)

    let output = 0
    const timer = setInterval(function(){
        percent.textContent= `${output}%` //display the output and then start increasing until it matches the score
        if (output === score){
            clearInterval(timer) // stop this whole thing now that the output matches the score
        } else{
            output++ // increase the output till it matches the score
        }
    }, 30) // do all this every 30 seconds

})

