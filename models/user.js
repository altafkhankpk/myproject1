// import product from "@/apis/product";

// import mongoose,{mongo} from "mongoose";

let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    user_name : String,
    user_email:String,
    user_password:String,
    role:String
    
})

export let User = mongoose.models.user || mongoose.model('user',userSchema)




// yahan new user create kia ja skte hai
// let u1 = new User();
// u1.user_name = 'ali';
// u1.user_email = 'ali@gmail.com';
// u1.save();

// let u2 =  new User();