import React  from 'react';
import PropTpyes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import './Movie.css';

// Dumb component
function Movie ({title, poster, genres, synopsis}) {
    return (
        <div className ="Movie">
            <div className = "Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className = "Movie_Columns">
                <h1>{title}</h1>
                <div className = "Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie_Synopsis">
                <LinesEllipsis 
                    text={synopsis}
                    maxLine='3'
                    ellipsis= ' ...'
                    trimRight
                    basedOn = 'letters'
                />
                </div>

            </div>
        </div>
    )
}

function MoviePoster ({poster, alt}) {
    return (
        < img className="Movie_Poster" src ={poster} alt={alt} title={alt} />
    )
}

function MovieGenre ({genre}) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTpyes = {
    title: PropTpyes.string.isRequired,
    poster: PropTpyes.string.isRequired,
    genres: PropTpyes.array.isRequired,
    synopsis: PropTpyes.string.isRequired
}

MoviePoster.propTpyes = {
    poster: PropTpyes.string.isRequired,
    alt: PropTpyes.string.isRequired
}

MovieGenre.prototype = {
    genre: PropTpyes.string.isRequired
}
export default Movie