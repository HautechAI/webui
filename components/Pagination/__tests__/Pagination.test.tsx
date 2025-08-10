import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Pagination } from '../src/Pagination';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Pagination', () => {
  it('should render without crashing', () => {
    expect(() => {
      render(
        React.createElement(
          ThemeProvider,
          { theme: testTheme },
          React.createElement(Pagination, { currentPage: 1, totalPages: 5, onPageChange: () => {} }})
        )
      );
    }).not.toThrow();
  });
});
