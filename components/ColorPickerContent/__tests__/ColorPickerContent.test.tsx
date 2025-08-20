import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { ColorPickerContent } from '../src/ColorPickerContent';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ColorPickerContent', () => {
    const renderComponent = (props = {}) => {
        return render(
            <ThemeProvider theme={testTheme}>
                <ColorPickerContent {...props} />
            </ThemeProvider>,
        );
    };

    it('renders without crashing', () => {
        renderComponent();
        // Check for a text input that should be present
        const inputs = screen.getAllByRole('textbox');
        expect(inputs.length).toBeGreaterThan(0);
    });

    it('displays initial color value in HEX format by default', () => {
        const initialColor = { h: 0, s: 100, v: 100, a: 1 };
        renderComponent({ value: initialColor });

        // Should find an input with the HEX value
        const inputs = screen.getAllByRole('textbox');
        expect(inputs.length).toBeGreaterThan(0);

        // Check if any input contains the expected hex value (case insensitive)
        const hasHexValue = inputs.some((input) => {
            const value = (input as HTMLInputElement).value.toLowerCase();
            return value === '#ff0000';
        });
        expect(hasHexValue).toBe(true);
    });

    it('shows correct number of inputs based on withAlpha prop', () => {
        // With alpha
        const { rerender } = renderComponent({ withAlpha: true });
        let inputs = screen.getAllByRole('textbox');
        const withAlphaCount = inputs.length;

        // Without alpha
        rerender(
            <ThemeProvider theme={testTheme}>
                <ColorPickerContent withAlpha={false} />
            </ThemeProvider>,
        );

        inputs = screen.getAllByRole('textbox');
        const withoutAlphaCount = inputs.length;

        expect(withAlphaCount).toBeGreaterThan(withoutAlphaCount);
    });

    it('calls onChange when color value changes', () => {
        const mockOnChange = vi.fn();
        renderComponent({ onChange: mockOnChange });

        // Find a text input and change its value
        const inputs = screen.getAllByRole('textbox');
        const colorInput = inputs.find((input) => (input as HTMLInputElement).value.startsWith('#'));

        if (colorInput) {
            fireEvent.change(colorInput, { target: { value: '#00FF00' } });
            expect(mockOnChange).toHaveBeenCalled();
        }
    });

    it('renders eyedropper button', () => {
        renderComponent();

        // Look for button with aria-label containing "eyedropper"
        const eyedropperButton = screen.getByRole('button', { name: /eyedropper/i });
        expect(eyedropperButton).toBeInTheDocument();
    });
});
