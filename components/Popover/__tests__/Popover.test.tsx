import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Popover } from '../src/Popover';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Popover', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Popover isOpen={true}>Test Popover</Popover>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
