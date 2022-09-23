import { Box, Flex,Text, Heading,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import "./about.css"

const About = () => {
  return (
    <Box sx={{padding:"2rem"}}>
      <Heading id="h" >ABOUT ME</Heading>
    <SimpleGrid h={["auto","auto","600px"]} columns={[1,1,1,2,2]} sx={{padding:"0.75rem 2rem"}}>
      
       
      
            
            <Image id="img" w={["auto" ,"auto" ,"80%"]} src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/media/8db02365a1363822ae9f0554cf3d4469.gif"/>
            <Box w={["auto" ,"auto" ,"auto"]}  id="ab">
                <p w={["auto" ,"auto" ,"auto"]}>Hey, My name is Priya Rajawat. I am from  Gwalior , Madhya Pradesh.</p>
                <p w={["auto" ,"auto" ,"auto"]}>I love designing website and I am looking for more opportunities to work in coding</p>
                <p w={["auto" ,"auto" ,"auto"]}>Apart from coding I also like Visiting and listening music</p>
            </Box>
            
        
    </SimpleGrid>
   
    </Box>
  )
}

export default About