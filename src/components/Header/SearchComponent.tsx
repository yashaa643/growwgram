import './header.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import unsplash from '../../api/unsplash';
import { user } from '../../types';
import Popover from './Popover';

const SearchComponent = () => {

    const [searchUserList, setSearchUserList] = useState<user[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("");
    const popover = document.getElementById("sc94Popover")!;

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
        setSearchUserList(response.data.results); 
        }
        (debouncedTerm) ? search() : setSearchUserList([])

    }, [debouncedTerm])

    const displayPopOver = () => { popover.style.visibility = "visible"; popover.style.position = "relative"; }
    const hidePopOver = () => { popover.style.visibility = "hidden"; popover.style.position = "absolute"; }

    const openUser = (username:string) => {
        history.push("/"+username);
        setSearchTerm("");
    }

    const setPopoverStatus = (term:string) =>{
        setSearchTerm(term);
        (term === "") ? hidePopOver() : displayPopOver()
    }

      return (
        <div className="sc94Container">
            <input
            value = {searchTerm}
            onChange={(e) => setPopoverStatus(e.target.value)}
            onBlur={() => setPopoverStatus("")}
            type="text"
            placeholder={"Search"} />
            <div id="sc94Popover">
                {(!searchTerm)}
                {(searchTerm) && (searchUserList.length === 0) && <div style={{marginLeft: "50%"}}><Loader type="ThreeDots" color="gray" height={20} width={20}/></div>}    
                {searchUserList.length > 0 && <Popover searchUserList={searchUserList} openUser={openUser}></Popover> }
            </div>   
        </div>
    )
}

export default SearchComponent
