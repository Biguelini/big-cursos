import './CoursePages.css'

import { useParams } from 'react-router-dom'
export default function Index() {
    const { id } = useParams()
    return (
        <div className="curso">
            <span className="category">
                <a href="">Desenvolvimento</a>
            </span>
            <video
                controls
                poster="https://i.ytimg.com/vi/8i4ltPu5a5w/maxresdefault.jpg"
            >
                <source
                    src={process.env.PUBLIC_URL + '/videos/video.mp4'}
                    type="video/mp4"
                />
            </video>

            <h1>Curso JavaScript</h1>
            <h3 className="subtitle">
                Aprenda a criar aplicações em JavaScrpt
            </h3>
            <p>Prof Jurandir</p>
            <fieldset className="learn">
                <h3>O que você aprenderá?</h3>

                <ul>
                    <li>Desenvolver aplicações modernas</li>
                    <li>As tecnologias mais famosas do mercado</li>
                    <li>Criar sites completos</li>
                </ul>
            </fieldset>
            <div className="courseContent">
                <h3>Conteúdo do curso</h3>
                <p>80 aulas</p>
                <div className="videos">
                    <ul>
                        <li>Bem-vindo</li>
                        <li>Introdução ao JavaScript</li>
                        <li>Variáveis</li>
                    </ul>
                </div>
            </div>
            <div className="requisits">
                <h3>Requisitos</h3>
                <ul>
                    <li>
                        <a href="">Bem-vindo</a>
                    </li>
                    <li>
                        <a href="">O que é o JavaScript?</a>
                    </li>
                    <li>
                        <a href="">Bem-vindo</a>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h3>Descrição</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce consectetur tincidunt magna, non vulputate erat
                    bibendum nec. Nullam et tempor nisi. Donec tristique eros
                    eleifend ultricies congue. Vivamus convallis nunc non
                    vestibulum hendrerit. Fusce lacus lorem, congue in ornare
                    et, fermentum vel magna. Vestibulum mi orci, semper et odio
                    vitae, lobortis feugiat nisi. Etiam ligula arcu, facilisis
                    eget lorem nec, rutrum vehicula orci. Donec metus orci,
                    facilisis sed pulvinar suscipit, iaculis sit amet velit.
                    Nullam a nisl auctor, facilisis enim sed, tincidunt neque.
                    Ut ac tincidunt arcu, vitae iaculis leo. Duis sed magna eget
                    lacus vulputate tincidunt et non lorem. Phasellus ornare
                    erat quis ex finibus vulputate. Aenean pulvinar ligula a
                    diam varius rhoncus vitae nec sapien.
                </p>
            </div>
        </div>
    )
}
