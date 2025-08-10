import { describe, it, expect } from 'vitest';
import { Icon } from './Icon';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Icon', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Icon');
    
    expect(() => {
      renderWithTheme(React.createElement(Icon, defaultProps));
    }).not.toThrow();
  });
});
