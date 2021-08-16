import React from 'react';

import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

import NotFound from '../../errors/NotFound/NotFound';
import {
  clearPosts,
  fetchPosts,
} from '../../store/actions';
import {
  post,
  storeState,
} from '../../types';
import LoaderComponent from '../Loader';
import Post from '../Post';

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

const variants = {
    hidden : {
        opacity: 0,
        // x: '-100vw'
    },
    visible : {
        opacity: 1,
        // x: '0',
        transition : {delay: 0.8 ,ease: 'easeInOut',duration: 0.4}
    },
    exit : {
        opacity: 0,
        // x: '-100vw',
        transition: {ease: 'easeInOut'}
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

        if(err.err){
            return <NotFound errorMessage={err.errMessage}/> 
        }
   
        return (
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
                    loader={<LoaderComponent />}
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