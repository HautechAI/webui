import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Avatar', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Avatar');
    
    expect(() => {
      renderWithTheme(React.createElement(Avatar, defaultProps));
    }).not.toThrow();
  });
});
