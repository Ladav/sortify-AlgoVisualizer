import React, { Component } from 'react';
import classes from './App.css';

import Header from '../components/Header/Header';
import AlgoVisualizer from '../components/AlgoVisualizer/AlgoVisualizer';
import Sidebar from '../components/Sidebar/Sidebar';

class App extends Component {
  componentDidMount() { console.log('[App.js] componentDidMount'); };

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <main className={classes.Main}>
          <AlgoVisualizer />
          <Sidebar />
        </main>
      </div>
    );
  };
}

export default App;