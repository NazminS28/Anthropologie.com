import React from 'react'
import { Box, Grid, GridItem,Text,Button, Stack, Select, Heading, Link,Image } from '@chakra-ui/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const CartPage = () => {
  return (
    <Box h={'auto'}>
    <Grid
    h='auto'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(2, 1fr)'
    columnGap={'50px'}
    rowGap="10px"
    p="0px 60px"
  >
    <GridItem >
       <Box display={'flex'} mb="20px" justifyContent={'space-between'}>
        <Heading>Basket</Heading>
        <Box mb='20px' m={'20px 0px'}>
          <Link textDecoration={'underline'} fontSize="13px" color={'#167A92'} >Delivery Options</Link>
        </Box>
       </Box>
       <Box display={'flex'} width={'60vw'}  justifyContent={'space-between'} mt="20px">
        <Box display={'flex'} margin={'0px 30px'}>
            <Text margin={'3px 30px'}>Item</Text>
        </Box>
        <Box display={'flex'} >
            <Text margin={'3px 30px'}>Item</Text>
            <Text margin={'3px 30px'}>Item</Text>
            <Text margin={'3px 30px'}>Item</Text>
            </Box>
       </Box>
       <Box>
         <Box display={'flex'} gap={'20px'} marginTop={'30px'} alignItems="start"  >
           <img src="https://images.urbndata.com/is/image/Anthropologie/45447376AA_045_b?fit=constrain&fmt=webp&hei=195&qlt=80&wid=130" alt="" /> 
           <Box  w='30%'>
            <Text fontSize={'14px'}>Lucia Bath mat</Text>
            <Text fontSize={'14px'}>Style <Text as={'span'} color='gray'>#45447376AA</Text></Text>
            <Text fontSize={'14px'} >Color: <Text as={'span'} color='gray'>Mint</Text></Text>
            <Text fontSize={'14px'}>Size <Text as={'span'} color='gray'>L</Text></Text>
            <Link  textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Button</Link>
            <hr />
            <Box mt={'30px'} display={'flex'} alignItems='center' >
                Add Gift wrap
           </Box>
           </Box>
           <Box ml={'80px'}>
            <Box  display={'flex'} gap={'50px'} w={'auto'} h={'160px'}>
                <Text marginRight={'10px'}>$78:00</Text>
                <Box>
                <Stack spacing={3}>
  <select style={{'height':"45px",width:"50px"}}>
    <option value='option1'>2</option>
  <option value='option2'>3</option>
  <option value='option3'>4</option>
    </select>
</Stack>
</Box>
<Text>$156</Text>
            </Box>
            <Box >
              <Link textDecoration={'underline'} fontSize="13px" color={'#167A92'} mr={'15px'}>Remove</Link>
              <Link  ml={'15px'} fontSize="13px" color={'#167A92'} textDecoration={'underline'}>Save for letter</Link>
            </Box>
           </Box>
         
       </Box>
       </Box>
    </GridItem>
    <GridItem>
        <Box display={'flex'} justifyContent={'space-between'}>
            <Heading>Order Summary</Heading>
            <Link mt={'27px'} >8003092500</Link>
        </Box>
        <Box p={'20px'}>
            <Box display={'flex'} justifyContent={'space-between'}>
            <Text fontSize={'13px'} m='0px 0px 5px'>Subtotal</Text>
            <Text m='0px 0px 5px' fontSize={'13px'}>$168.60</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
            <Text  fontSize={'13px'} m='0px 0px 5px'>Subtotal</Text>
            <Text fontSize={'13px'} m='0px 0px 5px'>$168.60</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
            <Text  fontSize={'13px'} m='0px 0px 5px'>Subtotal</Text>
            <Text fontSize={'13px'} m='0px 0px 5px'>$168.60</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
            <Text  fontSize={'13px'} m='0px 0px 5px'>Subtotal</Text>
            <Text fontSize={'13px'} m='0px 0px 5px'>$168.60</Text>
            </Box>
           <br/>
            <Box >
            <Text  fontSize={'13px'} m='0px 0px 5px'>
            Or 4 interest-free installments of $42.15
            </Text>
            <Text fontSize={'13px'} m='0px 0px 5px'>
            with ,
            <Image w={'38px'} src={'https://www.anthropologie.com/static/v3/images/klarna-logo-ea32669636986d0317f95f0c04fdcb6d.svg'}></Image>
           , or ,<Image  w={'60px'} src={'https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg'}></Image>
            </Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} flexDirection="column">
                <Button p={'10px 20px'} background="#4B5666" color={'white'} border="none" width={'100%'}  fontSize={'1.3rem'}>Proceed to <br/>
                    Checkout
                </Button>
                <br />
                <Button p={'10px 20px'}  color={'white'} border="none" size={'30%'}  fontSize={'1.3rem'} display="flex" justifyContent={'center'}>
                    <Image src='data:image/png;base64,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' width={'100%'} h="auto"></Image>
                </Button>
            </Box>
        </Box>
    </GridItem>
    <GridItem>
    <Box>
         <Box display={'flex'} gap={'20px'} marginTop={'5px'} alignItems="start"  >
           <img src="https://images.urbndata.com/is/image/Anthropologie/69532158_060_b?fit=constrain&fmt=webp&hei=195&qlt=80&wid=130" alt="" /> 
           <Box  w='30%'>
            <Text fontSize={'14px'}>Traveling Bunny Ornament</Text>
            <Text fontSize={'14px'}>Style <Text as={'span'} color='gray'>#69532158</Text></Text>
            <Text fontSize={'14px'} >Color: <Text as={'span'} color='gray'>London</Text></Text>
            <Text fontSize={'14px'}>Size <Text as={'span'} color='gray'>One Size</Text></Text>
            <Link textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Button</Link>
            <hr />
            <Box mt={'30px'} display={'flex'} alignItems='center' >
                Add Gift wrap
           </Box>
           </Box>
           <Box ml={'80px'}>
            <Box display={'flex'} gap={'50px'} w={'auto'} h={'170px'}>
                <Text marginRight={'10px'}>$78:00</Text>
                <Box>
                <Stack spacing={3}>
  <select style={{'height':"45px",width:"50px"}}>
    <option value='option1'>2</option>
  <option value='option2'>3</option>
  <option value='option3'>4</option>
    </select>
</Stack>
</Box>
<Text>$156</Text>
            </Box>
            <Box >
              <Link mr={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Remove</Link>
              <Link  ml={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'}>Save for letter</Link>
            </Box>
           </Box>
         
       </Box>
       </Box>
    </GridItem>
  </Grid>
  <Box m={'0 60px'} paddingBottom={'20px'}>
    <Heading fontSize={'18px'}>You may also like</Heading>
    <hr />
  </Box>
  <Box class="swiper" m={'0 60px'} w={'65%'}>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={'19%'}>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/54684998_011_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
    </Swiper>
  

</Box>
  </Box>
  )
}

export default CartPage