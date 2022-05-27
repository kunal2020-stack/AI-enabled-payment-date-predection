import React from 'react';
import Typography from '@mui/material/Typography';

function Footer() {
    let copyright = String.fromCodePoint(0x00A9);
  return (
      <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',backgroundColor:'#445460'}}>
      <Typography style={{ color: 'white'}}>
        <a href='#'>Privacy Policy</a> |{copyright} 2022 Highradius Corporation. All Rights Reserved.
      </Typography>
      </div>
  );
}

export default Footer;