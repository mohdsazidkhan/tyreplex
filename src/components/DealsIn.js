import React from 'react'
import Carousel from 'react-multi-carousel'
import './DealsIn.css';
import 'react-multi-carousel/lib/styles.css';
function DealsIn() {
const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 6
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 4
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 2
}
};
return (
<div className='container'>
   <div className='dealsIn'>
      <h5>Deals In</h5>
      <Carousel responsive={responsive}>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg">
                  <span class="brandLogo brand-mrf"></span>
               </div>
               <div class="card-title text-muted">MRF</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg">
                  <span class="brandLogo brand-ceat"></span>
               </div>
               <div class="card-title text-muted">CEAT</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-goodyear"></span></div>
               <div class="card-title text-muted">Goodyear</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-apollo"></span></div>
               <div class="card-title text-muted">Apollo</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-bridgestone"></span></div>
               <div class="card-title text-muted">Bridgestone</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-jk"></span></div>
               <div class="card-title text-muted">JK Tyre</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-michelin"></span></div>
               <div class="card-title text-muted">Michelin</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-pirelli"></span></div>
               <div class="card-title text-muted">Pirelli</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-yokohama"></span></div>
               <div class="card-title text-muted">Yokohama</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-tvs"></span></div>
               <div class="card-title text-muted">TVS Eurogrip</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-continental"></span></div>
               <div class="card-title text-muted">Continental</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-hankook"></span></div>
               <div class="card-title text-muted">Hankook</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-ralco"></span></div>
               <div class="card-title text-muted">Ralco</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-maxxis"></span></div>
               <div class="card-title text-muted">Maxxis</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-metro"></span></div>
               <div class="card-title text-muted">Metro</div>
            </a>
         </li>
      </Carousel>
   </div>
</div>
)
}
export default DealsIn