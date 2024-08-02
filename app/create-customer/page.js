"use client"

import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import customer from "@/apis/customer";
import { usedDynamicAPIs } from "next/dist/server/app-render/dynamic-rendering";




export default ()=>{
    
    let [customers,setCustomer]=useState([])

    useEffect(()=>{

         

        customer.getCustomers().then((resp)=>{
            console.log(resp.data)
            setCustomer(resp.data);
        })

    }, [])




    function addCustomer(){
            
     
 
    
           customer.addCustomer({
            customer_b_name:prompt('Enter a Customer name'),
            customer_f_name:"Pathan",
            customer_b_address:"kingoflife"


           }).then((resp)=>{
            console.log(resp.data);
            toast.success("customer add successfull");
           })
    
            
    
         
    }

    return <div>
            <table>
                  <thead>
                        <tr>
                            <td>customer name</td>
                            <td>customer  email </td>
                            <td>customer address</td>
                        </tr>
                  </thead>
                   {
                    customers.map(function(cust){
                        return <tr>
                                <td>{cust.customer_b_name}</td>
                                <td>{cust.customer_f_name}</td>
                                <td>{cust.customer_b_address}</td>
                    </tr>
                    })
                   }

            </table>
         <button onClick={addCustomer}> Add customenr</button>

    </div>
}
