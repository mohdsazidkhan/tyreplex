import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import MainBanner from './components/MainBanner';
import Reviews from './components/Reviews';
import DealsIn from './components/DealsIn';

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
    </div>
  );
}

export default App;
