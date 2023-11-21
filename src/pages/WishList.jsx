import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removefromwishlist } from '../redux/slices/wishlistslice';
import { addTocart } from '../redux/slices/cartslice';

function WishList() {

const wishlistArray=useSelector((state)=>state.wishlistReducer)
console.log(wishlistArray);
const dispatch=useDispatch()

const handleWishlist=(item)=>{
  dispatch(addTocart(item))
  dispatch(removefromwishlist(item.id))
}

  return (
    <div>
         <Row className='ms-5 me-3' style={{marginTop:'150px'}}  >
     
    {wishlistArray?.length>0?
    wishlistArray.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3} >
      
    <Card className='rounded mt-2' style={{ width: '18rem',boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.45)' }}>
  <Card.Img variant="top" src={item.thumbnail} style={{height:'250px'}} />
  <Card.Body>
    <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
    <Card.Text>
      <p>{item.description.slice(0,40)}...</p>
      <p className='fw-bolder'>${item.price}</p>

    </Card.Text>
    <div className='d-flex justify-content-between'>
      <Button onClick={()=>dispatch(removefromwishlist(item.id))}  variant="outline-danger btn rounded "><i class="fa-solid fa-trash " style={{color:'black'}}></i></Button>
      <Button onClick={()=>handleWishlist(item)} variant="outline-success btn rounded "><i class="fa-solid fa-cart-plus"  style={{color:'black'}}></i></Button>
    </div>
  </Card.Body>
</Card>
  </Col>))
     
      : <div style={{height:'30vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.xg_qOsOqsugsL36pAe9V9gHaFj&pid=Api&P=0&h=220" alt="" />
        <h4 className='fw-bold text-danger'>Nothing on wishlist</h4>
        <Link style={{textDecoration:'none'}} to={'/'}><button type="button" class="btn btn-primary rounded">Back to Home</button></Link>
        
      </div>
       }
    </Row>
    </div>
  )
}

export default WishList