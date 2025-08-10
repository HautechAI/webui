import { describe, it, expect } from 'vitest';
import { UserBalance } from './UserBalance';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('UserBalance', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('UserBalance');
    
    expect(() => {
      renderWithTheme(React.createElement(UserBalance, defaultProps));
    }).not.toThrow();
  });
});
