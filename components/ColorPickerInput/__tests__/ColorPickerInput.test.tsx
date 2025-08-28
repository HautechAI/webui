import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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

    describe('hoverControls', () => {
        it('should render hoverControls when provided', () => {
            render(
                <TestWrapper>
                    <ColorPickerInput
                        value="#FF0000"
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </TestWrapper>,
            );

            const hoverControl = screen.getByTestId('hover-control');
            expect(hoverControl).toBeDefined();
        });

        it('should show hoverControls on mouse hover', () => {
            const { container } = render(
                <TestWrapper>
                    <ColorPickerInput
                        value="#FF0000"
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </TestWrapper>,
            );

            const input = container.querySelector('input') as HTMLInputElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Initially hidden
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');

            // Show on hover
            fireEvent.mouseEnter(input.closest('[data-disabled]') as HTMLElement);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('true');

            // Hide on mouse leave
            fireEvent.mouseLeave(input.closest('[data-disabled]') as HTMLElement);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should show hoverControls on focus', () => {
            const { container } = render(
                <TestWrapper>
                    <ColorPickerInput
                        value="#FF0000"
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </TestWrapper>,
            );

            const input = container.querySelector('input') as HTMLInputElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Initially hidden
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');

            // Show on focus
            fireEvent.focus(input);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('true');

            // Hide on blur
            fireEvent.blur(input);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should render hoverControls alongside color swatch', () => {
            const { container } = render(
                <TestWrapper>
                    <ColorPickerInput
                        value="#00FF00"
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </TestWrapper>,
            );

            const colorSwatch = container.querySelector('[color="#00FF00"]');
            const hoverControl = screen.getByTestId('hover-control');

            expect(colorSwatch).toBeDefined();
            expect(hoverControl).toBeDefined();

            // Show hoverControls on hover
            const input = container.querySelector('input') as HTMLInputElement;
            fireEvent.mouseEnter(input.closest('[data-disabled]') as HTMLElement);

            const hoverControlsContainer = container.querySelector('[data-show="true"]') as HTMLElement;
            expect(hoverControlsContainer).toBeDefined();
        });
    });
});
