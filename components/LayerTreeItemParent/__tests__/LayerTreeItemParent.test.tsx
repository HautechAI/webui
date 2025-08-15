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
});