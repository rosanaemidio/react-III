import React from 'react'

import './styles.css'

function Botao(props){
    return(
        <div>
            <button className={props.classe} onClick={props.onClick}>{props.nome}</button>
        </div>
    )
}
export default Botao