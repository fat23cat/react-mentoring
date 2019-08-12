import React from 'react';
import MovieCardsList from '../components/MovieCardsList/MovieCardsList';
import SearchHeader from '../components/SearchHeader/SearchHeader';

export default function MainPage() {
    return <>
        <SearchHeader />
        <MovieCardsList />
    </>;
}
