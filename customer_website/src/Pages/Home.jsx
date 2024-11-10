import React from 'react';
import Category from '../Components/Category';
import Collection from '../Components/Collection';
import ExploreRanges from '../Components/ExploreRanges';
import banner from '../assets/banner.png';
import WhyChooseUs from '../Components/WhyChooseUs';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Home = () => {
  const bannerStyle = {
    width: '100%',
    height: '450px', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const bannerImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const sectionStyle = {
    padding: '40px 20px', // Increase padding between sections
    
  };
  const theme = createTheme({
    // Customize your theme here if needed
    spacing: 8, // example of customizing the spacing
  });

  return (
    <>
      <div style={bannerStyle}>
        <img src={banner} alt="Banner" style={bannerImageStyle} />
      </div>
      
      <div style={sectionStyle}>
        <Category />
      </div>

      <div >
        <ExploreRanges />
      </div>

      <div >
        <Collection />
      </div>
      <div >
    <ThemeProvider theme={theme}>
      <WhyChooseUs />
    </ThemeProvider>
      </div>
    </>
  );
};

export default Home;
