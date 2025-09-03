import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextArea } from '../src/TextArea';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TextArea - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TextArea testId="my-test-textarea" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-textarea')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TextArea />
            </ThemeProvider>,
        );

        const textArea = container.firstChild;
        expect(textArea?.getAttribute?.('data-testid')).toBeNull();
    });
});
