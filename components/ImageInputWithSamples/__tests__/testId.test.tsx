import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ImageInputWithSamples } from '../src/ImageInputWithSamples';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ImageInputWithSamples - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <ImageInputWithSamples testId="my-test-imageinputwithsamples" onUpload={() => {}} samples={[]} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-imageinputwithsamples')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <ImageInputWithSamples onUpload={() => {}} samples={[]} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
