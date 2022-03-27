import React, {useState} from "react";
import {AppBar, Tab, Tabs, Toolbar,useTheme, useMediaQuery} from "@mui/material";
import Title from "./Title";
import EventIcon from '@mui/icons-material/Event';
import DrawerComp from "./DrawerComp";

const Header = () => {
    const [value,setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch) ;
    const pages = ["Home","Student Center","News","Support","Logout"]
    return(
<React.Fragment>
    <AppBar sx={{background:"#063970"}}>
       
<Toolbar>
<EventIcon/>
{isMatch?(
    <>
    <Title sx={{fontSize:"1.5rem", paddingLeft:'30%'}}/> 

    <DrawerComp sx={{paddingright:'30%'  }}/>
    </>
):(
    <>
    <Tabs textColor="inherit"
    value={value}
    onChange={(e,value)=>setValue(value)}>
       
        {
            pages.map((page,index)=>(
                <Tab key={index} label={page}/>
                )) }

</Tabs>

</>)}


</Toolbar>
  </AppBar>
</React.Fragment>
        );
};
export default Header;