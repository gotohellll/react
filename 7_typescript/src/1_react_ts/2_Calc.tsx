
//props를 받을때 자료형을 만들어야함 
type CalcPropsType = {
    x : number;
    y : number;
    op : string;
}

//들어갈 자료형은 컴포넌트 앞에 



const Calc = (props:CalcPropsType)=>{ //props 자료형 기술

    let result:number = 0;
    switch(props.op){
        case "+" : result = props.x + props.y; break;
        case "-" : result = props.x - props.y; break;
        default : result = -1;
    }


    return(
        <div>
            <h2>연산결과</h2>
            <div>
                {props.x} {props.op} {props.y} = {result}
            </div>
        </div>
    )
}

// 디폴트값은 컴포넌트 뒤에 
Calc.defaultProps = {
    x : 100
    , y :55
    , op : '+'
}

export default Calc;