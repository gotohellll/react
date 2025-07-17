import { useRef, useState } from "react";
import produce from 'immer';

//전개연산자 대신 불변성을 유지해주는 produce사용 

const App = ()=>{

    const nextId = useRef(1); //라이프사이클이 살아있는 동안 유지될 값 

    // 변수가 많아 한꺼번에 받아야할때는 객체 형태 사용
    const [formData, setFormData] = useState({
        userid : ''
        , username: ''
    })

    const [data, setData] = useState({
        array: []
        ,others : null
    })

    const onChange = (evt)=>{
        const {name, value} = evt.target

        // console.log(name + value)
        // 입력한 값이 계속 사라져서 전개연산자 사용해 기존값을 복사해두고 name을 입력된값value로 변경 
        // setFormData({...formData, [name]:value})

        //*********************** */
        //produce를 사용하면 (예전데이터, 함수)         => 전개연산자 사용한 코딩과 같은 맥락
        setFormData(produce(formData, draft =>{draft[name]=value}))
        
        //전개연산자를 사용하지 않았을 경우 : 기존에 입력한 값이 사라짐 
        // setFormData({[name]:value})

        // console.log(formData)

    }

    const onSubmit = (evt)=>{
        evt.preventDefault(); //기존 이벤트 막기

        //임시변수 (객체)
        const info = {
            id : nextId.current //pk값으로 사용할 값을 useRef로 생성
            ,userid : formData.userid
            ,username : formData.username
        }

        //입력받은 값을 배열에 입력 (항상 기존값을 받아야함 : 전개연산자 ***)
        // setData( {...data, array : data.array.concat(info)})

        setData(produce(data, draft=>{draft.array.push(info)}))
        nextId.current += 1; //pk값 증가 


        // 입력 후 화면 초기화 
        setFormData({userid:'', username:''})


    }

    const onRemove = (id)=>{
        // 배열에서 filter로 값을 찾음 , 배열의 요소를 하나하나 뽑아서 item안의 id와 넘겨받은 id가 같지않은지 확인
        // ex) 3번을 지우려고 하면 배열 0 ~ 5번 중 같지않은 애만 걸러냄 => 3만 남기고 다 지움 
        // setData({...data, array: data.array.filter(item=>item.id !== id)})
        setData(produce(data, draft=>{
            draft.array.splice(draft.array.findIndex(info=>info.id === id, 1))
        }))
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="userid" placeholder="아이디" 
                    value={formData.userid} onChange={onChange}/><br/>
                <input type="text" name="username" placeholder="이름" 
                    value={formData.username} onChange={onChange}/><br/>
                <button type="submit">등록</button>
            </form>
            <hr/>
            <div>
                <ul>
                    {   // {} : return 생략 못함
                        // () : return 생략 가능 
                        data.array.map((item,idx)=>(
                            <li key={item.id} onClick={()=>onRemove(item.id)}>{item.userid} : {item.username}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default App;
