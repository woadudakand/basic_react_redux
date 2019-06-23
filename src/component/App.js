import React from 'react';
import SongList from './songList';
import SongDetails from './songDetails';
import {Container, Row} from 'react-bootstrap';

const App = () => {
    return(
        <Container>
                <h1 className="text-center pt-lg-3 pb-lg-3">React Redux Learn Project</h1>
            <Row>
                <div className="col-md-6">
                    <SongList />
                </div>
                <div className="col-md-6">
                    <SongDetails />
                </div>
            </Row>
        </Container>
    )
}


export default App;