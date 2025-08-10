import { describe, it, expect } from 'vitest';
import { Progress } from './Progress';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Progress', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Progress');
    
    expect(() => {
      renderWithTheme(React.createElement(Progress, defaultProps));
    }).not.toThrow();
  });
});
