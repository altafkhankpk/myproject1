"use client";
import category from "@/apis/category";
import { useRef } from "react";


export default()=>{

    let cREf = useRef();

    const saveCategory = () => {

        

        category.getCategories().then(function(resp){
            console.log(resp.data)
        })

    }

    return <div>

        <input ref={cREf} type="text" />
        <br />
        <button onClick={saveCategory}>Add Category</button>

    </div>

}