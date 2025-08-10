import { describe, it, expect } from 'vitest';
import { FileInput } from './FileInput';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('FileInput', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('FileInput');
    
    expect(() => {
      renderWithTheme(React.createElement(FileInput, defaultProps));
    }).not.toThrow();
  });
});
