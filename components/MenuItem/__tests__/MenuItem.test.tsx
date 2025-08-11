import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { MenuItem } from '../src/MenuItem';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('MenuItem', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <MenuItem>Test Item</MenuItem>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
