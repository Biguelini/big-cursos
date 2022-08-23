import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3030',
})

export const getCourses = async () => {
    return api.get('/courses')
}
export const getUniqueCourse = async (id) => {
    return api.post('/course', { id })
}
export const postCourse = async (
    name,
    subtitle,
    instructor,
    content,
    description,
    cover
) => {
    return api.post('/courses', {
        name,
        subtitle,
        instructor,
        content,
        description,
        cover,
    })
}
