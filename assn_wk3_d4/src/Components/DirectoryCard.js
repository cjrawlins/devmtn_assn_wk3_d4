import React, { Component } from 'react';

//-----Import other created components-----//
import CardText from './CardText.js'


//-----Import data to display on card-----//
import data from '../data/data.js';
// import dataJSON from '../data/dataJSON.json'


class DirectoryCard extends Component {
  constructor() {
    super()
    
    this.navPrevious = this.navPrevious.bind(this);
    this.navNext = this.navNext.bind(this);
    
    this.state = {
        cardData: data,
        currentIndex: 0,
        numOfCards: data.length
    };
  }
  
    navPrevious = () => {
        if ( this.state.currentIndex === 0 ) {
            this.setState({ currentIndex: this.state.numOfCards -1 });
        } else {
            this.setState({ currentIndex: this.state.currentIndex - 1 });
        }
        };

    navNext = () => {
        if ( this.state.currentIndex === this.state.numOfCards -1 ) {
            this.setState({ currentIndex: 0 });
          } else {
            this.setState({ currentIndex: this.state.currentIndex + 1 });
          }
        };

  render() {
    
    return (
        <div>
            <header>
                <h2>Home</h2>
            </header>
            <main>
                <div id="dir-card">
                <CardText 
                    cardData = {this.state.cardData}
                    currIndex = {this.state.currentIndex}
                    numOfCards = {this.state.numOfCards
                    }
                />
                </div>
                <div className="button-controls" id="button-div">
                    <button className="nav-buttons" onClick={this.navPrevious} >{'< Previous'}</button>
                    <div id="edit-buttons">
                        <button className="edit-buttons">Edit</button>
                        <button className="edit-buttons">Delete</button>
                        <button className="edit-buttons">New</button>
                    </div>
                    <button className="nav-buttons" onClick={this.navNext} >{'Next >'}</button>
                </div>
            </main>
        </div>

    );
  }


}

export default DirectoryCard;

