import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'

const ProductList = () => {
    let products=[
        {
            image:"https://www.tunisianet.com.tn/155465-large/casque-micro-gaming-spirit-of-gamer-pro-h8-led-rgb.jpg",
            name:"Casque",
            price:120
        },
        {
            image:"https://www.tunisianet.com.tn/273010-large/souris-gaming-spirit-of-gamer-pro-m1.jpg",
            name:"Souris",
            price:70
        },
        {
            image:"https://clickup.tn/wp-content/uploads/2022/10/Clavier-gaming-Inter-Tech-KB-3035-Best-buy-tunisie-prix-tunisie.jpg",
            name:"Clavier",
            price:90
        },
    ]
    const [num, setnum] = useState(1)
    
    
  return (
    <div>
      <div className='list'>
        {products.map(el=><Card el={el} />)}
        </div>
        <div>
            <h1>Using State</h1>
            <h2>{num}</h2>
            <button onClick={()=>setnum(num+1)} >+</button>
            <button onClick={()=>setnum(num -1)}>-</button>
        </div>
    </div>
  )
}

export default ProductList
