import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [Username, setUsername] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/signin', {
        Username,
        LastName,
        Email,
        Password,
      });

      // Clear input fields after successful submission
      setUsername('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="SignIn">
      <h1>SignUp</h1>

      <div className="inputBox">
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="inputBox">
        <input
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="LastName"
        />
      </div>
      <div className="inputBox">
        <input
          type="text"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="inputBox">
        <input
          type="password"  // Set input type to "password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      <div className="buttons">
        <button type="submit" onClick={submit}>
          SignUp
        </button>
      </div>

      <Link to="/Login">Login Page</Link>
    </div>
  );
};

export default Signin;
