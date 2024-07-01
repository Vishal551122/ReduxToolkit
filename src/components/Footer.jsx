import React from 'react'

import { useSelector } from 'react-redux'
const Footer = () => {

    const count= useSelector((state)=>state.counter.value);
    
  return (
    <div>
      <h1>hello guys Count value is {count}</h1>
    </div>
  )
}

export default Footer
