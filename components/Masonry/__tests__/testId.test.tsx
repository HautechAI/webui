import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Masonry } from '../src/Masonry';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Masonry - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Masonry testId="my-test-masonry"  />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-masonry')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Masonry  />
            </ThemeProvider>,
        );

        const element = container.firstChild;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
