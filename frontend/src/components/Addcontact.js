import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addcontact() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const handleAddContact = async (e) => {
        e.preventDefault();
        const userData = {
          name: name,
          mobile: mobile,
          email: email,
        };
    
        try {
          const response = await fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            // Registration was successful
            alert('User registered successfully.');
            navigate('/');
            // You can perform other actions like redirecting to a login page.
          } else {
            // Registration failed, handle the error
            const data = await response.json();
            alert('Registration failed:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div style={{ display:"flex",height:"100vh", justifyContent:"center",background:"linear-gradient(to bottom, #003300 0%, #ffff99 100%)"}}>
    <div className="p-4 shadow-md rounded-lg" style={{width:1000, marginTop: 50 ,height:350, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.9)',backgroundColor:"Beige"}}>
      <h2 className="text-xl font-bold mb-4 underline" style={{color:"blue", fontSize: 30}}><center>Add Contact</center></h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{border:"1px solid black"}}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full p-2 rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{border:"1px solid black"}}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2  rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{border:"1px solid black"}}
        />
      </div>
      
      <center><button
        onClick={handleAddContact}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Contact
      </button></center>
      </div>
    </div>
  )
}