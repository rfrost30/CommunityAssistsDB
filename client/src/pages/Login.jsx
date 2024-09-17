import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  //from ReactRouter DOM
  const navigate = useNavigate();

  //get user info
  const { login } = useContext(AuthContext);

  console.log(login);

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(inputs);

      //Login successful navigate to HOME
      navigate("/")

    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Create and account if you do not already have one. <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login