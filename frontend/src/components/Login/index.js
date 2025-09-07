import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { email, password });
            setUser(response.data.user)
            navigate('/')

        } catch (err) {
            setError('Login failed');
            alert(err.response.data.error);
        }
    };

    return (
        <div className='login-container' >
            <div className='login-form-container'>
                <h1 className='sign-in-heading'>Sign In</h1>
                <form onSubmit={onSubmit} className='form'>
                    <input className='input-box' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <input className='input-box' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                    {error && <p className='error-msg' >{error}</p>}
                    <button className='login-btn' type="submit">Login</button>
                </form>
                <div className='register-here-container' >
                    <p className='register-here-text' >Don't have an account?</p>
                    <button className='register-here-button' onClick={() => navigate('/register')}>Register here</button>
                </div>
            </div>
        </div>
    );
}
