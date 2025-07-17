import axios from "axios";
import { useEffect, useState } from "react";
import Movie from './component/Movie'

const MovieList = ()=>{

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

        //2초 이후에 함수식 발생 
        // setTimeout(()=>{
        //     setIsLoading(false)
        // }, 2000) //2초 이후에 완료로 변경 
    },[])

    return(
        <div>
            {/* {isLoading?'로딩중....':'완료'} */}
            {isLoading?'로딩중....':
                // movies.map((movie)=>{return <Movie/>})
                movies.map(movie=> <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    poster={movie.small_cover_image}
                    genres={movie.genres}
                />)
            }
        </div>
    )
}

export default MovieList;