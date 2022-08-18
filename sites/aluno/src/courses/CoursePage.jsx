import './CoursePages.css'

import {  useParams } from 'react-router-dom'
import { getUniqueCourse } from '../services/api'
import { useState } from 'react'
export default function Index() {
    const { idCourse, idVideo } = useParams()
    const [course, setCourse] = useState({})
    getUniqueCourse(idCourse).then(function (response) {
        const data = response.data
        setCourse(data)
    })

    return (
        <div className="curso">
            <h1>{idVideo}</h1>
            <video controls poster={course.image}>
                <source
                    src={'http://localhost:3030/files/' + idVideo + '.mp4'}
                    type="video/mp4"
                />
            </video>

            <h1>{course.name}</h1>
            <h3 className="subtitle">{course.subtitle}</h3>
            <p>{course.instructor}</p>
            <fieldset className="learn">
                <h3>O que você aprenderá?</h3>

                <ul>
                    {course.content?.map((topic) => (
                        <li key={topic}>{topic}</li>
                    ))}
                </ul>
            </fieldset>
            <div className="courseContent">
                <h3>Conteúdo do curso</h3>
                <p>{course.videos?.length} aulas</p>
                <div className="videos">
                    <ul>
                        {course.videos?.map((video) => (
                            <li className="link" key={video}>
                                <a
                                    href={
                                        'http://localhost:3000/cursos/' +
                                        course.id +
                                        '/' +
                                        video
                                    }
                                >
                                    {video}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="description">
                <h3>Descrição</h3>
                <p>{course.description}</p>
            </div>
        </div>
    )
}
