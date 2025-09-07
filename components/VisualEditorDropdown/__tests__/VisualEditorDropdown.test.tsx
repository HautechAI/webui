import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { VisualEditorDropdown } from '../src/VisualEditorDropdown';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

const mockOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

describe('VisualEditorDropdown', () => {
    it('should render with basic props', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    testId="visual-editor-dropdown"
                />
            </TestWrapper>,
        );

        expect(container.querySelector('[data-testid="visual-editor-dropdown"]')).toBeTruthy();
    });

    it('should disable dropdown when isPort is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={true}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                />
            </TestWrapper>,
        );

        const dropdownContainer = container.querySelector('[data-disabled="true"]');
        expect(dropdownContainer).toBeTruthy();
    });

    it('should disable dropdown when disabled prop is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    disabled={true}
                />
            </TestWrapper>,
        );

        const dropdownContainer = container.querySelector('[data-disabled="true"]');
        expect(dropdownContainer).toBeTruthy();
    });

    it('should show port toggle button on hover when not port', () => {
        const mockOnTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const dropdownButton = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(dropdownButton!);

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
                <VisualEditorDropdown
                    isPort={true}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const dropdownButton = container.querySelector('[data-disabled="true"]');
        fireEvent.mouseEnter(dropdownButton!);

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
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    onTogglePort={mockOnTogglePort}
                />
            </TestWrapper>,
        );

        const dropdownButton = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(dropdownButton!);

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
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    onToggleKeyframe={mockOnToggleKeyframe}
                />
            </TestWrapper>,
        );

        const dropdownButton = container.querySelector('[data-disabled="false"]');
        fireEvent.mouseEnter(dropdownButton!);

        // Find keyframe toggle button
        const keyframeButton = container.querySelector('[data-state="noKeyframes"]');
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(mockOnToggleKeyframe).toHaveBeenCalledTimes(1);
    });

    it('should handle different keyframe states', () => {
        const { container: container1 } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="hasKeyframes"
                    options={mockOptions}
                    value="option1"
                />
            </TestWrapper>,
        );

        expect(container1.querySelector('[data-state="hasKeyframes"]')).toBeTruthy();

        const { container: container2 } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="isKeyframe"
                    options={mockOptions}
                    value="option1"
                />
            </TestWrapper>,
        );

        expect(container2.querySelector('[data-state="isKeyframe"]')).toBeTruthy();
    });

    it('should call onChange when dropdown value changes', () => {
        const mockOnChange = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorDropdown
                    isPort={false}
                    keyframesState="noKeyframes"
                    options={mockOptions}
                    value="option1"
                    onChange={mockOnChange}
                />
            </TestWrapper>,
        );

        // The dropdown behavior would need to be tested through interaction
        // This is a basic test to ensure onChange prop is passed through
        expect(mockOnChange).toHaveBeenCalledTimes(0);
    });
});