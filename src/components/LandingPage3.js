import React from 'react';
import Header from './Header';
import { motion, useAnimation } from "framer-motion";
import SpaIcon from '@mui/icons-material/Spa';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export default function LandingPage3() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Header />
        <motion.div style={{ flex: 1, display: 'flex',height:'calc(100vh - 100px)', flexDirection: 'column', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex',flexDirection:'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{width:'50%', height:'100%', display:'flex', justifyContent:'center'}}>
                    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <motion.div style={{display:'flex', alignItems:'center', marginBottom:'20px'}} initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:.4,duration:1}}>
                            <div className="headerIcon" style={{width:'40px', height: '40px', backgroundColor:'#DDEBF8'}}>
                                <SpaIcon style={{fill: '#FF592A', width: '30px', height: '30px'}}  />
                            </div>
                            <div className="headerIcon" style={{width:'40px', height: '40px', backgroundColor:'#DDEBF8', marginLeft: '15px'}}>
                                <SpaIcon style={{fill: '#FF592A', width: '30px', height: '30px'}}  />
                            </div>
                            <div className="headerIcon" style={{width:'40px', height: '40px', backgroundColor:'#DDEBF8', marginLeft:'15px'}}>
                                <SpaIcon style={{fill: '#FF592A', width: '30px', height: '30px'}}  />
                            </div>
                        </motion.div>
                        <motion.div style={{marginBottom:'20px', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'}} initial={{opacity:0, y:200}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:1}}>
                            <Typography style={{ fontSize: 80 }}>
                                    EXPLORE OUR
                            </Typography>
                            <Typography style={{ fontSize: 80 }}>
                                    SERVICE, MAKE
                            </Typography>
                            <Typography style={{ fontSize: 80 }}>
                                    YOUR SMILE SHINE
                            </Typography>
                        </motion.div>
                        <motion.div style={{display:'flex', alignItems:'center'}}  initial={{opacity:0, y:200}} animate={{opacity:1,y:0}} transition={{delay:.4, duration:1}}>
                            <Chip label="Get The App" variant="contained" clickable  style={{ width: '180px', backgroundColor:'#FF592A', color:'white', height:'40px',fontSize:'16px' }} />
                            <Chip label="Meet The Team" variant="outlined" clickable  style={{ width: '180px', height:'40px',fontSize:'16px', marginLeft:'10px' }} />
                        </motion.div>
                    </div>
                </div>
                
                <div style={{ width:'50%', height:'100%', display:'flex', justifyContent:'center'}}>
                    <motion.div style={{width: '50%', height:'100%'}}>
                        <motion.div style={{height: '100%'}} animate={{ y: [-200, -400, -600, -800, -1000] }} transition={{ duration: 10, repeat: Infinity }} while={{ y: -1000 }}>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                        </motion.div>
                    </motion.div>
                    <motion.div style={{width: '50%', height:'100%'}}>
                    <motion.div style={{height: '100%'}} initial={{y:-1000}} animate={{ y: [-900, -700, -500, -300, -100, 0] }} transition={{ duration: 10, repeat: Infinity }} while={{ y: 0 }}>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image1} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image2} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                            <img src={image3} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px' }}/>
                            <img src={image4} alt="" style={{ width: '400px',height:'500px', objectFit: 'cover', borderRadius: '10px', marginTop:'10px' }}/>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
