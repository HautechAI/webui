import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../src/Dropdown';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Dropdown', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(Dropdown, { children: 'Test', items: [{ key: 'test', label: 'Test Item' }] }})
        )
      );
    }).not.toThrow();
  });
});
