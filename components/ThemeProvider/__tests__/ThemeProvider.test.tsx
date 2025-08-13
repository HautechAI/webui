import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '../src/ThemeProvider';
import { testTheme } from '../../test-theme';

describe('ThemeProvider', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <div>Test content</div>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
