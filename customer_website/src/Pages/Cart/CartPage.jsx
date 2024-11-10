import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardMedia, CardContent, 
  Button, IconButton, Box, ThemeProvider, createTheme, styled 
} from '@mui/material';
import { Add, Remove, Delete, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9933', // Orange
    },
    secondary: {
      main: '#138808', // Green
    },
    error: {
      main: '#B22222', // Indian Red
    },
    background: {
      default: '#FFF5E6', // Light Cream
      paper: '#FFFFFF', // White
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontFamily: 'Georgia, serif',
      color: '#B22222',
    },
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  background: theme.palette.background.paper,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Set solid color from the palette
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#D68500', // A darker shade for hover (optional)
  },
}));

const CartPage = ({ onCheckout }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Authentic Madras Sambar Mix", price: 180, quantity: 2, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Masala Dosa Mix", price: 150, quantity: 1, image: "https://via.placeholder.com/150" },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ 
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          borderBottom: '2px solid #FF9933',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}>
          Your Spice Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography align="center">Your cart is as empty as a spice jar after a feast!</Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <StyledCard key={item.id}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 151, objectFit: 'cover' }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#B22222', fontFamily: 'Georgia, serif' }}>{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ₹{item.price}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <IconButton onClick={() => updateQuantity(item.id, -1)} sx={{ color: '#138808' }}>
                      <Remove />
                    </IconButton>
                    <Typography sx={{ mx: 2, fontWeight: 'bold' }}>{item.quantity}</Typography>
                    <IconButton onClick={() => updateQuantity(item.id, 1)} sx={{ color: '#FF9933' }}>
                      <Add />
                    </IconButton>
                    <IconButton onClick={() => updateQuantity(item.id, -item.quantity)} sx={{ ml: 'auto', color: '#B22222' }}>
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </StyledCard>
            ))}
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                       background: 'rgba(255,255,255,0.8)', 
                       padding: '20px', 
                       borderRadius: '10px', 
                       boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <Typography variant="h5" sx={{ fontFamily: 'Georgia, serif', color: '#B22222' }}>
                Total: ₹{totalPrice}
              </Typography>
              <Link to="/checkout">
              <StyledButton onClick={onCheckout} startIcon={<ShoppingCart />}>
                Proceed to Checkout
              </StyledButton>
              </Link>
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default CartPage;
