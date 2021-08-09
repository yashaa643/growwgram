import './profileSection.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import {
  useHistory,
  useParams,
} from 'react-router-dom';

import {
  clearUser,
  fetchUser,
} from '../../actions';
import {
  storeState,
  user,
} from '../../types';
import UserPosts from './UserPosts';

type paramTypes = {
    username: string;
}

type propTypes = {
    clearUser: () => void,
    fetchUser: (username: string) => void,
    user: user
}


const ProfileSection = ({ clearUser, fetchUser, user }: propTypes) => {
    const { profile_image, first_name,last_name, total_photos, followers_count, following_count, followed_by_user, bio } = user;
    const { username } = useParams<paramTypes>();
    const [followed, setFollowed] = useState(followed_by_user);

    useEffect(() => {
        fetchUser(username);
        return(() => {
            clearUser();
        })
    }, [username, fetchUser, clearUser])

    const handleFollowers:React.MouseEventHandler<HTMLDivElement> | undefined = () => {
        setFollowed(!followed);
    }
    const history = useHistory(); 
    const userIsEmpty = Object.keys(user).length === 0 && user.constructor === Object;
    const name = first_name+" " + last_name;
    return (
        userIsEmpty ?
            <div><Loader
            type="ThreeDots"
            color="#BBBBBB"
            height={50}
            width={50}
            timeout={3000} //3 secs
          /></div> :
            <>
            <div className="ps27UserHeader">
                <div className="ps27ImgContainer">
                    <img className="ps27UserProfileIcon"
                        src={profile_image.large}
                        alt={first_name}
                    />
                </div>
                <div className="ps27UserDetails">
                    <div className="ud23FirstRow">
                        <span className="username-text">{username}</span>
                        {followed ?
                        <div className="ud23ButtonRow" onClick={handleFollowers}>
                            <button >Message</button>
                            <button >Following</button>
                        </div> :
                        <div className="ud23FollowButton" onClick={handleFollowers}>
                            <button>Follow</button>
                        </div>}

                    </div>
                    <ul className="ud23CountRow">                    
                            <li><strong>{total_photos}</strong> posts</li>
                            <li><strong>{followers_count}</strong> followers</li>
                            <li><strong>{following_count}</strong> following</li>
                    </ul>
                    <div className="ud23BioRow">
                        <h1 className="ud23BioName">{name}</h1>
                        <span className="ud23BioContent">{bio}</span>
                    </div>
                </div>
            </div>
            <UserPosts history = {history} username={username} pages={Math.ceil(total_photos/9)}/>
            </>
            
    )

}

const mapStateToProps = (state: storeState) => {
    const { user } = state;
    return { user: user };
}

export default connect(mapStateToProps, {
    fetchUser,
    clearUser
})(ProfileSection);



