import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Badge } from '../src/Badge';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Badge', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(Badge, { color: 'success', label: 'Test Badge' })
        )
      );
    }).not.toThrow();
  });
});