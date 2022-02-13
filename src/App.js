import logo from './logo.svg';
import './App.css';
import Comments from './Comments'
import {Routes , Route} from 'react-router-dom'
import HomeComponent from './Components/Home';
import PaymentPage from './Components/paymentPage'
import Contact from './Components/ContactUs'
import AboutPage from './Components/AboutPage'
function App() {
  return (
    <div className="App">
     <Comments />
     {/* <div className="flex">
       <button >home</button>
       <button>Contact</button>
       <button>About</button>
       <button>Payment</button>
     </div> */}

     <Routes>
      
       <Route path="/home" element={<HomeComponent />} />
       <Route path="/payment" element={<PaymentPage />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<AboutPage />} />
      
     </Routes>
    

    </div>
  );
}

export default App;
