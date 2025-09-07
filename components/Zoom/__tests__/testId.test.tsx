import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Zoom } from '../src/Zoom';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Zoom - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom testId="my-test-zoom" value={100} onChange={() => {}} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-zoom')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={100} onChange={() => {}} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
