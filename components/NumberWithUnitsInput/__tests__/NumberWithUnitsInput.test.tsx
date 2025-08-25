import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { NumberWithUnitsInput } from '../src/NumberWithUnitsInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('NumberWithUnitsInput', () => {
    it('should render with required props', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
        };

        const { container } = render(
            <TestWrapper>
                <NumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should call onChange when input value changes', () => {
        const mockOnChange = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            onChange: mockOnChange,
        };

        const { container } = render(
            <TestWrapper>
                <NumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();

        fireEvent.change(input!, { target: { value: '200' } });
        expect(mockOnChange).toHaveBeenCalledWith('200');
    });

    it('should show units dropdown on hover', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
        };

        const { container } = render(
            <TestWrapper>
                <NumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        // Find the input container and trigger hover
        const inputContainer = container.querySelector('[data-disabled="false"]');
        expect(inputContainer).toBeTruthy();

        fireEvent.mouseEnter(inputContainer!);

        // Look for dropdown (should appear on hover)
        const dropdown = container.querySelector('[data-collapsed="true"]');
        expect(dropdown).toBeTruthy();
    });
});
