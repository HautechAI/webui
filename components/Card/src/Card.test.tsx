import { describe, it, expect } from 'vitest';
import { Card } from './Card';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Card', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Card');
    
    expect(() => {
      renderWithTheme(React.createElement(Card, defaultProps));
    }).not.toThrow();
  });
});
