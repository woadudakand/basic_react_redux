import React, { Fragment } from 'react';
import {connect} from 'react-redux';
const SongDetails = ({songs}) => {
    if (!songs)   {
        return <Fragment><h3>Select Song</h3></Fragment>
    }
        return (
            <Fragment>            
                <h3>Song Details</h3>
                <p>
                    Song Title : {songs.title}
                    <br />
                    Song Duration : {songs.duration}
                </p>
            </Fragment>
        )   
}

function mapStateToProps(state ) {   
    return {songs : state.selectedSong }
};
export default connect(mapStateToProps) (SongDetails);
