import { describe, it, expect } from 'vitest';
import { TextInput } from './TextInput';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('TextInput', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('TextInput');
    
    expect(() => {
      renderWithTheme(React.createElement(TextInput, defaultProps));
    }).not.toThrow();
  });
});
