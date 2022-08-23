import React from 'react'
import axios, { post } from 'axios'

class Creacte extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data)
        })
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    fileUpload(file) {
        const url = 'http://localhost:3030/courses'
        const formData = new FormData()
        formData.append('cover', file)
        formData.append('name', 'curso 1234')
        formData.append('subtitle', 'curso 1234')
        formData.append('instructor', 'curso 1234')
        formData.append('content', 'curso 1234')
        formData.append('description', 'curso 1234')
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return post(url, formData, config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default Creacte
