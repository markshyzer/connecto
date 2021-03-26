import React from 'react';
import './Header.css';
import menuIcon from '../../Icons_Menu.png' 


class Header extends React.Component{

    render(){
        return(
            <header>
                <div className='headline'>
                    <h1>CONNECTO</h1><img className="icon" onClick={this.props.showMenu} src={menuIcon} />
                </div>
            </header>

        )
    }
}

export default Header;