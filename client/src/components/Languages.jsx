import React from 'react';
import { Label, P, Span } from '../css/style';

class Languages extends React.Component {
  /**
   * Constructor
   * @param {Object} props - Short for properties; has all the values passed from parent component.
   */
  constructor(props) {
    super(props); // Sets `this.props`. Otherwise, when accessing `this.props`, would be `undefined`
    
    this.state = {
      selected: '',
    };

    this.handleInputRadioChange = this.handleInputRadioChange.bind(this);
  }

  /**
   * Handling Events: handle the change in input radio selection of languages.
   * @param {Object} target - The `target` property of the `Event` interface is a reference to the
   *                          object onto which the event was dispatched.
   * @param {String} name - The `name` attribute.
   * @param {String} selected - An alias for `name` parameter.
   */
  handleInputRadioChange({ target: { name: selected } }) {
    this.setState({
      selected,
    });
  }

  /**
   * Render component
   * @returns {JSX} A virtual DOM element
   */
  render() {
    const { selected } = this.state;
    return (
      <div>
        <P>Language</P>
        <Label>
          <input
            type="radio"
            name="all" 
            value="All Languages"
            checked={selected === 'all'}
            onChange={this.handleInputRadioChange}
          />
          All Languages <Span>(99)</Span>
        </Label>
        <br />
        <Label>
          <input
            type="radio"
            name="en"
            value="English"
            checked={selected === 'en'}
            onChange={this.handleInputRadioChange}
          />
          English
        </Label>
        <br />
      </div>
    );
  }
}

export default Languages;
