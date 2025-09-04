import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SegmentedControl } from '../src';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('SegmentedControl - testId prop', () => {
    const testOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' }
    ];

    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl testId="my-test-segmentedcontrol" options={testOptions} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-segmentedcontrol')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={testOptions} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
