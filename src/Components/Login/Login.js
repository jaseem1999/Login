import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Alert,Form, Button, Card } from 'react-bootstrap'
import {auth} from '../../../src/Firebase/Firebase';

import {signInWithEmailAndPassword } from "firebase/auth";
import '../Login/Login.css'

function Login() {
    const [logemail,setLogemail] = useState('');
    let history = useHistory();
    const [logpassword,setLogpassword] = useState('');
    const [error,setError] = useState('');
    const [frLogError,setFrLogError] = useState('Firebase: Error (auth/wrong-password)');
  
    const errorMessage = "Wrong Email or Password";
    if (errorMessage === frLogError) {
        setFrLogError(errorMessage);
    }
    const handleonClick = (e) => {
        e.preventDefault();
       signInWithEmailAndPassword(auth, logemail, logpassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  }).then(() => {
    history.push("/main");
    window.location.reload();
  }
  ).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
    console.log(errorMessage);
  });
    }
  setTimeout (() => {
  },5000);

   
  
  return (
    <div className="login">
      <div className="row">
            <div className="col-md" >
      <div className="">
        <section>
                  <Card className="card-login" style={{ width: '20rem' }}> 
                    <Form className="form-login" onSubmit={handleonClick}>
                        <>
                          {error &&[
                            'danger'
                          ].map((variant) => (
                            <Alert key={variant} variant={variant}>
                              {errorMessage} 
                            </Alert>
                          ))}
                        </>
                      <h2 className="login-header">Login</h2>
                      <div id='img-login' className="login-img">
                        <img  src="https://th.bing.com/th/id/OIP.iR-L3h8p33r7B8Dn80Lh3AHaHa?pid=ImgDet&rs=1" alt="login-img" />
                      </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setLogemail(e.target.value)} value={logemail}  />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  required onChange={(e) => setLogpassword(e.target.value)} value={logpassword} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className='labelCheck' type="checkbox"  label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Login
              </Button>
              <a id="sin-btn"className="btn btn-success"href="/signin"> Sign UP</a>
      
            </Form>
            </Card>

            </section>
        </div>
        </div>
         <div class="col-md">
        
               <h1 className="nft">Non-fungible tokens (NFTs)</h1>
                <p className="nft-desc">
                   An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.<br/><br/>
                   Although they’ve been around since 2014, NFTs are gaining notoriety now because they are becoming an increasingly popular way to buy and sell digital artwork. The market for NFTs was worth a staggering $41 billion in 2021 alone, an amount that is approaching the total value of the entire global fine art market.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login