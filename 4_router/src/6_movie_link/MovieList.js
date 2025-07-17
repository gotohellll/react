import { Link } from "react-router-dom"

const MovieList = (props)=>{

    let list = props.movies.map((movie, idx)=>{
        return (
            <div key={idx}>
                <div>
                    <Link to={`/detail/${idx}`}> <h3>{movie.title}</h3></Link>
                    <h5>{movie.year}</h5>
                    <img src={movie.small_cover_image} alt=""></img>

                </div>
            </div>
        )
    })
    return(
        <div>
            <p>영화 목록 페이지</p>
            <hr/>
            {list}
        </div>
    )
}

export default MovieList