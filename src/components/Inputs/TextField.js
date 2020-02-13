import React from 'react';
import './Text.css'


const TextField = (props)=>{
    return(
        <div className="Text">
            <input  placeholder={props.label}/>
        </div>
    )

}

export default TextField