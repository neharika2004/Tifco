import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import '../Style/Category.css';  // Assuming your CSS is handling styles for both sections

const exploreRanges = [
  {
    title: 'Heritage Sweets',
    image: '/path-to-image/heritage-sweets.png', // Replace with the correct image path
  },
  {
    title: 'Traditional Snacks',
    image: '/path-to-image/traditional-snacks.png',
  },
  {
    title: 'Healthy Bites',
    image: '/path-to-image/healthy-bites.png',
  },
  {
    title: 'Savory Combos',
    image: '/path-to-image/savory-combos.png',
  },
];

const ExploreRanges = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '80px 0', backgroundColor: '#fff8e1' }}>
      <Typography variant="h4" gutterBottom color='#347928'>
        Explore Our Ranges
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {exploreRanges.map((range, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2.5} key={index}>
            <Card className="explore-range-card" sx={{ borderRadius: '8px', border: '2px solid #ffc107', maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="180"
                image={range.image}
                alt={range.title}
                className="explore-range-image"
              />
              <CardContent>
                <Typography variant="subtitle1" component="div" className="explore-range-title">
                  {range.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExploreRanges;
