import { SimpleGrid ,Image,Box,Text,Heading} from '@chakra-ui/react'
import React from 'react'
import "./know.css"

const Knowledge = () => {
  return (
    <Box sx={{padding:"5rem 0.25rem"}}>
      <Heading id="gead">STATICTICS</Heading>
      <br/>
      <br/>
  <SimpleGrid h={["auto","auto","auto"]} id="sim" columns={[1,1,2,2]}>
    <SimpleGrid id="gh" w={["100%" ,"100%" ,"100%"]} columns={[1,2,2,2]} >
     <Box className="com">
      <p class="com1">Total Contributed</p>
      <p class="com2">179+</p>
     </Box>
     
     <Box className="coms">
      <p class="com1">Spend Time</p>
      <p class="com2">2100 hours</p>
     </Box>
     <Box className="comm">
      <p class="com1">Most Used Language</p>
      <p class="com2">JavaScript</p>
     </Box>
     <Box className="comp">
      <p class="com1">Projects</p>
      <p class="com2">2+ Projects Done</p>
     </Box>
    </SimpleGrid>
    <Image  sx={{height:"70%",margin:"auto"}} w={["90%","90%","60%"]} src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"/>
  </SimpleGrid></Box>
  )
}

export default Knowledge;