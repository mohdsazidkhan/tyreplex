import React from 'react'
import './TyresSold.css';
import { MdKeyboardArrowDown, MdOutlineStarPurple500, MdOutlineVerified } from 'react-icons/md';
import data from "./tyreSold.json"

function TyresSold() {

   return (
      <div className='container'>
         <div className='tyresSold'>
            <div className='d-flex justify-content-between align-items-center'>
               <h5>Tyres Sold by this dealer</h5>
               <div className='gap-2 filters'>
                  <input type="text" class="form-control" placeholder="For Ex: DL01AB1111" />
                  <select class="form-select">
                     <option selected>Filter By</option>
                     <option value="1">Apollo</option>
                     <option value="2">BEDROCK</option>
                     <option value="3">Birla</option>
                  </select>
                  <select class="form-select">
                     <option selected>Most Popular</option>
                     <option value="1">Price High to Low</option>
                     <option value="2">Price Low to High</option>
                  </select>
                  <select class="form-select">
                     <option selected>Vehicle Type</option>
                     <option value="1">Car</option>
                     <option value="2">Bike</option>
                     <option value="3">Scooter</option>
                  </select>
               </div>
            </div>
            <div className='row'>
               {data?.tyreSold.map((item, index) =>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
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
               <div className='col-sm-12'>
               <button className='moreItems'><span>More Items</span> <span><MdKeyboardArrowDown /></span></button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default TyresSold