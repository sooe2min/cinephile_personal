import React, { useCallback } from 'react'
import { FaRegCommentDots } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import ChatBoard from '../components/chatBoard/ChatBoard'
import { chatToggleSwitchAction } from '../modules/Chat'

const Chat = ({ history }) => {
	const { userInfo, chatToggleSwitch } = useSelector(state => ({
		userInfo: state.SignIn.userInfo,
		chatToggleSwitch: state.Chat.chatToggleSwitch
	}))
	const dispatch = useDispatch()

	// eslint-disable-next-line no-undef
	const chatToggle = useCallback(() => {
		// eslint-disable-next-line no-undef
		dispatch(chatToggleSwitchAction())
	}, [dispatch])

	return (
		<div className="chatWrapper">
			{userInfo && (
				<div className="chatToggle">
					<FaRegCommentDots onClick={chatToggle} />
					<ChatBoard
						userInfo={userInfo}
						chatToggleSwitch={chatToggleSwitch}
						history={history}
					/>
				</div>
			)}
		</div>
	)
}

export default React.memo(Chat)
