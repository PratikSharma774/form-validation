import React from 'react'
import rocketImg from '../assets/rocket.png'
import { AddEmployee } from './AddEmployee'
import { NavBar2 } from './NavBar2'

export const AdminEmployeeComponent = () => {
    return (
        <div>
    <div>
        <NavBar2 />
    </div>
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <AddEmployee />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={rocketImg} alt=""/>
          </div>
        </div>
      </div>
      </div>
      )
}
