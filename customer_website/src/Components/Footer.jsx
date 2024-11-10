import React from 'react';
import { Box, Typography, Grid, TextField, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#fff8e1', // Dark green background
    color: '#004d40', // White text color
    padding: theme.spacing(8, 20),
    
  },
  gridContainer: {
    marginBottom: theme.spacing(4),
  },
  footerTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  link: {
    color: '#004d40',
    textDecoration: 'none',
    display: 'block',
    marginBottom: theme.spacing(1),
    '&:hover': {
      color: '#f36d25', // Orange hover effect
    },
  },
  socialIcons: {
    marginTop: theme.spacing(2),
    '& svg': {
      color: '#004d40',
      marginRight: theme.spacing(1.5),
      '&:hover': {
        color: '#f36d25', // Orange hover effect
      },
    },
  },
  newsletter: {
    marginTop: theme.spacing(2),
    '& .MuiInputBase-input': {
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      padding: theme.spacing(1.5),
    },
    '& button': {
      backgroundColor: '#f36d25', // Orange button for subscribe
      color: '#ffffff',
      marginTop: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#ff7e50', // Slightly lighter orange on hover
      },
    },
  },
  copyright: {
    textAlign: 'center',
    borderTop: '1px solid #f36d25', // Orange line
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container className={classes.gridContainer}>
        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography className={classes.footerTitle}>Quick Links</Typography>
          <a href="/about" className={classes.link}>About Us</a>
          <a href="/contact" className={classes.link}>Contact Us</a>
          <a href="/faqs" className={classes.link}>FAQs</a>
          <a href="/privacy-policy" className={classes.link}>Privacy Policy</a>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography className={classes.footerTitle}>Follow Us</Typography>
          <Box className={classes.socialIcons}>
            <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Subscribe to Newsletter */}
        <Grid item xs={12} md={4}>
          <Typography className={classes.footerTitle}>Subscribe to Our Newsletter</Typography>
          <Typography variant="body2">
            Stay updated with the latest products and offers from TIFCO.
          </Typography>
          <Box className={classes.newsletter}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              InputProps={{ className: classes.input }}
            />
            <Button fullWidth variant="contained">Subscribe</Button>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box className={classes.copyright}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} TIFCO. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
