import { render } from '@testing-library/react';

import GlobalState from './global-state';

describe('GlobalState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalState />);
    expect(baseElement).toBeTruthy();
  });
});
