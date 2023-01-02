import './DepoimentoCard.css'
import React from 'react'

export default function App(props) {
    return (
        <div className="depoimentoCard">
            <div className="info">
                <div className="img"></div>
                <div className="textInfo">
                    <strong>{props.name}</strong>
                    <span>Turma {props.turma}</span>
                </div>
            </div>
            <span className='depoimentoText'>&#34;{props.depoimento}&#34;</span>
        </div>
    )
}
