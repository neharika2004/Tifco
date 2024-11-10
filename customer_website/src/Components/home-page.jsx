'use client'

import React, { useState, useEffect } from 'react'
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box,
  Rating,
  Chip,
  Paper
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { 
  Favorite as HeartIcon, 
  ShoppingCart as ShoppingCartIcon, 
  Star as StarIcon, 
  ChevronRight as ChevronRightIcon, 
  Spa as SpaIcon
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}))

const AnimatedBox = styled(Box)(({ theme, delay }) => ({
  opacity: 0,
  animation: `$fadeInUp 0.5s ease-out ${delay}ms forwards`,
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}))

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#FFF3E0', minHeight: '100vh' }}>
      {/* Categories Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Discover Our Flavorful Collections
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Taste the Tradition in Every Bite!
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item key={category.name} xs={12} sm={6} md={3}>
              <AnimatedBox delay={index * 150}>
                <StyledCard component={Link} to="#" sx={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/placeholder.svg"
                    alt={category.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.items} items
                    </Typography>
                  </CardContent>
                </StyledCard>
              </AnimatedBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" color="primary" gutterBottom>
            Our Bestsellers
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Indulge in Flavors That Tell a Story!
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item key={product.name} xs={12} sm={6} md={3}>
                <AnimatedBox delay={(index + 4) * 150}>
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/placeholder.svg"
                      alt={product.name}
                    />
                    {product.badge && (
                      <Chip
                        label={product.badge}
                        color="error"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          animation: 'pulse 2s infinite',
                          '@keyframes pulse': {
                            '0%': {
                              transform: 'scale(0.95)',
                              boxShadow: '0 0 0 0 rgba(255, 82, 82, 0.7)',
                            },
                            '70%': {
                              transform: 'scale(1)',
                              boxShadow: '0 0 0 10px rgba(255, 82, 82, 0)',
                            },
                            '100%': {
                              transform: 'scale(0.95)',
                              boxShadow: '0 0 0 0 rgba(255, 82, 82, 0)',
                            },
                          },
                        }}
                      />
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                        <Rating name="read-only" value={5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          (120)
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Typography variant="h6" color="primary">
                          ₹{product.price}
                        </Typography>
                        <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </AnimatedBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ bgcolor: '#FFF3E0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" color="primary" gutterBottom>
            Why Choose Us
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Experience the Difference in Every Bite!
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item key={value.title} xs={12} sm={6} md={3}>
                <AnimatedBox delay={(index + 8) * 150}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Paper
                      elevation={3}
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        mb: 2,
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'rotate(12deg)',
                        },
                      }}
                    >
                      {value.icon}
                    </Paper>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Box>
                </AnimatedBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          backgroundImage: 'linear-gradient(to right, #FF9800, #F44336)',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Ready to Taste Tradition?
          </Typography>
          <Typography variant="h5" paragraph>
            Join thousands of satisfied customers and bring the flavors of heritage to your doorstep!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'common.white',
              color: 'primary.main',
              transition: 'all 0.3s',
              '&:hover': {
                bgcolor: '#FFF3E0',
                transform: 'scale(1.05)',
              },
            }}
          >
            Shop Now and Save 10%! <SpaIcon sx={{ ml: 1 }} />
          </Button>
        </Container>
      </Box>

      {/* Floating Offer */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
          },
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          Limited Time Offer!
        </Typography>
        <Typography variant="body2">
          Use code TRADITION10 for 10% off!
        </Typography>
      </Box>
    </Box>
  )
}

const categories = [
  { name: "Heritage Sweets", items: 24 },
  { name: "Traditional Snacks", items: 36 },
  { name: "Gift Hampers", items: 12 },
  { name: "Healthy Bites", items: 18 },
]

const products = [
  {
    name: "Andhra Spicy Murukku",
    description: "Crispy Spicy Chakli",
    price: 149,
    badge: "New Arrival"
  },
  {
    name: "Chocolate Burfi",
    description: "No Maida / Additives / Preservatives",
    price: 125,
    badge: "50% OFF"
  },
  {
    name: "Badam Halwa",
    description: "Traditional Sweet",
    price: 169,
  },
  {
    name: "Besan Laddu",
    description: "Gluten Free",
    price: 189,
  },
]

const values = [
  {
    title: "Natural Ingredients",
    description: "Sourced directly from nature",
    icon: <HeartIcon fontSize="large" />
  },
  {
    title: "Healthy Recipes",
    description: "Balanced, nutritious meals",
    icon: <StarIcon fontSize="large" />
  },
  {
    title: "Culturally Rich",
    description: "Preserving traditions",
    icon: <HeartIcon fontSize="large" />
  },
  {
    title: "Safe & Reliable",
    description: "Quality guaranteed",
    icon: <ShoppingCartIcon fontSize="large" />
  },
]