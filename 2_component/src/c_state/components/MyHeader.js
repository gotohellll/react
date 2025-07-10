import { Component } from 'react';

class MyHeader extends Component{
  render(){
    return (
    <header>
      <h1>{this.props.title}</h1>
      <p>{this.props.content}</p>
    </header>
    )
  }
}

export default MyHeader;