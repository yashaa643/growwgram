import React from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import {
  clearUserPosts,
  fetchAUserPosts,
} from '../../actions';
import {
  post,
  storeState,
} from '../../types';

type propTypes = {
    userPosts: post[];
    fetchAUserPosts: (username: string, page: number) => void;
    clearUserPosts: () => void;
    username: string;
    pages: number;
}

class UserPosts extends React.Component<propTypes>{

    state = {
        page: 1,
        username: this.props.username,
    }
    
    componentDidMount(){
        const {page,username} = this.state;
        this.props.fetchAUserPosts(username,page);
        this.setState({page: page + 1});
    }

    componentWillUnmount(){
        this.props.clearUserPosts();
    }

    fetchMorePosts = () => {
        const {username} = this.props;
        const {page} = this.state;
        this.props.fetchAUserPosts(username,page)
        this.setState({page: page + 1});
    }

    render(){
        const {userPosts,pages} = this.props;
        const {page} = this.state;
        return (
            <>
                 <InfiniteScroll
                    dataLength={userPosts.length}
                    next={this.fetchMorePosts}
                    hasMore={page < pages}
                    loader={<Loader
                        type="ThreeDots"
                        color="#BBBBBB"
                        height={50}
                        width={50}
                        timeout={3000} //3 secs
                      />}
                > 
                <div className="up56Container">
                {userPosts.map(({ id, urls, alt_description }) => {
                    return (
                        <div key={id} className="up56ImgContainer">
                            <img className="up56Img" src={urls.small} alt={alt_description}></img>
                        </div>
                    )
                })}
                </div>
                </InfiniteScroll >
                </>
            
        )
    }
   
}

const mapStateToProps = (state: storeState) => {
    const { userPosts } = state;
    return { userPosts: userPosts };
}

export default connect(mapStateToProps, {
    fetchAUserPosts,
    clearUserPosts
})(UserPosts);
