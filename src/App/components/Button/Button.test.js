import { render, screen } from '@testing-library/react';
import { Button } from './Button'

describe('<Button />', () => {
  
  test('is button mount', () => {
    render(<Button value="But" onClick={()=>{}}/>);
    const screenButton=screen.getByTestId('Button');
    expect(screenButton).toBeInTheDocument();
    })

    test('is button not empty', () => {
        render(<Button value="But" onClick={()=>{}}/>);
        const screenButton=screen.getByTestId('Button');
        expect(screenButton).not.toBeEmptyDOMElement();
    })
})
