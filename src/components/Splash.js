import React from 'react'
import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MedicationIcon from '@mui/icons-material/Medication';
import { Typography } from '@mui/material';

export default function Splash(props) {

    const [stage1Completed, setStage1Completed] = React.useState(false);
    const [stage2Completed, setStage2Completed] = React.useState(false);
    const [stage3Completed, setStage3Completed] = React.useState(false);
    const [stage2CompleteCount, setStage2CompleteCount] = React.useState(0);

    const {setLandingStage} = props;

    const stage1AnimationCompleted = () => {
        setStage1Completed(true);
    };

    const stage2AnimationCompleted = () => {
        setStage2Completed(true);
        setStage2CompleteCount(prevCount => prevCount + 1);
        if(stage2CompleteCount === 1) {
            setStage3Completed(true);
        }
    }

    const stage4AnimationCompleted = () => {
        setTimeout(() => {
            setLandingStage(2);
        }, 500);
    }

  return (
    <div style={{backgroundColor: '#FFFDF0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display:'flex'}}>
        {!stage3Completed&&<>
                <motion.div className="iconBox iconBox1" initial={{x:0, y:0}} animate={stage3Completed?{opacity: 0}:stage2Completed?{x: 130, y: 45, rotate: 0,opacity: 0}:stage1Completed?{y: 50, rotate:90}:{}} transition={{ delay: .3, duration: 0.6 }} >
                    <ArrowForwardIcon style={{fill: '#FF592A', width: '50px', height: '50px'}}  />
                </motion.div>
                {!stage1Completed&&<motion.div className="specialIconBox iconBox2" initial={{ x:10, y:0, width: 200 }} animate={{width: 60, borderRadius: '50% ' }} transition={{ delay: 1, duration: 0.4 }} onAnimationComplete={stage1AnimationCompleted}>
                    <Typography style={{ color: 'white', fontWeight: 20 }}>Dentist</Typography>
                </motion.div>}
                {stage1Completed&&<motion.div className="iconBox iconBox2" initial={{ x: 10, y:0 }} animate={stage3Completed?{opacity: 0}:stage2Completed?{x: 60, y: 50, rotate: 0,opacity: 0}:stage1Completed?{y: 50, rotate:90}:{}} transition={{ delay: .4, duration: 0.6 }} onAnimationComplete={stage2AnimationCompleted} >
                    <ArrowForwardIcon style={{fill: 'white', width: '50px', height: '50px'}}  />
                </motion.div>}
                
                {!stage1Completed&&<motion.div className="specialIconBox" initial={{ x:100, y:100, width: 200 }} animate={{width: 60, borderRadius: '50% ' }} transition={{ delay: 1, duration: 0.4 }}>
                    <Typography style={{ color: '#FF592A', fontSize: 20, }}>Assistance</Typography>
                </motion.div>}
                {stage1Completed&&<motion.div className="iconBox" initial={{x: 100, y: 100, rotate: 180}} animate={stage3Completed?{opacity: 0}:stage2Completed?{x: 10, y: 50, rotate: 180,opacity: 0}:stage1Completed?{y: 50, rotate:270}:{}} transition={{ delay: .3, duration: 0.6 }}>
                    <ArrowForwardIcon style={{fill: '#FF592A', width: '50px', height: '50px'}}  />
                </motion.div>}
                <motion.div className="iconBox iconBox2" initial={{x: 110, y: 100}} animate={stage3Completed?{opacity: 0}:stage2Completed?{x: -50, y: 50,opacity: 0}:stage1Completed?{y: 50}:{}} transition={{ delay: .4, duration: 0.6 }}>
                    <MedicationIcon style={{fill: 'white', width: '50px', height: '50px'}}  />
                </motion.div>
            </>}
            
            <motion.div className="iconBox iconBox2" initial={{x:30, y: 50, opacity: 0}} animate={stage3Completed?{opacity: 1}:{}}>
                <MedicationIcon style={{fill: 'white', width: '50px', height: '50px'}}  />
            </motion.div>
            <motion.div className="specialIconBox" initial={{ x:-100, y:120, opacity:0 }} animate={stage3Completed?{opacity: 1, y: 110}:{}} transition={{ delay: .4, duration: 0.2 }} onAnimationComplete={stage4AnimationCompleted}>
                    <Typography style={{ color: '#FF592A', fontSize: 20, }}>DENTYTECH</Typography>
            </motion.div>

        </div>
        
    </div>
  )
}
