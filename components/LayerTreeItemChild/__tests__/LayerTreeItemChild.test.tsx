import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { LayerTreeItemChild } from '../src/LayerTreeItemChild';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const MockInput = () => <div data-testid="mock-input">Input Component</div>;

describe('LayerTreeItemChild', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <LayerTreeItemChild label="Test Label" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with provided label', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild label="Test Label" />
            </ThemeProvider>,
        );

        expect(getByText('Test Label')).toBeInTheDocument();
    });

    it('should render with optional input component', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild 
                    label="Test Label" 
                    input={<MockInput />}
                />
            </ThemeProvider>,
        );

        expect(getByTestId('mock-input')).toBeInTheDocument();
    });

    it('should call onSelect when container is clicked', () => {
        const mockOnSelect = vi.fn();
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild 
                    label="Test Label"
                    onSelect={mockOnSelect}
                />
            </ThemeProvider>,
        );

        fireEvent.click(getByText('Test Label'));
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });

    it('should enter edit mode when text is double-clicked', () => {
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild label="Test Label" />
            </ThemeProvider>,
        );

        const textElement = getByText('Test Label');
        fireEvent.doubleClick(textElement);
        
        // Should have an input element when in edit mode
        const input = container.querySelector('input');
        expect(input).toBeInTheDocument();
        expect(input?.value).toBe('Test Label');
    });

    it('should call onChange when text is edited and editing is finished', () => {
        const mockOnChange = vi.fn();
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild 
                    label="Test Label"
                    onChange={mockOnChange}
                />
            </ThemeProvider>,
        );

        // Start editing
        const textElement = getByText('Test Label');
        fireEvent.doubleClick(textElement);
        
        // Change the text
        const input = container.querySelector('input');
        if (input) {
            fireEvent.change(input, { target: { value: 'New Label' } });
            
            // Finish editing by pressing Enter
            fireEvent.keyDown(input, { key: 'Enter' });
            
            expect(mockOnChange).toHaveBeenCalledWith('New Label');
        }
    });

    it('should not call onSelect when in edit mode', () => {
        const mockOnSelect = vi.fn();
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild 
                    label="Test Label"
                    onSelect={mockOnSelect}
                />
            </ThemeProvider>,
        );

        // Start editing
        const textElement = getByText('Test Label');
        fireEvent.doubleClick(textElement);
        
        // Click on the container while editing
        const containerElement = container.firstChild;
        if (containerElement) {
            fireEvent.click(containerElement);
            expect(mockOnSelect).not.toHaveBeenCalled();
        }
    });

    it('should apply selected styling when selected prop is true', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemChild 
                    label="Test Label"
                    selected={true}
                />
            </ThemeProvider>,
        );

        const containerElement = container.firstChild as HTMLElement;
        expect(containerElement).toHaveStyle('background: var(--theme-palette-layout-surface-high)');
    });
});