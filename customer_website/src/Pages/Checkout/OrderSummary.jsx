import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Authentic Madras Sambar Mix', desc: '200g pack', price: 180, quantity: 1 },
  { id: 2, name: 'Masala Dosa Mix', desc: '250g pack', price: 150, quantity: 1 },
];

export default function OrderSummaryAndPayment({ onSubmit }) {
  const [products, setProducts] = useState(initialProducts);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');

  const handleQuantityChange = (id, change) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: Math.max(0, product.quantity + change) } : product
    ));
  };

  const handleCardDetailsChange = (event) => {
    setCardDetails({ ...cardDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      products,
      totalAmount,
      paymentMethod,
      paymentDetails: paymentMethod === 'card' ? cardDetails : paymentMethod === 'upi' ? { upiId } : null,
    };
    onSubmit(order);
  };

  const totalAmount = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#FFF5E6',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    header: {
      backgroundColor: '#FF6600',
      color: 'white',
      padding: '20px',
      borderRadius: '8px 8px 0 0',
      textAlign: 'center',
    },
    title: {
      margin: '0',
      fontSize: '24px',
    },
    subtitle: {
      margin: '5px 0 0',
      fontSize: '16px',
      fontWeight: 'normal',
    },
    content: {
      padding: '20px',
    },
    section: {
      marginBottom: '20px',
    },
    sectionTitle: {
      color: '#006400',
      fontSize: '18px',
      marginBottom: '10px',
    },
    productItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: 'white',
      borderRadius: '4px',
    },
    productInfo: {
      flex: 1,
    },
    productName: {
      fontWeight: 'bold',
      color: '#006400',
    },
    productDesc: {
      fontSize: '14px',
      color: '#666',
    },
    productPrice: {
      fontWeight: 'bold',
      color: '#FF6600',
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center',
    },
    quantityButton: {
      width: '30px',
      height: '30px',
      backgroundColor: '#006400',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      fontSize: '18px',
      cursor: 'pointer',
    },
    quantity: {
      margin: '0 10px',
      fontSize: '16px',
    },
    total: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 'bold',
      fontSize: '18px',
      marginTop: '10px',
      paddingTop: '10px',
      borderTop: '1px solid #ddd',
    },
    form: {
      marginTop: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#006400',
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    radioGroup: {
      marginBottom: '15px',
    },
    radioLabel: {
      marginLeft: '5px',
      color: '#006400',
    },
    button: {
      backgroundColor: '#006400',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
    },
    cashOption: {
      backgroundColor: '#FFD700',
      padding: '15px',
      borderRadius: '4px',
      textAlign: 'center',
      marginTop: '10px',
    },
    cashText: {
      color: '#006400',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    deliveryInfo: {
      backgroundColor: '#E6FFE6',
      padding: '10px',
      borderRadius: '4px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Order Summary & Payment</h1>
        <p style={styles.subtitle}>Complete your purchase of authentic Indian spices</p>
      </header>
      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Order Details</h2>
          {products.map((product) => (
            <div key={product.id} style={styles.productItem}>
              <div style={styles.productInfo}>
                <div style={styles.productName}>{product.name}</div>
                <div style={styles.productDesc}>{product.desc}</div>
                <div style={styles.productPrice}>₹{product.price}</div>
              </div>
              <div style={styles.quantityControl}>
                <button style={styles.quantityButton} onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <span style={styles.quantity}>{product.quantity}</span>
                <button style={styles.quantityButton} onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>
            </div>
          ))}
          <div style={styles.total}>
            <span>Total</span>
            <span style={styles.productPrice}>₹{totalAmount}</span>
          </div>
        </div>
        <div style={styles.deliveryInfo}>
          <h3 style={styles.sectionTitle}>Estimated Delivery</h3>
          <p>Your order will be delivered within 3-5 business days.</p>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.sectionTitle}>Payment Method</h2>
          <div style={styles.radioGroup}>
            <div>
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="card" style={styles.radioLabel}>Credit/Debit Card</label>
            </div>
            <div>
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="upi" style={styles.radioLabel}>UPI</label>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cash" style={styles.radioLabel}>Cash on Delivery</label>
            </div>
          </div>
          {paymentMethod === 'card' && (
            <>
              <div style={styles.formGroup}>
                <label htmlFor="cardName" style={styles.label}>Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={cardDetails.cardName}
                  onChange={handleCardDetailsChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="cardNumber" style={styles.label}>Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="expDate" style={styles.label}>Expiry Date</label>
                <input
                  type="text"
                  id="expDate"
                  name="expDate"
                  value={cardDetails.expDate}
                  onChange={handleCardDetailsChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="cvv" style={styles.label}>CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  required
                  style={styles.input}
                />
              </div>
            </>
          )}
          {paymentMethod === 'upi' && (
            <div style={styles.formGroup}>
              <label htmlFor="upiId" style={styles.label}>UPI ID</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
                style={styles.input}
              />
            </div>
          )}
          <button type="submit" style={styles.button}>Place Order</button>
        </form>
        {paymentMethod === 'cash' && (
          <div style={styles.cashOption}>
            <p style={styles.cashText}>You will pay in cash upon delivery.</p>
          </div>
        )}
      </div>
    </div>
  );
}