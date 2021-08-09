import './header.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { useHistory } from 'react-router-dom';

import unsplash from '../../api/unsplash';
import { user } from '../../types';

const popOverElement = document.getElementById("sc94Popover")!;
const SearchComponent = () => {

    const [searchUserList, setSearchUserList] = useState<user[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 1000)

        return () => {
            clearTimeout(timerId);
        }
    }, [searchTerm]);

    useEffect(() => {
        const search = async () => {
            const response = await unsplash.get("/search/users", {
                params: {
                    query: debouncedTerm,
                }
            })
            console.log("fetched api");
            setSearchUserList(response.data.results);
        }

        if (debouncedTerm) {
            search();
        }

        return (
            setSearchUserList([])
        )

    }, [debouncedTerm])

    const displayPopOver = () => {
        popOverElement.style.visibility = "visible";
        popOverElement.style.position = "relative";
    }

    const hidePopOver = () => {
        popOverElement.style.visibility = "hidden";
        popOverElement.style.position = "absolute";
        setSearchTerm("");
    }

    const openUser = (username: string) => {
        history.push("/" + username);
        hidePopOver();
    }

    const history = useHistory();

    return (
        <div className="sc94Container">
            <input
                id="sc94Input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={displayPopOver}
                onBlur={hidePopOver}
                type="text"
                placeholder={"Search"} />
            <div id="sc94Popover">
                <div id="sc94PopoverContent">
                    {searchUserList.map(({ id, username, instagram_username, profile_image, first_name, last_name }) => {
                        return (
                            <div onClick={() => openUser(username)} className="sc94SearchUser" key={id}>
                                <img src={profile_image.medium} alt={instagram_username}></img>
                                <div className="sc94Name">
                                    <p>{username || instagram_username}</p>
                                    <p style={{ color: "rgb(142,142,142,1)" }}>{first_name} {last_name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchComponent


