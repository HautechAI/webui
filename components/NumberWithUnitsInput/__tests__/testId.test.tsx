import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { NumberWithUnitsInput } from '../src/NumberWithUnitsInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('NumberWithUnitsInput - testId prop', () => {
    const testProps = {
        value: '100',
        units: 'px',
        availableUnits: ['px', 'rem', '%']
    };

    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <NumberWithUnitsInput testId="my-test-numberwithunitsinput" {...testProps} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-numberwithunitsinput')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NumberWithUnitsInput {...testProps} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
