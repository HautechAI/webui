import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Typography } from '../src/Typography';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Typography - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Typography variant="H1" testId="my-typography">
                    Test Content
                </Typography>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-typography')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Typography variant="H1">Test Content</Typography>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute('data-testid')).toBeNull();
    });
});
