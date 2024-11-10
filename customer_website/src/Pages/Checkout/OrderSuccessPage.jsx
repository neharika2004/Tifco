import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const OrderSuccessPage = ({ orderNumber }) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#FFF5E6',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23006400" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
    },
    header: {
      color: '#006400',
      fontSize: '28px',
      marginBottom: '20px',
    },
    icon: {
      fontSize: '64px',
      color: '#FF6600',
      marginBottom: '20px',
    },
    message: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '30px',
    },
    orderNumber: {
      fontSize: '24px',
      color: '#006400',
      fontWeight: 'bold',
      marginBottom: '30px',
      animation: 'pulse 2s infinite',
    },
    button: {
      backgroundColor: '#FF6600',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  const pulseAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

  return (
    <div style={styles.container}>
      <style>{pulseAnimation}</style>
      <h1 style={styles.header}>Order Placed Successfully!</h1>
      <div style={styles.icon}>🎉</div>
      <p style={styles.message}>
        Thank you for your order. We're preparing your authentic Indian spices with care.
      </p>
      <p style={styles.orderNumber}>Order Number: {orderNumber}</p>
      <button style={styles.button} onClick={() => window.location.href = '/orders'}>
        Track Your Order
      </button>
    </div>
  );
};

export default OrderSuccessPage;