import React from 'react';

import { 
  BrowserRouter, 
  Switch, 
  Route,
  Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Videos from '../pages/Videos/Videos';
import Upload from '../pages/Upload/Upload';

class App extends React.Component {

  render () {
    return (
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path = '/' render={()=><Redirect to='/videos/1af0jruup5gu'/>} />
            <Route path = '/videos/:id' component = { Videos } />
            <Route path = '/upload' component = { Upload } />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;