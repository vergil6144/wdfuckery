// const gettodos = (resource)=>{
//     return new Promise((resolve, reject)=>{//pass in resolve and reject as arguments, javascript gives you these whenever you make a funciton inisde a promise
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', ()=>{
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState ===4){
//                 reject('error')
//             }
//         })
//         request.open('GET', resource)//method, location
//         request.send()
//     })
    

// }

// gettodos("todo.json").then((data)=>{
//     console.log('promise resolved', data)
//     return gettodos('todo2.json') // returns a promise, 
// }).then((data)=>{
//     console.log('promise2resolved', data)
//     return gettodos("todo3.json")
// }).then((data)=>{
//     console.log('3done', data)
// }).catch(err=>{
//     console.log(err)
// })//promise chaining, catch(err) fires for any of the chained promises/requests
// //when something returns a promise, tackle it with the .then method

// // gettodos('todo.json', (err, data)=>{
// //     console.log(data)
// // })

// // gettodos('todo2.json', (err, data)=>{
// //     console.log(data)
// // })


// // const getsomething = () => {
// //     return new Promise((resolve, reject)=>{ //resolve and reject are functions built into the promise api
// //         resolve('sumdata')
// //         // reject('sumerror')
// //     });
// // }

// // getsomething().then((data)=>{ //when a promise is completed it fires the then method if the promise is resolved it fires the first one if not it fires the second
// //     console.log(data)
// // }, (error)=>{
// //     console.log(error)
// // })

// fetch('todo.json').then((response)=>{ //response is fired if it is resolved
//     console.log(response)
//     return response.json()//response.json returns a promise
// }).then(data=>{//this then method then tackles that promise and logs the data whenever the promise is returned (can take time)
//     console.log(data)
// }).catch((error)=>{ //error is fired if reject
//     console.log(error)
// })

// const gettos = async() =>{//async functions return promises
//     const reponse = await fetch('todo.json') //fetch(resource) returns a promise
//     if(reponse.status!==200){
//         throw new Error('fuckery')
//     }
//     const data = await reponse.json()
//     // await stalls js from putting a value to the response until the fetching is complete
//     // async does not block the code
//     // console.log(data)
//     return data
// }

// gettos().then((data)=>{
//     console.log(data)
// }).catch(error=>
//     console.log('rejected',error.message))

//returns a promise


const fc = new forecast()
// console.log(forecast.updatecity)
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const img = document.querySelector('.img')
const icon = document.querySelector('.icon')
const body = document.querySelector('body')

const updateui = (data)=>{
    // const citydets = data.citydets
    // const weather = data.weather
    const {citydets, weather} = data;
    details.innerHTML = `<h3>${citydets.EnglishName}</h3>
                <div>${weather.WeatherText}</div>
                <div>
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`
    icon.innerHTML = `<img src="icons/${weather.WeatherIcon}.svg">`
    if(weather.IsDayTime){
        console.log('fu')
        img.innerHTML = `<img src="day.svg" alt="placeholder" class="time">`
        body.classList.add('day')
        body.classList.remove('normal')
        body.classList.remove('night')



    }else{
        console.log('fu')
        img.innerHTML = `<img src="night.svg" alt="placeholder" class="time">`
        body.classList.add('night')
        body.classList.remove('normal')
        body.classList.remove('day')



    }
}

const cform = document.querySelector('form')//assigning a vairable to the form
cform.addEventListener('submit', (e)=>{//listening for the event submission
    card.classList.remove('hide')
    e.preventDefault()//prevent the refresh
    const city = cform.city.value.trim() //name of input is icty
    localStorage.setItem('city',city)
    console.log(localStorage)
    cform.reset()//clear the form post submission
    // console.log(city)
    fc.updatecity(city).then(data=>{ //passes the city value to update city function
        console.log(data)//logs what updatecity returns
        updateui(data)
    }).catch(err=>{console.log(err)})
})

const updatecity = async (city)=>{
    console.log(city)//logs the value inputted
    const citydets = await getcity(city)//uses function in other js file to get city details
    const weather = await getweather(citydets.Key)//gets the key from the city details
    return{citydets, weather} //assumes the property and value are both citydets and weather (when the property name is the same as the value name)
}

if(localStorage.getItem('city')){
    card.classList.remove('hide')
    updatecity(localStorage.getItem('city'))
    .then(data=>updateui(data))
    .catch(err=>console.log(err))
} //string of any length is true