import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ToggleIconButton } from '../src/ToggleIconButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ToggleIconButton - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <ToggleIconButton icon={<div>icon</div>} testId="my-test-toggle" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-toggle')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <ToggleIconButton icon={<div>icon</div>} />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button?.getAttribute('data-testid')).toBeNull();
    });
});
