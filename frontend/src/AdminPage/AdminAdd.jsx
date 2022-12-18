import { Button, Input, useToast } from '@chakra-ui/react';
import React,{useState} from 'react';
import axios from 'axios';
import "./AdminAdd.css";

const AdminAdd = () => {
const[value,setValue]=useState("")
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [image,setUrl]=useState("")


const toast=useToast()
    const handleSubmit = () =>{
      const payload={
         name:name,
         image:image,
         price:price,
         count:2
      }
      if(value==="cloths"){
        axios.post(`https://anthropologie-server-production.up.railway.app/new_clothing`,payload)
        .then((r)=>{
            toast({
                title: 'Added',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
        })
        .catch((er)=>{
            console.log(er)
        })

      }
      else{
      axios.post(`https://stock-server.onrender.com/${value}`,payload)
      .then((r)=>{
        toast({
          title: 'Added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((e)=>{
        console.log(e)
        // toast({
        //   title: `error toast`,
        //   status: `error adding data`,
        //   duration:3000,
        //   isClosable: true,
        // })
      })
     
    }
}
  return (
    <div style={{ marginTop: "30px"}}>
      <h1 style={{fontWeight:"700",fontSize:"30px",fontFamily:"sans-serif",textAlign:"center"}}>Add Products</h1>
    <div className='admin_add'>
        <select value={value}  onChange={(e)=>setValue(e.target.value)} style={{width:"100%",padding:"6px",fontSize:"15px"}} >
            <option value="">Select</option>
            <option value="cloths">Women Cloth</option>
            <option value="blankets">Home's Furniture</option>
            <option value="lamps">Garden & Outdoor</option>
            <option value="cookingCutters">Sale</option>
        </select>

        <div >
            <Input value={name}  onChange={(e)=>setName(e.target.value)} mt="10px" type="text"  placeholder='product name'></Input>
            <Input value={image}  onChange={(e)=>setUrl(e.target.value)} mt="10px" type="url"  placeholder='enter image URL'></Input>
            <Input value={price}  onChange={(e)=>setPrice(e.target.value)} mt="10px" type= "number"  placeholder='enter the price'></Input>
        </div>
        <div ><Button mt="10px" width={"60%"} ml="20%" bg="skyblue" color="white"  onClick={handleSubmit}>Submit</Button></div>
    </div>
    </div>
  )
}

export default AdminAdd