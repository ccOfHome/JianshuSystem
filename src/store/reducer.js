/* const defaultState={
    focused: false
};

export default (state=defaultState,action)=>{
    if(action.type === 'search_focus'){
        return{
            focused: true
        }
    }
    if(action.type === 'search_blur'){
        return{
            focused: false
        }
    }
    return state;
} */

//使用combineReducers来将拆分后的reducers合并       redux-immutable模块的combineReducers方法生成的就是一个immutable对象
// import {combineReducers} from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';

import { reducer as homeReducer } from '../pages/home/store';

import { reducer as detailReducer } from '../pages/detail/store';

import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer;
