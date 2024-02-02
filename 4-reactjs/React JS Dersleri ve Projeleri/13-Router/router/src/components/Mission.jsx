import {useNavigate} from "react-router-dom"
import React from 'react'

function Mission() {
    const navigate =useNavigate();

  return (
    <>
    <div>Mission</div>
    <button onClick={()=>navigate('/')}>geri dön</button>
    </>

  )
}

export default Mission