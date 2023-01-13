import React from 'react'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './Header.css'

const Header = () => {
  return (
    <div className='head'>
        <AccountTreeIcon style={{paddingLeft:7}}/>
        <h3 className='opalin'>Opalin</h3>
        <div style={{display:'flex',justifyContent:'space-between',width:'90%',paddingLeft:10}}>
        <div style={{display:'flex'}}>
        <button variant="text" className='head-but'>Home</button>
        <button variant="text" className='head-but'>Pricing</button>
        <button variant="text" className='head-but'>About</button>
        </div>
        <div style={{display:'flex'}}>
        <button variant="text" className='head-but'>LogIn</button>
        <button variant="outlined" style={{color:'white',cursor:'pointer',border:'none',borderRadius:20,backgroundColor:'grey',marginLeft:20}}>SignUp</button>
        </div>
        </div>
    </div>
  )
}

export default Header