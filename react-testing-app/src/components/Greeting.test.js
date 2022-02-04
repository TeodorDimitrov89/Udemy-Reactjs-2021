import {  render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('Rendering hello world', () => {
  //Arrange
  render(<Greeting />);

  //Act

  //Assert

  const helloWorldElement = screen.getByText('Hello World!');

  expect(helloWorldElement).toBeInTheDocument()

});