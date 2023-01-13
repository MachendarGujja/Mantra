import React from 'react';
import './Content.css'
import Price from './Price';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Card from './Card';
import { useState,useEffect } from 'react';

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [user,setUser] = useState([])
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormErrors(validate())
    setIsSubmit(true)
    
  // }
  };
  console.log(user);
  useEffect(() => {
    const apiCall = async()=>{
      try {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        var res = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            designation: designation,
            contact:contact,
          }),
        });
        let resJson = await res.json();
        setUser(resJson.data);
        if (res.status === 200) {
          setName("");
          setEmail("");
          setContact("")
          setDesignation("")
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      }
      } catch (err) {
        console.log(err);
      }
    }
      apiCall()
      // eslint-disable-next-line
  }, [formErrors]);
  

  const validate = () => {
    const errors = {};
    if (name.length<1) {
      errors.username = "**Username is required!";
    }
    if (designation.length<1) {
      errors.designation = "**Designation is required!";
    }
    if (contact.length<1) {
      errors.contact = "**Contact is required!";
    }
    if (email.length<1) {
      errors.email = "**Email is required!";
    } 
    return errors;
  };

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
        <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit}>
          <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginRight:15}}>
          <label htmlFor='usernames' className='tit'>Name</label>
          <input type='text' name="username" id="usernames" className='in' placeholder='Name' value={name}
              onChange={(e) => setName(e.target.value)}/>
          <p style={{color:'red'}}>{formErrors.username}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor='email' className='tit'>Email</label>
          <input type='email' id='email' name="email" className='in' value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
          <p style={{color:'red'}}>{formErrors.email}</p>
          </div>
          </div>
          <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginRight:15}}>
          <label htmlFor='designation' className='tit'>Designation</label>
          <input type='text' id='designation' name='designation' className='in' placeholder='Designation' value={designation}
              onChange={(e) => setDesignation(e.target.value)}/>
          <p style={{color:'red'}}>{formErrors.designation}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor='phone' className='tit'>Contact</label>
          <input type='phone' id='phone' name='contact' className='in' placeholder='Contact' value={contact}
              onChange={(e) => setContact(e.target.value)}/>
          <p style={{color:'red'}}>{formErrors.contact}</p>
          </div>
          </div>
          <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button type='submit' className='btn'>Submit</button>
          </div>
          
        </form>
        <div style={{color:'white',fontSize:20}}>{message ? <p>{message}</p> : null}</div>
      </div>
    </div>
  )
}





export default Content