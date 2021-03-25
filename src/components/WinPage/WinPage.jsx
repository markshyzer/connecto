import React from 'react';
import './WinPage.css';
import Trophy from '../Trophy/Trophy'
import close from '../../Icons_Close.png'

class WinPage extends React.Component{
    render(){
        return(
            <div className='winPage' onClick={this.props.hideWin}>
                <div className='container'>
                    <img className='close' src={close} />
                    <h1 style={{color: 'var(--reddish)', textAlign: 'center'}}>Congratulations!</h1>
                    <Trophy trophy={true}></Trophy>
                    <h1 style={{color: 'var(--reddish)'}}>You've successfully completed the puzzle!</h1>
                </div>
            </div>

        )
    }
}

export default WinPage;