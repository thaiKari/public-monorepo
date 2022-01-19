import { render } from '@testing-library/react';

import {PinkButton} from './buttons';

describe('Buttons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PinkButton />);
    expect(baseElement).toBeTruthy();
  });
});
