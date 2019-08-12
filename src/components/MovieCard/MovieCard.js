import React from 'react';
import styles from './styles.css';

export default function MovieCard(props) {
    return <div className={styles.card} onClick={() => props.onClickHandler(props.movie.id)}>
        <img className={styles.card_image} src={props.movie.poster_path}></img>
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
