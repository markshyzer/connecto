import React from 'react';
import './Dot.css';


class Dot extends React.Component{
constructor(){
    super();

}

// dotstyle = () =>{
//     let valid = (this.props.valid ? 'valid ' : '')
//     let selected = (this.props.selected ? 'selected ' : 'unselected ')
//     return 'dot ' + selected + selected + valid
// }



    render(){
        return(
            <div className={'dot '+this.props.selected+ ' ' +this.props.valid} 
            onClick={() => this.props.clickDot(this.props.dotIndex)}
            style = {{left: this.props.x+"px", top: this.props.y+'px'}}
            >{this.props.dotIndex} x, {this.props.x} y, {this.props.y}, {this.props.selected},</div>

        )
    }
}

export default Dot;
