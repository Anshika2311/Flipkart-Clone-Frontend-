import {Dialog, DialogContent,makeStyles,Box, Typography,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import { authenticateSignup } from '../../service/api.js';

const useStyle=makeStyles({
    component:{
        height:"70vh",
        width:"90vh",
        maxWidth:'unset !important'
    },

    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        backgroundRepeat:'no-repeat',
        background:'#2874f0',
        width:'40%',
        backgroundPosition:'center 85%',
        padding: '45px 35px',
        '&> *':{
            color: '#FFFFFF',
            fontWeight:600,
        }
    },

    login:{
        padding:"25px 35px",
        display:"flex",
        flex:'1',
        flexDirection:'column',
        '&> *':{
            marginTop:'20px',
        }
    },

    text:{
        color:"#878787",
        fontSize:"12px",
    },

    loginBtn:{
        textTransform:"none",
        background:"#FB641B",
        color:"#FFFFFF",
        height: 48,
        borderRadius:2
    },

    requestBtn:{
        textTransform:"none",
        background:"#FFFFFF",
        color:"#2874f0",
        height: 48,
        borderRadius:2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)'
    },

    createText:{
        textAlign:"center",
        marginTop:"auto",
        fontSize:14,
        color:"#2874F0",
        fontWeight:"bold",
        cursor:"pointer"
    }

})

const initialvalue = {
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'Look like you are new here',
        subHeading:'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}

const LoginDialog = ({open,setopen,setAccount}) =>{

    const classes= useStyle()

    const[account,toggleAccount]=useState(initialvalue.login);
    const [signup,setSignup] = useState(signupInitialValues)

    const handleClose = () =>{
        setopen(false);
        toggleAccount(initialvalue.login);
    }

    const toggleUserAccount = () =>{
        toggleAccount(initialvalue.signup);
    }

    const oninputChange = (e) =>{
        e.preventDefault()
        setSignup({...signup,[e.target.name]:e.target.value})
        console.log(signup)
    }

    const signupUser=async()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:"flex"}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:"20px"}}>{account.subHeading}</Typography>
                    </Box>
                    { 
                        account.view=='login' ?
                    <Box className={classes.login}>
                        <TextField name="username" label="Enter Email/Mobile number"/>
                        <TextField name="password" label="Enter password"/>
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" className={classes.loginBtn}>Login</Button>
                        <Typography className={classes.text} style={{textAlign:"center"}}>OR</Typography>
                        <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                        <Typography onClick={()=>toggleUserAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                    </Box> :
                    <Box className={classes.login}>
                    <TextField onChange={(e)=>oninputChange(e)} name="firstname" label="Enter Firstname"/>
                    <TextField onChange={(e)=>oninputChange(e)} name="lastname" label="Enter Lastname"/>
                    <TextField onChange={(e)=>oninputChange(e)} name="username" label="Enter username"/>
                    <TextField onChange={(e)=>oninputChange(e)} name="email" label="Enter Email"/>
                    <TextField onChange={(e)=>oninputChange(e)} name="password" label="Enter Password"/>
                    <TextField onChange={(e)=>oninputChange(e)} name="phone" label="Enter Phone number"/>
                    <Button variant="contained" onClick={()=>signupUser()} className={classes.requestBtn}>Sign Up</Button>
                    
                </Box>
            }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;