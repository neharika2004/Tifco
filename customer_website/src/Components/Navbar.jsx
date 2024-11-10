import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Dropdown arrow icon
import '../Style/Navbar.css'; // Custom CSS for scrolling header
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State for dropdown menus
  const [southIndianAnchorEl, setSouthIndianAnchorEl] = useState(null);
  const [northIndianAnchorEl, setNorthIndianAnchorEl] = useState(null);

  // Handlers to open and close dropdown menus
  const handleSouthIndianClick = (event) => {
    setSouthIndianAnchorEl(event.currentTarget);
  };

  const handleNorthIndianClick = (event) => {
    setNorthIndianAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSouthIndianAnchorEl(null);
    setNorthIndianAnchorEl(null);
  };

  return (
    <div>
      {/* Offer Header */}
      <div className="offer-header">
        <Typography variant="body2" className="offer-text">
          Get Extra 10% Off on Your 1st Order | Use Code: <span className="offer-code">WELCOME</span>
        </Typography>
      </div>

      {/* Main Navbar */}
      <AppBar position="sticky" style={{ backgroundColor: '#ffffff', color: '#333', padding: '10px', zIndex: 1000 }}>
        <Toolbar>
          {/* Logo */}
          <Link to="/">
           <IconButton edge="start"  aria-label="menu" sx={{ mr: 2 }}>
            <img src="/path-to-your-logo.png" alt="Logo" style={{ height: '40px' }} />
           </IconButton>
          </Link>

          {/* Navbar Links */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex',gap:4 }}>
            <Button color="inherit" className="nav-link">Home</Button>
            <Button color="inherit" onClick={handleSouthIndianClick} className="nav-link">
              South Indian
              <ArrowDropDownIcon style={{ marginLeft: '4px' }} /> {/* Dropdown Arrow */}
            </Button>
            <Button color="inherit" onClick={handleNorthIndianClick} className="nav-link">
              North Indian
              <ArrowDropDownIcon style={{ marginLeft: '4px' }} /> {/* Dropdown Arrow */}
            </Button>
            <Button color="inherit" className="nav-link">Best Sellers</Button>
            <Button color="inherit" className="nav-link">Offers Bliss</Button>
          </Typography>

          {/* Icons Section */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menus for South Indian and North Indian */}
      <Menu
        anchorEl={southIndianAnchorEl}
        open={Boolean(southIndianAnchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className="dropdown-item">Idli</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Dosa</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Vada</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Sambar</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Upma</MenuItem>
        <Typography
          component="a"
          href="/south-indian" // Link to a page or category
          onClick={handleClose}
          style={{ color: '#1976d2', margin: '0 15px', cursor: 'pointer', textDecoration: 'underline' }}
        >
          View More...
        </Typography>
      </Menu>

      <Menu
        anchorEl={northIndianAnchorEl}
        open={Boolean(northIndianAnchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className="dropdown-item">Butter Chicken</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Paneer Tikka</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Biryani</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Naan</MenuItem>
        <MenuItem onClick={handleClose} className="dropdown-item">Chole Bhature</MenuItem>
        <Typography
          component="a"
          href="/north-indian"
          onClick={handleClose}
          style={{ color: '#1976d2', margin: '0 15px', cursor: 'pointer', textDecoration: 'underline' }}
        >
          View More...
        </Typography>
      </Menu>
    </div>
  );
};

export default Navbar;
