import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// eslint-disable-next-line

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                 <p>Europa Clicky Game</p>
              </Col>
              <Col xs={6} md={4}>
                 <p>Click an image to begin!</p>
              </Col>             
              <Col xs={6} md={4}>
                 <p>Score: 0 | Top Score: 0</p>
              </Col>
            </Row>
          </Grid>
        </header>
        <p className="App-intro">
          <h1>Clicky Game</h1>
          <h3>Click on the European landmarks to earn points, but no more than once!</h3>
        </p>
        <p className="App-cards">
          <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  {/* an-image-array-goes-here */}
                </Col>
              </Row>
            </Grid>
        </p>
      </div>
    );
  }
}

export default App;
