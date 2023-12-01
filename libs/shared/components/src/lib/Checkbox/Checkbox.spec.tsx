import React from 'react';
import Checkbox from './Checkbox';
import { render } from '@testing-library/react';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox aria-label="Checkbox" />);
    expect(baseElement).toBeTruthy();
  });
});
