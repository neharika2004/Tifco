import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrdersPage = () => {
  const [orders] = useState([
    { id: '12345', date: '2023-05-15', status: 'Delivered', total: '₹330' },
    { id: '12346', date: '2023-05-20', status: 'In Transit', total: '₹450' },
    { id: '12347', date: '2023-05-25', status: 'Processing', total: '₹280' },
  ]);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#FFF5E6',
    },
    header: {
      color: '#006400',
      fontSize: '24px',
      marginBottom: '20px',
    },
    orderList: {
      listStyle: 'none',
      padding: 0,
    },
    orderItem: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      },
    },
    orderHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    orderId: {
      fontWeight: 'bold',
      color: '#FF6600',
    },
    orderDate: {
      color: '#666',
    },
    orderStatus: {
      fontWeight: 'bold',
      color: '#006400',
    },
    orderTotal: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    button: {
      backgroundColor: '#FF6600',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    customerCare: {
      marginTop: '40px',
      textAlign: 'center',
      animation: 'float 3s ease-in-out infinite',
    },
    customerCareHeader: {
      color: '#006400',
      fontSize: '20px',
      marginBottom: '10px',
    },
  };

  const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

  return (
    <div style={styles.container}>
      <style>{floatAnimation}</style>
      <h1 style={styles.header}>Your Orders</h1>
      <motion.ul style={styles.orderList}>
        {orders.map((order, index) => (
          <motion.li
            key={order.id}
            style={styles.orderItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div style={styles.orderHeader}>
              <span style={styles.orderId}>Order #{order.id}</span>
              <span style={styles.orderDate}>{order.date}</span>
            </div>
            <div style={styles.orderStatus}>Status: {order.status}</div>
            <div style={styles.orderTotal}>Total: {order.total}</div>
            <button style={styles.button}>Track Order</button>
          </motion.li>
        ))}
      </motion.ul>
      <div style={styles.customerCare}>
        <h2 style={styles.customerCareHeader}>Need Help?</h2>
        <p>Our customer care team is here to assist you.</p>
        <button style={styles.button}>Contact Customer Care</button>
      </div>
    </div>
  );
};

export default OrdersPage;