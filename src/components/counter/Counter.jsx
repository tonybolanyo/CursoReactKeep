import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.onCounterMore = this.onCounterMore.bind(this);
    this.onCounterLess = this.onCounterLess.bind(this);
  }

  onCounterMore() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onCounterLess() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }}>
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.onCounterMore}>Sumar</button>
        <p style={{ margin: '10px auto' }}>{this.state.counter}</p>
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.onCounterLess}>Restar</button>
      </div>
    );
  }
}

export default Counter;
