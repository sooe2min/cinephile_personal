const model = require('../../models')

module.exports = async (req, res) => {
	const { token } = req.cookies
	// 유저, 글(param), 댓글
	const { user, text, article } = req.body

	// 토큰을 확인한다.
	if (token) {
		try {
			// 유저를 찾는다.
			const theUser = await model.user.findOne({
				where: {
					id: user
				}
			})

			// 글을 찾는다.
			const theArticle = await model.article.findOne({
				where: {
					id: article
				}
			})

			// 댓글을 저장한다.
			const newComment = await model.comment.create({
				text: text,
				likecount: 0,
				userId: theUser.id,
				articleId: theArticle.id
			})

			// 렌더링을 위한 해당 댓글 정보를 응답한다.
			await model.comment
				.findOne({
					where: {
						id: newComment.id
					},
					include: {
						model: model.user,
						where: newComment.userId
					}
				})
				.then(result => {
					res.status(200).send(result)
				})
				.catch(err => {})
		} catch (err) {
			res.status(500).send(err)
		}
	} else {
		res.status(401).send('유효하지 않은 토큰입니다.')
	}
}
