import React from 'react'
import {useParams,Link } from "react-router-dom";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Button, Icon, useToast } from '@chakra-ui/react'
import { storeData } from '../utils/localStorage';
import "./Clothes.css"

import {MdAddShoppingCart } from 'react-icons/md'

import axios from 'axios';
const  GardensSingle = () => {
  const toast=useToast()
    const {id}=useParams()
    console.log(id)
    const[item,setData]=React.useState({});
    React.useEffect(()=>{
      axios.get(`https://stock-server.onrender.com/lamps/${id}`)
      .then((res)=>{setData(res.data)})
      .catch((error)=>console.log(error))
    })

 
const handleCart=()=>{
  storeData("Cart",item)
  toast({
    title: 'Added',
    status: 'success',
    duration: 3000,
    isClosable: true,
  })

}
    return (
      <div className='Single'>
         <div>
          <img src={item.image} alt="Cover Pic" />
        </div>
        <div>
        <div><h1> {item.name}</h1></div>
        <div> <h2> ${item.price}</h2></div> 
        <div className='star'>
        { item.count==2 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
                    { item.count==3 && <div style={{display:"flex",marginLeft:"10px"}}><img  src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
                    { item.count==4 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
                    { item.count==5 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
        </div>
        <div className='shop'><h3> <CheckCircleIcon/>Free Shipping</h3></div>

        <div className='btn'>
        <Link to="/gardens"><Button bg="grey">Go Back</Button></Link> 
          <Button onClick={()=>handleCart(item.id)} ><Icon as={MdAddShoppingCart} mr="10px" />  Add to Cart</Button>
        </div>
        </div>
      </div>
    );
  };


export default GardensSingle
