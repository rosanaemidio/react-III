import React from 'react'

const Input = (props) => {
    const {type,placeholder,change}=props
    return(
        <div>
            <label></label>
            <input type={type} placeholder={placeholder} onChange={change} ></input>
        </div>
    )
    
}
export default Input;