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
        currentIndex: 3,
        numOfCards: data.length
    };
  }
  

    navPrevious = () => {
    this.setState(({ currentIndex }) => ({
        currentIndex: currentIndex - 1
    }));
    };

    navNext = () => {
        this.setState(({ currentIndex }) => ({    
        currentIndex: currentIndex + 1
    }));
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

{/* <h1>I am the card</h1>
        <h2>ID: {this.state.cardData[this.state.currentIndex].id}/25</h2>
        <h2>Name: {this.state.cardData[this.state.currentIndex].name.first} {this.state.cardData[this.state.currentIndex].name.last}</h2>
        <h2>City: {this.state.cardData[this.state.currentIndex].city}</h2>
        <h2>Country: {this.state.cardData[this.state.currentIndex].country}</h2>
        <h2>Employer: {this.state.cardData[this.state.currentIndex].employer}</h2>
        <h2>Title: {this.state.cardData[this.state.currentIndex].title}</h2>
        <h2>Favorite Movies: {this.state.cardData[this.state.currentIndex].favoriteMovies[0]}</h2> */}