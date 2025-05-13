const key = '0PScVCOuox3xsTwpAAznk12mAbUi94el'//so the api knows whos requesting

class forecast{
    constructor(){
        this.key = '0PScVCOuox3xsTwpAAznk12mAbUi94el'
        this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/`
        this.base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updatecity(city){
        const citydets = await this.getcity(city)
        const weather = await getweather(citydets.Key)
        return{citydets, weather}
    }
    async getcity(city){
        const query = `?apikey=${this.key}&q=${city}`//fills the requirements in the thing
        const response = await fetch(this.base+query)//await and we fetch base + query (the data)
        const data = await response.json()//turns into json data
        return data[0]//returns first, most relevant, part of data -- most relevant/matching result
    }
    async getweather(kay){
        const base = `http://dataservice.accuweather.com/currentconditions/v1/`
        const e = `${kay}?apikey=${this.key}`//attaching api key and data.Key for location
        const response = await fetch(this.base+e)
        const data = await response.json()
        return data[0]
    }
}

const getcity = async(city)=>{//async function takes city as value
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';//link to go to 
    const query = `?apikey=${key}&q=${city}`//fills the requirements in the thing
    const response = await fetch(base+query)//await and we fetch base + query (the data)
    const data = await response.json()//turns into json data
    return data[0]//returns first, most relevant, part of data -- most relevant/matching result
}
// getcity('delhi').then(data=>{
//     return getweather(data.Key)
// }).then(data=>{
//     console.log(data)
// })
// .catch(error =>{
//     console.log(error)
// })

//get weather
const getweather = async(kay)=>{
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`
    const e = `${kay}?apikey=${key}`//attaching api key and data.Key for location
    const response = await fetch(base+e)
    const data = await response.json()
    return data[0]
    // console.log(data)
}

// getweather(202396).then(data=>{
//     console.log(data)
// })