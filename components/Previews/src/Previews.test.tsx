import { describe, it, expect } from 'vitest';
import { Previews } from './Previews';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Previews', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Previews');
    
    expect(() => {
      renderWithTheme(React.createElement(Previews, defaultProps));
    }).not.toThrow();
  });
});
