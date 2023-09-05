import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
<h1>Techprak</h1>
<p>My work is to provide you a knowledge with my work</p>
        </main>
    
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
        At the heart of our platform lies a dedication to
         providing ingenious technical solutions that empower 
         businesses and individuals alike. We understand that 
         in today's rapidly evolving digital landscape, 
         challenges arise that demand innovative answers. 
         Our team of experts, armed with deep industry knowledge 
         and cutting-edge tools, is committed to unraveling 
         complexities and delivering streamlined solutions.
         
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
      <h1>Who we are?</h1>
      <p>We transform intricate problems into elegant solutions, 
        guiding you towards a future where technology isn't just a
         tool, but a transformative force. Welcome to a world where
          challenges are met with expertise, and possibilities are 
          limitless.</p>
          </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article >
          <div style={{animationDelay:"0.3s"}}>

            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>

            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>

            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
          <div style={{animationDelay:"1s"}}>

            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
};

export default Home
