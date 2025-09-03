import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AppBar } from '../src/AppBar';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('AppBar testId', () => {
    it('should render with data-testid when testId is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <AppBar testId="test-appbar" left="Left" center="Center" right="Right" />
            </ThemeProvider>,
        );

        const appBar = container.querySelector('[data-testid="test-appbar"]');
        expect(appBar).toBeInTheDocument();
    });

    it('should not render data-testid when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <AppBar left="Left" center="Center" right="Right" />
            </ThemeProvider>,
        );

        const appBarWithTestId = container.querySelector('[data-testid]');
        expect(appBarWithTestId).toBeNull();
    });
});
