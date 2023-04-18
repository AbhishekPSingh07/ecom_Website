import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='Container'>
      <div className= "wrapper">
        <div className='left'>
          <div className='language'>EN</div>
          <div className='search-container'>
            <input className='search-input'></input>
            <SearchIcon/>
          </div>
        </div>
        <div className='centre'>
          <h1 className='logo'>ABHI.</h1>
          
        </div>
        <div className='right'>
          <div className='nav_menu_item'>REGISTER</div>
          <div className='nav_menu_item'>SIGN IN</div>
          <div className='nav_menu_item'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
