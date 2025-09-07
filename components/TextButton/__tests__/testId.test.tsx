import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextButton } from '../src/TextButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TextButton - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TextButton label="Test Button" testId="my-test-button" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-button')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TextButton label="Test Button" />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button?.getAttribute('data-testid')).toBeNull();
    });
});
