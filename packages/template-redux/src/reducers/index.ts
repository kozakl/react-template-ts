import content from './content';
import {StoreState} from '../states';
import {combineReducers} from 'redux';
/**
 * @author kozakluke@gmail.com
 */
const reducers = combineReducers<StoreState, any>({
    content
});

export default reducers;
