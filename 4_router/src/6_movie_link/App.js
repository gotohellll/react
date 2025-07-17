import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

const App =()=>{
    const [isLoading, setIsLoading] = useState(true);

    const [movies, setMovies] = useState([])

    // 함수를 비동기적으로 실행 => 서버에 갔다오면 비동기로 처리 
    const getMovies = async ()=>{
        await axios.get('https://yts.mx/api/v2/list_movies.json') //영화정보사이트
            .then(result=>{
                // console.log(result.data.data.movies)

                const movies_temp = result.data.data.movies
                // setMovies(movies_temp); => ******
                setMovies([...movies_temp]);

                setIsLoading(false)
            })
    }

    useEffect(()=>{
        getMovies();
    },[])

    return(
        <div className="App">
            {isLoading? 
                <div className="App-header">로딩중</div> : 
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/"             element={<MovieList     movies={movies}/>} />
                            <Route path="/detail/:idx"  element={<MovieDetail   movies={movies}/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            }
        </div>
    )
}

export default App

