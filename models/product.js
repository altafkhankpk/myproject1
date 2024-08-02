let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:String,
    price:String,
    location:String,
    owner:String
})

export let Product = mongoose.models.product || mongoose.model('product',userSchema);
