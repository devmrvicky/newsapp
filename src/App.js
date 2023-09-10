// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import News from './components/News'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'dark',
    }
  }
  changeTheme = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
    } else {
      this.setState({
        mode: 'light'
      })
    }
  }



  render() {
    return (
      <div>
        <Router>
          <Nav mode={this.state.mode} />
          <div className="container">
            <Routes>
              <Route exact path='/business' element={<News pageSize="20" country="in" categories="business" />} />
              <Route exact path='/entertainment' element={<News pageSize="20" country="in" categories="entertainment" />} />
              <Route exact path='/general' element={<News pageSize="20" country="in" categories="general" />} />
              <Route exact path='/health' element={<News pageSize="20" country="in" categories="health" />} />
              <Route exact path='/science' element={<News pageSize="20" country="in" categories="science" />} />
              <Route exact path='/sports' element={<News pageSize="20" country="in" categories="sports" />} />
              <Route exact path='/technology' element={<News pageSize="20" country="in" categories="technology" />} />
              <Route />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

