import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFecth from './hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistslice';
import { addTocart } from '../redux/slices/cartslice';


function Home() {
  
const data=useFecth('https://dummyjson.com/products')
console.log(data);

const dispatch=useDispatch()

  return (
    <Row className='ms-5 me-3' style={{marginTop:'150px'}}  >
     {
      data?.length>0?
      data.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3} >
      
        <Card className='rounded mt-2' style={{ width: '18rem',boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.45)' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>${item.price}</p>

        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger btn rounded "><i class="fa-solid fa-heart " style={{color:'black'}}></i></Button>
          <Button onClick={()=>dispatch(addTocart(item))} variant="outline-success btn rounded "><i class="fa-solid fa-cart-plus"  style={{color:'black'}}></i></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>))
      
      : <p>nothing to display</p>
      }

    </Row>
  )
}

export default Home