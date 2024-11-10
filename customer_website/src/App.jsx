import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SouthIndian from './Pages/SouthIndian';
import NorthIndian from './Pages/NorthIndian';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import CartPage from './Pages/Cart/CartPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import TrackOrderPage from './Pages/TrackOrder/TrackOrderPage';
import OrdersPage from './Pages/Orders/Orders';
import AuthPages from './Components/Auth/AuthPage';

const theme = createTheme({
  // Customize your theme here if needed
  spacing: 8, // example of customizing the spacing
});


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/south-indian" element={<SouthIndian/>} />
        <Route path="/north-indian" element={<NorthIndian/>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/track-order" element={<TrackOrderPage/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/auth" element={<AuthPages/>} />
      </Routes>
      <ThemeProvider theme={theme}>
      <Footer/>
    </ThemeProvider>
    </Router>
  );
}

export default App;
