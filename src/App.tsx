import './App.css'
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ProductList />
    </>
  );
};

export default App;