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
export const putCourse = async (
    name,
    subtitle,
    instructor,
    content,
    description
) => {
    return api.put('/courses', {
        name,
        subtitle,
        instructor,
        content,
        description,
    })
}
export const deleteVideo = async (id, videos) => {
    return api.post('/deleteVideo', { id, videos })
}
export const deleteCourse = async (name) => {
    const url = '/deleteCourse/' + name
    console.log(url)
    return api.delete(url)
}