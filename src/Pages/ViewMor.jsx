import React from 'react'
import "./ViewMor.css"
import  {useState , useEffect} from "react"
import { useParams , Link } from 'react-router-dom'


const ViewMor = () => {

    const {id} = useParams()
    const [products, setproducts] = useState(null)
        const url = `https://api.escuelajs.co/api/v1/products/${id}`;
    
        useEffect(()=>{
            async function fetchproduct() {
                const res = await fetch(url)
                const data = await res.json() // js object notation  
                
                setproducts(data);
                console.log(data);
            }
            fetchproduct()
        },[url]) 

        if (!products) return <div>Loading....</div>


        const handleAddToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product already in cart (optional logic)
  const isInCart = existingCart.find((item) => item.id === products.id);
  
  if (!isInCart) {
    const updatedCart = [...existingCart, products];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // alert("Product added to cart!");
  } else {
    // alert("Product already in cart.");
  }
};
    
  return (
     <div className="viewmore-container">
  <h2 className="product-title">{products.title}</h2>

  <div className="product-image-wrapper">
    <img src={products.images[0]} alt={products.title} className="product-image" />
  </div>

  <div className="product-details">
    <p className="product-description">{products.description}</p>
    <p className="product-price"><strong>Price:</strong> ${products.price}</p>
    <p className="product-category"><strong>Category:</strong> {products.category?.name}</p>
  </div>

  <div className="buttons">
    <button className="order-btn">Place Order</button>
    
     
      <button className="cart-btn" onClick={()=> handleAddToCart()}>🛒Add to Cart</button>
    
  </div>
</div>


  )
}

export default ViewMor