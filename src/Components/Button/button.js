import React from 'react'
import './button.css'

const click =()=>{
    window.alert('A label do botão é para comprar uma passagem')
}

const Button = (props) => {
    return (
        <button className='btn' 
        onClick={() => click()}>
            {props.label}
        </button>
    )
}

export default Button
