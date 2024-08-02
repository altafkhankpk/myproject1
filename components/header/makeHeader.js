
"use client"
import Link from "next/link";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { meraStore } from '@/store/store';
import Head from 'next/head';
import { useState } from "react";
import { addUser, removeUser, setUser, updateUser } from '@/store/auth';

// export default ()=>{
    
//   //       return  <Provider store={meraStore}>    
//   //       <Header></Header>
//   // </Provider>
//   // }

  export default function Header() {
  // store me data bjne kilye ye banaya hai
    let dispatch=useDispatch();

    // store se data mangwane kilye use kiya hai useSelector ko
    let someName=useSelector(function(store){
      return store.currentUser
    });
    let mereUsers= useSelector(function(store){
      return store.users
    });
  
        
       return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a class="navbar-brand" href="#">Altaf</a>
        {someName._id ? <span>Welcome, <b>{someName.user_name}</b></span> : null}

          
          <button onClick={function(){

           let data =  prompt("enter data")

       dispatch(addUser(data))

              }}>send data</button>

<table>
        {
          mereUsers.map(function(user, index){
              return <tr key={index}>
                <td>{user}</td>
                <td>
                   <button onClick={function(){

                    dispatch(removeUser(index));

                   }}>Delete_User</button>
                </td>
                <td>
                   <button onClick={function(){

                    let newName = prompt('enter new name')

                    dispatch(updateUser({
                      newName,
                      index
                    }));

                   }}>Update_User</button>
                </td>
              </tr>

          })
        }

      </table>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="./#">
                  Home
                </Link>
              </li>
             {!someName._id ?<li className="nav-item">
                <Link className="nav-link" href="./Login">
                login
                </Link>
              </li>:null} 

              {someName._id ?<li className="nav-item">
                <Link className="nav-link" href="./create-product">
                Create_Product
                </Link>
              </li>:null} 
              {someName._id ?<li className="nav-item">
                <Link className="nav-link" href="./my-products">
                My_product
                </Link>
              </li>:null} 
              {someName._id ?<li className="nav-item">
                <Link className="nav-link" href="./users">
                users
                </Link>
              </li>:null} 
              {someName._id ?<li class="nav-item">
              <Link onClick={function(){
                dispatch(setUser({}))
              }} class="nav-link" href="./login">logout</Link>
            </li> : null}

              <li className="nav-item">
                <Link className="nav-link" href="./Signup">
                signup
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
}      