import { useState } from 'react';

function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="container mx-auto mt-10 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="username"
            placeholder="Username" 
            className="w-full p-2 border rounded"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage