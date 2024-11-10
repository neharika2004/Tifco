import  { useState, useEffect } from 'react';

const TrackOrderPage = ({ orderId = "12345" }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const steps = [
    { name: "Order Placed", icon: "📦", date: "May 15, 2023" },
    { name: "Processing", icon: "🏭", date: "May 16, 2023" },
    { name: "Shipped", icon: "🚚", date: "May 18, 2023" },
    { name: "Out for Delivery", icon: "🛵", date: "May 20, 2023" },
    { name: "Delivered", icon: "🎉", date: "May 21, 2023" },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(2); // Assume the order is at the "Shipped" stage
    }, 1500);
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '40px auto',
      padding: '40px',
      backgroundColor: '#FFF5E6',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    header: {
      color: '#006400',
      fontSize: '32px',
      marginBottom: '30px',
      textAlign: 'center',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    },
    orderInfo: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    orderId: {
      fontSize: '18px',
      color: '#FF6600',
      fontWeight: 'bold',
    },
    timeline: {
      position: 'relative',
      margin: '40px 0',
    },
    progressBar: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '4px',
      background: '#ddd',
      width: '100%',
      zIndex: 1,
    },
    progressBarFill: {
      height: '100%',
      background: '#FF6600',
      width: `${(currentStep / (steps.length - 1)) * 100}%`,
      transition: 'width 1s ease-in-out',
    },
    stepsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 2,
    },
    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    stepIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      marginBottom: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    activeStepIcon: {
      backgroundColor: '#FF6600',
      transform: 'scale(1.2)',
      boxShadow: '0 4px 20px rgba(255,102,0,0.4)',
    },
    stepName: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#006400',
    },
    stepDate: {
      fontSize: '12px',
      color: '#666',
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      color: '#FF6600',
    },
    mapContainer: {
      height: '200px',
      backgroundColor: '#E6FFE6',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Track Your Order</h1>
      <div style={styles.orderInfo}>
        <span style={styles.orderId}>Order ID: {orderId}</span>
      </div>
      <div style={styles.timeline}>
        <div style={styles.progressBar}>
          <div style={styles.progressBarFill}></div>
        </div>
        <div style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} style={styles.step}>
              <div 
                style={{
                  ...styles.stepIcon, 
                  ...(index <= currentStep ? styles.activeStepIcon : {})
                }}
              >
                {step.icon}
              </div>
              <div style={styles.stepName}>{step.name}</div>
              <div style={styles.stepDate}>{step.date}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.mapContainer}>
        Interactive Map Placeholder
      </div>
      {isLoading && (
        <div style={styles.loadingOverlay}>
          Loading order status...
        </div>
      )}
    </div>
  );
};

export default TrackOrderPage;