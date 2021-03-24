import React from 'react';
import Dot from '../Dot/Dot'
import Line from '../Line/Line'
import './Puzzle.css';
import galaxy from '../../PuzzleFiles/galaxy';
import garden from '../../PuzzleFiles/garden';



class Puzzle extends React.Component{
    constructor() {
        super();
        this.state = { 
            move: [],
            score: 0,
            puzzle : garden,
            
            puzzle2: {
                dot: [
                    { x: 382, y: 328.6, selected: false, valid: true },
                    { x: 673.4, y: 503.6, selected: false, valid: true },
                    { x: 378.4, y: 500, selected: false, valid: true },
                    { x: 82.5, y: 495.5, selected: false, valid: true },
                    { x: 521.9, y: 587.3, selected: false, valid: true },
                    { x: 229.6, y: 582.9, selected: false, valid: true },
                    { x: 524.6, y: 758.5, selected: false, valid: true },
                    { x: 226, y: 754, selected: false, valid: true },
                    { x: 668.1, y: 844.9, selected: false, valid: true },
                    { x: 374, y: 840.5, selected: false, valid: true },
                    { x: 78, y: 836.9, selected: false, valid: true },
                    { x: 369.5, y: 1011.6, selected: false, valid: true },
                ],
                line: [
                    [0,1,'unselected'],
                    [0,3,'unselected'],
                    [0,2,'unselected'],
                    [0,4,'unselected'],
                    [0,5,'unselected'],
                    [1,2,'unselected'],
                    [1,4,'unselected'],
                    [1,6,'unselected'],
                    [1,8,'unselected'],
                    [2,3,'unselected'],
                    [2,6,'unselected'],
                    [2,7,'unselected'],
                    [3,5,'unselected'],
                    [3,7,'unselected'],
                    [3,10,'unselected'],
                    [4,5,'unselected'],
                    [4,8,'unselected'],
                    [4,9,'unselected'],
                    [5,9,'unselected'],
                    [5,10,'unselected'],
                    [6,7,'unselected'],
                    [6,8,'unselected'],
                    [6,11,'unselected'],
                    [7,10,'unselected'],
                    [7,11,'unselected'],
                    [8,9,'unselected'],
                    [8,11,'unselected'],
                    [9,10,'unselected'],
                    [9,11,'unselected'],
                    [10,11,'unselected']
                    ]
            }
        };
    }

    clickDot = (dotIndex) => {
        // console.log(this.state.puzzle.dot[dotIndex])
        if (this.state.puzzle.dot[dotIndex].valid){
            let newDot = [...this.state.puzzle.dot]
            newDot[dotIndex].selected = !(newDot[dotIndex].selected)
            let newMove = [...this.state.move]
            newMove.push(dotIndex)
            // console.log('push move', newMove)
            this.setState({puzzle: {...this.state.puzzle, dot: newDot}})
            this.setState({move: [...newMove]}, () => this.checkLegal())
            // console.log(this.state.puzzle.dot[dotIndex])
            // console.log('this.state.move', this.state.move[0])
            this.setState({score: this.state.score+1}, this.checkWin())

        }

    }

    checkWin = () => {
        if (this.state.score === this.state.puzzle.dot.length-1) {
            alert("You win!")
        }
        console.log('score', this.state.score)
    }

    blockPath = () => {

        // console.log("current move:", this.state.move[this.state.move.length-1] )
        let newLine = [...this.state.puzzle.line]
        let prevDot = this.state.move[0]
        this.state.move.forEach(function (m,i){
            if (i > 0){
                newLine.forEach(function (line, index){
                    if(line.includes(m) && line.includes(prevDot)){
                        console.log('the line includes ', m, 'and ', prevDot)
                        newLine[index].splice(2, 1, 'used')
                    }
                })
            }
            prevDot = m
        })
        // this.setState({line: [...newLine]}, () => console.log('used:', this.state.line))
        this.setState({puzzle: {...this.state.puzzle, line: [...newLine]}})

    }

    checkLegal = () => {
        let current = this.state.move[this.state.move.length-1]
        console.log('current move', current)

        let newLine = [...this.state.puzzle.line]
        newLine.forEach((line, index) => {
            if (line.includes(current) && !(this.state.puzzle.dot[line[0]].selected && this.state.puzzle.dot[line[1]].selected)) {
                line[2]='legal'
            } else {
                line[2]='unselected'
            }
        })

        let newDot = [...this.state.puzzle.dot]
        newDot.forEach((d) => {
            d.valid=false
            // console.log('logging', d.valid)})
        })
        // console.log('new dot', newDot,)
        newLine.forEach(function (line, index){
            if (line.includes('legal')) {
                newDot[line[0]].valid=true
                newDot[line[1]].valid=true
            }
        newDot.forEach((d) => {
                if (d.selected === true) {
                    d.valid=false
                }
            })
        })

        this.setState({puzzle: {...this.state.puzzle, line: [...newLine], dot: [...newDot]}}, () => this.blockPath())
        
        // this.blockPath()
    }

    lineLength = (pointOne, pointTwo) => {
        let a = Math.abs(this.state.puzzle.dot[pointOne].x - this.state.puzzle.dot[pointTwo].x)
        let b = Math.abs(this.state.puzzle.dot[pointOne].y - this.state.puzzle.dot[pointTwo].y)
        return Math.sqrt((a*a)+(b*b))
    }

    degrees = (pointOne, pointTwo) => {

        let adjacent = Math.abs(this.state.puzzle.dot[pointOne].y - this.state.puzzle.dot[pointTwo].y)
        let hypotenuse = this.lineLength(pointOne, pointTwo)
        if(this.state.puzzle.dot[pointOne].x > this.state.puzzle.dot[pointTwo].x) {
            return Math.acos(adjacent/hypotenuse)*-180/Math.PI
        } else {
            return Math.acos(adjacent/hypotenuse)*180/Math.PI
        }

    }

    render(){
        return(
            <div>
                <div>Move history: {this.state.move.map((m) => m+',')}</div>
                {this.state.puzzle.dot.map((d, i) => 
                <div className={'dot'+String(i)}>
                <Dot
                    x={d.x}
                    y={d.y}
                    selected={d.selected ? 'selected' : 'unselected'}
                    dotIndex={i}
                    key={i}
                    clickDot={this.clickDot}
                    valid={d.valid ? 'valid' : 'invalid'}>
                    
                </Dot>
                </div>
                )}

                {/* <div key="line1" className="line" style={{top: 382, left: 328, width: this.lineLength(0,1), transform: "rotate("+this.degrees(0,1)+"deg)" }}></div> */}
                {/* <div key="line2" className="line" style={{top: 382, left: 328, width: this.lineLength(0,11), transform: "rotate("+this.degrees(0,11)+"deg)" }}></div>
                <div key="line3" className="line" style={{top: 382, left: 328, width: this.lineLength(0,5), transform: "rotate("+this.degrees(0,5)+"deg)" }}>{this.degrees(0,3)}</div>
                <div key="line4" className="line" style={{top: 382, left: 328, width: this.lineLength(0,10), transform: "rotate("+this.degrees(0,10)+"deg)" }}></div>
                <div key="line5" className="line" style={{top: 382, left: 328, width: this.lineLength(0,7), transform: "rotate("+this.degrees(0,7)+"deg)" }}></div> */}
                {this.state.puzzle.line.map((l,i) =>
                <Line 
                x={this.state.puzzle.dot[l[0]].x}
                y={this.state.puzzle.dot[l[0]].y}
                lineLength={this.lineLength}
                start={l[0]}
                end={l[1]}
                degrees={this.degrees}
                status={l[2]}
                key={'line'+i+l[2]}
                ></Line>
                )}

                {/* <div key="line4" className="line" style={{top: 382, left: 328, width: this.lineLength(0,5), transform: "rotate(-60.8deg)" }}></div> */}

            </div>
            


        )
    }
}

export default Puzzle;
