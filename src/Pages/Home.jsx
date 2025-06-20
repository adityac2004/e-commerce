import React, { useEffect, useState } from 'react';
import "./Home.css";
import { useNavigate , Link} from 'react-router-dom';
import a from '../Assets/logostanley.png'
import animation2 from '../Assets/blackbg.mp4';
// import c from '../Assets/pexels-pixabay-157675.jpg'
import img1 from '../Assets/Rectangle 36.png'
import img2 from '../Assets/Rectangle 38.png'
import img3 from '../Assets/Rectangle 41.png'
import img4 from '../Assets/Rectangle 43.png'
import img5 from '../Assets/Rectangle 44.png'
import img6 from '../Assets/Rectangle 45.png'
import img7 from '../Assets/Rectangle 49.png'
import img8 from '../Assets/Rectangle 50.png'
import img9 from '../Assets/Group 10.png'
import img10 from '../Assets/Group 11.png'
import img11 from '../Assets/Group 12.png'
import img12 from '../Assets/Group 13.png'
// import d from '../Assets/pexels-godisable-jacob-226636-794062.jpg'
import Slider from '../Components/Slider';
function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data.slice(1, 5)); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);
  const Explore =() => {
    navigate('/products');
  };
 

  return (
    <div className="home">

       <section id="wlc">
      
      
      <div className="content">
        <h1>Welcome To</h1>
        <img src={a} alt="Logo" />
        <p>Your one-stop shop for reliable tools, clothes, and accessories.</p>
      </div>
    </section>

        <section id='cont1'>

        <video  className="bg-video" src={animation2}  autoPlay loop muted playsInline ></video>
       
            
             <div id="node2">
           <div>
            
            <h1>PAYDAY</h1>
            <h1>SALE NOW</h1>
            <p>Spend minimal $100 get 30% off
             voucher code for your next purchase</p>
             <h6>1 June - 10 June 2026</h6>
             <p>*Terms & Conditions apply</p>
             <button onClick={ ()=>Explore()}>Shop Now</button>
           </div>
          </div>
      </section>
      <section id='brands'>
      <div  id='brands1'>
         <div id='scroll1'>
         <div id="brand1"><img src={img1} alt="1" /></div>
        <div id="brand2"><img src={img2} alt="2" /></div>
        <div id="brand3"><img src={img3} alt="3" /></div>
        <div id="brand4"><img src={img4} alt="4" /></div>
        <div id="brand5"><img src={img5} alt="5" /></div>
        <div id="brand6"><img src={img6} alt="6" /></div>

       </div>
        <div id='scroll1'>
         <div id="brand1"><img src={img1} alt="1" /></div>
        <div id="brand2"><img src={img2} alt="2" /></div>
        <div id="brand3"><img src={img3} alt="3" /></div>
        <div id="brand4"><img src={img4} alt="4" /></div>
        <div id="brand5"><img src={img5} alt="5" /></div>
        <div id="brand6"><img src={img6} alt="6" /></div>

       </div>
       
      </div>
      </section>
     
      <section className="hero">
        <div id='child1'>   
          
         <h1>LET’S  EXPLORE UNIQUE CLOTHES.</h1>
        <p>Live for Influential and Innovative fashion!</p>
        <button onClick={()=>Explore()}>Shop Now</button>
       
      </div>
      
     
</section>

      

    
    
      <section id='yellow'>

        <h1> Try Our Awesome Collection Now </h1>

        <Slider/>
        
        
      </section>
     <section id='one'>
      <h1> Youngs Favaurite</h1>
     <div id='fav'>
       <div id='s1'> <img src={img7} alt="8" />
      <h6>All Under $40 </h6><p onClick={()=>Explore()}>Explore now!</p></div>
       <div id='s2'><img src={img8} alt="8" />
      <h6>Trending  on instagram</h6><p onClick={()=>Explore()}>Explore now!</p></div>
     </div>
     </section>
      <section className="cta">
        <p>Need help? <Link to={"/contact"}>Contact us</Link></p>
      </section>
     <section id="form">
  <h1>Join Our Shopping Community</h1>
  <p>Type your email below and stay tuned for our monthly promotions!</p>
  <div class="form-input">
    <input id='jj' type="email" placeholder="Add your email here" />
    <button>Send</button>
  </div>
</section>

      <section id='footer'>
        <div id='own'>
          <img src={a} alt="f" id='logo'  />
          <p>Complete Your life from Awesome Products from us</p>
          <div id='img-flex'>
            <img src={img9} alt="" />
             <img src={img10} alt="" />
              <img src={img11} alt="" />
               <img src={img12} alt="" />
          </div>
        </div>
        <div id="other">
          <div id="j1">
            <h1>Company</h1>
            <h4> About </h4>
            <h4> Contact us </h4>
            <h4> Support</h4>
          </div>
           <div id="j1">
            <h1>Quick Link</h1>
            <h4> Share Location </h4>
            <h4> Orders Tracking </h4>
            <h4> Size Guide</h4>
            <h4>FAQ</h4>
           </div>
            <div id="j1">
              <h1>Legal</h1>
              <h4>Term & conditions</h4>
              <h4>privacy Policy</h4>
            </div>
           

        </div>
      </section>
    </div>
  );
}

export default Home;
 {/* <h1>Own it. Wear it. Live it.</h1>
  <p>step into a world where fashion is more than just clothing — it’s a voice, a mood, a movement. Designed for those who lead, not follow.</p> */}
  {/* <button className="cta-button" >Shop the Look</button> */}