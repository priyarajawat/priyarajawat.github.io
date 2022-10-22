import React from 'react'
import { SimpleGrid,Link ,Image,Box,Text,Heading,Button} from '@chakra-ui/react'
import "./Priya.css"

const Priya = () => {
  return (
   <SimpleGrid id="about" >
    
    <Box id="box"> 
    <Text class="texts" >Hello👋 I am,  </Text>
  
   
    <Heading class="same">Priya Rajawat</Heading>
    <Heading class="same">A <b id="b">MERN</b>  Stack Web Developer</Heading> 
   
    <Text class="text" >I’m a full-stack developer and Looking for a oppurtunity working with IT Company. Currently, </Text>
  
 
  
  
    <Text class="text"> I’m focused on building responsive full-stack web applications.  </Text>
   
    <br/>
  <Link href="https://drive.google.com/file/d/19Byr95yFt7JlTTUZbaCTJ2t4ujZzaGD4/view?usp=sharing"> <Button id="resume" size={"sm"} m='auto'>RESUME</Button></Link>
   
    
   </Box>
   <Image id="aboutI"  src="https://raw.githubusercontent.com/priyarajawat/image/main/ss/Screenshot_2022-09-07-13-21-33-45_99c04817c0de5652397fc8b56c3b3817%20(2).jpg"/>
   </SimpleGrid>
  )
}

export default Priya