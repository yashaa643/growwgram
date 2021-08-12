import React from 'react';

import { user } from '../../types';

type MyProps = {
    searchUserList : user[];
    openUser: (username:string) => void
}

const Popover = ({searchUserList,openUser}:MyProps) => {
    return (
        <div id="sc94PopoverContent">
            {searchUserList.map(({ id, username, instagram_username, profile_image, first_name, last_name }) => {
                return (
                    <div onMouseDown={() => openUser(username)} className="sc94SearchUser" key={id}>
                        <img src={profile_image.large} alt={instagram_username}></img>
                        <div className="sc94Name">
                            <h6>{instagram_username || username}</h6>
                            <p style={{ color: "rgb(142,142,142,1)" }}>{first_name} {last_name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Popover
