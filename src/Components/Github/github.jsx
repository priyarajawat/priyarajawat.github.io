import React from "react";
import GitHubCalendar from 'react-github-calendar';
import "./github.css"

import { Box, Text } from "@chakra-ui/react";
const GitHub = () => {
 
 
  return (
  
      <Box   sx={{color:"black",paddingTop:"60px",fontWeight:"bold"}}  w={["100%","100%","100%"]}>
       <br/>
       <br/>
   <br/>
   <Box sx={{width:"80%",margin:"auto"}}>
      <Box id="paddin"
      sx={{color:"black",border:"2px solid greenyellow",borderRadius:"17px"}}
      
        
      >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="priyarajawat"
          year={new Date().getFullYear()}
        />
      </Box>
      </Box>
      <br/>
   <br/>
   <br/>
   <br/>
   
   
      </Box>
   
  );
};
export default GitHub;