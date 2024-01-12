import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import NorthIcon from "@mui/icons-material/North";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

import { red } from "@mui/material/colors";
const Cred = red[500];
export default function DashboardCard(props) {
  return (
    <div>
      <Card elevation={1}
        sx={{
          width: { xs: "220px", sm: "280px" },
          height: "150px",
          display: "flex",
          justifyContent:"space-between",
          borderRadius:"15px",
          position:"relative"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", marginTop:'auto',marginBottom:'auto' }}>
          <CardContent>
            <Typography
              variant="p"
              component="div"
              sx={{
                fontSize: "12px",
                marginBottom: "10px",
                fontWeight: "600",
                color: "grey",
                textTransform:'uppercase',
                fontFamily: [
                  "-apple-system",
                  "BlinkMacSystemFont",
                  '"Segoe UI"',
                  "Roboto",
                  '"Helvetica Neue"',
                  "Arial",
                  "sans-serif",
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                ].join(","),
              }}
            >
              {props.title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: "500" }}>
              {props.desc}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px", alignItems:"center" }}>
              <Typography
                sx={{
                  color: "lightgreen",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <NorthIcon sx={{ fontSize: "18px" }} /> 12%
              </Typography>
              <Typography sx={{fontSize:'12px'}}>Since last month</Typography>
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          sx={{
            borderRadius: "50%",
            marginTop: "20px",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: props?.customColor?props.customColor:"red",
            marginRight:'20px',
            position:"absolute",
            right:0
          }}
        >
          {props?.customIcon?props.customIcon:<AttachMoneyOutlinedIcon
            sx={{
              borderRadius: "50%",
              fontSize: "18px",
              backgroundColor: "white",
              color: props?.customColor?props.customColor:"red",
            }}
          />}
        </CardMedia>
      </Card>
    </div>
  );
}
