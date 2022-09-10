import './App.css';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header';
import NewArrival from './Components/Product/NewArrivals';
import Footer from './Components/Footer/Footer';

function App() {
  return(
    <div>
      <Header />
      <div className="main">
          <NewArrival /> 
      </div>
      <div className="main">
          <Product /> 
      </div>
      <Footer />
    </div>
  )
  
}

export default App;
