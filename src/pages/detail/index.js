import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { withRouter } from 'react-router-dom'; //跨域异步组件获取数据

class Detail extends PureComponent {

    render() {
        console.log(this.props);
        const { tittle, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{tittle}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    tittle: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));