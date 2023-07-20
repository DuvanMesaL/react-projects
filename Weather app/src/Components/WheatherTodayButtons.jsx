import React, { useState } from 'react';
import {BiCurrentLocation} from "react-icons/bi";

const WheatherTodayPronosticTopAsideButtons = ({ onMenuButtonClick }) => {
    return (
        <section className="buttons-container-section">
            <button className="Button-Search-For-Places" onClick={onMenuButtonClick}>
                Search for places
            </button>
            <button className="Search-For-Places" onClick={onMenuButtonClick}>
                <BiCurrentLocation className="Location-Icon" size={30} />
            </button>
        </section>
    )
}

export default WheatherTodayPronosticTopAsideButtons;
