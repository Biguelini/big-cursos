import './CardCursos.css'
import React from 'react'

export default function App(props) {
    return (
        <div className="cursosCard">
            <img
                src={process.env.PUBLIC_URL + '/images/' + props.curso + '.png'}
                alt=""
                className="img"
            />
            <div className="textInfo">
                <strong>{props.curso}</strong>
                <span>Duração: {props.duracao}</span>
                <span>Prof {props.instrutor}</span>
            </div>
        </div>
    )
}
