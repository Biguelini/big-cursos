import './Index.css'

import CardCourses from '../components/courses/CardCourses'
import { useEffect, useState } from 'react'
import { getCourses } from '../services/api'
export function Home() {
    const [courses, setCourses] = useState([])
    const listCourses = () => {
        getCourses().then(function (response) {
            const data = response.data.allCourses
            setCourses(data)
        })
    }
    useEffect(() => {
        listCourses()
    }, [])
    return (
        <div className="cursos">
            <h1>Cursos</h1>
            <div className="listCursos">
                {courses.map((course) => {
                    return (
                        <CardCourses
                        key={course.id}
                            id={course.id}
                            cover={course.image}
                            title={course.name}
                            description={course.subtitle}
                        />
                    )
                })}
            </div>
        </div>
    )
}
