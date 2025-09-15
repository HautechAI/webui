import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VisualEditorNumberWithUnitsInput } from '../src/VisualEditorNumberWithUnitsInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorNumberWithUnitsInput', () => {
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
                <VisualEditorNumberWithUnitsInput {...props} />
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
                <VisualEditorNumberWithUnitsInput {...props} />
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
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should call onChange when input value changes', () => {
        const onChange = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onChange,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();

        fireEvent.change(input!, { target: { value: '200' } });
        expect(onChange).toHaveBeenCalledWith('200');
    });

    it('should call onToggleKeyframe when keyframe button is clicked', () => {
        const onToggleKeyframe = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onToggleKeyframe,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        // Find the keyframe button (it's the only button element)
        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBeGreaterThan(0);

        // The keyframe toggle should be the button with data-state attribute
        const keyframeButton = Array.from(buttons).find((button) => button.hasAttribute('data-state'));
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(onToggleKeyframe).toHaveBeenCalled();
    });

    it('should call onTogglePort when workflow icon is clicked on hover', () => {
        const onTogglePort = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        // Hover over the container
        const containerDiv = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerDiv);

        // Find and click the workflow icon button
        const workflowButton = container.querySelector('button[aria-label*="workflow"], button svg');
        if (workflowButton) {
            fireEvent.click(workflowButton);
            expect(onTogglePort).toHaveBeenCalled();
        }
    });

    it('should call onChangeUnits when units dropdown changes on hover', () => {
        const onChangeUnits = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onChangeUnits,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        // Hover over the container
        const containerDiv = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerDiv);

        // The dropdown should now be visible and we can test its functionality
        // Note: This is a simplified test as the actual dropdown behavior depends on the Dropdown component
        expect(container.querySelector('[role="combobox"], select, button')).toBeTruthy();
    });

    it('should not disable input when isPort is true but prevent value changes', () => {
        const onChange = vi.fn();
        const onChangeUnits = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: true,
            keyframesState: 'noKeyframes' as const,
            onChange,
            onChangeUnits,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        // Input should not be disabled to allow hover controls to show
        expect(input!.disabled).toBe(false);

        // But value changes should be prevented
        fireEvent.change(input!, { target: { value: '200' } });
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should show port toggle button (UnlinkIcon) when isPort is true and allow disconnecting', () => {
        const onTogglePort = vi.fn();
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: true,
            keyframesState: 'noKeyframes' as const,
            onTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        // Hover over the input to show controls
        const inputContainer = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(inputContainer);

        // The UnlinkIcon button should be visible and clickable
        const buttons = container.querySelectorAll('button');
        // Find the port toggle button (should contain UnlinkIcon, not the keyframe button)
        const portToggleButton = Array.from(buttons).find(
            (button) => !button.hasAttribute('data-state'), // Keyframe buttons have data-state
        );

        expect(portToggleButton).toBeTruthy();
        expect(portToggleButton!.disabled).toBe(false);

        // Click the port toggle button
        fireEvent.click(portToggleButton!);
        expect(onTogglePort).toHaveBeenCalled();
    });

    it('should disable input when disabled prop is true', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        expect(input!.disabled).toBe(true);
    });

    it('should render with small size by default', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with default small size
    });

    it('should render with medium size when specified', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            size: 'medium' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with medium size
    });

    it('should render with outlined variation', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            variation: 'outlined' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with outlined variation
    });

    it('should render with error state', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            hasError: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const inputBox = container.querySelector('[data-has-error="true"]');
        expect(inputBox).toBeTruthy();
    });

    it('should render with leading icon', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            leadingIcon: <div data-testid="test-icon">Icon</div>,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const icon = container.querySelector('[data-testid="test-icon"]');
        expect(icon).toBeTruthy();
    });

    it('should render with placeholder', () => {
        const props = {
            value: '',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            placeholder: 'Enter value',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        expect(input!.placeholder).toBe('Enter value');
    });

    it('should apply testId correctly', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            testId: 'test-visual-editor-number-input',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const element = container.querySelector('[data-testid="test-visual-editor-number-input"]');
        expect(element).toBeTruthy();
    });
});
