import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ImageInputWithSamples } from '../src/ImageInputWithSamples';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ImageInputWithSamples', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ImageInputWithSamples onUpload={() => {}} samples={[]} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
