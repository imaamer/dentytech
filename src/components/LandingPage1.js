import React, { useState } from 'react'
import Header from './Header';
import { Typography } from '@mui/material';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import { motion, useAnimation } from "framer-motion";
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chip from '@mui/material/Chip';



export default function LandingPage1(props) {
    const {setLandingStage} = props;
    const [cardNumber, setCardNumber] = useState(0);
    const [wrapContent, setWrapContent] = useState(false);

    const controls = useAnimation();

    const handleClick = async () => {
        setCardNumber(prevCount => prevCount + 1);
      // Trigger animation by updating the y property
      await controls.start({
        y: 10, // Move down by 10 pixels
        transition: { duration: 0.5 }, // Optional: Add a transition duration
      });
  
      // Optionally, reset the animation after a delay
      await controls.start({
        y: 0, // Reset to the original position
        transition: { duration: 0.5 },
      });

      
    };

    const handleAnimationComplete = () => {
        setWrapContent(true);
    }

    const handleContentWrapped = () => {
        if(cardNumber > 0)
        setLandingStage(3)
    }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Header />
            <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }} initial={{opacity:0}} animate={wrapContent?{y:-2000}:{opacity:1}} onAnimationComplete={handleContentWrapped}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <motion.div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div style={{ width: '500px', height: '600px', borderRadius: '10px', overflow: 'hidden', rotate: 335, marginBottom: '-300px' }}  animate={cardNumber > 3?{y: -1200, rotate: 360}:{}} transition={{ delay: .3, duration: 1 }} onAnimationComplete={handleAnimationComplete}>
                            <img
                                src={image1}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <div style={{ position: 'absolute', bottom: '50px', zIndex: 1, display:'flex' }}>
                                <div style={{width: '30px', height: '30px',borderRadius: '50%', display:'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
                                    <SettingsIcon style={{fill: 'black', width: '20px', height: '20px'}}  />
                                </div>
                                <Chip label="Convenience" variant="contained" clickable  style={{ width: '100px', backgroundColor:'white' }} />
                            </div>
                        </motion.div>
                        <motion.div style={{ width: '500px', height: '600px', borderRadius: '10px', overflow: 'hidden', rotate: 340, position: 'absolute', top: 0, left: 0, display:'flex', justifyContent:'center' }} animate={cardNumber > 2?{y: -1200, rotate: 360}:{rotate:338}} transition={{ delay: .3, duration: 1 }}>
                            <img
                                src={image2}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <div style={{ position: 'absolute', bottom: '50px', zIndex: 1, display:'flex' }}>
                                <div style={{width: '30px', height: '30px',borderRadius: '50%', display:'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
                                    <SettingsIcon style={{fill: 'black', width: '20px', height: '20px'}}  />
                                </div>
                                <Chip label="Convenience" variant="contained" clickable  style={{ width: '100px', backgroundColor:'white' }} />
                            </div>
                        </motion.div>
                        <motion.div style={{ width: '500px', height: '600px', borderRadius: '10px', overflow: 'hidden', rotate: 345, position: 'absolute', top: 0, left: 0, display:'flex', justifyContent:'center' }} animate={cardNumber > 1?{y: -1200, rotate: 360}:{rotate:343}} transition={{ delay: .3, duration: 1 }}>
                            <img
                                src={image3}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <div style={{ position: 'absolute', bottom: '50px', zIndex: 1, display:'flex' }}>
                                <div style={{width: '30px', height: '30px',borderRadius: '50%', display:'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
                                    <SettingsIcon style={{fill: 'black', width: '20px', height: '20px'}}  />
                                </div>
                                <Chip label="Convenience" variant="contained" clickable  style={{ width: '100px', backgroundColor:'white' }} />
                            </div>
                        </motion.div>
                        <motion.div style={{ width: '500px', height: '600px', borderRadius: '10px', overflow: 'hidden', rotate: 350, position: 'absolute', top: 0, left: 0, display:'flex', justifyContent:'center' }} animate={cardNumber > 0?{y: -1200, rotate: 360}:{rotate:348}} transition={{ delay: .3, duration: 1 }}>
                            <img
                                src={image4}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <div style={{ position: 'absolute', bottom: '50px', zIndex: 1, display:'flex' }}>
                                <div style={{width: '30px', height: '30px',borderRadius: '50%', display:'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
                                    <SettingsIcon style={{fill: 'black', width: '20px', height: '20px'}}  />
                                </div>
                                <Chip label="Convenience" variant="contained" clickable  style={{ width: '100px', backgroundColor:'white' }} />
                            </div>
                        </motion.div>
                        
                    </motion.div>

                    <Typography style={{ fontSize: 200, zIndex: 1 }}>
                        OUR ADVANTAGES
                    </Typography>
                </div>
            </motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '50%',
                    rotate: 90,
                    zIndex: 3,
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    borderColor: 'black',
                    borderStyle: 'solid',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                animate={wrapContent?{opacity:0}:controls}
                transition={wrapContent?{duration:1}:{}}
                whileHover={{ scale: 1.1 }} // Add hover animation (scale up by 10%)
                onClick={handleClick}
                >
                <div
                    style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginTop: '35px',
                    marginLeft: '-50px',
                    }}
                >
                    <ArrowForwardIcon style={{ fill: 'black', width: '30px', height: '30px' }} />
                </div>
            </motion.div>
        </div>
    
  )
}
