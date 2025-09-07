import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function Register({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post('http://localhost:4000/api/register', { email, password, name }).then(() => {
                // console.log(name)
                setUser({ name })
                navigate('/')
            })

        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div className='register-container' >
            <div className='register-form-container'>
                <h1 className='register-heading'>Register</h1>
                <form onSubmit={onSubmit} className='register-form'>
                    <input className='input-box' value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
                    <input className='input-box' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <input className='input-box' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                    <button className='register-btn' type="submit">Create Account</button>
                </form>
                <div className='register-here-container' >
                    <p className='register-here-text' >Have an account?</p>
                    <button className='register-here-button' onClick={() => navigate('/login')}>Login here</button>
                </div>
            </div>
        </div>
    );
}
