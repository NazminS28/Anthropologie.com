import { Box, Grid, GridItem ,Text,Stack,Link,Image,Toast, useToast} from '@chakra-ui/react'
import React ,{useState} from 'react'
import { useEffect } from 'react';

const Cart_single_Item = ({elem,Update}) => {
    const [count,Setcount] = useState(1);
    const [fullPrice,SetfullPrice] = useState(elem.price);
    const [onedata,setonedata]=useState([]);
    const toast = useToast();
    function select(val) {
        Setcount(val)
        console.log(count);
        console.log(fullPrice);
      }
      const handleSubmit=(todoID)=>{
        fetch(`https://ill-ray-cape.cyclic.app/todo/delete/${todoID}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("psctoken")}`
            }
        })
      }
    

      
      const handleUpdate=(todoID,val)=>{

        const data ={
           name:elem.title,
           image:elem.image,
           title:elem.title,
           price:Number(elem.price),
           quantity:Number(val)
        }
        console.log(data,typeof(data.price),typeof(data.quantity))
         fetch(`https://ill-ray-cape.cyclic.app/todo/update/${todoID}`,{
          method:"PATCH",
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
      }
  return (
    <Box display={'flex'} key={elem._id} mb={'20px'}>
                   <Grid h='auto'
              templateRows='auto'
              templateColumns="1.3fr 2fr 3fr"
              columnGap={'20px'}
              rowGap="20px">
                   
                    <GridItem> 
                    <Image src={elem.image} w={'100%'}></Image>
                  </GridItem>
                  <GridItem>
                    <Box>
                      <Text mb={'5px'} fontSize={'15px'}>{elem.title?elem.title:elem.name}</Text>
                      <Text  mb={'5px'} fontSize={'15px'}>Style <Text as={'span'}  color='gray'>#79422903</Text></Text>
                      <Text  mb={'5px'} fontSize={'15px'}>Color <Text as={'span'}  color='gray'>Taupe</Text></Text>
                      <Text  mb={'5px'} fontSize={'15px'}>Size <Text as={'span'} color='gray' >32</Text></Text>
                      <Link color={'#167A92'} fontSize={'15px'}>Edit</Link>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box>
                    <Box display={'flex'} justifyContent={'space-between'} m={'0px 10px'}  h={'150px'}>
                     <Text>${elem.price}</Text>
                     <Stack spacing={3} >
          <select  onChange={(e)=>handleUpdate(elem._id,e.target.value)}>
          <option value='1'>1</option>
            <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
            </select>
          </Stack>
                     <Text>{elem.quantity?elem.price*elem.quantity:elem.price}</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'} m={'10px'}>
                      <Link mr={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'} onClick={()=>handleSubmit(elem._id)}>Remove</Link>
                      <Link  ml={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Save for Later</Link>
                    </Box>
                    </Box>
                  </GridItem>
                   </Grid>
                  </Box>
  )
}

export default Cart_single_Item