import './App.css';
import Button from './components/Button/Button'

const uneVar='Demat Breizh';
function App() {
  return (
    <div className="App">
    <Button label="Ok" onClick={(value)=>{
      console.log('Bravo tu as clique sur le bouton !!');
    }}
    style={{textDecoration: 'underline', fontStyle: 'Italic'}}/>
    <Button label="Cancel" couleurDeFond={'red'} taillePolice={24} onClick={(value)=>{}}/>
    <Button label="Don't know" couleurDeFond="orange" taillePolice={18} onClick={(value)=>{}}/>
    </div>
  );
}

export default App;
