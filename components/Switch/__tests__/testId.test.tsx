import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Switch } from '../src/Switch';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Switch - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Switch testId="my-test-switch" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-switch')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Switch />
            </ThemeProvider>,
        );

        const switchContainer = container.querySelector('label');
        expect(switchContainer?.getAttribute('data-testid')).toBeNull();
    });
});