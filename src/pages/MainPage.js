import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';

const movie = {
    title: 'Guardians of the Galaxy Vol. 3',
    poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    release_date: '2020-05-01',
    genres: [
        'Action',
        'Adventure',
        'Science Fiction'
    ]
};

export default function MainPage() {
    return <MovieCard movie={movie} />;
}
