import React, { Fragment, useState, useEffect } from "react";
import SearchSong from "../Components/SearchSong";
import UserPlaylist from "../Components/UserPlaylist";
import songsJSON from "../data-base/songData.json";


const Playlist = () => {
  let songs = songsJSON;

  const [inputValue, setInputValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [myPlaylist, setMyPlaylist] = useState([]);


  React.useEffect(() => {
    let result = songs.filter(s => inputValue
      ? JSON.stringify(s).toLowerCase().includes(inputValue.toLowerCase())
      : '');

    let filterResult = result.filter(s => !myPlaylist.includes(s));
    
    setFilterList(filterResult);
  }, [inputValue, myPlaylist]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handlePassSong = (uuid) => {
    let newSong = songsJSON.filter((song) => {
      if (song.uuid == uuid) {
        return true;
      } else {
        return false;
      }
    });

    let songWithCount = newSong.map((song) => (
        {...song, count: 0}
        ));
      
      setMyPlaylist([...myPlaylist].concat(songWithCount));
    };

  const handleUpCount = (e, uuid) => {
    let index = myPlaylist.findIndex(song => song.uuid === uuid);
    let newPlaylist = [...myPlaylist];
    newPlaylist[index].count = newPlaylist[index].count ? newPlaylist[index].count + 1 : 1; 
    setMyPlaylist(newPlaylist);
  };

  const handleDownCount = (e, uuid) => {
    let index = myPlaylist.findIndex(song => song.uuid === uuid);
    let newPlaylist = [...myPlaylist];
    newPlaylist[index].count = newPlaylist[index].count ? newPlaylist[index].count - 1 : -1; 
    setMyPlaylist(newPlaylist);
  };

  return (
    <Fragment>
      <SearchSong
        onChange={handleInputValue}
        filterList={filterList}
        clickButton={handlePassSong}
        inputValue={inputValue}
      />
      <UserPlaylist myPlaylist={myPlaylist} handleUpCount={handleUpCount} handleDownCount={handleDownCount} />
    </Fragment>
  );
};

export default Playlist;
