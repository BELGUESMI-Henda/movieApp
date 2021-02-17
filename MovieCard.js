import React from 'react'

function MovieCard({ el }) {

    return (
        <div className="img" >
            <div className="info_section">
                <div className="movie_header">
                    <img className="img" height='250px' width='250px'src={el.posterUrl} />
                    <h1>{el.title}</h1>
                </div>
                <div className="movie_desc">
                    <p className="text">{el.description}</p>
                </div>
                <div className="movie_social">
                    {"⭐".repeat(el.rate)}
                </div>
            </div>           

        </div>
    )
}

export default MovieCard