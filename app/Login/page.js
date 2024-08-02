"use client";

import "./login.css"
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useState } from "react";
import auth from "@/apis/auth";
import { useRouter } from "next/navigation";
import { Provider,useDispatch } from "react-redux";
import { meraStore } from "@/store/store";
import { setUser } from "@/store/auth";
import axios from "axios";
import ReduxProvider from '@/components/reduxProvider/reduxProvider';


let loginShow=()=>{

  // return <Provider store={meraStore}>
  //       <Login></Login>
  // </Provider>

  return <ReduxProvider>
    <Login></Login>
  </ReduxProvider>

}


 function Login(){
  let {register,handleSubmit,formState:{errors}}=useForm();
  
  let [users, setUsers] = useState([])
   let meraRouter=useRouter();
   let dispatch=useDispatch();
    
   function loginKardo(data){

    
  
    
    // users.push(data);
    // setUsers([...users])
    // toast.success("login hogya wa")
    // toast.error("login hogya wa") 
    // toast.warn("login hogya wa")
    // toast.info("login hogya wa")


 
    axios.put('/api/login',data).then(function(resp){
    console.log(resp.data);
   if(resp.data){
    dispatch(setUser(resp.data));
   
   
    toast.success("login is a Successfully");
    meraRouter.push("/dashboard");
   
  }
  // localStorage.setItem('token',token);
 
    });
    
    
   

  }

    return <section className="vh-100 gradient-custom">
    <div className="container py-5 h-50">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>
                <form onSubmit={handleSubmit(loginKardo)}>
                <div
                  data-mdb-input-init=""
                  className="form-outline form-white mb-4"
                >
                  
                  <input {...register('user_email',{validate:function(someEmail){
    let count=0;
let emailMilgyi = users.filter(function(user){
  if(user.user_email == someEmail){
    count++;
    return true;
  }
});

if(count ==2){
  // agar validation failed hogyi h to return true krenge
  return false;
}else{
  // agar validation OK h to return true krenge
  return true;
}

},required:true, pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                   
                    
                  />

       {errors.user_email && errors.user_email.type == "required" ? <div style={ {color:'red'} }>This field is required</div> :null}
        {errors.user_email && errors.user_email.type == "pattern" ? <div style={ {color:'red'} }>Please enter a valid email</div> :null}
        {errors.user_email && errors.user_email.type == "validate" ? <div style={ {color:'red'} }>Email alerady exists</div> :null}
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                </div>
                <div
                  data-mdb-input-init=""
                  className="form-outline form-white mb-4"
                >
                  <input {...register('user_password',{required:true,minLength:6})}
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg"
                    
                  />
                  {errors.user_password && errors.user_password.type =="required" ? <div style={ {color:'red'} }>This field is required</div> :null }
                  {errors.user_password && errors.user_password.type =="minLength" ? <div style={ {color:'red'} }>Please enter atleast 6 letters</div> :null }

                  <label className="form-label" htmlFor="typePasswordX">
                    Password
                  </label>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <button
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Login
                </button>
                </form>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <table>
      {
        users.map((user)=>{
          return <tr>
            <td>{user.user_name}</td>
            <td>{user.user_email}</td>
            <td>{user.user_password}</td>
          </tr>
        })
      }
      </table>

  </section>
  
}

export default loginShow;