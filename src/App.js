import './App.css';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import { NavBar } from './components/NavBar2';
import {BrowserRouter, Routes, Rotue, Route} from 'react-router-dom'
import { SignupComponent } from './components/SignupComponent';
import { Login } from './components/Login';
import { ContactusComponent } from './components/ContactusComponent';
import { AdminEmployeeComponent } from './components/AdminEmployeeComponent';
import React from 'react';
import { LoginComponent } from './components/LoginComponent';

function App() {

  
  const[user,setUser]= React.useState('');
  const handleUser = (data) =>{
    setUser(data);
  }
  return (
    <BrowserRouter>

    <Routes>
     <Route path="/" element={<LoginComponent user={user} setUser={handleUser}/>}></Route>
     <Route path="/register" element={<SignupComponent />}></Route>
     <Route path="/contactus" element={<ContactusComponent />}></Route>
     <Route path="/adminLogin" element={<AdminEmployeeComponent />}></Route>
     <Route path="/retrieve" element={<AdminEmployeeComponent />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
