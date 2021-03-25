import React from 'react';
import './Menu.css';
import rightArrow from '../../Arrow_Right.png';


class Menu extends React.Component{

    render(){
        return(
            <div className='menu'>
                <div className='menuItem' id='1' onClick={this.props.selectMenu}><p id="1">CHOOSE PUZZLE</p><img id='1' className='menuIcon' src={rightArrow} /></div>
                <div className='menuItem' id='2' onClick={this.props.selectMenu}><p id="2">TROPHY ROOM</p><img id='2' className='menuIcon' src={rightArrow} /></div>
                <div className='menuItem' id='3' onClick={this.props.selectMenu}><p id="3">INSTRUCTIONS</p><img id='3' className='menuIcon' src={rightArrow} /></div>
                <div className='menuItem' id='4' onClick={this.props.restart}><p id="4">START OVER</p></div>
            </div>

        )
    }
}

export default Menu;
