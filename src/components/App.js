import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="app-container">
        <section className="counter-container">
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
          <section className="btn-section">
            <button className="btn-up">Up</button>
            <button className="btn-down">Down</button>
            <button className="btn-reset">Reset</button>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
