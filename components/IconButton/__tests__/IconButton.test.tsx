import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { IconButton } from '../src/IconButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('IconButton', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <IconButton icon="test" onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with primary variant', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <IconButton variant="primary" icon="test" onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should apply correct data attributes for primary variant', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <IconButton variant="primary" size="medium" icon="test" />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button).toHaveAttribute('data-variant', 'primary');
        expect(button).toHaveAttribute('data-size', 'medium');
    });
});
