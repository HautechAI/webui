import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VisualEditorInput } from '../src/VisualEditorInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorInput', () => {
    it('should render without crashing', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with isPort true', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with different keyframe states', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'hasKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should disable units dropdown when component is disabled', () => {
        const mockOnChangeUnits = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
            onChangeUnits: mockOnChangeUnits,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        // Find the component container
        const visualEditorInputContainer = container.querySelector('[data-disabled="true"]');
        expect(visualEditorInputContainer).toBeTruthy();

        // Trigger hover to show dropdown (even though disabled)
        fireEvent.mouseEnter(visualEditorInputContainer!);

        // Look for any dropdown in the component
        const allDropdowns = container.querySelectorAll('[data-collapsed="true"]');

        // When disabled, the dropdown should either not appear or be disabled
        // Currently it appears but without disabled attribute (this is the bug)
        if (allDropdowns.length > 0) {
            const dropdown = allDropdowns[0] as HTMLElement;
            // The dropdown should be disabled when the VisualEditorInput is disabled
            expect(dropdown.getAttribute('data-disabled')).toBe('true');
        } else {
            // If no dropdown appears, that's also acceptable for disabled state
            expect(allDropdowns.length).toBe(0);
        }
    });
});
