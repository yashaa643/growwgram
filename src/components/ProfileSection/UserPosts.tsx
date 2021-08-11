import React from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  clearUserPosts,
  fetchAUserPosts,
} from '../../actions';
import NotFound from '../../errors/NotFound/NotFound';
import {
  post,
  storeState,
} from '../../types';
import Post from '../NewsFeed/Post/Post';
import GridView from './GridView';

type propTypes = {
    userPosts: post[];
    fetchAUserPosts: (username: string, page: number) => void;
    clearUserPosts: () => void;
    username: string;
    pages: number;
    error : {
        err : boolean,
        errMessage : string
    }
}

class UserPosts extends React.Component<propTypes>{

    state = {
        page: 1,
        username: this.props.username,
        isGrid: true,
    }

    componentDidMount() {
        const { page, username } = this.state;
        this.props.fetchAUserPosts(username, page);
        this.setState({ page: page + 1 });
    }

    showGridView = () => this.setState({isGrid : true,})
    showPostView = () => this.setState({isGrid : false,})

    fetchMorePosts = () => {
        const { username } = this.props;
        const { page } = this.state;
        this.props.fetchAUserPosts(username, page)
        this.setState({ page: page + 1 });
    }

    render() {

        const { error, userPosts, pages, username } = this.props;
        const { page ,isGrid} = this.state;
        return (
            <>
                <div className="up56Nav">
                    <button className="up56NavBtn" onClick={() => {this.showGridView()}}>
                        <span className="material-icons">apps</span>
                        Grid</button>
                    <button className="up56NavBtn" onClick={() => {this.showPostView() }}>
                        <span className="material-icons">pages</span>Post</button>
                </div>

               { (error.err) ?
                <NotFound  errorMessage = {error.errMessage}/> :
                <InfiniteScroll
                    dataLength={userPosts.length}
                    next={this.fetchMorePosts}
                    hasMore={page <= pages}
                    loader={<Loader
                        type="ThreeDots"
                        color="#BBBBBB"
                        height={50}
                        width={50}
                        timeout={3000} //3 secs
                    />}
                >

                    <Switch>
                        <Route exact path={"/" + username}>
                            {isGrid ?
                                <GridView userPosts={userPosts}></GridView> :

                                <div className="up56PostViewContainer">
                                    {userPosts.map((post) => {
                                        return (
                                            <Post key={post.id} post={post}></Post>
                                        )
                                    })}
                                </div>}
                        </Route>
                    </Switch>

                </InfiniteScroll >}
            </>
        )}}

const mapStateToProps = (state: storeState) => {
    const { userPosts , error } = state;
    return { userPosts: userPosts , error: error };
}

export default connect(mapStateToProps, {
    fetchAUserPosts,
    clearUserPosts
})(UserPosts);
