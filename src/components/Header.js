import React from 'react'
import Chip from '@mui/material/Chip';
import SegmentIcon from '@mui/icons-material/Segment';
import MedicationIcon from '@mui/icons-material/Medication';
import { Typography } from '@mui/material';

export default function Header() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', marginTop: '20px'}}>
        <div style={{display:'flex', alignItems: 'center', marginLeft: '20px'}}>
            <Chip label="Menu" variant="outlined" clickable  style={{ width: '100px' }} />
            <Chip variant="outlined" clickable icon={<SegmentIcon />} />
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
          <div className="headerIcon">
                    <MedicationIcon style={{fill: 'white', width: '20px', height: '20px'}}  />
          </div>
          <Typography style={{fontSize: 14, marginLeft: '10px' }}>DENTYTECH</Typography>
        </div>
        <div style={{display:'flex', alignItems: 'center', marginRight: '20px'}}>
            <Chip label="Login" variant="outlined" clickable  style={{ width: '100px' }} />
            <Chip label="Sign Up" variant="outlined" clickable  style={{ width: '100px', backgroundColor: '#FF592A', color: 'white' }} />
        </div>
    </div>
  )
}
