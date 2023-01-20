import React from "react";
import './MovieCard.css';
import {useNavigate} from "react-router-dom";

const MovieCard = (props) => {
    const navigate = useNavigate();

    function getColor(rate: number) {
        return rate < 5 ? "background-red" : rate < 7 ? "background-orange" : "background-green" ;
    }

    return (
        <div className="style_1" onClick={() => navigate('/movies/'+props.movie.id)}>
            <div className="image-container">
                <div className="wrapper-container">
                    <img className="image-card" src={'http://image.tmdb.org/t/p/w500'+props.movie.poster_path} alt= "image du film" />
                </div>
            </div>
            <div className="content">
                <div className="consensus tight">
                    <div className={"outer_ring " + getColor(props.movie.vote_average)}>
                        <div className="user_score_chart 5256cb1619c2956ff605c5ca" data-percent="81.0"
                             data-track-color="#204529" data-bar-color="#21d07a">
                            <div className="percent">
                                <span className="rate-percentage">{props.movie.vote_average *10} <small className="rate-percentage-symbol">%</small></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-title" >
                    <p title="">{props.movie.original_title}</p>
                </div>
                <small className="color-grey">{props.movie.release_date}</small>
            </div>
        </div>
    );
}

export default MovieCard;