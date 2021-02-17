import React, { PureComponent } from 'react';
import { WriterWrapper, Head, Aut, Img, Info, Detail, Attent, Left, Right, Name, Flex } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render() {
        const { authors } = this.props;
        return (
            <WriterWrapper>
                <Head>
                    <Left>推荐作者</Left>
                    <Right>换一批</Right>
                </Head>
                {
                    authors.map((item, index) => {
                        return (
                            <Aut>
                                <Flex>
                                    <Img></Img>
                                    <Info>
                                        <Name>{item.get('authorName')}</Name>
                                        <Detail>写了{item.get('fontCount')}字---{item.get('likeCount')}喜欢</Detail>
                                    </Info>
                                </Flex>
                                <Attent>+关注</Attent>
                            </Aut>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    authors: state.getIn(['home', 'authorList'])
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Writer);