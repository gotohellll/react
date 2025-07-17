import axios from "axios";
import '../App.css'
import { useEffect, useState } from "react";

const Item = (props)=>{

    return(
        <div>
            <div>{props.id} : {props.name}</div>
            <div>{props.url}</div><br/>
        </div>
    )
}

const App = ()=>{

    const [item, setItem] = useState([])

    const url = async ()=>{
        await axios.get('https://api.github.com/search/repositories?q=react')
            .then(result=>{
                // console.log(result.data.items)

                const temp = result.data.items
                setItem([...temp]);
            })
    }

    useEffect(()=>{
        url()
    },[])

    return(
        <div className="App">
            <div>
                {
                    item.map((item)=>{
                        return(
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.full_name}
                                url={item.html_url}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App;