const auth = (req,res,next)=>{
    const {user} = req.query
    if(user==='john'){
        req.user = {name:'john',id:3}
        next()
    } else{
        res.status(401).send('unuath')
        next()
    }
}
module.exports = auth