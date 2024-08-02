
import axios from "axios";

export default {
    addCustomer:(args)=>{

        return axios.post(process.env.NEXT_PUBLIC_MERA_WEB+'/api/customer/addCustomer', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCustomers:(args)=>{

       return axios.post(process.env.NEXT_PUBLIC_MERA_WEB+'/api/customer/getCustomers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCustomer:(args)=>{

       return axios.post(process.env.NEXT_PUBLIC_MERA_WEB+'/api/customer/deleteCustomer', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

}