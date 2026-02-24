import React from 'react'
import transformers from "../assets/transformers.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div 
      className="home-container"
      style={{ backgroundImage: `url(${transformers})` }}
    >
    </div>
  )
}

export default Home