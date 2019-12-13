const express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var userProfile = require('../Schema/user');
mongoose.promise = global.promise;
var objectId = require('mongodb').ObjectID;
console.log('created');
router.post('/', function (req, res) {
    let input = req.body
    let response = { statusCode: 1, statusMessage: "Success" }
    console.log('userLogin', input);

    var query = {name : input.name}
    userProfile.findOne(query,function(err,userprofile){
        if(err){
            response.json({statusCode:0,statusMessage:'wrong'})

        }else if(userprofile){
            getUserData(userprofile,input,res)
        }else{
            createNewUser(input, res)
        }
    })
   

})

router.get('/',function(req,res){
    userProfile.find({},function(err,result){
        if(err){
            console.log('err',err);
        }else{
            res.json({statusCode:1,statusMessage:'Success',users:result})
        }
    })

})

function getUserData(userProfile,input,res){
    console.log('getuserdata',userProfile)
      res.json({ statusCode: 1, statusMessage: 'Already Registered User', data: userProfile });
}

function createNewUser(input, res) {
    console.log('createNewUserMethod', input);
    var userprofileModal = new userProfile();

    userprofileModal.name = input.name;
    userprofileModal.age = input.age;
    userprofileModal.location = input.location;
    saveUser(input, userprofileModal, res)
   }
function saveUser(input, userprofileModal, res) {
    console.log('createNewUserResponse', userprofileModal)
    userprofileModal.save(function (err, userdata) {
        if (err) {
            console.log('err', err)
            console.log(err)
        } else {
            // var tempUserProfile = userprofile.toObject()
            console.log('createNewUserResponse', userdata)
            res.json({ statusCode: 1, statusMessage: 'Success', data: userdata })
        }
    })

}
module.exports = router;


