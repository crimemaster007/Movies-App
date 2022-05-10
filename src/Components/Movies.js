import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
    render() {
      let movie=movies.results
    return (
        <>
            {
                movie.length === 0 ?
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> :
                    <div>
                        <h3 className='text-center'><strong>Trending</strong></h3>
                        <div>
                            {
                                movie.map((movieObj)=>(
                                    <div className="card movies-card">
                                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top banner-img" />
                                        {/* <div className="card-body"> */}
                                        <h1 className="card-title movies-title">{movieObj.original_title}</h1>
                                        {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                                        
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                        {/* </div> */}
                                    </div>
                                ))
                            }
                        </div>

                    </div>
            }
            
      </>
    )
  }
}
