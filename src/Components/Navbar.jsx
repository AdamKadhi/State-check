import React, { useState } from 'react'

const Navbar = ({setpage}) => {
    const [text, settext] = useState("Hello")
    let a="hi"
  return (
    <div className='nav'>
      <h1>LOGO</h1>
      <ul>
        <li onClick={()=>setpage(1)} >About</li>
        <li onClick={()=>setpage(2)}>Contact</li>
        <li onClick={()=>setpage(3)}>Products</li>
        <button onClick={()=>settext("ay haja")} >{text}</button>
      </ul>
      
    </div>
  )
}

export default Navbar
