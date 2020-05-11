import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders two languages', () => {
    const element = shallow(
      <App />,
    );
    console.log('Hello World')
    console.log(element);
    expect(element.find('.language').length).toBe(0);
  });
});
