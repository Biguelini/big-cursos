import './Course.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getUniqueCourse } from '../services/api'
import TextInput from '../components/form/TextInput'
import PrimaryButton from '../components/buttons/PrimaryButton'
import axios, { put } from 'axios'
export function Course() {
    const { idCourse } = useParams()
    const [course, setCourse] = useState({})
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [instructor, setInstructor] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')


    
    getUniqueCourse(idCourse).then(function (response) {
        const data = response.data
        setCourse(data)
    })

    const edit = (e) => {
        setName(course.name)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSubtitle = (e) => {
        setSubtitle(e.target.value)
    }
    const handleInstructor = (e) => {
        setInstructor(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const fileUpload = (file) => {
        const url = 'http://localhost:3030/courses'
        const formData = new FormData()
        formData.append('cover', file)
        formData.append('name', 'curso 1231234')
        formData.append('subtitle', 'curso 1234')
        formData.append('instructor', 'curso 1234')
        formData.append('content', 'curso 1234')
        formData.append('description', 'curso 1234')
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return put(url, formData, config)
    }
    return (
        <div>
            <h1>{course.name}</h1>
            <PrimaryButton text="Editar" action={edit}></PrimaryButton>
            <div className="formCadastro">
                <form >
                    <h1>Cadastrar curso</h1>
                    <TextInput
                        label="Digite o nome do curso: "
                        value={name}
                        setValue={handleName}
                    />
                    <TextInput
                        label="Digite o subtítulo do curso: "
                        value={subtitle}
                        setValue={handleSubtitle}
                    />
                    <TextInput
                        label="Digite o nome do instrutor: "
                        value={instructor}
                        setValue={handleInstructor}
                    />
                    <TextInput
                        label="Digite o conteúdo do curso: "
                        value={content}
                        setValue={handleContent}
                    />

                    <TextInput
                        label="Digite a descrição do curso: "
                        value={description}
                        setValue={handleDescription}
                    />
                    
                    <PrimaryButton text="Atualizar curso"></PrimaryButton>
                </form>
            </div>
        </div>
    )
}
