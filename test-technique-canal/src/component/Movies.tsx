import React, {useEffect} from "react";
import './Movies.css';
import MovieCard from "./MovieCard";
import {getEntities} from "../reducer/movies.reducer";
import {useAppDispatch, useAppSelector} from "../config/store";

const Movies = (props) => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getEntities(props.typeOfMovie));
    }, []);

    const movieList = useAppSelector((state) => state.movies.entity.results);

    return (
        <div className="movie-list">
            {movieList?.map((movie) => (
                <MovieCard movie = {movie}/>
            ))}
        </div>
    );
}

export default Movies;