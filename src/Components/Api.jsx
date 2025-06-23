import react, { useState }  from "react";
import {  useEffect} from "react";
import "./Api.css"
import { Link } from "react-router-dom";


function Api(){
    const[Apidata, setApidata] = useState([]);
    let url = "https://fakestoreapi.com/products";

    useEffect(()=>{
        async function getdata() {
            let data = await fetch(url)
            let product = await data.json() // js object notation  
            
            setApidata(product)
            console.log(product)
        }
        getdata()
    },[])

     
   
    
   
    
    

    
    return(

        <>
      <div className="api-container">
        <h1>Todays Exclusive Sale  </h1>
        <div className="products-grid">
          {Apidata.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="product-title">{item.title}</div>
              <div className="product-price">${item.price}</div>
                <button id="btn1" > <Link to={`/viewmore/${item.id}`} >Buy Now </Link> </button>
            </div>
          ))}
        </div>
      </div>
    </>
    
          

    )
}
export default Api