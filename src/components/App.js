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
    this.setState(function (prevState) {
      return {
        count: prevState.count + 1,
      };
    });
  };

  downCount = () => {
    this.setState(function (prevState) {
      if (prevState.count >= 1) {
        return {
          count: prevState.count - 1,
        };
      }
    });
  };

  resetCount = () => {
    this.setState({ count: 0 });
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
