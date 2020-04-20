import React, { useState } from "react";
import "./search-bar.css";

const defaultImg = require("../../img/1x/search.png");


const SearchBar = ({ text, width, color, backgroundColor, onClick, img }) =>
    <div style={{ width: width, color: color, backgroundColor: backgroundColor }} className="search_bar" onClick={onClick}>
        <div className="search_bar_text">{text}</div>
        <div className="search_bar_icon" ><img src={img} /></div>
    </div>

SearchBar.defaultProps = {
    text: "Search here...",
    width: "330px",
    color: "#707070",
    backgroundColor: "#ffffff",
    img: defaultImg,
}

export default SearchBar;




