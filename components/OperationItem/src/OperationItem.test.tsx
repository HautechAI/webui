import { describe, it, expect } from 'vitest';
import { OperationItem } from './OperationItem';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('OperationItem', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('OperationItem');
    
    expect(() => {
      renderWithTheme(React.createElement(OperationItem, defaultProps));
    }).not.toThrow();
  });
});
