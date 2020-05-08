import React, { Component } from 'react';
import ReviewList from './review/ReviewList';
import axios from 'axios';

// import Header from './Header';
// import Languages from './Languages';
// import TimeOfYear from './TimeOfYear';
// import TravelerType from './TravelerType';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  // initial
  componentDidMount() {
    axios.get('/reviews')
      .then(res => this.setState({ reviews: res }))
      .catch(console.error);
  }

  render() {
    const { reviews } = this.state;
    return (
      <ReviewList reviews={reviews} />
    );
  }
}
export default App;
