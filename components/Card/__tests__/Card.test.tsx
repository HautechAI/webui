import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src/Card';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Card', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(Card, {})
        )
      );
    }).not.toThrow();
  });
});
