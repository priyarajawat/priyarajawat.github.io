import { Box, Flex,Text, Heading,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import "./about.css"

const About = () => {
  return (
    <Box sx={{padding:"2rem"}}>
      <Heading id="h" >ABOUT ME</Heading>
    <SimpleGrid h={["auto","auto","auto"]} columns={[1,1,1,2,2]} sx={{padding:"2rem 0.55rem"}}>
      
       
      {/* //https://cdn.dribbble.com/users/2520294/screenshots/7269423/media/8db02365a1363822ae9f0554cf3d4469.gif */}
            
            <Image id="img" w={["100%" ,"100%" ,"80%"]} src="https://www.techbabble.zone/content/images/2021/07/46207-programmer-1.gif"/>
            <Box   id="ab">
                <p class="p" >Hey, My name is Priya Rajawat. I am from  Gwalior , Madhya Pradesh.</p>
                <p class="p"  >I love designing website and I am looking for more opportunities to work in coding</p>
                <p class="p"  >Apart from coding I also like Visiting and listening music</p>
            </Box>
            
        
    </SimpleGrid>
   
    </Box>
  )
}

export default About;