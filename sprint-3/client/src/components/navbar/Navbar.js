import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/Logo-brainflix.svg';
import plusIcon from '../../assets/icons/SVG/Icon-upload.svg';

import './styles.scss';

class Navbar extends React.Component {

    clickHandler = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <header className = "header padding-sides">
                <div className = "header__logo--container">
                    <Link to = '/'>
                        <img className = "logo" src={logo} alt="Brainflix Logo"/>
                    </Link>
                </div>
                <form className = "header__searchbar">
                    <button className = "header__searchbar--button" type = "submit" onClick={e => this.clickHandler(e)}></button>
                    <input className = "header__searchbar--input" type = "text" placeholder="Search"/>
                </form>
                <div className="header__upload">
                    <Link to = '/upload'>
                        <button className="header__upload--button h2-subheader" type = "button">
                            <img src={plusIcon} alt="upload"/><span> upload</span>
                        </button>
                    </Link>
                    <div className="user-avatar header__upload--user-avatar"></div>
                </div>
            </header>
        );
    }
}

export default Navbar;