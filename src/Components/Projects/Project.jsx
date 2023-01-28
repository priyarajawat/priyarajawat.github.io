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
            <Image w={["auto" ,"auto" ,"100%"]} src="https://i.ibb.co/1n1YvZV/Screenshot-61.png"/>
        </SimpleGrid>
        <br/>


        <SimpleGrid id="some" sx={{background: "linear-gradient(rgb(15, 16, 72) 0%, rgb(15, 16, 72) 100%)",gap:"20px"}} columns={[1,1,2,2]}>
        <Box sx={{lineHeight:"35px"}} w={["auto","auto","auto"]}>
                <Text class="prot">ComicaDigital</Text>
                <Text class="prot">Comicadigital is a well known E-commerce website here you can shop laptops , TV , cameras from top brands.</Text>
                <Text class="prot"><b>Features :</b>Landing Page, Login & SignUp Page, Sorting and Filtering, Product Detail Page and added into Cart.</Text>
                <Text class="prot"> <b>Tech Stack:</b>  HTML | CSS | ReactJs | NodeJs | Mongodb | ChakraUI | Express</Text>
                <br/>
                <Flex sx={{gap:"20px"}}>
                    <Link href='https://github.com/pg570/ComicaDigital_website"'><Button>Source Code</Button></Link>
                    <Link href='https://frontend-madhusainadh.vercel.app/'><Button>Deploy</Button></Link>
                    
                </Flex>
                
            </Box>
            <Image w={["auto" ,"auto" ,"100%"]} src="https://i.ibb.co/6y084TP/Screenshot-43.png"/>
        </SimpleGrid>
        <br/>


        <SimpleGrid id="some" sx={{background: "linear-gradient(rgb(15, 16, 72) 0%, rgb(15, 16, 72) 100%)",gap:"20px"}} columns={[1,1,2,2]}>
        <Box sx={{lineHeight:"35px"}} w={["auto","auto","auto"]}>
                <Text class="prot">Toggle Track</Text>
                <Text class="prot">Toggl Track is a time tracking software operated by Toggl OÜ, that offers online time tracking and reporting services through their website along with mobile and desktop applications.</Text>
                <Text class="prot"><b>Features :</b>Login & SignUp Page, Pricing Page and  Time Management Page</Text>
                <Text class="prot"> <b>Tech Stack:</b>  HTML | CSS | JavaScript</Text>
                <br/>
                <Flex sx={{gap:"20px"}}>
                    <Link href='https://github.com/vivekkhade23/Toggl-Track-Clone'><Button>Source Code</Button></Link>
                    <Link href='https://toggletrack-beta.vercel.app/'><Button>Deploy</Button></Link>
                    
                </Flex>
                
            </Box>
            <Image w={["auto" ,"auto" ,"100%"]} src="https://i.ibb.co/QrZfzyt/Screenshot-31.png"/>
        </SimpleGrid>
        <br/>
     
      
        <br/>
   <br/>
   <Text sx={{borderBottom:"1px solid grey",width:"95%",margin:"auto"}}></Text>
   <br/>
    </SimpleGrid>
  )
}

export default Project;