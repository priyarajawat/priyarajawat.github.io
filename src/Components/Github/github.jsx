import React from "react";
import GitHubCalendar from 'react-github-calendar';

import { Box, Text } from "@chakra-ui/react";
const GitHub = () => {
 
 
  return (
  
      <Box   sx={{color:"black",paddingTop:"50px",fontWeight:"bold"}}  w={["100%","100%","100%"]}>
       <br/>
   
   <br/>
   <Box sx={{width:"80%",margin:"auto"}}>
      <Box
      sx={{color:"black",border:"2px solid greenyellow",padding:"1rem",borderRadius:"17px"}}
        w={["100%","100%","100%"]}
        
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
   
   
      </Box>
   
  );
};
export default GitHub;