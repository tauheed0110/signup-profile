import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user')) || null;

const Signup = () => {
    const navigate= useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    function handleChange(e){
        const propName = e.target.name;
        const propValue = e.target.value.trim();
        setValues({...values, [propName]: propValue});
    }
    function handleSignup(e){
        e.preventDefault();
        const {name, email, password, confirm_password} = values;
        if(!name || !email || !password || !confirm_password){
            setError("All* field is mandatory..");
            setSuccess(false);
        }
        else if(password !== confirm_password){
            setError("Password and Confirm Password do not match..");
            setSuccess(false);
        }
        else{
            setSuccess(true);
            setError("");
            localStorage.setItem('user', JSON.stringify(values));
            setValues({
                name: "",
                email: "",
                password: "",
                confirm_password: ""
            });
            setTimeout(()=>{
                navigate('/profile');
            }, 500)
        }
    }
    useEffect(()=>{
        if(user){
            setTimeout(()=>{
                navigate('/profile');
            }, 100)
        }
    }, [])
  return (
    <div id='formContainer'>
        <h1>Signup</h1>
      <form>
        <div className='formItem'>
            <input type='text' placeholder='Full Name' name='name' value={values.name} onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className='formItem'>
            <input type='email' placeholder='Email' name='email'  value={values.email} onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className='formItem'>
            <input type='password' placeholder='Password' name='password' value={values.password} onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className='formItem'>
            <input type='password' placeholder='Confirm Password' name='confirm_password' value={values.confirm_password} onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className='formItem'>
            <p className='logError'>{error}</p>
            <p className='logSuccess'>{success && "User Signup Successfull..."}</p>
            <button onClick={(e)=>{handleSignup(e)}}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
