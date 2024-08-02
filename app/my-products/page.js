
"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";


let myProduct= ()=>{

    let [products,setProducts] = useState([]);

    let userki_ID =useSelector(function(store){
        return store.currentUser._id;
    })

    useEffect (()=>{
         axios.get('/api/product?user='+userki_ID).then(function(resp){
            setProducts(resp.data);
         })
    },[])

    return <div>

        <table border={2}>
        {
            
            products.map(function(product){
             

                <tr><td>name:</td>
             <td>price:</td>
             <td>location:</td></tr>
                return <tr>
                    
                    <td>
                        {product.name}
                        {product.price}
                        {product.location}
                    </td>
                </tr>
            })
        }

        </table>
    </div>
}

export default myProduct;