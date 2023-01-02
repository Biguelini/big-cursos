import './ListaCursos.css'
import CardCursos from '../../cards/CardCursos'
import React from 'react'

export default function App(props) {
    return (
        <div className="listaCursos">
            <h1>Cursos mais vistos</h1>
            <div className="listaCursosGrid">
                <CardCursos
                    curso="Flutter"
                    duracao="24h"
                    instrutor="Jurandir"
                />
                <CardCursos
                    curso="JavaScript"
                    duracao="40h"
                    instrutor="Luiza"
                />
                <CardCursos curso="Python" duracao="50h" instrutor="Luiz" />
                <CardCursos curso="C++" duracao="120h" instrutor="Armando" />
                <CardCursos curso="TypeScript" duracao="7h" instrutor="Dani" />
                <CardCursos curso="Git" duracao="5h" instrutor="Felipe" />
            </div>
        </div>
    )
}
