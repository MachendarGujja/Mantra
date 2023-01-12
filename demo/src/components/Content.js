import React from 'react';
import './Content.css'
import Price from './Price';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Card from './Card';
// import TextField from '@mui/material/TextField';

const price = [
  {
    id:1,
    name:'Free Forever',
    cost:'Free',
    descri:'Ut enim ad minima veniam, quis nostrem exercitationem.',
    points:['At vero eos et accusamas','At vero eos et accuasmas','At vero es et accusamas'],
    but:'Sign Up For Free'
  },
  {
    id:2,
    name:'For Teams',
    cost:'20',
    descri:'Ut enim ad minima veniam, quis nostrem exercitationem.',
    points:['At vero eos et accusamas','At vero eos e accusamas','At vro eos et accusamas'],
    but:'Start 14-Day Trail'
  },
  {
    id:3,
    name:'For Enterprises',
    cost:'140',
    descri:'Ut enim ad minima veniam, quis nostrem exercitationem.',
    points:['At vero eos et accusamas','At veo eos et accusamas','At vero eos et acusamas'],
    but:'Start 14-Day Trail'
  }
]
const data = [
  {
    id:1,
    name:'Minimal Design',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  },
  {
    id:2,
    name:'Rocket Fast',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  },
  {
    id:3,
    name:'Framework',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  },
  {
    id:4,
    name:'Style Guide',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  }
  ,
  {
    id:5,
    name:'CSS+SASS',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  }
  ,
  {
    id:6,
    name:'Customizable',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  }
  ,
  {
    id:7,
    name:'Modular Design',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  }
  ,
  {
    id:8,
    name:'HTML5 Valid',
    descri:'Sed ut perspiciats unde omnis iste natus.',
    icon:<AccountTreeIcon/>
  }
]

const Content = () => {
  return (
    <div className='content'>
      <div className='content-css'>
      <h1 style={{paddingTop:40}}>Find the perfect plan for your business.</h1>
      <div className='card-css'>
      {price.map((e)=>
      <Price card={e} key={e.id}/>)
      }</div>
      </div>
      <div className='item'>
      {data.map((e)=>
      <Card data={e} key={e.id}/>
      )}
      </div>
      <div className='form'>
        <div><h2 className='title'>Lorem Ipsum</h2></div>
        <form style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginRight:15,marginBottom:15}}>
          <label htmlFor='name' className='tit'>Name</label>
          <input type='text' id='name' className='in' placeholder='Name'/>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor='email' className='tit'>Email</label>
          <input type='email' id='email' className='in' placeholder='Email'/>
          </div>
          </div>
          <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginRight:15,marginBottom:15}}>
          <label htmlFor='designation' className='tit'>Designation</label>
          <input type='text' id='designation' className='in' placeholder='Designation'/>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor='phone' className='tit'>Contact</label>
          <input type='phone' id='phone' className='in' placeholder='Contact'/>
          </div>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Content