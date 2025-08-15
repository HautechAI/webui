import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { LayerTreeItemParent } from '../src/LayerTreeItemParent';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';
import { FolderIcon } from '../../Icon/src';

describe('LayerTreeItemParent', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <LayerTreeItemParent 
                        icon={<FolderIcon data-testid="test-icon" />}
                        label="Test Label"
                    />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with provided icon and label', () => {
        const { getByText, getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon data-testid="test-icon" />}
                    label="Test Label"
                />
            </ThemeProvider>,
        );

        expect(getByText('Test Label')).toBeInTheDocument();
        expect(getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should call onExpandToggle when expand button is clicked', () => {
        const mockOnExpandToggle = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon />}
                    label="Test Label"
                    onExpandToggle={mockOnExpandToggle}
                />
            </ThemeProvider>,
        );

        const expandButton = container.querySelector('button');
        if (expandButton) {
            fireEvent.click(expandButton);
            expect(mockOnExpandToggle).toHaveBeenCalledTimes(1);
        }
    });

    it('should call onClick when content is clicked', () => {
        const mockOnClick = vi.fn();
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon />}
                    label="Test Label"
                    onClick={mockOnClick}
                />
            </ThemeProvider>,
        );

        fireEvent.click(getByText('Test Label'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should enter edit mode when text is double-clicked and editable is true', () => {
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon />}
                    label="Test Label"
                    editable={true}
                />
            </ThemeProvider>,
        );

        const textElement = getByText('Test Label');
        fireEvent.doubleClick(textElement);
        
        // Should have an input element when in edit mode
        const input = container.querySelector('input');
        expect(input).toBeInTheDocument();
        expect(input?.value).toBe('Test Label');
    });

    it('should not enter edit mode when editable is false', () => {
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon />}
                    label="Test Label"
                    editable={false}
                />
            </ThemeProvider>,
        );

        const textElement = getByText('Test Label');
        fireEvent.doubleClick(textElement);
        
        // Should not have an input element when not editable
        const input = container.querySelector('input');
        expect(input).not.toBeInTheDocument();
    });

    it('should call onChange when text is edited and editing is finished', () => {
        const mockOnChange = vi.fn();
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon />}
                    label="Test Label"
                    editable={true}
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

    it('should not call onClick when in edit mode', () => {
        const mockOnClick = vi.fn();
        const { getByText, container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent 
                    icon={<FolderIcon />}
                    label="Test Label"
                    editable={true}
                    onClick={mockOnClick}
                />
            </ThemeProvider>,
        );

        // Start editing
        const textElement = getByText('Test Label');
        fireEvent.doubleClick(textElement);
        
        // Click on the content area while editing
        const content = container.querySelector('input')?.closest('div');
        if (content) {
            fireEvent.click(content);
            expect(mockOnClick).not.toHaveBeenCalled();
        }
    });
});