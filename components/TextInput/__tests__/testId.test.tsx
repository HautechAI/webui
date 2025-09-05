import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextInput } from '../src/TextInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TextInput - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TextInput type="text" value="" onChange={() => {}} testId="my-text-input" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-text-input')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TextInput type="text" value="" onChange={() => {}} />
            </ThemeProvider>,
        );

        // TextInput renders as Container component, so look for the outer div
        const outerDiv = container.firstChild as Element;
        expect(outerDiv?.getAttribute('data-testid')).toBeNull();
    });
});
