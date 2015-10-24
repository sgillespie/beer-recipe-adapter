import { findRenderedDOMComponentWithTag, Simulate } from 'react-addons-test-utils';

export function simulateChange (component, value) {
  const input = findRenderedDOMComponentWithTag(component, 'input');

  input.value = value;
  Simulate.change(input);
}
