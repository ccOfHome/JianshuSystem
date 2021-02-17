import { fromJS } from 'immutable';
import * as constants from './constants';

//immutable库中封装state为immutable对象，意为不可变更的

//fromJS将js对象转化为immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 0,
    showScroll: false,
    authorList: []
});

const changeHomeDate = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        authorList: fromJS(action.authorList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

//内容完全可以使用switch case语句进行替换
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeDate(state, action);
        case constants.ADD_ARTICLE_LIST:
            /* return state.set('articleList',state.get('articleList').concat(action.list)) */
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}
