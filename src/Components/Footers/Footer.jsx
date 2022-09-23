import React from 'react'
import { SimpleGrid,Link ,Image,Box,Flex,IconButton,Text,Input,Button,Textarea} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"
const Footer = () => {
  return (
    <SimpleGrid id="simple" sx={{background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",paddingTop:"120px"}} columns={[1,1,1,1]}>
        <form w={["auto" ,"auto" ,"50%"]} style={{border:"2px solid #DC143C",width:"50%",padding:"2rem",borderRadius:"10%",margin:"auto",boxShadow: "rgb(106, 90, 205) 0px 2px 8px 0px"}}>
        <Input sx={{backgroundColor:"white",border:"2px solid #DC143C"}} placeholder="Write Your Name" />
        <br/>
        <br/>
        <Input sx={{backgroundColor:"white",border:"2px solid #DC143C"}} placeholder="Write Your E-mail" />
        <br/>
        <br/>
        <Textarea sx={{backgroundColor:"white",border:"2px solid #DC143C"}} placeholder="Write Your Message" />
        <br/>
        <br/>
        <Button class="button-75" role="button"><span class="text">submit</span></Button>
       




        </form>
        <br/>
        <br/>
       
    <SimpleGrid sx={{paddingTop:"30px"}} columns={[2,3,4,4]}>
    
 

      
       
         
       
         
         <Link href="https://www.linkedin.com/in/priya-rajawat-9a1a9a237/" isExternal >
         <SocialIcon url="https://www.linkedin.com/in/priya-rajawat-9a1a9a237/" />
        
        </Link>
       
        
       
        
      
         
          <Link href='https://github.com/priyarajawat' isExternal >
          <SocialIcon url="https://github.com/priyarajawat" bgColor="#ff5a01"/>
        </Link>
         
     


    
        
      <Link href='mailto:priyarajawat770@gmail.com' isExternal >
          <SocialIcon url="mailto:priyarajawat770@gmail.com" />
        </Link>
       
      
       
     
        <Link href='https://api.whatsapp.com/send/?phone=918839560847&text&app_absent=0' isExternal >
          <SocialIcon url="https://api.whatsapp.com/send/?phone=918839560847&text&app_absent=0" />
        </Link>
       

    

    </SimpleGrid>
    <br/>
   <br/>
   <Text sx={{borderBottom:"1px solid grey",width:"90%",margin:"auto"}}></Text>
   <br/>
   <br/>
   <SimpleGrid sx={{gap:"20px", color:"white",margin:"auto"}} columns={[1,1,1,1]}>
   <p id="emailPhone" ><p><a href="tel:+918839560847">📞+91 8839560847</a></p>  <a href="mailto:priyarajawat770@gmail.com" target="_blank" id="email"> 📧 priyarajawat770@gmail.com</a></p>
         
   </SimpleGrid>
   <br/>

   <Text w={["auto","auto","auto"]} sx={{color:"white"}}>   👨‍💻 with ❤️ by <b id="footName">Priya Rajawat</b> using ⚛️ </Text>
   <br/>
     </SimpleGrid>
  )
}

export default Footer