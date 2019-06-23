import {combineReducers} from 'redux';
const songsReducer = () => {
    return [
        {title: 'amar sunar bangla', duration: '3.20'},
        {title: 'Tir hara ei deuer sagor', duration: '3.50'},
        {title: 'Karar oi lowho kopat', duration: '4.50'},
        {title: '30 bocor poreo ami..', duration: '4.50'}
    ]
}

const selectedSongReducers = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({
    songs : songsReducer,
    selectedSong : selectedSongReducers
});