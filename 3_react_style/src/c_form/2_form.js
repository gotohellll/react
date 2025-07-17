import { useState } from "react";

function MyForm(props){

    const [nameValue, setNameValue] = useState('');
    const [msgValue, setMsgValue] = useState('');
    const [ctyValue, setCtyValue] = useState('');
    const [genValue, setGenValue] = useState('');

    const handleName = (event)=>{
        setNameValue(event.target.value);
    }

    const handleMsg = (event)=>{
        setMsgValue(event.target.value)
    }

    const handleCty = (event)=>{
        setCtyValue(event.target.value)
    }

    const handleGen = (event)=>{
        setGenValue(event.target.value)
        if (event.target.value === "male") setGenValue('남자')
        else setGenValue('여자')
    }

    const handleSubmit = (event)=>{
        event.preventDefault(); //submit이벤트 막기
        let message = `이름 : ${nameValue}  \n메세지 : ${msgValue} \n여행갈 나라는 : ${ctyValue} \n성별 : ${genValue}`;
        alert(message)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={nameValue} onChange={handleName}></input>
            {/* value를 지정하면 read only 여서 onChange 이벤트 걸어야함  */}
            <hr/>
            <label>메세지</label>
            <textarea value={msgValue} onChange={handleMsg}></textarea>
            <hr/>
            <label>여행갈 나라는</label>
            <select value={ctyValue} onChange={handleCty}>
                <option>외국</option>
                <option>멀리</option>
                <option>부탄</option>
                <option>한국</option>
            </select><br/>

            <label>성별</label>
                <input type="radio" name="gender" value="male" onChange={handleGen}/>남자
                <input type="radio" name="gender" value="female" onChange={handleGen}/>여자
            <hr/>



            <button type="submit">전송</button>
        </form>
    )
}

export default MyForm;