import React from 'react'
import { useLocation } from 'react-router'

function Employee() {
  //read state received from navigation
  const {state}=useLocation()
  return (
    <div className='p-16 text-center text-3xl rounded-4xl mt-10'>
  
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <p>Designation: {state.designation}</p>
      <p>Company: {state.companyName}</p>
    </div>
  )
}

export default Employee