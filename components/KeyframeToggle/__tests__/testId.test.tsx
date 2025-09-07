import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { KeyframeToggle } from '../src/KeyframeToggle';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('KeyframeToggle - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <KeyframeToggle testId="my-test-keyframetoggle" state="noKeyframes" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-keyframetoggle')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <KeyframeToggle state="noKeyframes" />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
