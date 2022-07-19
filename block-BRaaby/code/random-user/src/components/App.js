import React from 'react';
import '../style/App.css';
import Main from "./Main"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
    }
  }
  render(){
    return(
      <>
      <Main />
      </>
    )
  }
  
}

export default App;
