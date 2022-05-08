import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './ChatBoard.css'

let socket

const ChatBoard = ({ userInfo, chatToggleSwitch, history }) => {
	const [messageList, setMessageList] = useState([])
	const [value, setValue] = useState('')

	const socketURL = 'http://localhost:3000'

	// eslint-disable-next-line
	useEffect(() => {
		// eslint-disable-next-line no-undef
		socket = io.connect(socketURL, { secure: true })
	}, [socketURL])

	useEffect(() => {
		socket.on('receive message', (name, message) => {
			setMessageList(messageList => messageList.concat({ name, message }))
		})
	}, [])

	const submit = e => {
		e.preventDefault()
		if (value) {
			socket.emit('send message', userInfo.nickname, value)
			setValue('')
		}
	}

	// const getRandomInt = (min, max) => {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min;
	// };

	return userInfo ? (
		<div
			className="chat"
			style={
				chatToggleSwitch ? { display: 'block' } : { display: 'none' }
			}>
			<section className="chat__list">
				{messageList.map((item, i) => (
					<div key={i} className="message">
						<p className="username">[{item.name}]</p>
						<p className="message-text">{item.message}</p>
					</div>
				))}
			</section>

			<form className="chat__form" onSubmit={e => submit(e)}>
				{/* <div className="chat-inputs"> */}
				{/* <div className="nickname">{userInfo.nickname}</div> */}
				<input
					className="input"
					type="text"
					autoComplete="off"
					onChange={e => setValue(e.target.value)}
					onKeyPress={e => (e.key === 'Enter' ? submit(e) : null)}
					value={value}
					placeholder="메세지 입력하기"
				/>
				{/* </div> */}
				<button className="chat__button" type="submit">
					Send
				</button>
			</form>
		</div>
	) : (
		// <div className="chat" style={chatToggleSwitch ? { display: 'block' } : { display: 'none' }}>
		// 	<section className="chat-list">
		// 		{messageList.map((item, i) => (
		// 			<div key={i} className="message">
		// 				{console.log('what is item??',item)}
		// 				<p className="username">[Guest] {getRandomInt(1, 100)}</p>
		// 				<p className="message-text">{item.message}</p>
		// 			</div>
		// 		))}
		// 	</section>
		// 	<form className="chat__form" onSubmit={(e) => submit(e)}>
		// 			<input className="input" type="text" autoComplete="off"
		// 				onChange={(e) => setValue(e.target.value)}
		// 				onKeyPress={(e) => (e.key === "Enter" ? submit(e) : null)}
		// 				value={value} placeholder="&nbsp;&nbsp;메세지입력하기" />
		// 		<button className="chat__button" type="submit" >Send</button>
		// 	</form>
		// </div>
		<div />
	)
}

export default ChatBoard
