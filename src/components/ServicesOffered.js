import React from 'react'
import './ServicesOffered.css';
function ServicesOffered() {

return (
<div className='container'>
   <div className='serviceOffered'>
      <h5>Services offered by this dealer</h5>
      <div className='row'>
         <div class="col-lg-6 ">
            <div className='serviceItem'>
            <div>
               <img src="/images/wheel-alignment-bal.png" alt='wheel-alignment-bal' />
               <h6>Wheel Balancing</h6>
               </div>
               <button className='bookBtn'>Book Now</button>
            </div>
         </div>
         <div class="col-lg-6">
            <div className='serviceItem'>
               <div>
                  <img src="/images/wheel-alignment.png" alt='wheel-alignment' />
                  <h6>Wheel Alignment</h6>
               </div>
               <button className='bookBtn'>Book Now</button>
            </div>
         </div>
      </div>
   </div>
</div>
)
}
export default ServicesOffered