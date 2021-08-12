import React from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

import NotFound from '../../errors/NotFound/NotFound';
import {
  clearUserPosts,
  fetchAUserPosts,
} from '../../store/actions';
import {
  post,
  storeState,
} from '../../types';
import LoaderComponent from '../Loader';
import Post from '../Post/Post';
import GridView from './GridView';

type propTypes = {
    userPosts: post[];
    fetchAUserPosts: (username: string, page: number) => void;
    clearUserPosts: () => void;
    username: string;
    pages: number;
    error: {
        err: boolean,
        errMessage: string
    }
}

class UserPosts extends React.Component<propTypes>{

    state = {
        page: 1,
        username: this.props.username,
        isGrid: true,
    }

    componentDidMount() {
        const { page, username} = this.state;
        this.props.fetchAUserPosts(username, page);
        this.setState({ page: page + 1 });
    }

    showGridView = () => this.setState({ isGrid: true, })
    showPostView = () => this.setState({ isGrid: false, })

    fetchMorePosts = () => {
        const { username , fetchAUserPosts } = this.props;
        const { page } = this.state;
        fetchAUserPosts(username, page)
        this.setState({ page: page + 1 });
    }

    render() {

        const { error, userPosts, pages } = this.props;
        const { page, isGrid } = this.state;
        return (
            <>
                <div className="up56Nav ps21LargeScreensOnly">
                    <div className={`up56NavBtn ${isGrid ? 'active' : ''}`} onClick={() => { this.showGridView()}}>
                        <span className="material-icons">apps</span>Grid</div>
                    <div className={`up56NavBtn ${!isGrid ? 'active' : ''}`} onClick={() => { this.showPostView() }}>
                        <span className="material-icons">pages</span>Post</div>
                </div>

                {(error.err) ?
                    <NotFound errorMessage={error.errMessage} /> :
                    <InfiniteScroll
                        dataLength={userPosts.length}
                        next={this.fetchMorePosts}
                        hasMore={page <= pages}
                        loader={<LoaderComponent/>}
                    >
                                <div className="ps21LargeScreensOnly">
                                    {isGrid ? <GridView userPosts={userPosts}></GridView> :
                                        <div className="up56PostViewContainer">
                                            {userPosts.map((post) => {
                                                return (
                                                    <Post key={post.id} post={post}></Post>
                                                )
                                            })}
                                        </div>}
                                </div>
                                <div className="ps21MobilesOnly up56PostViewContainer">
                                    {userPosts.map((post) => {
                                        return (
                                            <Post key={post.id} post={post}></Post>
                                        )
                                    })}
                                </div>
                    </InfiniteScroll >}
            </>
        )
    }
}

const mapStateToProps = (state: storeState) => {
    const { userPosts, error } = state;
    return { userPosts: userPosts, error: error };
}

export default connect(mapStateToProps, {
    fetchAUserPosts,
    clearUserPosts
})(UserPosts);
