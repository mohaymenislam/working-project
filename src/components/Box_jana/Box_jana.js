import React, { useState } from 'react'
import './Box_jana.css'

function Box_jana() {
    const [Horizontal , setHorizontal] = useState(10)
    const [Vatical , setVatical] = useState(10)
    const [Blur , setBlur] = useState(10)
    const [Color , setColor] = useState("black")
    const [ChackOn , setChackOn] = useState(false)
    
  return (
    <>
        <div className="app">working-project
        <div className="controls">
             <label>Horizontal Leght</label>
                <input type="range"  min="-200" max="200"  value={Horizontal} onChange={(e) => setHorizontal(e.target.value)}/>
              
   
                 <label>Verticle liegt</label>
                <input type="range"  min="-200" max="200"  value={Vatical} onChange={(e) => setVatical(e.target.value)}/>
                  
                <label>Blur</label>
                <input type="range"  min="0" max="200"  value={Blur} onChange={(e) => setBlur(e.target.value)}/>
                <label>Color change</label>
                <input type="color"    value={Color} onChange={(e) => setColor(e.target.value)}/>
                    <div className="switch">
                        <label>
                          Outline
                             <input type="checkbox" checked={ChackOn} onChange={()=> setChackOn(!ChackOn)}/>
                       <span className="lever"></span>
                           inset
                          </label>
                    </div>
           </div>
              <div className="output">
                  <div className="box" style={{boxShadow:  ` ${ChackOn ? 'inset' : ''} ${Horizontal}px  ${Vatical}px ${Blur}px ${Color}`}}>
                    <p>BOX-Shodow: {Horizontal}px {Vatical}px {Blur}px {Color}</p>
                 </div>
             </div>
        </div>
     
    </>
  )
}

export default Box_jana