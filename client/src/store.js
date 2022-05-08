import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import Container from './modules/index'

const store = createStore(
	Container,
	composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

export default store
