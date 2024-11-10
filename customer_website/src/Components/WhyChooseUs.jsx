import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SecurityIcon from '@mui/icons-material/Security';

// Custom styles using your green theme
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#004d40', // Dark green background
    color: '#ffffff', // White text color
    padding: theme.spacing(6, 0),
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  title: {
    fontSize: '2.5rem',
    color: '#ffffff', // White title
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    color: '#f36d25', // Orange subtitle for emphasis
    marginBottom: theme.spacing(4),
  },
  gridContainer: {
    marginTop: theme.spacing(4),
  },
  gridItem: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  iconCircle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#00796b', // Light green background for icons
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '3rem',
    color: '#ffffff', // White icons
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  featureText: {
    fontSize: '1rem',
    color: '#ffffff', // White text for description
  },
}));

const WhyChooseUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        {/* Title Section */}
        <Box className={classes.titleSection}>
          <Typography variant="h4" className={classes.subtitle}>
            About Us
          </Typography>
          <Typography variant="h2" className={classes.title}>
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.featureText}>
            At TIFCO, we are committed to delivering authentic, traditional flavors that promote healthy living while preserving the rich cultural heritage of our culinary traditions.
          </Typography>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Box className={classes.iconCircle}>
              {/* <EcoIcon className={classes.icon} /> */}
            </Box>
            <Typography className={classes.featureTitle}>
              Natural Ingredients
            </Typography>
            <Typography className={classes.featureText}>
              Sourced directly from nature, our ingredients are handpicked to ensure maximum freshness and flavor.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Box className={classes.iconCircle}>
              <LocalDiningIcon className={classes.icon} />
            </Box>
            <Typography className={classes.featureTitle}>
              Healthy Recipes
            </Typography>
            <Typography className={classes.featureText}>
              Our mixes are designed to offer balanced, nutritious meals without compromising on taste.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Box className={classes.iconCircle}>
              <FavoriteIcon className={classes.icon} />
            </Box>
            <Typography className={classes.featureTitle}>
              Culturally Rich
            </Typography>
            <Typography className={classes.featureText}>
              Preserving culinary traditions passed down through generations, offering an authentic experience.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <Box className={classes.iconCircle}>
              <SecurityIcon className={classes.icon} />
            </Box>
            <Typography className={classes.featureTitle}>
              Safe & Reliable
            </Typography>
            <Typography className={classes.featureText}>
              We ensure that all our products are free from harmful additives and are biologically safe.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
