import "./Clothes.css"
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import {useParams,Link } from "react-router-dom";
import {MdAddShoppingCart } from 'react-icons/md';
import { Button,useToast,Icon } from '@chakra-ui/react';
const ClothesSingle = () => {
    const [signleCloth,setSingleCloth]=useState({})
    const {id}=useParams()
    const toast=useToast()
    useEffect(()=>{
        axios.get(`https://anthropologie-server-production.up.railway.app/new_clothing/${id}`)
        .then((res)=>setSingleCloth(res.data))
        .catch((er)=>console.log(er))

    },[])

    const AddToCart=()=>{
        toast({
            title: 'Added',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }
   
  return (
    <div className='singleCloth'>
        <div style={{fontSize:"20px",marginTop:"30px"}}>
        {
               signleCloth.otherimg?.map((colors,i)=>(
                   <img style={{marginTop:"5px"}} src={signleCloth.otherimg[colors,i]} alt="colorsimg"></img>
                ))

            }
        </div>
        <div className='img'><img width={signleCloth.id===1?"80%":"100%"}  src={signleCloth.image}  alt="" /></div>
            <div className='details'>
                <h1>{signleCloth.title}</h1>
             <a href="https://www.anthropologie.com/brands/by-anthropologie" target="_blank"> <p>By Anthropologie</p></a>
                {signleCloth.id%2==0?<div style={{ display: "flex",marginTop:"15px" }}> 
                          <img  width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                          <img width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> 
                           <img  width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                           <img  width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                           </div>:<div style={{ display: "flex", margintop: "10px" }}>
                           <img   width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                            <img  width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />  
                            <img  width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                            <img   width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />  
                            <img  width="3%" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                       </div>}
                <h2>${signleCloth.price}</h2>
                <h4>Or 4 interest-free installments of $45.00 with<span style={{color:"black",fontWeight:"800"}}> Klarna</span> or <span style={{color:"black",fontWeight:"800"}}>Afterpay</span> </h4>
                 
                 <div className='btn'>
                 <h6>size*</h6>
                    <Button borderRadius="50%">XXS</Button>
                    <Button borderRadius="50%">XS</Button>
                    <Button borderRadius="50%">S</Button>
                    <Button borderRadius="50%">M</Button>
                    <Button borderRadius="50%">L</Button>
                    <Button borderRadius="50%">XL</Button>

                 </div>
                 <h7>Qty*</h7>
                 <div style={{display:"flex"}}>
                  
                  <select style={{border:"1px solid black"}} name="quantity-select" id="qty-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                     <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="more">more</option>
                  </select> 
                 </div>

                 <div>
               <Link>  <Button  mt="25px" color="white" bg="grey">GO BACK</Button>   </Link>
                 <Button onClick={AddToCart} ml="10px" w="250px" mt="25px" color="white" bg="grey" ><Icon as={MdAddShoppingCart} mr="10px" />ADD TO BASKET</Button>
                 </div>
            </div>
        <div className='moreCloth'>
        {
               signleCloth.otherimg?.map((colors,i)=>(
                   <img style={{marginTop:"5px"}} src={signleCloth.otherimg[colors,i]} alt="colorsimg"></img>
                ))

            }
        </div>
    </div>
  )
}

export default ClothesSingle



