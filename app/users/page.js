
"use client"
import { setUser } from "@/store/auth"
import axios from "axios"
// import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import useSWR from "swr"


const fetcher_data=(...args)=>axios.get(...args).then(resp=>resp.data)
let userShow=()=>{
    // let city=useSearchParams().get('city');
    // let name = useSearchParams().get('name');
    let{data,error,isLoading}=useSWR('/api/signup',fetcher_data)

    return <div>
        {/* <h1>{city}{name}</h1> */}
    {data ? <table border={2}>
        <thead>
            <tr><td>ID:</td>
            <td>Email:</td>
            <td>Password:</td>
            </tr>
            
        </thead>
        {
        data.users.map(function(user){
            return <tr>
                <td>{user._id}</td>
                <td>{user.user_email}</td>
                <td>{user.user_password}</td>
                <td>
                <button onClick={()=>{
                    axios.delete('/api/signup?abc='+user._id)
                }}>Delete</button>
                </td>
                <td>
                    <button onClick={function(){
                        user.user_email = prompt("enter a new email here");

                        axios.post('/api/signup?a=10',user)
                    }}>Update</button>
                </td>
            </tr>
        })
    }

    </table>:null}

    </div>
}
export default userShow;