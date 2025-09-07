import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { VisualEditorTextInput } from '../src/VisualEditorTextInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorTextInput', () => {
    it('should render with basic props', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="test value"
                    testId="visual-editor-text-input"
                />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        expect(input?.value).toBe('test value');
    });

    it('should disable input when isPort is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput isPort={true} keyframesState="noKeyframes" value="test value" />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input?.disabled).toBe(true);
    });

    it('should disable input when disabled prop is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput isPort={false} keyframesState="noKeyframes" value="test value" disabled={true} />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input?.disabled).toBe(true);
    });

    it('should show port toggle button on hover when not port', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="test value"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const inputContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(inputContainer!);

        // Look for port toggle button (workflow icon)
        const toggleButtons = container.querySelectorAll('button');
        const portToggleButton = Array.from(toggleButtons).find(
            (button) => button.getAttribute('data-variant') === 'flat' && button.getAttribute('data-size') === 'xsmall',
        );

        expect(portToggleButton).toBeTruthy();
    });

    it('should show unlink button on hover when isPort is true', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput
                    isPort={true}
                    keyframesState="noKeyframes"
                    value="test value"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const inputContainer = container.querySelector('[data-disabled="true"]');
        fireEvent.mouseEnter(inputContainer!);

        // Look for unlink toggle button
        const toggleButtons = container.querySelectorAll('button');
        const unlinkToggleButton = Array.from(toggleButtons).find(
            (button) => button.getAttribute('data-variant') === 'flat' && button.getAttribute('data-size') === 'xsmall',
        );

        expect(unlinkToggleButton).toBeTruthy();
    });

    it('should call onTogglePort when port toggle is clicked', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="test value"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const inputContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(inputContainer!);

        const toggleButtons = container.querySelectorAll('button');
        const portToggleButton = Array.from(toggleButtons).find(
            (button) => button.getAttribute('data-variant') === 'flat' && button.getAttribute('data-size') === 'xsmall',
        );

        fireEvent.click(portToggleButton!);
        expect(mockOnTogglePort).toHaveBeenCalledTimes(1);
    });

    it('should call onToggleKeyframe when keyframe toggle is clicked', () => {
        const mockOnToggleKeyframe = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="test value"
                    onToggleKeyframe={mockOnToggleKeyframe}
                />
            </TestWrapper>,
        );

        const inputContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(inputContainer!);

        // Find keyframe toggle button
        const keyframeButton = container.querySelector('[data-state="noKeyframes"]');
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(mockOnToggleKeyframe).toHaveBeenCalledTimes(1);
    });

    it('should handle different keyframe states', () => {
        const { container: container1 } = render(
            <TestWrapper>
                <VisualEditorTextInput isPort={false} keyframesState="hasKeyframes" value="test value" />
            </TestWrapper>,
        );

        expect(container1.querySelector('[data-state="hasKeyframes"]')).toBeTruthy();

        const { container: container2 } = render(
            <TestWrapper>
                <VisualEditorTextInput isPort={false} keyframesState="isKeyframe" value="test value" />
            </TestWrapper>,
        );

        expect(container2.querySelector('[data-state="isKeyframe"]')).toBeTruthy();
    });
});
