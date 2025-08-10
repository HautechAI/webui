import { describe, it, expect } from 'vitest';
import { Button } from './Button';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Button', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Button');
    
    expect(() => {
      renderWithTheme(React.createElement(Button, defaultProps));
    }).not.toThrow();
  });
});
