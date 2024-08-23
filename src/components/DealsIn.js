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
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-firestone"></span></div>
               <div class="card-title text-muted">Firestone</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-falken"></span></div>
               <div class="card-title text-muted">Falken</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-ralson"></span></div>
               <div class="card-title text-muted">RALSON</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-ultramile"></span></div>
               <div class="card-title text-muted">Ultramile</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-birla"></span></div>
               <div class="card-title text-muted">Birla</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-kenda"></span></div>
               <div class="card-title text-muted">Kenda</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-metzeler"></span></div>
               <div class="card-title text-muted">Metzeler</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-kumho"></span></div>
               <div class="card-title text-muted">Kumho</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-nexen"></span></div>
               <div class="card-title text-muted">Nexen</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-vredestein"></span></div>
               <div class="card-title text-muted">Vredestein</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-mrl"></span></div>
               <div class="card-title text-muted">MRL</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-maruti"></span></div>
               <div class="card-title text-muted">Maruti</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-linglong"></span></div>
               <div class="card-title text-muted">LINGLONG</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-mirage"></span></div>
               <div class="card-title text-muted">Mirage</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-duraturn"></span></div>
               <div class="card-title text-muted">DURATURN</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-dunlop"></span></div>
               <div class="card-title text-muted">DUNLOP</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-jinyu"></span></div>
               <div class="card-title text-muted">JINYU</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-sailun"></span></div>
               <div class="card-title text-muted">SAILUN</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-landsail"></span></div>
               <div class="card-title text-muted">LandSail</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-bedrock"></span></div>
               <div class="card-title text-muted">BEDROCK</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-kelly"></span></div>
               <div class="card-title text-muted">Kelly</div>
            </a>
         </li>
         <li class="dealItem">
            <a href="/">
               <div class="brandImg"><span class="brandLogo brand-vk"></span></div>
               <div class="card-title text-muted">VK TYRE</div>
            </a>
         </li>
      </Carousel>
   </div>
</div>
)
}
export default DealsIn