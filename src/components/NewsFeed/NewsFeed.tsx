import React from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import {
  clearPosts,
  fetchPosts,
} from '../../actions';
import {
  post,
  storeState,
} from '../../types';
import Post from './Post/';

type MyState = {
    posts: post[];
}

type MyProps = {
    fetchPosts: () => void;
    clearPosts: () => void;
    posts: post[];
    userPosts: post[];

}

class NewsFeed extends React.Component<MyProps, MyState>{

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillUnmount(){
        this.props.clearPosts();
    }

    render() {
        const {posts} = this.props;
        
        return (
            <div className="newsfeed">
                <InfiniteScroll
                    dataLength={posts.length}
                    next={this.props.fetchPosts}
                    hasMore={true}
                    loader={<Loader
                        type="ThreeDots"
                        color="#BBBBBB"
                        height={50}
                        width={50}
                        timeout={3000} //3 secs
                      />}
                >
                        {posts.map((post) => {
                            return (
                                <Post key={post.id} post={post}></Post>
                            )
                        })}
                </InfiniteScroll>
            </div>
        )
    };
}

const mapStateToProps = (state: storeState) => {
    return { posts: state.posts, userPosts: state.userPosts };
}

export default connect(mapStateToProps, {
    fetchPosts,
    clearPosts
})(NewsFeed);