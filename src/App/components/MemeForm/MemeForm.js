import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../Button/Button';
import store, {initialState, REDUCER_ACTIONS} from '../../store/store'
// import { useParams, useHistory, useLocation } from 'react-router-dom';
import { withRouter} from 'react-router-dom'


function MemeForm (props) {
  const [formContent, setformContent] = useState(initialState.currentMeme);
  const [images, setimages] = useState(initialState.images);
  // console.log(useParams());
  // console.log(useHistory());
  // console.log(useLocation());
  console.log(props);
  useEffect(() => {
    setimages(store.getState().images);
    store.subscribe(()=>{
      setimages(store.getState().images);
      setformContent(store.getState().currentMeme);
    })
    
  }, []);

  useEffect(() => {
    if(undefined!==props.match.params.id){
      store.dispatch({type:REDUCER_ACTIONS.SET_CURRENT_MEME_ID,value:Number(props.match.params.id)})
    }
  }, [store.getState().images,store.getState().memes]);

  return (
    <form className={styles.MemeForm} data-testid="MemeForm">
      <h1>Meme Editor</h1>
      <label htmlFor="meme-name">Nom du meme</label>

      <input type="text" id="meme-name" placeholder="Entrer un nom" value={formContent.name} onChange={(evt) => {
        setformContent({ ...formContent, name: evt.target.value });
      }} /><br />

      <label htmlFor="meme-image">Image</label>
      <select id="meme-image" value={formContent.imageId} onChange={(evt) => {
        setformContent({ ...formContent, imageId: Number(evt.target.value) })
      }}>
        <option value=""></option>
        {
          images.map((e, i) => <option key={'option-image-' + i} value={e.id}>{e.nom}</option>)
        }
        {/* <option value="img/5element.jpg">5eme element</option> */}
        {/* <option value="img/futurama.jpg">Futurama</option> */}
      </select>

      <div className={styles.textEditor}>
        <label htmlFor="meme-text">Text</label>
        <input type="text" placeholder="Entrer un titre" value={formContent.text.value} onChange={(evt) => {
          setformContent({ ...formContent, text: { ...formContent.text, value: evt.target.value } });
        }} />
        <div className={styles.inlineContainer}>
          <label>
            <input type="number" id="meme-x" value={formContent.text.x} onChange={(evt) => {
              setformContent({ ...formContent, text: { ...formContent.text, x: evt.target.value } });
            }} />
            : X
          </label>
          /
          <label> Y :
            <input type="number" id="meme-y" value={formContent.text.y} onChange={(evt) => {
              setformContent({ ...formContent, text: { ...formContent.text, y: evt.target.value } });
            }} />
          </label><br />
          <label>Couleur du texte </label>
          <input type="color" value={formContent.text.color} onChange={(evt) => {
            setformContent({ ...formContent, text: { ...formContent.text, color: evt.target.value } });
          }} /><br />
        </div>

      </div>

      <div className={styles.inlineContainer}>
        <label> <input type="checkbox" checked={formContent.text.underline} onChange={(evt) => {
          setformContent({ ...formContent, text: { ...formContent.text, underline: evt.target.checked } });
        }} /> : underline </label>
        /
        <label> bold : <input type="checkbox" checked={formContent.text.bold} onChange={(evt) => {
          setformContent({ ...formContent, text: { ...formContent.text, bold: evt.target.checked } });
        }} /></label>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Button label="Cancel" couleurDeFond="red" onClick={() => { 
          setformContent(initialState.currentMeme);
          store.dispatch({type:REDUCER_ACTIONS.CLEAR_CURRENT,value:formContent}) }} />
        <Button label="Ok" couleurDeFond="darkgreen" onClick={() => { store.dispatch({type:REDUCER_ACTIONS.SET_CURRENT,value:formContent}) }} />
      </div>

    </form>
  )
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default withRouter(MemeForm);
