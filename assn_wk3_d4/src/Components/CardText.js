import React from 'react';


const CardText = (props) => {
    
    let index = props.currIndex;
    let text = props.cardData;

    
    return (
    <div id="card-div">
        <div className="card-text" id="cardNum">
            <h2>{text[index].id}/{props.numOfCards}</h2>
        </div>
        <div className="card-text" id="card-name">
            <h2 id="name-text">{text[index].name.first}  {text[index].name.last}</h2>
        </div>
        <div className="card-text card-info">
            <h4>From:</h4>
            <p>{text[index].city}</p>
        </div>
        <div className="card-text card-info">
            <h4>Job Title:</h4>
            <p>{text[index].employer}</p>
        </div>
        <div className="card-text card-info">
            <h4>Employer:</h4>
            <p>{text[index].title}</p>
        </div>
        {/* <div className="card-text card-info">
            <h4></h4>
        </div> */}
        <div className="card-text card-info" id="movies-list">
            <h4 id="movies-title">Favorite Movies:</h4>
                <ol>
                    <li>{text[index].favoriteMovies[0]}</li>
                    <li>{text[index].favoriteMovies[1]}</li>
                    <li>{text[index].favoriteMovies[2]}</li>
                </ol>
        </div>


    </div>
    )
}

export default CardText;