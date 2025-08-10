import { describe, it, expect } from 'vitest';
import { BottomSheet } from './BottomSheet';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('BottomSheet', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('BottomSheet');
    
    expect(() => {
      renderWithTheme(React.createElement(BottomSheet, defaultProps));
    }).not.toThrow();
  });
});
