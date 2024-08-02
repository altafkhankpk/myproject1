"use client"

import axios from "axios";

import useSWR from "swr";

const fetcherG=(...args)=>{
    return axios.get(...args).then(resp=>resp.data);

}
let freshSow= ()=>{
    let{data,error,isLoading}= useSWR('https://fakestoreapi.com/products/1',fetcherG);

return <div>

{isLoading ? <h1>is_Loading.......ohhh</h1>:null}
{error ? <h1>ufff..Error is occured....ohhh</h1>:null}

{ data ? <div>
      <h2>{data.title}</h2>
      <h2>{data.price}</h2>

</div>:null}

</div>

}

export default freshSow;