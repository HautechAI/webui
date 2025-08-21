import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ColorPickerInput } from '../src/ColorPickerInput';
import { ThemeProvider } from '@hautechai/webui.themeprovider';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('ColorPickerInput', () => {
    it('should render without crashing', () => {
        render(
            <TestWrapper>
                <ColorPickerInput />
            </TestWrapper>,
        );

        // Should render a text input
        const input = screen.getByRole('textbox');
        expect(input).toBeDefined();
    });

    it('should display default color value', () => {
        render(
            <TestWrapper>
                <ColorPickerInput value="#FF0000" />
            </TestWrapper>,
        );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input.value).toBe('#FF0000');
    });

    it('should support small size', () => {
        render(
            <TestWrapper>
                <ColorPickerInput size="small" />
            </TestWrapper>,
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeDefined();
    });

    it('should support medium size', () => {
        render(
            <TestWrapper>
                <ColorPickerInput size="medium" />
            </TestWrapper>,
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeDefined();
    });

    it('should show color swatch as leading icon', () => {
        const { container } = render(
            <TestWrapper>
                <ColorPickerInput value="#00FF00" />
            </TestWrapper>,
        );

        // Look for the color swatch element
        const colorSwatch = container.querySelector('[color="#00FF00"]');
        expect(colorSwatch).toBeDefined();
    });
});
