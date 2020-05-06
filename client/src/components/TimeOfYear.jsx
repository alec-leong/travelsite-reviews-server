import React, { Component } from 'react';
import { Label, P } from '../css/style';

const data = [
  { 'Mar-May': false },
  { 'Jun-Aug': false },
  { 'Sep-Nov': false },
  { 'Dec-Feb': false },
];

class TimeOfYear extends Component {
  constructor(props) {
    // initialize props
    super(props);

    // initialize state
    this.state = {
      data,
    };

    // bind
    this.handleInputCheckboxChange = this.handleInputCheckboxChange.bind(this);
  }

  handleInputCheckboxChange(event) {
    const { name, checked } = event.target; // destructuring
    const index = event.target.getAttribute('index'); // index - A custom DOM attribute
    const data = [...this.state.data]; // array copy

    data[index] = {
      [name]: checked,
    };

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <P>Time of Year</P>
        <form>
          {data.map((month, i) => {
            const [key] = Object.keys(month);

            return (
              <Label key={i}>
                <input
                  type="checkbox"
                  index={i}
                  name={key}
                  checked={month[key]}
                  onChange={this.handleInputCheckboxChange}
                />{key}
                <br />
              </Label>
            );
          })}
        </form>
      </div>
    );
  }
}

export default TimeOfYear;
