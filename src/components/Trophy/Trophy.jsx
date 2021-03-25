import React from 'react';
import './Trophy.css';
import trophy from '../../Icons_Trophy.png';
import outline from '../../Icons_Trophy_outline.png';


class Trophy extends React.Component{



    render(){
        return(
            // <div className='trophy'>
                <img className='trophy' src={this.props.trophy ? trophy : outline}/>
                // </div>

        )
    }
}

export default Trophy;