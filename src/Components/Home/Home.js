import React from 'react'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import starMeta from '././img/starMeta.mp4'
function Home() {
  return (
    <div className='main'>
        <div className=""></div>
        <video src={starMeta} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To Metaverse<br/>
            <span>Metaverse is a decentralized network of virtual worlds</span>
            
            </p>
        </div>
        <div className="goto">
            <div className="in">
                <a className="btn btn-light" href="/login">Login</a>
                
            </div>
            <div className="out">
                <a className="btn btn-light"  href="/signin">Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default Home