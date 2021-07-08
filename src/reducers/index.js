import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page from './page';
import photos from './photos';

const rootReducer = combineReducers({ page, photos, routing: routerReducer });

export default rootReducer;
