import { Grid, SimpleGrid ,Flex,Box,Text, Heading} from '@chakra-ui/react'
import React from 'react'
import  "./navbar.css"

const Navbar = () => {
  return (
    <SimpleGrid id="nav" column={[2,2,3,5]}>
        <Flex  id="navbar">
            <Box >
                <Heading w={["auto" ,"auto" ,"auto"]} id="head"> Priya </Heading>
            </Box>
            <Flex  sx={{gap:"60px"}}>
              
                <a href="#navbar">Home</a>
                <a href="#h">About</a>
                <a href="#tomar">Project</a>
                <a href="#school">Skills</a>
                <a href="#simple">Contact</a>
            
            
                
            </Flex>
        </Flex>

    </SimpleGrid>
  )
}

export default Navbar