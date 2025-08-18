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

    it('should use default speed of 3 seconds when no speed prop is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <DotsLoader />
            </ThemeProvider>,
        );

        const loaderContainer = container.firstChild as HTMLElement;
        const computedStyle = window.getComputedStyle(loaderContainer);
        expect(computedStyle.getPropertyValue('--animation-duration')).toBe('3s');
    });

    it('should use custom speed when speed prop is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <DotsLoader speed={2} />
            </ThemeProvider>,
        );

        const loaderContainer = container.firstChild as HTMLElement;
        const computedStyle = window.getComputedStyle(loaderContainer);
        expect(computedStyle.getPropertyValue('--animation-duration')).toBe('2s');
    });

    it('should calculate animation delays correctly based on speed', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <DotsLoader speed={6} />
            </ThemeProvider>,
        );

        const dots = container.querySelectorAll('[data-dot]');

        // Check the animation-delay styles
        const dot1Style = window.getComputedStyle(dots[0] as HTMLElement);
        const dot2Style = window.getComputedStyle(dots[1] as HTMLElement);
        const dot3Style = window.getComputedStyle(dots[2] as HTMLElement);

        expect(dot1Style.animationDelay).toBe('0s');
        expect(dot2Style.animationDelay).toBe('2s'); // 6/3 = 2
        expect(dot3Style.animationDelay).toBe('4s'); // 6*2/3 = 4
    });
});
