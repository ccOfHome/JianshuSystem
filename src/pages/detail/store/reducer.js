import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
})

//内容完全可以使用switch case语句进行替换
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({ title: action.title, content: action.content });
        default:
            return state;
    }
}
