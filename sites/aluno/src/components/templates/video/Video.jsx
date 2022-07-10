import './Video.css'
import PrimaryButton from '../../buttons/PrimaryButton'
import React from 'react'

export default function App(props) {
    return (
        <div className="videoContainer">
            <div className="textContainer">
                <div className="text">
                    <h2>
                        A <span>maior</span> plataforma de ensino de
                        &lt;tecnologia/&gt; do Paraná.
                    </h2>
                    <p>
                        Se apriomore na sua área ou entre em uma nova sem
                        complicações. Seja melhor com os melhores.
                    </p>
                </div>
                <PrimaryButton text="Saiba mais!" />
            </div>
            <iframe
                className="video"
                src="https://www.youtube.com/embed/ERjL6Ci1YIY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    )
}
