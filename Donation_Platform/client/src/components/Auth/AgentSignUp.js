import React, { useState , useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';

function AgentSignUp() {
    const [agentname, setAgentName] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

   const registerAgent =()=>{
    let params = {
        agentname:agentname,
        contact:contact,
        address:address,
        email:email,
        password:password,
        usertype: 2 
    }
    fetch("http://localhost:4000/auth/agentSignup",{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept:'applizcation/json'
    },
    body: JSON.stringify(params)
    }).then((res)=>res.json()).then((result)=>{
        if (result === 'success') {
            setMessage('Registered successfully');
          } else {
            setMessage('Registration failed');
          }
   });
};

useEffect(() => {
    if (message === 'Registered successfully') {
      setTimeout(() => {
        navigate('/SignIn'); // Redirect to the home page after 2 seconds
      }, 2000);
    }
  }, [message, navigate]);
  return (
    <div className="background2">
    <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-6">
                    <div class="glassmorphic rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary">DONATION PLATFORM</h3>
                            </a>
                            <h3>AGENT SIGN UP</h3>
                        </div>
                        {message && <div className="alert alert-info">{message}</div>} {/* Display message */}
                        
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingText" placeholder="First Name"
                            onChange={(e) => setAgentName(e.target.value)} />
                            <label for="floatingText">Agent Name</label>
                        </div>

                        <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingText" placeholder="Phone Number"
                        onChange={(e) => setContact(e.target.value)} />
                            <label for="floatingText">Contact</label>
                        </div>
                        <div className="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Enter Volunteer Address"
                      id="floatingTextarea"
                      name="address"
                      style={{height: "100px"}}
                      onChange={(event) => setAddress(event.target.value)}
                    ></textarea>
                    <label for="floatingTextarea">Address</label>
                    
                  </div>
                       
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)} />
                            <label for="floatingInput">Email Id</label>
                        </div>

                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button type="butoon" class="btn btn-primary py-3 w-100 mb-4"
                        onClick={registerAgent}
                        
                        >Sign Up</button>
                        <p class="text-center mb-0">Already have an Account? <a href="/">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AgentSignUp;