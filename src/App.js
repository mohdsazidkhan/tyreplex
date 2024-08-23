import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Breadcrumb from './components/Breadcrumb';
import { MdAccessTime, MdAccountBalance, MdCreditCard, MdLocationPin, MdOutlineAccountBalanceWallet, MdOutlineSend, MdOutlineStarPurple500, MdOutlineVerified } from "react-icons/md";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="landingPage">
      {/* Header */}
      <Header />
      {/* Breadcrumb */}
      <Breadcrumb />
      {/* Slider */}
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <Slider />
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='dealerDetail'>
              <div className='d-flex justify-content-between align-items-center'>
                <h1>Shree Hemkunt Tyres and Services</h1>
                <span className='verified'><MdOutlineVerified /> Verified</span>
              </div>
              <div className='mt-2 d-flex gap-2 justify-content-between align-items-center'>
              <div className='userRatings d-flex gap-2 align-items-center'>
                <span className='reating'>4.9</span>
                <div className='ratingStars d-flex align-items-center'>
                <span className='d-flex'><MdOutlineStarPurple500 /></span>
                <span className='d-flex'><MdOutlineStarPurple500 /></span>
                <span className='d-flex'><MdOutlineStarPurple500 /></span>
                <span className='d-flex'><MdOutlineStarPurple500 /></span>
                <span className='d-flex'><MdOutlineStarPurple500 /></span>
                </div>
                <span className='totalRating'>2278 Reviews</span>
              </div>
              <a href='/' className='rateBtn'>Rate</a>
              </div>
              <div className='location mt-3 d-flex align-items-start gap-2 justify-content-start'>
                <div><MdLocationPin /></div>
                <div className='address'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</div>
              </div>
              <div className='timings mt-3 d-flex align-items-start gap-2 justify-content-start'>
                <div><MdAccessTime /></div>
                <div className='time'>Open - Monday   to   Sunday - 10:00AM to 8:00PM</div>
              </div>
              <div className='getDirection'>Get Direction</div>
              <div className='mt-3 paymentModes'>
                <h6>Payment Mode</h6>
                <div className='d-flex justify-content-start gap-2'>
                  <span className='d-flex gap-2'><span><MdAccountBalance /></span>Deposit to Account</span>
                  <span className='d-flex gap-2'><span><MdOutlineAccountBalanceWallet /></span>Net Banking</span>
                  <span className='d-flex gap-2'><span><MdCreditCard /></span>Credit Card/Debit Card</span>
                  <span className='d-flex gap-2'><span><MdOutlineSend /></span>UPI</span>
                  <span className='d-flex gap-2'><span><MdOutlineAccountBalanceWallet /></span>Wallets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rating & Reviews */}
      <div className='container'>
        <div className='reviewsRatings'>
        <h5>2278 Google Reviews</h5>
        <Carousel responsive={responsive}>
          <div>
            <div>
            
            </div>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
