import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom'; // for new user registration link

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., send data to backend)
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="w-full md:w-1/2 px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-white px-4 py-6 rounded shadow-md" // Added background color and styling
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
            label="Remember Me"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          New User? <Link to="/register">Register Here</Link>
        </p>
      </div>
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1495835823942-8296f009a7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaWxBfHgzfHx8ZW5jY8gzlXNlNwQzMjH&auto=format&fit=crop&w=800&q=80)" }}>
      </div>
    </div>
  );
};

export default Login;
