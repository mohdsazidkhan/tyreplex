import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import MainBanner from './components/MainBanner';
import Reviews from './components/Reviews';
import DealsIn from './components/DealsIn';
import ServicesOffered from './components/ServicesOffered';
import TyresSold from './components/TyresSold';
import AskQuestion from './components/AskQuestion';
import Footer from './components/Footer';

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
      {/* Tyres Sold */}
      <TyresSold />
      {/* Ask Question */}
      <AskQuestion />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
