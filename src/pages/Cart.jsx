import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptycart, removeFromcart } from '../redux/slices/cartslice';


function Cart() {
  const  cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()


  const gettotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))

    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    gettotal()
  },[cartArray])

  const checkout=()=>{
    dispatch(emptycart())
    alert('Thank  you...Your order has been placed')
    navigate('/')

  }
  return (
    <div style={{marginTop:'150px'}} className='d-flex justify-content-between'>
      {cartArray?.length>0?
       <div className='col-lg-6'>
          <table class="table ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
  
      </tr>
    </thead>
    <tbody>
     {cartArray.map((item,index)=>(<tr>
        <th >{index+1}</th>
        <td>{item.title}</td>
        <td><img src={item.thumbnail} style={{height:'100px',width:'100px'}} alt="" /></td>
        <td>{item.price}</td>
        <td><Button onClick={()=>dispatch(removeFromcart(item.id))}  variant="outline-danger btn rounded "><i class="fa-solid fa-trash"  style={{color:'black'}}></i></Button>
  </td>
  
      </tr>))
      }
      
    </tbody>
  </table>
       </div>
: <div style={{height:'30vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.r6aijQ7gtefVW3pa7N_t7AHaFQ&pid=Api&P=0&h=220" alt="" />
        {/* <h4 className='fw-bold text-danger'>Nothing on Cart</h4> */}
        <Link className='mt-3' style={{textDecoration:'none'}} to={'/'}><button type="button" class="btn btn-primary rounded">Back to Home</button></Link>
        </div>
}
    <div>
    <div class="card me-5 d-flex justify-content-center rounded " style={{width:'18rem'}}>
  <div class="card-body">
    <h2 class="card-title text-primary">Cart Summary</h2>
    <h6>total number of products:<span className='text-success fw-bold fs-3'>{cartArray.length}</span></h6>
    <h6>total  price:<span className='text-success fw-bold fs-3'> ${total}</span></h6>
    <button onClick={checkout}  type="button" class="btn btn-success rounded w-50">Check out</button>
    
    
  </div>
</div>
    </div>

    </div>
  )
}

export default Cart