import React from 'react';

import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';
import { post } from '../../types';
import Post from './Post';

type MyState = {
    posts: post[];
}

type MyProps = {
    fetchPosts: () => void;
    posts: post[];
}

class NewsFeed extends React.Component<MyProps, MyState>{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts;
        console.log(posts);
        return (    
            <div className="newsfeed">
               {posts.map((post) => {
                   return(
                   <Post key={post.id} post={post}></Post>
                   )
               })}
            </div>  
        )
    };
}

const mapStateToProps = (state: {posts : post[]}) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {
    fetchPosts
})(NewsFeed);