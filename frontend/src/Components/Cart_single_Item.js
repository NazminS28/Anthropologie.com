import { Box, Grid, GridItem ,Text,Stack,Link,Image} from '@chakra-ui/react'
import React ,{useState} from 'react'
import { useEffect } from 'react';

const Cart_single_Item = ({elem,Update}) => {
    const [count,Setcount] = useState(2);
    const [fullPrice,SetfullPrice] = useState(elem.price);
    function select(val) {
        Setcount(val)
        console.log(count);
        console.log(fullPrice);
      }
      useEffect(()=>{
        Update(fullPrice);
        SetfullPrice(Number(count)*Number(elem.price));
      },[fullPrice,count])
  return (
    <Box display={'flex'}>
                   <Grid h='auto'
              templateRows='auto'
              templateColumns="1.3fr 2fr 3fr"
              columnGap={'20px'}
              rowGap="10px">
                   
                    <GridItem> 
                    <Image src={elem.image} w={'100%'}></Image>
                  </GridItem>
                  <GridItem>
                    <Box>
                      <Text mb={'5px'} fontSize={'15px'}>{elem.title}</Text>
                      <Text  mb={'5px'} fontSize={'15px'}>Style <Text as={'span'}  color='gray'>#79422903</Text></Text>
                      <Text  mb={'5px'} fontSize={'15px'}>Style <Text as={'span'}  color='gray'>#79422903</Text></Text>
                      <Text  mb={'5px'} fontSize={'15px'}>Style <Text as={'span'} color='gray' >#79422903</Text></Text>
                      <Link color={'#167A92'} fontSize={'15px'}>Edit</Link>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box>
                    <Box display={'flex'} justifyContent={'space-between'} m={'0px 10px'}  h={'150px'}>
                     <Text>{elem.price}</Text>
                     <Stack spacing={3} >
          <select style={{'height':"45px",width:"50px"}} onChange={(e)=>select(e.target.value)}>
            <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
            </select>
          </Stack>
                     <Text>{elem.price*count}</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'} m={'10px'}>
                      <Link mr={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Remove</Link>
                      <Link  ml={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Save for Later</Link>
                    </Box>
                    </Box>
                  </GridItem>
                   </Grid>
                  </Box>
  )
}

export default Cart_single_Item;