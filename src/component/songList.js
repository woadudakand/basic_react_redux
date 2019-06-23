import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {ListGroup, Button} from 'react-bootstrap';
import {selectSong} from '../actions/index';
class SongList extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.props.songs.map( song => {
                            return (
                                <Fragment key={song.title}>
                                    <ListGroup.Item style={{overflow: 'auto'}}>
                                       {song.title}
                                        <Button className="float-right" 
                                        onClick={() => this.props.selectSong(song) } >
                                            Select
                                        </Button>
                                    </ListGroup.Item>
                                </Fragment>
                            )
                        })
                    }
                </ListGroup>
            </div>
        )
    }
};

function mapStateToProps(state ) {    
    return {songs : state.songs }
};
export default connect(mapStateToProps, {selectSong}) (SongList);
