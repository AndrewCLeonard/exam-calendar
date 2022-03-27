import React, { useState } from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemIcon,  ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {
    const [openDrawer,SetOpenDrawer] = useState(false);
    
const pages = ["Home","Student Center","News","Support","Logout"]
    
  return (
    <React.Fragment>
<Drawer open={openDrawer} onClose={()=> SetOpenDrawer(false)}>
    <List>
        {
            pages.map((page,index)=>(
                <ListItemButton key={index} >
    <ListItemIcon>
<ListItemText>
    {page}
</ListItemText>
    </ListItemIcon>
</ListItemButton>
            ))
        }

    </List>
</Drawer>
<IconButton sx={{color:"white", marginLeft:"auto"}}
 onClick={()=>SetOpenDrawer(!openDrawer)}>
<MenuIcon/>
</IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
