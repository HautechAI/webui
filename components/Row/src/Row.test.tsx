import { describe, it, expect } from 'vitest';
import { Row } from './Row';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Row', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Row');
    
    expect(() => {
      renderWithTheme(React.createElement(Row, defaultProps));
    }).not.toThrow();
  });
});
