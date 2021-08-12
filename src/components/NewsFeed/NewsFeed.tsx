import React from 'react';

import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import {
  clearPosts,
  fetchPosts,
} from '../../actions';
import NotFound from '../../errors/NotFound/NotFound';
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
    err: {
        err : boolean,
        errMessage : string;
    }
}

class NewsFeed extends React.Component<MyProps, MyState>{

    componentDidMount() {
        this.props.fetchPosts();
    }
    componentWillUnmount(){
        this.props.clearPosts();
    }
    render() {
        const {posts,err} = this.props;
        const variants = {
            hidden : {
                x: '-100vw'
            },
            visible : {
                x: '0',
                transition : {delay: 0.8 ,ease: 'easeInOut',duration: 0.4}
            },
            exit : {
                x: '-100vw',
                transition: {ease: 'easeInOut'}
            }
        }
        return (
            err.err ? 
            <NotFound errorMessage={err.errMessage}/> :
            <motion.div 
            className="nf16Container"
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
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
            </motion.div>
        )
    };
}

const mapStateToProps = (state: storeState) => {
    return { posts: state.posts , err: state.error};
}

export default connect(mapStateToProps, {
    fetchPosts,
    clearPosts
})(NewsFeed);