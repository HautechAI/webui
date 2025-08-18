import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { DotsLoader } from '../src/DotsLoader';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('DotsLoader', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <DotsLoader />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render three dots', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <DotsLoader />
            </ThemeProvider>,
        );

        const dots = container.querySelectorAll('[data-dot]');
        expect(dots).toHaveLength(3);
        expect(dots[0]).toHaveAttribute('data-dot', '1');
        expect(dots[1]).toHaveAttribute('data-dot', '2');
        expect(dots[2]).toHaveAttribute('data-dot', '3');
    });

    it('should accept className prop', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <DotsLoader className="custom-class" />
            </ThemeProvider>,
        );

        const loaderContainer = container.firstChild;
        expect(loaderContainer).toHaveClass('custom-class');
    });
});
