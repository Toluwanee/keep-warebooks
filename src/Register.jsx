import React, { useState } from 'react'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  
    return (
    <>
<form onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name</label>
        <input value={name} name='name' placeholder='Full name'/>
        <label htmlFor='email'>email</label>
        <input value={email} type='email' placeholder='yourmail@gmail.com' id='email' name='email'/>
        <label htmlFor='password'>password</label>
        <input value={pass} type='password' placeholder='***********' id='password' name='password'/>
        <button type='submit'>Log In</button>
    </form>
    <button onClick={props.onFormSwitch}>Already have an account? Login</button>
    </>
  )
}
