import './CardCourses.css'
import { useNavigate } from 'react-router-dom'

export default function CoursesCard(props) {
    let navigate = useNavigate()
    const url = '/cursos/' + props.id
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
