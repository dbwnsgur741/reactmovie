import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

function Food({ name , imgs , rating }){
    return (
        <div class="mt-3">
            <p class="text-center font-weight-light">I Like { name } </p>
            <p class="text-center"><mark>{rating}</mark></p>
            <img src={imgs} alt={name} style={{ width: '100%' }}/>
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    imgs: PropTypes.string.isRequired,
    rating: PropTypes.number
}

const foodILike = [
        {
            'id':1,
            'name': '그레이브즈',
            'img': 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8935c6b4025d320/5db05fc4bd24496c390ae4e4/RiotX_ChampionList_graves.jpg?quality=90&width=250',
            'rating':5
        },
        {
            'id':2,
            'name': '그라가스',
            'img':'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt795841adba722f85/5db05fc43a326d6df6c0e7b9/RiotX_ChampionList_gragas.jpg?quality=90&width=250',
            'rating':4
        },
        {
            'id':3,
            'name': '가렌',
            'img':'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte41a162aed9339b7/5db05fc60b39e86c2f83dc0d/RiotX_ChampionList_garen.jpg?quality=90&width=250',
            'rating':3
        },
        {
            'id':4,
            'name': '갱플랭크',
            'img': 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfdff3781ccfb2a5c/5db05fc689fb926b491ed811/RiotX_ChampionList_gangplank.jpg?quality=90&width=250',
            'rating':2
        }
];

// function App() {
//   return (
//     <div className="App" class="container">
//      <h1>Hello</h1>
//      <div class="row">
//      {foodILike.map(food => {
//          return (
//              <div class="col-6">
//                 <Food key={food.id} 
//                     name={food.name} 
//                     imgs={food.img}
//                     rating={food.rating}
//                 />
//             </div>
//             );
//      })}
//      </div>
//     </div>
//   );
// }

class App extends React.Component{
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

export default App;
