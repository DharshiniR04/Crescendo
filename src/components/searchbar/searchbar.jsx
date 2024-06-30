import React, { useState } from "react";
import './searchbar.css';
import { MusicData } from "../../context/Data";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const { setMusicData } = MusicData();
    async function handleSearch() {
        try {
            const response = await axios.get("https://spotify23.p.rapidapi.com/search/", {
                params: {
                    q: `${searchValue}`,
                    type: 'multi',
                    offset: '0',
                    limit: '50'

                },
                headers: {
                    'x-rapidapi-key': '659b80a22fmsh5f7f2cc600e2681p1d44b6jsn4bbdeee29ec3',
                    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
                }
            })
            setMusicData(response?.data?.tracks?.items);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="searchbar">
            <input placeholder="Enter Your Favourite Artist" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
            <button className="search" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default SearchBar;
