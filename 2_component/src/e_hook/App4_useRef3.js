
/* 
    렌더링 성능을 최적화 하기 위해

        - useMemo( func, [])
        - useCallback(func, [])

*/

import { useState, useRef, useCallback } from 'react';
import '../App.css'
import produce from 'immer';

const App = ()=>{

    const nextId = useRef(1); //랜더링마다 새로운 값이 아니라 유지되는 값으로 사용하기위해 useRef

    //초기값 설정 
    const [formData, setFormdata] = useState({userid:''
                        , username : ''
                        , email : ''
    })

    //data의 array안에 값을 쌓음 
    const [data, setData] = useState({
        array : []
        , other : null
    })

    // input태그에 입력할때마다 함수 실행 
    const onInputChange = useCallback((evt)=>{
        const {name, value} = evt.target
        // console.log(`${name} : ${value}`)
        setFormdata({...formData, [name]:value}) }, [formData])//**** 
        //name이 같은애를 만나면 value로 값을 변경 

    

    // 등록누를때마다 함수 실행 
    const onSubmit = useCallback((evt)=>{
        // alert('ok') // 등록버튼 누를때마다 화면 깜빡임 : 서버 갔다와서 
        evt.preventDefault(); // 이벤트 막아줌

        const info = {
            id : nextId.current
            ,userid : formData.userid
            ,username : formData.username
            ,email : formData.email
        }

        // array에 새 항목 추가
        setData({...data, array: data.array.concat(info)}); //*****
        //array에 concat으로 info값을 붙임 

        // 입력 후 폼 데이터 초기화 
        setFormdata({userid: '', username: '', email: ''})

        //id값 하나씩 증가
        nextId.current += 1;

        // console.log(data); 콘솔말고 개발자모드 component에서 확인
    }, [formData, data])

    //삭제
    const onRemove = useCallback((id)=>{
        // 이 부분은 오늘 확인만 
        setData(produce(data, draft=>{ //produce를 사용 
            draft.array.splice(draft.array.findIndex(info=>info.id===id), 1);
        }))
    },[data])

    return (
        <div className='App'>
            <form onSubmit={onSubmit}>
                <input name="userid"    placeholder="아이디"  onChange={onInputChange}  value={formData.userid}/><br/>
                <input name="username"  placeholder="이름"    onChange={onInputChange}  value={formData.username}/><br/>
                <input name="email"     placeholder="이메일"  onChange={onInputChange}  value={formData.email}/><br/>
                <button type="submit">등록</button>
            </form>

            <hr/>
            <ul>
                {
                    data.array.map((info)=>
                        
                        <li key={info.id} onClick={()=> onRemove(info.id)}>
                            <span>{info.userid}:{info.username}:{info.email}</span>
                        </li>
                        
                    )
                }
            </ul>
        </div>
    )
}


export default App;