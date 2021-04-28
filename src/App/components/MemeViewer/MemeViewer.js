import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox ='0 0 1024 768'>
    <image x={0} y={0} href={props.meme.image}/>

    <text x={props.meme.text.x} y={props.meme.text.y} fill={props.meme.text.color} 
      style={{textDecoration:props.meme.text.underline?'underline':'none',
        fontWeight:props.meme.text.bold?'900':'500',}}>{props.meme.name}</text>

    <text x={props.meme.text.x} y={props.meme.text.y} fill={props.meme.text.color} 
      style={{textDecoration:props.meme.text.underline?'underline':'none',
        fontWeight:props.meme.text.bold?'900':'500',}}>{props.meme.text.value}</text>
  </svg>
);

MemeViewer.propTypes = {meme : PropTypes.object.isRequired};

MemeViewer.defaultProps = {};

export default MemeViewer;
