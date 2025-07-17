import { Link } from "react-router-dom";

const styles = {
    navStyles : {
        color : 'red'
        ,backgroundColor : 'yellow'
        ,textDecoration : 'none'
        ,border : '2px dashed blue'

    },

    lineStyle : {
        display : 'inline'
        ,padding : '20px '
    }
    
}

const Menu = ()=>{

    return(
        <div style={styles.navStyles}>
            <ul>
                <li style={styles.lineStyle}>
                    {/* a태그는 전체 페이지를 바꿔버림 => 리엑트에서 a태그 대신 Link 사용*/}
                    {/* <a href="/">홈</a> */}
                    <Link to='/'>홈2</Link>
                </li>
                <li style={styles.lineStyle}>
                    {/* <a href="/first">첫번째</a> */}
                    <Link to='/first'>첫번째2</Link>
                </li>
                <li style={styles.lineStyle}>
                    {/* <a href="/second">두번째</a> */}
                    <Link to='/second'>두번째2</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
