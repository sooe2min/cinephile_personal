import axios from 'axios'
import React, { useState } from 'react'
import renderHTML from 'react-render-html'
import CreateText from './CreateText'
import './SearchMovie.css'

const SearchMovie = ({ userInfo, history }) => {
	const [keyword, setKeyword] = useState('')
	const [result, setResult] = useState([])
	const [catchUrl, setCatchUrl] = useState('')

	const onCatchUrl = e => {
		e.preventDefault()
		setCatchUrl(e.target.alt)
	}
	const onInputTitle = e => {
		setKeyword(e.target.value)
	}

	const onSearchMovie = async e => {
		// e.preventDefault();
		setKeyword('')

		const res = await axios.get(
			`http://localhost:3000/board/movies/${keyword}`,
			{}
		)

		setResult(res.data.items)
	}

	const handleEnterPress = e => {
		if (e.key === 'Enter') {
			onSearchMovie()
		}
	}

	const renderResult = result.map((el, index) => {
		return (
			<div className="movie__result" key={index}>
				<img
					src={el.image}
					alt={el.link}
					value={el.link}
					onClick={onCatchUrl}
				/>
				<div className="url">{renderHTML(el.title)}</div>
			</div>
		)
	})

	return (
		<div className="searchPage">
			{catchUrl !== '' ? (
				<CreateText userInfo={userInfo} url={catchUrl} history={history} />
			) : (
				<div>
					<div className="searchIntro">
						어떤 <span>영화</span> 찾으세요?
					</div>
					<input
						className="inputTitle"
						type="text"
						value={keyword}
						placeholder="영화 제목"
						onKeyPress={handleEnterPress}
						onChange={onInputTitle}
					/>
					<button className="goSearch" onClick={onSearchMovie}>
						검색
					</button>

					<div className="renderResult">{renderResult}</div>
				</div>
			)}
		</div>
	)
}

export default SearchMovie
