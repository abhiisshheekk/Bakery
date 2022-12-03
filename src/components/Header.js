import React from 'react';
import { Container, Button, Navbar as NavBar } from 'react-bootstrap';
import './Header.css';
import punkLogo from '../assets/header/logo.jpg';
import searchLogo from '../assets/header/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCart } from '../Utility/ShoppingCart';

library.add(fas);

const Header = () => {
    const {
        getTotalItems,
        openCart
    } = useShoppingCart()
    const quantity = getTotalItems();
    return (
        <Container>
            <div className='header'>
                <div className='logoContainer'>
                    <img src={punkLogo} alt='punkLogo' className='punkLogo' />
                </div>

                <div className='searchBar'>
                    <div className='searchLogoContainer'>
                        <img src={searchLogo} alt='searchLogo' />
                    </div>
                    <input className='searchInput' placeholder='Collection or Item...' />
                </div>

                <Button onClick={openCart} variant='outline-primary'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" transform="grow-8" />
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center cart-count">
                        {quantity}
                    </div>
                </Button>

                <div className='loginButton'>LOG IN</div>
            </div>
        </Container>
    );
};

export default Header;
