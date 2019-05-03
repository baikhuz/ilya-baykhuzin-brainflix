import React, { Component } from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import '../styles/header.scss';
import plusIcon from '../assets/Icons/SVG/Icon-upload.svg';


class Header extends Component {

    clickHandler = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <header className = "header">
                <div className = "header__logo--container">
                    <img className = "logo" src={logo} alt="Brainflix Logo"/>
                </div>
                <form className = "header__searchbar">
                    <button className = "header__searchbar--button" type = "submit" onClick={e => this.clickHandler(e)}></button>
                    <input className = "header__searchbar--input" type = "text" placeholder="Search"/>
                </form>
                <div className="header__upload">
                    <button className="header__upload--button" type = "button">
                    <img src={plusIcon} alt="upload"/><span> upload</span>
                    </button>
                    <div className="user-avatar header__upload--user-avatar"></div>
                </div>
            </header>
        );
    }
}
export default Header;