import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Logo } from '../src/Logo';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Logo', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Logo variant="full" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render Hautech logo by default', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Logo />
            </ThemeProvider>,
        );

        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
        // Hautech full logo has width 165
        expect(svg).toHaveAttribute('width', '165');
    });

    it('should render Hautech full logo when name="hautech" and variant="full"', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Logo name="hautech" variant="full" />
            </ThemeProvider>,
        );

        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '165');
        expect(svg).toHaveAttribute('height', '40');
    });

    it('should render Hautech icon logo when name="hautech" and variant="icon"', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Logo name="hautech" variant="icon" />
            </ThemeProvider>,
        );

        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
    });

    it('should render Liana logo when name="liana"', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Logo name="liana" />
            </ThemeProvider>,
        );

        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('width', '92');
        expect(svg).toHaveAttribute('height', '26');
    });

    it('should render Liana logo even when variant="icon" is specified', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Logo name="liana" variant="icon" />
            </ThemeProvider>,
        );

        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
        // Liana only has full variant, so it should render with its default dimensions
        expect(svg).toHaveAttribute('width', '92');
        expect(svg).toHaveAttribute('height', '26');
    });

    it('should pass through custom width and height props', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Logo name="liana" width={100} height={30} />
            </ThemeProvider>,
        );

        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('width', '100');
        expect(svg).toHaveAttribute('height', '30');
    });
});
