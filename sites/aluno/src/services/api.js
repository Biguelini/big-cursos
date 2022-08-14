import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3030',
})
export const createSession = async (email, password) => {
    return api.post('/users/login', { email, password })
}
export const verifyUser = async (email, token) => {
    return api.post('/users/auth', { email, token })
}
export const createUser = async (name, email, password) => {
    return api.post('/users', { name, email, password })
}
export const getCourses = async () => {
    return api.get('/courses')
}
export const getUniqueCourse = async (id) => {
    return api.post('/course', { id })
}
