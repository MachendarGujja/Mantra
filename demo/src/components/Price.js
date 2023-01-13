import React from 'react'
import './Styles.css'
import Button from '@mui/material/Button';

const Price = ({card}) => {
    const res = card.name === 'For Enterprises'?'black':'white';
    // console.log(res)
  return (
    <div className={res}>
        <p style={{color:'grey'}}>{card.name}</p>
        {card.cost!=='Free'?<div style={{display:'flex',alignItems:'center',padding:0,margin:0,lineHeight:0}}><h1>${card.cost}</h1><p style={{color:'grey',marginTop:30,marginLeft:5,fontSize:12}}>/MO</p></div>:<h1>{card.cost}</h1>}
        <h4>{card.descri}</h4>
        <ul>
        {card.points.map((e)=>
            <li key={e}>{e}</li>
        )}
        </ul>
        {res==='white'?
        <Button variant="outlined" style={{color:'black',border:'none',borderRadius:20,backgroundColor:'grey',width:'80%',marginLeft:20,zIndex:0}}>{card.but}</Button>:
        <Button variant="outlined" style={{color:'white',border:'none',borderRadius:20,backgroundColor:'blue',marginLeft:20,width:'80%'}}>{card.but}</Button>
        }
        </div>
  )
}

export default Price