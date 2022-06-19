import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import  { Nav } from 'react-bootstrap'
import './Main.css'
import {useContext}  from 'react';
import {AuthContext} from '../../Store/Context';


function Main() {
  
  const {user}=useContext(AuthContext)
  console.log(user);
  return (
    <div className="main">
        <Nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar"
  activeKey="/"
  onSelect={(selectedKey) => alert(`home${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item className = "nav-login">
    {user ? user.name : 'login' }
  </Nav.Item> 
   <Nav.Item className="nav-logout">
    Sign up
  </Nav.Item>
  <Nav.Item className="nav-logimg">
    <img className="" src="https://th.bing.com/th/id/OIP.iR-L3h8p33r7B8Dn80Lh3AHaHa?pid=ImgDet&rs=1" alt=""/>
  </Nav.Item>  
  </Nav>
   <div className="content">
            <h1>Welcome</h1>
            <p>To Metaverse<br/>
            <span>Metaverse is a decentralized network of virtual worlds</span>
            
            </p>
        </div>
    </div>
  )
}

export default Main