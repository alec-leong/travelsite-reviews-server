import React, { Component } from 'react';
import { Label, P } from '../css/style';

class TravelerType extends Component {
  constructor(props) {
    // initialize props
    super(props);

    // destructure
    const { types } = this.props;

    // initialize state
    this.state = {
      types,
    };

    // bind
    this.handleInputCheckboxChange = this.handleInputCheckboxChange.bind(this);
  }

  handleInputCheckboxChange(event) {
    const { name, checked } = event.target; // destructuring
    const index = event.target.getAttribute('index'); // index - A custom DOM attribute
    const types = [...this.state.types]; // array copy

    types[index] = {
      [name]: checked,
    };

    this.setState({
      types,
    });

    this.props.handleChange(types);
  }

  render() {
    const { types } = this.state;

    return (
      <div>
        <P>Travel type</P>
        <form>
          {types.map((month, i) => {
            const [key] = Object.keys(month);

            return (
              <Label key={i}>
                <input
                  type="checkbox"
                  index={i}
                  name={key}
                  checked={month[key]}
                  onChange={this.handleInputCheckboxChange}
                />
                {key}
                <br />
              </Label>
            );
          })}
        </form>
      </div>
    );
  }
}

export default TravelerType;
