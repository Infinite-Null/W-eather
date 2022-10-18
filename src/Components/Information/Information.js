import React from 'react'
import './information.css'
export default function Information(props) {
  let [...k]=props.date.slice(0,10);
  return (
    <div className="card text-center m-5 main" style={{borderRadius:'20px',backgroundColor:"#E69A8DFF",color:'#5F4B8BFF',fontWeight:'900',boxShadow:'10px 15px 15px rgba(0,0,0,0.2)'}}>
    <div className="card-header">
      {props.location}
    </div>
    <div className="card-body">
      <img className='loading' src='https://cdn.dribbble.com/users/742876/screenshots/3027792/dribble-4seasons_final.gif' alt='...' style={{display:props.image?"inline-block":'none'}}/>
      <img src={props.condi?props.condi:'https://cdn.dribbble.com/users/1480296/screenshots/4918336/homework_lesson3_2.gif'} alt='.' style={{borderRadius:'20px',width:'120px',height:'120px',boxShadow:'0px 0px 45px rgba(0,0,0,0.1)',borderRadius:'300px',border:'2px solid #808080', marginBottom:'30px'}}/>
        <h5 className="card-title">Condition</h5>
      <p className="card-text">{props.condition}</p>
      <h5 className="card-title">Temperature</h5>
      <p className="card-text">{props.temperature}°C</p>
      <h5 className="card-title">Humidity</h5>
      <p className="card-text">{props.humidity}</p>
      <h5 className="card-title">Feels Like</h5>
      <p className="card-text">{props.feels}°C</p>
    </div>
    <div className="card-footer">
     {k}
    </div>
  </div>
  )
}
