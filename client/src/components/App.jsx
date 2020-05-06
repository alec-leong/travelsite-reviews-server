import React from 'react';
// import styled from 'styled-components';

// The htmlFor attribute of the <label> tag should be equal to the id attribute of the related 
// element to bind them together.

// Text
// rgb(0, 0, 0)
// font-family: 'Trip Sans', Arial, sans-serif !important
// font-size: 14px
// Number
// font-family: 'Trip Sans', Arial, sans-serif !important
// font-size: 14px
// rgb(118, 118, 118);

// const Button = styled.button`
//   background: red;
//   border-radius: 8px;
//   color: white;
// `;

// class App extends React.Component {
//   render() {
//     return (
//       <Button>Click Me</Button>
//     )
//   }
// }

// export default App;

class App extends React.Component {
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
        <p id="langHeader">Language</p>
        <label className="lang">
          <input
            type="radio"
            name="all" 
            value="All Languages"
            checked={selected === 'all'}
            onChange={this.handleInputRadioChange}
          />
          All Languages <span className="langCount">(99)</span>
        </label>
        <br />
        <label className="lang">
          <input
            type="radio"
            name="en"
            value="English"
            checked={selected === 'en'}
            onChange={this.handleInputRadioChange}
          />
          English
        </label>
        <br />
      </div>
    );
  }
}

export default App;
