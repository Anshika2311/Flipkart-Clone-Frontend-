import { useState,useContext} from "react";
import { Box, Button, makeStyles, Typography ,Badge} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';

//components
import LoginDialog from "../Login/Login";
import {LoginContext} from "../../context/ContextProvider"
import Profile from "./Profile";

const useStyle = makeStyles({
    login: {
        backgroundColor: "#ffffff",
        color: '#2874f0',
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow:'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        "& > *": {
            marginRight: 50,
            alignItems:'center',
            textDecoration:"none",
            color:"#fff"
        }
    },
    container:{
        display:'flex',
    }

})


const HeaderButtons = () => {

    const classes = useStyle();
    const [open,setopen] = useState(false);
    const {account,setAccount}=useContext(LoginContext);

    const openLoginDialog = () =>{
        setopen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account?
                <Profile account={account} setAccount={setAccount}/>
                :<Link>
                <Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login}>Login</Button>
                </Link>
            }
            <Typography style={{marginTop:5}}>More</Typography>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setopen={setopen} setAccount={setAccount}/>
        </Box>
    )
}

export default HeaderButtons;