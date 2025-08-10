import { describe, it, expect } from 'vitest';
import { TextButton } from './TextButton';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('TextButton', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('TextButton');
    
    expect(() => {
      renderWithTheme(React.createElement(TextButton, defaultProps));
    }).not.toThrow();
  });
});
