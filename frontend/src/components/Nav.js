import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold" >Contact Management System</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">Contacts</Link>
            <Link to="/add" className="hover:text-gray-300">Add Contact</Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
