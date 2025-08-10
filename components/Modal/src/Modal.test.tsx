import { describe, it, expect } from 'vitest';
import { Modal } from './Modal';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Modal', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Modal');
    
    expect(() => {
      renderWithTheme(React.createElement(Modal, defaultProps));
    }).not.toThrow();
  });
});
