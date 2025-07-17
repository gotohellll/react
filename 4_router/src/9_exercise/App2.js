import axios from "axios"
import { useEffect, useState } from "react"
import '../App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"


const MovieList = (props)=>{

    const list = props.movies.map((movie, idx)=>{
        return(
            <div key={idx}>
                <div>
                    <h3>{movie.id} : {movie.title_long}</h3>
                    <img src={movie.medium_cover_image} alt={movie.title}></img><br/>
                    <span>
                        {
                            movie.genres.map((item, i)=>{
                                return(
                                    <span style={{'font-style' : 'italic'}}>
                                        {item}
                                        {i < movie.genres.length -1 ? ', ' : ''}
                                    </span>
                                )
                            })
                        }
                    </span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <p>영화 목록</p>
            {list}
        </div>
    )
}

const App = ()=>{

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async ()=>{
        await axios.get('http://yts-proxy.now.sh/list_movies.json')
            .then(result=>{
                console.log(result.data.data.movies)

                const temp = result.data.data.movies
                setMovies([...temp])

                setIsLoading(false)

            })
    }

    useEffect(()=>{
        getMovies();
    },[])

    return(
        <div className="App">
            {isLoading? 
                <div className="App-header">로딩중</div>:
                <div>
                    <MovieList movies={movies}/>
                </div>
            }
        </div>
    )
}

export default App