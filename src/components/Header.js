import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <header className="header">
            <h1>Welcome Back, Rupesh</h1>
            <button className='btn'>Upload Product</button>
            <label className='searchicon'> <SearchIcon></SearchIcon></label>
            <input className='searchbox'type="text"placeholder='Search'></input>
        </header>
    );
};

export default Header;
