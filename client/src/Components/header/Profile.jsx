import { Typography ,Menu,MenuItem} from "@material-ui/core"
import { useState } from "react";


const Profile = ({account,setAccount}) =>{

    const[open,setOpen] =useState("");

    const handleClose  = () =>{
        setOpen(false);
    }

    const handleClick =  () => {
        setOpen(true);
    }
    
    return(
        <>
            <Typography
               style={{marginTop:4}}> {account}
            </Typography>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={handleClick} >Logout
                </MenuItem>
            </Menu>
        </>
    )
}
 export default Profile;