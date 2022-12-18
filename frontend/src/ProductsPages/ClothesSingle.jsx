import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Center, Circle, Divider, Flex, HStack, Image,Icon, Spacer, Spinner, Stack, Text, VStack, Wrap,useToast } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import {MdAddShoppingCart } from 'react-icons/md';
import { storeData } from "../utils/localStorage";
import axios from 'axios';
const ClothesSingle = () => {
      
 
 const [data, setData] = useState({})
const [image,setImage]=useState()
  
const { id } = useParams()
const toast=useToast()

  React.useEffect(()=>{
    axios.get(`https://anthropologie-server-production.up.railway.app/new_clothing/${id}`)
    .then((res)=>{setData(res.data)
    console.log(res.data)})
    .catch((error)=>console.log(error))
  },[])
 



  const AddToCart=()=>{
  
     fetch("https://ill-ray-cape.cyclic.app/todo/add",{
            method:"POST",
           body:JSON.stringify(data),
           headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("psctoken")}`

        }})
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((er)=>console.log(er))
      toast({
          title: 'Added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        console.log(data)
      }
  

 
  return (
    <Wrap spacing={10}  justify="center" marginTop="60px"  >

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

        <Text  fontSize="2xl" color="gray.500" >{data.title}</Text>
        <div style={{display:"flex",marginTop:"-5px"}} >
        <Badge  fontSize="18px" variant="outline" width="60px" height="35px" mt="10px" colorScheme="teal">{"4.4  ⭐"}</Badge>

        <HStack alignContent="center">
        <Text fontWeight="bold" fontSize="4xl" ml="5px" >${data.price}</Text>
        <Text  as="s" marginLeft={4} fontSize="xl" >${data.price-15}</Text>
       
        </HStack>
        </div>
         <h2 style={{ marginTop:"0px",fontWeight:"600"}}>inclusive of all taxes</h2>
        <Divider />
      
        <Badge  fontSize="xl" variant="subtle" colorScheme="teal"> ${data.price - 50} for tribe members only </Badge>
        
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

       <div style={{display:"flex"}}>
        <Link to="/cloth">  <Button  colorScheme='teal' variant='outline' padding="6px" >GO BACK</Button>   </Link>
                 <Button   onClick={()=>AddToCart(data.id)} ml="10px" w="230px" padding="6px"   colorScheme='yellow' ><Icon as={MdAddShoppingCart} mr="10px" />ADD TO BASKET</Button>
                 </div>




        

       </VStack>
       
      
    </Wrap>
  )
}


export default ClothesSingle