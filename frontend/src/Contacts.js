import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Contacts() {
    const [Contacts, setcontacts] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        getcontacts();
    }, []);
    
    const getcontacts = async()=>{
        let result = await fetch('http://localhost:5000/contacts');
        result = await result.json();
        setcontacts(result);
    }
    
    
    const deletecontact = async (id)=>{
      let result = await fetch(`http://localhost:5000/delete/${id}`,{
          method: "Delete"
      });
      result=await result.json()
      if(result){
          alert("Contact Deleted");
          window.location.reload();
      }
  };

  return (
    <div style={{marginLeft:40, marginRight:40, marginTop:50}}>
    <table style={{border:"1px solid black"}} className="min-w-full" >
    <thead>
      <tr style={{fontSize:20}}>
        <th className="text-center px-4 py-2 border-2 mb-4">Name</th>
        <th className="text-center px-4 py-2 border-2 mb-4">Mobile Number</th>
        <th className="text-center px-4 py-2 border-2 mb-4">Email</th>
        <th className="text-center px-4 py-2 border-2 mb-4">Operation</th>
      </tr>
    </thead>
    <tbody>
    {Array.isArray(Contacts) ? (
      Contacts.map((item, index) => (
        <tr key={index} className='bg-gray-100'>
          <td className='border-1 px-4 py-2'>{item.name}</td>
          <td className='border-1 px-4 py-2'>{item.mobile}</td>
          <td className='border-1 px-4 py-2'>{item.email}</td>
          <td className='border-1 px-4 py-2'>
            <Link to={'/edit-contact/' + item._id} className='bg-green-500 text-white p-2 rounded hover:bg-green-700' style={{marginRight:10}}>
              Edit
            </Link>
            <button onClick={() => deletecontact(item._id)} className='bg-red-500 text-white p-2 rounded hover:bg-red-700'>
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : null}
  </tbody>
    </table>
    </div>
  )
}
