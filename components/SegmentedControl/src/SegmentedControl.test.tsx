import { describe, it, expect } from 'vitest';
import { SegmentedControl } from './SegmentedControl';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('SegmentedControl', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('SegmentedControl');
    
    expect(() => {
      renderWithTheme(React.createElement(SegmentedControl, defaultProps));
    }).not.toThrow();
  });
});
