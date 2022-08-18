import './CardCourses.css'
import { useNavigate } from 'react-router-dom'
import { getUniqueCourse } from '../../services/api'
import { useEffect, useState } from 'react'

export default function CoursesCard(props) {
    const [course, setCourse] = useState({})
    useEffect(() => {
        getUniqueCourse(props.id).then(function (response) {
            const data = response.data
            setCourse(data)
        })
    }, [props.id]);
    
    let navigate = useNavigate()
    const url = '/cursos/' + props.id + '/' + course.videos
    console.log(url)
    return (
        <div
            className="coursesContainer"
            onClick={() => {
                navigate(url)
            }}
        >
            <img src={props.cover} alt="" className="cover" />
            <span className="titleCourse">{props.title}</span>
        </div>
    )
}
