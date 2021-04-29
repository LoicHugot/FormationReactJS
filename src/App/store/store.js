import { useParams } from 'react-router';
import {createStore} from 'redux';
import { REST_ADR, REST_ENDPOINTS } from '../config/config';

export const initialState={
    memes:[],
    images:[],
    currentMeme: { name: '', text: { x: 0, y: 0, value: '', bold: false, underline: false, color: '#000000' }, imageId: '' }
}
export const REDUCER_ACTIONS=Object.seal({
    ADD_IMAGE:'ADD_IMAGE',
    ADD_IMAGES:'ADD_IMAGES',
    ADD_MEME:'ADD_MEME',
    ADD_MEMES:'ADD_MEMES',
    SET_CURRENT: 'SET_CURRENT',
    CLEAR_CURRENT: 'CLEAR_CURRENT',
    SET_CURRENT_MEME_ID: 'SET_CURRENT_MEME_ID',
});
const PRIVATE_REDUCER_ACTIONS=Object.seal({
    INIT:'INIT',
});
function reducer(state=initialState,action){
    console.log(action);
    const typeaction=action.type.includes('@@redux/INIT')?PRIVATE_REDUCER_ACTIONS.INIT:action.type;
    switch(typeaction)
    {
        //init
        case PRIVATE_REDUCER_ACTIONS.INIT:
            fetch(`${REST_ADR}${REST_ENDPOINTS.IMAGES}`)
                .then(f=>f.json())
                .then(arr=>{
                    store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGES,values:arr});
                    
                })
            fetch(`${REST_ADR}${REST_ENDPOINTS.MEMES}`)
                .then(f=>f.json())
                .then(arr=>{
                    store.dispatch({type:REDUCER_ACTIONS.ADD_MEMES,values:arr});
                    
                })
        return state;
        //actions public
        case REDUCER_ACTIONS.ADD_MEME : return {...state, memes:[...state.memes,action.value]};
        case REDUCER_ACTIONS.ADD_MEMES : return {...state, memes:[...state.memes,...action.values]};
        case REDUCER_ACTIONS.ADD_IMAGE : return {...state, images:[...state.images,action.value]};
        case REDUCER_ACTIONS.ADD_IMAGES : return {...state, images:[...state.images,...action.values]};
        case REDUCER_ACTIONS.SET_CURRENT : return {...state, currentMeme:action.value};
        case REDUCER_ACTIONS.CLEAR_CURRENT : return {...state, currentMeme:initialState.currentMeme};
        case REDUCER_ACTIONS.SET_CURRENT_MEME_ID : 
        const meme=state.memes.find(e=>e.id===action.value);
        return {...state, currentMeme:meme?meme:initialState.currentMeme};
        default : return state;
    }
}

const store=createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlTest'}});
// store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlTest2'}});
// store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlTest3'}});
// store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlTest4'}});

export default store;
// let state=reducer(undefined, {type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlImage'}});
// console.log(state);
// state=reducer(state, {type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlImage2'}});
// console.log(state);
// state=reducer(state, {type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'urlImage3'}});
// console.log(state);