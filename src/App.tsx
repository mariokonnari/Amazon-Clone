import './App.css'
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className='min-h-screen bg-gray-100 p-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          <ProductCard
            title='Wireless Bluetooth Headphones with Noise Cancellation'
            price={79.99}
            rating={4}
            image='https://picsum.photos/300?1'
          />

          <ProductCard
            title="Smart Watch with Health Tracking Features"
            price={149.99}
            rating={5}
            image="https://picsum.photos/300?2"
          />

          <ProductCard
            title="Portable Bluetooth Speaker"
            price={39.99}
            rating={3}
            image="https://picsum.photos/300?3"
          />
        </div>
      </div>
    </>
  );
}

export default App;