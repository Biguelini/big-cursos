import './CoursePages.css'

import {  useParams } from 'react-router-dom'
import { getUniqueCourse } from '../services/api'
import { useState, useEffect } from 'react'
export default function Index() {
    const { idCourse } = useParams()
    const [course, setCourse] = useState({})
    const [actualVideo, setActualVideo] = useState('')
    useEffect(() => {
        const getCourseData = () => {
            getUniqueCourse(idCourse).then(function (response) {
                const data = response.data
                const allVideos = data.videos.length !== 0 ? data.videos[0].split('/') : ''
                const first = data.videos.length !== 0 ?'http://localhost:3030/files/'+ allVideos[allVideos.length - 1]:''
                setCourse(data)
                setActualVideo(first)
            })
        }
        getCourseData()
    }, [idCourse, actualVideo])
    return (
        <div className="curso">
            <video controls poster={course.image}>
                <source
                    src={'http://localhost:3030/files/1660502501660_2022-08-11 21-08-27.mp4'}
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
                                {video}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="description">
                <h3>Descrição</h3>
                <p>
                    {course.description}
                </p>
            </div>
        </div>
    )
}
