import { describe, it, expect } from 'vitest';
import { Pagination } from './Pagination';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Pagination', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Pagination');
    
    expect(() => {
      renderWithTheme(React.createElement(Pagination, defaultProps));
    }).not.toThrow();
  });
});
