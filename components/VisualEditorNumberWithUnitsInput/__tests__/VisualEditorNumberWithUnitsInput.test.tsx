import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { VisualEditorNumberWithUnitsInput } from '../src/VisualEditorNumberWithUnitsInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorNumberWithUnitsInput', () => {
    it('should render with basic props', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    testId="visual-editor-number-input"
                />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input).toBeTruthy();
        expect(input?.value).toBe('100');
    });

    it('should disable input when isPort is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={true}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input?.disabled).toBe(true);
    });

    it('should disable input when disabled prop is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    disabled={true}
                />
            </TestWrapper>,
        );

        const input = container.querySelector('input');
        expect(input?.disabled).toBe(true);
    });

    it('should show hover controls on mouse enter', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(mainContainer!);

        // Look for hover controls container
        const hoverControls = container.querySelector('[data-show="true"]');
        expect(hoverControls).toBeTruthy();
    });

    it('should show port toggle button on hover when not port', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(mainContainer!);

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
                <VisualEditorNumberWithUnitsInput
                    isPort={true}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="true"]');
        fireEvent.mouseEnter(mainContainer!);

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
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(mainContainer!);

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
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                    onToggleKeyframe={mockOnToggleKeyframe}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(mainContainer!);

        // Find keyframe toggle button
        const keyframeButton = container.querySelector('[data-state="noKeyframes"]');
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(mockOnToggleKeyframe).toHaveBeenCalledTimes(1);
    });

    it('should handle different keyframe states', () => {
        const { container: container1 } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="hasKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                />
            </TestWrapper>,
        );

        expect(container1.querySelector('[data-state="hasKeyframes"]')).toBeTruthy();

        const { container: container2 } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="isKeyframe"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                />
            </TestWrapper>,
        );

        expect(container2.querySelector('[data-state="isKeyframe"]')).toBeTruthy();
    });

    it('should handle focus events for hover controls', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    value="100"
                    units="px"
                    availableUnits={['px', '%', 'em']}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="false"]');

        // Test focus
        fireEvent.focusIn(mainContainer!);
        expect(container.querySelector('[data-show="true"]')).toBeTruthy();

        // Test blur
        fireEvent.focusOut(mainContainer!);
        expect(container.querySelector('[data-show="false"]')).toBeTruthy();
    });
});
