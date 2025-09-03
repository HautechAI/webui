import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AspectRatio } from '../src/AspectRatio';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('AspectRatio testId', () => {
    const mockProps = {
        options: ['16:9', '4:3', '1:1'],
        defaultOptions: ['16:9', '4:3', '1:1'] as [string, string, string],
        sizeForRatio: (_aspectRatio: string) => ({ width: 16, height: 9 }),
    };

    it('should render with data-testid when testId is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <AspectRatio {...mockProps} testId="test-aspect-ratio" />
            </ThemeProvider>,
        );

        const aspectRatio = container.querySelector('[data-testid="test-aspect-ratio"]');
        expect(aspectRatio).toBeInTheDocument();
    });

    it('should not render data-testid when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <AspectRatio {...mockProps} />
            </ThemeProvider>,
        );

        const aspectRatioWithTestId = container.querySelector('[data-testid]');
        expect(aspectRatioWithTestId).toBeNull();
    });
});
