import content from './content';
import {combineReducers} from 'redux';
import {StoreState} from '../types';

const reducers = combineReducers<StoreState, any>({
    content
});

export default reducers;
