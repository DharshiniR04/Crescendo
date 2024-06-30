import React from "react";
import './pagination.css';
import { MusicData } from "../context/Data";

function Pagination({ setPage }) {
    const { musicData } = MusicData();
    const pages = [];
    for (let i = 1; i <= Math.ceil(musicData.length / 10); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((pageNumber, index) => {
                return (
                    <button key={index} onClick={() => setPage(pageNumber)}>
                        {pageNumber}
                    </button>
                );
            })}
        </div>
    );
}

export default Pagination;
