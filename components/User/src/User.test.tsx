import { describe, it, expect } from 'vitest';
import { User } from './User';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('User', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('User');
    
    expect(() => {
      renderWithTheme(React.createElement(User, defaultProps));
    }).not.toThrow();
  });
});
