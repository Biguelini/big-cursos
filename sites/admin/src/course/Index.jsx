import './Course.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { post } from 'axios'
import {
    getUniqueCourse,
    putCourse,
    deleteVideo,
    deleteCourse,
} from '../services/api'
import TextInput from '../components/form/TextInput'
import PrimaryButton from '../components/buttons/PrimaryButton'
export function Course() {
    const [file, setFile] = useState(null)
    const { idCourse } = useParams()
    const [course, setCourse] = useState({})
    const [name, setName] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [instructor, setInstructor] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [videos, setVideos] = useState([])
    const [isEditing, setIsEditing] = useState('false')

    const onChange = (e) => {
        setFile(e.target.files[0])
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        fileUpload(file).then((response) => {
            console.log(response.data)
        })
    }

    const fileUpload = (file) => {
        const url = 'http://localhost:3030/upload'
        const formData = new FormData()
        formData.append('video', file)
        formData.append('id', idCourse)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return post(url, formData, config)
    }

    const send = (e) => {
        e.preventDefault()
        putCourse(name, subtitle, instructor, content, description).then(
            function (response) {
                alert(`Curso ${name} editado com sucesso!`)
                window.location.reload()
            }
        )
    }
    const loadData = () => {
        return getUniqueCourse(idCourse).then(function (response) {
            const data = response.data
            setCourse(data)
            setVideos(data.videos)
        })
    }
    useEffect(() => {
        loadData()
    })

    const edit = (e) => {
        setName(course.name)
        setSubtitle(course.subtitle)
        setInstructor(course.instructor)
        setDescription(course.description)
        setContent(course.content)
        setIsEditing(!isEditing)
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
    const remove = (index) => {
        const removed = videos.splice(index, 1)
        setVideos(removed)
        alert(index)
        deleteVideo(idCourse, videos)
        console.log(videos)
    }
    const deleteCourseAction = () => {
        deleteCourse(course.name)
        window.location.href='http://localhost:3000/'
    }
    return (
        <div className="courseEdit">
            <h1>{course.name}</h1>
            <img src={course.image} alt="Course cover" />
            <h1>Aulas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Aula</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.length !== 0 ? (
                            videos.map((video, i) => {
                            return (
                                <tr>
                                    <td>
                                        <p>{video}</p>
                                    </td>
                                    <td>
                                        <PrimaryButton
                                            text="Remover"
                                            action={() => {
                                                remove(i)
                                            }}
                                        ></PrimaryButton>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td>
                                <p>Não há aulas!</p>
                            </td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="upload">
                <form onSubmit={onFormSubmit}>
                    <h1>Enviar aula</h1>
                    <input type="file" onChange={onChange} />
                    <PrimaryButton text="Fazer upload"></PrimaryButton>
                </form>
            </div>
            <div className="buttons">
                <a href="#formEdit">
                    <PrimaryButton text="Editar" action={edit}></PrimaryButton>
                </a>
                <PrimaryButton
                    text="Excluir"
                    action={deleteCourseAction}
                ></PrimaryButton>
            </div>
            <div className="formCadastro">
                <form
                    id="formEdit"
                    onSubmit={send}
                    className={isEditing ? 'hidden' : ''}
                >
                    <h1>Editar</h1>
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

                    <label>Digite a descrição do curso: </label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={handleDescription}
                        defaultValue={description}
                    ></textarea>
                    <PrimaryButton text="Atualizar curso"></PrimaryButton>
                </form>
            </div>
        </div>
    )
}
