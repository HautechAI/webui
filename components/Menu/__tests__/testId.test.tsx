import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Menu } from '../src/Menu';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Menu - testId prop', () => {
    const mockOptions = [
        { label: 'Menu Item 1', value: 'item1' },
        { label: 'Menu Item 2', value: 'item2' },
    ];

    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Menu options={mockOptions} testId="my-test-menu" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-menu')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Menu options={mockOptions} />
            </ThemeProvider>,
        );

        // Menu returns Column directly, so check first child
        const menu = container.firstChild;
        expect(menu?.getAttribute?.('data-testid')).toBeNull();
    });
});
