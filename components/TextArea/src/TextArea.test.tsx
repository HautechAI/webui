import { describe, it, expect } from 'vitest';
import { TextArea } from './TextArea';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('TextArea', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('TextArea');
    
    expect(() => {
      renderWithTheme(React.createElement(TextArea, defaultProps));
    }).not.toThrow();
  });
});
