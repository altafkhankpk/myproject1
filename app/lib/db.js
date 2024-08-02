import mongoose from "mongoose";

export function dbConnectKaro(){

    mongoose.connect('mongodb+srv://altaf_23grd:web420420@cluster0.bavwnk9.mongodb.net/cat').then(function(connection){
        console.log(connection)
        console.log("DB Connect hogiya panday g")
    }).catch(function(err){
        console.log(err)
    });
}