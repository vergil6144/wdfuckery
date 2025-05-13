class usr{
    constructor(un){
        //proprties
        this.username =un
    }
    login(){
        console.log('loggedin')
        return this;
    }
    score(){
        console.log('score')
    }
}

class admin extends usr{
    constructor(un, t){
        super(un)
        this.title = t
    }
    delete2(usr){
        users = users.filter((user)=>{
            return user.username !== usr.username //users.filter 
        })
    }

}

const usr1 = new usr('sexyback'); 
const usr2 = new usr('p'); 
const ad = new admin('ad','j')

usr1.login().login().score() //because return this returns the object we can chain methods

console.log(usr1.login()) // will log usr object because thats what its returning
let users = [usr1, usr2, ad]
console.log(users)
ad.delete2(usr1)
console.log(users)
console.log(ad)