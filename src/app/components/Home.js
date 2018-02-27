import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Is a new Component!</p>
        <p>
          Your name is: {this.props.name}, your age are: {this.props.age}
        </p>
        <p>User object: Name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>{this.props.user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}</ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hobbies: PropTypes.array.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default Home;
