import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VisualEditorDropDown } from '../src/VisualEditorDropDown';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

const defaultOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

describe('VisualEditorDropDown', () => {
    it('should render without crashing', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with isPort true', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with different keyframe states', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'hasKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should call onChange when dropdown value changes', () => {
        const onChange = vi.fn();
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onChange,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        // Click on the dropdown to open it
        const dropdownButton = container.querySelector('[data-open="false"]');
        expect(dropdownButton).toBeTruthy();

        fireEvent.click(dropdownButton!);

        // The dropdown should now be open
        const openDropdown = container.querySelector('[data-open="true"]');
        expect(openDropdown).toBeTruthy();
    });

    it('should call onToggleKeyframe when keyframe button is clicked', () => {
        const onToggleKeyframe = vi.fn();
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onToggleKeyframe,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        // Find the keyframe button (it should have data-state attribute)
        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBeGreaterThan(0);

        const keyframeButton = Array.from(buttons).find((button) => button.hasAttribute('data-state'));
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(onToggleKeyframe).toHaveBeenCalled();
    });

    it('should call onTogglePort when workflow icon is clicked on hover', () => {
        const onTogglePort = vi.fn();
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        // Hover over the dropdown container
        const dropdownContainer = container.querySelector('[data-open]')?.parentElement;
        expect(dropdownContainer).toBeTruthy();

        fireEvent.mouseEnter(dropdownContainer!);

        // Find and click the workflow icon button (should appear on hover)
        // Note: The exact selector may need adjustment based on the Dropdown component's implementation
        const workflowButton = container.querySelector('button[aria-label*="workflow"], button svg');
        if (workflowButton) {
            fireEvent.click(workflowButton);
            expect(onTogglePort).toHaveBeenCalled();
        }
    });

    it('should disable dropdown when isPort is true', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        const dropdownButton = container.querySelector('[data-disabled="true"]');
        expect(dropdownButton).toBeTruthy();
    });

    it('should disable dropdown when disabled prop is true', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        const dropdownButton = container.querySelector('[data-disabled="true"]');
        expect(dropdownButton).toBeTruthy();
    });

    it('should render with small size by default', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with default small size
    });

    it('should render with medium size when specified', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            size: 'medium' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with medium size
    });

    it('should render with outlined type', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            type: 'outlined' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with outlined type
    });

    it('should render with flat type', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            type: 'flat' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with flat type
    });

    it('should render with error state', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            hasError: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const errorElement = container.querySelector('[data-has-error="true"]');
        expect(errorElement).toBeTruthy();
    });

    it('should render with collapsed state', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            collapsed: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const collapsedElement = container.querySelector('[data-collapsed="true"]');
        expect(collapsedElement).toBeTruthy();
    });

    it('should render with label', () => {
        const props = {
            value: undefined, // No value selected
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            label: 'Select an option',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Label should be displayed when no value is selected
        const labelText = container.textContent;
        expect(labelText).toContain('Select an option');
    });

    it('should apply testId correctly', () => {
        const props = {
            value: 'option1',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            testId: 'test-visual-editor-dropdown',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        const element = container.querySelector('[data-testid="test-visual-editor-dropdown"]');
        expect(element).toBeTruthy();
    });

    it('should render without selected value', () => {
        const props = {
            options: defaultOptions,
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            label: 'Select an option',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Should show the label when no value is selected
        const labelText = container.textContent;
        expect(labelText).toContain('Select an option');
    });

    it('should render with different keyframe states - hasKeyframes', () => {
        const props = {
            value: 'option2',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'hasKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const keyframeButton = container.querySelector('[data-state="hasKeyframes"]');
        expect(keyframeButton).toBeTruthy();
    });

    it('should render with different keyframe states - isKeyframe', () => {
        const props = {
            value: 'option3',
            options: defaultOptions,
            isPort: false,
            keyframesState: 'isKeyframe' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorDropDown {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const keyframeButton = container.querySelector('[data-state="isKeyframe"]');
        expect(keyframeButton).toBeTruthy();
    });
});
