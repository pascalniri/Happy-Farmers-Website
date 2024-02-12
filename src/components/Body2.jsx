import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import red from './images/red.jpg'
import about from './images/about.png'
import us1 from './images/us1.jpg'
import us2 from './images/us2.jpg'
import us3 from './images/us3.jpg'


const Body2 = () => {
  return (
    <>

      <section>
      <div className='bodytwo-container'>
        <div className='bodytwo-subcontainer'>
          <img src={red} alt="" />
        </div>
        <div className='bodytwo-subcontainer'>
            <h2>Pick Them Daily</h2>
           <p>
             Welcome to Happy Farmers' "Pick Them Day" 
             a special occasion that brings you closer to the
              heart of our farm! Join us in the joyous experience of hand-picking
               the freshest produce directly from our fields at an unbeatable 
               low price. This exclusive event, happening just once every two
                months, allows you to connect with nature, savor the thrill of
                 harvesting, and take home top-quality produce. Be part of this 
                 limited-time opportunity to enjoy farm-to-table freshness while supplies last.
              Embrace the farm life with Happy Farmers and make "Pick Them Day" 
              a memorable, cost-effective celebration of community, agriculture,
               and wholesome goodness!
           </p> 
               <br/>
           <button>
            Shop All <FaArrowRight />
           </button>
        </div>
      </div>
      </section>







     <section>
     <div className='wwa'>
          <h1>Who We Are</h1>
      </div>
     </section>





      <section>
      <div className='bodythree-container'>
        <div className='bodythree-subcontainer'>
            <p>
            Welcome to Happy Farmers, a vision realized by three passionate
             young ladies from Rwanda with a shared commitment to transfor
             ming our community through the intersection of agriculture and 
             technology. In the heart of IT innovation, we merge our experti
             se to revolutionize farming practices and empower local grower
             s. At Happy Farmers,
             we believe in the power of agro-tech to bring positive change.
            </p>
        </div>
        <div className='bodythree-subcontainer'>
          <img src={about} alt="" />
        </div>
      </div>
      </section>







      <section>
      <div className='body3-long-para'>
        <p>
        Our journey is rooted in a profound love for agriculture and a
         desire to leverage technological advancements for sustainable, 
         efficient, and community-driven farming. We are not just cultiv
         ating crops; we are cultivating opportunities, fostering a brig
         hter future for local farmers and our community. Join us in sow
         ing the seeds of innovation, growth, and empowerment at Happy F
         armers where passion meets technology,
         and agriculture becomes a catalyst for positive change.
        </p>
      </div>
      </section>






    <section>
      <div className='wwa-container'>
        <div className='wwa'>
          <h4>"Life is always better with mushrooms, especially when 
            shared with a friend who 
             appreciates the magic  of their earthy charm."</h4>
             <p>- At Home Cooker -</p>
        </div>
      </div>
    </section> 






   <section>
   <div className='ofm'>
        <h1>Our Fresh Mushrooms</h1>
        <p>
          Primarily, our focus is on producing and delivering exceptional 
          quality mushrooms, ensuring freshness and nutritional value in every product. Simultaneously, we're developing an innovative online platform that bridges the gap between mushroom farmers and consumers, 
          facilitating direct access to the freshest produce.
        </p>
  
    <div className="three-containers">
        <div className="box">
           <img src={us1} alt="" />
          
        </div>
        <div className="box">
          <img src={us2} alt="" />
        </div>
        <div className="box">
          <img src={us3} alt="" />
        </div>
    </div>


    </div>
   </section>
    





   <section>
      <div className='wwa'>
            <h1>Contact Us</h1>
             <p>TEL: (+250) 789139313 / happyfarmers2024@gmail.com</p>
      </div>
   </section>






  
  <section>
  <div className='form'>
        <div className='sub-form'>
         <div className='labels'>        
            <label>Full Name</label>
            <input type='text' name='name'/>

            <label>Email</label>
            <input type='email' name='email'/>
         </div>

            <label>Message</label>
            <textarea></textarea>

            <button>SUBMIT</button>
      </div>
      </div>
  </section>

  </>
  )
}

export default Body2