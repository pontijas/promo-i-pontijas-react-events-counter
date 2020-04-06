import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  upCount = () => {
    console.log('me han clickado');
  };

  downCount = () => {
    console.log('me han clickado');
  };

  resetCount = () => {
    console.log('me han clickado');
  };

  render() {
    return (
      <div className="app-container">
        <section className="counter-container">
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
          <section className="btn-section">
            <button onClick={this.upCount} className="btn-up">
              Up
            </button>
            <button onClick={this.downCount} className="btn-down">
              Down
            </button>
            <button onClick={this.resetCount} className="btn-reset">
              Reset
            </button>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
