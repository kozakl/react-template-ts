import * as actions from '../actions';
import {ContentState} from '../types';
/**
 * @author kozakluke@gmail.com
 */
const defaultState:ContentState = {
    text: 'DEFAULT REDUCER',
    color: undefined
};

export default function content(state = defaultState, action:actions.ContentAction)
{
    switch (action.type)
    {
        case actions.CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        
        case actions.CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            };
        
        default:
            return state;
    }
}
