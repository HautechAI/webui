import { describe, it, expect } from 'vitest';
import { LinkButton } from './LinkButton';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('LinkButton', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('LinkButton');
    
    expect(() => {
      renderWithTheme(React.createElement(LinkButton, defaultProps));
    }).not.toThrow();
  });
});
