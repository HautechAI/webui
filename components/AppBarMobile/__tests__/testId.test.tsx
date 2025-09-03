import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AppBarMobile } from '../src/AppBarMobile';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('AppBarMobile testId', () => {
    it('should render with data-testid when testId is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <AppBarMobile testId="test-appbar-mobile" top="Top" center="Center" bottom="Bottom" />
            </ThemeProvider>,
        );

        const appBarMobile = container.querySelector('[data-testid="test-appbar-mobile"]');
        expect(appBarMobile).toBeInTheDocument();
    });

    it('should not render data-testid when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <AppBarMobile top="Top" center="Center" bottom="Bottom" />
            </ThemeProvider>,
        );

        const appBarMobileWithTestId = container.querySelector('[data-testid]');
        expect(appBarMobileWithTestId).toBeNull();
    });
});
