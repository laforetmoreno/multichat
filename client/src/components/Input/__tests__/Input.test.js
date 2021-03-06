import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Input from '../Input';

describe('<Input />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a input with placeholder', () => {
    const tree = renderer.create(<Input placeholder="Exemple" />);
    expect(tree).toMatchSnapshot();
  });

  it('get by id and change', async () => {
    const { getByTestId } = render(<Input />);
    const fieldNode = await waitForElement(() => getByTestId('input'));
    fireEvent.change(fieldNode, { target: { value: 'test change' } });
  });
});
