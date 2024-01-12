import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    LinearProgress,
    Typography,
  } from "@mui/material";
  import Box from "@mui/material/Box";
  import NorthIcon from "@mui/icons-material/North";
  import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
  import ListRoundedIcon from '@mui/icons-material/ListRounded';
  import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
  import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
  import { red,orange } from "@mui/material/colors";
  const Cred = red[500];
  export default function DashboardCardProgress(props) {
    return (
      
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
          <Box sx={{width:"98%", display: "flex", flexDirection: "column", marginTop:'auto',marginBottom:'auto', overflow:"hidden" }}>
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
              <Box sx={{ width:"100%",marginTop:"20px", padding:"5px 0" }}>
              <LinearProgress variant="determinate" color="primary" value={props.progress} />
              {console.log("progress bar")}
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
              backgroundColor: orange[700],
              marginRight:'20px',
              position:"absolute",
              right:"0px"
            }}
          >
            <ListRoundedIcon
              sx={{
                
                color: "white",
              }}
            />
          </CardMedia>
        </Card>
    );
  }
  