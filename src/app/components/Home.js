import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
    };
    setTimeout(() => {
      this.setState({
        status: 1,
      });
    }, 3000);
  }
  increaseAge() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  decreaseAge() {
    this.setState({
      age: this.state.age - 1,
    });
  }
  render() {
    return (
      <div className="card blue-grey darken-1 large">
        <div className="card-content white-text">
          <span className="card-title">Home</span>
          <p>Is a new Component!</p>
          <p>
            Your name is: {this.props.name}, your age are: {this.state.age}
          </p>
          <p>
            Status: {this.state.status}
          </p>
          <p>User object: Name: {this.props.user.name}</p>
          <div>
            <h4>Hobbies</h4>
            <ul>{this.props.user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}</ul>
          </div>
          {this.props.children}
        </div>
        <div className="card-action">
          <button onClick={() => this.increaseAge()} className="waves-effect waves-light btn">
            Increase
          </button>
          <button onClick={() => this.decreaseAge()} className="waves-effect waves-light btn">
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  initialAge: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hobbies: PropTypes.array.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default Home;
