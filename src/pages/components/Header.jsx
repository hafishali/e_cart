import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import {  useSelector } from 'react-redux';

function Header() {
    const wishlist=useSelector((state)=>state.wishlistReducer)
    console.log(wishlist);

    const cart=useSelector((state)=>state.cartReducer)
    console.log(cart);
    

  return (
    <Navbar expand="lg" className="bg-warning fixed-top">
    <Container>
      <Navbar.Brand className='fs-2 '><Link style={{textDecoration:'none',color:'black'}} to={'/'}><i class="fa-solid fa-bounce fa-cart-shopping me-2 " style={{color:'black'}}></i>{' '}e-Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link  className='fs-5 btn border border-danger rounded  ' ><Link style={{textDecoration:'none',color:'black'}} to={'/wishlist'}><i class="fa-solid fa-heart fa-shake me-1" style={{color:'red'}}></i>Wishlist<Badge className=' ms-1 rounded' bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='fs-5 ms-3 btn border border-danger rounded' ><Link style={{textDecoration:'none',color:'black'}} to={'/cart'}><i class="fa-solid fa-fade  fa-cart-shopping me-2 " style={{color:'black'}}></i>Cart<Badge className=' ms-1 rounded' bg="secondary">{cart.length}</Badge></Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header