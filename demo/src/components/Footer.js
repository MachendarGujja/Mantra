import React from 'react'

const Footer = () => {
  return (
    <div style={{width:'100%',height:200,display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex',width:'100%',padding:0,margin:0,justifyContent:'space-evenly'}}>
        <div>
        <h4>Opalin &#174;</h4>
        <p>We're a completely remote company, working across twenty<br/> countries with over 20,000 customers.</p>
        </div>
        <div>
          <h4>Info</h4>
          <p>Getting Started</p>
          <p>Resources</p>
          <p>Design</p>
          <p>Tutorials</p>
          <p>Pricing</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>Getting Started</p>
          <p>Resources</p>
          <p>Design</p>
          <p>Tutorials</p>
          <p>Pricing</p>
        </div>
        <div>
          <h4>Connect</h4>
          <p>Getting Started</p>
          <p>Resources</p>
          <p>Design</p>
          <p>Tutorials</p>
          <p>Pricing</p>
        </div>
      </div>
      <div style={{display:'flex',width:'100%',color:'#D3D3D3',padding:0,margin:0,justifyContent:'center'}}>
        <p>HTML Template by UI/UX Assets- &#169;2023,all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer