import React, { useState } from 'react';
import './Signin.css'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {auth} from '../../../src/Firebase/Firebase';
import {db} from '../../Components/FirebaseCo/FirebaseCo';
import {createUserWithEmailAndPassword} from 'firebase/auth';
// import Eyboard from '../KeybordS/Eyboard';


function Signin() {
    let history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    
    
    const addUser = (e) => {
      e.preventDefault();
      console.log(name,email,number,password);
      
    }

    const add = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        db.collection('user').add({
          name: name,
          number: number,
      })}).then(() => {
         alert("User created successfully");
         go();
      }).then(() => {
        setName('');
        setEmail('');
        setNumber('');
        setPassword('');
      }).then(() => { 
       setTimeout(function(){
        window.location.reload(1);
    }, 3000);
      })
    } catch (error) {
      console.log(error.message);
      setError(error.message)
    }
  };
  const go = () => {
      history.push('/login');
  }


  return (
    <div className="signup" >
        <div className="row">
            <div className="col-md" >
              <Form  className="form-signin" onSubmit={addUser}>
                  <div id='img-signin' className="signin-img">
                    <img  src="https://th.bing.com/th/id/OIP.iR-L3h8p33r7B8Dn80Lh3AHaHa?pid=ImgDet&rs=1" alt="login-img" ></img>
                  </div>
                      <>
                          {error &&[
                            'danger'
                          ].map((variant) => (
                            <Alert key={variant} variant={variant}>
                              {error } {variant}
                            </Alert>
                          ))}
                        </>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} value={name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter Your Number" required onChange={(e) => setNumber(e.target.value)} value={number} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={add}>Submit</Button>
                    <a id="logbtn" class="btn btn-success"href="/login">Login</a>
                    <p id="error">{error}</p>
                </Form>
          {/* <Eyboard/> */}
              </div>
            <div class="col-md">
              <h1 className="meta">metaverse</h1>
              <p className="meta-desc">
                In futurism and science fiction, the metaverse is a hypothetical iteration of the Internet as a single, universal and immersive virtual world that is facilitated by the use of virtual reality (VR) and augmented reality (AR) headsets.[1][2] In colloquial use, a metaverse is a network of 3D virtual worlds focused on social connection.[2][3][4]
                The term "metaverse" originated in the 1992 science fiction novel Snow Crash as a portmanteau of "meta" and "universe." Metaverse development is often linked to advancing virtual reality technology due to increasing demands for immersion.[5][6][7] Recent interest in metaverse development is influenced by Web3,[8][9] a concept for a decentralized iteration of the internet. Web3 and The Metaverse have been used as buzzwords[1][10] to exaggerate development progress of various related technologies and projects for public relations purposes.[11] Information privacy, user addiction, and user safety are concerns within the metaverse, stemming from challenges facing the social media and video game industries as a whole.
              </p>
            </div>
          </div>
    </div>
  )
}

export default Signin