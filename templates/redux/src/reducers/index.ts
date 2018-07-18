import content from './content';
import {combineReducers} from 'redux';
import {StoreState} from '../types';
/**
 * @author kozakluke@gmail.com
 */
const reducers = combineReducers<StoreState, any>({
    content
});

export default reducers;
