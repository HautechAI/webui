import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Menu } from '../src/Menu';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Menu', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Menu options={[{ label: 'Test Item', value: 'test' }]} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
