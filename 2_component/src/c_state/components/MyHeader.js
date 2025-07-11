import { Component } from 'react';

// class MyHeader extends Component{
//   render(){
//     return (
//     <header>
//       <h1>{this.props.title}</h1>
//       <p>{this.props.content}</p>
//     </header>
//     )
//   }
// }

function MyHeader(props){
  return(
    <header>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </header>
  );
}

export default MyHeader;