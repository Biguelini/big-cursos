import './Create.css'
import React, { useState } from 'react'
import axios, { post } from 'axios'
import TextInput from '../components/form/TextInput'
import PrimaryButton from '../components/buttons/PrimaryButton'
export function Create() {
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [instructor, setInstructor] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault() // Stop form submit
        fileUpload(file).then((response) => {
            console.log(response.data)
        })
    }

    const onChange = (e) => {
        setFile(e.target.files[0])
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
        formData.append('name', name)
        formData.append('subtitle', subtitle)
        formData.append('instructor', instructor)
        formData.append('content', content)
        formData.append('description', description)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return post(url, formData, config)
    }

    return (
        <div className="formCadastro">
            <form onSubmit={onFormSubmit}>
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
                <input type="file" onChange={onChange} />
                <PrimaryButton text="Cadastrar curso"></PrimaryButton>
            </form>
        </div>
    )
}
