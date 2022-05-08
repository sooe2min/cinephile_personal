import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Board from './containers/Board'
import Chat from './containers/Chat'
import Header from './containers/Header'
import Main from './containers/Main'
import MovieContents from './containers/MovieContents'
import UserInfo from './containers/UserInfo'
import Write from './containers/Write'

function App() {
	const [wheel, setWheel] = useState({ opacity: 0 })
	const wheelEventHandler = e => {
		e.pageY > 500
			? setWheel(
					Object.assign({}, wheel, { opacity: 1, transition: 'all 1.5s' })
			  )
			: setWheel(
					Object.assign({}, wheel, { opacity: 0, transition: 'all 1.5s' })
			  )
	}

	return (
		<Switch>
			<Route
				exact
				path="/"
				render={({ history, match }) => {
					return (
						<div className="wrapper" onWheel={wheelEventHandler}>
							<Header match={match} wheel={wheel} />
							<Main history={history} match={match} />
							<Chat history={history} match={match} />
						</div>
					)
				}}
			/>
			<Route
				exact
				path="/write"
				render={({ match, history }) => {
					return (
						<div className="wrapper">
							<Header match={match} />
							<Write history={history} match={match} />
							<Chat history={history} match={match} />
						</div>
					)
				}}
			/>
			<Route
				exact
				path="/board"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header match={match} />
							<Board history={history} match={match} />
							<Chat history={history} match={match} />
						</div>
					)
				}}
			/>
			<Route
				exact
				path="/board/:id"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header match={match} />
							<MovieContents history={history} match={match} />
							<Chat history={history} match={match} />
						</div>
					)
				}}
			/>
			<Route
				exact
				path="/userInfo"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header match={match} />
							<UserInfo history={history} match={match} />
							<Chat history={history} match={match} />
						</div>
					)
				}}
			/>
		</Switch>
	)
}

export default App
