import React, { useState } from 'react'
import { SimpleGrid,Link,Heading ,Image,Box,Flex,IconButton,Text,Input,Button,Textarea} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import emailjs from "@emailjs/browser";
import "./Footer.css"
import { useEffect } from 'react';
const Footer = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_axpnffp', 'template_27lmodo', values, '-_JGt7W2GBWgscAyk')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);
  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <Box sx={{background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",padding:"1rem"}}>
           <Heading id="w" >CONTACT</Heading>
      
    <SimpleGrid id="simple" sx={{background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",paddingTop:"120px"}} columns={[1,1,1,1]}>
      <p style={{color:"gold",fontSize:"25px"}}>Direct send message through E-mail ✍</p>
      {status && renderAlert()}
        <form  onSubmit={handleSubmit} id="form" >
        <Input id="input" onChange={handleChange} name="fullName" required={"required"} value={values.fullName} sx={{backgroundColor:"white",border:"2px solid #DC143C"}} placeholder="Write Your Name" type="text"/>
        <br/>
        <br/>
        <Input id="input" name="email"  required={"required"} value={values.email} onChange={handleChange} sx={{backgroundColor:"white",border:"2px solid #DC143C"}} type="email" placeholder="Write Your E-mail" />
        <br/>
        <br/>
        <Textarea id="area" name="message"  required={"required"} value={values.message} onChange={handleChange} sx={{backgroundColor:"white",border:"2px solid #DC143C"}} type="message" placeholder="Write Your Message" />
        <br/>
        <br/>
        <Button value="send" type="submit" class="button-75" role="button"><span class="text">submit</span></Button>
       




        </form>
        <br/>
        <br/>
       
    <SimpleGrid sx={{paddingTop:"30px"}} columns={[2,3,4,4]}>
    
 

      
       
         
       
         
         <Link href="https://www.linkedin.com/in/priya-rajawat-9a1a9a237/" isExternal >
         <SocialIcon url="https://www.linkedin.com/in/priya-rajawat-9a1a9a237/" />
        <p style={{color:"white"}}>Linkedin</p>
        </Link>
       
        
       
        
      
         
          <Link href='https://github.com/priyarajawat' isExternal >
          <SocialIcon url="https://github.com/priyarajawat" bgColor="#ff5a01"/>
          <p style={{color:"white"}}>Github</p>
        </Link>
         
     


    
        
      <Link href='mailto:priyarajawat770@gmail.com' isExternal >
          <SocialIcon url="mailto:priyarajawat770@gmail.com" />
          <p style={{color:"white"}}>E-mail</p>
        </Link>
       
      
       
     
        <Link href='https://api.whatsapp.com/send/?phone=918839560847&text&app_absent=0' isExternal >
          <SocialIcon url="https://api.whatsapp.com/send/?phone=918839560847&text&app_absent=0" />
          <p style={{color:"white"}}>Whatsapp</p>
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
 
     </Box>
  )

  
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p style={{color:"white",fontSize:"19px"}}>Your message send successfully</p>
  </div>
)

export default Footer;