import * as actions from '../actions';
import Content from '../components/content';
import {connect, Dispatch} from 'react-redux';
import {StoreState} from '../states';
/**
 * @author kozakluke@gmail.com
 */
function mapStateToProps(state:StoreState) {
    return {
        ...state.content
    }
}

function mapDispatchToProps(dispatch:Dispatch<actions.ContentAction>) {
    return {
        changeText: (label:string)=> dispatch(actions.changeText(label)),
        changeColor: (color:string)=> dispatch(actions.changeColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
