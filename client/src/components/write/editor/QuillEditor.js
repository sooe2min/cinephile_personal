import axios from 'axios'
import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false

// Quill.register('modules/clipboard', PlainClipboard, true);

const QuillClipboard = Quill.import('modules/clipboard')

class Clipboard extends QuillClipboard {
	getMetaTagElements = stringContent => {
		const el = document.createElement('div')
		el.innerHTML = stringContent
		return el.getElementsByTagName('meta')
	}

	async onPaste(e) {
		let clipboardData = e.clipboardData || window.clipboardData
		let pastedData = await clipboardData.getData('Text')

		const urlMatches = pastedData.match(/\b(http|https)?:\/\/\S+/gi) || []
		if (urlMatches.length > 0) {
			e.preventDefault()
			urlMatches.forEach(link => {
				axios
					.get(link)
					.then(payload => {
						// let title, image, url;
						let title, image, url
						for (let node of this.getMetaTagElements(payload)) {
							if (node.getAttribute('property') === 'og:title') {
								title = node.getAttribute('content')
							}
							if (node.getAttribute('property') === 'og:image') {
								image = node.getAttribute('content')
							}
							if (node.getAttribute('property') === 'og:url') {
								url = node.getAttribute('content')
							}
						}

						const rendered = `<a href=${url} target="_blank"><div><img src=${image} alt=${title} width="20%"/><span>${title}</span></div></a>`

						let range = this.quill.getSelection()
						let position = range ? range.index : 0
						this.quill.pasteHTML(position, rendered, 'silent')
						this.quill.setSelection(position + rendered.length)
					})
					.catch(error => console.error(error))
			})
		} else {
			super.onPaste(e)
		}
	}
}
Quill.register('modules/clipboard', Clipboard, true)

const BlockEmbed = Quill.import('blots/block/embed')

class ImageBlot extends BlockEmbed {
	static create(value) {
		const imgTag = super.create()
		imgTag.setAttribute('src', value.src)
		imgTag.setAttribute('alt', value.alt)
		imgTag.setAttribute('width', '100%')
		return imgTag
	}

	static value(node) {
		return { src: node.getAttribute('src'), alt: node.getAttribute('alt') }
	}
}

ImageBlot.blotName = 'image'
ImageBlot.tagName = 'img'
Quill.register(ImageBlot)

class QuillEditor extends React.Component {
	bandId
	placeholder
	onEditorChange
	onFilesChange
	setSearchUrl
	_isMounted

	constructor(props) {
		super(props)

		this.state = {
			editorHtml: __ISMSIE__ ? '<p>&nbsp;</p>' : '',
			files: []
		}

		this.reactQuillRef = null

		this.inputOpenImageRef = React.createRef()
	}

	componentDidMount() {
		this._isMounted = true
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	handleChange = html => {
		this.setState(
			{
				editorHtml: html
			},
			() => {
				this.props.onEditorChange(this.state.editorHtml)
			}
		)
	}

	// I V F P??????  ???????????? insertImage: this.imageHandler??? ??????  ????????? inputOpenImageRef??? ?????? ?????????.
	imageHandler = () => {
		this.inputOpenImageRef.current.click()
	}

	insertImage = e => {
		e.stopPropagation()
		e.preventDefault()

		if (
			e.currentTarget &&
			e.currentTarget.files &&
			e.currentTarget.files.length > 0
		) {
			const file = e.currentTarget.files[0]

			let formData = new FormData()
			const config = {
				header: { 'content-type': 'multipart/form-data' },
				withCredentials: true
			}
			formData.append('img', file)

			axios
				.post(
					`${process.env.REACT_APP_SERVER_HOST}/setting/upload`,
					formData,
					config
				)
				.then(response => {
					// ressponse ??? ????????? ?????? ?????????
					// ?????? if(?????? ??????) res ??? ????????? ???????????? ???
					if (response.data) {
						this.props.setSearchUrl(response.data)
						const quill = this.reactQuillRef.getEditor()
						quill.focus()

						let range = quill.getSelection()
						let position = range ? range.index : 0

						//?????? ?????? ??????????????? ???????????? ?????? ?????????   ?????? ????????? src????????? ?????? ????????? ??????
						//????????? ???????????? ??????  ?????????????????? ???????????? ?????? ?????? ?????? ???????????? src ??? alt ??? ???????????????  editorHTML??? ?????? ?????????.
						quill.insertEmbed(position, 'image', {
							src: response.data,
							alt: response.data.fileName
						})
						quill.setSelection(position + 1)

						if (this._isMounted) {
							this.setState(
								{
									files: [...this.state.files, file]
								},
								() => {
									this.props.onFilesChange(this.state.files)
								}
							)
						}
					} else {
						return alert('failed to upload file')
					}
				})
		}
	}

	render() {
		return (
			<div>
				<div id="toolbar">
					<button className="ql-bold" />
					<button className="ql-italic" />
					<button className="ql-underline" />
					<button className="ql-strike" />
					<button className="ql-insertImage">I</button>
					<button className="ql-video" />
					<button className="ql-blockquote" />
				</div>
				<ReactQuill
					ref={el => {
						this.reactQuillRef = el
					}}
					theme={'snow'}
					onChange={this.handleChange}
					modules={this.modules}
					formats={this.formats}
					value={this.state.editorHtml}
					placeholder={this.props.placeholder}
				/>
				<input
					type="file"
					accept="image/*"
					ref={this.inputOpenImageRef}
					style={{ display: 'none' }}
					onChange={this.insertImage}
				/>
			</div>
		)
	}

	modules = {
		syntax: false,
		toolbar: {
			container: '#toolbar',
			//id ="toorbar"???  ??? ?????? B I U S I V F P ?????? ?????? ?????????.
			handlers: {
				insertImage: this.imageHandler
				// insertVideo: this.videoHandler,
				// insertFile: this.fileHandler,
			}
		}
	}

	formats = [
		'bold',
		'italic',
		'underline',
		'strike',
		'image',
		'video',
		'blockquote'
	]
}

export default QuillEditor
