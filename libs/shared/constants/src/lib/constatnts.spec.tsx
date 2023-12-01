import { render } from '@testing-library/react';

import Constatnts from './constatnts';

describe('Constatnts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Constatnts />);
    expect(baseElement).toBeTruthy();
  });
});
