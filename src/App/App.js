import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={counter:-1,lastClickedTime:null};
    console.log(this.state);
  }

  componentDidMount(){
    this.setState({counter:0});
  }
  render(){
    return <div className="App"> 
      <div style={{padding:'20px'}}>Les boutons ont été cliqués : {this.state.counter} fois<br/>
       {this.state.lastClickedTime &&  'dernier click ' + this.state.lastClickedTime.toISOString()}
       <MemeForm/>
       </div>

        
        
        <Button label="add" onClick={()=>{
          //this.state={...this.state,counter:this.state.counter+1};
          this.setState({counter:this.state.counter+1, lastClickedTime: new Date()});
          console.log(this.state);
        }} />
        <Button label="init" couleurDeFond="red" onClick={()=>{
          this.setState({counter:0});
          console.log(this.state);
        }} />

{JSON.stringify(this.state.formContent)}

    </div>
  }
}

export default App;