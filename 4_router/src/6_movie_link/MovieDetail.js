import { Link, useParams } from "react-router-dom"

const MovieDetail = (props)=>{

    const {idx} = useParams(); //MovieList에서 보낸 idx 파라미터 받음 

    return(
        <div>
            <h3>{props.movies[idx].title} ({props.movies[idx].year})</h3>
            <img src={props.movies[idx].small_cover_image} alt=""></img>
            <p>
                {
                    props.movies[idx].genres.map((item, i)=>{
                        return <span key={i}>
                            {item} 
                            {i < props.movies[idx].genres.length -1 ? ', ': ''}
                            </span>
                    })
                }
            </p>
            <Link to='/'>목록보기</Link>
        </div>
    )
}

export default MovieDetail