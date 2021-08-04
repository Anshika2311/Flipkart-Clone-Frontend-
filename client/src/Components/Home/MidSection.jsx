import {ImageURL} from '../../Constant/Data'
import { Box ,makeStyles} from '@material-ui/core'

const useStyle=makeStyles({
    
    wrapper:{
        display:"flex",
        marginTop:20,
        justifyContent:"space-between"
    }

})

const MidSection = () =>{

    const classes= useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
        <Box className={classes.wrapper}>
            {
                ImageURL.map(image=>(
                    <img src={image} style={{width:"33%"}}/>
                ))
            }
        </Box>
        <img src={coronaURL} style={{width:"100%",marginTop:"20px"}}/>
        </>
    )
}

export default MidSection;