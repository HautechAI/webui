import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ToolButton } from '../src/ToolButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ToolButton - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <ToolButton icon={<div>icon</div>} testId="my-test-tool" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-tool')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <ToolButton icon={<div>icon</div>} />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button?.getAttribute('data-testid')).toBeNull();
    });
});
