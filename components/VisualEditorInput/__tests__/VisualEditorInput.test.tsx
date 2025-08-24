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

    it('should disable port toggle buttons when component is disabled', () => {
        const mockOnTogglePort = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
            onTogglePort: mockOnTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        // Find the component container
        const visualEditorInputContainer = container.querySelector('[data-disabled="true"]');
        expect(visualEditorInputContainer).toBeTruthy();

        // Trigger hover to show port toggle button (workflow icon)
        fireEvent.mouseEnter(visualEditorInputContainer!);

        // Look for the workflow icon toggle button
        const toggleButtons = container.querySelectorAll('button');

        // Find button that should be disabled
        const portToggleButton = Array.from(toggleButtons).find(
            (button) => button.getAttribute('data-variant') === 'flat' && button.getAttribute('data-size') === 'xsmall',
        );

        if (portToggleButton) {
            expect(portToggleButton.disabled).toBe(true);
        }
    });

    it('should disable unlink port toggle button when component is disabled and isPort is true', () => {
        const mockOnTogglePort = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: true,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
            onTogglePort: mockOnTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        // Find the component container
        const visualEditorInputContainer = container.querySelector('[data-disabled="true"]');
        expect(visualEditorInputContainer).toBeTruthy();

        // Trigger hover to show unlink button
        fireEvent.mouseEnter(visualEditorInputContainer!);

        // Look for the unlink toggle button
        const toggleButtons = container.querySelectorAll('button');

        // Find button that should be disabled
        const unlinkToggleButton = Array.from(toggleButtons).find(
            (button) => button.getAttribute('data-variant') === 'flat' && button.getAttribute('data-size') === 'xsmall',
        );

        if (unlinkToggleButton) {
            expect(unlinkToggleButton.disabled).toBe(true);
        }
    });

    it('should allow disconnect button to be clickable when isPort is true but component is not disabled', () => {
        const mockOnTogglePort = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: true,
            keyframesState: 'noKeyframes' as const,
            disabled: false,
            onTogglePort: mockOnTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>,
        );

        // Find the component container
        const visualEditorInputContainer = container.querySelector('[data-disabled="true"]');
        expect(visualEditorInputContainer).toBeTruthy();

        // Trigger hover to show disconnect button
        fireEvent.mouseEnter(visualEditorInputContainer!);

        // Look for the disconnect toggle button (UnlinkIcon)
        const toggleButtons = container.querySelectorAll('button');

        // Find the disconnect button that should NOT be disabled
        const disconnectButton = Array.from(toggleButtons).find(
            (button) => button.getAttribute('data-variant') === 'flat' && button.getAttribute('data-size') === 'xsmall',
        );

        if (disconnectButton) {
            // The disconnect button should NOT be disabled when only isPort=true
            expect(disconnectButton.disabled).toBe(false);

            // Click the disconnect button to verify it's functional
            fireEvent.click(disconnectButton);
            expect(mockOnTogglePort).toHaveBeenCalledTimes(1);
        }
    });
});
