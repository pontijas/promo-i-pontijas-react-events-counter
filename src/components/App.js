import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cristina',
    };
  }
  render() {
    return <h1>Hola {this.state.name}</h1>;
  }
}

export default App;
