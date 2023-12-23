import React, { useState } from 'react'
import Header from './Header';
import { Typography } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import MedicationIcon from '@mui/icons-material/Medication';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SpaIcon from '@mui/icons-material/Spa';
import Chip from '@mui/material/Chip';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export default function LandingPage2(props) {
    const {setLandingStage} = props;
    const [stageCompleted, setStageCompleted] = useState(0)

    

    const handleStage1Complete = () => {
        setStageCompleted(1)
    }

    const handleClick = () => {
        setLandingStage(4);
      };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Header />
        <motion.div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            <div style={{ width: '100%', height: '100%', display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <motion.div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}} initial={{top: 20, opacity:0}} animate={{top:0,opacity:1}}>
                    <Typography style={{ fontSize: 100, zIndex: 1 }}>
                        REVOLUTIONAZING
                    </Typography>
                    <motion.div style={{height: '150px', marginLeft:'30px',paddingLeft:'60px', alignItems:'flex-start', display:'flex',flexDirection:'column',justifyContent:'center'}} initial={{width:'0px',opacity:0}} animate={{width:'260px',opacity:1}} transition={{delay:1,duraion:1}} onAnimationComplete={handleStage1Complete}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:'10px'}}>
                            <div className="headerIcon" style={{backgroundColor:'#DDEBF8'}}>
                                <MedicationIcon style={{fill: '#FF592A', width: '20px', height: '20px'}}  />
                            </div>
                            <div className="headerIcon" style={{backgroundColor:'#DDEBF8', marginLeft:'5px'}}>
                                <MedicationIcon style={{fill: '#FF592A', width: '20px', height: '20px'}}  />
                            </div>
                            <div className="headerIcon" style={{backgroundColor:'#DDEBF8', marginLeft:'5px'}}>
                                <MedicationIcon style={{fill: '#FF592A', width: '20px', height: '20px'}}  />
                            </div>
                        </div>
                        <Typography style={{ fontSize: 16, zIndex: 1 }}>
                            Modern Solutions,
                        </Typography>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                            <Typography style={{ fontSize: 16, zIndex: 1 }}>
                                Timeless Smiles
                            </Typography>
                        </motion.div>
                    </motion.div>                                       
                </motion.div>
                <motion.div style={{marginTop:'80px'}} initial={{top: 20, opacity:0}} animate={{top:0,opacity:1}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <motion.div style={{height: '150px', display:'flex', justifyContent:'center',alignItems:'center'}} initial={{width:'0px',opacity:0}} animate={{width:'348px',opacity:1}} transition={{delay:1,duraion:1}}>
                            <Chip label="ASSISTANCE" variant="outlined" clickable  style={{ width: '180px', backgroundColor:'#DDEBF8', color:'#FF592A', height:'50px',fontSize:'16px' }} />
                            <div className="headerIcon" style={{width:'50px', height: '50px'}}>
                                <MedicationIcon style={{fill: 'white', width: '40px', height: '40px'}}  />
                            </div>
                        </motion.div>
                        <Typography style={{ fontSize: 100, zIndex: 1 }}>
                            DENTAL
                        </Typography>
                        <motion.div style={{height: '150px', display:'flex', justifyContent:'center',alignItems:'center'}} initial={{width:'0px',opacity:0}} animate={{width:'348px',opacity:1}} transition={{delay:1,duraion:1}}>
                            <img
                                src={image1}
                                alt=""
                                style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '60px' }}
                            />
                            <div className="headerIcon" style={{width:'120px', height: '120px', backgroundColor:'#DDEBF8', marginLeft:'-20px'}}>
                                <SpaIcon style={{fill: '#FF592A', width: '100px', height: '100px'}}  />
                            </div>
                            
                        </motion.div>
                        <Typography style={{ marginLeft:'50px',fontSize: 100, zIndex: 1 }}>
                            CARE
                        </Typography>
                    </div>
                </motion.div>
                <motion.div style={{marginTop: '80px'}} initial={{top: 20, opacity:0}} animate={{top:0,opacity:1}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography style={{ fontSize: 100, zIndex: 1 }}>
                            WITH
                        </Typography>
                        <Typography style={{ marginLeft:'50px',fontSize: 100, zIndex: 1 }}>
                            TECHNOLOGY
                        </Typography>
                        <motion.div style={{height: '150px', display:'flex', justifyContent:'center', alignItems:'center'}} initial={{width:'0px',opacity:0}} animate={{opacity:1,width:'400px'}} transition={{delay:1,duraion:1}}>
                            <img
                                src={image1}
                                alt=""
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px' }}
                            />
                            <img
                                src={image2}
                                alt=""
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px',marginLeft:'-20px' }}
                            />
                            <img
                                src={image3}
                                alt=""
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px',marginLeft:'-20px' }}
                            />
                            <img
                                src={image4}
                                alt=""
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px',marginLeft:'-20px' }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div style={{marginTop: '-50px', marginLeft: '-1100px',zIndex:1000}} initial={{top: 20, opacity:0}} animate={stageCompleted === 1?{top:0,opacity:1}:{}}>
                    <motion.div>
                            <img
                                src={image3}
                                alt=""
                                style={{ width: '400px', height: '200px', objectFit: 'cover', borderRadius: '20px',marginLeft:'-20px'}}
                            />
                            <div className="headerIcon" style={{width:'40px', height: '40px', backgroundColor:'#DDEBF8', marginLeft:'390px', marginTop:'-15px'}}>
                                <PlayArrowIcon style={{fill: '#FF592A', width: '20px', height: '20px'}}  />
                            </div>
                    </motion.div>
                </motion.div>
                <motion.div
      style={{
        width: '160px',
        height: '160px',
        borderRadius: '80px',
        backgroundColor: '#FF592A',
        marginTop: '-100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer', // Add cursor pointer to indicate interactivity
      }}
      initial={{ top: 20, opacity: 0 }}
      animate={stageCompleted === 1 ? { top: 0, opacity: 1 } : {}}
      whileHover={{ scale: 1.1 }} // Add hover animation (scale up by 10%)
      onClick={handleClick} // Add onClick event
    >
      <Typography style={{ fontSize: 20, fontWeight: 'bold', color: 'white', width: '63px', textAlign: 'center' }}>
        Get Started
      </Typography>
    </motion.div>
                
            </div>
        </motion.div>
    </div>
  )
}
