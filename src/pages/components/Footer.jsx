import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div style={{ width: '100%', height: '350px', }} className='d-flex justify-content-center align-items-center flex-column '>
            <div className='footer d-flex justify-content-evenly align-items-center w-100 bg-warning'>
                <div className='website text-dark' style={{ width: '400px' }}>
                    <h3><i class="fa-solid fa-cart-shopping me-2 " style={{color:'black'}}></i>{' '}e-Cart
                    </h3>
                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus harum provident perferendis doloremque nostrum aliquid ea veritatis assumenda iste exercitationem, numquam aliquam sequi expedita omnis nesciunt, ipsam, vel id!</p>
                </div>
                <div className='links d-flex flex-column mb-5'>
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                    <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>WishList</Link>
                    <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link>



                </div>
                <div className='guides d-flex flex-column mb-5'>
                    <h4>Guides</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>React</Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'black' }}>React Bootstrap</Link>
                    <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'black' }}>Bootswatch</Link>
                </div>
                <div className='contact ' style={{marginBottom:'3.5rem'}}>
                    <h4 className='mb-3 mt-3'>Contact Us</h4>
                    <div className='d-flex mb-4 '>
                        <input type="text" className='form-control' placeholder='enter your email id' />
                        <button type="button" class="btn btn-danger ms-2">Suscribe</button>                </div>
                    <div className='icons d-flex justify-content-evenly  mt-2 '>
                        <Link to={'https://instagram.com/hafish__10?igshid=OGQ5ZDc2ODk2ZA=='} style={{ textDecoration: 'none', color: 'black' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link to={''} style={{ textDecoration: 'none', color: 'black' }}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
                        <Link to={''} style={{ textDecoration: 'none', color: 'black' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                        <Link to={''} style={{ textDecoration: 'none', color: 'black' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>

                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center column text-dark' style={{marginTop:'-3rem'}}>
                <p>copyright  2023 media player.Built with react.</p>
            </div>


        </div>
    )
}

export default Footer