/* eslint-disable no-undef */
import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import SearchMovie from '../components/write/SearchMovie'

const Write = ({ history }) => {
	const { userInfo } = useSelector(state => ({
		userInfo: state.SignIn.userInfo
	}))

	return (
		<div className="main">
			<SearchMovie userInfo={userInfo} history={history} />
		</div>
	)
}

export default React.memo(Write)
