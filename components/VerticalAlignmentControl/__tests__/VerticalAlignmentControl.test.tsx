import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import VerticalAlignmentControl from '../src/VerticalAlignmentControl';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('VerticalAlignmentControl', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <VerticalAlignmentControl />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render all three alignment options', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl />
            </ThemeProvider>,
        );

        // Should have 3 options
        const options = container.querySelectorAll('[data-whitespace="m"]');
        expect(options.length).toBe(3);
    });

    it('should apply whitespace="m" to all options', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl />
            </ThemeProvider>,
        );

        const whitespaceItems = container.querySelectorAll('[data-whitespace="m"]');
        expect(whitespaceItems.length).toBe(3);
    });

    it('should call onChange when an option is clicked', () => {
        const mockOnChange = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl onChange={mockOnChange} />
            </ThemeProvider>,
        );

        const firstOption = container.querySelector('[data-whitespace="m"]');
        expect(firstOption).toBeInTheDocument();

        fireEvent.click(firstOption!);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), 'top');
    });

    it('should select the correct value', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl value="middle" />
            </ThemeProvider>,
        );

        // The second option (middle) should be selected - both row and icon have data-selected
        const selectedRows = container.querySelectorAll('[data-whitespace="m"][data-selected="true"]');
        expect(selectedRows.length).toBe(1);
    });

    it('should work with different sizes', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl size="small" />
            </ThemeProvider>,
        );

        const smallSizeItems = container.querySelectorAll('[data-size="small"]');
        expect(smallSizeItems.length).toBe(3);
    });

    it('should default to default size when no size prop is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl />
            </ThemeProvider>,
        );

        const defaultSizeItems = container.querySelectorAll('[data-size="default"]');
        expect(defaultSizeItems.length).toBe(3);
    });

    it('should handle all alignment values correctly', () => {
        const mockOnChange = vi.fn();
        const { container, rerender } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl value="top" onChange={mockOnChange} />
            </ThemeProvider>,
        );

        // Test top alignment
        let selectedRows = container.querySelectorAll('[data-whitespace="m"][data-selected="true"]');
        expect(selectedRows.length).toBe(1);

        // Test middle alignment
        rerender(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl value="middle" onChange={mockOnChange} />
            </ThemeProvider>,
        );
        selectedRows = container.querySelectorAll('[data-whitespace="m"][data-selected="true"]');
        expect(selectedRows.length).toBe(1);

        // Test bottom alignment
        rerender(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl value="bottom" onChange={mockOnChange} />
            </ThemeProvider>,
        );
        selectedRows = container.querySelectorAll('[data-whitespace="m"][data-selected="true"]');
        expect(selectedRows.length).toBe(1);
    });

    it('should handle onChange with correct alignment values when clicking different options', () => {
        const mockOnChange = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VerticalAlignmentControl onChange={mockOnChange} />
            </ThemeProvider>,
        );

        const options = container.querySelectorAll('[data-whitespace="m"]');

        // Click top (first option)
        fireEvent.click(options[0]);
        expect(mockOnChange).toHaveBeenLastCalledWith(expect.any(Object), 'top');

        // Click middle (second option)
        fireEvent.click(options[1]);
        expect(mockOnChange).toHaveBeenLastCalledWith(expect.any(Object), 'middle');

        // Click bottom (third option)
        fireEvent.click(options[2]);
        expect(mockOnChange).toHaveBeenLastCalledWith(expect.any(Object), 'bottom');

        expect(mockOnChange).toHaveBeenCalledTimes(3);
    });
});
