import * as React from 'react';
import Container from '@mui/material/Container';
import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function Posts() {
  
    return (
        <>
    <Container maxWidth="xl">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      <TextField id="outlined-basic" label="" variant="outlined" />
          <Button href='#' color="inherit">SEARCH</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </Container>

    </>
  );
}
