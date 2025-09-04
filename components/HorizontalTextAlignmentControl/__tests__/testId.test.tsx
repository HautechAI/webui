import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import HorizontalTextAlignmentControl from '../src/HorizontalTextAlignmentControl';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('HorizontalTextAlignmentControl - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <HorizontalTextAlignmentControl testId="my-test-horizontaltextalignmentcontrol" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-horizontaltextalignmentcontrol')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <HorizontalTextAlignmentControl />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
