import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BottomSheet } from '../src/BottomSheet';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('BottomSheet - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <BottomSheet testId="my-test-bottomsheet">
                    <div>Test</div>
                </BottomSheet>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-bottomsheet')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <BottomSheet>
                    <div>Test</div>
                </BottomSheet>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
