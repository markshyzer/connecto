import React from 'react';
import './Footer.css';
import hint from '../../Icons_Hint.png'
import redo from '../../Icons_Redo.png'


class Footer extends React.Component{
constructor(){
    super();

}

    render(){
        return(
            <footer>
                <img className='icon' src={redo} />
                <img className='icon' src={hint} />
                <h1>GARDEN PUZZLE</h1>
            </footer>

        )
    }
}

export default Footer;