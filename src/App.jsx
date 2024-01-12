import { useState } from 'react'
import Dashboard from './DashBoard/Dashboard.jsx'
import NavBarUP from './NavBar/NavBarUP.jsx'
import NavBarLeft from './NavBar/NavBarLeft.jsx'
import { Box } from '@mui/material'
function App() {
  

  return (
    <>
    <Box sx={{display:"flex"}}>
      <Box sx={{flex:1, display:{xs:"none",sm:"none",md:"block"}, height:"100vh"}}>
        <NavBarLeft/>
      </Box>
      <Box sx={{flex:4}}>
      <NavBarUP/>
      <Dashboard/>
      </Box>
    </Box>
      
    </>
  )
}

export default App
