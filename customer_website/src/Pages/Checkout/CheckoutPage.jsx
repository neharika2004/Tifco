import React, { useState } from 'react';
import { 
  Container, Stepper, Step, StepLabel, Button, Box, ThemeProvider, createTheme, styled, Paper 
} from '@mui/material';
import AddressForm from './AddressForm';
import OrderSummaryAndPayment from './OrderSummary';
import OrderSuccessPage from './OrderSuccessPage';

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

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
  background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)`,
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  border: `2px solid ${theme.palette.primary.main}`,
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepIcon-root': {
    color: theme.palette.primary.main,
    '&.Mui-active': {
      color: theme.palette.secondary.main,
    },
    '&.Mui-completed': {
      color: theme.palette.secondary.main,
    },
  },
}));

const steps = ['Shipping address', 'Order summary & Payment', 'Order confirmation']

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({});
  const [orderDetails, setOrderDetails] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddressSubmit = (address) => {
    setShippingAddress(address);
    handleNext();
  };

  const handleOrderConfirm = (order) => {
    setOrderDetails(order);
    handleNext();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm onSubmit={handleAddressSubmit} />;
      case 1:
        return <OrderSummaryAndPayment onSubmit={handleOrderConfirm} />;
      case 2:
        return <OrderSuccessPage orderNumber={orderDetails.orderNumber || '12345'} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <StyledPaper>
          <Box sx={{ 
            my: 3, 
            textAlign: 'center', 
            borderBottom: '2px solid #FF9933',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            <h2 style={{ fontFamily: 'Georgia, serif', color: '#B22222', margin: 0 }}>Checkout</h2>
          </Box>
          <StyledStepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </StyledStepper>
          {activeStep === steps.length ? (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', color: '#138808' }}>Thank you for your order!</h2>
              <p>Your spices are on their way to tantalize your taste buds.</p>
            </Box>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && activeStep !== steps.length - 1 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
              </Box>
            </>
          )}
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
}