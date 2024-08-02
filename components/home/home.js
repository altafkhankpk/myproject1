"use client";
import './home.css';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "../card/card";

let homeShow= () => {


    let [search, setSearch] = useState('');
    let [ads, setAds] = useState([]);

    function deleteKaro(id){

        // [2,3,4,5,6,7,8]

       let index =  ads.findIndex(function(ad){
            if(ad.id == id){
                return true;
            }
        })

        if(index != -1){
            ads.splice(index, 1) 
        }

        // let some = ads.filter(function(ad){
        //    return ad.id != id;
        // })

        setAds([...ads])

        

    }

    // let t = useRef();

    // jab react ka component ready hojata
    // means uski HTML wagera ban jati
    // then useEffect ka function chlta
    // yeh 3 times run hota
    // 1) jab react component bnta h 
    // 2)jab comoonent update hojata
    // 3) jab component browser se remove hota


    // jab koi library install krni ho JS kay project
    // npm install aapkiLibraryKaName

    // yarn add aapkiLibraryKaName


    // useEffect waley function ko kabhi async mark nahi krte
    // agar zaroorat ho to uske andr aik local function banakar use
    // async karde aur use andr hi call krlen
    useEffect(function(){

        async function loadAds(){
           let resp =  await axios.get('/api/product');
           console.log(resp.data);
           setAds(resp.data)
        }

        loadAds();


        

    }, [])

  
    return <div>

        <input onInput={function(evt){

            setSearch(evt.target.value.toLowerCase());

        }} placeholder='Search Products' />
        
     <div id="adsContainer">
        {
            ads.filter(function(ad){

                if(ad.name.toLowerCase().includes(search) || search == ""){
                    return true;
                }else{
                    return false;
                }


            }).map((ad)=>{

                return <Card  deleteCard={deleteKaro} abc={ad}></Card>

            })


        }

     </div>

    </div>

}


export default homeShow;