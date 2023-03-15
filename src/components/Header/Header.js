import {
    Link
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';

//
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SideBar from "../SideBar";
//



function Header() {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const list = () => (
        <Box
            sx={{ width: 300 }}
        >
            <SideBar />
            
        </Box>
    );


    return (
        <div className="header">
            <div className="flex items-center">
                <div>
                    <React.Fragment>
                        <MenuIcon className="mx-2" onClick={handleDrawerOpen} />
                        <Drawer
                            anchor="left"
                            open={open}
                            onClose={handleDrawerClose}
                        >
                            {list()}
                        </Drawer>
                    </React.Fragment>
                </div>

                <Link to="/"><span className="border-1 bg-gray-900 text-white rounded-md h-10 p-2">DEV</span></Link>
            </div>
            <ul className="flex items-center">
                <li className="mr-2">
                    <Link to=""><SearchIcon sx={{ fontSize: 30, color: '#404040' }} /></Link>
                </li>
                <li className="mr-2">
                    <Link to=""><NotificationsNoneIcon sx={{ fontSize: 30, color: '#404040' }} /></Link>
                </li>
                <li className="mr-2">
                    <Link to=""><div className="w-8 h-8 rounded-full bg-green-400"></div></Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;