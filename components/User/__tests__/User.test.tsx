import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { User } from '../src/User';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('User', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(User, { name: 'Test User' }})
        )
      );
    }).not.toThrow();
  });
});
