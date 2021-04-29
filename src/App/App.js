import React from 'react';
import './App.css';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';

import FlexGrowLayout from './components/FlexGrowLayout/FlexGrowLayout';
import Thumbnail from './components/Thumbnail/Thumbnail';
import NavBar from './components/NavBar/NavBar';
import store, {initialState as storeInitialState} from './store/store';
import {
  Switch,
  Link,
  Route
} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={currentMeme:storeInitialState.currentMeme,images:storeInitialState.images};
    console.log(this.state);
  }

  componentDidMount(){
    this.setState({currentMeme:store.getState().currentMeme,images:store.getState().images});
    store.subscribe(()=>{
      this.setState({currentMeme:store.getState().currentMeme,images:store.getState().images});
    })
  }
  render(){
    return <div className="App">
      
      <NavBar/>
      {/* <Link to="/">Home</Link>&nbsp;
      <Link to="/connard">Connard</Link>&nbsp;
      <Link to="/thumbnail">Thumbnail</Link>&nbsp;
      <Link to="/editor">Créer nouveau meme</Link>&nbsp;
      <Link to="/editor">meme id : 1</Link>&nbsp; */}
      <Switch>
        <Route path="/" exact> 
          <div>Demat sur mon site de générateur de meme</div>
        </Route>
        <Route path="/thumbnail">
          <Thumbnail images={this.state.images}/>
        </Route>
        <Route path="/editor" exact>
          <FlexGrowLayout>
            <MemeViewer meme={{...this.state.currentMeme,image:this.state.images.find(elem=>elem.id===this.state.currentMeme.imageId)}}/> 
            <MemeForm/>
          </FlexGrowLayout>
        </Route>
        <Route path="/editor/:id">
          <FlexGrowLayout>
            <MemeViewer meme={{...this.state.currentMeme,image:this.state.images.find(elem=>elem.id===this.state.currentMeme.imageId)}}/> 
            <MemeForm/>
          </FlexGrowLayout>
        </Route>
        <Route path="/"> 
          <div className="ERROR-404">Page inexistante</div>
        </Route>
      </Switch>
      {JSON.stringify(this.state)}

    </div>
  }
}

export default App;