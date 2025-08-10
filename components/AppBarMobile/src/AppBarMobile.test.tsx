import { describe, it, expect } from 'vitest';
import { AppBarMobile } from './AppBarMobile';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('AppBarMobile', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('AppBarMobile');
    
    expect(() => {
      renderWithTheme(React.createElement(AppBarMobile, defaultProps));
    }).not.toThrow();
  });
});
