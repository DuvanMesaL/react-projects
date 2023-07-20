import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const SideBarMenu = ({ closeMenu, setQuery  }) => {
    const [inputValue, setInputValue] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const show = (val) => {
        setInputValue(val);
    };

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();  
        // validate inputValue before calling setQuery
        if (inputValue && inputValue.trim() !== "") {
            setQuery(inputValue);
        }
        setInputValue('');
    };

    return (
        <aside className="sidebar-menu">
            <button className="close-button" onClick={closeMenu}>
                <AiOutlineClose size={30} />
            </button>

            <div className="Search-For-Location-Section">
                <form className="FormSearchCountryWheather" onSubmit={handleSearchSubmit}>
                    <AiOutlineSearch className="search-icon" size={20} />
                    <input className='SearchNameCountry' type="text" name="" id="" placeholder="Search Location" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className='Button-Search-for-Location' type="submit">
                        Search
                    </button>
                </form>
            </div>

            <div className={`dropdown ${dropdownOpen ? "active" : ""}`} onClick={handleDropdownClick}>
                <input type="text" className='textBox' placeholder='Dropdown Menu' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <div className="option">
                    <div onClick={() => show('London')}>London</div>
                    <div onClick={() => show('Barcelona')}>Barcelona</div>
                    <div onClick={() => show('Madrid')}>Madrid</div>
                    <div onClick={() => show('Bogota')}>Bogotá</div>
                    <div onClick={() => show('Brazil')}>Brazil</div>
                </div>
            </div>
        </aside>
    );
};

export default SideBarMenu;
