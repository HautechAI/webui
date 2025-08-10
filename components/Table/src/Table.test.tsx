import { describe, it, expect } from 'vitest';
import { Table } from './Table';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Table', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Table');
    
    expect(() => {
      renderWithTheme(React.createElement(Table, defaultProps));
    }).not.toThrow();
  });
});
