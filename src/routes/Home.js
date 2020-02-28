import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {data: { data : { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        this.setState({ movies, isLoading: false });
    };

    componentDidMount(){
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section class="container">
            {isLoading ? 
            (<div class="loader">
                <span class="loader__text">Loading ...</span>
            </div>) : 
            (
                <div class="container">
                <div class="row">
                    {movies.map(movie => (
                        <Movie
                        key={movie.id} 
                        id={movie.id} 
                        year={movie.year} 
                        title={movie.title} 
                        summary={movie.summary} 
                        poster={movie.medium_cover_image}/>
                ))}
                </div>
                </div>
            )
        }
        </section>
    )
    }
}

export default Home;