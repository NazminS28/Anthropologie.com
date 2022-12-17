import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Center, Circle, Divider, Flex, HStack, Image,Icon, Spacer, Spinner, Stack, Text, VStack, Wrap,useToast } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import {MdAddShoppingCart } from 'react-icons/md';
import { storeData } from "../utils/localStorage";
import axios from 'axios';
const SingleProductPage = () => {
      
 
 const [data, setData] = useState({})
const [image,setImage]=useState()
  
const { id } = useParams()
const toast=useToast()

  React.useEffect(()=>{
    axios.get(`https://anthropologie-server-production.up.railway.app/new_clothing/${id}`)
    .then((res)=>{setData(res.data)})
    .catch((error)=>console.log(error))
  },[])
 
  const AddToCart=()=>{
    storeData("Cart",data)
      toast({
          title: 'Added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
  }

 
  return (
    <Wrap spacing={10}  justify="center"  >

        <HStack spacing={5} > 
         
            <VStack padding={3} >

             <ChevronDownIcon boxSize="30px" color="gray.500"  cursor="pointer" />
           
                {data.otherimg?.map((colors,i)=> (

                  <Image borderRadius={5} alt="colorsimg"   width="70px"
                  objectFit='cover' src={data.otherimg[colors,i]}
                  onClick={()=>setImage(data.otherimg[colors,i])}   cursor="pointer" />

              ) )}
            
              <ChevronUpIcon boxSize="30px" color="gray.500" cursor="pointer" />  
            </VStack>

            <Image borderRadius={15} src={image?image:data.image} w="370px" minW="200px" />
            
        </HStack>


        <VStack width={550} align="revert-layer" spacing={5} marginTop={50}  >

        <Text fontSize="30" fontWeight="bold" marginTop={50} color="gray.500"  ></Text>
        <Text mt="-20px" fontSize="2xl" color="gray.500" >{data.title}</Text>
        
        <Badge mt="-20px" fontSize="18px" variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>

        <HStack alignContent="center">
        <Text mt="-15px" fontWeight="bold" fontSize="4xl" >${data.price}</Text>
       
        <Text mt="-15px" as="s" marginLeft={4} fontSize="xl" >₹{data.price-15}</Text>
        </HStack>
         <Text >inclusive of all taxes</Text>
        <Divider />
        <Badge  mt="-30px" fontSize="xl" variant="subtle" colorScheme="teal"> ₹{data.price - 50} for tribe members only </Badge>
        
        <Text>TriBe members get an extra discount of ₹20 and FREE shipping.Learn more</Text>

        <Divider />

        <Text fontWeight="extrabold">SELECT SIZE</Text>
          
          <HStack spacing={5}>
          <Center w='50px' h='50px' fontSize="xl" border="1px solid" color='black'>
            S
          </Center>
          <Center w='50px' h='50px' fontSize="xl" border="1px solid" color='black'>
            M
          </Center>
          <Center w='50px' h='50px' fontSize="xl" border="1px solid" color='black'>
            L
          </Center>
          <Center w='50px' h='50px' fontSize="xl" bg='tomato' color='white'>
            XL
          </Center>
          <Center w='50px' h='50px' fontSize="xl" border="1px solid" color='black'>
            2XL
          </Center>
          <Center w='50px' h='50px' fontSize="xl" border="1px solid" color='black'>
            3XL
          </Center>
         
          </HStack>

          <Text>Garment:

Chest (in Inch):

44.0

Front Length (in Inch):

30.0

Sleeve Length (in Inch):

25.5</Text>
 
          <Divider />

        <HStack w="full" mt="-30px" > 
        <Link to="/cloth">  <Button  mt="25px" color="white" bg="grey">GO BACK</Button>   </Link>
                 <Button onClick={()=>AddToCart(data.id)} ml="10px" w="250px" mt="25px" color="white" bg="grey" ><Icon as={MdAddShoppingCart} mr="10px" />ADD TO BASKET</Button>




        </HStack>

        

       </VStack>
       
      
    </Wrap>
  )
}


export default SingleProductPage