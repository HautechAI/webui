import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Zoom } from '../src/Zoom';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Zoom', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Zoom value={100} onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should display the correct percentage value', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={100} onChange={() => {}} />
            </ThemeProvider>,
        );

        expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('should round decimal values', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={123.7} onChange={() => {}} />
            </ThemeProvider>,
        );

        expect(screen.getByText('124%')).toBeInTheDocument();
    });

    it('should call onChange when minus button is clicked', () => {
        const onChange = vi.fn();
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={100} onChange={onChange} />
            </ThemeProvider>,
        );

        const minusButton = screen.getAllByRole('button')[0];
        fireEvent.click(minusButton);

        expect(onChange).toHaveBeenCalledWith(90);
    });

    it('should call onChange when plus button is clicked', () => {
        const onChange = vi.fn();
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={100} onChange={onChange} />
            </ThemeProvider>,
        );

        const plusButton = screen.getAllByRole('button')[1];
        fireEvent.click(plusButton);

        expect(onChange).toHaveBeenCalledWith(110);
    });

    it('should handle different zoom values correctly', () => {
        const onChange = vi.fn();
        const { rerender } = render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={50} onChange={onChange} />
            </ThemeProvider>,
        );

        expect(screen.getByText('50%')).toBeInTheDocument();

        // Test increment from 50 (which is exact step boundary) - should go to 60
        const plusButton = screen.getAllByRole('button')[1];
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(60);

        // Test decrement from different value
        rerender(
            <ThemeProvider theme={testTheme}>
                <Zoom value={200} onChange={onChange} />
            </ThemeProvider>,
        );

        expect(screen.getByText('200%')).toBeInTheDocument();

        const minusButton = screen.getAllByRole('button')[0];
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(190);
    });

    it('should use custom step value when provided', () => {
        const onChange = vi.fn();
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={100} onChange={onChange} step={25} />
            </ThemeProvider>,
        );

        // Test increment with custom step (from exact boundary)
        const plusButton = screen.getAllByRole('button')[1];
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(125);

        // Test decrement with custom step (from exact boundary)
        const minusButton = screen.getAllByRole('button')[0];
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(75);
    });

    it('should use default step of 10 when step is not provided', () => {
        const onChange = vi.fn();
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={100} onChange={onChange} />
            </ThemeProvider>,
        );

        // Test increment with default step
        const plusButton = screen.getAllByRole('button')[1];
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(110);

        // Test decrement with default step
        const minusButton = screen.getAllByRole('button')[0];
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(90);
    });

    it('should round to previous and next step multiples for non-step values', () => {
        const onChange = vi.fn();
        render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={123.7} onChange={onChange} step={10} />
            </ThemeProvider>,
        );

        // Test decrement - should round down to 120
        const minusButton = screen.getAllByRole('button')[0];
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(120);

        onChange.mockClear();

        // Test increment - should round up to 130
        const plusButton = screen.getAllByRole('button')[1];
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(130);
    });

    it('should handle step rounding for various values', () => {
        const onChange = vi.fn();
        const { rerender } = render(
            <ThemeProvider theme={testTheme}>
                <Zoom value={67} onChange={onChange} step={25} />
            </ThemeProvider>,
        );

        // Test decrement with step 25 from 67 - should go to 50
        const minusButton = screen.getAllByRole('button')[0];
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(50);

        onChange.mockClear();

        // Test increment with step 25 from 67 - should go to 75
        const plusButton = screen.getAllByRole('button')[1];
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(75);

        onChange.mockClear();

        // Test with exact step boundary
        rerender(
            <ThemeProvider theme={testTheme}>
                <Zoom value={75} onChange={onChange} step={25} />
            </ThemeProvider>,
        );

        // From exact boundary, minus should go to previous step
        fireEvent.click(minusButton);
        expect(onChange).toHaveBeenCalledWith(50);

        onChange.mockClear();

        // From exact boundary, plus should go to next step
        fireEvent.click(plusButton);
        expect(onChange).toHaveBeenCalledWith(100);
    });
});
