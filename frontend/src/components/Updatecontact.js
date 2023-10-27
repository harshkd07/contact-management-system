import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Updatecontact() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getcontactdetails();
    },[])
    const getcontactdetails = async()=>{
        let result = await fetch(`http://localhost:5000/contact/${params.id}`);
        result = await result.json();
        setName(result.name)
        setMobile(result.mobile)
        setEmail(result.email)
    }

    const updateContact = async ()=>{
        try {
            let result = await fetch(`http://localhost:5000/update/${params.id}`, {
              method: "PUT",
              body: JSON.stringify({ name, mobile, email }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (!result.ok) {
              throw new Error('Network response was not ok');
            }
            navigate('/');
          } catch (error) {
            console.error(error);
          }
    };
    
  return (
    <div style={{ display:"flex", justifyContent:"center",height:"100vh", background:"linear-gradient(to bottom, #003300 0%, #ffff99 100%)"}}>
    <div className=' p-4 shadow-md rounded-lg' style={{width:1000, marginTop: 50 ,boxShadow: '0 4px 6px rgba(0, 0, 0, 0.9)', height:350,backgroundColor:"Beige"}}>
    <h2 className="text-xl font-bold mb-4 underline" style={{color:"blue", fontSize: 30}}><center>Edit Contact</center></h2>
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
          className="w-full p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{border:"1px solid black"}}
        />
      </div>
      <center>
      <button
        onClick={updateContact}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Update Contact
      </button>
      </center>
    </div>
    </div>
  )
}
