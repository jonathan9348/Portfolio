import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import sectionsReducer from './sectionReducer';
import certificatesReducer from './certificateReducer';

const rootReducer = combineReducers({
    sections: sectionsReducer,
    certificates: certificatesReducer,
  });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store; 