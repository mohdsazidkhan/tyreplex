import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import MainBanner from './components/MainBanner';
import Reviews from './components/Reviews';
import DealsIn from './components/DealsIn';
import ServicesOffered from './components/ServicesOffered';

function App() {
  
  return (
    <div className="landingPage">
      {/* Header */}
      <Header />
      {/* Breadcrumb */}
      <Breadcrumb />
      {/* Main Banner */}
      <MainBanner/>
      {/* Rating & Reviews */}
      <Reviews/>
      {/* Deals In */}
      <DealsIn />
      {/* Service Offered */}
      <ServicesOffered />
    </div>
  );
}

export default App;
