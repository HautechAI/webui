import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FullScreen } from '../src/FullScreen';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('FullScreen - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <FullScreen testId="my-test-fullscreen">
                    <div>Test content</div>
                </FullScreen>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-fullscreen')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <FullScreen>
                    <div>Test content</div>
                </FullScreen>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
