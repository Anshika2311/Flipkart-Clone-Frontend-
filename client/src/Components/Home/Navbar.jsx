import { Box,Typography,makeStyles, Container } from '@material-ui/core';
import {navData} from '../../Constant/Data'

const useStyle=makeStyles({
    component:{
        display:'flex',
        margin:'55px 130px',
        justifyContent:"space-between",
        border:"1px black"
    },
    container:{
        textAlign:'center',
        padding:'12px 8px',
    },
    image:{
        width:64
    },
    text:{
        fontSize:14,
        fontWeight:560
    }
})

const NavBar = () => {

    const classes = useStyle()

    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;