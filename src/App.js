import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
