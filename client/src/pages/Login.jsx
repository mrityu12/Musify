import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

// API function to login user
const loginUser = async (credentials) => {
  try {
    console.log('Attempting login with:', { email: credentials.email });
    
    // Using full URL to bypass proxy issues
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    console.log('Login request URL:', response.url);
    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login response:', data);
    
    return data;
  } catch (error) {
    console.error('Login API error:', error);
    throw error;
  }
};

export function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // Clear any previous error when user starts typing again
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simple validation
      if (!user.email || !user.password) {
        throw new Error('Email and password are required');
      }

      // Login user through API
      const response = await loginUser(user);

      console.log('Login successful:', response);

      // Store token and user data
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      // Redirect to dashboard or home page
      navigate('/dashboard'); // Change this to your desired route
      
    } catch (err) {
      console.error('Login error:', err.message);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={user.email}
            onChange={handleChange} 
            required 
            disabled={loading}
            autoComplete="email"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            name="password" 
            value={user.password}
            onChange={handleChange} 
            required 
            disabled={loading}
            autoComplete="current-password"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className={loading ? 'loading' : ''}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}