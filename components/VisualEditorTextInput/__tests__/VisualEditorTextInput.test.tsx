import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VisualEditorTextInput } from '../src/VisualEditorTextInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorTextInput', () => {
    it('should render without crashing', () => {
        const props = {
            value: 'Hello World',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with isPort true', () => {
        const props = {
            value: 'Test text',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with different keyframe states', () => {
        const props = {
            value: 'Keyframe test',
            isPort: false,
            keyframesState: 'hasKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with isKeyframe state', () => {
        const props = {
            value: 'Active keyframe',
            isPort: false,
            keyframesState: 'isKeyframe' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should handle input changes', () => {
        const mockOnChange = vi.fn();
        const props = {
            value: 'Initial text',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onChange: mockOnChange,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();

        fireEvent.change(input!, { target: { value: 'New text' } });
        expect(mockOnChange).toHaveBeenCalledWith('New text');
    });

    it('should handle keyframe toggle clicks', () => {
        const mockOnToggleKeyframe = vi.fn();
        const props = {
            value: 'Test text',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onToggleKeyframe: mockOnToggleKeyframe,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        // Find and click the keyframe toggle button (it should be the first button in the container)
        const buttons = container.querySelectorAll('button');
        const keyframeButton = Array.from(buttons).find(
            (button) => button.getAttribute('data-state') === 'noKeyframes',
        );
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(mockOnToggleKeyframe).toHaveBeenCalledTimes(1);
    });

    it('should show workflow icon on hover when not port', () => {
        const mockOnTogglePort = vi.fn();
        const props = {
            value: 'Test text',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onTogglePort: mockOnTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const visualEditorContainer = container.querySelector('[data-disabled="false"]');
        expect(visualEditorContainer).toBeTruthy();

        // Trigger hover
        fireEvent.mouseEnter(visualEditorContainer!);

        // Look for workflow icon button
        const workflowButton = container.querySelector('button[data-variant="flat"][data-size="xsmall"]');
        expect(workflowButton).toBeTruthy();

        // Click the workflow button
        fireEvent.click(workflowButton!);
        expect(mockOnTogglePort).toHaveBeenCalledTimes(1);
    });

    it('should show unlink icon on hover when isPort is true', () => {
        const mockOnTogglePort = vi.fn();
        const props = {
            value: 'Port text',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
            onTogglePort: mockOnTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const visualEditorContainer = container.querySelector('[data-disabled="true"]');
        expect(visualEditorContainer).toBeTruthy();

        // Trigger hover
        fireEvent.mouseEnter(visualEditorContainer!);

        // Look for unlink icon button
        const unlinkButton = container.querySelector('button[data-variant="flat"][data-size="xsmall"]');
        expect(unlinkButton).toBeTruthy();

        // Click the unlink button
        fireEvent.click(unlinkButton!);
        expect(mockOnTogglePort).toHaveBeenCalledTimes(1);
    });

    it('should disable input when isPort is true', () => {
        const props = {
            value: 'Port text',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input') as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.disabled).toBe(true);
    });

    it('should disable input when disabled prop is true', () => {
        const props = {
            value: 'Disabled text',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input') as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.disabled).toBe(true);
    });

    it('should show error styling when hasError is true', () => {
        const props = {
            value: 'Error text',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            hasError: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const inputBox = container.querySelector('[data-has-error="true"]');
        expect(inputBox).toBeTruthy();
    });

    it('should render with different input types', () => {
        const props = {
            value: 'test@example.com',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            type: 'email' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input') as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.type).toBe('email');
    });

    it('should render with trailing icon when not hovering and not port', () => {
        const TrailingIcon = () => <div data-testid="trailing-icon">T</div>;
        const props = {
            value: 'Text with icon',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            trailingIcon: <TrailingIcon />,
        };

        const { getByTestId } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(getByTestId('trailing-icon')).toBeTruthy();
    });

    it('should disable keyframe toggle when component is disabled', () => {
        const mockOnToggleKeyframe = vi.fn();
        const props = {
            value: 'Disabled test',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
            onToggleKeyframe: mockOnToggleKeyframe,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        // Find the keyframe toggle button
        const buttons = container.querySelectorAll('button');
        const keyframeButton = Array.from(buttons).find(
            (button) => button.getAttribute('data-state') === 'noKeyframes',
        ) as HTMLButtonElement;
        expect(keyframeButton).toBeTruthy();
        expect(keyframeButton.disabled).toBe(true);
    });

    it('should disable port toggle buttons when component is disabled', () => {
        const mockOnTogglePort = vi.fn();
        const props = {
            value: 'Disabled port test',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
            onTogglePort: mockOnTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        // Find the component container
        const visualEditorContainer = container.querySelector('[data-disabled="true"]');
        expect(visualEditorContainer).toBeTruthy();

        // Trigger hover to show port toggle button (workflow icon)
        fireEvent.mouseEnter(visualEditorContainer!);

        // Look for the workflow icon toggle button
        const portToggleButton = container.querySelector(
            'button[data-variant="flat"][data-size="xsmall"]',
        ) as HTMLButtonElement;

        if (portToggleButton) {
            expect(portToggleButton.disabled).toBe(true);
        }
    });
});
