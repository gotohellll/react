import { Component } from 'react';

// class MyMenu extends Component{
//     render(){        
//         return(
//             <div>
//                 <ul>
//                     <li>{this.props.data}</li>
//                 </ul>
//             </div>
//         );
//     }
// }

//클래스형은 Component를 상속받고 props를 쓸 때 this를 써야함 

function MyMenu(props){
    return(
        <div>
            <ul>
                <li>{props.data}</li>
            </ul>
        </div>
    );
}

//함수형은 props를 인자로 받아야함 

export default MyMenu;