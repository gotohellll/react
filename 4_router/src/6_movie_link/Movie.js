

const Movie = (props)=>{

    return(
        <div>
            <div>{props.id} : {props.title} ({props.year})</div>
            <img src={props.poster} alt={props.title}></img>
            <p>{props.genres.map((item, idx)=>{
                return <span key={idx}>
                    {item}
                    {idx < props.genres.length - 1 ? ', ' : ''}
                    {/* 인덱스 갯수보다 하나 적게 콤마 출력 */}
                </span>
            })}</p>
            <hr/>
        </div>
    )
}

export default Movie;