import './Courses.css'
import CardCourses from '../components/courses/CardCourses'
import { useEffect, useState } from 'react'
import { getCourses } from '../services/api'
export default function Index() {
    const [courses, setCourses] = useState("");
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
                <CardCourses
                    id="gsafasfd"
                    cover="https://i.ytimg.com/vi/8i4ltPu5a5w/maxresdefault.jpg"
                    title="Curso JavaScript"
                    description="Aprenda a criar aplicações para web de maneira ágil, com a linguamge mais popular do mercado"
                />
            </div>
        </div>
    )
}
