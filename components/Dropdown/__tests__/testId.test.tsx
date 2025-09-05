import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../src/Dropdown';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Dropdown - testId prop', () => {
    const mockOptions = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' },
    ];

    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Dropdown options={mockOptions} testId="my-test-dropdown" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-dropdown')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Dropdown options={mockOptions} />
            </ThemeProvider>,
        );

        const dropdown = container.firstChild as Element;
        expect(dropdown?.getAttribute?.('data-testid')).toBeNull();
    });
});
