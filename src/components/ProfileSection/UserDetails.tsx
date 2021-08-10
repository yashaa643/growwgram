import React, { useState } from 'react';

import { user } from '../../types';

type MyProps = {
    user: user;
}

const UserDetails = ({user}:MyProps) => {
    const {username,profile_image, first_name,last_name, total_photos, followers_count, following_count, followed_by_user, bio } = user;
    const [followed, setFollowed] = useState(followed_by_user);

    const handleFollowers:React.MouseEventHandler<HTMLDivElement> | undefined = () => {
        setFollowed(!followed);
    }

    const name = first_name+" " + last_name;
    return (
        <div>
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
        </div>
    )
}

export default UserDetails
