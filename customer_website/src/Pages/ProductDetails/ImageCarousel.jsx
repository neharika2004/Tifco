import React from 'react';
import { Box } from '@mui/material';

const ImageCarousel = ({ images }) => {
  return (
    <Box>
      <img src={images[0]} alt="Product" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      {/* Add image thumbnails below the main image */}
      <Box display="flex" marginTop="10px">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '4px',
              cursor: 'pointer',
              margin: '0 5px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
