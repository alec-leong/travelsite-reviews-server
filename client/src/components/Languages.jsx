import React from 'react';
import { Label, P, Span } from '../css/style';

const data = [
  { 'All languages': 1586 },
  { English: 1557 },
  { Spanish: 11 },
  { French: 3 },
  { Hebrew: 3 },
  { Portuguese: 3 },
  { Danish: 1 },
  { German: 1 },
  { Italian: 1 },
  { Japanese: 1 },
  { Korean: 1 },
  { Dutch: 1 },
  { Polish: 1 },
  { Swedish: 1 },
  { 'Chinese (Sim.)': 1 },
];

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
        <form>
          {data.map((lang, i) => {
            const [key] = Object.keys(lang);

            return (
              <Label key={i}>
                <input
                  type="radio"
                  name={key}
                  checked={selected === key}
                  onChange={this.handleInputRadioChange}
                />
                {key}
                <Span> ({lang[key]})</Span>
                <br />
              </Label>
            );
          })}
        </form>
      </div>
    );
  }
}

export default Languages;
