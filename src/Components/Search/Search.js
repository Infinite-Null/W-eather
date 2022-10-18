import React,{useState} from 'react'
import Information from '../Information/Information'
import './Search.css'
export default function Search() {
  let state;
const[weather,setWeather]=useState({location:{},
current:{}
});
const[loading,setLoading]=useState(false);
const[condition,setCondition]=useState({condition:{}});
let parsed={};
async function handleClick(){
     if(state){
      setLoading(true);
      await fetch(`https://api.weatherapi.com/v1/current.json?key=54b1be3da3b840c7901220517221510&q=${state}`)
      .then((response) => response.json()).
      then(data=>{parsed=data})
      setLoading(false);
        setWeather(parsed);
        setCondition(parsed.current.condition);
     }
    //  state.toLowerCase();
    //  console.log(state);
   

}
  return (
    <>
    <div className="input-holder">
    <div className='err'>
        <input type="text" className="search-input" onChange={(event)=>{
          state=event.target.value;
          
        }}/>
        <button className='search'  onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
        </div>
<Information 
image={loading}
condi={condition.icon?condition.icon:false}
date={weather.current.last_updated?weather.current.last_updated:'--'} 
location={weather.location.name?weather.location.name:'Search to start'} 
condition={condition.text?condition.text:'--'}
feels={weather.current.feelslike_c?weather.current.feelslike_c:'--'} 
humidity={weather.current.humidity?weather.current.humidity:'--'} 
temperature={weather.current.temp_c?weather.current.temp_c:'--'}
key={weather.current.temp_c?weather.current.temp_c:'--'}/>
    </div>
    </>
  )
}
