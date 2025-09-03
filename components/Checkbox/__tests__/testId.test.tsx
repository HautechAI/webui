import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Checkbox } from '../src/Checkbox';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Checkbox - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Checkbox testId="my-test-checkbox">Test Checkbox</Checkbox>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-checkbox')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Checkbox>Test Checkbox</Checkbox>
            </ThemeProvider>,
        );

        const checkbox = container.querySelector('label');
        expect(checkbox?.getAttribute('data-testid')).toBeNull();
    });
});
