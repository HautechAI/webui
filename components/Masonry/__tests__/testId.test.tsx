import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

// Mock react-responsive-masonry to avoid module conflicts
vi.mock('react-responsive-masonry', () => ({
    default: ({ children, ...props }: { children: React.ReactNode; 'data-testid'?: string }) =>
        React.createElement(
            'div',
            {
                ...props,
                'data-testid': props['data-testid'],
            },
            children,
        ),
}));

import { Masonry } from '../src';

describe('Masonry - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Masonry testId="my-test-masonry">
                    <div>test</div>
                </Masonry>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-masonry')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Masonry>
                    <div>test</div>
                </Masonry>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
