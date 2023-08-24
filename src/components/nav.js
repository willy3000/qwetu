import React, {useState} from "react";
import { Box, AppBar, Toolbar } from "@mui/material";
import Oops from "./oops";

export default function Nav() {
    
    const [open, setOpen] = useState(false)

  return (

<Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff'}}>
            <img src="/assets/qwetu-logo.jpg" alt="" style={{maxWidth: '200px'}}/>
            <Box sx={{margin: '15px'}}>
            <button className='order-button' onClick={() => setOpen(true)}>Order Now</button>
            </Box>
            <Oops {...{open, setOpen}}></Oops>
  </Toolbar>
</AppBar>
</Box>

  );
}
