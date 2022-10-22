import React from 'react'
import { SimpleGrid ,Image,Box,Text,Heading,Button,Flex,Link} from '@chakra-ui/react'
import "./Project.css"
const Project = () => {
  return (
    
    
    <SimpleGrid id="tomar" sx={{background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",padding:"120px 50px"}} columns={[1,1,1,1]}>
     <Heading sx={{color:"white",textDecoration:"underline",paddingBottom:"4px"}}>PROJECTS</Heading>
        <SimpleGrid id="some" sx={{background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",gap:"20px"}} columns={[1,1,2,2]}>
            <Box sx={{lineHeight:"35px"}} w={["auto","auto","auto"]}>
                <Text class="prot">BeautyBebo Clone</Text>
                <Text class="prot">BeautyBebo is a well known E-commerce website there are lots of categories available for shopping</Text>
                <Text class="prot"><b>Features :</b> Product details, Sorting and Filtering, Explore section to view products, Cart page, Payment Gateway.</Text>
                <Text class="prot"> <b>Tech Stack:</b>  HTML | CSS | JavaScript</Text>
                <br/>
                <Flex sx={{gap:"20px"}}>
                    <Link href='https://github.com/jstgrowup/BeautyBebo-clone'><Button>Source Code</Button></Link>
                    <Link href='https://delightful-duckanoo-17fff8.netlify.app/'><Button>Deploy</Button></Link>
                    
                </Flex>
                
            </Box>
            <Image w={["auto" ,"auto" ,"100%"]} src="https://raw.githubusercontent.com/priyarajawat/image/main/beauty/Screenshot%20(61).png"/>
        </SimpleGrid>
        <br/>
     
        <SimpleGrid id="some" sx={{background: "linear-gradient(rgb(15, 16, 72) 0%, rgb(15, 16, 72) 100%)",gap:"20px"}} columns={[1,1,2,2]}>
        <Box sx={{lineHeight:"35px"}} w={["auto","auto","auto"]}>
                <Text class="prot">Uboric Clone</Text>
                <Text class="prot">Uboric is a well known E-commerce website here you can buy Kitchen Tools, Health and Personal Care Item.</Text>
                <Text class="prot"><b>Features :</b>Landing Page, Login & SignUp Page, Sorting and Filtering, Product Added into Cart.</Text>
                <Text class="prot"> <b>Tech Stack:</b>  HTML | CSS | JavaScript</Text>
                <br/>
                <Flex sx={{gap:"20px"}}>
                    <Link href='https://github.com/priyarajawat/uboric-website/tree/main/uboric-web"'><Button>Source Code</Button></Link>
                    <Link href='https://delightful-duckanoo-17fff8.netlify.app/'><Button>Deploy</Button></Link>
                    
                </Flex>
                
            </Box>
            <Image w={["auto" ,"auto" ,"100%"]} src="https://raw.githubusercontent.com/priyarajawat/image/main/uboric/Screenshot%20(64).png"/>
        </SimpleGrid>
        <br/>
   <br/>
   <Text sx={{borderBottom:"1px solid grey",width:"95%",margin:"auto"}}></Text>
   <br/>
    </SimpleGrid>
  )
}

export default Project