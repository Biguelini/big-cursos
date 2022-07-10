import './CTA.css'
import PrimaryButton from '../../buttons/PrimaryButton'
import React from 'react'

export default function App(props) {
    return (
        <div className="CTA">
            <img
                className="imgCta"
                src={process.env.PUBLIC_URL + '/images/imgCta.svg'}
                alt=""
            />
            <div className="containerCta">
                <h1 className="titleCta">
                    A plataforma que ensina a <span>programar</span>, a{' '}
                    <span>aprender</span> e a <span>trabalhar</span>.
                </h1>
                <PrimaryButton text="Quero aprender!" />
            </div>
        </div>
    )
}
