import React from 'react'
import usestate from 'usestate'


function Hamburger() {
    const[isopen , setISopen] = usestate(false)

    const Toggle = ()=>{
        setISopen(!isopen)
    }
  return (
    <div onClick={Toggle}>&#9776;</div>
  )
}

export default Hamburger