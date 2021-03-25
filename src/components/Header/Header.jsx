import React from 'react';
import './Header.css';
import menuIcon from '../../Icons_Menu.png' 


class Header extends React.Component{
constructor(){
    super();

}

    render(){
        return(
            <header>
                <h1>CONNECTO</h1>
                <img className="icon" onClick={this.props.showMenu} src={menuIcon} />
            </header>

        )
    }
}

export default Header;