import React from 'react';
import {Box, Button, Dialog, DialogContent, Typography} from "@mui/material";
import {DangerousOutlined} from "@mui/icons-material";

const Oops = props => {
    const {open , setOpen} = props;

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Dialog
            open={open}
            maxWidth={'sm'}
            fullWidth
            onClose={handleClose}
        >
            <DialogContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent:'center',
                    flexDirection:'column',
                    alignItems:'center',
                }}>
                    <img src="/assets/oops.jpg" alt="" />
                    <Typography variant={'subtitle1'}>We're not up and running just yet.</Typography>
                    <Box sx={{ display:'flex', mt:2 }}>
                        <Button sx={{mr:2}} color={'error'} variant={'contained'} onClick={handleClose}>Close</Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Oops;