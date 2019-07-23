import React from 'react';

export default function MovieCard(props) {
    return <div>
        <img src={props.movie.poster_path}></img>
        <div>
            <span>{props.movie.title}</span>
            <span>{props.movie.release_date}</span>
        </div>
        <ul>
            {props.movie.genres.map(genre =>
                <li key={genre}>
                    {genre}
                </li>
            )}
        </ul>
    </div>;
}
