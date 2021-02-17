import * as constants from './constants';
import {fromJS} from 'immutable';

//immutable库中封装state为immutable对象，意为不可变更的

//fromJS将js对象转化为immutable对象
const defaultState=fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

//内容完全可以使用switch case语句进行替换
export default (state=defaultState,action)=>{
    if(action.type === constants.SEARCH_FOCUS){
        //immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象

        return state.set('focused',true);
        /* return{
            focused: true
        } */
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false);
        /* return{
            focused: false
        } */
    }
    if(action.type === constants.CHANGE_LIST){
        /* return state.set('list',action.data).set('totalPage',action.totalPage); */
        return state.merge({
            'list': action.data,
            'totalPage': action.totalPage
        });
    }
    if(action.type === constants.MOUSE_ENTER){
        return state.set('mouseIn',true);
    }
    if(action.type === constants.MOUSE_LEAVE){
        return state.set('mouseIn',false);
    }
    if(action.type === constants.CHANGE_PAGE){
        return state.set('page',action.page);
    }
    return state;
}
