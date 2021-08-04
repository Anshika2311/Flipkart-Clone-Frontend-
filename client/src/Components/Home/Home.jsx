import { Box,makeStyles } from "@material-ui/core";
import NavBar from "./Navbar";
import Banner from './Banner';
import Slide from "./Slide";
import MidSection from "./MidSection";

const useStyle=makeStyles({
    component:{
        padding:10,
        backgroundColor:"#f2f2f2",
        marginTop:-50,
    },

    rightwrapper:{
        background:"#fffff",
        padding:"5px",
        margin:"12px 0 0 10px",
        width:"17%"
    }
})

const Home=()=>{

    const classes=useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return  <div>
        <NavBar/>
        <Box className={classes.component}>
            <Banner/>
            <Box style={{display:"flex"}}>
                <Box style={{width:"83%"}}>
                    <Slide
                        timer={true}
                        title="Deal of the Day"
                    />
                </Box>
                <Box className={classes.rightwrapper}>
                    <img src={adURL} style={{width:"230px"}}/>
                </Box>
            </Box>
            <MidSection/>
            <Slide 
                timer={false} 
                title="Discounts for You"
            />
            <Slide 
                timer={false}
                title="Suggested Items"
            />
            <Slide 
                timer={false}
                title="Top Selection"    
            />
            <Slide 
                timer={false}
                title="Recommend Items"
            />
            <Slide 
                timer={false}
                title="Bestseller"
            />
        </Box>
        </div>
}

export default Home;