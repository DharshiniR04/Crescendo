import {React,useContext,createContext, useState} from "react";

const DataCreate=createContext();

export const MusicData =()=>useContext(DataCreate);

export const DataProvider=({children})=>{
    const [musicData,setMusicData]=useState([]);
    return(
        <DataCreate.Provider value={{musicData,setMusicData}}>
             {children}
        </DataCreate.Provider>
    )
}