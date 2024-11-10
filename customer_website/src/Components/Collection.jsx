import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Grid, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageBelowButton from '../assets/bg.png'; // Import the image

const categories = ['Newest Arrivals', 'Masalas & Ghee', 'Papads & Fryums', 'Classic Pickles', 'Beverages', 'Millet Specials', 'Sweets & Snacks'];

// Sample data for the products
const products = [
  {
    id: 1,
    name: 'Andhra Spicy Murukku',
    description: 'Crispy Spicy Chakli',
    price: '149',
    weight: '150 g',
    image: '/path/to/your/image/andhra_spicy_murukku.png',
    newArrival: true,
  },
  {
    id: 2,
    name: 'Chocolate Burfi',
    description: 'No Maida / Additives / Preservatives',
    price: '125',
    weight: '150 g',
    image: '/path/to/your/image/chocolate_burfi.png',
    discount: '50% OFF',
  },
  {
    id: 3,
    name: 'Badam Halwa',
    description: 'No Maida / Additives / Preservatives',
    price: '169',
    weight: '100 g',
    originalPrice: '199',
    image: '/path/to/your/image/badam_halwa.png',
    discount: '15% OFF',
  },
  {
    id: 4,
    name: 'Besan Laddu',
    description: 'Gluten Free',
    price: '189',
    weight: '150 g',
    originalPrice: '199',
    image: '/path/to/your/image/besan_laddu.png',
    newArrival: true,
  },
];

// Styled component for the category buttons with the color palette
const CategoryButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  margin: theme.spacing(0.5),
  backgroundColor: '#FF6600', // Orange color
  color: 'white',
  '&:hover': {
    backgroundColor: '#FB8C00',
  },
}));

// Custom styles for the heading
const Heading = styled(Typography)(({ theme }) => ({
  color: '#347928', // Green color for the heading
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const Collection = () => {
  return (
    <Box
      sx={{
        padding: 8,
        backgroundColor: '#fef5d0',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      {/* Heading */}
      <Heading variant="h4">Shop by Collection</Heading>

      {/* Categories */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        {categories.map((category, index) => (
          <CategoryButton key={index} variant="contained">
            {category}
          </CategoryButton>
        ))}
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ backgroundColor: '#FFFDE7', borderColor: '#FFA726' }}> {/* White card with slight orange tint */}
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                {product.newArrival && <Chip label="NEW ARRIVAL" color="error" />}
                {product.discount && <Chip label={product.discount} color="warning" sx={{ ml: 1 }} />}
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                  {product.weight}
                </Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                  ₹{product.price}
                  {product.originalPrice && (
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'line-through', marginLeft: 1 }}
                    >
                      ₹{product.originalPrice}
                    </Typography>
                  )}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FF6600', // Orange button
                    '&:hover': {
                      backgroundColor: '#FB8C00',
                    },
                    marginTop: 2,
                    width: '100%',
                  }}
                >
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View All Button */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#347928', // Green button
            color: 'white',
            '&:hover': {
              backgroundColor: '#388E3C',
            },
          }}
        >
          View All
        </Button>

        {/* Image below the button */}
        <Box sx={{ marginTop: 2 }}>
          <img
            src={imageBelowButton}
            alt="Image below button"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Collection;
