import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';
import { IMG_FOLDER } from '../../config/config';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox ={props.meme.image?`0 0 ${props.meme.image.width} ${props.meme.image.height}`:'0 0 1000 800'}>
    {props.meme.image && <image x={0} y={0} href={IMG_FOLDER+props.meme.image.src}/>}

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
