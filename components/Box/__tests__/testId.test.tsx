import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Box } from '../src/Box';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Box testId', () => {
  it('should render with data-testid when testId is provided', () => {
    const { container } = render(
      <ThemeProvider theme={testTheme}>
        <Box testId="test-box">Box content</Box>
      </ThemeProvider>
    );

    const box = container.querySelector('[data-testid="test-box"]');
    expect(box).toBeInTheDocument();
  });

  it('should not render data-testid when testId is not provided', () => {
    const { container } = render(
      <ThemeProvider theme={testTheme}>
        <Box>Box content</Box>
      </ThemeProvider>
    );

    const boxWithTestId = container.querySelector('[data-testid]');
    expect(boxWithTestId).toBeNull();
  });
});