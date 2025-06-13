import express from 'express'
import {startups} from './data.js'

const app = new express()
app.get('/',(req,res)=>{
    console.log(req.query)
    let fildata = startups
    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query
    if(industry){
        fildata = fildata.filter((startup)=>{
            return industry.toLowerCase() ===startup.industry.toLowerCase()
        })
    }
    if(country){
        fildata = fildata.filter((startup)=>{
            return country.toLowerCase() ===startup.country.toLowerCase()
        })
    }
    if(continent){
        fildata = fildata.filter((startup)=>{
            return continent.toLowerCase() ===startup.continent.toLowerCase()
        })
    }
    if(is_seeking_funding){
        fildata = fildata.filter((startup)=>{
            return JSON.parse(is_seeking_funding.toLowerCase()) ===startup.is_seeking_funding
        })
    }
    if(has_mvp){
        fildata = fildata.filter((startup)=>{
            return JSON.parse(has_mvp.toLowerCase()) ===startup.has_mvp
        })
    }
    res.json(fildata)
})

app.listen(5000,()=>{
    console.log('server listening')
})