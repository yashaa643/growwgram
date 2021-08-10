import './header.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import unsplash from '../../api/unsplash';
import { user } from '../../types';

const SearchComponent = () => {

    const [searchUserList, setSearchUserList] = useState<user[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("");

    const history = useHistory();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        },1000)

        return () => {
            clearTimeout(timerId);
        }
    },[searchTerm]);

    useEffect(() => {
        const search = async () => {
           const response = await unsplash.get("/search/users",{
            params:{
                query : debouncedTerm,
            }
        })
        console.log("fetched api");
        setSearchUserList(response.data.results); 
        }

        if(debouncedTerm){
            search();
        }  
        
        return(
            setSearchUserList([])
        )

    }, [debouncedTerm])

    const displayPopOver = () => {
        document.getElementById("sc94Popover")!.style.visibility = "visible";
        document.getElementById("sc94Popover")!.style.position = "relative";
    }

    const hidePopOver = () => {
        document.getElementById("sc94Popover")!.style.visibility = "hidden";
        document.getElementById("sc94Popover")!.style.position = "absolute";
    }

    const openUser = (username:string) => {
        history.push("/users/"+username);
        setSearchTerm("");
        hidePopOver();
    }


    return (
        <div className="sc94Container">
            <input
            value = {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={displayPopOver} 
            onBlur={(e) => {hidePopOver()}}
            type="text"
            placeholder={"Search"} />
            <div id="sc94Popover">
                {
                    (searchTerm === "") && (searchUserList.length === 0) && <div>
                        <p>Waiting for you to type</p>
                    </div>
                }
                {
                    (searchTerm) && (searchUserList.length === 0) && <div style={{marginLeft: "50%"}}><Loader type="ThreeDots" color="gray" height={20} width={20}/></div> 
                }
                {searchUserList.length > 0 &&
                <div id="sc94PopoverContent">
                    {searchUserList.map(({id,username,instagram_username,profile_image,first_name,last_name}) => {
                        return(
                            <div onMouseDown={(e) => openUser(username)} className="sc94SearchUser" key={id}>
                               <img src={profile_image.medium} alt={instagram_username}></img>
                               <div className="sc94Name">
                                   <h6>{instagram_username || username}</h6>
                                   <p style={{color:"rgb(142,142,142,1)"}}>{first_name} {last_name}</p>
                               </div>
                            </div>
                        )
                    })}
                </div>
                }
            </div>   
        </div>
    )
}

export default SearchComponent
