import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Tooltip } from '../src/Tooltip';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Tooltip - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Tooltip testId="my-test-tooltip" text="Test tooltip">
                    <span>Hover me</span>
                </Tooltip>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-tooltip')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tooltip text="Test tooltip">
                    <span>Hover me</span>
                </Tooltip>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
