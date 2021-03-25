import './App.css';
import Puzzle from './components/Puzzle/Puzzle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import MenuPage from './components/MenuPage/MenuPage';
import React from 'react';
import galaxy from './PuzzleFiles/galaxy';
import garden from './PuzzleFiles/garden';
import beach from './PuzzleFiles/beach';
import WinPage from './components/WinPage/WinPage';


class App extends React.Component{
  constructor(){
      super();
      this.state = {
        beachTrophy: false,
        gardenTrophy: false,
        galaxyTrophy: false,
        menu: false,
        menuPage: 0,
        win: false, 
        puzzle: beach,
        puzzleName: 'beach',
        clear: false,
        showWin: false,
      };
  }

  checkWin = (score, length) => {
    if (score === length) {
      this.setState({showWin: true})
      this.awardTrophy()
    }
  }

  hideWin = () => {
    this.setState({showWin: false})
  }

  awardTrophy = () => {
    if (this.state.puzzle.name === 'beach'){
      this.setState({beachTrophy : true})
    } else if (this.state.puzzle.name === 'garden'){
      this.setState({gardenTrophy : true})
      } else if (this.state.puzzle.name === 'galaxy'){
        this.setState({galaxyTrophy : true})
    }
  }

  showWinPage = () => {
    if (this.state.showWin === true){
      return <WinPage hideWin={this.hideWin}></WinPage>
    } else {
      return
    }
  }

  setPuzzle = (e) => {
    e.stopPropagation()       
    let puzzles = [beach, garden, galaxy]
    // let puzzleNames = ['beach', 'garden', 'galaxy']
    this.setState({puzzle: puzzles[e.target.id]}, this.showMenu())  
    // this.showMenu()
    // this.setState({menuPage : 0})
  }

  restart = () => {
    this.setState({clear: !this.state.clear}, this.showMenu())
    // this.showMenu()
  }

  displayMenu = () => {
    if (this.state.menu === false){
      return
    } else {
      return <Menu selectMenu={this.selectMenu} setPuzzle={this.setPuzzle} restart={this.restart}></Menu>
    }
  }

  displayMenuPage = () => {
    if (this.state.menuPage === 0) {
      return
    } else {
      return (<MenuPage content={this.state.menuPage} selectMenu={this.selectMenu} setPuzzle={this.setPuzzle}
        beachTrophy={this.state.beachTrophy}
        gardenTrophy={this.state.gardenTrophy}
        galaxyTrophy={this.state.galaxyTrophy}
        ></MenuPage>)
    } 
  }

  selectMenu = (e) => {
    e.stopPropagation()
    this.setState({menuPage: parseInt(e.target.id)})
  }

  showMenu = () => {
    this.setState({menu: !this.state.menu, menuPage: 0 }, ()=>{})
  }
  
  
      render(){
          return(
            <div>
              <Header
              showMenu={this.showMenu}
              ></Header>
              {this.displayMenu()}
              {this.displayMenuPage()}
              {this.showWinPage()}
              <Puzzle puzzle={this.state.puzzle} restart={this.restart} clear={this.state.clear} checkWin={this.checkWin}></Puzzle>
              <Footer></Footer>
            </div>
  
          )
      }
  }
  
  export default App;

