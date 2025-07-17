import { useState } from "react";
import produce from 'immer';

const App = ()=>{

    let [studentMng, setStudentMng] = useState([
        { dept : '컴공', title : '자바', score : 3}
        ,{ dept : '소공', title : '파이썬', score : 1}
        ,{ dept : '소공', title : '리엑트', score : 2}
        ,{ dept : '컴공', title : '디비', score : 2}
    ])

    const [showList, setShowList] = useState(false)

    // 목록 화면 출력
    const handleList = ()=>{
        console.log(studentMng)
        setShowList(true);
    }

    // 전개연산자 방식으로 세번째 과목 '리엑트'를 '도커'로 변경
    const handleSpread = ()=>{
        const temp = studentMng.map((item, idx)=>(idx === 2)?{...item, title:'도커'}:item)

        setStudentMng(temp)
    }

    // immer 방식으로 두번째 과목 '파이썬'을 'es6문법'으로 변경
    const handleImmer = ()=>{
        const temp = produce(studentMng, (draft)=>{
            draft[1].title='es6문법'
        })

        setStudentMng(temp)
    }

    

    return(
        <div>
            <button onClick={handleSpread}>전개연산자 방식</button><br/>
            <button onClick={handleImmer}>immer 방식</button><br/>
            <hr/>
            <button onClick={handleList}>확인</button>
            {
                showList &&
                    studentMng.map((item, idx)=>{
                        return(
                            <ul  key={idx}>
                                <li>dept:{item.dept} , title:{item.title}, score:{item.score}</li>
                            </ul>
                        )
                    })
            }
        </div>
    )
}

export default App;