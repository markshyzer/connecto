import React from 'react';
import './Line.css';


class Line extends React.Component{


    render(){
        return(
            <div key={'line'+this.props.id} className={'line '+ this.props.status} style={{top: this.props.x, left: this.props.y, width: this.props.lineLength(this.props.start,this.props.end), transform: "rotate("+this.props.degrees(this.props.start,this.props.end)+"deg)" }}>{this.props.status}</div>


        )
    }
}

export default Line;