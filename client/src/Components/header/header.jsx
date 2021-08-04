
import {AppBar,Toolbar, makeStyles,withStyles, Typography,Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

//components
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

const useStyle=makeStyles({
    header:{
        background:"#2874f0",
        height:"55px"
    },
    logo:{
        width:75
    },
    suburl:{
        marginLeft:4,
        width:10,
        height:10
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:"none",
        color:"#fff"
    },
    subHeading:{
        fontSize:10,
        fontStyle:'italic'
    }
})

const ToolBar = withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);

const Header=()=>{
    const classes=useStyle()
    const logourl ='https://static-assets-web.​flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const suburl ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
    return<div>
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={logourl} className={classes.logo}/>
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:"#FFE500"}}>Plus</Box></Typography>
                        <img src={suburl} className={classes.suburl}/>
                    </Box>
                </Link>
                <SearchBar/>
                <HeaderButtons/>
            </ToolBar>
        </AppBar>
    </div>
}

export default Header;