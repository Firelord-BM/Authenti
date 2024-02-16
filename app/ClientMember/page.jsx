"use client"
import React from 'react'

const Member = () => {
  return (
    <div>
      <h2>This is an addition</h2> <h1>Member Client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
    
  )
}

export default Member