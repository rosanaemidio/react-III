import React from 'react'
// import imagem from '../../assets/img/eu.jpg'

import './Card.css'
function Card(props){
    const {img,title,text} = props.lalala
 return(
        <div className='card'>
            <img src={img} className="card-img"></img>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )

}
    

export default Card;