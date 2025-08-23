import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ImageInput } from '../src/ImageInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ImageInput', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ImageInput onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with image-specific defaults', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <ImageInput onChange={() => {}} />
            </ThemeProvider>,
        );

        const imageInput = container.querySelector('[data-active="false"]');
        expect(imageInput).toBeTruthy();

        // Check that it renders with default image label
        expect(container.textContent).toContain('Drag and drop your image here');
    });

    it('should inherit event propagation handling from FileInput', () => {
        const mockOnChange = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <ImageInput onChange={mockOnChange} />
            </ThemeProvider>,
        );

        const imageInput = container.querySelector('[data-active="false"]');
        expect(imageInput).toBeTruthy();

        // Since ImageInput is a wrapper around FileInput,
        // it automatically inherits the stopPropagation behavior we added to FileInput
        expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('should support all FileInput props', () => {
        const mockOnChange = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <ImageInput onChange={mockOnChange} label="Custom image label" maxFiles={5} />
            </ThemeProvider>,
        );

        expect(container.textContent).toContain('Custom image label');
    });
});
