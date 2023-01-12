import React from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './Header.css'

const Header = () => {
  return (
    <div className='head'>
        <AccountTreeIcon style={{paddingLeft:7}}/>
        <h3>Opalin</h3>
        <div style={{display:'flex',justifyContent:'space-between',width:'90%',paddingLeft:10}}>
        <div>
        <Button variant="text" style={{color:'black',marginLeft:20}}>Home</Button>
        <Button variant="text" style={{color:'black',marginLeft:20}}>Pricing</Button>
        <Button variant="text" style={{color:'black',marginLeft:20}}>About</Button>
        </div>
        <div>
        <Button variant="text" style={{color:'black',marginLeft:20}}>LogIn</Button>
        <Button variant="outlined" style={{color:'white',border:'none',borderRadius:20,backgroundColor:'grey',marginLeft:20}}>SignUp</Button>
        </div>
        </div>
    </div>
  )
}

export default Header