import { describe, it, expect } from 'vitest';
import { ContextMenu } from './ContextMenu';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('ContextMenu', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('ContextMenu');
    
    expect(() => {
      renderWithTheme(React.createElement(ContextMenu, defaultProps));
    }).not.toThrow();
  });
});
