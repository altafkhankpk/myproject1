import { createSlice } from "@reduxjs/toolkit";

// data ka section, portion, store ka aik hissa
let authSlice = createSlice({
    name:'authSlice',
    initialState:{
        a:{},
        b:{},        
        name:'rameez',
        users:[],
        currentUser:{}
    },    
    // agar ooper waley initial section ko
    // change/update wagera krna h to
    // neeche reduers ka objet banakar
    // usme hasb-zaroorat function rakhi jyen
    reducers:{
        setUser:function(puranaData, nyData){
            puranaData.currentUser = nyData.payload
        },
        addUser:function(puranaData, nyData){
                                            5
            puranaData.users.push(nyData.payload)

        },
        removeUser:function(puranaData, nyData){

            puranaData.users.splice(nyData.payload, 1)

        },
        updateUser:function(puranaData, nyData){

            puranaData.users[nyData.payload.index] = nyData.payload.newName;


        }
    }
});

export let {addUser, removeUser, updateUser, setUser} = authSlice.actions
export default authSlice;