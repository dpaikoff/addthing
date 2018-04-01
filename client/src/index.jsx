import React from 'react';
import ReactDom from 'react-dom';
import { Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Map from './components/map';
import NavBar from './components/nav';
import ToolBar from './components/toolbar';

const App = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <NavBar />
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={2}>
            <ToolBar />
          </Grid.Column>
          <Grid.Column width={6}>
            <Map />
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

window.App = App;
//export default App;
