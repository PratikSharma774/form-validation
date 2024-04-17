import React from 'react'
import { Login } from './Login'
import rocketImg from '../assets/rocket.png'
import { NavBar1} from './NavBar1' 

export const LoginComponent = (props) => {
    return (
        <div>
    <div>
        <NavBar1 />
    </div>
      <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Login {...props}/>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
    </div>
    )
  }
