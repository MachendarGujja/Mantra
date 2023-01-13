import React from 'react'
import './Styles.css'
// import Button from '@mui/material/Button';

const Price = ({card}) => {
    const res = card.name === 'For Enterprises'?'black':'white';
    // console.log(res)
  return (
    <div className={res}>
        <p className='card-name' style={{color:'grey'}}>{card.name}</p>
        {card.cost!=='Free'?<div className='card-price' style={{display:'flex',alignItems:'center',padding:0,margin:0,lineHeight:0}}><h1>${card.cost}</h1><p className='card-mo' style={{color:'grey',marginLeft:5}}>/MO</p></div>:<h1 className='free-price'>{card.cost}</h1>}
        <h4 className='card-descri'>{card.descri}</h4>
        <ul className='card-list'>
        {card.points.map((e)=>
            <li key={e}>{e}</li>
        )}
        </ul>
        {res==='white'?
        <button variant="outlined" className='card-but' style={{color:'black',cursor:'pointer',border:'none',borderRadius:20,backgroundColor:'grey',width:'80%',marginLeft:20,zIndex:0}}>{card.but}</button>:
        <button variant="outlined" className='card-but' style={{color:'white',cursor:'pointer',border:'none',borderRadius:20,backgroundColor:'blue',marginLeft:20,width:'80%'}}>{card.but}</button>
        }
        </div>
  )
}

export default Price