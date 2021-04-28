import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexGrowLayout from './FlexGrowLayout';

describe('<FlexGrowLayout />', () => {
  test('it should mount', () => {
    render(<FlexGrowLayout />);
    
    const flexGrowLayout = screen.getByTestId('FlexGrowLayout');

    expect(flexGrowLayout).toBeInTheDocument();
  });
});