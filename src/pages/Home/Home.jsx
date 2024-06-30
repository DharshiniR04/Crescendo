import React, { useState } from "react";
import './Home.css';
import Header from "../../components/header/header";
import Searchbar from "../../components/searchbar/searchbar";
import MusicCard from "../MusicCard/MusicCard";
import Pagination from "../../pagination/pagination";
import { MusicData } from "../../context/Data";
import Logo from '../../assets/logo.png';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const { musicData } = MusicData();

    return (
        <>
            <Header />
            <div className="background">
                <Searchbar />
                {musicData &&
                    <>
                        <MusicCard page={currentPage} />
                        <Pagination setPage={setCurrentPage} />
                    </>
                }
                {musicData=="" && <img src={Logo} alt="logo" className="logo"></img>}
            </div>

        </>
    );
}

export default Home;
