import {  render, screen } from '@testing-library/react';
import Greeting from './Greeting';


describe('Greeting component', () => {

  test('Rendering hello world', () => {
    //Arrange
    render(<Greeting />);
  
    //Act
    // No act for now...
    //Assert
  
    const helloWorldElement = screen.getByText('Hello World!');
  
    expect(helloWorldElement).toBeInTheDocument();
  
  });
})
