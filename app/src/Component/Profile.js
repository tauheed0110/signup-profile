import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || null;

    useEffect(()=>{
        if(!user){
            setTimeout(()=>{
                navigate('/');
            }, 500);
        }
    }, [])
    function handleLogout(){
        localStorage.removeItem('user');
        setTimeout(()=>{
            navigate('/');
        }, 500);
    }
  return (
    <div id='profileContainer'>
      <h1>Profile</h1>
      <h2>Full Name: {user && user.name}</h2>
      <h2>Email: {user && user.email}</h2>
      <h2>Password: {user && user.password}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
