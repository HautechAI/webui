import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AppBarMobile } from '../src/AppBarMobile';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('AppBarMobile', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(AppBarMobile, {})
        )
      );
    }).not.toThrow();
  });
});
