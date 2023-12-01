import { render } from '@testing-library/react';

import Configurations from './configurations';

describe('Configurations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Configurations />);
    expect(baseElement).toBeTruthy();
  });
});
