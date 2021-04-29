import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.module.scss';
import MemeViewer from '../MemeViewer/MemeViewer';
import { REST_ADR, REST_ENDPOINTS } from '../../config/config';
import FlowLayout from '../FlowLayout/FlowLayout';
import store, { initialState } from '../../store/store';
import { Link } from 'react-router-dom';

// const meme=JSON.parse('{"id": 0,"nom": "multipass","text": {"x": 400,"y": 500,"value": "MOULTI PASS !!","color": "#000000","bold": false,"underline": false},"imageId": 0}');
const Thumbnail = (props) => {
  const [memes, setmemes] = useState(initialState.memes)

  useEffect(()=>{
    setmemes(store.getState().memes);
    store.subscribe(()=>{
      setmemes(store.getState().memes);
    })
  },[]); //vider le deuxième param permet de faire le declenchement qu'a l'instantiation

  return (
    <div className={styles.Thumbnail} data-testid="Thumbnail">
      <FlowLayout>
      {memes.map((e,i)=><Link to={'/editor/'+e.id}>
        <MemeViewer meme={{...e,image:props.images.find(ee=>ee.id===e.imageId)}} key={'thumb-'+i}/>
      </Link>
      )}
      </FlowLayout>
    </div>
  );
};

Thumbnail.propTypes = {
  images:PropTypes.array.isRequired,
};

Thumbnail.defaultProps = {};

export default Thumbnail;
