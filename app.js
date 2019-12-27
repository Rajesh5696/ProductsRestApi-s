const express = require('express')
const app = express()

const port = process.env.PORT||3000
// const port =3000
var mongoose = require('mongoose')
var userProfilesModal=require('./UserProfile/userProfile');
app.use(express.json());


// app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => {
ConnecttoMonoDb()
console.log(`app listening on port ${port}!`)
app.get('/', (req, res) => {
    res.send('HEY')
  })
  
})


function ConnecttoMonoDb(){


<<<<<<< HEAD
    mongoose.connect('mongodb://52.66.166.185:27017',(err,client)=>{
=======
    mongoose.connect('mongodb:52.66.166.185:27017',(err,client)=>{
>>>>>>> d00b082a5c20a42c974385d6a1cb953466da9c7e
        if(err){
            return console.log('unable to connect mongodb')
            res.send('sorry!')
        }else{
            
            console.log('connected to  mongodb')
            console.log('','client say hiii   !!!');
            app.use('/UserProfile',userProfilesModal);
        }
    });

}
