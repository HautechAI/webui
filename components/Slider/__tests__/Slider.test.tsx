import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Slider from '../src/Slider';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Slider', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Slider value={50} min={0} max={100} onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
