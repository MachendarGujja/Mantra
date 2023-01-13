import React from 'react'
import './Styles.css'

const Card = ({data}) => {
  return (
    <div className='item-css'>
        <div style={{height:70,width:70,backgroundColor:'lightgrey',borderRadius:35,display:'flex',alignItems:'center',justifyContent:'center'}}>{data.icon}</div>
        <h5 style={{lineHeight:0}}>{data.name}</h5>
        <h4 className='des' style={{color:'grey',margin:0}}>{data.descri}</h4>
    </div>
  )
}

export default Card