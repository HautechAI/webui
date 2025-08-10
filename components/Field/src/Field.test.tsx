import { describe, it, expect } from 'vitest';
import { Field } from './Field';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Field', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Field');
    
    expect(() => {
      renderWithTheme(React.createElement(Field, defaultProps));
    }).not.toThrow();
  });
});
