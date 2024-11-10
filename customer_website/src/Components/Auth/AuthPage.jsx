import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AuthPages = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const glowAnimation = `
  @keyframes glow {
    0% { box-shadow: 0 0 5px #FF6600; }
    50% { box-shadow: 0 0 20px #FF6600; }
    100% { box-shadow: 0 0 5px #FF6600; }
  }
`;

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#FFF5E6',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      backgroundImage: isSignUp
        ? 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23FF6600" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'
        : 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23006400" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
    },
    header: {
      color: '#006400',
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#FF6600',
      color: 'white',
      border: 'none',
      padding: '12px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      animation: 'glow 2s infinite',
    },
    switchText: {
      marginTop: '20px',
      textAlign: 'center',
      color: '#666',
    },
    switchLink: {
      color: '#FF6600',
      cursor: 'pointer',
    },
    decorativeElement: {
      width: '100%',
      height: '5px',
      background: 'linear-gradient(to right, #FF6600, #006400)',
      marginBottom: '20px',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, x: isSignUp ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <style>{glowAnimation}</style>
      <div style={styles.decorativeElement}></div>
      <h1 style={styles.header}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          required
        />
        {isSignUp && (
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm Password"
            required
          />
        )}
        <button style={styles.button} type="submit">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      <p style={styles.switchText}>
        {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
        <span
          style={styles.switchLink}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </span>
      </p>
    </motion.div>
  );
};

export default AuthPages;