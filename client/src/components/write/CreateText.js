import axios from 'axios'
// #1 import quill-image-uploader
import ImageUploader from 'quill-image-uploader'
import React, { Component } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './CreateText.css'
// #2 register module
Quill.register('modules/imageUploader', ImageUploader)

class CreateText extends Component {
	userInfo
	url
	history
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			content: '',
			searchUrl: ''
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onHandleChange = this.onHandleChange.bind(this)
	}

	modules = {
		// #3 Add "image" to the toolbar
		toolbar: [['bold', 'italic', 'underline', 'strike', 'image', 'video']],
		// # 4 Add module and upload function
		imageUploader: {
			upload: file => {
				return new Promise((resolve, reject) => {
					const formData = new FormData()

					formData.append('img', file)

					fetch(`${process.env.REACT_APP_SERVER_HOST}/setting/upload`, {
						method: 'POST',
						header: { 'content-type': 'multipart/form-data' },
						body: formData
					})
						.then(response => response.json())
						.then(result => {
							resolve(result)
							this.setState({
								searchUrl: result
							})
						})
						.catch(error => {
							reject('Upload failed')
							console.error('Error:', error)
						})
				})
			}
		}
	}

	onHandleChange(e) {
		this.setState({
			content: e
		})
	}

	onSubmit(e) {
		e.preventDefault()

		const variables = {
			title: this.state.title,
			text: this.state.content,
			url: this.props.url,
			user: this.props.userInfo.id,
			upload_url: this.state.searchUrl
		}

		axios
			.post(
				`${process.env.REACT_APP_SERVER_HOST}/board/write`,
				variables,
				{
					withCredentials: true
				}
			)
			.then(res => {
				if (res.status === 200) {
					this.props.history.push(`/board/${res.data.id}`)
				}
			})
		this.setState({
			content: '',
			title: ''
		})
	}

	render() {
		return (
			<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
				<div style={{ textAlign: 'center' }}>
					<div className="writeIntro">
						영화에 대한 당신의 <span>생각</span>을 들려주세요.
					</div>
				</div>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.title}
						placeholder="&nbsp;&nbsp;제목"
						onChange={e => {
							this.setState({ title: e.target.value })
						}}
					/>
					<ReactQuill
						className="quil"
						modules={this.modules}
						formats={CreateText.formats}
						value={this.state.content}
						placeholder="내용을 입력하세요"
						onChange={this.onHandleChange}
					/>

					<button className="submit__text" onClick={this.onSubmit}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default CreateText

CreateText.formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
	'imageBlot' // #5 Optinal if using custom formats
]
