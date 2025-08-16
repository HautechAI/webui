import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Hint } from '../src/Hint';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Hint', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Hint hint="Test hint text">Test Hint</Hint>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
