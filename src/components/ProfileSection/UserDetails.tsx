import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { user } from '../../types';

type MyProps = {
    user: user;
}

const UserDetails = ({ user }: MyProps) => {
    const { username, profile_image, first_name, last_name, total_photos, followers_count, following_count, followed_by_user, bio } = user;
    const [followed, setFollowed] = useState(followed_by_user);

    const handleFollowers: React.MouseEventHandler<HTMLDivElement> | undefined = () => {
        setFollowed(!followed);
    }

    const name = first_name + " " + last_name;
    return (
        <div>
            {/* Web View Start */}
            <div className="ps27UserHeader ps21LargeScreensOnly">
                <div className="ps27ImgContainer">
                    <img className="ps27UserProfileIcon"
                        src={profile_image.large}
                        alt={first_name}
                    />
                </div>
                <div className="ps27UserDetails">
                    <div className="ud23FirstRow">
                        <h6 className="username-text">{username}</h6>
                        {followed ?
                            <motion.div
                            initial={{x : -50, opacity: 0}}
                            animate={{x : 0, opacity: 1}}
                            transition={{delay : 0.5}}
                            className="ud23ButtonRow" onClick={handleFollowers}>
                                <button >Message</button>
                                <button >Following</button>
                            </motion.div> :
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
            {/* Web View End Mobile View Start */}
            <div className="ps27UserHeader ps21MobilesOnly">
                <div className="ps27UserDetails">
                    <div className="ud23FirstRow">
                        <div className="ps27ImgContainer">
                            <img className="ps27UserProfileIcon"
                                src={profile_image.large}
                                alt={first_name}
                            />
                        </div>
                        <div className="ud23UsernameColumn">
                        <span className="username-text">{username}</span>
                        {followed ?
                            <motion.div
                            initial={{x : -50, opacity: 0}}
                            animate={{x : 0, opacity: 1}}
                            transition={{delay : 0.5}}
                            className="ud23ButtonRow" onClick={handleFollowers}>
                                <button >Message</button>
                                <button >Following</button>
                            </motion.div> :
                            <div className="ud23FollowButton" onClick={handleFollowers}>
                                <button>Follow</button>
                            </div>}
                        </div>   
                    </div>
                    <div className="ud23BioRow">
                        <h5 className="ud23BioName">{name}</h5>
                        <p className="ud23BioContent">{bio}</p>
                    </div>
                </div>
            </div>
            <div className="ud23CountRow ps21MobilesOnly">
                        <div><strong>{total_photos}</strong> posts</div>
                        <div><strong>{followers_count}</strong> followers</div>
                        <div><strong>{following_count}</strong> following</div>
            </div>
            {/* Mobile View End */}
        </div>
    )
}

export default UserDetails
