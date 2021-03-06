import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { FaRegThumbsUp, FaUserAlt } from 'react-icons/fa'
import './MovieContents.css'

const comment = ({
	userInfo,
	comments,
	contentsList,
	contentsGetAjax,
	loginModal
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const ref = useRef(null)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState({
		like: false,
		comment: '',
		sign: false
	})
	const time = comment => {
		let date = new Date().getDate()
		let nowDate = comment.createdAt.split('T')[0].slice(-2)

		if (Number(nowDate) === date) {
			let result = Number(comment.createdAt.split('T')[1].slice(0, 2))
			if (result >= 15) {
				result -= 15
			} else {
				result += 9
			}
			return result >= 0 < 12
				? String(result) +
						comment.createdAt.split('T')[1].slice(2, 5) +
						' PM'
				: String(result) +
						comment.createdAt.split('T')[1].slice(2, 5) +
						' AM'
		} else {
			if (date - nowDate <= 7) {
				return `${date - nowDate} day ago `
			} else {
				return comment.createdAt.split('T')[0]
			}
		}
	}
	const { like, comment, sign } = data
	// 댓글 등록 함수
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// eslint-disable-next-line no-undef
		contentsGetAjax(contentsList.id)
	}, [contentsGetAjax, contentsList.id, like, sign])

	const cmmtSubmitHandler = e => {
		e.preventDefault()
		axios
			.post(
				`${process.env.REACT_APP_SERVER_HOST}/board/comment`,
				{
					text: comment,
					user: userInfo.id,
					article: contentsList.id
				},
				{
					withCredentials: true
				}
			)
			.then(res => {
				setData(Object.assign({}, data, { comment: '', sign: !sign }))
				ref.current.focus()
			})
	}

	const likeClickHandler = commentId => {
		axios
			.post(
				`${process.env.REACT_APP_SERVER_HOST}/board/like`,
				{
					user: userInfo.id,
					comment: commentId
				},
				{
					withCredentials: true
				}
			)
			.then(res => {
				setData(Object.assign({}, data, { like: !like }))
			})
	}
	// 컴포넌트 마운트 시 댓글 불러오기

	return (
		<div className="movie__detail">
			{userInfo ? (
				<form
					type="submit"
					className="commentForm"
					onSubmit={cmmtSubmitHandler}>
					<textarea
						ref={ref}
						className="user__comment"
						type="text"
						value={comment}
						onChange={e =>
							setData(Object.assign({}, data, { comment: e.target.value }))
						}></textarea>
					<button className="commentButton" type="submit">
						댓글 쓰기
					</button>
				</form>
			) : (
				<div onClick={loginModal}>로그인을 해주세요</div>
			)}
			{comments
				.map((comment, idx) => {
					return (
						comment && (
							<div className="comment__box" key={idx} id={comment.id}>
								<div className="commentUser">
									<FaUserAlt className="commentTitleIcon"></FaUserAlt>
									{comment.user.nickname}
									<span className="commentTime">{time(comment)}</span>
								</div>
								<div className="likeCount">
									<FaRegThumbsUp
										className="likeButton"
										onClick={e => {
											userInfo && likeClickHandler(comment.id)
										}}
									/>
									{Object.assign({}, comment).likecount}
								</div>

								<div className="commentText">
									{Object.assign({}, comment).text}
								</div>
							</div>
						)
					)
				})
				.reverse()}
		</div>
	)
}

export default comment
