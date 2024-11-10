import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import '../Style/Category.css';

const categories = [
  {
    title: 'New Arrivals',
    image: '/path-to-image/new-arrivals.png', // Update with your image paths
  },
  {
    title: 'Gift Hampers',
    image: '/path-to-image/gift-hampers.png',
  },
  {
    title: 'Banana Chips',
    image: '/path-to-image/banana-chips.png',
  },
  {
    title: 'Tapioca Chips',
    image: '/path-to-image/tapioca-chips.png',
  },
  {
    title: 'Mixture Store',
    image: '/path-to-image/mixture-store.png',
  },
  {
    title: 'Murukku Store',
    image: '/path-to-image/murukku-store.png',
  },
  {
    title: 'Super Saver Combos',
    image: '/path-to-image/super-saver-combos.png',
  },
  {
    title: 'Laddus & Halwas',
    image: '/path-to-image/laddus-halwas.png',
  },

];

const Category = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '10px 0' }}>
      <Typography variant="h4" gutterBottom color='#347928'>
        Authentic Snacks, Chips and Sweets
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Made with <span style={{ color: 'red' }}>❤️</span> from ------
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2.5} key={index}>
            <Card className="category-card" sx={{ borderRadius: '8px', border: '2px solid #ffc107', maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="180"
                image={category.image}
                alt={category.title}
                className="category-image"
              />
              <CardContent>
                <Typography variant="subtitle1" component="div" className="category-title">
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
