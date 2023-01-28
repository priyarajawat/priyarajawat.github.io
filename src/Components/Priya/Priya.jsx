import React from 'react'
import { SimpleGrid,Link ,Image,Box,Text,Heading,Button} from '@chakra-ui/react'
import "./Priya.css"

const Priya = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Priya-Rajawat-Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Priya-Rajawat-Resume.pdf';
            alink.click();
        })
    })
}
  return (
   <SimpleGrid id="about" >
    
    <Box id="box"> 
    <Text class="texts" >Hello👋 I am,  </Text>
  
   
    <Heading class="same">Priya Rajawat</Heading>
    <Heading class="same">A <b id="b">MERN</b>  Stack Web Developer</Heading> 
   
    <Text class="text" >I’m a full-stack developer and Looking for a oppurtunity working with IT Company. Currently, </Text>
  
 
  
  
    <Text class="text"> I’m focused on building responsive full-stack web applications.  </Text>
   
    <br/>
    <a target="_blank" href="https://drive.google.com/file/d/1WUOprmAkPeswZ-3Z_jLUnix6B6OsWkZF/view?usp=sharing" > <Button onClick={onButtonClick} id="resume" size={"sm"} m='auto'>RESUME</Button></a>

   
    
   </Box>
   <Image id="aboutI"  src="https://i.ibb.co/kSq4jYC/Screenshot-2022-09-07-13-21-33-45-99c04817c0de5652397fc8b56c3b3817-2.jpg"/>
   </SimpleGrid>
  )
}

export default Priya;