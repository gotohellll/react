import axios from "axios";
import { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberListComp = ()=>{



    const [members, setMembers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/api/member')
            .then(result=>{
                // console.log(result)

                const temp = result.data
                setMembers([...temp])

            })
    },[])

    return(
        <div>
            <h2 className="text-center">Member List</h2>
            <div className="row"> 
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map(member=>
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>{member.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

            <div className="row">
                <button className="btn btn-primary">회원가입</button>
            </div>
        </div>
    )
}

export default MemberListComp
