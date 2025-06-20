import React from 'react'
import { useState } from 'react'
 import a from '../Assets/gal1.jpg'
 import b from '../Assets/gal2.jpg'
 import c from '../Assets/pexels-frendsmans-1926769.jpg'
import  d from '../Assets/pexels-harsh-kushwaha-804217-1721558.jpg'
import e from  "../Assets/gal3.jpg"
// import f from '../Assets/dudu.jpg'
import { MdDoubleArrow } from "react-icons/md";


function Slider() {

    const images = [a ,b,c,d ,e , ]

    const [index , setIndex] = useState(0)
       
    const HandleNext = ()=>{
        setIndex((prev)=> (prev+1) % images.length)
    }

    const Handleprev = ()=>{
        setIndex((prev)=>(prev-1 + images.length)% images.length)
    }

  return (
    <>
       <div style={{
         width:'100%',
         height:"650px",
          display:"flex", 
          alignItems:"center",
           justifyContent:'center'}}>
         
         <div style={{
            padding: ' 20px  10px',
            width:"400px",
            height:'600px',
            display:"flex",
             alignItems:"center",
              justifyContent:'center', 
              overflow: 'hidden',
              position:'relative'}}>
             <img style={{
                 width: "100%",
                 height:'100%',
                 objectFit:'cover',
                 transition:'ease 0.5s'
                  }} src={images[index]}/>
            
             
        </div>
         <div style={{
                position:"absolute",
                 left:'80%',
                 top:'50%',
                 cursor:"pointer",
                   
                  }} onClick={HandleNext }>
             < MdDoubleArrow style={ {
                fontSize:'100px',
                 padding: '5px',
             }}/>
             
         </div>
           <div style={{
                position:"absolute",
                 left:'13%',
                 top:'50%',
                 cursor:"pointer",
                 rotate:'180deg'
                   
                  }} onClick={Handleprev }>
             < MdDoubleArrow style={ {
                fontSize:'100px',
                 padding: '5px',
             }}/>
             
         </div>
       
       </div>
      </>
  )
}

export default Slider