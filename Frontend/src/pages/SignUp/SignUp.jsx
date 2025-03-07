import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './SignUp.css';
import logo from "../../images/Logo.png";
import signUpImg from "../../images/GettyImages-1188433157.jpeg";

const SignUp = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/signup",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({name,email,password})
      })
      if(response.ok){
        alert("User Register Successful!")
          navigate("/signin");
      }
          else{
              alert("Error registering user");
          }
      
   };



  return (
    <div className="signup-container">
      <div className="signup-form">
       
        <h1 className="title">Sign Up</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Name"
            className="input-field"
            required value={name} onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            required value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        <div className="login-link">
          <p>
            Already have an account? <Link to="/signin" className="link">Sign In</Link>
          </p>
        </div>

        <div className="signup-options">
          <button className="google-btn">
            <FontAwesomeIcon icon={faGoogle} className="icon-spacing" />
            Continue with Google
          </button>
          <button className="apple-btn">
            <FontAwesomeIcon icon={faApple} className="icon-spacing" />
            Continue with Apple
          </button>
          <button className="facebook-btn">
            <FontAwesomeIcon icon={faFacebook} className="icon-spacing" />
            Continue with Facebook
          </button>
        </div>
      </div>

      <div className="image-container">
        <img src={signUpImg} alt="Project Image" className="project-image" />
      </div>
    </div>
  );
};

export default SignUp;
