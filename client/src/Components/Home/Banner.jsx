import { makeStyles, mergeClasses } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../Constant/Data';

const useStyle=makeStyles({
    image:{
        width:'100%',
        height:280
    },
    carousel:{
        marginTop:10
    }
    
})

const Banner =()=>{

    const classes= useStyle();

    return <div>

         <Carousel 
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    backgroundColor:"#ffffff",
                    color:'#494949',
                    marginLeft:0,
                    marginRight:0,
                    borderRadius:0,
                    height:'100px',
                    marginTop:"-25px"
                }
            }}
            className={classes.carousel}
         >
            {
                 bannerData.map(image=>(
                     <img src={image} className={classes.image}/>
                 ))
            }
        </Carousel>
    </div>
}

export default Banner;