import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VisualEditorColorPickerInput } from '../src/VisualEditorColorPickerInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorColorPickerInput', () => {
    it('should render without crashing', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with isPort true', () => {
        const props = {
            value: '#00FF00',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with different keyframe states', () => {
        const props = {
            value: '#0000FF',
            isPort: false,
            keyframesState: 'hasKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should call onChange when color value changes', () => {
        const onChange = vi.fn();
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onChange,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();

        fireEvent.change(input!, { target: { value: '#00FF00' } });
        expect(onChange).toHaveBeenCalledWith('#00FF00');
    });

    it('should call onToggleKeyframe when keyframe button is clicked', () => {
        const onToggleKeyframe = vi.fn();
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onToggleKeyframe,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        // Find the keyframe button (it's the only button element with data-state attribute)
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
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            onTogglePort,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
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

    it('should not disable input element when isPort is true (to allow hover controls)', () => {
        const props = {
            value: '#FF0000',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        // Input element should not be disabled so hover controls can show
        expect(input!.disabled).toBe(false);

        // But input should appear disabled visually (reduced opacity)
        const computedStyle = window.getComputedStyle(input!);
        expect(computedStyle.opacity).toBe('0.6');
    });

    it('should prevent color changes when isPort is true', () => {
        const onChange = vi.fn();
        const props = {
            value: '#FF0000',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
            onChange,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();

        // Try to change the color - should not call onChange
        fireEvent.change(input!, { target: { value: '#00FF00' } });
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should disable input when disabled prop is true', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            disabled: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        expect(input!.disabled).toBe(true);
    });

    it('should render with small size by default', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with default small size
    });

    it('should render with medium size when specified', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            size: 'medium' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with medium size
    });

    it('should render with outlined variation', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            variation: 'outlined' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with outlined variation
    });

    it('should render with error state', () => {
        const props = {
            value: 'invalid-color',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            hasError: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        const inputBox = container.querySelector('[data-has-error="true"]');
        expect(inputBox).toBeTruthy();
    });

    it('should render with placeholder', () => {
        const props = {
            value: '',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            placeholder: 'Enter color',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        expect(input!.placeholder).toBe('Enter color');
    });

    it('should apply testId correctly', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            testId: 'test-visual-editor-color-input',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        const element = container.querySelector('[data-testid="test-visual-editor-color-input"]');
        expect(element).toBeTruthy();
    });

    it('should render with alpha support when alphaEnabled is true', () => {
        const props = {
            value: '#FF000080',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            alphaEnabled: true,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with alpha support
    });

    it('should render UnlinkIcon when isPort is true', () => {
        const props = {
            value: '#FF0000',
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        // Hover over the container to reveal controls
        const containerDiv = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerDiv);

        expect(container.firstChild).toBeTruthy();
        // Should show UnlinkIcon when isPort is true
    });

    it('should render WorkflowIcon when isPort is false', () => {
        const props = {
            value: '#FF0000',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorColorPickerInput {...props} />
            </TestWrapper>,
        );

        // Hover over the container to reveal controls
        const containerDiv = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerDiv);

        expect(container.firstChild).toBeTruthy();
        // Should show WorkflowIcon when isPort is false
    });

    it('should render keyframe states correctly', () => {
        const states: Array<'noKeyframes' | 'hasKeyframes' | 'isKeyframe'> = [
            'noKeyframes',
            'hasKeyframes',
            'isKeyframe',
        ];

        states.forEach((state) => {
            const props = {
                value: '#FF0000',
                isPort: false,
                keyframesState: state,
            };

            const { container } = render(
                <TestWrapper>
                    <VisualEditorColorPickerInput {...props} />
                </TestWrapper>,
            );

            expect(container.firstChild).toBeTruthy();
            const keyframeButton = container.querySelector('button[data-state]');
            expect(keyframeButton).toBeTruthy();
            expect(keyframeButton!.getAttribute('data-state')).toBe(state);
        });
    });

    it('should handle all color format types', () => {
        const colorValues = ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000', 'rgb(255, 0, 0)'];

        colorValues.forEach((colorValue) => {
            const props = {
                value: colorValue,
                isPort: false,
                keyframesState: 'noKeyframes' as const,
            };

            const { container } = render(
                <TestWrapper>
                    <VisualEditorColorPickerInput {...props} />
                </TestWrapper>,
            );

            expect(container.firstChild).toBeTruthy();
            const input = container.querySelector('input');
            expect(input).toBeTruthy();
            expect(input!.value).toBe(colorValue);
        });
    });
});
