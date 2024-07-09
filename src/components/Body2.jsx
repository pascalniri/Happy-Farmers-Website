import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import red from './images/red.jpg'
import '../index.css'
import about from './images/about.png'
import us1 from './images/us1.jpg'
import us2 from './images/us2.jpg'
import us3 from './images/us3.jpg'
import map from './images/map.png'
import { Link } from 'react-router-dom';

const Body2 = () => {
  return (
    <div >

      <section className='mt-[100px] flex flex-row justify-between items-center px-4 sm:px-[50px] lg:px-[100px] py-4'>
        <div className='w-full h-full'>
          <img src={red} alt="" className='w-[500px] h-[400px] rounded-[20px]' />
        </div>
        <div className='w-full font-outfit flex flex-col'>
            <h2 className='font-semibold text-[25px] mb-[20px]'>Pick Them Daily</h2>
           <p className='text-[#656565]'>
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
               
              <Link to="/shop"><button className='bg-green-500 px-[40px] py-[10px] rounded-[50px] text-white mt-[20px] hover:bg-white hover:text-green-500 hover:border hover:border-green-500'>Shop All</button></Link>
        </div>
      </section>






        
      <div className='flex flex-row justify-between gap-[50px] items-center my-[100px] px-4 sm:px-[50px] lg:px-[100px] py-4'>
        <div className='w-full font-outfit text-[#656565]'>
          <h1 className='mb-[20px] font-bold text-[25px] text-black'>Who We Are</h1>
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
        <div className='w-full'>
          <img src={about} alt="" className='w-[500px] h-[400px] ' />
        </div>
      </div>
  

      <div className='px-4 sm:px-[50px] lg:px-[100px] py-4 font-outfit text-[#656565]'>
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
     

   
        <div className='px-4 sm:px-[50px] lg:px-[100px] py-4 my-[100px]'>
        <div className='bg-yellow-500  rounded-[20px] flex flex-col justify-center items-center px-[20px] py-[50px] font-outfit'>
          <h4>"Life is always better with mushrooms, especially when 
            shared with a friend who 
             appreciates the magic  of their earthy charm."</h4>
             <p className='font-semibold mt-2'>- At Home Cooker -</p>
        </div>
        </div>
 






   <section>
   <div className='flex flex-col justify-center items-center text-center font-outfit px-4 sm:px-[50px] lg:px-[100px] py-4 my-[100px]'>
        <h1 className='font-bold text-[25px] mb-[20px]'>Our Fresh Mushrooms</h1>
        <p className='mb-[40px] text-[#656565]'>
          Primarily, our focus is on producing and delivering exceptional 
          quality mushrooms, ensuring freshness and nutritional value in every product. Simultaneously, we're developing an innovative online platform that bridges the gap between mushroom farmers and consumers, 
          facilitating direct access to the freshest produce.
        </p>
  
    <div className=" flex flex-row justify-center items-center gap-[20px] w-full">
       <img src={us1} alt="" className='w-[300px] h-[400px] rounded-[10px]' />
       <img src={us2} alt="" className='w-[300px] h-[400px] rounded-[10px]'/>
       <img src={us3} alt=""className='w-[300px] h-[400px] rounded-[10px]' />
          
    </div>


    </div>
   </section>
    
  <section>
 
  <a href="https://www.google.com/maps/place/kLab/@-1.9431073,30.0848081,15.28z/data=!4m6!3m5!1s0x19dca6eb4b136305:0xfa7ecaf4c40f3383!8m2!3d-1.9394677!4d30.0907233!16s%2Fg%2F11c1xjm917?entry=ttu">
    <img src={map} alt="" style={{width:"100%",height:'300px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}/>
  </a>
  </section>

  </div>
  )
}

export default Body2