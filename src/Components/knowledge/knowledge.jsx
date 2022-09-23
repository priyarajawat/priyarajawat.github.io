import { SimpleGrid ,Image,Box,Text,Heading} from '@chakra-ui/react'
import React from 'react'
import "./know.css"

const Knowledge = () => {
  return (
    <Box sx={{padding:"5rem 0.25rem"}}>
      <Heading sx={{color:"lightgreen",fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Full Stack Development</Heading>
      <br/>
      <br/>
  <SimpleGrid h={["auto","auto","auto"]} id="sim" columns={[1,1,2,2]}>
    <Box w={["auto" ,"auto" ,"auto"]}   sx={{padding:"1.40rem 1rem",color:"black", marginLeft:"30px",  boxShadow: "rgba(88, 100, 192, 0.774) 0px 7px 29px 0px",height:"fit-content"}}>
        <Text w={["auto" ,"auto" ,"auto"]} fontSize='x-large'>⚡ Building responsive website using HTML, CSS, JS, React, Redux</Text>
        <br/>
        <Text w={["auto" ,"auto" ,"auto"]} fontSize='x-large'>⚡Building Simple RESTful CRUD APIs</Text>
        <br/>
        <Text w={["auto" ,"auto" ,"auto"]} fontSize='x-large'>⚡ Knowledge of MongoDB Database</Text>
        <br/>
        <Text w={["auto" ,"auto" ,"auto"]} fontSize='x-large'>⚡ Knowledge of some UI libraries</Text>
    </Box>
    <Image  sx={{height:"70%",marginLeft:"auto"}} w={["90%","90%","60%"]} src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"/>
  </SimpleGrid></Box>
  )
}

export default Knowledge