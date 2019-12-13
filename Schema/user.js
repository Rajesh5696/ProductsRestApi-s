var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema= Schema({
    name:{
        type:String,
        required:true,
            trim:true,
            minlength:1,
            unique:true,
            validate:{
                validator:(value)=>{

                },
                // message:`${VALUE} is not a valid emial`
            }
    },
    age:Number,
    location:String
},{
     versionKey: false ,
     collection:'Users'

});
var usermodel=mongoose.model('Users',userSchema);

exports=module.exports=usermodel;






