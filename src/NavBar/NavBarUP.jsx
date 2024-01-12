import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
export default function NavBarUP() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1,marginBottom:"30px" }}>
      <AppBar position="fixed" sx={{color:"black",maxWidth:{sm:"100%",md:"80%"},display:"flex",flexDirection:"column", backdropFilter:"blur(5px) saturate(113%)",backgroundColor:"rgba(255, 255, 255,0.37)",border: "1px solid rgba(209, 213, 219, 0.3)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,display:{md:"none",lg:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, 
              display:{xs:"none",sm:"none",md:"block"}
            }}
          >
            <SearchSharpIcon/>
          </IconButton>
          {/* Left side profile */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
              <PeopleRoundedIcon/>
            </IconButton>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="show more"
              
              aria-haspopup="true"
              
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
