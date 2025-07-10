import { Component } from 'react';
import '../App.css';

class MyNav extends Component{
  render(){
    var lists = []
    var data = this.props.data
    for(var i=0; i<data.length; i++){
        lists.push(<li><a key={data[i].id} href={data[i].site}>{data[i].name}</a></li>)
    }
    return ( <ul>{lists}</ul>)
  }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      links : [
        { id: 'daum', name: '다음',  site : 'http://www.daum.net'},
        { id: 'naver', name: '네이버',  site : 'http://www.naver.com'},
        { id: 'nate', name: '네이트',  site : 'http://www.nate.com'}
      ]
    }
  }

  render(){    

    return (
      <div className='App-header'>
          <MyNav data={this.state.links}></MyNav>
      </div>
    )
  }



}

export default App;