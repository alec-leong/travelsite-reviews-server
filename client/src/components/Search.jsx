import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target; 

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault(); 

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        &#x1f50e;
        <input
          type="text"
          name="search"
          placeholder="Search reviews"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Search;
