import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Box } from '../src/Box';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Box', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(Box, {}, 'Test content')
        )
      );
    }).not.toThrow();
  });
});