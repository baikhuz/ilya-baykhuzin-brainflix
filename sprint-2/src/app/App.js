import React from 'react';
import axios from 'axios';

import { 
  BrowserRouter, 
  Switch, 
  Route } from 'react-router-dom';

import Navbar from '../components/navbar';
import Videos from '../pages/videos';
// import NoMatch from '../components/nomatch';

const apiLinkVids = 'https://project-2-api.herokuapp.com/videos/';
const apiKey = '?api_key=d768575a-1d10-4607-925b-b8fd9fc88364/';

class App extends React.Component {

  // state = get request all vids
  componentDidMount() {
      axios
        .get(`${apiLinkVids}${apiKey}`)
        .then(request => {
          this.setState(request.data);
        })
        .catch(error => {console.log(error)});
        return;
  }

  

  render () {
    return (
      <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path = '/' render = {props => (
              <Videos {...props} videos = {this.state} />
            )} />
          </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
