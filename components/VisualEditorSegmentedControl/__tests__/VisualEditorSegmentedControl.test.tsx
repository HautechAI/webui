import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { VisualEditorSegmentedControl } from '../src/VisualEditorSegmentedControl';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

const mockOptions = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
];

describe('VisualEditorSegmentedControl', () => {
    it('should render with basic props', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
                    testId="visual-editor-segmented-control"
                />
            </TestWrapper>,
        );

        expect(container.querySelector('[data-testid="visual-editor-segmented-control"]')).toBeTruthy();
    });

    it('should handle disabled state through wrapper', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
                    disabled={true}
                />
            </TestWrapper>,
        );

        const wrapperContainer = container.querySelector('[data-disabled="true"]'); // disabled=true makes it disabled
        expect(wrapperContainer).toBeTruthy();
    });

    it('should set disabled state when isPort is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={true}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
                />
            </TestWrapper>,
        );

        const wrapperContainer = container.querySelector('[data-disabled="true"]');
        expect(wrapperContainer).toBeTruthy();
    });

    it('should show toggles cluster on hover', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(mainContainer!);

        // Look for toggles cluster
        const togglesCluster = container.querySelector('[data-show="true"]');
        expect(togglesCluster).toBeTruthy();
    });

    it('should show port toggle button on hover when not port', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
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
                <VisualEditorSegmentedControl
                    isPort={true}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
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
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
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
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
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
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="hasKeyframes"
                    options={mockOptions}
                    value="center"
                />
            </TestWrapper>,
        );

        expect(container1.querySelector('[data-state="hasKeyframes"]')).toBeTruthy();

        const { container: container2 } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="isKeyframe"
                    options={mockOptions}
                    value="center"
                />
            </TestWrapper>,
        );

        expect(container2.querySelector('[data-state="isKeyframe"]')).toBeTruthy();
    });

    it('should handle focus events for toggles visibility', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
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

    it('should call onChange when segmented control value changes', () => {
        const mockOnChange = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
                    onChange={mockOnChange}
                />
            </TestWrapper>,
        );

        // Find a segmented control option and click it
        const leftOption = container.querySelector('[data-selected="false"]');
        if (leftOption) {
            fireEvent.click(leftOption);
            expect(mockOnChange).toHaveBeenCalledTimes(1);
        }
    });

    it('should not show toggles when disabled', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorSegmentedControl
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="center"
                    disabled={true}
                />
            </TestWrapper>,
        );

        const mainContainer = container.querySelector('[data-disabled="true"]'); // disabled=true
        fireEvent.mouseEnter(mainContainer!);

        // Toggles should not show when disabled
        const togglesCluster = container.querySelector('[data-show="true"]');
        expect(togglesCluster).toBeFalsy();
    });
});
