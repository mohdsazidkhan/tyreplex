import React from 'react'
import './TyresSold.css';
import { MdKeyboardArrowDown, MdOutlineStarPurple500, MdOutlineVerified } from 'react-icons/md';
import data from "./tyreSold.json"
function TyresSold() {
   console.log(data, ' data')
   return (
      <div className='container'>
         <div className='tyresSold'>
            <h5>Tyres Sold by this dealer</h5>
            <div className='row'>
               {data?.tyreSold.map((item, index) =>
                  <div class="col-lg-3" key={index}>
                     <div className='soldItem'>
                        <span class="brandLogo brand-apollo"></span>
                        <span className='warranty'><MdOutlineVerified /> {item.warranty} Year Warranty</span>
                        <img src="/images/tyre_pic.png" alt='tyre_pic' />
                        <h6>{item.name}{"-"}<span>{item.model}</span></h6>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                           <p className='price'>₹ {item.price}</p>
                           <p className='type'>{item.type}</p>
                        </div>
                        <div className='rating'>
                           <div className='star'>
                              <span className='d-flex'><MdOutlineStarPurple500 /></span>
                              <span className='d-flex'>{item.rating}</span>
                           </div>
                           <strong>{item.reviews} Reviews</strong>
                        </div>
                        {item.offer &&
                           <div className='offer mt-3'>Offer available</div>
                        }

                     </div>
                  </div>
               )}
               <button className='moreItems'><span>More Items</span> <span><MdKeyboardArrowDown/></span></button>
            </div>
         </div>
      </div>
   )
}
export default TyresSold