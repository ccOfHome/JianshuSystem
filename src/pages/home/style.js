import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`


export const HomeRight = styled.div`
    float: right;
    width: 280px;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 268px;
    /* border: 1px solid #dcdcdc;
    border-radius: 3px; */
    height: 300px;
    text-aglign: center;
    padding: 5px;
`

export const Head = styled.div`
    font-size: 14px;
    color: grey;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.span`
    
`

export const Right = styled.span`
    
`

export const Aut = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Flex = styled.div`
    display: flex;
`

export const Img = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url(//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540);
`

export const Info = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Name = styled.div`
    
`

export const Detail = styled.div`
    font-size: 12px;
    color: grey;
`

export const Attent = styled.div`
    font-size: 14px;
    color: green;
`