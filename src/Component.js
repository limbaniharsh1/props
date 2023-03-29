import React from 'react';
import './Component.css';

function Component(props) {
    // console.log(props)
    const sk = props.skills
    console.log(sk)
    
  return (
    <div>
      <div>
        <img src={props.img} />
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <span>skills :</span>
        {
            sk.map((v,i)=>{
                
                return<h6>{v}</h6>
                console.log(v)
            })
        }
      </div>
    </div>
  )
}

export default Component
