import React from 'react'
import { Box, Grid, GridItem,Text,Button, Stack, Select, Heading, Link,Image, SimpleGrid,Spinner } from '@chakra-ui/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import "./CartPage.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { loadData } from '../utils/localStorage';
import Cart_single_Item from './Cart_single_Item';


const CartPage = () => {
  const navigate=useNavigate()
  const [cartItem,setcartItem] = useState([]);
  const [full,Setfull] = useState([])
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false);
  const [sumo,setsum] = useState(1)
  const handleSubmit=(todoID)=>{
    fetch(`https://ill-ray-cape.cyclic.app/todo/delete/${todoID}`,{
    
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("psctoken")}`
        }
    })
    
    }
   
    console.log("ram")
    useEffect(()=>{
        fetch("https://ill-ray-cape.cyclic.app/todo",{
            headers:{
            "Authorization":`Bearer ${localStorage.getItem("psctoken")}`
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
            setLoading(false)
            console.log(res)
        })
        .catch((er)=>{
            console.log(er)
          setError(true)
          setLoading(false)
        })
        const getAverageAge = () => {
          let sum = 0
          for (let i = 0; i < data.length; i++) {
            sum += data[i].price*data[i].quantity;
          }
          setsum(sum);
        }
        getAverageAge()
    },[handleSubmit])
    

    
   

  function Update(value) {
    // Setfull([...full,value]);
    // console.log(full);
  }

  const handleCheckout=()=>{
    localStorage.setItem("Carts",sumo)
    navigate("/address")
  }
  return (
       <Box >
        <Box  className="main_div">
        <Box  className="maindiv_left">
        <Box display={'flex'} justifyContent={'space-between'} mb={'20px'}>
          <Heading fontSize={'20px'}  mt={'15px'}>Basket</Heading>
          <Link textDecoration={'underline'} fontSize="13px" color={'#167A92'}  mt={'15px'}>Delivery Option</Link>
        </Box>
        <Box mb={'10px'}>
         <Grid h='auto'
    templateRows='auto'
    templateColumns="1.3fr 2fr 3fr"
    columnGap={'20px'}
    rowGap="10px"
    >    
    
          <GridItem></GridItem>
          <GridItem>
            <Text>Item</Text>
            
          </GridItem>
          <GridItem>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Text>Item Price</Text>
              <Text>Quantity</Text>
              <Text>Total Price</Text>
            </Box>
          </GridItem>
         </Grid>
        </Box>
      
               {data.map((elem)=>(
                   <Cart_single_Item elem={elem} Update={Update}/>
              ))} 
             
        </Box>
        <Box  className={'top-left'}>
          <Box ml={'60px'} >
          <Box display={'flex'} justifyContent={'space-between'} >
             <Heading fontSize={'18px'} mt={'15px'}>Order Summary</Heading>
             <Link  mt={'15px'} textDecoration={'underline'} fontSize="13px" color={'#167A92'} >800.309.2500</Link>
          </Box>
          <Box m={'20px'}>
           <Box display={'flex'} justifyContent="space-between" fontSize={'13px'}>
            <Text>Subtotal</Text>
            <Text>${sumo}</Text>
           </Box>
           <Box display={'flex'} justifyContent="space-between" fontSize={'13px'}>
            <Text>Shipping</Text>
            <Text>TBD</Text>
           </Box>
           <Box display={'flex'} justifyContent="space-between"  fontSize={'13px'}>
            <Text>Estimated Tax</Text>
            <Text>$0</Text>
           </Box>
           <Box display={'flex'} justifyContent="space-between" fontSize={'15px'}>
            <Text fontWeight={'bold'} color={'black'}>Total</Text>
            <Text>${sumo}</Text>
           </Box>
           <br />
           <Box fontSize={'11px'}>
            <Text>Or 4 interest free installment of $130 with</Text>
            <Box display={'flex'}>
             <Image w={'38px'} src={'https://www.anthropologie.com/static/v3/images/klarna-logo-ea32669636986d0317f95f0c04fdcb6d.svg'}></Image>
             <Text m={'0 5px'}> or</Text>
              <Image  w={'60px'} src={'https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg'}></Image>
            </Box>
            <br/>
           </Box>

           <Box >
           <Button onClick={handleCheckout} p={'10px 20px'} background="#4B5666" color={'white'} border="none" width={'100%'}  fontSize={'1.1rem'} mb="10px">
              PROCEED TO CHECKOUT
            </Button>
            <Button p={'10px 20px'}  color={'white'} border="none" width={'100%'}  fontSize={'1.1rem'}>
              <Image w={'40%'} h="80%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA0lBMVEX///8cNmQzZpkwZJcZM2IxZJgAH1gZNGIAJl3p7vT09vjw9Pn4+fvW2uIAKF0AKF4fXpUAI1s6caYxSncTMGANLV+RrcuxxdsiP3Di6fEfX5gAJlsAIFvg4+mkudAALWItaJ9chrLR3OmpscKfqLu+xNFmdpZ/n8JFd6lQfayuv9OMqcnN0ttnkLq7zN6asMlFWYF6h6GGkqk3T3pAVHpXZoaUoLbI1OOAocXX4u5ylLoRXJpTgbElQ3QoaaUGX6BecJNygJ0AFVRPYodgb5S3vcvMwWNgAAAOrklEQVR4nO2dCXeiyBaAtYEAiggKLrT7buLui2mTTr9kMv7/v/QE2e6tAkqT6Zl5p74+J6cbw+KtW3erW3Qux+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA4notgukbTbqlrU/u5H8yjSKGj/jIfL7Rp3FEylK75uHreHcfvvfc56v0JhNpv3l9Na/an5dU/X7NR81s3g2Ooh46SJIufpiKJo2bppbXalL3vEq3lwJIGCdMExevPpU+FL7lRzHP+qktE7Bgdn6cMzNhOEFxOj3v0Yf8kTXs+T8y0DwTAqD+rn73TvCNFFpR+Xg8XpfHA85orHXPN+lcsVVvdHeNa7nSm+M5by0f78E97AVMoSn/tljV7tszfSZvE7SdPL0bUj/HJmuXrv+aX30l/9+uW8PIHT/iOyiC8vW+W/RQHnLOJzVXDezL5YGk2g5kbHP7yeuz/rLw+F3OClchbdch4/qy0mWT5CgK3h5x7wFpo9Jum5+tI7Zl8uhToQX2/gH17PXdtXr7jm9eX+/OPeiJ81Vhild5afsvjUA97CymAV3zeh8ikD+CCBaxX9w4H43H//clUSim/HZPp8+TW+xsVd86XYxfdN6n/mTj8l6qUyxPdosYsvr+8+84C30GczfReM+u03KkLTF0Z7tVTxqQ3Cc4guCfJTfrP6qRUhSVYUhMrtd4IBkrMKjtcdNaf54usR4ltg09e9e61Wqw3rrqVT9LL8m73HAM9dwTHOvLw4Bk0tnUH2JRPogDv1QjderPTm58Dllyu+/3rie4mdddChfMydbzMLpeHGJARovd38fDfRQeIzngfnbLdQbA7qzz2D0EwjK8NKZglMX0yNC6v6Mad64zJwfZMaH6IJkJCsn+KXXGywX5HzNz/fTTxDHQujMRetQ8xsaZ54pSxAgCQ9s51UqAIrZ03Q529I/2QLBQdaob04DUeH3ZnDYXRatAtkjqgFpD5KjPDYDAhIWsJTmjMkP+EbuoV2VtSnVb3TWa87nU796agmGO+EoDmDNkx4FWza1DxyIt2oeKCWhrvJJm/eKeWy7aHrinknbrZDkN+p75uAt2GSBMeTfTUimANNOHeNFTprgA1gZLNyxeZq/dyvGIbjePbScP92To/7DytKfAjjS1YbOixD4RB5Lc6Iu0HkvHhrmLptkT5aFG2l+zGMRnmjW6KPZW6oo194M20xIoyPYCYQF44PjmvCzGPwPDvLSpIIB+NWaXrLFR7GH1B8jEWwLZCOuCe+3Am5lrIvvqFipSV7lhJqkPpH/AP7jSa9PRykMLuG9QJhTnyrNXItgfjqjpQW8UjGHCb+OWAGBEYTqu3TTR+Z0/mTt91KkZ2HbG79e4BflUkFP/svKD3xNfgA1gsoBh3ndL74VCcr2pYcUKJJCprTUaHp00es4mNJ9cz3yyWgd6LUbfA9WqHiwuCOYtBXqBroT+8aQ6rnxGU0SAia04EPLpfJksAQTl5ZVCkiSZLfRQzQfJJDhKZA3vpIEA6lpHIP5ST0LlHrjCXViwsJxpcGY+0BKpH8Sp4GjWNernpHi5lz10Xce7ZqBEbAfse3GCHlM8PpDZVICqsgEaiiIMwuj8dUZ4hbuCUst7BJL7cBYV007BFIzfysg7HKdSlwwV8WN+gOOOuOlSWgX6UVVFDg51vH7AL/RcnC8ESrgJyDMWjWTDnhwQPGOvSv+iUwDLXWXUpSXPSuRc7nrndB6GbkV6RDW+w3Qu+vQSkYZD1+gIqpxr13ONRaQToHe94fg+KJjXVwHViUZQ2aF3AO6qRV36Cso3UxzRtXVJZtmvvJbnQaL8an4eF9b3aR+C6eXEMHoestwcgzr0Rp4wCJD8UaOTTnzjgX6+OV7qRzlDxbPnTqq9U57aid40BsEIP1jFuDZmiVZJGISnco6gumtyhbivlxGKvxQExr78pQV61H74MPMAYKHCT4ITAgqF7QIywzLigIPy/HPdn9rK3g4x0fHOpUz2ET2mOsyv0JHl3c48+3SHr5lv/V//zj8UTa8bMqdWEceRHfNsX1ntAyadz5L1HQjO9WxyYu8KXLl36d5jzRXBdC8fXpleYMoAPAnqO9wdKzsNkngPpsvVMOAterIYtpb2MfwsmGDbr2A0tPmoWfJTweVNdw8qrQczCueZbgyMv52Ihpi0mLqPa1MpsN2sCS2RdftAD3AaOErIPYiD0CLIIg7St2ekR0YmTaLFiCCH0RLMqyBs2oXnD+YgvVpTQevVfvyLxCyV7pUKGZu/hpFbgUsRpNe5z7gWJ2HclHeii6Ra9CUR10qLXSaS4LFXrYYGkEKqXDuGBM9BdYiiWK3a5p6jYlq7Afs+sQ0I/qF20twLQilvWicqL4n/i1iP4CqdLv93/OKz2DVqmX+tkWH2ifZARZDCjKCnNGz0HLvBIXifL2JiWVKajt0vg02gFBiVWVJiUzdL1EsguSRjLz8vqCBHopRaqkKU2xeRys6mtQgpBmwbrEPH5J1qC52WXtL/Ckt6dKT2svhrvJR7Vhlb8rSGl9x4tzw9D1aqg/xAYFH5W5vyBNeupx1fnRn1V6PbdeSq9d3xY0j5HpS0XfkIFK+/S+ydtlr2hKU1r74P/iEGhZ6F1H6AFaYICerlggP6eppPTU1UP/mys2QRJo1b8w6YCViWwHdGGHk4RkxNYWn73Y5l0TmVZ5CWM46OIDpVQbUPsVWIupsS+QC0Yfm+VjbUbP1ChyAkEzc6vHB2t/gaxXUTqnHhotO2vqi2EgBAUVuF6c7KKonb2/QOqh+VbsnGWXtb4eyemmoBkPfqIU9MYO+qLmVtEZzpVDP4qM3MX1lqDfkFEyV2TtL5CMZzhx1RolqqGcF8SRBXAn1krzAucUVCzzdYe0edRl6yqKZRATiutFym+jhQKiv4AuA8lZIlt1T8bTVEI5wTsRq3kJjDLF5y6ZPQ6Ry1AflQR7J6IELLbkDs1s2TVyKNkVRbQGgssBFATJqTwgl1FcOgmah91HKKek9ox0JmmmT7S7Suv1fUiY0XaVVD3Rdtd3u9UP2hz1OBGuV8NF0gO60XOq6RO8ctQD0ROuzkipe7/rGJU+rK2GycUUBoNsa5QoFXC/lVv2NE2z1Wp19++HE62XudBAQhd1U9lvh6eFqmlwYURuRKeVgPa5rhcnu1UkiAJuIDjbOH+p25XFbFmjLXbDqrErOlfK085q0Cxouft4gBJV5MGdcCNDEm0Utljl7dhlsSipyQOAml5EZX+IZQogC4wbM/UVuN5XTYXJLvYbZFOu4PRr6/W6c3+/ejomPiDy1oIxqw2i351SK/IqNH1r+pUxMJQ9Dz9L4zxa1bH38FsDX67H0384re0RLpI+5hCoXiBUyFIzCbKXxgyeBFTTr+vjoJm10oyiri7LxpcCNFg6WjRrApUC1S1kaG1kAhRi7FC9QGL5VgU4dY1nqKQqlFO47wWc1KNVgUm0TVZ/AQW46EuozAkkYUr8o0NqrNMlKmEanIYCUxoPF30JK4bULDgM7iTMckzAGhytv4AC6IOWv2OFBQoNa9fjtChJzhO2DNUL2NJ4KHIDL6qD1vlIuDDh/cFyI2Irlsmy5QDlXhv8pUEBDEYipTTta51yGLRS67Bs2YB90NJP/HjAw4YDcoTiYwyaYSArN1jyZNgHbeF2AajQcECKZAd6dCHK6vw6s7+ABK5rSrj2XKS7iPubKs1wPwLp+WgMv4NzcBEGmj4TBnIpW79MitdaZvYXkEBnTeSuaC030E0Ynjv4onQKyBMy7degLqOFtPPxqY0X5ZI3HtL2ihSQ6WNa+0pYRvNBq2nhgFRuCZoXd+ArfGfa7XeASz5gwmtDWPrDA5KYYYuUvqTcEQVwLEFfakORVocFnHAxEkYzrEEz/DZinmmzKWrqsx7DL64O92hPtYLcQWJpm2indoGKJJD9BTRQU5/0HMqvWJ+jEla4GIl2wzCNEw5j4QpXIliDrPz7cNFuL4bvDaIKo6BvjHPE8BoUv4ENEuN2A2IPSOVhdWw2m6vpjKjChB18UOYO4yIbLJWSPXdUiB1Ibqml21XK5LKm39oXoSUUpykdmTmUXpFOlA6xOOIWGby1DqKEFXVJw6CZsacZLU/rZOBFg7U+TR2QKvVc+sCh/gLGnX5X7H8LB6TwTaAdzuCE9iMwvulhkhz8ilC7yL1v9PIinuMXsptyqaSVCOFHTjAgMGh2GHdkov0IVbazcqVykvpZ1hbELWQsN6IZP4WeK6L9CKy9ssfEplKpNwX/NoLo+Lb2DLQf4Y3x+XIHelOuXP5oj+MxNVH9pPfzJo0b2orFuOyfuHdaMvpNYBjD/gKosFKFcTcMVKI79nc8TL6TQsjb+RHamqkTy8LUnSCthEz7hT7TslnS5OetYwI1i5qJgOdg3o850UU5+GPdsfndC9sW8rKi3X13DdiiFY6JqFMaOrQ7LDxicS0k7ngFgzET8JjiEEWQHG8d8yn6QDLm4ePF9mLFD2dQmLw2AjbX7XAe72O7fGXbbARvGBo1FF0vl8t6uYGXNj1ecXQj2knB+nHmeO3c7s/KdS9oqVdi3VeC4FSmvt9Z9/x9gUZvGj1e8dmhHc4k2vx57SugtNOk2/K66Vut1+04MnIF1Ycee26IyBovrsXu0Qy5dvd/ob6UHE/0zktluooytyL98RIO/5Vo7fHpNB6XrnrxB45cKPsPv+rxjqt6ffU0+IIXM/1zwDUXYnGNk8ZbelMGJxUNhs2y9fe8UezfCnplx+9/oc6/GhV2AouNf8ibM/8loGqDyVbj4VxYwBJP9vYkThy0M7PF/cY1oH4k7jeuogg34MgNtj4czgUUtFAX1zhJtGHQQl9c4ySBgpYuSzsSJyBWSPWS3WuqsxzUHSTm/6/qSH85Q/SOO6ZGTI6PBt+0ZnO/cRXgRQai+cFLBVdRFFvR/wGy5xHftaix/4Dmt790nMPhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBzOl/M/g+xPQyxZZkAAAAAASUVORK5CYII="></Image>
            </Button>
           </Box>

          </Box>
          </Box>
        </Box>
        </Box>
        <Box  className={'savedlater'}>
          <Heading fontSize={'20px'} mb={'15px'}>Saved for Later</Heading>
          <Box p={'20px'} marginBottom={'20px'} border={'1px solid rgb(229,226,222)'}>
            <Text color={'#5C5C5F'} fontSize="13px">Your saved for letter is currently empty. Add items here that you like bu aren't ready to buy.</Text>
          </Box>
        </Box>
  <Box id="swiper" className={'swiper_down'}>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={5}
      breakpoints={{
        // when window width is >= 640px
       430:{
         "width":450,
         slidesPerView:2
        },
        640: {
          "width": 640,
          slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
          "width": 768,
          slidesPerView: 5
        },
      }}
      navigation
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114345140006_066_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>
                    Pilcro Cropped Eyelash Sweater
                </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114529100201_014_b?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>
            Silent D Otto Booties
        </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114529100206_066_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114529100201_045_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>
            Maeve Cowl-Neck Pullover Sweater
        </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114529100206_072_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>
            The Maeve Mock-Neck Color-Tipped Sweater
        </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114086690038_004_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>
            Maeve Bow Sweater
        </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114529100208_001_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Maeve Crewneck Puff-Sleeve Sweater</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114086690039_009_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Maeve Cropped Crew-Neck Sweater</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/4114326950079_066_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Maeve Plush V-Neck Sweater</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box >
            <Image src='https://images.urbndata.com/is/image/Anthropologie/76090299_066_b2?$an-category$&qlt=80&fit=constrain' w='129px'></Image>
            <Text>Seychelles Neve Heels</Text>
        </Box>
      </SwiperSlide>
    </Swiper>
    

</Box>

  </Box>
  )
}

export default CartPage;