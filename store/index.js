import { createStore, combineReducers } from 'redux';
import gameReducer from './reducer/gameReducer'

const rootReducer = combineReducers({
    gameReducer
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;