import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { UserBalance } from '../src/UserBalance';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('UserBalance', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(UserBalance, { balance: 1000 }})
        )
      );
    }).not.toThrow();
  });
});
