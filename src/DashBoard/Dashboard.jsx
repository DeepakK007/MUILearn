import {useState} from 'react';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import DashboardCard from './DashboardCard';
import { Box } from '@mui/material';
import DashboardCardProgress from './DashboardCardProgess';
import { green,blue } from '@mui/material/colors';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
function Dashboard () {
    return(
        <>
        <Box sx={{marginTop:"80px",padding:"10px",height:"200vh"}}>
        <Box sx={{display:'flex',flexWrap:"wrap",gap:"10px" ,justifyContent:{xs:"center",sm:"center",md:"space-between"}, padding:'0 20px 0 20px'}}>
        <DashboardCard title={'Budget'} desc={'$24k'}/>
        <DashboardCard title={'Total Customers'} desc={'1.6k'} customIcon={<PeopleRoundedIcon sx={{
              color: "white"
            }}/>} customColor={green[500]}/>
        <DashboardCardProgress title={'Task Progress'} desc={'75.5%'} progress={'75'}/>
        {console.log("After Progress Card")}
        <DashboardCard title={'Total Profit'} desc={'$15k'} customColor={blue[800]}/>
        </Box>
        </Box>
        </>
    )
}
export default Dashboard

