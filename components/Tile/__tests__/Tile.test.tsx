import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Tile } from '../src/Tile';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Tile', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Tile />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with default background color when no color prop provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });

    it('should render with custom color from theme palette path', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" color="actions.primary" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });

    it('should render with hex color', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" color="#ff0000" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });

    it('should render with rgba color', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" color="rgba(255, 0, 0, 0.5)" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });

    it('should render with currentColor', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" color="currentColor" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });

    it('should render img component with color prop', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" component="img" src="test.jpg" color="actions.primary" alt="test" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('img[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });

    it('should render video component with color prop', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Tile data-testid="tile" component="video" src="test.mp4" color="#00ff00" />
            </ThemeProvider>,
        );

        const tile = container.querySelector('video[data-testid="tile"]');
        expect(tile).toBeTruthy();
    });
});
