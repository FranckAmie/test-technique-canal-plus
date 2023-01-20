import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import { getEntity } from "../reducer/movie.reducer";
import {useAppDispatch, useAppSelector} from "../config/store";
import './Movies.css';
import {ProductionCompany} from "../models/Movie.model";

function ProdCompany(props: { company: ProductionCompany }) {
    return <div {...props} className="style_1">
                <img src={"http://image.tmdb.org/t/p/w500"+props.company.logo_path} alt={props.company.name} className="" />
    </div>;
}

export const MovieDetail = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getEntity(id));
    }, []);

    const movieEntity = useAppSelector((state) => state.movie.entity);
    console.log(movieEntity);
    return (
        <div className="" style={{
            backgroundImage: "linear-gradient(to bottom right, rgba(31.5, 31.5, 31.5, 1), rgba(31.5, 31.5, 31.5, 0.84)), url(http://image.tmdb.org/t/p/w500"+ movieEntity.poster_path +")",
            backgroundSize: "cover",
            height: "80vh",
            minHeight: "500px",
            display: "flex"
        }}>
            <div className="movie-detail-heder">
                <div >
                    <img className="img-movie-header" src={'http://image.tmdb.org/t/p/w500'+movieEntity.poster_path}/>
                </div>
                <div>
                    <section className="header-description">
                        <div className="title ott_false" dir="auto">
                            <h2 className="34">
                                {movieEntity.title}
                            </h2>
                            <span className="release_date">{movieEntity.release_date}</span>

                            <div>
                                {movieEntity?.genres?.map((genre, i) => <span className="tag-genre" key={i}>{genre.name}</span> ) }
                            </div>

                        </div>

                        <div className="header_info">
                            <h3 dir="auto">Synopsis</h3>
                            <div className="overview" dir="auto">
                                <p>{movieEntity.overview}</p>
                            </div>
                        </div>

                        <div className="production_companies">
                            {movieEntity?.production_companies?.map((prod) => <ProdCompany company={prod}/> ) }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
