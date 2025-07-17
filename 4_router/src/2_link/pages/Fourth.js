import { useParams } from "react-router-dom";

/* 
    리엑트 라우터가 제공하는 훅

    ` useMatch()
    ` useParams()
    ` useSearchParams()
    ` useLocation()
    ` useNavigate()
    

*/
const Fourth = (props)=>{

    let {idx, name} = useParams();

    return(
        <div>
            <p>여기는 영화 상세 페이지입니다.</p>
            <hr/>
            <p>
                <span>{idx}</span> : {name}
            </p>
            <img src={`/imgs/${props.datas[idx].img}`}></img>
        </div>
    )
}

export default Fourth;