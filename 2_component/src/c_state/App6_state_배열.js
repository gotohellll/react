
import {useState} from 'react'

let App = ()=> {
    // 값 변경하는 변수 지정 
    let [title, setTitle] = useState(['맛집1', '맛집2', '맛집3'])

    // 눌려진 요소의 인덱스에 의해 값 변경 
    let setItemContent = (idx)=>{
        let newItem = ['호남식당', '학식', '짬뽕집']
        // console.log(newItem)
        title[idx] = newItem[idx] // newItem의 0번째를 title의 0번째 값으로 덮어버림 
        console.log(title)
        // setTitle(title) // 값이 바뀌긴 하나 화면이 변경이안됨 => 얕은 복사 
        setTitle([...title]) //깊은복사 필요 
    }

/* 
setTitle(title) : 얕은 복사(주소복사)
참조만 복사: 원본 title 객체의 메모리 주소를 그대로 전달
React가 변경을 감지하지 못함: 같은 참조이므로 React는 값이 변경되지 않았다고 판단
화면 업데이트 안됨: React의 리렌더링이 발생하지 않음

setTitle([...title]) : 깊은 복사 (값 복사)
새로운 배열 생성: 전개 연산자(...)로 원본 배열의 모든 요소를 복사하여 새로운 배열 생성
새로운 참조: 완전히 새로운 메모리 주소를 가진 배열이 생성됨
React가 변경을 감지: 새로운 참조이므로 React는 상태가 변경되었다고 인식
화면 업데이트됨: React의 리렌더링이 발생하여 UI가 업데이트됨

=>
React는 참조 동등성(Reference Equality)을 사용하여 상태 변경을 감지
같은 객체/배열을 참조하면 변경되지 않았다고 판단하고, 새로운 참조를 받으면 변경되었다고 판단하여 리렌더링을 수행
따라서 상태 업데이트 시에는 항상 새로운 참조를 생성해야 React가 변경을 감지하고 화면을 업데이트

 */
    return(
        <div>
            <div>{title}</div>
            <button onClick={()=>{
                setTitle(['변경1', '변경2', '변경3'])
            }}>변경</button>
            <hr/>
            <ul>
                {
                    title.map((item, idx)=>{ // 집합이니 forEach 또는 map => return을 받기위해 map사용 , 하나씩 뽑아 item 변수에 담음 
                        // return(<li key={idx} onClick={()=>{setItemContent(idx)}}>{item}</li>)
                        return(<li key={idx} onClick={()=>{
                            let newItem = ['호남식당', '학식', '짬뽕집']
                            title[idx] = newItem[idx] // newItem의 0번째를 title의 0번째 값으로 덮어버림 
                            // setTitle(title)
                            setTitle([...title])
                        }}>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}

// 목록보기에 key가 없으면 에러 
// Each child in a list should have a unique "key" prop => 개발자모드 console에서 확인가능

export default App