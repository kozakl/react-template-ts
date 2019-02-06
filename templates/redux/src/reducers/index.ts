import {combineReducers} from 'redux';
import {StoreState} from '../types';
import content from './content';

const reducers = combineReducers<StoreState, any>({
    content
});

export default reducers;
