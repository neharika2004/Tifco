// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, Button, IconButton, TextField, Rating } from '@mui/material';
// import ImageCarousel from './ImageCarousel';

// // Sample product data
// const southIndianProducts = [
//     {
//       id: 1,
//       name: "Sambar Mix 200gms",
//       category: "South Indian Foods",
//       weight: "200g",
//       price: 180,
//       image: "path/to/sambar_mix.jpg",
//       images: ["path/to/sambar_mix_1.jpg", "path/to/sambar_mix_2.jpg"],
//       rating: 4.8,
//       reviews: 152,
//       description: "Sambar Mix is a traditional South Indian dish made with lentils and aromatic spices.",
//     },
//     {
//       id: 2,
//       name: "Authentic Madarasi Sambar",
//       brand: "Madurai Specialties",
//       weight: "200g",
//       price: 180,
//       image: "path/to/authentic_madarasi_sambar.jpg",
//       images: ["path/to/authentic_madarasi_sambar_1.jpg", "path/to/authentic_madarasi_sambar_2.jpg"],
//       rating: 4.7,
//       reviews: 98,
//       description: "Authentic Madarasi Sambar made with the finest blend of spices for a true South Indian taste.",
//       peopleWatching: 3,
//     },
//     {
//       id: 3,
//       name: "Karnataka Sambar",
//       brand: "Karnataka Delights",
//       weight: "200g",
//       price: 180,
//       image: "path/to/karnataka_sambar.jpg",
//       images: ["path/to/karnataka_sambar_1.jpg", "path/to/karnataka_sambar_2.jpg"],
//       rating: 4.6,
//       reviews: 76,
//       description: "Karnataka-style sambar mix prepared with authentic flavors of Karnataka cuisine.",
//       peopleWatching: 7,
//     },
//     {
//       id: 4,
//       name: "Parupu Rasam Mix 200gms",
//       brand: "Tamil Foods",
//       weight: "200g",
//       price: 180,
//       image: "path/to/parupu_rasam.jpg",
//       images: ["path/to/parupu_rasam_1.jpg", "path/to/parupu_rasam_2.jpg"],
//       rating: 4.7,
//       reviews: 65,
//       description: "Parupu Rasam Mix for an easy and flavorful preparation of the traditional South Indian soup.",
//       peopleWatching: 4,
//     },
//     {
//       id: 5,
//       name: "Pepper Rasam Mix 200gms",
//       brand: "Spice Essence",
//       weight: "200g",
//       price: 180,
//       image: "path/to/pepper_rasam.jpg",
//       images: ["path/to/pepper_rasam_1.jpg", "path/to/pepper_rasam_2.jpg"],
//       rating: 4.5,
//       reviews: 54,
//       description: "Pepper Rasam Mix with black pepper for a spicy and healthy rasam.",
//       peopleWatching: 6,
//     },
//     {
//       id: 6,
//       name: "Coconut Milk Rasam 200gms",
//       brand: "Kerala Taste",
//       weight: "200g",
//       price: 200,
//       image: "path/to/coconut_milk_rasam.jpg",
//       images: ["path/to/coconut_milk_rasam_1.jpg", "path/to/coconut_milk_rasam_2.jpg"],
//       rating: 4.8,
//       reviews: 80,
//       description: "Coconut Milk Rasam Mix provides a unique flavor of coconut milk in a traditional rasam.",
//       peopleWatching: 8,
//     },
//     {
//       id: 7,
//       name: "Veg Paneer Gravy Mix 200gms",
//       brand: "Indian Gourmet",
//       weight: "200g",
//       price: 200,
//       image: "path/to/veg_paneer_gravy.jpg",
//       images: ["path/to/veg_paneer_gravy_1.jpg", "path/to/veg_paneer_gravy_2.jpg"],
//       rating: 4.6,
//       reviews: 71,
//       description: "Veg Paneer Gravy Mix for making delicious and creamy paneer-based curry.",
//       peopleWatching: 10,
//     },
//     {
//       id: 8,
//       name: "Vathakuzambu Mix 200gms",
//       brand: "Homely Taste",
//       weight: "200g",
//       price: 180,
//       image: "path/to/vathakuzambu.jpg",
//       images: ["path/to/vathakuzambu_1.jpg", "path/to/vathakuzambu_2.jpg"],
//       rating: 4.7,
//       reviews: 63,
//       description: "Vathakuzambu Mix for an easy preparation of this tangy and spicy South Indian delicacy.",
//       peopleWatching: 9,
//     },
//     {
//       id: 9,
//       name: "Pepper Curry Leaves Kuzambu 200gms",
//       brand: "Flavour King",
//       weight: "200g",
//       price: 180,
//       image: "path/to/pepper_curry_leaves_kuzambu.jpg",
//       images: ["path/to/pepper_curry_leaves_kuzambu_1.jpg", "path/to/pepper_curry_leaves_kuzambu_2.jpg"],
//       rating: 4.5,
//       reviews: 58,
//       description: "Pepper and Curry Leaves Kuzambu Mix for a healthy and flavorful preparation.",
//       peopleWatching: 4,
//     },
//     {
//       id: 10,
//       name: "Avail Mix 200gms",
//       brand: "Kerala Kitchen",
//       weight: "200g",
//       price: 180,
//       image: "path/to/avail_mix.jpg",
//       images: ["path/to/avail_mix_1.jpg", "path/to/avail_mix_2.jpg"],
//       rating: 4.6,
//       reviews: 67,
//       description: "Avail Mix for making the traditional Kerala-style Aviyal with ease.",
//       peopleWatching: 5,
//     },
//     {
//       id: 11,
//       name: "Poricha Kuttu Mix 200gms",
//       brand: "Authentic Tamil Nadu",
//       weight: "200g",
//       price: 180,
//       image: "path/to/poricha_kuttu_mix.jpg",
//       images: ["path/to/poricha_kuttu_mix_1.jpg", "path/to/poricha_kuttu_mix_2.jpg"],
//       rating: 4.4,
//       reviews: 48,
//       description: "Poricha Kuttu Mix for a wholesome and nutritious South Indian stew.",
//       peopleWatching: 3,
//     },
//     {
//       id: 12,
//       name: "Bisibela Bath Mix 200gms",
//       brand: "Bangalore Delicacies",
//       weight: "200g",
//       price: 180,
//       image: "path/to/bisibela_bath_mix.jpg",
//       images: ["path/to/bisibela_bath_mix_1.jpg", "path/to/bisibela_bath_mix_2.jpg"],
//       rating: 4.8,
//       reviews: 90,
//       description: "Bisibela Bath Mix for making Karnataka's famous rice dish in minutes.",
//       peopleWatching: 6,
//     },
//     // Add more products similarly...
//   ];
  

//   const ProductDetails = () => {
//     const { productId } = useParams();
//     const product = southIndianProducts.find(
//       (item) => item.id === parseInt(productId)
//     );
  
//     const [quantity, setQuantity] = useState(1);
  
//     if (!product) {
//       return <Typography variant="h5">Product not found!</Typography>;
//     }
  
//     // Handle Quantity Changes
//     const handleQuantityChange = (type) => {
//       setQuantity((prev) => (type === 'increment' ? prev + 1 : prev > 1 ? prev - 1 : 1));
//     };
  
//     return (
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         // minHeight="100vh"
//         bgcolor="#f5f5f5"
//         padding="50px"
//       >
//         <Box
//           width="90%"
//           bgcolor="white"
//           padding="30px"
//           borderRadius="10px"
//           boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
//         >
//           {/* Product Content */}
//           <Box display="flex" flexWrap="wrap" paddingBottom="20px">
//             {/* Image Carousel */}
//             <Box flex={1} marginRight="100px" marginBottom="20px">
//               <ImageCarousel images={product.images} />
//             </Box>
  
//             {/* Product Info */}
//             <Box flex={2}>
//               <Typography variant="h4" color="#f36d25">
//                 {product.name} - {product.weight}
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary">
//                 {product.brand}
//               </Typography>
  
//               <Box display="flex" alignItems="center" marginY="10px">
//                 <Rating value={product.rating} readOnly />
//                 <Typography variant="body2" marginLeft="10px">
//                   {product.reviews} Reviews
//                 </Typography>
//               </Box>
  
//               <Typography variant="h5" color="#388e3c" marginY="10px">
//                 Price: ₹{product.price}
//               </Typography>
  
//               <Typography variant="body2" color="textSecondary">
//                 Tax included. Shipping calculated at checkout.
//               </Typography>
  
//               {/* Quantity */}
//               <Box display="flex" alignItems="center" marginY="20px">
//                 <IconButton
//                   onClick={() => handleQuantityChange('decrement')}
//                   style={{ backgroundColor: '#AAB396', color: '#fff' }}
//                 >
//                   -
//                 </IconButton>
//                 <TextField
//                   value={quantity}
//                   variant="outlined"
//                   size="small"
//                   inputProps={{ style: { textAlign: 'center' } }}
//                   style={{ width: '50px', marginLeft: '10px', marginRight: '10px' }}
//                 />
//                 <IconButton
//                   onClick={() => handleQuantityChange('increment')}
//                   style={{ backgroundColor: '#AAB396', color: '#fff' }}
//                 >
//                   +
//                 </IconButton>
//               </Box>
  
//               {/* Add to Cart */}
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: '#f76b1f',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   borderRadius: '20px',
//                 }}
//               >
//                 Add to Cart
//               </Button>
  
//               <Typography variant="body2" color="textSecondary" marginY="10px">
//                 {product.peopleWatching} people are watching right now!
//               </Typography>
//             </Box>
//           </Box>
  
//           {/* Description */}
//           <Box width="100%" marginTop="20px">
//             <Typography variant="h5" color="#f36d25">
//               Description
//             </Typography>
//             <Typography variant="body1" marginTop="10px" color="#555">
//               {product.description}
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     );
//   };

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import { ShoppingCart, LocalShipping } from '@mui/icons-material'
import { Button, Container, Box, Typography, Grid, IconButton, TextField, Rating } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ImageCarousel from './ImageCarousel'; // Assuming ImageCarousel is in the same directory

// Button component using Material-UI
const CustomButton = ({ variant, children, ...props }) => {
  const styles = {
    default: {
      backgroundColor: '#138808',
      color: '#fff',
      width:'50%',
      '&:hover': {
        backgroundColor: '#0F6606'
      }
    },
    outline: {
      width:'50%',
      backgroundColor: 'transparent',
      color: '#FF9933',
      border: '1px solid #FF9933',
      '&:hover': {
        backgroundColor: '#FF9933',
        color: '#fff'
      }
    }
  }

  return (
    <Button
      variant={variant === 'outline' ? 'outlined' : 'contained'}
      sx={variant === 'outline' ? styles.outline : styles.default}
      {...props}
    >
      {children}
    </Button>
  )
}

export default function ProductDetails() {
  // Placeholder product data
  const product = {
    id: 1,
    name: "Authentic Madras Sambar Mix",
    price: 180,
    images: [
      "https://via.placeholder.com/400", 
      "https://via.placeholder.com/400?text=2", 
      "https://via.placeholder.com/400?text=3"
    ],
    rating: 4.8,
    weight: "200g",
    origin: "Chennai, Tamil Nadu"
  }
  const navigate = useNavigate(); // Initialize useNavigate
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleQuantityChange = (operation) => {
    if (operation === 'increment') {
      setQuantity(quantity + 1);
    } else if (operation === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };
  
  const handleReviewSubmit = () => {
    if (userReview && userRating) {
      const newReview = {
        review: userReview,
        rating: userRating
      };
      setReviews([...reviews, newReview]);
      setUserReview('');
      setUserRating(0);
    }
  };

  return (
    <Container maxWidth="" style={{ backgroundColor: '#FFF5E6', padding: '40px', borderRadius: '8px' }}>
      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={4}>
          <ImageCarousel images={product.images} />
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={8}>
          <Typography variant="h3" style={{ color: '#B22222', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '16px' }}>
            {product.name}
          </Typography>
          <Box display="flex" alignItems="center" marginBottom="16px">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < product.rating ? '#FF9933' : '#ccc', fontSize: '24px' }}>
                ★
              </span>
            ))}
            <Typography variant="body2" style={{ marginLeft: '8px', color: 'gray' }}>
              {product.rating} out of 5
            </Typography>
          </Box>
          <Typography variant="h4" style={{ color: '#B22222', marginBottom: '16px' }}>
            ₹{product.price}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Experience the authentic taste of South Indian cuisine with our {product.name}. 
            Crafted with care using traditional recipes, this mix brings the rich, aromatic flavors of Madras to your kitchen.
          </Typography>

          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '8px' }}>
            <strong>Weight:</strong> {product.weight}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px' }}>
            <strong>Origin:</strong> {product.origin}
          </Typography>

          <Box marginBottom="16px" style={{ backgroundColor: '#FFF5E6', padding: '16px', border: '1px solid #FF9933', borderRadius: '8px' }}>
            <Typography variant="h6" style={{ color: '#B22222', marginBottom: '8px' }}>
              Why Choose Our Sambar Mix?
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'gray' }}>
              <li>Authentic Madras recipe</li>
              <li>No artificial preservatives</li>
              <li>Rich in protein and fiber</li>
              <li>Perfectly balanced spices</li>
            </ul>
          </Box>

          {/* Quantity Button */}
          <Box display="flex" alignItems="center" marginBottom="16px">
            <IconButton onClick={() => handleQuantityChange('decrement')}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1" style={{ margin: '0 8px' }}>
              {quantity}
            </Typography>
            <IconButton onClick={() => handleQuantityChange('increment')}>
              <AddIcon />
            </IconButton>
          </Box>

          {/* Buttons */}
          <Box display="flex" flexDirection="column" gap="16px">
          <CustomButton onClick={handleAddToCart}>
              <ShoppingCart /> Add to Cart
            </CustomButton>
            <CustomButton variant="outline" >Buy Now</CustomButton>
            <Typography variant="body2" color="textSecondary" >
              <LocalShipping  /> Free delivery on orders above ₹500
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Review Section */}
      <Box marginTop="40px">
        <Typography variant="h5" style={{ color: '#B22222', marginBottom: '16px' }}>
          Leave a Review
        </Typography>
        <Box display="flex" flexDirection="column" gap="16px">
          <Rating
            value={userRating}
            onChange={(event, newValue) => {
              setUserRating(newValue);
            }}
          />
          <TextField
            label="Write your review"
            multiline
            rows={4}
            variant="outlined"
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            fullWidth
          />
          <CustomButton onClick={handleReviewSubmit}>Submit Review</CustomButton>
        </Box>
        {/* Display Reviews */}
        <Box marginTop="20px">
          <Typography variant="h6" style={{ color: '#B22222', marginBottom: '8px' }}>
            User Reviews
          </Typography>
          {reviews.length === 0 ? (
            <Typography variant="body2" color="textSecondary">No reviews yet.</Typography>
          ) : (
            reviews.map((review, index) => (
              <Box key={index} marginBottom="10px" style={{ padding: '10px', border: '1px solid #FF9933', borderRadius: '4px' }}>
                <Rating value={review.rating} readOnly />
                <Typography variant="body2">{review.review}</Typography>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Container>
  )
}
